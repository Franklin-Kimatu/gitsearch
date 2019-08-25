import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Repositories } from '../repository/repositories';
import { environment } from '../../environments/environment';
import{ GitsearchFormComponent } from '../gitsearch-form/gitsearch-form.component'
@Injectable({
  providedIn: 'root'
})
export class MyService2Service {

  repos:Repositories;
  searchTerm:GitsearchFormComponent;

  searchReposities(searchTerm:string){
interface najiskia{
  name:string;
  html_url:any;
  created_at:string;
}

    let searchRepoUrl = "https://api.github.com/users/"+ searchTerm+ "/repos?";
    let token ="?access_token="+ environment.GITSEARCHAPIKEY;
    let searchRepoEndPoint= searchRepoUrl +token;
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<najiskia>(searchRepoEndPoint).toPromise().then(
        (results)=>{
          
          this.repos= results;
          // for(let i=0; i<results["any"].legth;i++){
          //   let repoName:any=results["any"][i];
          //   this.repos.push();
          // }
          
          
          // console.log(this.repos);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject()
        }
      )
    })
    return promise;
  }


  constructor(  public http:HttpClient) { }
}
// https://api.github.com/users/Franklin-Kimatu/repos?access_token=23998e592593b005337d2544e6700fa73e21da39