import {
  Box,
  Button,
  Container,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSearch,
  faPen,
  faUser,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { navbarStyles } from "../styles/navbarStyle";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const {
    navbarContainer,
    menuSection,
    menu,
    links,
    settingsSection,
    userAvatar,
    logoContainer,
    searchIcon,
    searchContainer,
    active,
    link,
    menuDropdown,
    customLine,
    arrow,
  } = navbarStyles();
  const [showInput, setShowInput] = useState(false);
  const { pathname } = useRouter();
  const theme = useTheme();
  const showInputIcon = useMediaQuery(theme.breakpoints.up("small"));
  const homeLogo = useMediaQuery(theme.breakpoints.down("mid"));
  const [position, setPosition] = useState(false);
  const page = "home";
  const logoSize = {
    logo: homeLogo ? "scale(1.1)" : "scale(1.8)",
    logoPadding: homeLogo ? "1.8rem 0 0 0 " : "1.8rem 0 0 4rem",
    btnPadding: homeLogo ? "1.8rem 0 0 0 " : "1.8rem 2rem 0 0",
  };

  const background = {
    log: position
      ? "#090909"
      : "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
    home: "transparent",
  };
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: any) {
      if (e.target.dataset.type !== "input") {
        setShowInput(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showInput]);

  return (
    <Container
      sx={{
        background: background.home,
        position: page === "home" ? "absolute" : "fixed",
      }}
      className={navbarContainer}
    >
      <Box
        className={menuSection}
        sx={{ padding: page === "home" ? logoSize.logoPadding : "0 0 0 1.5%" }}
      >
        <Box
          sx={{
            transform: page === "home" ? logoSize.logo : "scale(1)",
          }}
          className={logoContainer}
        >
          <img src="images/logo.png" />
        </Box>
        {page !== "home" ? (
          <Box className={menu}>
            <Box className={menuDropdown}>
              <Typography>Rasfoire</Typography>
              <FontAwesomeIcon icon={faSortDown} />
            </Box>
            <Box className="dropdownMenu">
              <Box className={links + " dropdown"}>
                <Box className={customLine}></Box>
                <Box className={arrow}></Box>
                <Link
                  className={pathname === "/" ? active + " " + link : link}
                  href="/"
                >
                  Pagina principala
                </Link>
                <Link
                  className={
                    pathname === "/seriale" ? active + " " + link : link
                  }
                  href=""
                >
                  Seriale
                </Link>
                <Link
                  className={pathname === "/filme" ? active + " " + link : link}
                  href=""
                >
                  Filme
                </Link>
                <Link
                  className={
                    pathname === "/noi-si-populare" ? active + " " + link : link
                  }
                  href=""
                >
                  Noi si populare
                </Link>
                <Link
                  className={
                    pathname === "/lista-mea" ? active + " " + link : link
                  }
                  href=""
                >
                  Lista mea
                </Link>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
      <Box
        className={settingsSection}
        sx={{ padding: page === "home" ? logoSize.btnPadding : "0 2% 0 0" }}
      >
        <Button sx={{ display: "none" }}>Conectare</Button>
        {page !== "home" ? (
          <Box>
            {showInputIcon ? (
              <FontAwesomeIcon
                onClick={(e: any) => {
                  e.stopPropagation();
                  setShowInput(true);
                }}
                className={searchIcon}
                icon={faSearch}
                style={{ display: showInput ? "none" : "block" }}
              />
            ) : null}
            <Box
              sx={{ display: showInput ? "flex" : "none" }}
              className={searchContainer}
              data-type="input"
            >
              <FontAwesomeIcon icon={faSearch} data-type="input" />
              <input
                type="text"
                placeholder="Titluri, persoane, genuri"
                data-type="input"
              />
            </Box>
          </Box>
        ) : null}

        {page !== "home" ? (
          <Box className={userAvatar}>
            <img style={{ cursor: "pointer" }} src="images/yellow.jpg" />
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faSortDown} />
            <Box className={"userSettingsDropdown"}>
              <Box className={"userDropdown"}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.9rem 0.6rem",
                  }}
                >
                  <img src="images/yellow.jpg" />
                  <Typography sx={{ cursor: "pointer" }}>Nume</Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    background: "hsla(0,0%,100%,.15)",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "9px",
                    padding: "0.4rem 0.6rem",
                    cursor: "pointer",
                    marginTop: "1rem",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "1.2rem", width: "32px" }}
                    icon={faPen}
                  />
                  <Typography>Gestionarea profilurilor</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "8px",
                    padding: "0.4rem 0.6rem",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "1.2rem", width: "32px" }}
                    icon={faUser}
                  />
                  <Typography>Cont</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "8px",
                    padding: "0.4rem 0.6rem",
                    cursor: "pointer",
                    marginBottom: "0.8rem",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "1.2rem", width: "32px" }}
                    icon={faCircleQuestion}
                  />
                  <Typography>Asistenta</Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    background: "hsla(0,0%,100%,.15)",
                  }}
                ></Box>
                <Button
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    display: "block",
                    width: "100%",
                    padding: "0.6rem 0",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Deconectare
                </Button>
              </Box>
            </Box>
          </Box>
        ) : null}
        <Button
          sx={{
            textTransform: "none",
            padding: "0.2rem 1.2rem",
            fontFamily: "Netflix Light",
            fontSize: "1rem",
            background: "red",
            "&:hover": {
              background: "red",
            },
          }}
          variant="contained"
        >
          Conectare
        </Button>
      </Box>
    </Container>
  );
}

export default Navbar;
