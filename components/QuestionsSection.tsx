import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { questions } from "../assets/questions";

function QuestionsSection() {
  const [show, setShow] = useState(-1);

  return (
    <Box
      sx={{
        color: "white",
        background: "#000000",
        borderBottom: "8px solid #222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3.5rem 0",
      }}
    >
      <Typography sx={{ fontSize: "3rem", fontWeight: "bold" }}>
        Intrebari frecvente
      </Typography>
      <Box sx={{ maxWidth: "850px", width: "50%", marginTop: "2.5rem" }}>
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
                <Typography sx={{ fontSize: "1.7rem" }}>
                  {item.question}
                </Typography>
                {show === index ? (
                  <FontAwesomeIcon
                    style={{ fontSize: "2rem" }}
                    icon={faClose}
                  />
                ) : (
                  <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faPlus} />
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
                          fontSize: "1.7rem",
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
    </Box>
  );
}

export default QuestionsSection;
