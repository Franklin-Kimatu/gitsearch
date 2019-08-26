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
  public loading:boolean= false;
  users:GitsearchUser[]=[];
  reposy:Repositories;
  searchThis(searchTerm){
    this.loading= true;
    this.myService.searchUsers(searchTerm).then(
      ()=>{
        
        this.users = this.myService.users
        this.loading= false;
      },
      (error)=>{
        console.log(error)
      }
    )
    this.myService2.searchReposities(searchTerm).then(
      (success)=>{
        this.reposy = this.myService2.repos;
        this.loading= false;
        console.log(this.reposy);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  searchRepos(searchTerm){
    
  }
 
  constructor(public myService:MyServiceService, public myService2:MyService2Service) { }

  ngOnInit() {
      this.searchThis('Franklin-Kimatu')
  }

}
