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
  @Output() statusChange = new EventEmitter<BtnState>();

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
   * @countDownMethod method contains the logic for
   *  the countdown timer.It is called in the @ngOnInit method so that the timer can be initated on pageload
   * @interval the interval at which the countdown runs
   */
  ngOnInit() {
      this.countDownMethod();
  }
  countDownMethod() {
    const duration = 11; // stores duration of the timer 10 seconds
    interval(1000)
    .pipe(
      take(duration),
      map(count => duration - count - 1)
      )
      .subscribe(seconds => {
        this.countDown = seconds;
        if(seconds === 0) {
          this.btnText = BtnState.loaded;
        }
    });
  }
  /**
   * @remarks
   * sending data from the button component to the todos component
   * @onStateChange - method is the data sent to the
   * parent component so that the method can be interacted with in the parent (todos) page. The parameter takes the button
   *  state as the parameter and it set button text to that state
   */
  onStateChange(val: BtnState) {
    this.statusChange.emit(val);
    this.btnText = val;
  }
}
