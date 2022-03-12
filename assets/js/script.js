class Propietario {

    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono
    }
    datosPropietario(){
        return (`Los datos del Propietario son: nombre: ${this._nombre}, direccion: ${this._direccion}, telefono: ${this._telefono}`)
    }
}

class Animal extends Propietario {

    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
    }
    get tipo (){
        return (`El Animal es un: ${tipo}`)
    }
}
