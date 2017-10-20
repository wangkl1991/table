import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TableService {
  private url = "../assets/table.json";
  constructor(private http: Http) { }
  getPosts() {      
    return this.http.get(this.url)
                     .map(res => res.json());

}

}
