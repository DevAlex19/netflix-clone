import {
  faChevronRight,
  faClose,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { questions } from "../assets/questions";
import { Label, SubButton, Input } from "../styles/homePageStyle";

function QuestionsSection() {
  const [show, setShow] = useState(-1);
  const [input, setInput] = useState({ value: "", error: "" });
  const [label, setLabel] = useState(false);
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("medium"));
  const mid = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("small"));
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const width = smallScreen ? "95%" : mediumScreen ? "80%" : "50%";

  return (
    <>
      <Box
        sx={{
          color: "white",
          background: "#000000",
          borderBottom: "8px solid #222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3.5rem 0 8rem",
        }}
      >
        <Typography
          sx={{
            fontSize: mediumScreen ? "2.5rem" : "3rem",
            fontWeight: "bold",
          }}
        >
          Intrebari frecvente
        </Typography>
        <Box
          sx={{
            maxWidth: smallScreen ? "auto" : "850px",
            width: width,
            marginTop: "2.5rem",
          }}
        >
          {questions.map((item: any, index: number) => {
            const strArr = item.answer.split("*");
            return (
              <Box key={index} sx={{ marginBottom: "0.5rem" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    background: "#303030",
                    alignItems: "center",
                    marginBottom: "1px",
                    padding: "1rem 2rem",
                  }}
                  onClick={() => {
                    if (show === index) {
                      setShow(-1);
                    } else {
                      setShow(index);
                    }
                  }}
                >
                  <Typography
                    sx={{ fontSize: mediumScreen ? "1.3rem" : "1.7rem" }}
                  >
                    {item.question}
                  </Typography>
                  {show === index ? (
                    <FontAwesomeIcon
                      style={{ fontSize: "2rem" }}
                      icon={faClose}
                    />
                  ) : (
                    <FontAwesomeIcon
                      style={{ fontSize: "2rem" }}
                      icon={faPlus}
                    />
                  )}
                </Box>
                <Box
                  style={{
                    background: "#303030",
                    maxHeight: show === index ? "700px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.2s ease-in",
                  }}
                >
                  {strArr.map((item: string, index: number) => {
                    return (
                      <Box key={index}>
                        <Typography
                          sx={{
                            fontSize: mediumScreen ? "1.3rem" : "1.7rem",
                            lineHeight: "2rem",
                            padding: index === 0 ? "2rem 2rem 0" : "0 2rem",
                          }}
                        >
                          {item}
                        </Typography>
                        <br />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "4rem",
            maxWidth: "800px",
          }}
        >
          <Typography sx={{ marginBottom: "0.5rem", textAlign: "center" }}>
            Ești gata de vizionare? Introdu adresa de e-mail pentru a te abona
            sau pentru a reactiva abonamentul.
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "65px",
              width: mid ? "80% " : "650px",
              marginTop: "1.5rem",
              position: "relative",
              background: "white",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: mediumScreen ? "100%" : "75%",
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
                style={{ fontSize: mediumScreen ? "0.8rem" : "1.2rem" }}
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
        </Box>
      </Box>
    </>
  );
}

export default QuestionsSection;
