import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const LoaderContainer = styled(Box)({
  width: "100px",
  height: "100px",
  top: "50%",
  position: "absolute",
  left: "50%",
  animation: "rotate 1.5s infinite linear",
  "&:before": {
    position: "absolute",
    content: "''",
    width: "100%",
    height: "100%",
    background: "url(/images/loader.webp)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  "@keyframes rotate": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});
