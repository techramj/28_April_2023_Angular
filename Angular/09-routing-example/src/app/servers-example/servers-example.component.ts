import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-servers-example',
  templateUrl: './servers-example.component.html',
  styleUrls: ['./servers-example.component.css']
})
export class ServersExampleComponent implements OnInit, OnChanges {

  @Input() serverName:string = '';
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called ',changes);
  }

}
