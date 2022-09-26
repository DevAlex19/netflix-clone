import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Link } from "../styles/footerStyle";

function Footer() {
  const { pathname } = useRouter();
  return (
    <Box
      sx={{
        background:
          pathname === "/signup"
            ? "#f3f3f3"
            : pathname === "/signin"
            ? "rgba(0,0,0,.75)"
            : "#000000",
        padding: "3rem 2rem 2rem",
        zIndex: pathname === "/signup" ? "1" : "0",
        position: pathname === "/signin" ? "relative" : "static",
        display: pathname === "/profile-edit" ? "none" : "block",
      }}
    >
      <Typography
        sx={{
          color: "#6f7373",
          maxWidth: "800px",
          margin: "auto",
          fontSize: "1rem",
          marginBottom: "1.5rem",
          fontFamily: "Netflix Light",
        }}
      >
        Ai intrebari? Suna la 0000-000-000
      </Typography>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "auto",
          display: "flex",
          columnGap: "50px",
          flexWrap: "wrap",
          rowGap: "9px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "9px" }}>
          <Link>Intrebari frecvente</Link>
          <Link>Relatii cu investitorii</Link>
          <Link>Declaratia de confidentialitate</Link>
          <Link>Test de viteza</Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "9px" }}>
          <Link>Asistenta</Link>
          <Link>Cariere</Link>
          <Link>Preferinte de cookie</Link>
          <Link>Garantie legala</Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "9px" }}>
          <Link>Cont</Link>
          <Link>Modalitati de vizionare</Link>
          <Link>Informatii legate de companie</Link>
          <Link>Mentiuni legale</Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "9px" }}>
          <Link>Centru media</Link>
          <Link>Conditii de utilizare</Link>
          <Link>Contacteaza-ne</Link>
          <Link>Doar pe Netflix</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
