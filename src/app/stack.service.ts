import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Stack } from './stack';
import { STACKS } from './mock-stacks';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  constructor(private messageService: MessageService) { }

  getStacks(): Observable<Stack[]> {
    return of(STACKS);
  }

  getStack(id: number): Observable<Stack> {
    return of(STACKS.find(stack => stack.id === id));
  }
  
  filterByProperty(id){
    var filtered = [];
    for (let i = 0; i < STACKS.length; i++) {
      if (STACKS[i].topic === id) {
          filtered.push(STACKS[i]);
      }
    }   
    return filtered;
  }

  getStacksOfTopic(topic_id: number): Observable<Stack[]> {
    let filteredStacks: Stack[] = [];
    filteredStacks = this.filterByProperty(topic_id);
    console.log(filteredStacks);
    return of(filteredStacks);
  }



}
