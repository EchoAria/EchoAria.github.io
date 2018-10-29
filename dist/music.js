const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "夜行列車～nothing to lose",
        artist: 'Aimer',
        url: '/music/Aimer - 夜行列車～nothing to lose.mp3',
        cover: '/cover/夜行列車～nothing to lose.jpg',
      },
      {
        name: '5年后',
        artist: 'ONE☆DRAFT',
        url: '/music/ONE☆DRAFT - 5年后.mp3',
        cover: '/cover/5年后....png',
      },
      {
        name: 'D.C.',
        artist: 'Bassy',
        url: '/music/Bassy - D.C.mp3',
        cover: '/cover/Bassy.png',
      },
      {
        name: '海に行く',
        artist: '茶太',
        url: '/music/茶太 - 海に行く.mp3',
        cover: '/cover/茶太.png',
      }

    ]
});

