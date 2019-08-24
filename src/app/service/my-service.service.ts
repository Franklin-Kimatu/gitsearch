import { Injectable } from '@angular/core';
import { GitsearchUser } from '../user/gitsearch-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  users:GitsearchUser[];
  constructor(private http:HttpClient) { }

  searchUsers(searchTerm:string){
    let searchEndPoint = "https://api.github.com/users/Franklin-Kimatu?access_token="+ environment.GITSEARCHAPIKEY;
    searchEndPoint= searchEndPoint+ "&q"+searchTerm;
    let promise = new Promise((resolve,reject)=>{
      this.http.get(searchEndPoint).toPromise().then(
        (results)=>{
          this.users=[];
          let url = results["url"];
          let use =new GitsearchUser("","",0,0,0,url);
          this.users.push(use);

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
// console.log(searchTerm)