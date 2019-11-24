import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// we need to import newly created components here
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // no need to add the ts extension

@NgModule({
  declarations: [
    AppComponent,
    // we need to import newly created components here
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
