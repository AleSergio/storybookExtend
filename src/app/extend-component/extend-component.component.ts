import {Component, Input, OnInit} from '@angular/core';
import {BaseData, EnumData} from '../data/data';

@Component({
  selector: 'app-extend-component',
  templateUrl: './extend-component.component.html',
  styleUrls: ['./extend-component.component.css']
})
export class ExtendComponentComponent {
    @Input() extendedMessage?: string;
    @Input() extendedData?: BaseData;
    @Input() enumData?: EnumData;
}
