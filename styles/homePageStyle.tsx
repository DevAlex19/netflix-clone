import { styled } from "@mui/styles";

export const MyStyledButton = styled("button")({
  backgroundColor: (props: any) => props.color,
});

export const HeaderSection = styled("div")(({ theme }: any) => ({
  height: "820px",
  position: "relative",
  background: "url(/images/hero.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "8px solid #222",
  [theme.breakpoints.down("mid")]: {
    height: "600px",
  },
}));

export const Overlay = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,.4)",
  backgroundImage:
    "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))",
});

export const HeaderContainer = styled("div")(({ theme }: any) => ({
  position: "relative",
  zIndex: "2",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
  [theme.breakpoints.down("mid")]: {
    maxWidth: "500px",
    margin: "0 1rem",
  },
}));

export const Input = styled("input")(({ theme }: any) => ({
  outline: "none",
  height: "100%",
  fontSize: "1rem",
  border: "none",
  padding: "0.6rem 0 0 0.5rem",
  width: "100%",
  [theme.breakpoints.down("mid")]: {
    borderRadius: "3px",
  },
}));
export const Label = styled("label")({
  position: "absolute",
  color: "#8c8c8c",
  transition: "transform 0.3s, font-size 0.3s",
  fontSize: "1rem",
  paddingLeft: "0.5rem",
  pointerEvents: "none",
});

export const SubButton = styled("button")(({ theme }: any) => ({
  width: "25%",
  background: "rgba(229,9,20)",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "1.5rem",
  [theme.breakpoints.down("mid")]: {
    position: "absolute",
    top: "100px",
    borderRadius: "2px",
    padding: "0.6rem 0",
    fontSize: "1rem",
    width: "100px",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));
