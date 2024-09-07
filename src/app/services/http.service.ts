import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BASE_URL = environment.baseUrl;
  constructor(private http: HttpClient) { }

  get(url: string, params?: { [key: string]: any }): Promise<any> {
    try {
      if (params) {
        return firstValueFrom(this.http.get(this.BASE_URL + url, { params }));
      } else {
        return firstValueFrom(this.http.get(this.BASE_URL + url));
      }
    } catch (error) {
      throw error;
    }
  }

  async getImage(imageUrl: string): Promise<Blob> {
    return firstValueFrom(this.http.get(this.BASE_URL + imageUrl, { responseType: 'blob' }));
  }

  post(url: string, body: any): Promise<any> {
    try {
      return firstValueFrom(this.http.post(this.BASE_URL + url, body));
    } catch (error) {
      console.log('errroe', error);
      throw error;
    }
  }

  put(url: string, body: any): Promise<any> {
    try {
      return firstValueFrom(this.http.put(this.BASE_URL + url, body));
    } catch (error) {
      throw error;
    }
  }

  delete(url: string, body: any): Promise<any> {
    try {
      return firstValueFrom(this.http.delete(this.BASE_URL + url, body));
    } catch (error) {
      throw error;
    }
  }
  deleteWithID(url: string): Promise<any> {
    try {
      return firstValueFrom(this.http.delete(this.BASE_URL + url));
    } catch (error) {
      throw error;
    }
  }

  getToken() {
    //This is for Local
    let userDetails: any = localStorage.getItem(`userDetail`);
    if (userDetails) {
      return JSON.parse(userDetails).token;
    } else {
      return null;
    }
   
  }
}
