import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // for both the template and styles we can write styling code in an inline manner.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus='No server was created!';
  serverName='';

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus='New server created!';
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
