import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  url:string= "https://portfolio-belacdown.koyeb.app/red/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Red>{
  return this.httpClient.get<Red>(this.url + `detail/${id}`);  
  }

  public save(red: Red):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', red);
    }

  public update(red: Red):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', red);
     }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

}
