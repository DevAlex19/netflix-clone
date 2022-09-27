import { useState } from "react";
import AddProfile from "./AddProfile";
import EditProfile from "./EditProfile";
import ProfilesPage from "./ProfilesPage";

function Profiles() {
  const [page, setPage] = useState("choose");
  const [selected, setSelected] = useState("");
  function getPage() {
    switch (page) {
      case "choose":
        return <ProfilesPage setPage={setPage} setSelected={setSelected} />;
      case "edit":
        return <EditProfile setPage={setPage} selected={selected} />;
      case "add":
        return <AddProfile setPage={setPage} />;
    }
  }
  return <>{getPage()}</>;
}

export default Profiles;
