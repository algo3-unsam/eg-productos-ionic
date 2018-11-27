export class Articulo {

    id: number
    descripcion: string
    precioVenta: number
    precioCosto: number
    stock: number
    barcode: string

    constructor(args) {
        Object.assign(this, args)
    }

}