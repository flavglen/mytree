import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MytreemoduleModule } from './mytreemodule/mytreemodule.module';
import { MypicklistComponent } from './mypicklist/mypicklist.component';
import {PickListModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MypicklistComponent
  ],
  imports: [
    BrowserModule,
    MytreemoduleModule,
    PickListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
