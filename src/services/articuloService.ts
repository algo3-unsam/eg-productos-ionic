import { Injectable } from '@angular/core';

@Injectable()
export class ArticuloService {

    articulos = []
    articulosFiltrados = []
    filtro = ""
    ultimoId = 0

    filtrarArticulos() {
        this.articulosFiltrados = this.articulos.filter((it) => {
            return it.descripcion.toLowerCase().includes(this.filtro.toLowerCase())
                || it.barcode == this.filtro
        })
    }

    crearOAcrualizar(articulo) {
        if (articulo.id) {
            var articuloUpdate = this.articulos.find((it) => { return it.id == articulo.id })
            Object.assign(articuloUpdate, articulo)
        } else {
            articulo.id = this.ultimoId + 1
            this.articulos.push(articulo)
            this.ultimoId++
        }
    }

    eliminar(articulo) {
        this.articulos = this.articulos.filter(it => it.id !== articulo.id)
    }

    isWeb() {
        return document.URL.startsWith('http')
    }
}