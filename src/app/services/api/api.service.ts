import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // can be configured
  private baseUrl = 'http://localhost:4000/api';

  constructor() { }
}
