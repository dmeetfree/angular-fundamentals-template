import { Inject, Injectable, InjectionToken } from "@angular/core";

const TOKEN = "SESSION_TOKEN"; // Use this constant for the session storage entry key
// Add your code here

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window
})

@Injectable({
  providedIn: "root",
})
export class SessionStorageService {

  constructor(@Inject(WINDOW) private ngWindow: Window) { }
  
  setToken(token: string) {
    // Add your code here
  }

  getToken() {
    // Add your code here
  }

  deleteToken() {
    // Add your code here
  }
}
