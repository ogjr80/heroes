import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service'; 
import {RouteParams} from '@angular/router-deprecated'; 
import {Hero} from './Hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html', 
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams
    ){}
    ngOnInit(){
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero=> this.hero = hero);
    }
    
    goBack(){
        window.history.back();
    }
    hero: Hero; 
}