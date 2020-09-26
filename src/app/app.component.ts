import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoading = false;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.handleEvent(routerEvent);
    });
  }

  private handleEvent(event: Event): void {
    if (event instanceof NavigationStart) { this.isLoading = true; }
    if (
      event instanceof NavigationEnd
      || event instanceof NavigationError
      || event instanceof NavigationCancel) {
        this.isLoading = false;
      }
  }
}
