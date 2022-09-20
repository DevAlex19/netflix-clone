import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("auth");
    if (user) {
      router.push("/browse");
    }
  }, []);
  return <HomePage />;
};

export default Home;
