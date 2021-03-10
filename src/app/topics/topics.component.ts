import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Topic } from '../topic';
import { TopicService } from '../topic.service';
import { MessageService } from '../message.service';
import { Stack } from '../stack';
import { STACKS } from '../mock-stacks';
import { StackService } from '../stack.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];
  stacks: Stack[];
  stack: Stack;
  id: number = +this.route.snapshot.paramMap.get('id');
  
  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private stackService: StackService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTopics();
    this.getStacksOfTopic();
  }

  getTopics(): void {
    this.topicService.getTopics().subscribe(topics => this.topics = topics);
  }

  getStacksOfTopic(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.stackService.getStacksOfTopic(id).subscribe(stacks => this.stacks = stacks);
  }

  navigate(id): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/topic/'+id]);
    this.stackService.getStacksOfTopic(id).subscribe(stacks => this.stacks = stacks);
  }

}