import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Button Component - VitaSanus Design System
 *
 * @example
 * <app-button variant="primary" size="md" (click)="handleClick()">
 *   Comenzar Ahora
 * </app-button>
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="buttonClasses"
      (click)="handleClick($event)"
    >
      <span *ngIf="loading" class="loading-spinner"></span>
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .loading-spinner {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: spin 0.6s linear infinite;
      margin-right: 0.5rem;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
      primary: 'bg-vs-primary hover:bg-vs-primary-dark text-white shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 focus:ring-vs-primary',
      secondary: 'border-2 border-vs-primary text-vs-primary hover:bg-vs-accent hover:border-vs-accent focus:ring-vs-primary',
      outline: 'border-2 border-vs-border text-vs-text hover:bg-vs-muted-bg focus:ring-vs-primary',
      ghost: 'text-vs-primary hover:bg-primary-50 focus:ring-vs-primary'
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-xl'
    };

    const widthClass = this.fullWidth ? 'w-full' : '';

    return [
      baseClasses,
      variantClasses[this.variant],
      sizeClasses[this.size],
      widthClass
    ].filter(Boolean).join(' ');
  }

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
