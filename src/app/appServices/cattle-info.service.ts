import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CattleInfoService {

  constructor(private http:HttpClient) { }

  receiveCattleInfo():Observable<any>
  {
     return this.http.get('/api/getAnimals');
  }
}
