const RainyMovies = [
  {
    id: 1,
    title: "ABOUT ME",
    description: "상처 많은 남녀가 서로의 삶에 스며들며 진짜 사랑을 배워가는 이야기",
    image: process.env.PUBLIC_URL + "/assets/movie/RainyMovie1.jpg"
  },
  {
    id: 2,
    title: "클래식",
    description: "세대를 넘나드는 편지와 사랑이 한 남녀의 운명을 이어주는 순애보 멜로",
    image: process.env.PUBLIC_URL + "/assets/movie/RainyMovie2.jpg"
  },
  {
    id: 3,
    title: "지금 만나러 갑니다",
    description: "죽은 아내가 장마철에 돌아오며 펼쳐지는 기적 같은 사랑 이야기",
    image: process.env.PUBLIC_URL + "/assets/movie/RainyMovie3.jpg"
  },
  {
    id: 4,
    title: "노트북",
    description: "기억을 잃은 연인을 위해 평생 같은 이야기를 들려주는 한 남자의 깊은 사랑 이야기",
    image: process.env.PUBLIC_URL + "/assets/movie/RainyMovie4.jpg"
  },
];


const RainyBooks = [
    {
    text: "저기, 해가 지는 곳으로",
    image: process.env.PUBLIC_URL + "/assets/book/RainyBook1.jpg",
  },
  {
    text: "사랑은 그들에게 희망이자 절망, 구원이자 형별이었다",
    image: process.env.PUBLIC_URL + "/assets/book/RainyBook2.jpg",
  },
  {
    text: "호수가 다현의 몸을 삼켰다",
    image: process.env.PUBLIC_URL + "/assets/book/RainyBook3.jpg",
  },
  {
   text: "어떤 사랑은 끝난 뒤에야 사랑이 아니었음을 안다",
    image: process.env.PUBLIC_URL + "/assets/book/RainyBook4.jpg",
  },
];

const RainyMusic = [
  {
    title: "Rain Drop",
    image: process.env.PUBLIC_URL + "/assets/music/RainyMusic1.jpg",
    src: "/audio/song1.mp3",
  },
  {
    title: "Drowning",
    image: process.env.PUBLIC_URL + "/assets/music/RainyMusic2.jpg",
    src: "/audio/song2.mp3",
  },
  {
    title: "너의 바다",
    image: process.env.PUBLIC_URL + "/assets/music/RainyMusic3.jpg",
    src: "/audio/song3.mp3",
  },
  {
    title: "우산",
    image: process.env.PUBLIC_URL + "/assets/music/RainyMusic4.jpg",
    src: "/audio/song4.mp3",
  }
];

const RainyWeatherInfo = {
  bg: "assets/weatherbg/rainy.png"
};

export { RainyMovies, RainyBooks, RainyMusic, RainyWeatherInfo };