// In the ts file we define our component class.

// importing the class component
import {Component} from '@angular/core'

// define that component's metadata that will be later interpreted in order to render the component
@Component({
    selector: 'app-server', // the selector is used to reference and import the component in other parts of the app
    //references the html file to be rendered
    templateUrl: './server.component.html' //
})

export class ServerComponent {
    //this is data we are passing to our components
    serverID=10;
    serverStatus='offline';

    getServerStatus(){
        return this.serverStatus;
    }
}