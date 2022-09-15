import { Box } from "@mui/material";
import { useState } from "react";
import CreateAcount from "../components/CreateAccount";
import FinalStep from "../components/FinalStep";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";

function SignUp() {
  const [page, setPage] = useState(0);

  function changePage() {
    switch (page) {
      case 0:
        return <StepOne setPage={setPage} />;
      case 1:
        return <CreateAcount setPage={setPage} />;
      // case 2:
      //   return <StepTwo setPage={setPage} />;
      // case 3:
      //   return <FinalStep setPage={setPage} />;
    }
  }
  return (
    <Box sx={{ background: "white", borderBottom: "1px solid #e6e6e6" }}>
      {changePage()}
    </Box>
  );
}

export default SignUp;
