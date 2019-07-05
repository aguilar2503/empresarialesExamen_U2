async function create() {

    var producto = {
        name: "camisa",
        price: 100,
        cantidad: 10,
        minimo: 15,
        maximo: 20,
        cost: 50 
    };
    var productCreated = await Product.create(producto)
        .then((data) => {
            console.log("Producto Guardado!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return productCreated;
}
module.exports.create = create;
