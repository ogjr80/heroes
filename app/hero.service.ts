import {Injectable} from '@angular/core'; 
import {HEROES} from './mock-heroes'
import {Hero} from './Hero'

@Injectable()
export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);  
    }
    
    getHero(id: number){
        return this.getHeroes().then(heroes => heroes.filter(hero => hero.id ===id)[0]);
    }
    getHeroesSlowly(){
        return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES), 10000)); 
    }
    
   
}