import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {TypeCovering} from'./type-covering.model'
@Injectable({
  providedIn: 'root'
})
export class TypeCoveringService {

  selectedTypeCovering: TypeCovering;
  typeCoveringList: TypeCovering[];
    constructor(private http:Http) { }
  
     getTypeCoveringList(){
      
      this.http.get('http://localhost:61866/api/typecoverings')
      .map((data : Response) =>{  

      return data.json() as TypeCovering[];
      
      }).toPromise().then(x => {
        this.typeCoveringList = x;
      })
    }
   
    getTypeCoveringSelect(){
      
      return this.http.get('http://localhost:61866/api/typecoverings')
      
    }
}


