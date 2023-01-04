import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url: string= "https://portfolio-belacdown.koyeb.app/habilidad/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Habilidad>{
  return this.httpClient.get<Habilidad>(this.url + `detail/${id}`);  
  }

  public save(Habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', Habilidad);
    }

  public edit(Habilidad: Habilidad):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Habilidad);
      }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }


}
