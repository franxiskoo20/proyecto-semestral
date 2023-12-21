import makeRequest from "./api/makeRequest";

export const productService = {
  agregarProducto({ nombre, marca, precio }) {
    return makeRequest("post", "/api/productos", { nombre, marca, precio });
  },

  obtenerProductos() {
    return makeRequest("get", "/api/productos");
  },

  eliminarProducto(productoId) {
    return makeRequest("delete", `/api/productos/${productoId}`);
  },
};
