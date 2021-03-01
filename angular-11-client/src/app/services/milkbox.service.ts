import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MilkBox } from '../models/milkbox.model';

const baseUrl = 'http://localhost:8080/api/milkboxes';

@Injectable({
  providedIn: 'root'
})
export class MilkBoxService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<MilkBox[]> {
    return this.http.get<MilkBox[]>(baseUrl);
  }

  get(id: any): Observable<MilkBox> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNome(title: any): Observable<MilkBox[]> {
    return this.http.get<MilkBox[]>(`${baseUrl}?nome=${title}`);
  }
}
