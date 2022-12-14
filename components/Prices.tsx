import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Table, TableRow, TableData } from "../styles/pricesStyle";

function Prices() {
  const [active, setActive] = useState({
    minim: true,
    standard: false,
    premium: false,
  });
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Box
        sx={{ display: "flex", justifyContent: "end", marginBottom: "1rem" }}
      >
        <Box
          sx={{
            display: "flex",
            width: smallScreen ? "100%" : "60%",
            justifyContent: "space-around",
            columnGap: smallScreen ? "10px" : "0",
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
              width: smallScreen ? "33%" : "20%",
              minWidth: mediumScreen ? "90px" : "110px",
              height: mediumScreen ? "90px" : "auto",
              alignSelf: "end",
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
              width: smallScreen ? "33%" : "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              minWidth: mediumScreen ? "90px" : "110px",
              height: mediumScreen ? "90px" : "auto",
              alignSelf: "end",
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
              width: smallScreen ? "33%" : "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              minWidth: mediumScreen ? "90px" : "110px",
              height: mediumScreen ? "90px" : "auto",
              alignSelf: "end",
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
              display: smallScreen ? "none" : "table-cell",
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
            style={{
              color: active.premium ? "rgba(229,0,20,1)" : "#737373",
            }}
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
              display: smallScreen ? "none" : "table-cell",
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
              display: smallScreen ? "none" : "table-cell",
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
        <TableRow style={{ position: "relative" }}>
          <TableData
            style={{
              color: "#333",
              width: smallScreen ? "100%" : "40%",
              fontWeight: "normal",
              textAlign: smallScreen ? "center" : "left",
              position: smallScreen ? "absolute" : "relative",
              display: smallScreen ? "flex" : "table-cell",
              alignItems: "center",
              justifyContent: "center",
              fontSize: smallScreen ? "0.8rem" : "1rem",
            }}
          >
            Vizioneaz?? pe televizor, computer, telefon mobil ??i tablet??
          </TableData>
          <TableData>
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                color: active.minim ? "rgba(229,0,20,1)" : "#737373",
                marginTop: "1.8rem",
              }}
              icon={faCheck}
            />
          </TableData>
          <TableData>
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                marginTop: "1.8rem",
                color: active.standard ? "rgba(229,0,20,1)" : "#737373",
              }}
              icon={faCheck}
            />
          </TableData>
          <TableData>
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                marginTop: "1.8rem",
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
        (4K) ??i HDR este condi??ionat?? de serviciile de internet ??i de
        performan??ele dispozitivului t??u. O parte din con??inut nu este
        disponibil la toate rezolu??iile. Consult??
        <span style={{ color: "#0071eb" }}> Condi??iile de utilizare </span>
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
        Doar persoanele din locuin??a ta ????i pot folosi contul. Vizioneaz?? pe 4
        dispozitive diferite simultan cu abonamentul Premium, pe 2 cu
        abonamentul Standard sau pe 1 dispozitiv cu abonamentul Minim.
      </Typography>
    </Box>
  );
}

export default Prices;
