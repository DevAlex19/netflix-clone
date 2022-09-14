import styled from "@emotion/styled";

export const Input = styled("input")(({ theme }: any) => ({
  outline: "none",
  height: "100%",
  fontSize: "1rem",
  border: "none",
  padding: "0.6rem 0 0 0.5rem",
  width: "100%",
  display: "block",
}));
export const Label = styled("label")({
  position: "absolute",
  color: "#8c8c8c",
  transition: "transform 0.3s, font-size 0.3s",
  fontSize: "1rem",
  paddingLeft: "0.5rem",
  pointerEvents: "none",
});
