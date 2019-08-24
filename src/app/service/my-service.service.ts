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
    let searchEndPoint = "https://api.github.com/users/"+searchTerm+"?access_token="+ environment.GITSEARCHAPIKEY;
    // searchEndPoint= searchEndPoint+ "&q"+searchTerm;
    let promise = new Promise((resolve,reject)=>{
      this.http.get(searchEndPoint).toPromise().then(
        (results)=>{
          let name = results["name"];
          console.log(name);
          // console.log(results["name"])
           this.users=[];
          // let name = results["name"];
          // let use =new GitsearchUser("",name,23,0,0,"");
          this.users.push(name);

          // console.log(this.users);
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