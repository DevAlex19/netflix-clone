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
    top: "0",
    zIndex: "1",
    // transition: "all 0.5s ease-in",
  },
  menuSection: {
    display: "flex",
    alignItems: "center",
    columnGap: "35px",
    [theme.breakpoints.down("medium")]: {
      columnGap: "15px",
    },
  },
  logoContainer: {
    width: "110px",
    height: "40px",
    position: "relative",
    overflow: "hidden",
    "& img": {
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      cursor: "pointer",
    },
  },
  customLine: {
    [theme.breakpoints.down("medium")]: {
      width: "100%",
      height: "2px",
      background: "#e5e5e5",
      position: "absolute",
      top: "-3px",
    },
  },
  arrow: {
    [theme.breakpoints.down("medium")]: {
      position: "absolute",
      borderBottom: "9px solid #e5e5e5",
      borderRight: "9px solid transparent",
      borderLeft: "9px solid transparent",
      top: "-11px",
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
        width: "250px",
        left: "50%",
        transform: "translateX(-50%)",
        border: "1px solid hsla(0,0%,100%,.15)",
      },
      "&:hover .dropdown a": {
        padding: "0.7rem 0",
      },
      "& a": {
        display: "block",
        width: "100%",
        textAlign: "center",
      },
      "& a:hover": {
        background: "rgba(144,144,144,0.1)",
      },

      "&:hover .dropdownMenu": {
        width: "70px",
        height: "100%",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        paddingTop: "1.3rem",
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
    columnGap: "30px",
  },
  userAvatar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
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
    "& .userSettingsDropdown": {
      width: "50px",
      height: "100%",
      position: "absolute",
      left: "50%",
      top: "20px",
      transform: "translateX(-50%)",
      paddingTop: "1.3rem",
      color: "white",
      display: "none",
    },
    "&:hover .userSettingsDropdown": {
      display: "block",
    },
    "& .userDropdown": {
      position: "absolute",
      right: "0",
      top: "24px",
      width: "220px",
      border: "1px solid hsla(0,0%,100%,.15)",
      background: "rgba(11,11,11,0.5)",
    },
    "& p": {
      fontFamily: "Netflix Light",
      fontSize: "0.9rem",
    },
    "& p:hover": {
      textDecoration: "underline",
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
    [theme.breakpoints.down("small")]: {
      display: "none",
    },
  },
}));
