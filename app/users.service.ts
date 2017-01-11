import {Users} from './users';
import {HttpModule} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx'; 

@Injectable()
export class UserService {
  private _url = "app/users.json";
  constructor(private http: Http){}
  getUsers() { 
    return this.http.get(this._url)
      .map(res => <Users[]> res.json())
      
       .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}



  