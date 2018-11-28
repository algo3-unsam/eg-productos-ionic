import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArticuloService } from '../services/articuloService';
import { ArticulosPage } from '../pages/articulos/articulos';
import { ArticuloEditPage } from '../pages/articuloEdit/articuloEdit';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    ArticulosPage,
    ArticuloEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ArticulosPage,
    ArticuloEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArticuloService,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
