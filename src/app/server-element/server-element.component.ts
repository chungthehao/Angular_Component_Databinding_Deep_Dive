import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native, ShadowDom // Phạm vi ảnh hưởng của CSS
})
export class ServerElementComponent implements OnInit {
  // Dung Input decorator de bind data tu parent xuong component nay duoc.
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
