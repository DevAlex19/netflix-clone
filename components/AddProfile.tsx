import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addProfileName } from "../assets/actions/actions";
import { initialStateType } from "../assets/reducers/mainSlice";
import { useAppDispatch } from "../assets/store/store";
import {
  AddProfileBtn,
  ProfileInput,
  ProfilesContainer,
} from "../styles/profilesPageStyles";

export type ProfileType = {
  setPage: (page: string) => void;
  page?: string;
  setSelected?: any;
  selected?: string;
};

function AddProfile({ setPage }: ProfileType) {
  const [input, setInput] = useState("");
  const user = useSelector((state: initialStateType) => state.user);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ color: "white", width: "800px", margin: "10rem auto 0" }}>
      <Typography sx={{ fontSize: "4.5rem", marginBottom: "1rem" }}>
        Adaugarea unui profil
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5rem",
          color: "#808080",
        }}
      >
        Adauga un profil pentru alta persoana care vizioneaza pe Netflix.
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "#333",
          margin: "1rem 0 0",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <img
          style={{ width: "150px", borderRadius: "5px" }}
          src="/images/yellow.jpg"
        />
        <ProfileInput
          placeholder="Numele"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "#333",
          margin: "0 0 2.5rem",
        }}
      ></Box>
      <Box>
        <AddProfileBtn
          onClick={() => {
            dispatch(
              addProfileName({
                profiles: [...user.profiles, input],
                user: user.name,
              })
            );
            setPage("choose");
          }}
        >
          Continuare
        </AddProfileBtn>
        <AddProfileBtn className="cancel" onClick={() => setPage("choose")}>
          Anulare
        </AddProfileBtn>
      </Box>
    </Box>
  );
}

export default AddProfile;
