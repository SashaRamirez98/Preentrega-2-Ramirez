// Array para almacenar los productos
let products = []; 

// Array de precios predefinidos
let opcionPrecio = [
  { value: 500, label: "$500" },
  { value: 1000, label: "$1,000" },
  { value: 2000, label: "$2,000" },
  { value: 5000, label: "$5,000" },
  { value: 10000, label: "$10,000" }
];

// Función para mostrar las opciones de precios
function mostrarOpcionesPrecios() {
  let opciones = "";
  for (let i = 0; i < opcionPrecio.length; i++) {
    opciones += `${i + 1}. ${opcionPrecio[i].label}\n`;
  }
  opciones += "0. Ingresar precio personalizado";

  return opciones;
}

function agregarProducto() {
  let cantidadProductos = prompt("Ingrese la cantidad de productos que desea cargar:");
  if (!cantidadProductos) {
    console.log("No se ingresó una cantidad válida.");
    return;
  }

  cantidadProductos = parseInt(cantidadProductos);

  for (let i = 0; i < cantidadProductos; i++) {
    let productoNombre = prompt(`Ingrese el nombre del producto ${i + 1}:`);
    if (!productoNombre) {
      console.log("No se ingresó un nombre de producto válido.");
      continue;
    }

    let opcionPrecioSeleccionada = prompt(
      "Seleccione una opción de precio:\n" + mostrarOpcionesPrecios()
    );
    let productoPrecio;

    if (opcionPrecioSeleccionada === "0") {
      let precioPersonalizado = prompt("Ingrese el precio personalizado:");
      if (!precioPersonalizado) {
        console.log("No se ingresó un precio válido.");
        continue;
      }
      productoPrecio = parseInt(precioPersonalizado);
    } else {
      let opcionIndex = parseInt(opcionPrecioSeleccionada) - 1;
      if (opcionIndex < 0 || opcionIndex >= opcionPrecio.length) {
        console.log("Opción de precio inválida.");
        continue;
      }
      productoPrecio = opcionPrecio[opcionIndex].value;
    }

    let product = { name: productoNombre, price: productoPrecio };
    products.push(product);

    console.log("Producto agregado:", product);
  }

  console.log("Lista de productos:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
  }
}

agregarProducto();








