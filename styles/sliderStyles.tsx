import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const SliderIconContainer = styled(Box)({
  background: "#141414",
  borderRadius: "50%",
  width: "29px",
  height: "29px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid gray",
  cursor: "pointer",
  color: "white",
  ":hover": {
    border: "1px solid white",
  },
  "&.white": {
    background: "white",
    border: "none",
    color: "black",
  },
});

export const SliderIcon = styled(FontAwesomeIcon)({
  fontSize: "1rem",
});

export const IconsContainer = styled(Box)({
  display: "flex",
  columnGap: "5px",
});

export const SliderItemContainer = styled(Box)({
  padding: "0.7rem 1rem 2rem",
});

export const Dot = styled(Box)({
  width: "4px",
  height: "4px",
  background: "gray",
  borderRadius: "50%",
});
export const ArrowContainer = styled(Box)({
  position: "absolute",
  color: "white",
  top: "0%",
  fontSize: "2.5rem",
  cursor: "pointer",
  height: "100%",
  width: "80px",
  display: "none",
  alignItems: "center",
  justifyContent: "center",

  "&.left": {
    left: "0",
  },
  "&.right": {
    right: "0",
  },
});
export const Arrow = styled(FontAwesomeIcon)({
  color: "white",
});

export const ItemImage = styled("img")(({ size }: any) => ({
  width: "100%",
  height: size === "true" ? "clamp(150px,20vw,165px)" : "100%",
  borderRadius: "5px",
  objectFit: "cover",
  cursor: "pointer",
}));

export const ItemsContainer = styled(Box)(
  ({ render, index, transition }: any) => ({
    display: "flex",
    columnGap: "7px",
    justifyContent: "start",
    transform:
      render === "true" ? `translateX(2.5%)` : `translateX(-${index * 48}%)`,
    transition: transition === "true" ? "transform 0.7s ease-in" : "none",

    "@media (max-width:1430px)": {
      transform:
        render === "true" ? `translateX(2.5%)` : `translateX(-${index * 58}%)`,
    },
    "@media (max-width:1080px)": {
      transform:
        render === "true" ? `translateX(2.5%)` : `translateX(-${index * 69}%)`,
    },
    "@media (max-width:900px)": {
      transform:
        render === "true" ? `translateX(2.5%)` : `translateX(-${index * 93}%)`,
    },
    "@media (max-width:655px)": {
      transform:
        render === "true" ? `translateX(2.5%)` : `translateX(-${index * 145}%)`,
    },
  })
);

export const ItemContainer = styled(Box)(({ active }: any) => ({
  minWidth: "16%",
  maxHeight: active === "true" ? "auto" : "clamp(150px,20vw,165px)",
  zIndex: active === "true" ? "1000" : "1",
  position: "relative",
  transform: active === "true" ? "translateY(-50px) scale(1.35)" : "scale(1)",
  borderRadius: "5px",
  background: "#141414",
  transition: "transform 0.7s",
  boxShadow: "5px 5px 10px black",
  "@media (max-width:1430px)": {
    minWidth: "20%",
  },
  "@media (max-width:1080px)": {
    minWidth: "25%",
  },
  "@media (max-width:900px)": {
    minWidth: "33.33%",
  },
  "@media (max-width:655px)": {
    minWidth: "50%",
  },
}));

export const TitleIcon = styled(FontAwesomeIcon)({
  "&.active": {
    color: "#54b9c5",
    fontSize: "1.2rem",
    marginLeft: "0.2rem",
    position: "absolute",
    left: "260px",
    opacity: "0",
    cursor: "pointer",
  },
  transition: "transform 0.5s",
});

export const ItemTitle = styled(Typography)({
  color: "#54b9c5",
  fontWeight: "bold",
  fontSize: "1rem",
  opacity: "0",
  transition: "opacity 0.3s, transform 0.3s",
  transform: "translateX(0px)",
  position: "absolute",
  left: "245px",
  cursor: "pointer",
});
