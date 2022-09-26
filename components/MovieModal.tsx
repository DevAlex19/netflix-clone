import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { ModalTypes } from "../pages/browse";
import { ModalContainer } from "../styles/movieModalStyle";

export type ModalType = {
  modal: ModalTypes;
  setModal: (modal: ModalTypes) => void;
};

function MovieModal({ setModal, modal }: ModalType) {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("medium"));

  useEffect(() => {
    if (modal.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <ModalContainer
      show={modal.show ? "true" : undefined}
      onClick={() => setModal({ ...modal, show: false })}
    >
      <Box
        sx={{
          background: "#181818",
          borderRadius: "10px",
          width: "50%",
          minWidth: "400px",
          marginTop: "3rem",
          overflow: "hidden",
          position: "absolute",
          animation: "fade 0.5s",
          "@keyframes fade": {
            "0%": {
              transform: "scale(0)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
        onClick={(e: any) => e.stopPropagation()}
      >
        <Box
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            zIndex: "1",
            background: "black",
            right: "20px",
            width: "35px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
          onClick={() => setModal({ ...modal, show: false })}
        >
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "1.5rem" }}
            icon={faClose}
          />
        </Box>
        <Box sx={{ height: "550px", position: "relative" }}>
          <img
            src={modal.poster}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              background: "linear-gradient(360deg,#181818 10%,transparent)",
              bottom: "0",
              width: "100%",
              height: "100px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            color: "white",
            justifyContent: "space-between",
            padding: "1rem 3rem",
          }}
        >
          <Box sx={{ width: mediumScreen ? "100%" : "60%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ fontSize: "1rem", color: "#3CCF4E" }}>
                97% concordanta
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>2021</Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "white",
                  border: "1px solid white",
                  padding: "0px 10px",
                }}
              >
                13+
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>8 sezoane</Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "0.7rem",
                  border: "1px solid white",
                  padding: "0px 5px",
                  borderRadius: "2px",
                }}
              >
                HD
              </Typography>
            </Box>
            <Typography sx={{ marginTop: "1.5rem", fontSize: "1rem" }}>
              {modal.description}
            </Typography>
          </Box>
          {!mediumScreen ? (
            <Box sx={{ width: "40%" }}>
              <Box
                sx={{ display: "flex", columnGap: "5px", marginBottom: "1rem" }}
              >
                <Typography
                  sx={{
                    color: "gray",
                    fontFamily: "Netflix Light",
                    fontSize: "0.9rem",
                  }}
                >
                  Distributie:{" "}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  {modal.actors.map((item: string) => item)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", columnGap: "5px" }}>
                <Typography
                  sx={{
                    color: "gray",
                    fontFamily: "Netflix Light",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                  }}
                >
                  Genuri:{" "}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  {modal.type.map((item: string) => item)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", columnGap: "5px" }}>
                <Typography
                  sx={{
                    color: "gray",
                    fontFamily: "Netflix Light",
                    fontSize: "0.9rem",
                  }}
                >
                  Acest program este:{" "}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem" }}>Haios</Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
        <Box sx={{ color: "white", marginTop: "1rem", padding: "0 3rem" }}>
          <Typography sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Episoade
          </Typography>
          <Box>
            <Box
              sx={{
                background: "#333333",
                borderRadius: "5px",
                overflow: "hidden",
                display: "flex",
                padding: "2rem 3rem",
                columnGap: "15px",
              }}
            >
              <img
                src={modal.poster}
                style={{ width: "150px", borderRadius: "5px" }}
              />
              <Box>
                <Typography sx={{ fontSize: "1rem" }}>Pilot</Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#b5b5b5",
                    fontFamily: "Netflix Light",
                  }}
                >
                  {modal.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ padding: "0 3rem", marginTop: "3rem", color: "white" }}>
          <Box>
            <Typography sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              Despre {modal.name}
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{ display: "flex", columnGap: "5px", marginBottom: "1rem" }}
            >
              <Typography
                sx={{
                  color: "gray",
                  fontFamily: "Netflix Light",
                  fontSize: "0.9rem",
                }}
              >
                Creatori:
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>
                {modal.creator}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", columnGap: "5px", marginBottom: "1rem" }}
            >
              <Typography
                sx={{
                  color: "gray",
                  fontFamily: "Netflix Light",
                  fontSize: "0.9rem",
                }}
              >
                Distributie:
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>
                {modal.actors.map((item: string) => item)}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", columnGap: "5px", marginBottom: "1rem" }}
            >
              <Typography
                sx={{
                  color: "gray",
                  fontFamily: "Netflix Light",
                  fontSize: "0.9rem",
                }}
              >
                Genuri:
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>
                {modal.type.map((item: string) => item)}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", columnGap: "5px", marginBottom: "1rem" }}
            >
              <Typography
                sx={{
                  color: "gray",
                  fontFamily: "Netflix Light",
                  fontSize: "0.9rem",
                }}
              >
                Acest program este:
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>Haios</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ModalContainer>
  );
}

export default MovieModal;
