import { useQuery } from "@tanstack/react-query";
import PaperContainer from "../../components/Container/PaperContainer";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import LoadingSkeleton from "../../components/Loading/LoadingSkeleton";
import AgregarPorductoModal from "../../components/Modal/AgregarPorductoModal";
import ProductoTable from "../../components/Table/ProductoTable";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalEstado from "../../hooks/useModalEstado";
import productosServicios from "../../services/productosServicios";
import { Typography } from "@mui/material";
import { adaptadorProducto } from "../../adapters/adaptadorProducto";

const Producto = () => {
  
  const { data: productos, isLoading } = useQuery({
    queryKey: ["productos"],
    queryFn: productosServicios.obtenerProductos,
    select: (data) => {
      return data.map((producto) => adaptadorProducto(producto));
    },
  });

  const {
    isAddOpen,
    // isEditOpen,
    // isDeleteOpen,
    // itemToAction,
    setItemToAction,
    toggleModal,
  } = useModalEstado();

  const { isSubmitting, handleAsyncAction } = useAsyncAction(productos);

  return (
    <DefaultLayout>
      <PaperContainer>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <Typography>Hola</Typography>
          // <ProductoTable
          //   productos={productos}
          //   onAdd={() => toggleModal("add")}
          //   onEdit={(product) => {
          //     setItemToAction(product);
          //     toggleModal("edit");
          //   }}
          //   onDelete={(product) => {
          //     setItemToAction(product);
          //     toggleModal("delete");
          //   }}
          //   isSubmitting={isSubmitting}
          // />
        )}
        <AgregarPorductoModal
          open={isAddOpen}
          onClose={() => {
            toggleModal("add");
            setItemToAction(null);
          }}
          onAdded={() => handleAsyncAction()}
        />
      </PaperContainer>
    </DefaultLayout>
  );
};

export default Producto;
