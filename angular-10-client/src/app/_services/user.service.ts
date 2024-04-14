import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Existing methods for fetching content based on roles
  getPublicContent(): Observable<any> {
    return this.http.get(BASE_URL + 'test/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(BASE_URL + 'test/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(BASE_URL + 'test/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(BASE_URL + 'test/admin', { responseType: 'text' });
  }

  // Methods for user management
  getAllUsers(): Observable<any> {
    return this.http.get(BASE_URL + 'user/list');
  }

  // Angular service to update user roles
updateUserRoles(userId: number, roles: string[]): Observable<any> {
  return this.http.put(`${BASE_URL}user/${userId}/roles`, { roles });
}

// Angular service to add a user
addUser(user): Observable<any> {
  return this.http.post(BASE_URL + 'user/add', user);
}

updateUser(userId: number, user: any): Observable<any> {
  return this.http.put(`${BASE_URL}user/${userId}`, user);
}




  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${BASE_URL}user/${userId}`);
  }
  

  
  



 
}
