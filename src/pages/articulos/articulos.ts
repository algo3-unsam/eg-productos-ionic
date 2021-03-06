import { Component, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Searchbar, Content } from 'ionic-angular';
import { ArticuloEditPage } from '../articuloEdit/articuloEdit'
import { ArticuloService } from '../../services/articuloService'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-articulos',
  templateUrl: 'articulos.html'
})

export class ArticulosPage {

  @ViewChild('search') search: Searchbar;
  @ViewChild(Content) content: Content;
  mostrarBusqueda = false

  constructor(
    public navCtrl: NavController, 
    private articuloService: ArticuloService,
    private barcodeScanner: BarcodeScanner
  ) {
  }

  ionViewWillEnter() {
    this.articuloService.filtrarArticulos()
    this.content.resize()
  }

  crearArticulo() {
    this.verDetalle({})
  }

  verDetalle(articulo) {
    this.navCtrl.push(ArticuloEditPage, {
      articulo: articulo
    });
  }

  mostrarSearchBar() {
    this.mostrarBusqueda = true
    setTimeout( () => { this.search.setFocus() }, 150);
  }

  ocultarSearchBar() {
    this.mostrarBusqueda = false
  }

  escanearBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.articuloService.filtro = barcodeData.text
      this.mostrarBusqueda = true
      this.articuloService.filtrarArticulos()
     }, (err) => {
      alert("Ha ocurrido un error al escanear el código")
     })
  }

}
