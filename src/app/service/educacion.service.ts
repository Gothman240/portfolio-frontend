import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = 'http://localhost:8080/educacion/';

  constructor(private htpp: HttpClient) { }

  public lista():Observable<Educacion[]> {
    return this.htpp.get<Educacion[]> (this.url + 'lista');
  }

  public detail(id: number):Observable<Educacion>{
    return this.htpp.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(educacion: Educacion):Observable<any>{
    return this.htpp.post<any>(this.url + 'create', educacion);
  }

  public update(id: number,educacion:Educacion):Observable<any>{
    return this.htpp.put<any>(this.url + `update/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.htpp.delete<any>(this.url + `delete/${id}`);
  }
}