import { useState } from "react";
import AddProfile from "../components/AddProfile";
import ChooseProfile from "../components/ChooseProfile";

function Profile() {
  const [page, setPage] = useState("choose");
  function getPage() {
    switch (page) {
      case "choose":
        return <ChooseProfile setPage={setPage} />;
      case "add":
        return <AddProfile setPage={setPage} />;
    }
  }

  return <>{getPage()}</>;
}

export default Profile;
