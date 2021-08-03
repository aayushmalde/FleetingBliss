import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="websitename">Fleeting Bliss</div>
      <div class="description">Plan the vacation of your dreams!</div>
      <div class="logo">Image/Logo here</div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
