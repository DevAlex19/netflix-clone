import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addProfileName, deleteProfileName } from "../assets/actions/actions";
import { initialStateType } from "../assets/reducers/mainSlice";
import { useAppDispatch } from "../assets/store/store";
import {
  AddProfileBtn,
  Checkbox,
  ProfileInput,
} from "../styles/profilesPageStyles";
import { ProfileType } from "./AddProfile";

function EditProfile({ setPage, selected }: ProfileType) {
  const user = useSelector((state: initialStateType) => state.user);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState(selected);

  return (
    <Box sx={{ color: "white", width: "700px", margin: "2rem auto 0" }}>
      <Typography sx={{ fontSize: "4rem" }}>Editarea profilului</Typography>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "#333",
          marginBottom: "2rem",
        }}
      ></Box>
      <Box sx={{ display: "flex", alignItems: "start", columnGap: "35px" }}>
        <img
          style={{ borderRadius: "5px", width: "150px" }}
          src="/images/yellow.jpg"
        />
        <Box>
          <ProfileInput
            type="text"
            placeholder="Numele"
            style={{ margin: "0" }}
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
          />
          <Box
            sx={{
              width: "100%",
              height: "1px",
              background: "#333",
              margin: "2rem 0",
            }}
          ></Box>
          <Typography
            sx={{ color: "#cccccc", fontSize: "1.5rem", marginBottom: "1rem" }}
          >
            Setarile categoriei de varsta:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              background: "#333333",
              padding: "0.5rem",
              maxWidth: "max-content",
              borderRadius: "2px",
              marginBottom: "1rem",
            }}
          >
            Toate categoriile de varsta
          </Typography>
          <Typography sx={{ fontSize: "1.2rem" }}>
            Pentru acest profil, afiseaza titluri din toate categoriile de
            varsta.
          </Typography>
          <AddProfileBtn
            style={{
              margin: "2rem 0",
              fontSize: "1.2rem",
              padding: "0.6rem 2rem",
            }}
            className="cancel"
          >
            Editare
          </AddProfileBtn>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              background: "#333",
              marginBottom: "2rem",
            }}
          ></Box>
          <Typography
            sx={{
              color: "#cccccc",
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Optiuni de redare automata
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              marginBottom: "0.5rem",
            }}
          >
            <Checkbox>
              <input type="checkbox" />
              <FontAwesomeIcon icon={faCheck} />
            </Checkbox>
            <Typography sx={{ color: "#cccccc", fontSize: "1rem" }}>
              Redare automata a episodului urmator dintr-un serial pe toate
              dispozitivele.
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <Checkbox>
              <input type="checkbox" />
              <FontAwesomeIcon icon={faCheck} />
            </Checkbox>
            <Typography sx={{ color: "#cccccc", fontSize: "1rem" }}>
              Redare automata a previzionarilor in timpul navigarii pe toate
              dispozitivele.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "#333",
          margin: "2rem 0",
        }}
      ></Box>
      <Box>
        <AddProfileBtn
          onClick={() => {
            let newProfiles = [...user.profiles];
            const findProfile = newProfiles.findIndex(
              (item) => item === selected
            );
            if (input) {
              newProfiles[findProfile] = input;
              dispatch(
                addProfileName({
                  profiles: [...newProfiles],
                  user: user.name,
                })
              );
              setPage("choose");
            }
          }}
        >
          Salvare
        </AddProfileBtn>
        <AddProfileBtn className="cancel" onClick={() => setPage("choose")}>
          Anulare
        </AddProfileBtn>
        <AddProfileBtn
          className="cancel"
          onClick={() => {
            if (user.profiles.length > 1) {
              let newProfiles = [...user.profiles];
              const findProfile = newProfiles.findIndex(
                (item) => item === selected
              );
              newProfiles = [
                ...newProfiles.slice(0, findProfile),
                ...newProfiles.slice(findProfile + 1),
              ];
              dispatch(
                deleteProfileName({
                  profiles: [...newProfiles],
                  user: user.name,
                })
              );
              setPage("choose");
            }
          }}
        >
          Stergerea profilului
        </AddProfileBtn>
      </Box>
    </Box>
  );
}

export default EditProfile;
