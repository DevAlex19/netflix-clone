import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function MyList() {
  return (
    <Box
      sx={{
        background: "#141414",
        height: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ color: "#494849" }}>
        Inca nu ai adaugat niciun titlu in lista ta.
      </Typography>
    </Box>
  );
}

export default MyList;
