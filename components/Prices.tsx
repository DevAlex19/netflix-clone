import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Table, TableRow, TableData } from "../styles/pricesStyle";

function Prices() {
  const [active, setActive] = useState({
    minim: true,
    standard: false,
    premium: false,
  });
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Box
        sx={{ display: "flex", justifyContent: "end", marginBottom: "1rem" }}
      >
        <Box
          sx={{
            display: "flex",
            width: "60%",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              background: active.minim
                ? "rgba(229,0,20,1)"
                : "rgba(229,0,20,0.6)",
              color: "white",
              padding: "2.5rem 2rem",
              borderRadius: "2px",
              width: "20%",
              minWidth: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              "&:before": {
                content: "''",
                borderTop: "10px solid rgba(229,0,20,1)",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                position: "absolute",
                width: "10px",
                height: "10px",
                top: "100%",
                display: active.minim ? "block" : "none",
              },
            }}
            onClick={() =>
              setActive({ minim: true, standard: false, premium: false })
            }
          >
            Minim
          </Box>
          <Box
            sx={{
              background: active.standard
                ? "rgba(229,0,20,1)"
                : "rgba(229,0,20,0.6)",
              color: "white",
              padding: "2.5rem 2rem",
              borderRadius: "2px",
              width: "20%",
              minWidth: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              "&:before": {
                content: "''",
                borderTop: "10px solid rgba(229,0,20,1)",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                position: "absolute",
                width: "10px",
                height: "10px",
                top: "100%",
                display: active.standard ? "block" : "none",
              },
            }}
            onClick={() =>
              setActive({ minim: false, standard: true, premium: false })
            }
          >
            Standard
          </Box>
          <Box
            sx={{
              background: active.premium
                ? "rgba(229,0,20,1)"
                : "rgba(229,0,20,0.6)",
              color: "white",
              padding: "2.5rem 2rem",
              borderRadius: "2px",
              width: "20%",
              minWidth: "110px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              "&:before": {
                content: "''",
                borderTop: "10px solid rgba(229,0,20,1)",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                position: "absolute",
                width: "10px",
                height: "10px",
                top: "100%",
                display: active.premium ? "block" : "none",
              },
            }}
            onClick={() =>
              setActive({ minim: false, standard: false, premium: true })
            }
          >
            Premium
          </Box>
        </Box>
      </Box>
      <Table>
        <TableRow>
          <TableData
            style={{
              color: "#333",
              width: "40%",
              textAlign: "left",
              fontWeight: "normal",
            }}
            className="active"
          >
            Tarif lunar
          </TableData>
          <TableData
            style={{ color: active.minim ? "rgba(229,0,20,1)" : "#737373" }}
          >
            7.99 EUR
          </TableData>
          <TableData
            style={{ color: active.standard ? "rgba(229,0,20,1)" : "#737373" }}
          >
            9,99 EUR
          </TableData>
          <TableData
            style={{ color: active.premium ? "rgba(229,0,20,1)" : "#737373" }}
          >
            11,99 EUR
          </TableData>
        </TableRow>
        <TableRow>
          <TableData
            style={{
              color: "#333",
              width: "40%",
              textAlign: "left",
              fontWeight: "normal",
            }}
          >
            Calitate video
          </TableData>
          <TableData
            style={{ color: active.minim ? "rgba(229,0,20,1)" : "#737373" }}
          >
            Buna
          </TableData>
          <TableData
            style={{ color: active.standard ? "rgba(229,0,20,1)" : "#737373" }}
          >
            Mai buna
          </TableData>
          <TableData
            style={{ color: active.premium ? "rgba(229,0,20,1)" : "#737373" }}
          >
            Optima
          </TableData>
        </TableRow>
        <TableRow>
          <TableData
            style={{
              color: "#333",
              width: "40%",
              textAlign: "left",
              fontWeight: "normal",
            }}
          >
            Rezolutie
          </TableData>
          <TableData
            style={{ color: active.minim ? "rgba(229,0,20,1)" : "#737373" }}
          >
            480p
          </TableData>
          <TableData
            style={{ color: active.standard ? "rgba(229,0,20,1)" : "#737373" }}
          >
            1080p
          </TableData>
          <TableData
            style={{ color: active.premium ? "rgba(229,0,20,1)" : "#737373" }}
          >
            4k + HDR
          </TableData>
        </TableRow>
        <TableRow>
          <TableData
            style={{
              color: "#333",
              width: "40%",
              fontWeight: "normal",
              textAlign: "left",
            }}
          >
            Vizionează pe televizor, computer, telefon mobil și tabletă
          </TableData>
          <TableData>
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                color: active.minim ? "rgba(229,0,20,1)" : "#737373",
              }}
              icon={faCheck}
            />
          </TableData>
          <TableData>
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                color: active.standard ? "rgba(229,0,20,1)" : "#737373",
              }}
              icon={faCheck}
            />
          </TableData>
          <TableData>
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                color: active.premium ? "rgba(229,0,20,1)" : "#737373",
              }}
              icon={faCheck}
            />
          </TableData>
        </TableRow>
      </Table>
      <Typography
        sx={{
          color: "#737373",
          fontSize: "0.8rem",
          marginTop: "1rem",
          padding: "0 1rem",
          maxWidth: "800px",
        }}
      >
        Disponibilitatea formatelor HD (720p), Full HD (1080p), UlTableRowa HD
        (4K) și HDR este condiționată de serviciile de internet și de
        performanțele dispozitivului tău. O parte din conținut nu este
        disponibil la toate rezoluțiile. Consultă
        <span style={{ color: "#0071eb" }}> Condițiile de utilizare </span>
        pentru mai multe detalii.
      </Typography>
      <Typography
        sx={{
          color: "#737373",
          fontSize: "0.8rem",
          marginTop: "0.8rem",
          padding: "0 1rem",
          maxWidth: "800px",
        }}
      >
        Doar persoanele din locuința ta îți pot folosi contul. Vizionează pe 4
        dispozitive diferite simultan cu abonamentul Premium, pe 2 cu
        abonamentul Standard sau pe 1 dispozitiv cu abonamentul Minim.
      </Typography>
    </Box>
  );
}

export default Prices;
