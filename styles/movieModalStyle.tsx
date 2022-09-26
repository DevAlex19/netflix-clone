import { Box } from "@mui/material";
import { styled } from "@mui/styles";

export const ModalContainer = styled(Box)(({ show }: any) => ({
  position: "fixed",
  width: "100%",
  minHeight: "100%",
  background: "rgba(0,0,0,0.6)",
  top: "0",
  left: "0",
  display: show === "true" ? "flex" : "none",
  justifyContent: "center",
  overflowY: "scroll",
  zIndex: "5",
}));
