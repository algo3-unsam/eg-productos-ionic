import { Component, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Searchbar, Content } from 'ionic-angular';
import { ArticuloEditPage } from '../articuloEdit/articuloEdit'
import { ArticuloService } from '../../services/articuloService'

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

}
