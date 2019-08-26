import { Injectable } from '@angular/core';
import { GitsearchUser } from '../user/gitsearch-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  users:GitsearchUser[]=[];
  
  constructor(public http:HttpClient) { }

  searchUsers(searchTerm:string){
    let searchEndPoint = "https://api.github.com/users/"+searchTerm+"?access_token="+environment.GITSEARCHAPIKEY;
    
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get(searchEndPoint).toPromise().then(
        (results)=>{
          let name:any = results;
           this.users=[];
          this.users.push(name);
          
          console.log(this.users);
          resolve()
        },
        (error)=>{
          console.log(error);
          reject()
        }
      )
    })
    return promise;

  }
}