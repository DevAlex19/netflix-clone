import {
  faChevronCircleRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMovies } from "../assets/actions/actions";
import { initialStateType } from "../assets/reducers/mainSlice";
import { useAppDispatch } from "../assets/store/store";
import {
  Arrow,
  ArrowContainer,
  Dot,
  IconsContainer,
  ItemContainer,
  ItemImage,
  ItemsContainer,
  ItemTitle,
  SliderIcon,
  SliderIconContainer,
  SliderItemContainer,
  TitleIcon,
} from "../styles/sliderStyles";
import { ModalType } from "./MovieModal";

const SLIDER_TITLES = [
  "Populare pe Netflix",
  "Filme de actiune",
  "Seriale",
  "Actiune si aventura",
  "Filme hollywoodiene",
  "Filme captivante",
  "Filme de actiune hollywoodiene",
  "Drame",
  "Filme blockbuster",
  "Drame americane",
];

function Slider({ setModal, modal }: ModalType) {
  const { movies } = useSelector((state: initialStateType) => state);
  const [cards, setCards] = useState<any>([]);

  let i = 0;
  const x = new Array(10).fill(0).map((item) => {
    let arr = {
      data: [...movies.slice(i, i + 18)],
      index: 0,
      direction: "",
      transition: true,
      firstRender: true,
      hoverImage: -1,
    };
    i = i + 18;
    return arr;
  });

  useEffect(() => {
    setCards([...x]);
  }, [movies]);

  function handleTransitionEnd(i: number) {
    switch (cards[i].direction) {
      case "right":
        handleNext(i);
        break;
      case "left":
        handlePrevious(i);
        break;
    }
  }
  function handlePrevious(i: number) {
    const newIndex = cards[i].index + 1;
    const newData = [
      ...cards[i].data.slice(cards[i].data.length - 3, cards[i].data.length),
      ...cards[i].data.slice(0, cards[i].data.length - 3),
    ];
    let newArr = [...cards];
    newArr[i].data = [...newData];
    newArr[i].transition = false;
    newArr[i].index = newIndex;

    setCards([...newArr]);
  }

  function handleNext(i: number) {
    if (cards[i].index === 3) {
      const newIndex = cards[i].index - 1;
      const newData = [
        ...cards[i].data.slice(3, cards[i].data.length),
        ...cards[i].data.slice(0, 3),
      ];
      let newArr = [...cards];
      newArr[i].data = [...newData];
      newArr[i].transition = false;
      newArr[i].index = newIndex;
      setCards([...newArr]);
    }
  }

  return (
    <>
      {cards.length > 0
        ? cards.map((item: any, i: number) => {
            return (
              <Box
                key={i}
                sx={{
                  transform: "translateY(-8vw)",
                  marginBottom: "4rem",
                  position: "relative",
                  zIndex: cards[i].hoverImage >= 0 ? "1" : "0",
                  "&:hover .active": {
                    opacity: "1",
                  },
                }}
              >
                <Box
                  sx={{
                    padding: "0 3rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "max-content",
                      position: "relative",
                      "&:hover .text": {
                        opacity: "1",
                        transform: "translateX(30px)",
                      },
                      "&:hover .move": {
                        transform: "translateX(140px)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      {SLIDER_TITLES[i]}
                    </Typography>
                    <TitleIcon className="active move" icon={faChevronRight} />
                    <ItemTitle className="text">Cautare in toate</ItemTitle>
                  </Box>
                </Box>

                <Box
                  sx={{
                    height: "clamp(150px,20vw,165px)",
                    position: "relative",
                    "&:hover .right,&:hover .left": {
                      display: "flex",
                    },
                  }}
                >
                  <ItemsContainer
                    render={cards[i].firstRender ? "true" : undefined}
                    index={cards[i].index}
                    transition={cards[i].transition ? "true" : undefined}
                    onTransitionEnd={() => handleTransitionEnd(i)}
                  >
                    {item.data.map((item: any, index: number) => {
                      return (
                        <ItemContainer
                          active={
                            cards[i].hoverImage === index ? "true" : undefined
                          }
                          key={index}
                          onMouseOver={() => {
                            let newArr = [...cards];
                            newArr[i].hoverImage = index;
                            setCards([...newArr]);
                          }}
                          onMouseOut={() => {
                            let newArr = [...cards];
                            newArr[i].hoverImage = -1;
                            setCards([...newArr]);
                          }}
                          onTransitionEnd={(e: any) => e.stopPropagation()}
                        >
                          <ItemImage
                            key={index}
                            src={item.poster}
                            size={
                              cards[i].hoverImage === index ? "true" : undefined
                            }
                          />
                          {cards[i].hoverImage === index ? (
                            <SliderItemContainer>
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
                          ) : null}
                        </ItemContainer>
                      );
                    })}
                  </ItemsContainer>
                  {!cards[i].firstRender ? (
                    <ArrowContainer className="left">
                      <Arrow
                        icon={faChevronLeft}
                        onClick={() => {
                          let newIndex = cards[i].index - 1;

                          if (cards[i].index === 0) return;

                          let newCards = [...cards];
                          newCards[i].index = newIndex;
                          newCards[i].direction = "left";
                          newCards[i].transition = true;
                          setCards([...newCards]);
                        }}
                      />
                    </ArrowContainer>
                  ) : null}
                  <ArrowContainer className="right">
                    <Arrow
                      icon={faChevronRight}
                      onClick={() => {
                        let newIndex = cards[i].index + 1;

                        if (newIndex >= 4) return;
                        let newCards = [...cards];
                        newCards[i].index = newIndex;
                        newCards[i].direction = "right";
                        newCards[i].transition = true;
                        newCards[i].firstRender = false;
                        setCards([...newCards]);
                      }}
                    />
                  </ArrowContainer>
                </Box>
              </Box>
            );
          })
        : null}
    </>
  );
}

export default Slider;
