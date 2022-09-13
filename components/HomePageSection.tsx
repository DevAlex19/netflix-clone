import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

function HomePageSection() {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("s"));
  const font = {
    title: smallScreen ? "1.6rem" : mediumScreen ? "2.5rem" : "3rem",
    description: smallScreen ? "1.1rem" : mediumScreen ? "1.3rem" : "1.5rem",
  };

  return (
    <>
      <Box
        sx={{
          color: "white",
          background: "#000000",
          display: "flex",
          flexDirection: mediumScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "20px",
          padding: mediumScreen ? "4rem 0" : "1rem 0 3rem",
          borderBottom: "8px solid #222",
        }}
      >
        <Box
          sx={{
            width: mediumScreen ? "100%" : "30%",
            minWidth: "400px",
            padding: mediumScreen ? "0 2rem" : "0",
            textAlign: mediumScreen ? "center" : "",
          }}
        >
          <Typography
            sx={{
              fontSize: font.title,
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Vizionare pe TV.
          </Typography>
          <Typography sx={{ fontSize: font.description }}>
            Vizioneaza pe Smart TV, Playstation, Xbox, Chromecast, Apple TV,
            playere Blu-ray si altele.
          </Typography>
        </Box>
        <Box
          sx={{
            width: mediumScreen ? "70%" : "30%",
            position: "relative",
            minWidth: mediumScreen ? "300px" : "400px",
          }}
        >
          <img
            style={{ width: "100%", position: "relative", zIndex: "1" }}
            src="/images/tv.png"
            alt="tv"
          />
          <img
            style={{
              width: "75%",
              height: "75%",
              position: "absolute",
              left: "12%",
              top: "16%",
              objectFit: "cover",
            }}
            src="/images/dashboard.png"
            alt="dashboard"
          />
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "60px",
          padding: mediumScreen ? "4rem 0" : "2rem 0 3rem",
          borderBottom: "8px solid #222",
          flexDirection: mediumScreen ? "column-reverse" : "row",
        }}
      >
        <Box
          sx={{
            width: mediumScreen ? "70%" : "30%",
            position: "relative",
            minWidth: mediumScreen ? "300px" : "400px",
          }}
        >
          <img
            style={{ width: "100%", position: "relative", zIndex: "1" }}
            src="/images/mobile.jpg"
            alt="tv"
          />
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#000000",
              border: "2px solid  #222",
              borderRadius: "10px",
              overflow: "hidden",
              left: "50%",
              top: "67%",
              transform: "translateX(-50%)",
              zIndex: "1",
              padding: "0.6rem",
              width: "62%",
              minWidth: mediumScreen ? "280px" : "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: "190px",
              }}
            >
              <img
                style={{ width: "55px" }}
                src="/images/boxshot.png"
                alt="poster"
              />
              <Box sx={{ marginLeft: "1rem" }}>
                <Typography sx={{ fontSize: "1rem" }}>
                  Stranger Things
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#0071eb" }}>
                  Descarcare in curs...
                </Typography>
              </Box>
            </Box>

            <img style={{ width: "50px" }} src="/images/icon.gif" alt="icon" />
          </Box>
        </Box>
        <Box
          sx={{
            minWidth: "400px",
            width: mediumScreen ? "100%" : "30%",
            padding: mediumScreen ? "0 2rem" : "0",
            textAlign: mediumScreen ? "center" : "",
          }}
        >
          <Typography
            sx={{
              fontSize: font.title,
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Descarca serialele preferate pentru a le viziona offline.
          </Typography>
          <Typography sx={{ fontSize: font.description }}>
            Salvează cu ușurință titlurile preferate și vei avea mereu ceva de
            vizionat.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "20px",
          padding: mediumScreen ? "4rem 0" : "2rem 0 3rem",
          borderBottom: "8px solid #222",
          flexDirection: mediumScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            width: mediumScreen ? "100%" : "30%",
            minWidth: "400px",
            padding: mediumScreen ? "0 2rem" : "0",
            textAlign: mediumScreen ? "center" : "",
          }}
        >
          <Typography
            sx={{
              fontSize: font.title,
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Vizioneaza oriunde.
          </Typography>
          <Typography sx={{ fontSize: font.description }}>
            Vizioneaza nelimitat filme si seriale pe telefon, tableta, laptop si
            televizor, fara alte costuri.
          </Typography>
        </Box>
        <Box
          sx={{
            width: mediumScreen ? "70%" : "30%",
            position: "relative",
            minWidth: mediumScreen ? "300px" : "400px",
          }}
        >
          <img
            style={{ width: "100%", position: "relative", zIndex: "1" }}
            src="/images/device.png"
            alt="device"
          />
          <img
            style={{
              width: "58%",
              height: "50%",
              position: "absolute",
              left: "20%",
              top: "10%",
              objectFit: "cover",
            }}
            src="/images/dashboard.png"
            alt="dashboard"
          />
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "20px",
          padding: mediumScreen ? "4rem 0" : "2rem 0 3rem",
          borderBottom: "8px solid #222",
          flexDirection: mediumScreen ? "column-reverse" : "row",
        }}
      >
        <Box
          sx={{
            position: "relative",
            minWidth: mediumScreen ? "300px" : "400px",
            width: mediumScreen ? "70%" : "30%",
          }}
        >
          <img
            style={{ width: "100%", position: "relative", zIndex: "1" }}
            src="/images/category.png"
            alt="device"
          />
        </Box>
        <Box
          sx={{
            width: mediumScreen ? "100%" : "30%",
            minWidth: "400px",
            padding: mediumScreen ? "0 2rem" : "0",
            textAlign: mediumScreen ? "center" : "",
          }}
        >
          <Typography
            sx={{
              fontSize: font.title,
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Creeaza profiluri pentru copii.
          </Typography>
          <Typography sx={{ fontSize: font.description }}>
            Trimite copiii în aventuri alături de personajele favorite, într-un
            spațiu creat special pentru ei, inclus gratuit în abonament.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default HomePageSection;
