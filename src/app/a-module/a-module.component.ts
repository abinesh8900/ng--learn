import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn, Subscriber } from 'rxjs';

@Component({
  selector: 'app-a-module',
  templateUrl: './a-module.component.html',
  styleUrls: ['./a-module.component.scss']
})
export class AModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    setTimeout(() => {
      subscriber.next(5);
      subscriber.complete()
    }, 1000);
  });

  console.log('just befor subscribe');
  observable.subscribe({
    next(x){
      console.log('got value',x);
    },
    error(err){
      console.error('something wrong occurred: ' + err);
    },
    complete() {
     console.log("Over") 
    }
  });
  console.log('just after subscribe');
  }

}
