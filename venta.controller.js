var productController = require("./producto.controller");

async function create(venta, producto, Venta, Product) {

    var producto = {
        producto: producto
    };

    //brand = producto
    //producto = venta
    var productCreated = await productController.create(producto, Product);

    venta["producto"] = productCreated._id;

    var ventaCreated = await Venta.create(venta)
        .then((data) => {
            console.log("Venta Guardada!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return ventaCreated;
}
async function findByName(nameToFind, Venta) {

    var params = {
        price: nameToFind
    }

    var productFind = await Venta.find(params)
        .populate("producto")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return productFind;
}

module.exports.create = create;
module.exports.findByName = findByName;