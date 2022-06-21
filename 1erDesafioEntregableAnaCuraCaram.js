//1er Desafío entregable
//Proyecto final: Ecommerce de comidas caseras congeladas
//Alumna: Ana Cura Caram
//Comisión: #37725-javascript
class Producto { //reemplacé la función con una clase como sugiere JS
    constructor(id, descripcion, precio) {
        this.id=id;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);     
        this.mostrarId = function() {return this.id};
        this.mostrarDescripcion = function() {return this.descripcion};
    }
    
}

const producto1 = new Producto (
1,
"Tallarines a la bolognesa",
1200
);


const producto2 = new Producto (
2,
"Cerdo salteado",
950
);


const producto3 = new Producto (
3,
"Sweet wraps",
800
);


let stockProducto1=12;
let stockProducto2=20;
let stockProducto3=4;  
let cantidadTotal=0;
let keepBuying = false;
let totalCarrito=0;

do{

let precioFinal=0;
let precioAcumulado=0;

    {alert("Los productos disponibles son: " + "\n"+
    producto1.mostrarId() + " - " + producto1.mostrarDescripcion()+ "\n"+
    producto2.mostrarId() + " - " + producto2.mostrarDescripcion()+ "\n"+
    producto3.mostrarId() + " - " + producto3.mostrarDescripcion())
    }

productoElegido = parseInt(prompt ("Elija el producto deseado según su código "));
elegirCantidad(); 
switch (productoElegido){
    case 1 :
    {
        precioAcumulado=producto1.precio;           
        if(cant>stockProducto1)
        {
          alert("Stock insuficiente, elija menos de "+stockProducto1)
        }
        else{
        precioFinal=precioAcumulado*cant    
        alert("Producto agregado al carrito");
        };
        
    }; 
    break;

    case 2:
    {
        precioAcumulado=producto2.precio;
        if(cant>stockProducto2)
        {
          alert("Stock insuficiente, elija menos de "+stockProducto2)
        }
        else {
    
          
        precioFinal=precioAcumulado*cant
        alert("Producto agregado al carrito");
    };
    };
    break;

    case 3:
    {
    precioAcumulado=producto3.precio; 
        if(cant>stockProducto3)
        {
          alert("Stock insuficiente, elija menos de "+stockProducto3)
        }
        else 
    {    
        precioFinal=precioAcumulado*cant
        alert("Producto agregado al carrito");
    };
};
    break;

    default: alert("Gracias por visitar nuestra página");
    totalCarrito=0;
    precioFinal=0;
    precioAcumulado=0;
    break;
};
cantidadTotal+=cant;
totalCarrito+=precioFinal;
keepBuying = confirm("quieres seguir comprando?");
} while (keepBuying);
alert(`El total de su compra es: ${totalCarrito}`);



function elegirCantidad (){
    cant=parseInt(prompt("Cantidad: "));
    return cant;

}
