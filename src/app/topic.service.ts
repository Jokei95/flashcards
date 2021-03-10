import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Topic } from './topic';
import { TOPICS } from './mock-topics';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private messageService: MessageService) { }

  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }

  getTopic(id: number): Observable<Topic> {
    return of(TOPICS.find(topic => topic.id === id));
  }
}
