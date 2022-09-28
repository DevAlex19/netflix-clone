import {
  faChevronDown,
  faPlay,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../assets/actions/actions";
import { initialStateType, MoviesType } from "../assets/reducers/mainSlice";
import { Shows } from "../assets/selectors/shows";
import { useAppDispatch } from "../assets/store/store";
import Loader from "../components/Loader";
import MovieModal from "../components/MovieModal";
import {
  MovieContainer,
  MovieImage,
  MovieSection,
  ShowsContainer,
} from "../styles/showsStyle";
import {
  Dot,
  IconsContainer,
  SliderIcon,
  SliderIconContainer,
  SliderItemContainer,
} from "../styles/sliderStyles";
import { ModalTypes } from "../pages/browse";
import { useRouter } from "next/router";

function MoviesList() {
  const { movies, moviesLoading } = useSelector(
    (state: initialStateType) => state
  );
  const { pathname, query } = useRouter();
  const shows = useSelector((state: initialStateType) =>
    Shows({ state, pathname, query })
  );

  const dispatch = useAppDispatch();
  const [modal, setModal] = useState<ModalTypes>({
    actors: [],
    creator: "",
    description: "",
    name: "",
    poster: "",
    seasons: "",
    type: [],
    show: false,
  });

  useEffect(() => {
    if (movies.length < 2) {
      dispatch(getMovies());
    }
  }, []);
  return (
    <>
      {!moviesLoading ? (
        <Box>
          {shows.length > 0 ? (
            <ShowsContainer>
              {shows.map((item: MoviesType, index: number) => {
                return (
                  <MovieContainer key={index} sx={{ position: "relative" }}>
                    <MovieSection>
                      <MovieImage src={item.poster} alt={item.poster} />
                      <SliderItemContainer className="expand">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <IconsContainer>
                            <SliderIconContainer className="white">
                              <SliderIcon icon={faPlay} />
                            </SliderIconContainer>
                            <SliderIconContainer>
                              <SliderIcon icon={faPlus} />
                            </SliderIconContainer>
                            <SliderIconContainer>
                              <SliderIcon icon={faThumbsUp} />
                            </SliderIconContainer>
                          </IconsContainer>
                          <SliderIconContainer
                            onClick={() =>
                              setModal({ ...modal, show: true, ...item })
                            }
                          >
                            <SliderIcon icon={faChevronDown} />
                          </SliderIconContainer>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            marginTop: "1rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "0.7rem", color: "#3CCF4E" }}
                          >
                            98% concordanta
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.6rem",
                              color: "white",
                              border: "1px solid white",
                              padding: "0px 5px",
                            }}
                          >
                            16+
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.7rem", color: "white" }}
                          >
                            1 h 58 min.
                          </Typography>
                          <Typography
                            sx={{
                              color: "white",
                              fontSize: "0.5rem",
                              border: "1px solid white",
                              padding: "0px 5px",
                              borderRadius: "2px",
                            }}
                          >
                            HD
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "1rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "white" }}
                          >
                            Intuneact
                          </Typography>
                          <Dot />
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "white" }}
                          >
                            Cu suspans
                          </Typography>
                          <Dot />
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "white" }}
                          >
                            Thriller de actioune
                          </Typography>
                        </Box>
                      </SliderItemContainer>
                    </MovieSection>
                  </MovieContainer>
                );
              })}
              <MovieModal modal={modal} setModal={setModal} />
            </ShowsContainer>
          ) : shows.length === 0 && pathname.includes("search") ? (
            <Box
              sx={{
                height: "600px",
                maxWidth: "900px",
                margin: "13rem auto 0",
                color: "white",
                fontSize: "0.9rem",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem" }}>
                Cautarea pentru &quot;{query.q}&quot; nu a returnat rezultate
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", margin: "1rem 0" }}>
                Sugestii:
              </Typography>
              <ul style={{ marginLeft: "2.5rem" }}>
                <li>Incearca alte cuvinte-cheie</li>
                <li>Cauti un film sau un serial?</li>
                <li>
                  Incearca sa cauti dupa titlul unui film sau al unui serial sau
                  dupa numele unui actor sau al unui regizor
                </li>
                <li>
                  Incearca un gen, cum ar fi comedie, romantic, sport sau drama
                </li>
              </ul>
            </Box>
          ) : null}
          s
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MoviesList;
