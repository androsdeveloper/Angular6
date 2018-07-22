
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {Insurance} from'./insurance.model'
 
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  selectedInsurance : Insurance;
  insuranceList : Insurance[];
  constructor(private http : Http) { }
 
  postInsurance(emp : Insurance){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:61866/api/Insurances',body,requestOptions).map(x => x.json());
  }
 
  putInsurance(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:61866/api/Insurances/' + id,
      body,
      requestOptions).map(res => res.json());
  }
 
  getInsuranceList(){
    this.http.get('http://localhost:61866/api/Insurances')
    .map((data : Response) =>{
      
      return Array.from(data.json() as Insurance[]);
    }).toPromise().then(x => {
      this.insuranceList = x;
    })
  }

  getInsuranceListForSelect(){
    return this.http.get('http://localhost:61866/api/Insurances');
   
  }
 
  deleteInsurance(id: number) {
    return this.http.delete('http://localhost:61866/api/Insurances/' + id).map(res => res.json());
  }



  
}