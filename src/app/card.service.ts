import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private messageService: MessageService) { }

  getCards(): Observable<Card[]> {
    return of(CARDS);
  }

  getCard(id: number): Observable<Card> {
    return of(CARDS.find(card => card.id === id));
  }

  filterByProperty(id){
      var filtered = [];
      for (let i = 0; i < CARDS.length; i++) {
        if (CARDS[i].stack === id) {
            filtered.push(CARDS[i]);
        }
      }   
      return filtered;
  }
  
  getCardsByStack(stack_id: number): Observable<Card[]> {
    let filteredCards: Card[] = [];
    console.log(CARDS);
    filteredCards = this.filterByProperty(stack_id);
    console.log(filteredCards);
    return of(filteredCards);
  }
}