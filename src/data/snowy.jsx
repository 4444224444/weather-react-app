const SnowyMovies = [
  {
    id: 1,
    title: "윤희에게",
    description: "추신 나도 네 꿈을 꿔",
    image: process.env.PUBLIC_URL + "/assets/movie/SnowyMovie1.jpg"
  },
  {
    id: 2,
    title: "겨울왕국",
    description: "세대를 넘나드는 편지와 사랑이 한 남녀의 운명을 이어주는 순애보 멜로",
    image: process.env.PUBLIC_URL + "/assets/movie/SnowyMovie2.jpg"
  },
  {
    id: 3,
    title: "이터널선샤인",
    description: "기억을 지워도 사랑은 다시 시작되는, 기묘하고 아름다운 이별의 이야기",
    image: process.env.PUBLIC_URL + "/assets/movie/SnowyMovie3.jpg"
  },
  {
    id: 4,
    title: "미키17",
    description: "자아를 찾아가는 디스토피아 SF 이야기",
    image: process.env.PUBLIC_URL + "/assets/movie/SnowyMovie4.jpg"
  },
];


const SnowyBooks = [
    {
    text: "그들은 서로 너무 깊이 사랑했던 모양이다",
    image: process.env.PUBLIC_URL + "/assets/book/SnowyBook1.jpg",
  },
  {
    text: "한용범은 그 순간 자신도 모르게 달을 보았다",
    image: process.env.PUBLIC_URL + "/assets/book/SnowyBook2.jpg",
  },
  {
    text: "네가 아프면 정말 그 사람이 괴로울 수 있을까",
    image: process.env.PUBLIC_URL + "/assets/book/SnowyBook3.jpg",
  },
  {
    text: "내 살을 뜯어 삼키고 자라서 나의 세계까지 오너라",
    image: process.env.PUBLIC_URL + "/assets/book/SnowyBook4.jpg",
  },
];

const SnowyMusic = [
  {
    title: "난로",
    image: process.env.PUBLIC_URL + "/assets/music/SnowyMusic1.jpg",
    src: "/audio/song1.mp3",
  },
  {
    title: "Psyco",
    image: process.env.PUBLIC_URL + "/assets/music/SnowyMusic2.jpg",
    src: "/audio/song2.mp3",
  },
  {
    title: "첫눈",
    image: process.env.PUBLIC_URL + "/assets/music/SnowyMusic3.jpg",
    src: "/audio/song3.mp3",
  },
  {
    title: "눈의 꽃",
    image: process.env.PUBLIC_URL + "/assets/music/SnowyMusic4.jpg",
    src: "/audio/song4.mp3",
  }
];

const SnowyWeatherInfo = {
  bg: "assets/weatherbg/snowy.png"
};

export { SnowyMovies, SnowyBooks, SnowyMusic, SnowyWeatherInfo };