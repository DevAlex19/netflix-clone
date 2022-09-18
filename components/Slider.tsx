import {
  faChevronCircleRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
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
import MovieModal from "./MovieModal";

const images = [
  "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
  "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
  "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
  "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
  "https://static.posters.cz/image/350/postere/doctor-strange-in-the-universe-of-madness-i127943.jpg",
  "https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg",
  "http://images.fandango.com/images/masterrepository/Fandango/186260/theAssassin.jpg",
  "https://img.fruugo.com/product/3/12/68549123_max.jpg",
  "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
  "https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/wjnhpz3osrai5aningjl.jpg",
  "https://www.chinadaily.com.cn/culture/attachement/jpg/site1/20170326/f04da2db14841a419ea21f.jpg",
  "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758",
  "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-hagrid-poster.jpg",
  "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg",
  "https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg",
  "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",
];

function Slider({ setModal }: any) {
  const [cards, setCards] = useState({
    data: [...images],
    index: 0,
    direction: "",
    transition: true,
    firstRender: true,
  });
  const [hoverImage, setHoverImage] = useState(-1);

  function handleTransitionEnd() {
    switch (cards.direction) {
      case "right":
        handleNext();
        break;
      case "left":
        handlePrevious();
        break;
    }
  }
  function handlePrevious() {
    const newIndex = cards.index + 1;
    const newData = [
      ...cards.data.slice(cards.data.length - 3, cards.data.length),
      ...cards.data.slice(0, cards.data.length - 3),
    ];

    setCards({
      ...cards,
      data: [...newData],
      transition: false,
      index: newIndex,
    });
  }

  function handleNext() {
    if (cards.index === 3) {
      const newIndex = cards.index - 1;
      const newData = [
        ...cards.data.slice(3, cards.data.length),
        ...cards.data.slice(0, 3),
      ];

      setCards({
        ...cards,
        data: [...newData],
        transition: false,
        index: newIndex,
      });
    }
  }

  return (
    <Box
      sx={{
        transform: "translateY(-8vw)",
        marginBottom: "5rem",
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
            width: "230px",
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
            Populare pe Netflix
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
          render={cards.firstRender ? "true" : undefined}
          index={cards.index}
          transition={cards.transition ? "true" : undefined}
          onTransitionEnd={handleTransitionEnd}
        >
          {cards.data.map((item: string, index: number) => {
            return (
              <ItemContainer
                active={hoverImage === index ? "true" : undefined}
                key={index}
                onMouseOver={() => setHoverImage(index)}
                onMouseOut={() => setHoverImage(-1)}
                onTransitionEnd={(e: any) => e.stopPropagation()}
              >
                <ItemImage
                  key={index}
                  src={item}
                  size={hoverImage === index ? "true" : undefined}
                />
                {hoverImage === index ? (
                  <SliderItemContainer>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
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
                      <SliderIconContainer onClick={() => setModal(true)}>
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
                      <Typography sx={{ fontSize: "0.7rem", color: "#3CCF4E" }}>
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
                      <Typography sx={{ fontSize: "0.7rem", color: "white" }}>
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
                      <Typography sx={{ fontSize: "0.75rem", color: "white" }}>
                        Intuneact
                      </Typography>
                      <Dot />
                      <Typography sx={{ fontSize: "0.75rem", color: "white" }}>
                        Cu suspans
                      </Typography>
                      <Dot />
                      <Typography sx={{ fontSize: "0.75rem", color: "white" }}>
                        Thriller de actioune
                      </Typography>
                    </Box>
                  </SliderItemContainer>
                ) : null}
              </ItemContainer>
            );
          })}
        </ItemsContainer>
        {!cards.firstRender ? (
          <ArrowContainer className="left">
            <Arrow
              icon={faChevronLeft}
              onClick={() => {
                let newIndex = cards.index - 1;

                if (cards.index === 0) return;
                setCards({
                  ...cards,
                  index: newIndex,
                  direction: "left",
                  transition: true,
                });
              }}
            />
          </ArrowContainer>
        ) : null}
        <ArrowContainer className="right">
          <Arrow
            icon={faChevronRight}
            onClick={() => {
              let newIndex = cards.index + 1;

              if (newIndex >= 4) return;

              setCards({
                ...cards,
                index: newIndex,
                direction: "right",
                transition: true,
                firstRender: false,
              });
              return;
            }}
          />
        </ArrowContainer>
      </Box>
    </Box>
  );
}

export default Slider;
