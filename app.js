class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }
    
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
       // this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else {
            console.log('Nose puede agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = ' ';
        for( let producto of this._productos){
            productoOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto2);

orden2.mostrarOrden();


//no se pueden agregar mas productos
let orden3 = new Orden();
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto2);

orden3.mostrarOrden();
