import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments.prod';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
  getHeroesById(id: string): Observable<Hero | undefined> {
    return this.httpClient
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((Error) => of(undefined)));
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(
      `${this.baseUrl}/heroes?q=${query}&_limit=6`
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');
    return this.httpClient.patch<Hero>(
      `${this.baseUrl}/heroes/${hero.id}`,
      hero
    );
  }

  deleteHeroById(id: String): Observable<boolean> {
    return this.httpClient.delete<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(map(resp => true),
        catchError(err => of(false)),
      );
      
  }
}