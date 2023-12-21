import dayjs from "dayjs";

export const adaptadorProducto = (producto) => {
  return {
    id: producto.id,
    nombre: producto.nombre,
    marca: producto.marca,
    precio: producto.precio,
    created_at: dayjs(producto.created_at).format("dddd, D [de] MMMM [de] YYYY"),
    updated_at: dayjs(producto.updated_at).format("dddd, D [de] MMMM [de] YYYY"),
  };
};
