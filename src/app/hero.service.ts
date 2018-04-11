import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}

  /*
    send the message _after_ fetching the heroes
    of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  */
  /*
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  */

/** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string){
    this.messageService.add('HeroService: ' + message);
  }
}
