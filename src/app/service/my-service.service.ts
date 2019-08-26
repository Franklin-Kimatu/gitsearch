import { Injectable } from '@angular/core';
import { GitsearchUser } from '../user/gitsearch-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  users:GitsearchUser[]=[];
  // repos:Repositories[];
  constructor(public http:HttpClient) { }

  searchUsers(searchTerm:string){
    let searchEndPoint = "https://api.github.com/users/"+searchTerm+"?access_token=23998e592593b005337d2544e6700fa73e21da39";
    
    // searchEndPoint= searchEndPoint+ "&q"+searchTerm;
    let promise = new Promise((resolve,reject)=>{
      this.http.get(searchEndPoint).toPromise().then(
        (results)=>{
          let name:any = results;
          //let repo:any= results["repos_url"];
          // let image = results["avatar_url"]
          // console.log(name);
          // console.log(results["name"])
           this.users=[];
          // let use =new GitsearchUser("","",name,23,0,0,"");
         // let us= use.name;
          this.users.push(name);
          //this.users.push(repo);
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

    // let urlRepository = "https://api.github.com/users/";
    //  let token = "?access_token="+ environment.GITSEARCHAPIKEY;
    // let repoSearchPoint = urlRepository
    //  let repoPromise = new Promise((resolve,reject)=>{
    //    this.http.get<repositoryData>(this.urlRepository+searchTerm)
    //  })
    //  return repoPromise;
  }
}
// console.log(searchTerm)