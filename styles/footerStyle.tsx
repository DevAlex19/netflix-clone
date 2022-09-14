import { styled } from "@mui/styles";

export const Link = styled("a")({
  color: "#6f7373",
  cursor: "pointer",
  display: "block",
  fontFamily: "Netflix Light",
  fontSize: "0.85rem",
  "&:hover": {
    textDecoration: "underline",
  },
});
