import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";

export const ProfilesContainer = styled(Box)({
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
});

export const ProfileAvatar = styled(Box)({
  width: "200px",
  position: "relative",
  borderRadius: "5px",
  overflow: "hidden",

  "&:hover": {
    border: "4px solid #808080",
  },
});

export const IconContainer = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0,0.5)",
  top: "0",
  left: "0",
});

export const ProfilesButton = styled(`button`)({
  background: "white",
  fontFamily: "Netflix Regular",
  border: "none",
  fontSize: "1.5rem",
  padding: "0.8rem 2.5rem",
  marginTop: "5rem",
  cursor: "pointer",
  "&:hover": {
    background: "red",
    color: "white",
  },
});

export const ProfileInput = styled("input")({
  fontFamily: "Netflix Regular",
  background: "#666666",
  color: "#cccccc",
  outline: "none",
  border: "none",
  fontSize: "1.6rem",
  padding: "0.5rem 1rem",
  marginLeft: "2rem",
  "::placeholder": {
    color: "#cccccc",
  },
});

export const AddProfileBtn = styled("button")({
  fontFamily: "Netflix Regular",
  fontSize: "1.4rem",
  padding: "1rem 1.5rem",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    background: "red",
    color: "white",
  },
  "&.cancel": {
    marginLeft: "1.5rem",
    background: "none",
    color: "#cccccc",
    border: "1px solid #cccccc",
  },
  "&.cancel:hover": {
    color: "white",
    border: "1px solid white",
  },
});

export const Checkbox = styled(Box)({
  border: "1px solid #333",
  width: "40px",
  height: "40px",
  background: "none",
  position: "relative",
  "& input": {
    width: "100%",
    height: "100%",
    opacity: "0",
  },
  "& input:checked ~ svg": {
    display: "block",
  },
  "& svg": {
    position: "absolute",
    left: "0",
    top: "0",
    fontSize: "2rem",
    display: "none",
    pointerEvents: "none",
  },
});
