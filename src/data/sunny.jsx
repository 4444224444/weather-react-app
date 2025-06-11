const SunnyMovies = [
  {
    id: 1,
    title: "리틀포레스트",
    description: "도시를 떠나 자연 속에서 자신을 돌아보는 이야기",
    image: process.env.PUBLIC_URL + "/assets/movie/ClearMovie1.jpg"
  },
  {
    id: 2,
    title: "썸머필름을 타고!",
    description: "사랑과 우정을 겪는 여름 판타지",
    image: process.env.PUBLIC_URL + "/assets/movie/ClearMovie2.jpg"
  },
  {
    id: 3,
    title: "싱스트리트",
    description: "음악으로 사랑과 꿈을 찾아가는 1980년대 더블린 이야기",
    image: process.env.PUBLIC_URL + "/assets/movie/ClearMovie3.jpg"
  },
  {
    id: 4,
    title: "괴물",
    description: "아이의 이상 행동을 둘러싼 어른들의 오해와 진실을 그리며, 시선에 따라 달라지는 진실을 탐구하는 영화",
    image: process.env.PUBLIC_URL + "/assets/movie/ClearMovie4.jpg"
  },
];

const SunnyBooks = [
  {
    text: "그래도 살았으면 좋겠으니까",
    image: process.env.PUBLIC_URL + "/assets/book/ClearBook1.jpg",
  },
  {
    text: "나는 언니가 나에게 너무나 좋은 것이어서",
    image: process.env.PUBLIC_URL + "/assets/book/ClearBook2.jpg",
  },
  {
    text: "절대로 여름으로 가는 문을 찾는 걸 단념하지 않는다",
    image: process.env.PUBLIC_URL + "/assets/book/ClearBook3.jpg",
  },
  {
    text: "언젠가는 사라지고 말 기록의 의미는 무엇인가",
    image: process.env.PUBLIC_URL + "/assets/book/ClearBook4.jpg",
  },
];

const SunnyMusic = [
  {
    title: "녹아내려요",
    image: process.env.PUBLIC_URL + "/assets/music/ClearMusic1.jpg",
    src: "/audio/song1.mp3",
  },
  {
    title: "버킷리스트",
    image: process.env.PUBLIC_URL + "/assets/music/ClearMusic2.jpg",
    src: "/audio/song2.mp3",
  },
  {
    title: "콜링",
    image: process.env.PUBLIC_URL + "/assets/music/ClearMusic3.jpg",
    src: "/audio/song3.mp3",
  },
  {
    title: "우주의 여름",
    image: process.env.PUBLIC_URL + "/assets/music/ClearMusic4.jpg",
    src: "/audio/song4.mp3",
  },
];

const SunnyWeatherInfo = {
  bg: "assets/weatherbg/clear.png", 
};

export { SunnyMovies, SunnyBooks, SunnyMusic, SunnyWeatherInfo };
