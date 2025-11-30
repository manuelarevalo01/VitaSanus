import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vitasanus-web');

  /**
   * Get current year for copyright in footer
   */
  protected getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
