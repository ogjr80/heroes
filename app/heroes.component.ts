import { Component} from '@angular/core'; 
import {Hero} from './Hero'; 
import { HEROES } from './mock-heroes';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated'; 
@Component({
    selector: 'my-heroes', 
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit{
    
    constructor(
        private router: Router,
        private heroService : HeroService){
      
    }
    ngOnInit(){
        this.getHeroes(); 
    }
    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes=heroes);     
        }
    title = 'Heroes Tour Details'; 
    public heroes: Hero[];
    selectedHero : Hero; 
    onSelect(hero: Hero){
        this.selectedHero = hero; 
    }
    
    gotoDetail(){
        let link = ['HeroDetail', {id : this.selectedHero.id}]; 
        this.router.navigate(link); 
    }
    
}

