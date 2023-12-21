import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomIconButton from "../components/Button/CustomIconButton";

const useProductoColumna = (productos, onEdit, onDelete) => {
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    {
      name: "nombre",
      label: "Nombre",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "marca",
      label: "Marca",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "precio",
      label: "Precio",
      options: {
        filter: false,
        sort: true,
      },
    },

    {
      name: "created_at",
      label: "fecha de creacion",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "updated_at",
      label: "fecha de actualizacion",
      options: {
        filter: false,
        sort: true,
      },
    },

    {
      name: "actions",
      label: "ACCIONES",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <CustomIconButton
                aria-label="edit"
                onClick={() => onEdit(productos[dataIndex])}
              >
                <EditIcon />
              </CustomIconButton>
              <CustomIconButton
                aria-label="delete"
                onClick={() => onDelete(productos[dataIndex].id)}
              >
                <DeleteIcon />
              </CustomIconButton>
            </>
          );
        },
      },
    },
  ];

  return columns;
};

export default useProductoColumna;
