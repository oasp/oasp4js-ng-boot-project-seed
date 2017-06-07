import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GeneralModule} from './general/general.module';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routing';
import {BookService} from './book-mgmt/book.service';
import {BookMgmtModule} from './book-mgmt/book-mgmt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    GeneralModule,
    BookMgmtModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
