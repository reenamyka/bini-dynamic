export const CLOUDFRONT_URL = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;

export const BINI_MEMBERS_BIO = [
  {
    image: `${CLOUDFRONT_URL}/bini-about-group.jpg`,
    nickname: "default",
    fullName: "About",
    birthday: null,
    description:
      "Filipino pop phenomenon BINI features 8 multi-talented members, Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena. The girls have quickly become the biggest female Filipino artist in history, and second biggest artist overall in the Philippines, holding both the #1 & #2 spots on the top Filipino music charts simultaneously with the hits “Salamin, Salamin” and “Pantropiko.”\r\n\r\nBINI's sound is shaped by homegrown artists and global sensations alike. On the heels of their unprecedented growth in socials and in streaming listenership (30M +), the girls recently sold out their “BINIverse” tour in record-breaking time, and have been heralded as one of Teen Vogue's 2024 Girl Groups to watch!",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-aiah.jpg`,
    nickname: "AIAH",
    fullName: "Maraiah Queen Arceta",
    birthday: "January 27, 2001",
    description:
      "Back in Cebu, Aiah used to join in their school's dance group, performing in school events like Buwan ng Wika , though she didn't venture on learning other dancing styles like hip hop. Outside school, Aiah did modelling and joined beauty pageants[3]. She won a beauty pageant produced by a beauty product company and was hailed as Ms. Silka Philippines 2018. Aiah also appeared in the TV Commercials of these beauty products.",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-colet.jpg`,
    nickname: "COLET",
    fullName: "Ma. Nicolette Vergara",
    birthday: "September 14, 2001",
    description:
      "Back in Bohol, Colet had a normal teen life attending school. Ever since she was a child, she developed a background in singing, thanks to her musician father, who is a vocalist and a drummer. She used to join her school's singing groups and participated in singing competitions to further enhance her vocal skills. She also had a talent in dancing, and used join her school's dance group where they compete in inter-school dance competitions.",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-gwen.jpg`,
    nickname: "GWEN",
    fullName: "Gweneth L. Apuli",
    birthday: "June 19, 2003",
    description:
      "Gwen started to sing when she was 3 years old, continuing as she grew older. She had a clear and distinct voice, and her parents enrolled her in voice workshops to improve her skills in singing. She became used to performing in various events, which helped her gain more confidence in singing. She also has a background in modelling, though she had a minimal experience in dancing.",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-maloi.jpg`,
    nickname: "MALOI",
    fullName: "Mary Loi Yves Ricalde",
    birthday: "May 27, 2002",
    description:
      "Maloi started singing when she was three years old, as she loved to sing on karaoke. She joined her first singing competition when she was seven years old, and joining competitions helped her gain more experience and confidence in singing. She also likes to dance, and started dancing as a child. Her skill in dancing helped her perform both singing and dancing during her school's events and competitions.",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-jhoanna.jpg`,
    nickname: "JHOANNA",
    fullName: "Jhoanna Christine Robles",
    birthday: "January 26, 2004",
    description:
      "Ever since she was just a child, Jhoanna has been an energetic girl. As a child she loved to sing and dance when there was music, and she also liked to do acting. In 3rd grade, Jhoanna started to join singing competitions at her school. She also started dancing at the same age, joining at a dance troupe that performed during school events. Her mother let her take up workshops to develop her skills in singing and dancing.",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-mikha.jpg`,
    nickname: "MIKHA",
    fullName: "Mikhaela Janna Lim",
    birthday: "November 8, 2003",
    description:
      "Mikha started to sing when she was a kid because of her Dad. Whenever there was a karaoke, she would join her Dad and sing along with him. It was just a leisure activity, and she did not join singing competitions. Mikha was a cheerleader in high school, where she was a member of her school's cheerleading squad. Cheer dancing helped Mikha learn to dance, do tumbling, and develop flexibility.",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-sheena.jpg`,
    nickname: "SHEENA",
    fullName: "Sheena Mae Catacutan",
    birthday: "May 9, 2004",
    description:
      "Sheena has been dancing since she was seven years old. She joined dance workshops when she was in kindergarten. All throughout grade school, she joined different competitions in pop dance, cheer dance and street dance. In high school, Sheena joined a dance group that competed in dance competitions. Joining a dance group helped her to further develop her skills in dancing, especially hip hop.",
  },
  {
    image: `${CLOUDFRONT_URL}/bini-about-stacey.jpg`,
    nickname: "STACEY",
    fullName: "Stacey Aubrey Sevilleja",
    birthday: "July 13, 2003",
    description:
      "Back in Nueva Vizcaya, Stacey was a beauty queen. She used to join lot of beauty pageants, thanks to her mother who is also a fashion designer. Aside from beauty pageants, Stacey also did modelling, and some of her dresses used were designed by her mother. She began developing a talent in singing and dancing when started joining auditions like Star Hunt. During this time, she was supposed to represent the Philippines in an international beauty pageant for teens, but backed out and chose to join the boot camp for Star Hunt Academy.",
  },
];

export const SONGS_DATA = [
  {
    title: "Cherry on Top",
    type: "Single",
    year: "2024",
    songsCount: 1,
    image: `${CLOUDFRONT_URL}/cherry-on-top.png`,
    url: "https://orcd.co/bini-cherryontop",
  },
  {
    title: "Talaarawan",
    type: "Album",
    year: "2024",
    songsCount: 6,
    image: `${CLOUDFRONT_URL}/talaarawan.jpg`,
    url: "https://orcd.co/talaarawanbini",
  },
  {
    title: "Feel Good",
    type: "Album",
    year: "2022",
    songsCount: 7,
    image: `${CLOUDFRONT_URL}/feelgood.png`,
    url: "https://orcd.co/feelgoodalbumbini",
  },
  {
    title: "Born To Win",
    type: "Album",
    year: "2021",
    songsCount: 12,
    image: `${CLOUDFRONT_URL}/borntowin.png`,
    url: "https://orcd.co/borntowinalbumbini",
  },
  {
    title: "Pantropiko",
    type: "Single",
    year: "2023",
    songsCount: 1,
    image: `${CLOUDFRONT_URL}/pantropiko.png`,
    url: "https://orcd.co/pantropikobini",
  },
  {
    title: "Salamin, Salamin",
    type: "Album",
    year: "2024",
    songsCount: 6,
    image: `${CLOUDFRONT_URL}/talaarawan.jpg`,
    url: "https://orcd.co/talaarawanbini",
  },
  {
    title: "Karera",
    type: "Single",
    year: "2023",
    songsCount: 1,
    image: `${CLOUDFRONT_URL}/karera.png`,
    url: "https://orcd.co/karerabini",
  },
  {
    title: "Lagi",
    type: "Single",
    year: "2022",
    songsCount: 1,
    image: `${CLOUDFRONT_URL}/lagi.png`,
    url: "https://orcd.co/lagibini",
  },
  {
    title: "Na Na Na",
    type: "Album",
    year: "2022",
    songsCount: 4,
    image: `${CLOUDFRONT_URL}/labyuwithaccent.png`,
    url: "https://orcd.co/labyuwithanaccentost",
  },
  {
    title: "Huwag Muna Tayong Umuwi",
    type: "Album",
    year: "2022",
    songsCount: 7,
    image: `${CLOUDFRONT_URL}/feelgood.png`,
    url: "https://orcd.co/feelgoodalbumbini",
  },
  {
    title: "Na Na Nandito Lang",
    type: "Album",
    year: "2024",
    songsCount: 6,
    image: `${CLOUDFRONT_URL}/talaarawan.jpg`,
    url: "https://orcd.co/talaarawanbini",
  },
];

export const VIDEOS = [
  {
    thumbnail: `${CLOUDFRONT_URL}/cherry-on-top.png`,
    title: "#BINI | 'Cherry On Top' Official Music Video",
    link: "https://www.youtube.com/embed/wufUX5P2Ds8",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/pantropikoThumbnail.png`,
    title: "#BINI : Pantropiko Performance Video | BINI",
    link: "https://www.youtube.com/embed/Zx31bB2vMns",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "BINI | 'Salamin, Salamin' Official Music Video",
    link: "https://www.youtube.com/embed/J1Ip2sC_lss",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-karera.png`,
    title: "Karera Official Music Video | BINI",
    link: "https://www.youtube.com/embed/QNV2DmBxChQ",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "Lagi | Official Music Video | #BINI",
    link: "https://www.youtube.com/embed/KyndoXN4_ns",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "Na Na Na | Official Music Video | #BINI",
    link: "https://www.youtube.com/embed/wJ6GCeSR4ss",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "#BINI : 'I Feel Good' Official Music Video",
    link: "https://www.youtube.com/embed/UMogVGvhs7U",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "#BINI: ‘Pantropiko’ Dance Practice",
    link: "https://www.youtube.com/embed/wyxmSOidPzA",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "Born To Win | Official Music Video | BINI",
    link: "https://www.youtube.com/embed/cUMH4XhQTGI",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "Strings Official Music Video | BINI",
    link: "https://www.youtube.com/embed/OGBS-8IsPJ0",
  },
  {
    thumbnail: `${CLOUDFRONT_URL}/video-feel-good.png`,
    title: "'Golden Arrow' Official Music Video | #BINI",
    link: "https://www.youtube.com/embed/beaF9FnJ1IA",
  },
];

export const GALLERY_IMAGES = [
  `${CLOUDFRONT_URL}/bini-gallery-1.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-2.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-3.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-4.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-5.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-6.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-7.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-8.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-9.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-10.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-11.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-12.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-13.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-14.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-15.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-16.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-17.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-18.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-19.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-20.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-21.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-22.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-23.jpg`,
  `${CLOUDFRONT_URL}/bini-gallery-24.jpg`,
];

export const SCHEDULES = [
  {
    date: "June 11",
    name: "Happy BINI Day",
    location: "One Ayala, Makati",
    link: "https://www.facebook.com/photo/?fbid=831316958870405&set=a.108497734485668",
  },
  {
    date: "June 12",
    name: "Musikalayaan",
    location: "Burnham Green",
    link: "https://www.facebook.com/photo/?fbid=866660485486679&set=a.228156996003701",
  },
  {
    date: "June 15",
    name: "Ang Pinaka",
    location: "Sampaloc Cor Mayapis Street",
    link: "https://www.facebook.com/photo.php?fbid=122151489524129293&set=a.122151868670129293&type=3&ref=embed_post",
  },
  {
    date: "June 22",
    name: "Love Laban 2 Everyone",
    location: "Quezon Memorial Circle",
    link: "https://www.facebook.com/photo/?fbid=432194852910649&set=pcb.432196279577173",
  },
  {
    date: "June 23",
    name: "BINI Run",
    location: "Quirino Grandstand, City of Manila",
    link: "https://www.facebook.com/photo?fbid=837004911634943&set=a.108497734485668",
  },
  {
    date: "June 28-30",
    name: "BINIverse: The First Solo Concert",
    location: "New Frontier Theater",
    link: "https://ticketnet.com.ph/event-detail/BINIverse-The-First-Solo-Concert",
  },
  {
    date: "July 6",
    name: "BINIverse: The First Solo Concert",
    location: "Baguio City (Cap-John Hay Trade and Cultural Center)",
    link: "https://www.facebook.com/photo/?fbid=875623907931743&set=pcb.875623964598404",
  },
  {
    date: "July 14",
    name: "BINIverse: The First Solo Concert",
    location: "Cebu City (Waterfront Hotel, Cebu City)",
    link: "https://www.facebook.com/photo?fbid=875623934598407&set=pcb.875623964598404",
  },
  {
    date: "July 20",
    name: "BINIverse: The First Solo Concert",
    location: "General Santos City (KCC Gensan Open Grounds)",
    link: "https://www.facebook.com/photo?fbid=875623924598408&set=pcb.875623964598404",
  },
];
