import {Component, Input, OnInit} from '@angular/core';
import {ExtendComponentComponent} from '../extend-component/extend-component.component';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent extends ExtendComponentComponent{
  @Input() firstMessage?: string;
}
