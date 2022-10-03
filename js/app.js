//
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let listadoCarrito = [];


const agregarCurso =(e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement; 
        const infocurso = {
            imagen: curso.querySelector('img').src, 
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent,
            cantidad: 1

        }
        agregarCarrito(infocurso);
    }
}

const agregarCarrito = curso => {
    listadoCarrito = [...listadoCarrito, curso]
    console.log(listadoCarrito);

}


const cargaEventListener = () => {
    //Agregar funcion de cursos al carrito
    listaCursos.addEventListener('click',agregarCurso);
    }

    cargaEventListener();