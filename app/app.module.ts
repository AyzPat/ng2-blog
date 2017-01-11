import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BlogComponent }   from './blog.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { EllipsisPipe } from './ellipsis.pipe';
import {HttpModule} from '@angular/http';



@NgModule({
  imports:      [ BrowserModule ,HttpModule,Ng2PaginationModule],
  declarations: [ AppComponent,BlogComponent ,EllipsisPipe],
  bootstrap:    [ AppComponent,BlogComponent ],

})
export class AppModule { }
