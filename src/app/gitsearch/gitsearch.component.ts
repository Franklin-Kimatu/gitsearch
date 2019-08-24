import { Component, OnInit } from '@angular/core';
import{ GitsearchUser } from '../user/gitsearch-user'
import {MyServiceService} from '../service/my-service.service'
@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  users:GitsearchUser[]=[];
  
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
  constructor(public myService:MyServiceService) { }

  ngOnInit() {
      this.myService.searchUsers("Franklin-Kimatu")
  }

}
