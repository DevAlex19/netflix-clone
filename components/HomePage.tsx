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
import HomePageSection from "./HomePageSection";
import QuestionsSection from "./QuestionsSection";

function HomePage() {
  const [label, setLabel] = useState(false);
  const theme = useTheme();
  const mid = useMediaQuery(theme.breakpoints.down("mid"));
  const [input, setInput] = useState({ value: "", error: "" });
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
          <Typography sx={{ marginTop: "1.8rem", textAlign: "center" }}>
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
                if (input.value.length <= 0) {
                  setLabel(false);
                }
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
                value={input.value}
                onFocus={() => setInput({ ...input, error: "" })}
                onChange={(e: any) => {
                  if (e.target.value.length > 0) {
                    setLabel(true);
                  } else {
                    setLabel(false);
                  }
                  setInput({ ...input, value: e.target.value });
                }}
              />
            </Box>
            <SubButton
              onClick={() => {
                if (input.value.length <= 0) {
                  setInput({ ...input, error: "E-mailul este obligatoriu." });
                  return;
                }
                if (!emailRegex.test(input.value)) {
                  setInput({
                    ...input,
                    error: "Introdu o adresă de e-mail validă.",
                  });
                  return;
                }
              }}
            >
              Incepe{" "}
              <FontAwesomeIcon
                style={{ fontSize: mid ? "0.8rem" : "1.2rem" }}
                icon={faChevronRight}
              />
            </SubButton>
            <Typography
              sx={{
                position: "absolute",
                bottom: "-25px",
                color: "#ffa00a",
                fontSize: "1rem",
              }}
            >
              {input.error}
            </Typography>
          </Box>
        </HeaderContainer>
      </HeaderSection>
      <HomePageSection />
      <QuestionsSection />
    </>
  );
}

export default HomePage;
