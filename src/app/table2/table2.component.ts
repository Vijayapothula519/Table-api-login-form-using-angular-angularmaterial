import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  public postJsonValue:any
  public getJsonValue:any
  public displayedColumns:string[]=['id','name','username','email']
  public dataSource:any=[]

  constructor(private http:HttpClient){}
  user:Observable<any>=of([]);

  ngOnInit():void{
    this.getMethod()
  }
  public getMethod(){
    this.user  = this.http.get('https://jsonplaceholder.typicode.com/users')
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
    //   console.log(data);
    //   this.getJsonValue=data;
    //   this.dataSource=data
      
    // })

      
  
  }
  
}
