import { Box } from "@mui/system";
import SignInForm from "./SignInForm";

function SignInPage() {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="/images/hero.jpg"
          alt="background"
        />
      </Box>
      <Box
        sx={{
          position: "fixed",
          background: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          top: "0",
        }}
      ></Box>
      <SignInForm />
    </Box>
  );
}

export default SignInPage;
