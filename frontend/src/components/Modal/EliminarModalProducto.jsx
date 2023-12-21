import GenericConfirmModal from "../../../../components/modal/GenericConfirmModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import { PRODUCTO_SNACKBAR } from "../../constants/productoSnackbar";
import productosServicios from "../../services/productosServicios";


const ProductDeleteModal = ({ open, onClose, toDelete, onDelete }) => {
  const deleteMutation = useGenericMutation({
    mutationFn: (toDelete) => productosServicios.deleteProduct(toDelete),
    successMessage: PRODUCTO_SNACKBAR.PRODUCTO_DELETE_SUCCESS.message,
    errorMessage: PRODUCTO_SNACKBAR.PRODUCTO_DELETE_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onDelete?.();
    },
  });

  return (
    <>
      <GenericConfirmModal
        open={open}
        onClose={onClose}
        onConfirm={() => deleteMutation.mutate(toDelete)}
        title="Confirmar Eliminación"
        confirmButtonText="Eliminar"
        cancelButtonText="Cancelar"
        isPending={deleteMutation.isPending}
      />
    </>
  );
};

export default ProductDeleteModal;
