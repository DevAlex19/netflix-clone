import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {
  HeaderContainer,
  HeaderSection,
  Input,
  Label,
  Overlay,
  SubButton,
} from "../styles/homePageStyle";

function HomePage() {
  const [label, setLabel] = useState(false);
  const theme = useTheme();
  const mid = useMediaQuery(theme.breakpoints.down("mid"));
  return (
    <>
      <HeaderSection>
        <Overlay />
        <HeaderContainer>
          <Typography
            sx={{
              fontSize: mid ? "1.8rem" : "4rem",
              fontWeight: "bolder",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            Acces nelimitat la filme, seriale si multe altele.
          </Typography>
          <Typography
            sx={{
              fontSize: mid ? "1.2rem" : "1.5rem",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Vizioneaza oriunde. Anuleaza oricand.
          </Typography>
          <Typography sx={{ marginTop: "2rem", textAlign: "center" }}>
            Esti gata de vizionare? Introdu adresa de e-mail pentru a te abona
            sau pentru a reactiva abonamentul.
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "65px",
              width: mid ? "100% " : "650px",
              marginTop: "1.5rem",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: mid ? "100%" : "75%",
              }}
              onFocus={() => setLabel(true)}
              onBlur={() => {
                setLabel(false);
              }}
            >
              <Label
                style={{
                  transform: label ? "translateY(5px)" : "translateY(22px)",
                  fontSize: label ? "0.8rem" : "1rem",
                }}
              >
                Adresa de e-mail
              </Label>
              <Input
                type="text"
                onChange={(e: any) => {
                  if (e.target.value.length > 0) {
                    setLabel(true);
                  } else {
                    setLabel(false);
                  }
                }}
              />
            </Box>
            <SubButton>
              Incepe{" "}
              <FontAwesomeIcon
                style={{ fontSize: mid ? "0.8rem" : "1.2rem" }}
                icon={faChevronRight}
              />
            </SubButton>
          </Box>
        </HeaderContainer>
      </HeaderSection>
    </>
  );
}

export default HomePage;
