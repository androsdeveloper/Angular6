
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {Assign} from'./assign.model';

@Injectable({
  providedIn: 'root'
})
export class AssignService {
  selectedAssign : Assign;
  assignList : Assign[];
  constructor(private http : Http) { } 
  
  postAssign(emp : Assign){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:61866/api/assigns',body,requestOptions).map(x => x.json());
  }
 
  putAssign(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:61866/api/assigns/' + id,
      body,
      requestOptions).map(res => res.json());
  }
 
  getAssignList(){
    this.http.get('http://localhost:61866/api/assigns')
    .map((data : Response) =>{
      
      return Array.from(data.json() as Assign[]);
    }).toPromise().then(x => {
      this.assignList = x;
    })
  }

  getAssignListForSelect(){
    return this.http.get('http://localhost:61866/api/assigns');
   
  }
 
  deleteAssign(id: number) {
    return this.http.delete('http://localhost:61866/api/assigns/' + id).map(res => res.json());
  }

}

 