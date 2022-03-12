class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono
    }
    datosPropietario() {
        return (`Los datos del Propietario son: nombre: ${this._nombre}, direccion: ${this._direccion}, telefono: ${this._telefono}`)
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return (`El Animal es un: ${tipo}`)
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad
    }
}

