// Eventos DOM (Document Object Model)
document
.getElementById ("formulario-producto")
.addEventListener("submit", function(evento) {
    //evaluar el comportamiento del formulario
    evento.preventDefault();//guarda y refresca la pantalla al memonto de un cambio
    //obtener los valores del formulario
    const nombre = document.getElementById ("nombre").value,
    precio = document.getElementById ("precio").value,
    año = document.getElementById("año").value;    
    //Crear un nuevo objeto "producto"
    const producto = new Producto (nombre, precio, año); 
    //Crear un nuevo usuario de interfaz
    const ui = new UI();
    //Input de validacion de usuario
    if (nombre =="" || precio == "" || año == "") {
        ui.showMessage("Porfavor ingresar datos");
    }
    //Guardar Productos
    ui.addProducto(producto);
    ui.showMessage("Precio agregado");
    ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (e) =>{
    const ui= new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
});
//Clase de Producto
class Producto {
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}
//Clase Usuario interfaz

class UI{
    addProducto(producto){
        const productolista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML= `<br>
        <br>
        <br>
        <br>
        <div style="max-width: 70rem; margin: 0 auto;">
        <h1>Tabla de Productos</h1>
        <table  class="table table-hover" >
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Año</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${producto.nombre}</th>
            <td>${producto.precio}</td>
            <td>${producto.año}</td>
          </tr>
        </tbody>
      </table>
      <button style="float: right;" type="button" class="btn btn-danger">Eliminar</button>
      </div>
    `;
    productolista.appendChild(elemento); // appendChild = objeto hijo
}
    //resetear valores de formulario
    resetForm() {
        document.getElementById ("formulario-producto").reset ();
    }
    deleteProducto(elemento) {
        if (elemento.nombre === "eliminar"){
            elemento.parentElement.parentElement.remove();
            this.showMessage("El producto se a eliminado")
        }
    }

    showMessage(mensaje, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));

        //Mostrar en el DOM
        const contenido = document.querySelector(".container");
        const app = document.querySelector("#App");

        //Insertar mensaje en el interfaz usuario
        setTimeout(function(){
                document.querySelector(".alert", remove());
            },3000);
        }
}