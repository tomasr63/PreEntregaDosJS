// Variables
// Funciones
// Objetos
// Arrays
// Metodos de busqueda y filtrado sobre Arrays


// Array de Objetos:
const productos = [
    { id: 1, nombre: 'Notebook 14"', importe: 11500, nroEnStock: 10 },
    { id: 2, nombre: 'Tablet PAD 9.7"', importe: 19500, nroEnStock: 1 },
    { id: 3, nombre: 'Macbook Air 13', importe: 74500, nroEnStock: 6 },
    { id: 4, nombre: 'Tablet DROID 10.1"', importe: 16400, nroEnStock: 9 },
    { id: 5, nombre: 'Smartwatch 1.8" black', importe: 22500, nroEnStock: 4 },
    { id: 6, nombre: 'Smartwatch 2" red', importe: 25500, nroEnStock: 7 },
];

// Clase Producto 
class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.importe = parseInt(precio);
        this.nroEnStocktock = parseInt(stock);
    };
};

// Funcion para agregar productos
const agregarProducto = () => { 
    // Se le pieden los datos del nuevo producto al usuario
    let id = parseInt(prompt("Ingrese ID del nuevo producto:"));
    let nombre = prompt("Ingrese el nombre:");
    let precio = parseInt(prompt("Ingrese el precio:"));
    let stock = parseInt(prompt("Ingrese la cantidad en stock:"));

    // Corroborar que no se repitan los parametros id y nombre
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == id) {
            alert("ID ya existente.");
            return;
        } else if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            alert("Producto ya existente.");
            return;
        };
    };
    
    // Si no se repiten el id ni el nombre se instancia el nuevo producto mediante la clase Producto
    const nuevoProducto = new Producto(id, nombre, precio, stock);
    // Se agrega el nuevo producto al Array de productos original
    productos.push(nuevoProducto);
};

// Funcion para buscar productos por nombre
const buscarProductosXNombre = () => {
    // Se pide el nombre del producto buscado y se normaliza mediante toLowerCase()
    let productoBuscado = prompt("Que producto Busca?").toLowerCase();
    // Se declare el Array vacio de productos encontrados
    let productosEncontrados = [];

    // Se itera el Array de productos
    for (let i = 0; i < productos.length; i++) {
        // Si el nombre de algun producto del Array incluye aunque sea parcialmente el nombre que ingreso el usuario...
        if (productos[i].nombre.toLowerCase().includes(productoBuscado)) {
            // Ese producto es agregado al Array vacio del principio
            productosEncontrados.push(productos[i]);
        };
    }

    // Si el Array de productos encontrados tiene elementos los muestra por consola sino se alerta que no hay coincidencias
    productosEncontrados.length > 0 ? console.log(productosEncontrados) : alert("No se encontraron coincidencias.");
};

// Funcion para buscar productos mediante un rango de precios
const buscarProductosXPrecio = () => {
    // Se mapean los precios de los productos en un nuevo Array
    let arrayDePrecios = productos.map((producto) => {
        return producto.importe;
    });

    // Se encuentra el precio mas alto mediante Math.max() y el Array desestructurado
    let precioMasCaro = Math.max(...arrayDePrecios);

    // Si el usuario no ingresa valores el rango de precios va de cero al precio mas alto
    let precioMax = parseInt(prompt("Ingrese precio máximo:")) || precioMasCaro;
    let precioMin = parseInt(prompt("Ingrese precio mínimo:")) || 0;

    // Se filtran los productos que esten en el rango de precios especificado en un nuevo Array
    let productosEnRango = productos.filter((producto) => {
        return producto.importe >= precioMin && producto.importe <= precioMax;
    });

    // Si no hay productos en el rango de precios el Array no tiene elementos y devuelve el alert(), sino muestra el Array mismo por consola
    productosEnRango.length > 0 ? console.log(productosEnRango) : alert("No se encontraron coincidencias.");
};

// Funcion para vender producto
const venderProducto = () => {
    // Para encontrar el producto a vender se solicita el id (podria haber sido el nombre o cualquier otra prop.)
    let idProductoVenta = parseInt(prompt("Ingrese el id del producto a vender:"));

    // Se busca el producto por id y se guarda en una variable
    let productoEcontrado = productos.find((producto) => {
        return producto.id === idProductoVenta;
    });

    // Si se encuentra el producto...
    if (productoEcontrado) {
        // Corroboramos si hay stock 
        if (productoEcontrado.nroEnStock > 0) {
            // Si hay stock se vende y el stock decrementa en 1
            alert("Producto vendido!");
            productoEcontrado.nroEnStock--;
        } else { // Si no se alerta que no hay stock
            alert("No hay stock.");
        }
    } else { // Si no se encuentra el producto se alerta que no hay coincidencias
        alert("No se encontraron coincidencias.");
    }
};