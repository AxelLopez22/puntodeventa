export interface Cliente{
    idCliente: number,
    Nombre: string,
    Apellidos: string,
}

export interface Categorias{
    idCategoria: number,
    nombre: string,
    productos: Products[]
}

export interface Products{
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    img: string,
    idCategoria: Categorias["idCategoria"]
}

export interface DetalleVenta{
    id: number,
    cantidad: number,
    precio: number,
    idProducto: Products["id"],
}

export interface Venta{
    id: number,
    descripcion: string,
    idCliente: Cliente["idCliente"]
    detalle: DetalleVenta[]
}

export interface metodosPago{
    id: number,
    nombre: string,
    total: number
}

export interface ProductosFactura{
    cantidad: number
    producto: string | undefined,
    precio: number
}