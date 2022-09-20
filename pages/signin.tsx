import { useRouter } from "next/router";
import { useEffect } from "react";
import SignInPage from "../components/SignInFormPage";

function SignIn() {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("auth");
    if (user) {
      router.push("/browse");
    }
  }, []);
  return <SignInPage />;
}

export default SignIn;
