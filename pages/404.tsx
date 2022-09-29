import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

function errorPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundImage: "url(/images/bg-lost-in-space.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ maxWidth: "900px", textAlign: "center" }}>
        <Typography sx={{ fontSize: "4.5rem", marginBottom: "1.5rem" }}>
          Te-ai pierdut?
        </Typography>
        <Typography sx={{ fontSize: "1.8rem" }}>
          Ne pare rau, pagina nu a fost gasita. Vei avea multe de explorat pe
          pagina principala
        </Typography>
        <button
          style={{
            background: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "3px",
            padding: "1rem 2rem",
            cursor: "pointer",
            margin: "2rem 0",
          }}
          onClick={() => router.push("browse")}
        >
          Pagina principala Netflix
        </button>
        <Typography sx={{ fontSize: "2rem" }}>
          Cod de eroare <span style={{ fontWeight: "bold" }}>NSES-404</span>
        </Typography>
        <Typography></Typography>
      </Box>
    </Box>
  );
}

export default errorPage;
