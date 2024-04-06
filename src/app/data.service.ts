import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getdata(data:any){
    this.http.post('https://reqres.in/api/login',data).subscribe((data: any)=>{
      console.log(data);
      
    })
  }
}
