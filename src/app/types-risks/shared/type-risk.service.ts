import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {TypeRiskModel} from'./type-risk.model'

@Injectable({
  providedIn: 'root'
})
export class TypeRiskService {
selectedTypeRisk: TypeRiskModel;
typeRiskList: TypeRiskModel[];
  constructor(private http:Http) { }

   getTypeRiskList(){
    
    this.http.get('http://localhost:61866/api/typerisks')
    .map((data : Response) =>{  
debugger;
    return data.json() as TypeRiskModel[];
    
    }).toPromise().then(x => {
      this.typeRiskList = x;
    })
  }
 
  getTypeRiskList2(){
    
    return this.http.get('http://localhost:61866/api/typerisks')
    
  }
  
}

