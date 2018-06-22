import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LibraryPage } from '../library/library/library';
import { QuotePage } from '../quote/quote/quote';
import { QuotesPage } from '../quotes/quotes/quotes';
import { TabsPage } from '../tabs/tabs';
import { FavoritesPage } from '../favorites/favorites/favorites';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
