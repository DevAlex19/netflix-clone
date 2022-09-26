import { useState } from "react";
import AddProfile from "./AddProfile";
import EditProfile from "./EditProfile";
import ProfilesPage from "./ProfilesPage";

function Profiles() {
  const [page, setPage] = useState("choose");
  function getPage() {
    switch (page) {
      case "choose":
        return <ProfilesPage setPage={setPage} />;
      case "edit":
        return <EditProfile />;
      case "add":
        return <AddProfile setPage={setPage} />;
    }
  }
  return <>{getPage()}</>;
}

export default Profiles;
