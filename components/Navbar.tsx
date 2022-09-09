import { Box, Button, Container, Typography, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { navbarStyles } from "../styles/navbarStyle";
import { useEffect, useState } from "react";
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
  } = navbarStyles();
  const [showInput, setShowInput] = useState(false);
  const { pathname } = useRouter();

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
    <Container className={navbarContainer}>
      <Box className={menuSection}>
        <Box className={logoContainer}>
          <img src="images/logo.png" />
        </Box>
        <Box className={menu}>
          <Box className={menuDropdown}>
            <Typography>Rasfoire</Typography>
            <FontAwesomeIcon icon={faSortDown} />
          </Box>
          <Box className={links + " dropdown"}>
            <Link
              className={pathname === "/" ? active + " " + link : link}
              href="/"
            >
              Pagina principala
            </Link>
            <Link
              className={pathname === "/seriale" ? active + " " + link : link}
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
              className={pathname === "/lista-mea" ? active + " " + link : link}
              href=""
            >
              Lista mea
            </Link>
          </Box>
        </Box>
      </Box>
      <Box className={settingsSection}>
        <Button sx={{ display: "none" }}>Conectare</Button>
        <Box>
          <FontAwesomeIcon
            onClick={(e: any) => {
              e.stopPropagation();
              setShowInput(true);
            }}
            className={searchIcon}
            icon={faSearch}
            style={{ display: showInput ? "none" : "block" }}
          />
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

        <Box className={userAvatar}>
          <img src="images/yellow.jpg" />
          <FontAwesomeIcon icon={faSortDown} />
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;
