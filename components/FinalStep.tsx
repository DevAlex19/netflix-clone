import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import Prices from "./Prices";

function FinalStep({ setPage }: any) {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem 1.5rem 9rem",
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
      <Typography sx={{ color: "#333", fontSize: "0.8rem" }}>
        PASUL 3 DIN 3
      </Typography>
      <Typography
        sx={{
          color: "#333",
          fontSize: "2rem",
          fontWeight: "bold",
          lineHeight: "2.4rem",
          margin: "0.3rem 0 1rem",
        }}
      >
        Alege abonamentul potrivit pentru tine.
      </Typography>
      <Box
        sx={{
          display: "flex",
          columnGap: "10px",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <FontAwesomeIcon
          style={{ color: "red", fontSize: "1.5rem" }}
          icon={faCheck}
        />
        <Typography
          sx={{
            color: "#333",
            lineHeight: "1.4rem",
            fontFamily: "Netflix Light",
            textAlign: "left",
            fontSize: "1.1rem",
          }}
        >
          Vizionează după pofta inimii. Fără reclame.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          columnGap: "10px",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <FontAwesomeIcon
          style={{ color: "red", fontSize: "1.5rem" }}
          icon={faCheck}
        />
        <Typography
          sx={{
            color: "#333",
            lineHeight: "1.4rem",
            fontFamily: "Netflix Light",
            textAlign: "left",
            fontSize: "1.1rem",
          }}
        >
          Recomandări pe gustul tău.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          columnGap: "10px",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <FontAwesomeIcon
          style={{ color: "red", fontSize: "1.5rem" }}
          icon={faCheck}
        />
        <Typography
          sx={{
            color: "#333",
            lineHeight: "1.4rem",
            fontFamily: "Netflix Light",
            textAlign: "left",
            fontSize: "1.1rem",
          }}
        >
          Schimbă sau anulează abonamentul oricând.
        </Typography>
      </Box>
      <Prices />
      <Button
        sx={{
          color: "white",
          background: "rgba(229,0,20,1)",
          "&:hover": { background: "rgba(229,0,20,0.85)" },
          textTransform: "none",
          fontSize: "1.5rem",
          width: "100%",
          padding: "0.6rem 0",
          maxWidth: "400px",
          display: "block",
          margin: "auto",
          marginTop: "2.5rem",
        }}
        onClick={() => setPage(0)}
      >
        Inainte
      </Button>
    </Box>
  );
}

export default FinalStep;
