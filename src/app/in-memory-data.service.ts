import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Blessing KASILI' },
      { id: 12, name: 'Yrayra KASILI' },
      { id: 13, name: 'Zegnen KASILI' },
      { id: 14, name: 'Daniel KASILI' },
      { id: 15, name: 'Nancy KASILI' },
      { id: 16, name: 'Serge KASILI' },
      { id: 17, name: 'Theresa TOGBE' },
      { id: 18, name: 'Angela TOGBE' },
      { id: 19, name: 'Yolande TOGBE' },
      { id: 20, name: 'Abraham TOGBE' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/