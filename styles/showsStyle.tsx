import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ShowsContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  margin: "10rem auto 6rem",
  gap: "80px 10px",
  width: "95%",
});

export const MovieContainer = styled(Box)({
  width: "16%",
  height: "clamp(150px,20vw,165px)",
  borderRadius: "5px",
  "@media (max-width:1315px)": {
    width: "19%",
  },
  "@media (max-width:1055px)": {
    width: "24%",
  },
  "@media (max-width:900px)": {
    width: "32%",
  },
  "@media (max-width:680px)": {
    width: "49%",
  },
  "@media (max-width:525px)": {
    width: "99%",
  },
});

export const MovieSection = styled(Box)({
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  cursor: "pointer",
  borderRadius: "5px",
  transform: "scale(1) translateY(0)",
  background: "#141414",
  boxShadow: "5px 5px 10px black",
  zIndex: "0",
  transition: "transform 0.7s",
  "& .expand": {
    display: "none",
  },
  "&:hover": {
    transform: "scale(1.35) translateY(-50px)",
    zIndex: "1",
    height: "auto",
    img: {
      height: "clamp(150px,20vw,165px)",
    },
    "& .expand": {
      display: "block",
    },
  },
});

export const MovieImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "5px",
});
