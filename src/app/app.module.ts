import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MytreeComponent,UITreeNode,TreeNodeTemplateLoader } from './mytree/mytree.component';
import { MytreemoduleModule } from './mytreemodule/mytreemodule.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MytreemoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
