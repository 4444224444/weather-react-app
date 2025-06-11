const SunnyMovieModals = [
  {
    id: 1,
    title: "리틀포레스트",
    director: "김냠냠",
    modalImage: process.env.PUBLIC_URL + "/assets/movie/ClearMovie1.jpg",
    defaultComments: [
      { user: "세희", text: "이얏호" },
    ], 
  },
  {
    id: 2,
    title: "썸머필름을 타고!",
    director: "마츠모토 소우시",
    modalImage: process.env.PUBLIC_URL + "/assets/movie/ClearMovie2.jpg",
    defaultComments: [
      { user: "냥냥", text: "재밌었다!!" },
      { user: "멍멍", text: "정말 아름다운 이야기였어요" },
    ],
  },
  {
    id: 3,
    title: "싱스트리트",
    director: "존 카니",
    modalImage: process.env.PUBLIC_URL + "/assets/movie/ClearMovie3.jpg",
    defaultComments: [
      { user: "권혁민", text: "음악과 색감이 예술" },
      { user: "박민규", text: "현실과 이상의 경계선" },
    ],
  },
  {
    id: 4,
    title: "괴물",
    director: "고레에다 히로카즈",
    modalImage: process.env.PUBLIC_URL + "/assets/movie/ClearMovie4.jpg",
    defaultComments: [
      { user: "정연수", text: "죽은 자의 날을 아름답게 표현" },
      { user: "심민지", text: "가족 이야기로 울컥" },
    ],
  },
];

const SunnyBookModals = [
  {
    id: 1,
    title: "아가미",
    author: "구병모",
    modalImage: process.env.PUBLIC_URL + "/assets/book/ClearBook1.jpg",
    defaultComments: [
      { user: "혁민", text: "가슴이 먹먹해지는 이야기" },
      { user: "민혁", text: "용서와 우정에 대해 생각하게 해" },
    ],
  },
  {
    id: 2,
    title: "초록은 어디에나",
    author: "임선우",
    modalImage:  process.env.PUBLIC_URL + "/assets/book/ClearBook2.jpg",
    defaultComments: [
      { user: "우땨땨", text: "편지로 이어지는 따뜻한 이야기" },
      { user: "헤헷", text: "시간을 초월한 감동" },
    ],
  },
  {
    id: 3,
    title: "여름으로 가는 문",
    author: "모공호",
    modalImage: process.env.PUBLIC_URL + "/assets/book/ClearBook3.jpg",
    defaultComments: [
      { user: "야호", text: "섬뜩하지만 빠져드는 스토리" },
      { user: "우히", text: "주인공의 심리가 인상적" },
    ],
  },
  {
    id: 4,
    title: "지구 끝의 온실",
    author: "김초엽",
    modalImage: process.env.PUBLIC_URL + "/assets/book/ClearBook4.jpg",
    defaultComments: [
      { user: "지구", text: "꿈과 현실 사이에서 위로받았어" },
      { user: "온실", text: "따뜻하고 몽환적인 느낌" },
    ],
  },
];

const SunnyMusicModals = [
  {
    id: 1,
    title: "녹아내려요",
    artist: "데이식스",
    modalImage: process.env.PUBLIC_URL + "/assets/music/ClearMusic1.jpg",
    defaultComments: [
      { user: "이수경교수님", text: "잔잔한 멜로디가 날씨랑 잘 어울려" },
      { user: "김계원", text: "청춘의 슬픔이 담긴 곡" },
    ],
  },
  {
    id: 2,
    title: "버킷리스트",
    artist: "맥거핀",
    modalImage: process.env.PUBLIC_URL + "/assets/music/ClearMusic2.jpg",
    defaultComments: [
      { user: "민규", text: "맑은 날에 딱이야!" },
      { user: "규민", text: "청량한 음색 최고" },
    ],
  },
  {
    id: 3,
    title: "Calling",
    artist: "유다빈밴드",
    modalImage: process.env.PUBLIC_URL + "/assets/music/ClearMusic3.jpg",
    defaultComments: [
      { user: "원계", text: "햇살이 내리는 느낌이야" },
      { user: "계원", text: "기분이 좋아지는 노래" },
    ],
  },
  {
    id: 4,
    title: "우주의 여름",
    artist: "라쿠나",
    modalImage: process.env.PUBLIC_URL + "/assets/music/ClearMusic4.jpg",
    defaultComments: [
      { user: "익명", text: "진짜 걷고 싶은 날씨야" },
      { user: "익명", text: "신나고 경쾌해!" },
    ],
  },
];

const SunnyModalData = {
  movies: SunnyMovieModals,
  books: SunnyBookModals,
  music: SunnyMusicModals,
};

export default SunnyModalData;

