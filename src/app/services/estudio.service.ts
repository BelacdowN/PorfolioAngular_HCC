import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  url:string= "https://portfolio-belacdown.koyeb.app/estudio/";
  constructor(private httpClient:HttpClient) { }

    public lista(): Observable<Estudio[]>{
      return this.httpClient.get<Estudio[]>(this.url + 'lista');
    }

    public listaPer(id: number): Observable<Estudio[]>{
      return this.httpClient.get<Estudio[]>(this.url + `persona/${id}/lista`);
    }
 
    public detail(id: number):Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.url + `detail/${id}`);
    }
  
    public save(Estudio: Estudio):Observable<any>{
      return this.httpClient.post<any>(this.url + 'create', Estudio);
      }
  
    public edit(Estudio: Estudio):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Estudio);
      }
  
    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

  
}
