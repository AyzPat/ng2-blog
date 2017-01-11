import { Component,OnInit ,Pipe} from '@angular/core';
import {UserService} from './users.service';
import {Users} from './users';
import {HttpModule} from '@angular/http';
import {Http,Response} from '@angular/http';
import { EllipsisPipe } from './ellipsis.pipe';
@Component({
  selector: 'blog',
  templateUrl: 'app/blog.template.html',
   providers: [UserService],
  
  
})
export class BlogComponent implements OnInit {
Users:any;
data:any;
 constructor(private _userService: UserService) { 
   this.data="Paris is a beautiful city with very fun and interesting things to see and do. There are many interesting sights. There are wonderful restaurants and food. Elegant restaurants and casual sidewalk cafes lie throughout the city. This beautiful city is also the fashion capital of the world. Paris is a fantastic city that holds the key to your heart! This exciting city has many wonderful sights. One of the most well known sights is the Eiffel Tower. From the top of this magnificent structure it is possible to see all across the lovely city. On the Champs-Elysees you can see the Arc de Triumph which soldiers were buried beneath a war. The most popular museum in France, and perhaps the world, is the Louvre. The Louvre contains historical paintings, sculptures and other forms of art such as the Mona Lisa and the Venis de Milo. Pei's Pyramids at the Louvre are beautiful glass pyramids outside of the museum. Notre Dame is a gorgeous cathedral known for its bell tower. Sacre Coeur is another breathtaking cathedral set atop a tall hill. From this church there is a great view of the city. Louis the sixteenth lived in and expanded the astoundingly beautiful Palace of Versailles in 1669. The palace is still standing and is as beautiful as ever! The palace's gardens are very beautiful as well. Mont Mart is a large shopping area. There are clothing stores, bakeries, wine shops, souvenir shops, restaurants and more. Parisian sights are as interesting and beautiful as they are fun!    "
 }

  getUsers() {
    this._userService.getUsers().subscribe(
                     Users => this.Users = Users)
                    
  }

  ngOnInit() {
    this.getUsers();
  }

 }
