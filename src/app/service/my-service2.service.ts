import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Repositories } from '../repository/repositories';
import { environment } from '../../environments/environment';
import{ GitsearchFormComponent } from '../gitsearch-form/gitsearch-form.component'
@Injectable({
  providedIn: 'root'
})
export class MyService2Service {

  repos:Repositories[]=[];
  searchTerm:GitsearchFormComponent;

  searchReposities(searchTerm:string){
    let searchRepoUrl = "https://api.github.com/users/"+ searchTerm+ "/repos";
    let token ="?access_token="+ environment.GITSEARCHAPIKEY;
    let searchRepoEndPoint= searchRepoUrl +token;
    let promise = new Promise ((resolve,reject)=>{
      this.http.get(searchRepoEndPoint).toPromise().then(
        (results)=>{
          let repoName:any=results;

          this.repos=[];
          this.repos.push(repoName);
          console.log(this.repos);
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
