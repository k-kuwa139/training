import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulldown',
  templateUrl: './pulldown.component.html',
  styleUrls: ['./pulldown.component.css']
})
export class PulldownComponent implements OnInit {

  @Input() optionData: string;
  @Input() optionValue: string;
  @Input() optionText: string;

  constructor() { }

  ngOnInit() {
  }

}
