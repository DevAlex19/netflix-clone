import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const navbarStyles: any = makeStyles((theme: Theme) => ({
  "@global": {
    "@keyframes fadeIn": {
      "0%": {
        width: "0px",
      },
      "100%": {
        width: "275px",
      },
    },
  },

  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%",
    height: "68px",
    // background: "#090909",
    background: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
    [theme.breakpoints.up("sm")]: {},
  },
  menuSection: {
    display: "flex",
    alignItems: "center",
    columnGap: "35px",
    paddingLeft: "1.5%",
    [theme.breakpoints.down("medium")]: {
      columnGap: "15px",
    },
  },
  logoContainer: {
    width: "110px",
    height: "40px",
    position: "relative",

    "& img": {
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      cursor: "pointer",
    },
  },
  menu: {
    position: "relative",
    [theme.breakpoints.down("medium")]: {
      "&:hover .dropdown": {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
        background: "rgba(11,11,11,0.5)",
        top: "70px",
        width: "200px",
        left: "50%",
        transform: "translateX(-50%)",
      },
    },
  },
  menuDropdown: {
    display: "none",
    [theme.breakpoints.down("medium")]: {
      display: "flex",
      columnGap: "10px",
      color: "white",
      cursor: "pointer",
      fontSize: "0.9rem",
      "& p": {
        fontSize: "0.9rem",
        cursor: "pointer",
      },
    },
  },
  links: {
    display: "flex",
    columnGap: "20px",
    fontSize: "1rem",
    [theme.breakpoints.down("medium")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "#e5e5e5",
    fontSize: "clamp(0.8rem,1.5vw,0.9rem)",
    "&:hover": {
      color: "gray",
    },
  },

  active: {
    color: "white",
    fontWeight: "bolder",
  },
  settingsSection: {
    display: "flex",
    alignItems: "center",
    paddingRight: "2%",
    columnGap: "30px",
  },
  userAvatar: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "32px",
      borderRadius: "5px",
      cursor: "pointer",
      marginRight: "0.5rem",
    },
    "& svg": {
      fontSize: "0.9rem",
      cursor: "pointer",
      color: "white",
    },
  },
  searchIcon: {
    fontSize: "1.3rem",
    cursor: "pointer",
    color: "white",
  },
  searchContainer: {
    border: "1px solid white",
    height: "35px",
    width: "275px",
    alignItems: "center",
    padding: "0 0.5rem",
    animation: "fadeIn 0.3s",

    "& svg": {
      color: "white",
      fontSize: "1.3rem",
      marginRight: "1rem",
      cursor: "pointer",
    },
    "& input": {
      outline: "none",
      border: "none",
      background: "transparent",
      color: "white",
      height: "100%",
      width: "100%",
      padding: "0",
      margin: "0",
      fontFamily: "Netflix Light",
      fontSize: "0.9rem",
    },
    "& fieldset": {
      display: "none",
    },
  },
}));
