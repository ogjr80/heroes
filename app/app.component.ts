import {Component} from '@angular/core'; 
import {HeroesComponent} from './heroes.component'; 
import {HeroService} from './hero.service'; 
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
@Component({
    selector: 'my-app', 
    template: `
        <h2>{{title}}</h2>
        <nav> 
            <a [routerLink] = "['Heroes']">Heroes</a>
            <a [routerLink] = "['Dashboard']">Dashboard</a>
        </nav> 
        
        
        <router-outlet></router-outlet>
    `, 
    styleUrls: ['app/app.component.css'],
    directives: [ 
        ROUTER_DIRECTIVES
        ],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
        ] 
    
})
@RouteConfig([
    {
        path: '/dashboard', 
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes', 
        name: 'Heroes', 
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
export class AppComponent{
    title: string = "Tour of Heroes";
};
