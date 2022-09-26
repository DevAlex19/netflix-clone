import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../assets/actions/actions";
import { initialStateType } from "../assets/reducers/mainSlice";
import { useAppDispatch } from "../assets/store/store";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import MovieModal from "../components/MovieModal";
import Slider from "../components/Slider";

export type ModalTypes = {
  actors: any;
  creator: string;
  description: string;
  name: string;
  poster: string;
  seasons: string;
  type: any;
  show: boolean;
};

function Browse() {
  const [modal, setModal] = useState({
    actors: [],
    creator: "",
    description: "",
    name: "",
    poster: "",
    seasons: "",
    type: [],
    show: false,
  });
  const dispatch = useAppDispatch();
  const { moviesLoading } = useSelector((state: initialStateType) => state);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <Box style={{ overflow: "hidden" }}>
      {moviesLoading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <Slider setModal={setModal} modal={modal} />
          <MovieModal setModal={setModal} modal={modal} />
        </>
      )}
    </Box>
  );
}

export default Browse;
