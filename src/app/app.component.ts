import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArticulosPage } from '../pages/articulos/articulos';
import { ArticuloService } from '../services/articuloService';
import { Articulo } from '../domain/articulo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ArticulosPage;

  pages: Array<{title: string, component: any}>;

  constructor(private articuloService: ArticuloService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.bootstrap()
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
  bootstrap() {
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "Placa Nvidia Gtx 1070", precioCosto: 10000.00, precioVenta: 15000.00, stock: 10, barcode: "12345" }))
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "Notebook Dell 5567", precioCosto: 16000.00, precioVenta: 21000.00, stock: 4, barcode: "23456" }))
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "Notebook Asus x556", precioCosto: 12000.00, precioVenta: 16000.00, stock: 6, barcode: "34567" }))
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "Monitor Samsung 24", precioCosto: 3000.00, precioVenta: 4500.00, stock: 7, barcode: "45678" }))
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "Monitor curvo LG 29", precioCosto: 7500.00, precioVenta: 11000.00, stock: 3, barcode: "56789" }))
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "PC Gamer i7", precioCosto: 25000.00, precioVenta: 32000.00, stock: 2, barcode: "54321" }))
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "SSD Kingston 240gb", precioCosto: 2000.00, precioVenta: 2700.00, stock: 15, barcode: "65432" }))
    this.articuloService.crearOAcrualizar(new Articulo({ descripcion: "Disco Rígido WD 2tb", precioCosto: 1500.00, precioVenta: 2000.00, stock: 12, barcode: "76543" }))
    this.articuloService.filtrarArticulos()
  }
}
