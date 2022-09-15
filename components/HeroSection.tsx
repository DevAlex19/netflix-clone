import {
  faChair,
  faCircleInfo,
  faInfo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function HeroSection() {
  return (
    <Box
      sx={{
        color: "white",
        background: "url(/images/poster.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "51vw",
        minHeight: "500px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        paddingLeft: "4rem",
      }}
    >
      <img
        style={{
          position: "relative",
          zIndex: "1",
          width: "clamp(100px,50vw,650px)",
        }}
        src="/images/name.webp"
        alt=""
      />
      <Box
        sx={{
          position: "absolute",
          background: "linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)",
          left: "0",
          height: "100%",
          width: "70%",
          top: "0",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          background:
            "linear-gradient(180deg,hsla(0,0%,9%,0),#161616 83.95%,#161616)",
          left: "0",
          height: "30%",
          width: "100%",
          bottom: "0",
        }}
      ></Box>
      <Typography
        sx={{
          position: "relative",
          zIndex: "1",
          fontSize: "clamp(1rem,1.6vw,1.3rem)",
          maxWidth: "clamp(300px,50vw,600px)",
          marginTop: "2rem",
        }}
      >
        In America de Nord a secolului al 18-lea, braconierii si antreprenorii
        fara scrupule se lupta sa preia controlul asupra comertului cu blanuri
        de la compania Hudson's Bay.
      </Typography>
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          color: "black",
          marginTop: "2rem",
          columnGap: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "18px",
            background: "rgba(255,255,255)",
            // padding: "0.8rem 2.2rem",
            justifyContent: "center",
            width: "clamp(130px,20vw,180px)",
            height: "clamp(45px,20vw,55px)",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            style={{ fontSize: "clamp(1.3rem,2vw,2rem)" }}
            icon={faPlay}
          />
          <Typography
            sx={{ fontSize: "clamp(1rem,2vw,1.3rem)", fontWeight: "bold" }}
          >
            Redare
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "18px",
            background: "rgba(109, 109, 110, 0.7);",
            // padding: "0.8rem 2.2rem",
            width: "clamp(250px,20vw,300px)",
            height: "clamp(45px,20vw,55px)",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            style={{ fontSize: "clamp(1.3rem,2vw,2rem)" }}
            icon={faCircleInfo}
          />
          <Typography
            sx={{ fontSize: "clamp(1rem,2vw,1.3rem)", fontWeight: "bold" }}
          >
            Mai multe informatii
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          margin: "3.5rem auto 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            // rowGap: "1.2rem",
            borderRight: "1px solid rgba(255, 255, 255, 0.6)",
            // paddingRight: "7rem",
            width: "clamp(160px,20vw,350px)",
            height: "clamp(55px,5vw,80px)",
          }}
        >
          <FontAwesomeIcon
            style={{ fontSize: "clamp(1.5rem,5vw,2.3rem)" }}
            icon={faChair}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "clamp(0.8rem,1vw,1rem)",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Jason Momoa
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // rowGap: "1.2rem",
            borderRight: "1px solid rgba(255, 255, 255, 0.6)",
            width: "clamp(160px,20vw,350px)",
            alignItems: "center",
            justifyContent: "space-between",
            height: "clamp(55px,5vw,80px)",
          }}
        >
          <FontAwesomeIcon
            style={{ fontSize: "clamp(1.5rem,5vw,2.3rem)" }}
            icon={faChair}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "clamp(0.8rem,1vw,1rem)",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Landon Libairon
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // rowGap: "1.2rem",
            width: "clamp(160px,20vw,350px)",
            alignItems: "center",
            height: "clamp(55px,5vw,80px)",
            justifyContent: "space-between",
          }}
        >
          <FontAwesomeIcon
            style={{ fontSize: "clamp(1.5rem,5vw,2.3rem)" }}
            icon={faChair}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "clamp(0.8rem,1vw,1rem)",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Alun Armstrong
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
