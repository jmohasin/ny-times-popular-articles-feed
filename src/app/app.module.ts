import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { DetailsComponent } from './articles/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
