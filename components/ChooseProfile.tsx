import { faCirclePlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { setHttpAgentOptions } from "next/dist/server/config";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { initialStateType, selectProfile } from "../assets/reducers/mainSlice";
import { useAppDispatch } from "../assets/store/store";
import {
  AddProfileBtn,
  IconContainer,
  ProfileAvatar,
  ProfilesContainer,
} from "../styles/profilesPageStyles";
import { ProfileType } from "./AddProfile";

function ChooseProfile({ setPage }: ProfileType) {
  const { profiles } = useSelector((state: initialStateType) => state.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <ProfilesContainer>
      <Typography sx={{ fontSize: "4rem", marginBottom: "3rem" }}>
        Alege un profil
      </Typography>
      <Box sx={{ display: "flex", columnGap: "40px" }}>
        {profiles.map((profile, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                cursor: "pointer",
                "&:hover p": {
                  color: "white",
                },
              }}
              onClick={() => {
                dispatch(selectProfile(profile));
                router.push("/browse");
              }}
            >
              <ProfileAvatar>
                <img
                  style={{ width: "100%", display: "block" }}
                  src="/images/yellow.jpg"
                />
                <IconContainer></IconContainer>
                <FontAwesomeIcon
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: "2.5rem",
                  }}
                  icon={faEdit}
                />
              </ProfileAvatar>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "#808080",
                  marginTop: "1rem",
                }}
              >
                {profile.slice(0, 9)}
              </Typography>
            </Box>
          );
        })}

        {profiles.length < 5 ? (
          <Box
            sx={{
              cursor: "pointer",
              "&:hover p": {
                color: "white",
              },
            }}
            onClick={() => {
              setPage("add");
            }}
          >
            <Box
              sx={{
                width: "200px",
                position: "relative",
                borderRadius: "5px",
                height: "200px",
                overflow: "hidden",
                "&:hover > div": {
                  background: "white",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: "0",
                  left: "0",
                }}
              ></Box>
              <FontAwesomeIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  fontSize: "5rem",
                  color: "#808080",
                }}
                icon={faCirclePlus}
              />
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.5rem",
                color: "#808080",
                marginTop: "1rem",
              }}
            >
              Adauga un profil
            </Typography>
          </Box>
        ) : null}
      </Box>
      <AddProfileBtn
        onClick={() => {
          router.push("/profile-edit");
        }}
        style={{ marginTop: "5rem" }}
        className="cancel"
      >
        Gestionarea profilurilor
      </AddProfileBtn>
    </ProfilesContainer>
  );
}

export default ChooseProfile;
