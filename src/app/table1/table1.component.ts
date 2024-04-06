import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component {
  public getJsonValue:any
  public postJsonVale:any
  public displayedColumns:string[]=['id','email','first_name','last_name','avatar']
  public dataSource:any=[]

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.getMethod();

  }
  public getMethod(){
    this.http.get('https://reqres.in/api/users?page=2').subscribe((data:any)=>{
      console.log(data);
      this.getJsonValue=data
      this.dataSource=data.data
    })
  }

}
