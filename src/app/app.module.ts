import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';
import { Editphotos } from '../pages/editphotos/editphotos';
import { News } from '../pages/news/news';
import { Fixtures } from '../pages/fixtures/fixtures';
import { Teamphotos } from '../pages/teamphotos/teamphotos';
import { Rugby101 } from '../pages/rugby101/rugby101';
import { Rugbyclubs } from '../pages/rugbyclubs/rugbyclubs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    Editphotos,
    News,
    Fixtures,
    Teamphotos,
    Rugby101,
    Rugbyclubs,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    News,
    Editphotos,
    Fixtures,
    Teamphotos,
    Rugby101,
    Rugbyclubs,
    TabsPage
  ],
  providers: [
    File,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
