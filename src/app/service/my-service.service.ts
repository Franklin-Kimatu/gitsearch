import { Injectable } from '@angular/core';
import { GitsearchUser } from '../user/gitsearch-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import{ Repositories } from '../repository/repositories';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  users:GitsearchUser[]=[];
  constructor(public http:HttpClient) { }

  searchUsers(searchTerm:string){
    let searchEndPoint = "https://api.github.com/users/"+searchTerm+"?access_token="+ environment.GITSEARCHAPIKEY;
    // searchEndPoint= searchEndPoint+ "&q"+searchTerm;
    let promise = new Promise((resolve,reject)=>{
      this.http.get(searchEndPoint).toPromise().then(
        (results)=>{
          let name = results;
          // let image = results["avatar_url"]
          // console.log(name);
          // console.log(results["name"])
           this.users=[];
          // let use =new GitsearchUser("","",name,23,0,0,"");
         // let us= use.name;
          this.users.push(name);
          // this.users.push(image);

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