import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  afterClose(): void {
    console.log('close');
  }
}
