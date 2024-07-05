let inventario = [
    {
        nombre: "Laptop",
        categoria: "Electrónica",
        precio: 1000,
        cantidad: 10,
        codigo: "P001"
    },
    {
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 700,
        cantidad: 25,
        codigo: "P002"
    },
    {
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 50,
        cantidad: 50,
        codigo: "P003"
    },
    {
        nombre: "Monitor",
        categoria: "Electrónica",
        precio: 300,
        cantidad: 15,
        codigo: "P004"
    },
    {
        nombre: "Silla de Oficina",
        categoria: "Muebles",
        precio: 150,
        cantidad: 20,
        codigo: "P005"
    }
];

let agregarProducto=(producto)=> {
inventario.push(producto)
}
let eliminarProducto=(codigoBuscado)=> {
let i=0
for(let i=0; i<inventario.length;i++){
    if(codigoBuscado == inventario[i].codigo) inventario=inventario.filter(objeto => objeto.codigo != codigoBuscado)
}
}
let actualizarCantidad=(codigoBuscado, cantidad)=> {
    let i=0
    for(let i=0; i<inventario.length;i++){
        if(codigoBuscado == inventario[i].codigo) inventario[i].cantidad=cantidad
    }
}
let buscarProductoPorCategoria=(categoria)=> {
    let nuevoArray
    for(let i=0; i<inventario.length;i++){
        if(inventario[i].categoria == categoria) nuevoArray = inventario.filter(objeto => objeto.categoria == categoria)
    }
return nuevoArray
}
let calcularValorTotal=(lista)=> {
    let valorTotal=0
    // for(objeto in lista){
    //     valorTotal += objeto.cantidad * objeto.precio
    // }
    return lista.map(objeto=> objeto.precio*objeto.cantidad)
                .reduce((acumulador, numero) => acumulador+numero)
}



let nuevoProducto = {
    nombre: "Silla de Jardín",
        categoria: "Muebles",
        precio: 100,
        cantidad: 15,
        codigo: "P006"
}


console.log(calcularValorTotal(inventario))