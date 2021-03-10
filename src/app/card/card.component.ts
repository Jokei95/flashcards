import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Card } from '../card';
import { CardState } from '../cardState';
import { CardService } from '../card.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('250ms')
      ]),
      transition('flipped => default', [
        animate('250ms')
      ])
    ])
  ]
})

export class CardComponent implements OnInit {
  data: CardState = {
    state: "flipped",
    finished: false
  };

  index: number = 0;

  cardsOfStack: Card[] = []
  currentCard: Card;

  stackID: number = +this.route.snapshot.paramMap.get('id');
  
  resultCounterEasy: number = 0;
  resultCounterMedium: number = 0;
  resultCounterDifficult: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cardService.getCardsByStack(this.stackID).subscribe(cardsOfStack => this.cardsOfStack = cardsOfStack);
    this.currentCard = this.cardsOfStack[this.index];
  }

  showAnswer(): void {
    this.flipCard();
  }

  nextCard(result: string): void {
    switch(result) { 
      case 'easy': { 
        this.resultCounterEasy ++;
        break; 
      } 
      case 'medium': { 
        this.resultCounterMedium ++;
        break; 
      } 
      case 'difficult': { 
        this.resultCounterDifficult ++;
        break; 
      } 
    } 
    if(this.index+2 <= this.cardsOfStack.length) {
      this.flipCard();
      this.index++;
      this.currentCard = this.cardsOfStack[this.index];
    } else {
      this.data.finished = true;
    }
  }

  resetStack() {
    this.resultCounterEasy = 0;
    this.resultCounterMedium = 0;
    this.resultCounterDifficult = 0;
    this.index = 0;
    this.data.finished = false;
    this.currentCard = this.cardsOfStack[this.index];
    this.flipCard();
  }

  flipCard() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  back(): void {
    this.location.back()
  }

}