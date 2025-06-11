const CloudyMovies = [
  { title: "장화홍련",
    description: "돌이킬 수 없는 걸음",
    image: process.env.PUBLIC_URL + "/assets/movie/CloudyMovie1.jpg",
  },
  { title: "여고괴담",
    description: "친구가 죽었는데 왜 너만 멀쩡해?",
    image: process.env.PUBLIC_URL + "/assets/movie/CloudyMovie2.jpg",
  },
  { title: "CALL",
    description: "과거와 현재가 전화 한 통으로 연결되며 벌어지는 소름 끼치는 심리 스릴러",
    image: process.env.PUBLIC_URL + "/assets/movie/CloudyMovie3.jpg",
  },
  { title: "US",
    description: "We are Americans",
    image: process.env.PUBLIC_URL + "/assets/movie/CloudyMovie4.jpg",
  },
];


const CloudyBooks = [
    {
    text: "너를 먹어서 내 사랑을 증명할게",
    image: process.env.PUBLIC_URL + "/assets/book/CloudyBook1.jpg",
  },
  {
    text: "슬픔에는 더 큰 슬픔을 부어 넣어야 한다",
    image: process.env.PUBLIC_URL + "/assets/book/CloudyBook2.jpg",
  },
  {
    text: "모든 유기체는 변이를 통해 발전하며",
    image: process.env.PUBLIC_URL + "/assets/book/CloudyBook3.jpg",
  },
  {
    text: "이것이 나와 스플릿 텅의 첫만남",
    image: process.env.PUBLIC_URL + "/assets/book/CloudyBook4.jpg",
  },
];

const CloudyMusic = [
  { title: "있지",
    image: process.env.PUBLIC_URL + "/assets/music/CloudyMusic1.jpg",
    src: "/audio/song1.mp3",
  },
  {
    title: "양",
    image: process.env.PUBLIC_URL + "/assets/music/CloudyMusic2.jpg",
    src: "/audio/song2.mp3",
  },
  {
    title: "Ride Or Die",
    image: process.env.PUBLIC_URL + "/assets/music/CloudyMusic3.jpg",
    src: "/audio/song3.mp3",
  },
  {
    title: "언젠가 너와 나",
    image:  process.env.PUBLIC_URL + "/assets/music/CloudyMusic4.jpg",
    src: "/audio/song4.mp3",
  }
];

const CloudyWeatherInfo = {
  bg: "assets/weatherbg/cloudy.png"
};

export { CloudyMovies, CloudyBooks, CloudyMusic, CloudyWeatherInfo };