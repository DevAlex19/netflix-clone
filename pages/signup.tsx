import { Box } from "@mui/material";
import { useState } from "react";
import CreateAcount from "../components/CreateAccount";
import FinalStep from "../components/FinalStep";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";

function SignUp() {
  const [page, setPage] = useState(3);

  function changePage() {
    switch (page) {
      case 0:
        return <StepOne setPage={setPage} />;
      case 1:
        return <CreateAcount />;
      case 2:
        return <StepTwo />;
      case 3:
        return <FinalStep />;
    }
  }
  return (
    <Box sx={{ background: "white", borderBottom: "1px solid #e6e6e6" }}>
      {changePage()}
    </Box>
  );
}

export default SignUp;
