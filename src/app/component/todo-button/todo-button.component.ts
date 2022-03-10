import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval} from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BtnState } from '../../model/btn-state';


@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss'],
})
export class TodoButtonComponent implements OnInit {

  /**
   *
   * @remarks
   * sharing data between parent and child comonent
   * @Input decorator - get data (btnText) from the parent component - todos component
   * so the data can be used in this component which is the child
   * @Output decorator - sends data to the parent component to carry out an function
   */
  @Input() btnText: BtnState;
  @Output() stateEvent = new EventEmitter<string>();

  /**
   *
   * Variable
   */
  countDown: number;
  btnState = BtnState;
    constructor() { }

  /**
   *
   * @remarks
   * This implementation of the count down logic
   * @interval the interval at which the countdown runs
   */
  ngOnInit() {
    const duration = 10; // stores duration of the timer 10 seconds
    interval(1000).pipe(take(duration), map(count => duration - (count + 1))).subscribe(seconds => {
        this.countDown = seconds;
        if(seconds === 0) {
          this.btnText = BtnState.loaded;
        }
    });
  }

  stateChange() {
    console.log('working');
    this.stateEvent.emit();
  }
}
