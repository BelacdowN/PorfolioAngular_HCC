import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url:string= "/servidor/proyecto/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Proyecto>{
  return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);  
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', proyecto);
  }
 
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

  public edit(proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update' ,proyecto );
    }

  
}
