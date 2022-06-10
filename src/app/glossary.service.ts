import { Constants } from './config/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {

  constructor(private http: HttpClient, private constant: Constants) { }


  public getListOfTerm() {
    return this.http.get(this.constant.API_ENDPOINT);
  }

  public addTerm(data: any) {
    return this.http.post(this.constant.API_ENDPOINT, data);
  }

  public getTermById(id: string) {
    return this.http.get(this.constant.API_ENDPOINT + "/" + id);
  }

  public updateTerm(id: string, data: any) {
    return this.http.put(this.constant.API_ENDPOINT + "/" + id, data);
  }

  public removeTerm(id: string) {
    return this.http.delete(this.constant.API_ENDPOINT + "/" + id);
  }
}
