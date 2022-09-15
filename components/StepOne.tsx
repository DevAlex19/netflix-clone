import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function StepOne({ setPage }: any) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        maxWidth: "380px",
        textAlign: smallScreen ? "left" : "center",
        margin: "0 auto",
        padding: "8rem 1.5rem",
        animation: "appear 0.5s",
        "@keyframes appear": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      }}
    >
      <img style={{ width: "250px" }} src="/images/devices.png" alt="" />
      {/* <Typography sx={{ color: "#333", fontSize: "0.8rem", marginTop: "2rem" }}>
        PASUL 1 din 3
      </Typography> */}
      <Typography
        sx={{
          color: "#333",
          fontSize: "2rem",
          fontWeight: "bold",
          lineHeight: "2.4rem",
          marginTop: "3rem",
        }}
      >
        Finalizeaza configurarea contului.
      </Typography>
      <Typography
        sx={{
          color: "#333",
          marginTop: "0.8rem",
          lineHeight: "1.4rem",
          fontFamily: "Netflix Light",
          maxWidth: "310px",
        }}
      >
        Netflix este personalizat special pentru tine. Creează o parolă pentru a
        viziona pe orice dispozitiv, în orice moment.
      </Typography>
      <Button
        sx={{
          color: "white",
          background: "rgba(229,0,20,1)",
          "&:hover": { background: "rgba(229,0,20,0.85)" },
          textTransform: "none",
          fontSize: "1.5rem",
          width: "100%",
          marginTop: "2rem",
          padding: "0.6rem 0",
        }}
        onClick={() => setPage(1)}
      >
        Inainte
      </Button>
    </Box>
  );
}

export default StepOne;
