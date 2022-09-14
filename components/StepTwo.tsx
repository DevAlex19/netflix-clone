import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";

function StepTwo() {
  return (
    <Box
      sx={{
        maxWidth: "320px",
        textAlign: "center",
        margin: "0 auto",
        padding: "8rem 0",
      }}
    >
      <img style={{ width: "50px" }} src="/images/Checkmark.png" alt="" />
      <Typography sx={{ color: "#333", fontSize: "0.8rem", marginTop: "1rem" }}>
        PASUL 2 din 3
      </Typography>
      <Typography
        sx={{
          color: "#333",
          fontSize: "2rem",
          fontWeight: "bold",
          lineHeight: "2.4rem",
          marginBottom: "1.5rem",
        }}
      >
        Alege un abonament.
      </Typography>
      <Box
        sx={{
          display: "flex",
          columnGap: "10px",
          alignItems: "center",
          marginBottom: "1rem",
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
            maxWidth: "310px",
            textAlign: "left",
          }}
        >
          Poți anula oricând, fără obligații.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          columnGap: "10px",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <FontAwesomeIcon
          icon={faCheck}
          style={{ color: "red", fontSize: "1.5rem" }}
        />
        <Typography
          sx={{
            color: "#333",
            lineHeight: "1.4rem",
            fontFamily: "Netflix Light",
            maxWidth: "310px",
            textAlign: "left",
          }}
        >
          Tot conținutul de pe Netflix, la un tarif avantajos.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", columnGap: "10px", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faCheck}
          style={{ color: "red", fontSize: "1.5rem" }}
        />
        <Typography
          sx={{
            color: "#333",
            lineHeight: "1.4rem",
            fontFamily: "Netflix Light",
            maxWidth: "310px",
            textAlign: "left",
          }}
        >
          Vizionare nelimitată pe toate dispozitivele.
        </Typography>
      </Box>
      <Button
        sx={{
          color: "white",
          background: "rgba(229,0,20,1)",
          "&:hover": { background: "rgba(229,0,20,0.85)" },
          textTransform: "none",
          fontSize: "1.5rem",
          width: "100%",
          marginTop: "2.5rem",
          padding: "0.6rem 0",
        }}
      >
        Inainte
      </Button>
    </Box>
  );
}

export default StepTwo;
