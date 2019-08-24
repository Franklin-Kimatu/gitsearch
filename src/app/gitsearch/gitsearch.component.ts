import { Component, OnInit } from '@angular/core';
import{ GitsearchUser } from '../user/gitsearch-user'
import {MyServiceService} from '../service/my-service.service';
import{ MyService2Service } from '../service/my-service2.service'
import { Repositories } from '../repository/repositories';
@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  users:GitsearchUser[]=[];
  repos:Repositories[]=[];
  searchThis(searchTerm){
    this.myService.searchUsers(searchTerm).then(
      ()=>{
        // this.users= this.myService.users;
        this.users = this.myService.users
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  searchRepos(searchTerm){
    this.myService2.searchReposities(searchTerm).then(
      ()=>{
        this.repos = this.myService2.repos;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  // searchRepos(searchTerm){
  //   this.myService2.searchReposities(searchTerm).then(
  //     ()=>{
  //       this.repos = this.myService2.repos
  //     },
  //     (error)=>{
  //       console.log(error);
  //     }
  //   )
  // }
  constructor(public myService:MyServiceService, public myService2:MyService2Service) { }

  ngOnInit() {
      this.myService.searchUsers("Franklin-Kimatu")
  }

}
