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

  @Input() btnText: BtnState;

  @Output() stateChange = new EventEmitter<string>();
  countDown: number;
  btnState = BtnState;
    constructor() { }

  loadChanges(val: string) {
  this.stateChange.emit(val);
  }

  ngOnInit() {
    const duration = 10; // 10 seconds
    interval(1000).pipe(take(duration), map(count => duration - (count + 1))).subscribe(seconds => {
        this.countDown = seconds;
        if(seconds === 0) {
          this.btnText = BtnState.loaded;
        }
    });

  }
}
