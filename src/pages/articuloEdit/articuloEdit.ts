import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticuloService } from '../../services/articuloService'

@Component({
  selector: 'page-articuloEdit',
  templateUrl: 'articuloEdit.html'
})
export class ArticuloEditPage {

  articulo
  presionoBotonGuardar = false
  articuloForm

  constructor(
    navParams: NavParams,
    private navCtrl: NavController,
    private articuloService: ArticuloService,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
  ) {
    this.articulo = navParams.get('articulo');
    this.initForm()
  }

  initForm() {
    this.articuloForm = this.formBuilder.group({
      id: [this.articulo.id],
      descripcion: [this.articulo.descripcion, Validators.required],
      barcode: [this.articulo.barcode],
      precioCosto: [this.articulo.precioCosto, Validators.compose([Validators.required, Validators.min(0)])],
      precioVenta: [this.articulo.precioVenta, Validators.compose([Validators.required, Validators.min(0)])],
      stock: [this.articulo.stock, Validators.compose([Validators.required, Validators.min(0)])]
    });

  }

  guardar() {
    this.presionoBotonGuardar = true
    if (!this.articuloForm.valid) { return }
    this.articuloService.crearOAcrualizar(this.articuloForm.value)
    this.mostrarMensaje("Artículo Guardado")
    this.navCtrl.pop()  
  }

  eliminar() {
    this.articuloService.eliminar(this.articulo)
    this.mostrarMensaje("Artículo Eliminado")
    this.navCtrl.pop()  
  }

  mostrarMensaje(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }

  isValid(field: string) {
    let formField = this.articuloForm.controls[field];
    return formField.valid || (formField.pristine && !this.presionoBotonGuardar);
  }

  isEmpty(field: string) {
    let formField = this.articuloForm.value[field];
    return formField == null || formField == undefined || formField == ""
  }


}
