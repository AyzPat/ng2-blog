import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BlogComponent} from './blog.component';
import {ViewComponent} from './view.component';

import {Component} from '@angular/core';

const routes:Routes=[
    {path: '',pathMatch:'full',redirectTo: 'blog' },
    { path: 'blog',  component: BlogComponent},
    { path: 'view', component: ViewComponent },
   // {path:'login/main', component:MainComponent}

];
@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    declarations: [BlogComponent,ViewComponent],
    exports:[RouterModule]
})

export class AppRoutingModule {}