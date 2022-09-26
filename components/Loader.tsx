import { Box } from "@mui/system";
import { LoaderContainer } from "../styles/loaderStyle";

function Loader() {
  return (
    <Box sx={{ height: "800px", background: "black" }}>
      <LoaderContainer></LoaderContainer>
    </Box>
  );
}

export default Loader;
