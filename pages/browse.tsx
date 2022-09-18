import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";

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

function Browse() {
  return (
    <Box style={{ overflow: "hidden" }}>
      <HeroSection />
      <Slider />
    </Box>
  );
}

export default Browse;
