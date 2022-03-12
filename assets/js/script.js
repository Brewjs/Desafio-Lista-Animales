//Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases
//Crear el método “datosPropietario” en la clase correspondiente y que pueda ser
//accedido desde las clases inferiores.
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

//Crear los métodos get y set para la clase de mascota
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

//Captar los elementos del formulario con JavaScript
const capturarFormulario = document.querySelector('form');
//Captar boton agregar formulario
const btnAgregar = document.querySelector('#btnAgregar');

const agregarMascota = (event) => {
    event.preventDefault();
    const dueño = document.getElementById('propietario').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const tipo = document.getElementById('tipo').value;
    const enfermedad = document.getElementById('enfermedad').value;
    const resultado = document.getElementById('ul')

    if (tipo === 'perro') {
        const perro = new Mascota(dueño, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<li>${perro.datosPropietario()}</li> <br> <li>La mascota es de tipo: ${perro.tipo} su nombre es: ${perro.nombreMascota} y su enfermedad es: ${perro.enfermedad}</li>`;

    } else if (tipo === 'gato') {
        const gato = new Mascota(dueño, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<li>${gato.datosPropietario()}</li> <br> <li>La mascota es de tipo: ${gato.tipo} su nombre es: ${gato.nombreMascota} y su enfermedad es: ${gato.enfermedad}</li>`;
    
    } else if (tipo === 'conejo') {
        const conejo = new Mascota(dueño, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<li>${conejo.datosPropietario()}</li> <br> <li>La mascota es de tipo: ${conejo.tipo} su nombre es: ${conejo.nombreMascota} y su enfermedad es: ${conejo.enfermedad}</li>`;
    }
   /*  btnAgregar.addEventListener('click', () =>{
        const resultado = agregarMascota() 
    })  */
}

capturarFormulario.addEventListener('submit', agregarMascota)

