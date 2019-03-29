import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = ''; // Chuyen qua dung local references cai nay roi (cach 1)
  // newServerContent = ''; // Chuyen qua dung local references cai nay roi (cach 2 @ViewChild('abc'))
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput.value)
    // console.log(this.serverContentInput.nativeElement.value)

    this.serverCreated.emit({
      serverName: nameInput.value,
      // serverName: this.newServerName,

      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = 'gi do' // Không nên access DOM bằng cách này!

    this.blueprintCreated.emit({
      serverName: nameInput.value,
      // serverName: this.newServerName,

      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
