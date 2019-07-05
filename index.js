//const productController = require("./producto.controller");
const ventaController = require("./venta.controller");
var productSchema = require("./producto.model");
var ventaSchema = require("./venta.model");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Examen_U2', { useNewUrlParser: true });

var Product = mongoose.model('Product', productSchema, 'products');
var Venta = mongoose.model('Venta', ventaSchema, 'venta');

var producto = new Product({
    name: "camisa",
    price: 100,
    cantidad: 10,
    minimo: 15,
    maximo: 20,
    cost: 50 
});
Product.create(producto,function(error){
    if(error){
        console.log(error);
        
    }
    console.log("saved!");
    //process.exit(0);
});

var venta = new Venta({
    folio: "RAAM1234",
    fecha: Date.now(),
    cantidad: 1,
    subtotal: 100,
    iva: 16,
    total: 116 
});
Venta.create(venta,function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("saved!");
    process.exit(0);
});

async function enviarEmail(){
    
}
/*async function createProductAndVenta() {
    var venta = {
        folio: "RAAM1234",
        fecha: Date.now(),
        cantidad: 1
    };
    
    const producto = ["5d1f642ab8e0682b3c94268f"];
    
    var ventaCreated = await ventaController.create(venta, producto, Venta, Product);
    console.log("------- Producto Creado --------");
    console.log(ventaCreated);
}

/*async function findProduct(price) {
    var productPrice = await productController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);
}
createProductAndVenta();*/
//create();


