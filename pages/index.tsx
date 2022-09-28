import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  const router = useRouter();
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("auth");
    if (user) {
      router.push("/browse");
    } else {
      setFirstRender(true);
    }
  }, []);

  return <>{firstRender ? <HomePage /> : <Loader />}</>;
};

export default Home;
