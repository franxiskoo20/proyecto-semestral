import { Typography } from "@mui/material";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import PaperContainer from "../../components/Container/PaperContainer";

const Producto = () => {
  return (
    <DefaultLayout>
      <PaperContainer>
        <Typography variant="h1">Productos</Typography>
      </PaperContainer>
    </DefaultLayout>
  );
};

export default Producto;
