const SNAPSHOT_ISO = "2026-03-29T03:10:00+05:30";

const TV_CANDIDATES = [
  {
    imdbId: "tt2560140",
    title: "Attack on Titan",
    year: 2013,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 9.1,
    fallbackVotes: 703962,
    mangaSources: [
      { label: "Kodansha", url: "https://kodansha.us/series/attack-on-titan/" },
      { label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=attack+on+titan+manga" }
    ]
  },
  {
    imdbId: "tt1355642",
    title: "Fullmetal Alchemist: Brotherhood",
    year: 2009,
    image:
      "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 9.1,
    fallbackVotes: 245707,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/fullmetal-alchemist" },
      { label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=fullmetal+alchemist+manga" }
    ]
  },
  {
    imdbId: "tt0388629",
    title: "One Piece",
    year: 1999,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 9.0,
    fallbackVotes: 348463,
    mangaSources: [
      { label: "MANGA Plus", url: "https://mangaplus.shueisha.co.jp/titles/100020" },
      { label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/one-piece" }
    ]
  },
  {
    imdbId: "tt2098220",
    title: "Hunter x Hunter",
    year: 2011,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 9.0,
    fallbackVotes: 191509,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/hunter-x-hunter" },
      { label: "MANGA Plus", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Hunter%20x%20Hunter" }
    ]
  },
  {
    imdbId: "tt14986406",
    title: "Bleach: Thousand-Year Blood War",
    year: 2022,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjgyM2QzMjAtOGZjOS00OGFkLTkxZGYtMDJjZGM5MzIzYmM3XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 9.0,
    fallbackVotes: 74584,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/bleach" },
      { label: "MANGA Plus", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Bleach" }
    ]
  },
  {
    imdbId: "tt0877057",
    title: "Death Note",
    year: 2006,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.9,
    fallbackVotes: 474537,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/death-note" },
      { label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=death+note+manga" }
    ]
  },
  {
    imdbId: "tt0213338",
    title: "Cowboy Bebop",
    year: 1998,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU3ZTdiOGQtYmYwYy00OGM5LThmNjMtZGJmNTVlZjk1ZmEyXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.9,
    fallbackVotes: 167957,
    mangaSources: [
      { label: "VIZ Search", url: "https://www.viz.com/search?search=cowboy+bebop" },
      { label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=cowboy+bebop+manga" }
    ]
  },
  {
    imdbId: "tt22248376",
    title: "Frieren: Beyond Journey's End",
    year: 2023,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTI4ZGMxN2UtODlkYS00MTBjLWE1YzctYzc3NDViMGI0ZmJmXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.9,
    fallbackVotes: 72442,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/frieren-beyond-journeys-end" },
      { label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=frieren+manga" }
    ]
  },
  {
    imdbId: "tt10233448",
    title: "Vinland Saga",
    year: 2019,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.8,
    fallbackVotes: 133829,
    mangaSources: [
      { label: "Kodansha", url: "https://kodansha.us/series/vinland-saga/" },
      { label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=vinland+saga+manga" }
    ]
  },
  {
    imdbId: "tt0121220",
    title: "Dragon Ball Z",
    year: 1989,
    image:
      "https://m.media-amazon.com/images/M/MV5BNmFiM2FkYTYtY2FiOS00ZWJkLTkyOTgtNmFmODI4NjcwNDgzXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.8,
    fallbackVotes: 103254,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/dragon-ball" },
      { label: "MANGA Plus", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Dragon%20Ball" }
    ]
  },
  {
    imdbId: "tt1910272",
    title: "Steins;Gate",
    year: 2011,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.8,
    fallbackVotes: 91454,
    mangaSources: [
      { label: "Udon", url: "https://www.udonentertainment.com/collections/steins-gate" },
      { label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=steins%3Bgate+manga" }
    ]
  },
  {
    imdbId: "tt0988824",
    title: "Naruto: Shippuden",
    year: 2007,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.7,
    fallbackVotes: 219704,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/naruto" },
      { label: "MANGA Plus", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Naruto" }
    ]
  }
];

const MOVIE_CANDIDATES = [
  {
    imdbId: "tt0245429",
    title: "Spirited Away",
    year: 2001,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.6,
    fallbackVotes: 961103,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=spirited+away+manga" }]
  },
  {
    imdbId: "tt0095327",
    title: "Grave of the Fireflies",
    year: 1988,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.5,
    fallbackVotes: 381652,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=grave+of+the+fireflies+book" }]
  },
  {
    imdbId: "tt5311514",
    title: "Your Name.",
    year: 2016,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.4,
    fallbackVotes: 388582,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=your+name+manga" }]
  },
  {
    imdbId: "tt0119698",
    title: "Princess Mononoke",
    year: 1997,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTcyN2Y0MDYtMGI1NC00MWQ1LWFhZGMtN2U4NTcxZGYyNjljXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.3,
    fallbackVotes: 481229,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=princess+mononoke+manga" }]
  },
  {
    imdbId: "tt0347149",
    title: "Howl's Moving Castle",
    year: 2004,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_.jpg",
    fallbackRating: 8.2,
    fallbackVotes: 508960,
    mangaSources: [{ label: "Source Novel Search", url: "https://store.crunchyroll.com/search?q=howl%27s+moving+castle+novel" }]
  },
  {
    imdbId: "tt5323662",
    title: "A Silent Voice: The Movie",
    year: 2016,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.2,
    fallbackVotes: 139314,
    mangaSources: [{ label: "Kodansha", url: "https://kodansha.us/series/a-silent-voice/" }]
  },
  {
    imdbId: "tt11032374",
    title: "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
    year: 2020,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzEzYjhkYTctMWNmZS00MTc5LWI4OWUtZjFkNzNkYTNkMTJlXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.2,
    fallbackVotes: 99587,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/search?search=demon+slayer" }]
  },
  {
    imdbId: "tt0096283",
    title: "My Neighbor Totoro",
    year: 1988,
    image:
      "https://m.media-amazon.com/images/M/MV5BYWM3MDE3YjEtMzIzZC00ODE5LTgxNTItNmUyMTBkM2M2NmNiXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.1,
    fallbackVotes: 428739,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=my+neighbor+totoro+manga" }]
  },
  {
    imdbId: "tt0169858",
    title: "Neon Genesis Evangelion: The End of Evangelion",
    year: 1997,
    image:
      "https://m.media-amazon.com/images/M/MV5BODYzNDZmOTUtMDdiZS00Nzg3LTkxZGUtZmYzYzkxYjBlYjA5XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.1,
    fallbackVotes: 75990,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=evangelion+manga" }]
  },
  {
    imdbId: "tt2140203",
    title: "Wolf Children",
    year: 2012,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDc4MTk0ZTEtMWNiMC00MTM3LWFmOTQtMDAwMjQ2MjhiNTcxXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.1,
    fallbackVotes: 54488,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=wolf+children+manga" }]
  },
  {
    imdbId: "tt0094625",
    title: "Akira",
    year: 1988,
    image:
      "https://m.media-amazon.com/images/M/MV5BYWUxMGRhZDQtMTBmMi00N2IxLWE5NmYtMDMyMWExODAwNWYzXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.0,
    fallbackVotes: 225177,
    mangaSources: [{ label: "Kodansha", url: "https://kodansha.us/series/akira/" }]
  },
  {
    imdbId: "tt0092067",
    title: "Castle in the Sky",
    year: 1986,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjcyMjg2MzktNjg4YS00MjQzLTg0YWQtMjUyZDk2Y2Y0YzZjXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.0,
    fallbackVotes: 197234,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=castle+in+the+sky+manga" }]
  }
];

const EXTRA_LIBRARY_ITEMS = [
  {
    imdbId: "tt0318871",
    title: "Berserk",
    year: 1997,
    image:
      "https://m.media-amazon.com/images/M/MV5BMzEzMzhkNDgtY2Q0YS00MDk0LTg0YzItODY5ZjNjMDc4ODI3XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.7,
    fallbackVotes: 77198,
    mangaSources: [{ label: "Dark Horse", url: "https://www.darkhorse.com/Search/Berserk" }]
  },
  {
    imdbId: "tt0434706",
    title: "Monster",
    year: 2004,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzU2MWQ5NGQtYmNlMC00ZjJkLWJmODItZDM5MDM3YmUyMWJkXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.7,
    fallbackVotes: 68808,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/monster" }]
  },
  {
    imdbId: "tt12590266",
    title: "Cyberpunk: Edgerunners",
    year: 2022,
    image:
      "https://m.media-amazon.com/images/M/MV5BM2JkMzM2ZmYtNWU4MS00MjZhLWFhZWUtYWFjYTJkN2RhZDliXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.3,
    fallbackVotes: 123600,
    mangaSources: [{ label: "Dark Horse Cyberpunk", url: "https://www.darkhorse.com/Search/Cyberpunk" }]
  },
  {
    imdbId: "tt0994314",
    title: "Code Geass",
    year: 2006,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTk4MWYwNmUtODFjNC00NWJhLWExNGYtMGU4YmRlNzEwOTY1XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.7,
    fallbackVotes: 102572,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=code+geass+manga" }]
  },
  {
    imdbId: "tt12343534",
    title: "Jujutsu Kaisen",
    year: 2020,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjBlNTExMDAtMWZjZi00MDc5LWFkMjgtZDU0ZWQ5ODk3YWY5XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.5,
    fallbackVotes: 198424,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/jujutsu-kaisen" }]
  },
  {
    imdbId: "tt7222086",
    title: "Made in Abyss",
    year: 2017,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjM4ODA5YTktNjliMC00NzI5LTk3ZTctZWYyYWEyNTJhMmQzXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.3,
    fallbackVotes: 20864,
    mangaSources: [{ label: "Seven Seas", url: "https://sevenseasentertainment.com/series/made-in-abyss/" }]
  },
  {
    imdbId: "tt5249462",
    title: "Erased",
    year: 2016,
    image:
      "https://m.media-amazon.com/images/M/MV5BZWQ2YmI5NWMtZTY2Mi00MGUxLWFhMmEtYjVjZjMwOTNkOThjXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.4,
    fallbackVotes: 73451,
    mangaSources: [{ label: "Yen Press", url: "https://yenpress.com/titles/9780316468448-erased-vol-1" }]
  },
  {
    imdbId: "tt7078180",
    title: "Violet Evergarden",
    year: 2018,
    image:
      "https://m.media-amazon.com/images/M/MV5BMWUwNDFiNjQtYjQ0MC00MTcxLWE0MGQtNTdkYTlhZGU2NDFmXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.4,
    fallbackVotes: 40286,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=violet+evergarden+novel" }]
  },
  {
    imdbId: "tt0409591",
    title: "Naruto",
    year: 2002,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.4,
    fallbackVotes: 165336,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/naruto" }]
  },
  {
    imdbId: "tt7441658",
    title: "Black Clover",
    year: 2017,
    image:
      "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.2,
    fallbackVotes: 48190,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/black-clover" }]
  },
  {
    imdbId: "tt9335498",
    title: "Demon Slayer: Kimetsu no Yaiba",
    year: 2019,
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.6,
    fallbackVotes: 222291,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/shonenjump/chapters/demon-slayer-kimetsu-no-yaiba" }]
  },
  {
    imdbId: "tt0085218",
    title: "Barefoot Gen",
    year: 1983,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTAxZjJjZGYtNjk5NC00M2UwLTk4Y2YtMmQwNTI2Zjk2NTc4XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.0,
    fallbackVotes: 10298,
    mangaSources: [{ label: "Crunchyroll Store", url: "https://store.crunchyroll.com/search?q=barefoot+gen+manga" }]
  },
  {
    imdbId: "tt3895150",
    title: "Your Lie in April",
    year: 2014,
    image:
      "https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_.jpg",
    fallbackRating: 8.5,
    fallbackVotes: 49319,
    mangaSources: [{ label: "Kodansha", url: "https://kodansha.us/series/your-lie-in-april/" }]
  },
  {
    imdbId: "tt0097814",
    title: "Kiki's Delivery Service",
    year: 1989,
    image:
      "https://myanimelist.net/images/anime/1579/140483l.jpg",
    fallbackRating: 7.8,
    fallbackVotes: 174363,
    mangaSources: [{ label: "Source Novel Search", url: "https://store.crunchyroll.com/search?q=kiki%27s+delivery+service+book" }]
  },
  {
    imdbId: "tt0876563",
    title: "Ponyo",
    year: 2008,
    image:
      "https://myanimelist.net/images/anime/1331/138727l.jpg",
    fallbackRating: 7.6,
    fallbackVotes: 179732,
    mangaSources: [{ label: "Art Book Search", url: "https://store.crunchyroll.com/search?q=ponyo+book" }]
  },
  {
    imdbId: "tt0347618",
    title: "The Cat Returns",
    year: 2002,
    image:
      "https://myanimelist.net/images/anime/1109/138719l.jpg",
    fallbackRating: 7.1,
    fallbackVotes: 68345,
    mangaSources: [{ label: "Manga/Book Search", url: "https://store.crunchyroll.com/search?q=the+cat+returns+book" }]
  },
  {
    imdbId: "tt0113824",
    title: "Whisper of the Heart",
    year: 1995,
    image:
      "https://myanimelist.net/images/anime/1764/138714l.jpg",
    fallbackRating: 7.8,
    fallbackVotes: 71054,
    mangaSources: [{ label: "Manga/Book Search", url: "https://store.crunchyroll.com/search?q=whisper+of+the+heart+book" }]
  },
  {
    imdbId: "tt7742120",
    title: "Laid-Back Camp",
    year: 2018,
    image:
      "https://myanimelist.net/images/anime/4/89877l.jpg",
    fallbackRating: 8.1,
    fallbackVotes: 9812,
    mangaSources: [{ label: "Yen Press", url: "https://yenpress.com/series/laid-back-camp" }]
  },
  {
    imdbId: "tt13706018",
    title: "Spy x Family",
    year: 2022,
    image:
      "https://myanimelist.net/images/anime/1441/122795l.jpg",
    fallbackRating: 8.3,
    fallbackVotes: 89000,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/spy-x-family" }]
  },
  {
    imdbId: "tt3660104",
    title: "Barakamon",
    year: 2014,
    image:
      "https://myanimelist.net/images/anime/1426/111248l.jpg",
    fallbackRating: 8.2,
    fallbackVotes: 15431,
    mangaSources: [{ label: "Yen Press", url: "https://yenpress.com/series/barakamon" }]
  },
  {
    imdbId: "tt1415094",
    title: "K-On!",
    year: 2009,
    image:
      "https://myanimelist.net/images/anime/10/76120l.jpg",
    fallbackRating: 7.8,
    fallbackVotes: 11244,
    mangaSources: [{ label: "Manga Search", url: "https://store.crunchyroll.com/search?q=k-on+manga" }]
  },
  {
    imdbId: "tt2904428",
    title: "Non Non Biyori",
    year: 2013,
    image:
      "https://myanimelist.net/images/anime/2/51581l.jpg",
    fallbackRating: 8.0,
    fallbackVotes: 6217,
    mangaSources: [{ label: "Manga Search", url: "https://store.crunchyroll.com/search?q=non+non+biyori+manga" }]
  },
  {
    imdbId: "tt7236034",
    title: "I Want to Eat Your Pancreas",
    year: 2018,
    image:
      "https://myanimelist.net/images/anime/1768/93291l.jpg",
    fallbackRating: 8.1,
    fallbackVotes: 16554,
    mangaSources: [{ label: "Seven Seas", url: "https://sevenseasentertainment.com/series/i-want-to-eat-your-pancreas/" }]
  },
  {
    imdbId: "tt12879624",
    title: "Josee, the Tiger and the Fish",
    year: 2020,
    image:
      "https://myanimelist.net/images/anime/1714/108892l.jpg",
    fallbackRating: 7.6,
    fallbackVotes: 5320,
    mangaSources: [{ label: "Yen Press", url: "https://yenpress.com/series/josee-the-tiger-and-the-fish" }]
  },
  {
    imdbId: "tt2591814",
    title: "The Garden of Words",
    year: 2013,
    image:
      "https://myanimelist.net/images/anime/1597/112995l.jpg",
    fallbackRating: 7.4,
    fallbackVotes: 62517,
    mangaSources: [{ label: "Vertical", url: "https://kodansha.us/series/the-garden-of-words/" }]
  },
  {
    imdbId: "tt1373384",
    title: "Clannad: After Story",
    year: 2008,
    image:
      "https://myanimelist.net/images/anime/1299/110774l.jpg",
    fallbackRating: 8.6,
    fallbackVotes: 8125,
    mangaSources: [{ label: "Manga Search", url: "https://store.crunchyroll.com/search?q=clannad+manga" }]
  },
  {
    imdbId: "tt9307686",
    title: "Fruits Basket",
    year: 2019,
    image:
      "https://myanimelist.net/images/anime/1447/99827l.jpg",
    fallbackRating: 8.6,
    fallbackVotes: 17277,
    mangaSources: [{ label: "Yen Press", url: "https://yenpress.com/series/fruits-basket-collector-s-edition" }]
  },
  {
    imdbId: "tt9522300",
    title: "Kaguya-sama: Love Is War",
    year: 2019,
    image:
      "https://myanimelist.net/images/anime/1295/106551l.jpg",
    fallbackRating: 8.5,
    fallbackVotes: 23217,
    mangaSources: [{ label: "VIZ", url: "https://www.viz.com/kaguya-sama-love-is-war" }]
  },
  {
    imdbId: "tt1279011",
    title: "Toradora!",
    year: 2008,
    image:
      "https://myanimelist.net/images/anime/13/22128l.jpg",
    fallbackRating: 8.0,
    fallbackVotes: 15466,
    mangaSources: [{ label: "Seven Seas", url: "https://sevenseasentertainment.com/series/toradora/" }]
  },
  {
    imdbId: "tt13103134",
    title: "Horimiya",
    year: 2021,
    image:
      "https://myanimelist.net/images/anime/1695/111486l.jpg",
    fallbackRating: 8.1,
    fallbackVotes: 12284,
    mangaSources: [{ label: "Yen Press", url: "https://yenpress.com/series/horimiya" }]
  },
  {
    imdbId: "tt16428256",
    title: "Suzume",
    year: 2022,
    image:
      "https://myanimelist.net/images/anime/1598/128450l.jpg",
    fallbackRating: 7.6,
    fallbackVotes: 65000,
    mangaSources: [
      {
        label: "Source Novel Search",
        url: "https://www.google.com/search?q=suzume+light+novel+official+english"
      },
      {
        label: "Manga Search",
        url: "https://www.google.com/search?q=suzume+no+tojimari+manga+official+read"
      }
    ]
  },
  {
    imdbId: "tt9426210",
    title: "Weathering With You",
    year: 2019,
    image:
      "https://myanimelist.net/images/anime/1880/101146l.jpg",
    fallbackRating: 7.5,
    fallbackVotes: 92000,
    mangaSources: [
      { label: "Kodansha Search", url: "https://kodansha.us/?s=weathering+with+you" },
      {
        label: "Source Novel Search",
        url: "https://www.google.com/search?q=weathering+with+you+light+novel+official+english"
      }
    ]
  },
  {
    imdbId: "tt0983213",
    title: "5 Centimeters per Second",
    year: 2007,
    image:
      "https://myanimelist.net/images/anime/1410/112994l.jpg",
    fallbackRating: 7.5,
    fallbackVotes: 47000,
    mangaSources: [
      { label: "Kodansha Search", url: "https://kodansha.us/?s=5+centimeters+per+second" },
      {
        label: "Manga Search",
        url: "https://www.google.com/search?q=5+centimeters+per+second+manga+official+read"
      }
    ]
  },
  {
    imdbId: "tt0810705",
    title: "Nana",
    year: 2006,
    image:
      "https://myanimelist.net/images/anime/2/11232l.jpg",
    fallbackRating: 8.5,
    fallbackVotes: 8400,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/nana" },
      { label: "Manga Official Search", url: "https://www.google.com/search?q=nana+manga+official+read" }
    ]
  },
  {
    imdbId: "tt7865090",
    title: "Darling in the Franxx",
    year: 2018,
    image:
      "https://myanimelist.net/images/anime/1614/90408l.jpg",
    fallbackRating: 7.3,
    fallbackVotes: 19000,
    mangaSources: [
      {
        label: "Seven Seas Search",
        url: "https://sevenseasentertainment.com/?s=darling+in+the+franxx"
      },
      {
        label: "Manga Official Search",
        url: "https://www.google.com/search?q=darling+in+the+franxx+manga+official+read"
      }
    ]
  },
  {
    imdbId: "tt21975436",
    title: "Kaiju No. 8",
    year: 2024,
    image:
      "https://myanimelist.net/images/anime/1370/140362l.jpg",
    fallbackRating: 8.3,
    fallbackVotes: 34500,
    mangaSources: [
      { label: "VIZ", url: "https://www.viz.com/kaiju-no-8" },
      {
        label: "MANGA Plus Search",
        url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Kaiju%20No.%208"
      }
    ]
  },
  {
    imdbId: "tt3398540",
    title: "Haikyu!!",
    year: 2014,
    image:
      "https://myanimelist.net/images/anime/7/76014l.jpg",
    fallbackRating: 8.7,
    fallbackVotes: 43500,
    mangaSources: [
      { label: "VIZ Search", url: "https://www.viz.com/search?search=haikyu" },
      { label: "Shonen Jump Search", url: "https://www.viz.com/shonenjump" }
    ]
  },
  {
    imdbId: "tt0481256",
    title: "Hajime no Ippo",
    year: 2000,
    image:
      "https://myanimelist.net/images/anime/4/86334l.jpg",
    fallbackRating: 8.8,
    fallbackVotes: 12900,
    mangaSources: [
      { label: "Kodansha Search", url: "https://kodansha.us/?s=hajime+no+ippo" },
      { label: "Manga Official Search", url: "https://www.google.com/search?q=hajime+no+ippo+manga+official+read" }
    ]
  },
  {
    imdbId: "tt0988818",
    title: "Gintama",
    year: 2006,
    image:
      "https://myanimelist.net/images/anime/4/50361l.jpg",
    fallbackRating: 8.7,
    fallbackVotes: 20100,
    mangaSources: [
      { label: "VIZ Search", url: "https://www.viz.com/search?search=gintama" },
      { label: "Manga Official Search", url: "https://www.google.com/search?q=gintama+manga+official+read" }
    ]
  },
  {
    imdbId: "tt5897304",
    title: "Mob Psycho 100",
    year: 2016,
    image:
      "https://myanimelist.net/images/anime/8/80356l.jpg",
    fallbackRating: 8.6,
    fallbackVotes: 94800,
    mangaSources: [
      { label: "Dark Horse Search", url: "https://www.darkhorse.com/Search/mob+psycho+100" },
      { label: "Manga Official Search", url: "https://www.google.com/search?q=mob+psycho+100+manga+official+read" }
    ]
  },
  {
    imdbId: "tt2379308",
    title: "Psycho-Pass",
    year: 2012,
    image:
      "https://myanimelist.net/images/anime/1314/142015l.jpg",
    fallbackRating: 8.2,
    fallbackVotes: 64000,
    mangaSources: [
      { label: "Dark Horse Search", url: "https://www.darkhorse.com/Search/psycho-pass" },
      { label: "Manga Official Search", url: "https://www.google.com/search?q=psycho-pass+manga+official+read" }
    ]
  },
  {
    imdbId: "tt3358020",
    title: "Parasyte: The Maxim",
    year: 2014,
    image:
      "https://myanimelist.net/images/anime/3/73178l.jpg",
    fallbackRating: 8.3,
    fallbackVotes: 88000,
    mangaSources: [
      { label: "Kodansha Series", url: "https://kodansha.us/series/parasyte/" },
      { label: "Manga Official Search", url: "https://www.google.com/search?q=parasyte+manga+official+read" }
    ]
  },
  {
    imdbId: "tt15222080",
    title: "Blue Lock",
    year: 2022,
    image:
      "https://myanimelist.net/images/anime/1258/126929l.jpg",
    fallbackRating: 8.2,
    fallbackVotes: 41000,
    mangaSources: [
      { label: "Kodansha Series", url: "https://kodansha.us/series/blue-lock/" },
      { label: "Manga Official Search", url: "https://www.google.com/search?q=blue+lock+manga+official+read" }
    ]
  },
  {
    imdbId: "tt3909224",
    title: "The Seven Deadly Sins",
    year: 2014,
    image:
      "https://myanimelist.net/images/anime/8/65409l.jpg",
    fallbackRating: 7.8,
    fallbackVotes: 40200,
    mangaSources: [
      { label: "Kodansha Series", url: "https://kodansha.us/series/the-seven-deadly-sins/" },
      {
        label: "Manga Official Search",
        url: "https://www.google.com/search?q=the+seven+deadly+sins+manga+official+read"
      }
    ]
  }
];

const TABS_FAVOURITE_LIST = [
  "Attack on Titan",
  "Vinland Saga",
  "Berserk",
  "Monster",
  "Hunter x Hunter",
  "Fullmetal Alchemist",
  "cyberpunk edge runners",
  "Code Geas",
  "Jujutsu Kaisen",
  "Demon Slayer",
  "Made in Abyss",
  "Erased",
  "Steins: Gate",
  "Kaiju No. 8",
  "Haikyu!!",
  "Violet evergarden",
  "Naruto",
  "Black clover",
  "Hajimo no ippo",
  "Gintama",
  "Mob psycho",
  "Psycvho pass",
  "Parasyte",
  "Blue lock",
  "Seven deadly sins"
];

const VOID_LIST = [
  "Grave of the Fireflies",
  "A silent voice",
  "Barefoot gen",
  "Attack on Titan",
  "Cyberpunk edge runners",
  "Made in abyss",
  "Violet evergarden",
  "Your lie in April"
];

const MASTERPIECE_LIST = [
  "Vinlad saga",
  "Attack on titan",
  "Berserk",
  "Monster",
  "Fullmetal Alchemist"
];

const LIGHTHEARTED_LIST = [
  "My Neighbor Totoro",
  "Kiki's Delivery Service",
  "Ponyo",
  "The Cat Returns",
  "Whisper of the Heart",
  "Laid-Back Camp",
  "Spy x Family",
  "Barakamon",
  "K-On!",
  "Non Non Biyori"
];

const LOVE_STORY_LIST = [
  "Your Name.",
  "I Want to Eat Your Pancreas",
  "A Silent Voice: The Movie",
  "Weathering With You",
  "Suzume",
  "5 Centimeters per Second",
  "Clannad: After Story",
  "Fruits Basket",
  "Your Lie in April",
  "Darling in the Franxx",
  "Toradora!",
  "Nana"
];

const TITLE_ALIASES = {
  fullmetalalchemist: "fullmetalalchemistbrotherhood",
  cyberpunkedgerunners: "cyberpunkedgerunners",
  codegeas: "codegeass",
  steinsgate: "steinsgate",
  asilentvoice: "asilentvoicethemovie",
  demonslayer: "demonslayerkimetsunoyaiba",
  madeinabyss: "madeinabyss",
  violetevergarden: "violetevergarden",
  blackclover: "blackclover",
  barefootgen: "barefootgen",
  yourlieinapril: "yourlieinapril",
  vinladsaga: "vinlandsaga",
  yurucamp: "laidbackcamp",
  spyfamily: "spyxfamily",
  kiki: "kikisdeliveryservice",
  iwanttoeatyourpancreasthemovie: "iwanttoeatyourpancreas",
  haikyuu: "haikyu",
  kaijunoeight: "kaijuno8",
  hajimonoippo: "hajimenoippo",
  fightingspirit: "hajimenoippo",
  mobpsycho: "mobpsycho100",
  psycvhopass: "psychopass",
  parasyte: "parasytethemaxim",
  sevendeadlysins: "thesevendeadlysins",
  nanatsunotaizai: "thesevendeadlysins",
  suzumenotojimari: "suzume",
  tenkinoko: "weatheringwithyou",
  byousoku5centimeter: "5centimeterspersecond",
  darlinginfranx: "darlinginthefranxx",
  darlinginthefranx: "darlinginthefranxx"
};

const MASTERPIECE_WRITEUPS = {
  vinlandsaga:
    "Vinland Saga is a masterpiece because it has the courage to evolve. It begins with revenge, then dismantles revenge itself and rebuilds its hero around accountability, mercy, and moral courage. Few anime make inner transformation feel this hard-earned and this honest.",
  attackontitan:
    "Attack on Titan is a masterpiece because it reinvents itself without losing emotional truth. What starts as survival becomes a devastating political and moral tragedy about freedom, history, and inherited violence. It forces you to question who is right, and whether being right is ever enough.",
  berserk:
    "Berserk is a masterpiece because beneath its brutality lives one of anime's rawest portraits of human endurance. It is not only about darkness, it is about refusing to surrender your soul to darkness. Guts' struggle gives pain weight, but also gives survival dignity.",
  monster:
    "Monster is a masterpiece because it turns one ethical choice into a long, relentless meditation on conscience. It is psychologically precise, morally unsettling, and deeply humane. Instead of giving easy answers, it demands that you sit with responsibility long after the credits end.",
  fullmetalalchemistbrotherhood:
    "Fullmetal Alchemist: Brotherhood is a masterpiece because it balances heart, philosophy, and political consequence with almost no wasted motion. It turns grief, guilt, and ambition into a deeply moral journey about accountability, human dignity, and the true cost of power.",
  naruto:
    "Naruto is a masterpiece of long-form emotional storytelling. It transforms loneliness into leadership and turns revenge-driven conflict into a plea for empathy. Its greatest achievement is showing that persistence matters most when it protects people, not pride."
};

const LOVE_TAGS = {
  yourname: {
    loveFeelsReal:
      "Their bond grows through ordinary body-swap routines, small care decisions, and a desperate refusal to forget each other.",
    loveType: "Destined connection, time-crossed romance",
    breakOrHeal: "Bittersweet healing",
    afterWatchFeeling: "You feel warm, nostalgic, and emotionally restless in the best way.",
    watchNext: "I Want to Eat Your Pancreas"
  },
  iwanttoeatyourpancreas: {
    loveFeelsReal:
      "It starts in awkward honesty, not fantasy. Two lonely people slowly trust each other through everyday conversations about fear, life, and death.",
    loveType: "Healing bond, tragic love",
    breakOrHeal: "Emotional break",
    afterWatchFeeling: "Deep silence, gratitude for life, and an ache that stays for days.",
    watchNext: "A Silent Voice: The Movie"
  },
  joseethetigerandthefish: {
    loveFeelsReal:
      "Their relationship has friction, pride, dependency, and growth. It feels real because both of them are forced to mature, not just fall in love.",
    loveType: "Growth romance, second-chance energy",
    breakOrHeal: "Mostly heal",
    afterWatchFeeling: "Motivated and hopeful with a soft emotional hangover.",
    watchNext: "Horimiya"
  },
  asilentvoicethemovie: {
    loveFeelsReal:
      "Its intimacy is built through accountability and emotional repair, making every gentle moment feel earned instead of convenient.",
    loveType: "Redemption love, healing connection",
    breakOrHeal: "Break first, then heal",
    afterWatchFeeling: "Heavy but cleansing, with strong empathy and reflection.",
    watchNext: "Fruits Basket"
  },
  thegardenofwords: {
    loveFeelsReal:
      "It captures emotional timing more than romance tropes. Two people meet as emotional shelters during lonely life phases.",
    loveType: "Unspoken, melancholic, age-gap emotional bond",
    breakOrHeal: "Bittersweet",
    afterWatchFeeling: "Quiet longing and rainy-day melancholy.",
    watchNext: "Your Name."
  },
  clannadafterstory: {
    loveFeelsReal:
      "It follows love after confession: work, marriage, family, loss, and responsibility. That long arc makes it painfully believable.",
    loveType: "Life-journey romance, tragic family drama",
    breakOrHeal: "Break you completely, then rebuild you",
    afterWatchFeeling: "Emotionally exhausted yet spiritually fuller.",
    watchNext: "Your Lie in April"
  },
  fruitsbasket: {
    loveFeelsReal:
      "Love is shown as patient understanding of trauma, not instant chemistry. People are loved at their most broken, not their best.",
    loveType: "Healing love, trauma-recovery romance",
    breakOrHeal: "Heal with tears",
    afterWatchFeeling: "Comforted, seen, and emotionally safe.",
    watchNext: "Horimiya"
  },
  yourlieinapril: {
    loveFeelsReal:
      "Its romance is built through art, silence, and emotional rescue. Kousei and Kaori do not just fall in love; they pull each other back toward life when both are emotionally fragile.",
    loveType: "Healing-first love, tragic music romance",
    breakOrHeal: "Breaks you, then leaves gratitude",
    afterWatchFeeling: "Beautifully shattered, quiet, and deeply reflective.",
    watchNext: "5 Centimeters per Second"
  },
  darlinginthefranxx: {
    loveFeelsReal:
      "Hiro and Zero Two's bond feels intense because it is tied to identity, survival, and acceptance. They choose each other even when the world defines them as broken or dangerous.",
    loveType: "Rebellious soulmate bond in dystopian war",
    breakOrHeal: "Bittersweet break-heal cycle",
    afterWatchFeeling: "Emotionally charged, wistful, and attached to their journey.",
    watchNext: "Eureka Seven"
  },
  kaguyasamaloveiswar: {
    loveFeelsReal:
      "Behind comedy, both leads fear vulnerability. Their romance works because emotional pride slowly turns into genuine courage.",
    loveType: "Slow burn, rivals-to-lovers rom-com",
    breakOrHeal: "Smile and heal",
    afterWatchFeeling: "Happy, energized, and smiling nonstop.",
    watchNext: "Toradora!"
  },
  toradora: {
    loveFeelsReal:
      "It embraces messy emotions, jealousy, family baggage, and wrong choices before delivering emotional clarity.",
    loveType: "Slow burn, opposites attract",
    breakOrHeal: "Bittersweet healing",
    afterWatchFeeling: "Nostalgic, warm, and strangely emotional.",
    watchNext: "Horimiya"
  },
  horimiya: {
    loveFeelsReal:
      "It highlights comfort, vulnerability, and day-to-day support. Their intimacy feels like real partnership, not performative drama.",
    loveType: "Healthy relationship, slice-of-life romance",
    breakOrHeal: "Pure healing smile",
    afterWatchFeeling: "Peaceful, cozy, and emotionally refreshed.",
    watchNext: "Kaguya-sama: Love Is War"
  },
  weatheringwithyou: {
    loveFeelsReal:
      "Their romance grows under financial stress, runaway survival, and moral pressure, not dreamy perfection. Every choice they make has social consequences, which makes their bond feel urgent and human.",
    loveType: "Fate-driven urban romance with moral conflict",
    breakOrHeal: "Bittersweet healing",
    afterWatchFeeling: "Emotionally stirred, rain-soaked, and quietly hopeful.",
    watchNext: "Suzume"
  },
  suzume: {
    loveFeelsReal:
      "The connection forms through shared danger, grief, and responsibility. It is less about instant chemistry and more about two people learning to face loss while moving forward together.",
    loveType: "Healing journey romance",
    breakOrHeal: "Heal through tears",
    afterWatchFeeling: "Cathartic, tender, and deeply reflective.",
    watchNext: "Weathering With You"
  },
  "5centimeterspersecond": {
    loveFeelsReal:
      "It captures the love that timing could not protect. Distance, silence, and life phases slowly pull two hearts apart in a way that feels painfully realistic.",
    loveType: "First love, distance tragedy",
    breakOrHeal: "Breaks quietly",
    afterWatchFeeling: "Lingering ache, nostalgia, and emotional stillness.",
    watchNext: "Your Name."
  },
  nana: {
    loveFeelsReal:
      "It treats love as adult life actually is: passionate, flawed, messy, and shaped by career, ego, insecurity, and timing. Nothing feels sanitized.",
    loveType: "Mature relationship drama, music-era romance",
    breakOrHeal: "Break and mature",
    afterWatchFeeling: "Heavy, unforgettable, and emotionally raw.",
    watchNext: "Fruits Basket"
  }
};

const LEARNINGS = {
  attackontitan: {
    about:
      "A war story that starts as survival horror and evolves into a political tragedy about freedom, inherited hatred, and historical memory. The deeper the truth becomes, the harder it is to separate hero from villain.",
    teaches:
      "It teaches that freedom without empathy can become destruction, and that pain passed across generations keeps repeating until someone refuses revenge.",
    impact:
      "It pushes viewers to question one-sided narratives, resist dehumanizing language, and take moral responsibility even when every option carries loss.",
    emotionalDepth: "10/10",
    voidReason:
      "It breaks you because every triumph feels like a funeral in disguise. By the end, you are left holding grief, moral ambiguity, and the unbearable truth that freedom came at a human price no one can repay."
  },
  vinlandsaga: {
    about:
      "A revenge saga that deliberately dismantles revenge itself. Thorfinn's journey turns from rage and identity loss into one of the most sincere explorations of repentance and nonviolence in anime.",
    teaches:
      "It teaches that true strength is not domination, but restraint, accountability, and the courage to build rather than destroy.",
    impact:
      "It can reframe anger in real life: instead of asking who deserves punishment, it asks what kind of person you want to become after being hurt.",
    emotionalDepth: "9.5/10"
  },
  berserk: {
    about:
      "A dark fantasy about trauma, betrayal, and survival where emotional wounds are as terrifying as monsters. Beneath the brutality, it is a story about dignity, trust, and refusing to surrender your humanity.",
    teaches:
      "It teaches that resilience is not being unbreakable; it is choosing to keep moving while carrying pain honestly.",
    impact:
      "It resonates with people recovering from betrayal and loss, showing that healing is uneven but still possible through purpose and chosen bonds.",
    emotionalDepth: "10/10"
  },
  monster: {
    about:
      "A psychological thriller where one ethical decision by Dr. Tenma creates a long moral nightmare. It investigates how evil is shaped, how institutions fail, and whether compassion can survive fear.",
    teaches:
      "It teaches that morality is not abstract; choices have long shadows, and confronting evil demands discipline without losing empathy.",
    impact:
      "It leaves you more careful with judgment and more serious about responsibility, especially when doing the right thing has no immediate reward.",
    emotionalDepth: "9.4/10"
  },
  hunterxhunter: {
    about:
      "What begins as an adventurous coming-of-age story gradually becomes an unsettling study of power, obsession, and moral ambiguity. Its arcs challenge simple ideas of good and evil.",
    teaches:
      "It teaches strategic patience, emotional adaptability, and the danger of letting pride or grief define your decisions.",
    impact:
      "It helps viewers accept that growth is rarely linear; maturity often means unlearning idealism without losing compassion.",
    emotionalDepth: "8.8/10"
  },
  fullmetalalchemistbrotherhood: {
    about:
      "A redemption journey where two brothers confront personal guilt while uncovering state violence, war crimes, and the cost of human experimentation.",
    teaches:
      "It teaches accountability after failure, ethical boundaries in ambition, and that sacrifice is meaningful only when rooted in love, not ego.",
    impact:
      "It inspires principled ambition: chase excellence, but never at the expense of human dignity or collective responsibility.",
    emotionalDepth: "9.2/10"
  },
  cyberpunkedgerunners: {
    about:
      "A neon tragedy about class pressure, identity erosion, and love inside a system designed to consume people. Every character is chasing a dream that the city profits from and punishes.",
    teaches:
      "It teaches boundaries, emotional honesty, and the cost of defining self-worth through productivity, reputation, or enhancement.",
    impact:
      "It mirrors modern burnout culture and asks whether we are living for our values or just surviving inside expectations.",
    emotionalDepth: "9.4/10",
    voidReason:
      "It breaks you because the love is real, the dreams are real, and still the city devours both. The tragedy feels cruelly intimate, like watching hope lose to a machine that was never built to spare anyone."
  },
  codegeass: {
    about:
      "A political chess drama where rebellion, nationalism, and personal obsession collide. Lelouch's brilliance creates victories that constantly raise the moral cost.",
    teaches:
      "It teaches that intention does not justify method; leadership without accountability eventually destroys trust.",
    impact:
      "It encourages self-audit before influence: why do you want power, and who will pay for your decisions?",
    emotionalDepth: "8.9/10"
  },
  jujutsukaisen: {
    about:
      "A dark battle series where young sorcerers confront death early and repeatedly. Beneath the action is a study of grief, survivor's guilt, and meaning under constant threat.",
    teaches:
      "It teaches choosing purpose in a cruel world, mourning without giving up, and protecting others without romanticizing sacrifice.",
    impact:
      "It helps viewers process helplessness and loss while still acting with intention in daily life.",
    emotionalDepth: "8.6/10"
  },
  madeinabyss: {
    about:
      "An exquisitely crafted descent where curiosity and horror coexist in every layer. Its beauty disarms you before confronting you with bodily and emotional extremes.",
    teaches:
      "It teaches that curiosity is powerful but not innocent; pursuit without limits can wound the very people you love.",
    impact:
      "It deepens empathy for vulnerable people and leaves a lasting respect for boundaries, care, and informed risk.",
    emotionalDepth: "10/10",
    voidReason:
      "It devastates because innocence keeps walking deeper into places that punish innocence first. Its beauty makes you trust it, then it asks for sacrifice after sacrifice until wonder itself starts to hurt."
  },
  erased: {
    about:
      "A time-travel suspense drama where revisiting the past becomes an act of protection, not nostalgia. It focuses on neglected children, hidden abuse, and the guilt of arriving too late.",
    teaches:
      "It teaches that courage is often timely intervention: noticing danger early, believing victims, and acting before harm compounds.",
    impact:
      "It encourages practical compassion in real life, especially for people whose pain is quiet and easy to miss.",
    emotionalDepth: "8.7/10"
  },
  steinsgate: {
    about:
      "A sci-fi thriller that shifts from eccentric fun to emotional burden as time manipulation exposes consequences no one can fully control.",
    teaches:
      "It teaches responsibility for your choices, persistence under repeated failure, and the courage to try again when outcomes look impossible.",
    impact:
      "It reframes commitment: love and friendship are not feelings alone, but repeated decisions made under pressure.",
    emotionalDepth: "9.1/10"
  },
  violetevergarden: {
    about:
      "A post-war healing story where Violet learns what feelings mean by writing letters for strangers carrying grief, hope, regret, and love.",
    teaches:
      "It teaches emotional literacy: naming what you feel, expressing it with care, and understanding that words can either wound or heal.",
    impact:
      "It makes communication feel sacred and often inspires viewers to speak love, apology, and gratitude before it is too late.",
    emotionalDepth: "9.8/10",
    voidReason:
      "It breaks you quietly because every letter carries words people were never able to say in time. You watch love survive war, distance, and death, yet still arrive one heartbeat too late."
  },
  naruto: {
    about:
      "A long-form coming-of-age journey where rejection, loneliness, and rivalry are transformed through discipline, mentorship, and chosen bonds.",
    teaches:
      "It teaches that persistence is strongest when paired with empathy, and that breaking cycles of hatred begins with understanding pain on both sides.",
    impact:
      "It motivates long-term self-belief and shows that identity can be rebuilt through effort, community, and forgiveness.",
    emotionalDepth: "8.8/10"
  },
  blackclover: {
    about:
      "An underdog fantasy where social class, talent gaps, and prejudice are challenged by relentless effort and team trust.",
    teaches:
      "It teaches discipline under disadvantage, faith in teammates, and refusing to internalize limiting labels.",
    impact:
      "It gives practical motivation for daily consistency, especially for people who feel behind or underestimated.",
    emotionalDepth: "7.9/10"
  },
  demonslayerkimetsunoyaiba: {
    about:
      "A grief-driven quest where Tanjiro fights terrifying enemies while refusing to abandon compassion, even for the fallen.",
    teaches:
      "It teaches that kindness is not weakness, and that moral clarity can survive even inside violent struggle.",
    impact:
      "It reinforces emotional balance: protect what you love fiercely, but do not let hatred define you.",
    emotionalDepth: "8.9/10"
  },
  graveofthefireflies: {
    about:
      "A devastating wartime story of two siblings abandoned by collapsing institutions and exhausted adults. It is less about battle and more about social neglect.",
    teaches:
      "It teaches that pride and isolation can become fatal under scarcity, and that compassion delayed is often compassion denied.",
    impact:
      "It permanently reshapes how viewers think about war, civic responsibility, hunger, and the vulnerability of children.",
    emotionalDepth: "10/10",
    voidReason:
      "It breaks you because love is present but protection never arrives. There is no heroic rescue, only the slow collapse of two children the world keeps choosing not to save."
  },
  asilentvoicethemovie: {
    about:
      "A deeply human redemption arc about bullying, disability, social anxiety, and the long afterlife of guilt.",
    teaches:
      "It teaches accountability beyond apology: listening, repairing trust slowly, and learning to see people as full individuals rather than roles.",
    impact:
      "It increases sensitivity toward mental health and isolation, often changing how viewers treat difference and silence in everyday relationships.",
    emotionalDepth: "9.7/10",
    voidReason:
      "It hurts because the cruelty is ordinary and therefore terrifyingly familiar. Its healing is beautiful but fragile, and it reminds you that one careless phase can leave scars people carry for years."
  },
  barefootgen: {
    about:
      "An unflinching anti-war narrative following a child through nuclear devastation, social collapse, and grief too large for language.",
    teaches:
      "It teaches resilience grounded in dignity, and the moral urgency of memory so mass suffering is neither normalized nor forgotten.",
    impact:
      "It leaves a lifelong anti-war imprint, making abstract history feel immediate, personal, and ethically non-negotiable.",
    emotionalDepth: "9.6/10",
    voidReason:
      "It breaks you by forcing historical horror into a child's everyday reality. Survival becomes resistance, and every small act of hope feels painfully expensive."
  },
  yourlieinapril: {
    about:
      "A music-driven emotional journey where trauma-induced silence is challenged by love, performance, and the courage to feel again.",
    teaches:
      "It teaches vulnerability, the healing power of art, and how impermanence makes tenderness more urgent, not less meaningful.",
    impact:
      "It encourages emotional openness in real life: say what matters, create while you can, and let beauty coexist with grief.",
    emotionalDepth: "9.9/10",
    voidReason:
      "It breaks you because it teaches you how to feel alive again, then asks you to grieve what made that life possible. The final reveal does not erase the beauty, it makes that beauty ache forever."
  },
  darlinginthefranxx: {
    about:
      "A dystopian coming-of-age romance where Hiro and Zero Two search for identity in a system that treats children as tools. Their relationship is the emotional core that challenges control, fear, and dehumanization.",
    teaches:
      "It teaches that love can restore self-worth when the world strips identity away. It also warns that passion alone is not enough without trust, communication, and shared responsibility.",
    impact:
      "It resonates with viewers who have felt misunderstood or labeled, because it shows how one accepting relationship can become the turning point from self-rejection to self-belief.",
    emotionalDepth: "8.8/10",
    voidReason:
      "It breaks you through intensity: devotion, sacrifice, and the feeling that love can be both your greatest rescue and your greatest wound."
  },
  onepiece: {
    about:
      "A vast adventure about freedom, chosen family, and inherited dreams where each island exposes a new social injustice or personal wound.",
    teaches:
      "It teaches radical loyalty, moral courage against oppressive systems, and the importance of protecting another person's dream.",
    impact:
      "It inspires viewers to build communities where people are valued for who they are, not where they come from.",
    emotionalDepth: "8.9/10"
  },
  bleachthousandyearbloodwar: {
    about:
      "A war arc that pushes Ichigo and the Soul Society into identity crises, legacy conflicts, and relentless sacrifice.",
    teaches:
      "It teaches duty under chaos, adapting to irreversible loss, and carrying power without abandoning emotional responsibility.",
    impact:
      "It resonates with anyone balancing personal identity and collective duty during high-pressure seasons of life.",
    emotionalDepth: "8.7/10"
  },
  deathnote: {
    about:
      "A psychological duel where idealism mutates into god complex, and justice becomes a battlefield of ego and control.",
    teaches:
      "It teaches that intelligence without humility is dangerous, and that moral shortcuts can corrupt even seemingly noble intentions.",
    impact:
      "It sharpens critical thinking around power, accountability, and the seductive logic of doing wrong for a claimed greater good.",
    emotionalDepth: "8.8/10"
  },
  cowboybebop: {
    about:
      "A melancholic space noir where bounty-hunting episodes hide deeper themes of regret, identity drift, and unfinished pasts.",
    teaches:
      "It teaches that you cannot outrun unresolved pain forever; healing begins when you face what you keep avoiding.",
    impact:
      "It helps viewers process loneliness and transition, especially when life feels disconnected or directionless.",
    emotionalDepth: "8.9/10"
  },
  frierenbeyondjourneysend: {
    about:
      "A reflective fantasy that begins after the hero's journey and asks what remains when time keeps moving but people do not.",
    teaches:
      "It teaches emotional presence, gratitude for ordinary moments, and the importance of valuing people before they become memory.",
    impact:
      "It changes how viewers relate to time, often making relationships and daily kindness feel more urgent and meaningful.",
    emotionalDepth: "9.0/10"
  },
  dragonballz: {
    about:
      "A high-energy saga of escalating battles that is equally about mentorship, fatherhood, and long-term self-improvement.",
    teaches:
      "It teaches disciplined growth, responsibility with power, and the humility to keep learning even when you are already strong.",
    impact:
      "It motivates consistent training mindsets in real life, whether in health, work, or personal development.",
    emotionalDepth: "8.3/10"
  },
  narutoshippuden: {
    about:
      "A darker continuation of Naruto where childhood ideals are tested against war, grief, and geopolitical consequence.",
    teaches:
      "It teaches leadership through empathy, the cost of revenge politics, and the necessity of emotional maturity in conflict.",
    impact:
      "It reinforces conflict-resolution values and reminds viewers that peace requires patience, dialogue, and principled action.",
    emotionalDepth: "8.9/10"
  },
  spiritedaway: {
    about:
      "A coming-of-age fantasy where Chihiro enters a spirit world that reflects greed, identity loss, and moral confusion.",
    teaches:
      "It teaches courage under uncertainty, integrity in strange environments, and remembering who you are when systems try to rename you.",
    impact:
      "It empowers viewers to navigate unfamiliar spaces without losing kindness, humility, or self-respect.",
    emotionalDepth: "9.1/10"
  },
  yourname: {
    about:
      "A romantic, time-bending story where two teenagers experience each other's lives and confront memory, longing, and disaster.",
    teaches:
      "It teaches empathy through perspective-taking, emotional persistence, and trusting meaningful connections even without complete explanations.",
    impact:
      "It encourages people to value emotional intuition, cherish fleeting bonds, and show up for those who matter.",
    emotionalDepth: "9.0/10"
  },
  princessmononoke: {
    about:
      "An ecological epic where industrial progress, survival needs, and sacred nature collide without simple heroes or villains.",
    teaches:
      "It teaches moral complexity, coexistence over domination, and the discipline of seeking balance when every side carries valid pain.",
    impact:
      "It deepens environmental ethics and conflict literacy by showing that durable peace needs empathy across opposing interests.",
    emotionalDepth: "9.1/10"
  },
  howlsmovingcastle: {
    about:
      "A magical anti-war fairytale where Sophie and Howl confront fear, insecurity, and the emotional cost of prolonged conflict.",
    teaches:
      "It teaches self-acceptance, courageous tenderness, and that love matures when it includes responsibility.",
    impact:
      "It helps viewers challenge self-criticism and choose gentler, braver ways of caring for themselves and others.",
    emotionalDepth: "8.8/10"
  },
  demonslayerkimetsunoyaibathemoviemugentrain: {
    about:
      "A concentrated arc about grief, dreams, and sacrifice where the heroes confront illusion, despair, and duty in one intense night.",
    teaches:
      "It teaches perseverance through pain, honoring mentors through action, and choosing reality over comforting illusion.",
    impact:
      "It leaves viewers with a strong ethic of carrying forward the values of those we lose.",
    emotionalDepth: "9.1/10",
    voidReason:
      "It hits hard because it gives you a blazing image of courage, then takes it away before you are ready. What remains is grief, responsibility, and the demand to keep moving even with a broken heart."
  },
  myneighbortotoro: {
    about:
      "A gentle childhood story where wonder, imagination, and nature help two sisters endure anxiety around family uncertainty.",
    teaches:
      "It teaches emotional resilience through play, sibling care, and finding comfort in everyday magic during stressful times.",
    impact:
      "It reminds viewers that softness, patience, and small acts of care can be deeply stabilizing.",
    emotionalDepth: "8.4/10",
    smileReason:
      "It puts a smile on your face through pure childlike wonder, cozy forest charm, and the comforting feeling that ordinary days can still be magical."
  },
  neongenesisevangeliontheendofevangelion: {
    about:
      "A psychologically intense ending that externalizes depression, loneliness, and fear of intimacy through apocalyptic imagery.",
    teaches:
      "It teaches that pain does not disappear by isolation; connection requires vulnerability, and self-acceptance is difficult but necessary.",
    impact:
      "It gives language to internal conflict, helping viewers face mental-health struggles with more honesty and compassion.",
    emotionalDepth: "9.6/10",
    voidReason:
      "It breaks you because it strips away every emotional defense and leaves you face to face with shame, loneliness, and the terrifying need to be accepted as you are."
  },
  wolfchildren: {
    about:
      "A tender family drama about single parenting, identity, and letting children choose who they become, even when it hurts.",
    teaches:
      "It teaches unconditional love, patient sacrifice, and the humility to support growth without controlling outcomes.",
    impact:
      "It strongly resonates with parents and caretakers, reframing love as long-term devotion rather than possession.",
    emotionalDepth: "9.3/10",
    voidReason:
      "It breaks you softly because every act of love also prepares a goodbye. You watch a mother give everything, not to be needed forever, but to be left with pride and emptiness at the same time."
  },
  akira: {
    about:
      "A cyberpunk classic about social unrest, militarized power, and adolescent insecurity magnified into catastrophe.",
    teaches:
      "It teaches that unprocessed trauma plus unchecked power is explosive, and institutions without ethics eventually collapse.",
    impact:
      "It sharpens awareness of political manipulation, youth alienation, and the human cost of authoritarian control.",
    emotionalDepth: "8.7/10"
  },
  castleinthesky: {
    about:
      "A skybound adventure blending wonder and danger as children protect ancient power from military greed.",
    teaches:
      "It teaches integrity under pressure, courage with compassion, and that true strength protects life rather than controlling it.",
    impact:
      "It leaves viewers with hope-driven ethics: progress should be guided by care, not domination.",
    emotionalDepth: "8.6/10"
  },
  kikisdeliveryservice: {
    about:
      "A warm coming-of-age fantasy where Kiki leaves home, faces loneliness, and slowly finds confidence through honest work and meaningful friendships.",
    teaches:
      "It teaches self-reliance with humility, asking for help without shame, and rebuilding motivation when confidence fades.",
    impact:
      "It feels deeply healing for anyone entering a new life phase, reminding us that growth is often quiet, messy, and beautiful.",
    emotionalDepth: "8.5/10",
    smileReason:
      "It puts a smile on your face with its cozy city vibe, Jiji's playful humor, and the gentle joy of watching Kiki bloom at her own pace."
  },
  ponyo: {
    about:
      "A bright ocean fairytale about friendship, wonder, and childlike love that turns everyday moments into pure adventure.",
    teaches:
      "It teaches innocence, kindness, and trusting simple heartfelt promises even in a chaotic world.",
    impact:
      "Its color, warmth, and emotional simplicity make it one of the easiest films to watch when you want instant comfort.",
    emotionalDepth: "8.3/10",
    smileReason:
      "It puts a smile on your face with joyful visuals, playful chaos, and the adorable sincerity of Ponyo and Sosuke."
  },
  thecatreturns: {
    about:
      "A whimsical fantasy where Haru is pulled into a bizarre cat kingdom and must rediscover courage and self-worth.",
    teaches:
      "It teaches confidence, setting boundaries, and choosing your own voice even when the world tries to decide for you.",
    impact:
      "It offers a breezy, uplifting adventure that feels like a cheerful reset after heavy or intense shows.",
    emotionalDepth: "7.9/10",
    smileReason:
      "It puts a smile on your face through playful absurdity, charming cat-world humor, and the effortless cool of the Baron."
  },
  whisperoftheheart: {
    about:
      "A tender coming-of-age romance about creativity, first love, and the courage to take your dreams seriously.",
    teaches:
      "It teaches patience with your talent, disciplined effort, and supporting people you love without losing your own path.",
    impact:
      "It inspires creators and dreamers by showing that small daily effort can become meaningful artistic growth.",
    emotionalDepth: "8.7/10",
    smileReason:
      "It puts a smile on your face with heartfelt young romance, warm Tokyo moments, and its hopeful message about chasing dreams."
  },
  laidbackcamp: {
    about:
      "A calm slice-of-life series about friends camping, sharing food, and enjoying nature at a peaceful unhurried pace.",
    teaches:
      "It teaches mindful living, appreciation of simple moments, and the value of quiet companionship.",
    impact:
      "It works like emotional therapy after stressful days, helping viewers slow down and breathe.",
    emotionalDepth: "8.6/10",
    smileReason:
      "It puts a smile on your face with cozy campfire scenes, comforting food moments, and the soothing friendship between Rin and Nadeshiko."
  },
  spyxfamily: {
    about:
      "A comedy-action family story where a spy, assassin, and telepath pretend to be normal while accidentally becoming a real loving family.",
    teaches:
      "It teaches chosen family, emotional honesty, and how care can grow even from unexpected beginnings.",
    impact:
      "It balances laughter and heart so well that it consistently lifts mood without feeling shallow.",
    emotionalDepth: "8.8/10",
    smileReason:
      "It puts a smile on your face with Anya's reactions, chaotic family moments, and the wholesome warmth behind every mission."
  },
  barakamon: {
    about:
      "A heartfelt island slice-of-life where a perfectionist calligrapher heals, matures, and rediscovers joy through a lively village community.",
    teaches:
      "It teaches humility, creative authenticity, and accepting imperfection as part of growth.",
    impact:
      "It is deeply restorative for burnout, reminding viewers that human connection can revive both art and life.",
    emotionalDepth: "8.7/10",
    smileReason:
      "It puts a smile on your face with Naru's energy, island humor, and Handa's gradual transformation into a happier version of himself."
  },
  kon: {
    about:
      "A music slice-of-life about school friends turning ordinary club days into unforgettable memories through tea, practice, and laughter.",
    teaches:
      "It teaches friendship, consistency, and finding joy in the process instead of chasing perfection.",
    impact:
      "It leaves a nostalgic, uplifting feeling that celebrates youth, bonds, and everyday happiness.",
    emotionalDepth: "8.4/10",
    smileReason:
      "It puts a smile on your face with cute band chemistry, wholesome comedy, and the warm comfort of their after-school time together."
  },
  nonnonbiyori: {
    about:
      "A relaxing countryside slice-of-life that turns small daily events into beautiful, funny, and memorable moments.",
    teaches:
      "It teaches presence, gratitude for simple living, and the emotional richness hidden in ordinary days.",
    impact:
      "It is a pure mood-lifter that helps viewers decompress and reconnect with slower rhythms of life.",
    emotionalDepth: "8.2/10",
    smileReason:
      "It puts a smile on your face with innocent humor, peaceful rural scenery, and the sweet chemistry among the kids."
  },
  iwanttoeatyourpancreas: {
    about:
      "A deeply intimate coming-of-age film where two opposite personalities learn to share fear, joy, and tenderness in the shadow of limited time.",
    teaches:
      "It teaches emotional honesty, presence, and the courage to fully live while life is uncertain.",
    impact:
      "It often changes how viewers treat ordinary days, pushing them to express love and gratitude before it is too late.",
    emotionalDepth: "9.8/10",
    voidReason:
      "It breaks you because the emotional closeness feels profoundly real, and then life reminds you that love is not always protected by fairness."
  },
  joseethetigerandthefish: {
    about:
      "A character-rich romance where both leads confront dependency, pride, injury, and ambition while learning to support each other's growth.",
    teaches:
      "It teaches dignity in vulnerability, mutual effort in relationships, and loving someone without shrinking their future.",
    impact:
      "It inspires emotional maturity: love is not rescue, it is helping each other stand and walk forward.",
    emotionalDepth: "8.9/10",
    voidReason:
      "It can hurt because every tender moment carries the fear that timing, insecurity, or circumstances might pull them apart."
  },
  thegardenofwords: {
    about:
      "A rain-soaked emotional story about two lonely people who become each other's temporary shelter during fragile phases of life.",
    teaches:
      "It teaches that meaningful connection can be brief yet life-changing, and that healing sometimes begins in quiet shared spaces.",
    impact:
      "It leaves viewers more attentive to emotional loneliness and the hidden weight people carry behind composed faces.",
    emotionalDepth: "8.7/10",
    voidReason:
      "It breaks you softly because the bond is genuine, but life does not pause to preserve emotionally unfinished relationships."
  },
  clannadafterstory: {
    about:
      "A romance that matures into a family journey, showing adulthood, responsibility, devastating loss, and the stubborn endurance of love.",
    teaches:
      "It teaches that love is a daily commitment across seasons of joy and grief, not just a confession scene.",
    impact:
      "Its long emotional arc profoundly reshapes how viewers think about family, fatherhood, forgiveness, and second chances.",
    emotionalDepth: "10/10",
    voidReason:
      "It breaks you completely because it mirrors real life too closely: love gives purpose, and that same love can become the center of your deepest grief."
  },
  fruitsbasket: {
    about:
      "A healing romance-drama about trauma, shame, and acceptance where affection grows through patience, safety, and emotional repair.",
    teaches:
      "It teaches that healthy love does not demand perfection; it offers understanding, boundaries, and space to heal.",
    impact:
      "It gives many viewers emotional language for pain they never expressed, and hope that broken cycles can be ended.",
    emotionalDepth: "9.4/10",
    voidReason:
      "It hurts because every character carries wounds that feel painfully human, and watching them heal forces you to face your own."
  },
  kaguyasamaloveiswar: {
    about:
      "A brilliant romantic comedy where emotional pride turns confession into strategy, yet vulnerability slowly wins over performance.",
    teaches:
      "It teaches that emotional honesty is an act of courage, and real intimacy begins when ego stops leading.",
    impact:
      "It reminds viewers that laughter and sincerity can coexist, making romance feel fun without losing emotional truth.",
    emotionalDepth: "8.6/10",
    voidReason:
      "It can still sting because beneath comedy, both leads hide fear of rejection that many viewers personally recognize."
  },
  toradora: {
    about:
      "A heartfelt school romance that starts in chaos and gradually reveals insecurity, family pain, and tender emotional dependence.",
    teaches:
      "It teaches that love matures through uncomfortable self-awareness, accountability, and choosing someone beyond infatuation.",
    impact:
      "It leaves a strong nostalgia imprint and helps viewers identify the difference between emotional noise and real care.",
    emotionalDepth: "9.0/10",
    voidReason:
      "It breaks you in a bittersweet way because it exposes how much people hide behind attitude, then asks them to love honestly."
  },
  kaijuno8: {
    about:
      "A fast, modern action story about Kafka Hibino, a man who feels left behind until fate gives him both power and responsibility at once. Beneath the monster fights, it is about second chances, self-worth, and finally becoming the person you promised you'd be.",
    teaches:
      "It teaches that age is never a disqualification for growth. You can start late, fail publicly, and still earn your place through discipline, humility, and service.",
    impact:
      "It strongly motivates viewers who feel too late in life. Kafka's arc reminds you that consistency, not perfect timing, is what rebuilds confidence.",
    emotionalDepth: "8.6/10"
  },
  haikyu: {
    about:
      "A sports journey that turns volleyball into a story about identity, trust, and collective excellence. Every match is less about winning alone and more about learning how individual strengths become powerful only inside a true team.",
    teaches:
      "It teaches process over ego: preparation, communication, and respect for fundamentals. Talent matters, but growth belongs to those who keep showing up.",
    impact:
      "It helps in real life far beyond sports by building a team-first mindset, emotional resilience after failure, and confidence rooted in daily work.",
    emotionalDepth: "8.9/10"
  },
  hajimenoippo: {
    about:
      "A deeply human boxing story about fear, discipline, and self-respect. Ippo does not become inspiring because he is naturally fearless; he becomes inspiring because he keeps stepping forward even when fear is still inside him.",
    teaches:
      "It teaches that confidence is earned through repetition and integrity. Hard work is not a motivational slogan here; it is a daily contract between who you are and who you want to become.",
    impact:
      "It pushes viewers toward long-term habits: training when nobody is watching, staying humble after progress, and respecting process over shortcuts.",
    emotionalDepth: "9.1/10"
  },
  gintama: {
    about:
      "A rare masterpiece that hides existential pain inside absurd comedy. One episode can make you laugh uncontrollably, and the next can hit with grief, loyalty, and sacrifice that feel painfully real.",
    teaches:
      "It teaches emotional flexibility: humor is not escape, it can be survival. You can carry trauma, still protect people, and still choose kindness without becoming naive.",
    impact:
      "It helps people breathe through hard seasons. Gintama reminds you that maturity is not becoming serious all the time, it is knowing when to joke, when to fight, and when to stand for your values.",
    emotionalDepth: "9.5/10"
  },
  mobpsycho100: {
    about:
      "A coming-of-age story where overwhelming psychic power is secondary to emotional growth. Mob's journey is about identity, self-worth, and learning that being a good person matters more than being an exceptional one.",
    teaches:
      "It teaches that power without emotional maturity is dangerous, and that real strength is self-control, empathy, and honest self-reflection.",
    impact:
      "It strongly reshapes how viewers see talent and status by showing that your value is not your output. You deserve respect because you are human, not because you are useful.",
    emotionalDepth: "9.4/10"
  },
  psychopass: {
    about:
      "A dystopian moral thriller about surveillance, law, and state-controlled judgment. It constantly asks whether social order is worth preserving if that order quietly erases human freedom and moral nuance.",
    teaches:
      "It teaches that ethics cannot be outsourced to systems. Even advanced institutions need morally awake people willing to question unjust certainty.",
    impact:
      "It changes how viewers think about technology, policing, and governance in real life, especially around data-driven decisions that look objective but can still be deeply inhumane.",
    emotionalDepth: "9.0/10"
  },
  parasytethemaxim: {
    about:
      "A body-horror thriller that evolves into a philosophical study of empathy and coexistence. As Shinichi changes, the story asks what truly defines humanity: biology, emotion, morality, or the choice to protect life.",
    teaches:
      "It teaches that survival without empathy turns cruel, but empathy without boundaries can become self-destruction. Wisdom lies in balancing compassion with self-preservation.",
    impact:
      "It leaves viewers questioning violence, ecological hierarchy, and moral identity in a way that lingers long after the ending.",
    emotionalDepth: "9.1/10"
  },
  bluelock: {
    about:
      "An intense sports-psychology series built around ego, ambition, and ruthless competition. It reframes football as a battle of identity where hesitation costs everything.",
    teaches:
      "It teaches that healthy ego can be a fuel, not a flaw, when it is paired with skill-building and accountability. Belief without preparation is noise; belief with work becomes excellence.",
    impact:
      "It boosts goal-focus and performance mentality in real life, especially for people who need permission to think bigger and take ownership of their potential.",
    emotionalDepth: "8.6/10"
  },
  thesevendeadlysins: {
    about:
      "A fantasy saga about broken heroes carrying guilt, curses, and unresolved history while still choosing to protect what they love. Its core is redemption through loyalty, not perfection.",
    teaches:
      "It teaches that your past mistakes do not cancel your future value, but redemption still requires responsibility, honesty, and sacrifice.",
    impact:
      "It resonates with viewers who feel flawed or behind in life by showing that strength can coexist with emotional scars and that chosen family can help rebuild identity.",
    emotionalDepth: "8.7/10"
  },
  weatheringwithyou: {
    about:
      "A rain-drenched romance set inside economic hardship and social instability, where Hodaka and Hina's love grows while the sky itself demands a cost. It blends teenage longing with adult moral dilemma in a way that feels both cinematic and intimate.",
    teaches:
      "It teaches that love is not just emotion, it is responsibility. Wanting to save someone can be noble, but every rescue still carries consequences for the wider world.",
    impact:
      "It pushes viewers to think beyond romantic impulse and ask difficult questions: when your heart and society conflict, what kind of choice can you live with?",
    emotionalDepth: "9.1/10",
    voidReason:
      "It breaks you because it refuses a clean moral answer. You feel the beauty of their bond, yet you also feel the weight of what that bond demands from everyone else."
  },
  suzume: {
    about:
      "A road-journey romance woven with grief, memory, and disaster healing. Suzume's emotional arc is not only about meeting Souta, it is about learning to comfort the younger self she abandoned in pain.",
    teaches:
      "It teaches emotional recovery through movement: face the places that hurt, honor the people you lost, and still choose to live with warmth.",
    impact:
      "It leaves viewers gentler with their own wounds. The story reframes healing as a series of small acts of care, not a single dramatic breakthrough.",
    emotionalDepth: "9.3/10",
    voidReason:
      "It breaks you softly because beneath its fantasy doors is a very real grief story. By the end, the tenderness feels earned and deeply personal."
  },
  "5centimeterspersecond": {
    about:
      "A quiet, devastating portrait of first love over time, where trains, distance, and silence become emotional symbols of two lives moving out of sync. Its realism is what makes it unforgettable.",
    teaches:
      "It teaches that love can be true and still not survive timing. Emotional sincerity does not always guarantee emotional permanence.",
    impact:
      "It reshapes how viewers think about closure, missed chances, and emotional maturity. Sometimes healing means honoring what was beautiful without forcing it to continue.",
    emotionalDepth: "9.5/10",
    voidReason:
      "It breaks you without dramatic tragedy. The pain comes from ordinary life itself, from how two sincere hearts can drift apart while still remembering each other."
  },
  nana: {
    about:
      "A mature romance-drama where two women named Nana navigate love, ambition, trauma, and identity in Tokyo. It is brutally honest about how relationships strain under adulthood, fame, insecurity, and emotional dependency.",
    teaches:
      "It teaches that love without self-awareness can become self-destruction, and that intimacy requires communication, boundaries, and emotional responsibility.",
    impact:
      "It deeply affects viewers because it mirrors real adult relationships: attachment wounds, jealousy, timing, and the painful gap between what we feel and what we can sustain.",
    emotionalDepth: "9.7/10",
    voidReason:
      "It breaks you because almost every relationship in Nana feels recognizably human. The heartbreak is not fantasy heartbreak, it is the kind people carry in real life for years."
  },
  horimiya: {
    about:
      "A grounded romance about seeing each other's unseen sides and building closeness through everyday trust, comfort, and acceptance.",
    teaches:
      "It teaches that the healthiest love often looks simple: consistency, respect, and emotional safety.",
    impact:
      "It offers a reassuring model of partnership where being fully yourself strengthens, rather than threatens, intimacy.",
    emotionalDepth: "8.5/10",
    voidReason:
      "It can still create a gentle ache because it makes viewers long for the kind of safe, honest closeness it portrays."
  }
};

const CHARACTER_LESSONS = {
  attackontitan: {
    protagonist: "Eren Yeager teaches the danger of blind revenge and the value of understanding perspective.",
    characters: [
      "Mikasa Ackerman teaches loyalty with emotional restraint.",
      "Armin Arlert teaches that empathy and strategy can save more lives than brute force.",
      "Levi Ackerman teaches discipline and leading through pain."
    ]
  },
  vinlandsaga: {
    protagonist: "Thorfinn teaches that true strength is choosing peace after trauma.",
    characters: [
      "Askeladd teaches ruthless intelligence and carrying heavy duty in silence.",
      "Canute teaches transformation from fear to principled leadership.",
      "Einar teaches kindness and rebuilding life after loss."
    ]
  },
  berserk: {
    protagonist: "Guts teaches resilience and refusing to surrender to darkness.",
    characters: [
      "Casca teaches emotional endurance and dignity under suffering.",
      "Griffith teaches how unchecked ambition can destroy humanity.",
      "Skull Knight teaches patience and the long view of consequence."
    ]
  },
  monster: {
    protagonist:
      "Dr. Kenzo Tenma teaches that saving a life is sacred, but moral responsibility does not end in the operating room.",
    characters: [
      "Johan Liebert teaches how charisma without conscience can become pure destruction.",
      "Nina Fortner teaches courage in reclaiming identity from trauma.",
      "Inspector Lunge teaches discipline, obsession, and the cost of certainty without empathy."
    ]
  },
  hunterxhunter: {
    protagonist: "Gon Freecss teaches curiosity and determination, but also the cost of emotional extremes.",
    characters: [
      "Killua teaches healing from toxic conditioning through friendship.",
      "Kurapika teaches discipline and the burden of revenge.",
      "Leorio teaches practical compassion and service."
    ]
  },
  fullmetalalchemistbrotherhood: {
    protagonist: "Edward Elric teaches accountability and humility after failure.",
    characters: [
      "Alphonse Elric teaches hope and moral integrity.",
      "Roy Mustang teaches responsibility in leadership and justice with restraint.",
      "Riza Hawkeye teaches loyalty anchored in ethics."
    ]
  },
  cyberpunkedgerunners: {
    protagonist: "David Martinez teaches that chasing status without boundaries can consume your identity.",
    characters: [
      "Lucy teaches vulnerability and trusting someone with your dream.",
      "Maine teaches that power without control destroys the team.",
      "Rebecca teaches fearless loyalty and emotional honesty."
    ]
  },
  codegeass: {
    protagonist: "Lelouch teaches that intention is not enough if methods destroy trust.",
    characters: [
      "Suzaku teaches idealism and the cost of rigid morality.",
      "C.C. teaches emotional detachment can hide deep longing.",
      "Nunnally teaches that kindness can be a political force."
    ]
  },
  jujutsukaisen: {
    protagonist: "Yuji Itadori teaches choosing meaning even in a cruel world.",
    characters: [
      "Megumi Fushiguro teaches responsibility and quiet courage.",
      "Nobara Kugisaki teaches self-worth and unapologetic identity.",
      "Satoru Gojo teaches talent must be paired with responsibility."
    ]
  },
  madeinabyss: {
    protagonist: "Riko teaches curiosity and courage, but also respecting limits.",
    characters: [
      "Reg teaches compassion with restraint in violence.",
      "Nanachi teaches surviving grief while staying human.",
      "Prushka teaches pure trust and emotional sacrifice."
    ]
  },
  erased: {
    protagonist: "Satoru Fujinuma teaches that one brave action can change many lives.",
    characters: [
      "Kayo Hinazuki teaches silent suffering needs active compassion.",
      "Sachiko Fujinuma teaches attentive parenting and moral courage.",
      "Airi Katagiri teaches belief in someone at their lowest point."
    ]
  },
  steinsgate: {
    protagonist: "Rintaro Okabe teaches responsibility for every choice and refusing to quit on loved ones.",
    characters: [
      "Kurisu Makise teaches rationality with empathy.",
      "Mayuri Shiina teaches emotional grounding and quiet care.",
      "Suzuha Amane teaches hope under impossible timelines."
    ]
  },
  violetevergarden: {
    protagonist: "Violet teaches emotional literacy and learning to love after war.",
    characters: [
      "Gilbert teaches the weight of words left unsaid.",
      "Claudia teaches second chances with patient guidance.",
      "Benedict teaches loyalty and showing care through action."
    ]
  },
  naruto: {
    protagonist: "Naruto Uzumaki teaches persistence and transforming loneliness into compassion.",
    characters: [
      "Sasuke Uchiha teaches that pain can distort purpose if not healed.",
      "Kakashi Hatake teaches leadership through balance and sacrifice.",
      "Jiraiya teaches growth through mentorship and courage."
    ]
  },
  blackclover: {
    protagonist: "Asta teaches relentless effort and optimism in the face of limits.",
    characters: [
      "Yuno teaches calm excellence and disciplined ambition.",
      "Yami teaches trust in teammates during chaos.",
      "Noelle teaches self-belief and emotional growth."
    ]
  },
  demonslayerkimetsunoyaiba: {
    protagonist: "Tanjiro Kamado teaches compassion without weakness.",
    characters: [
      "Nezuko teaches protective love and inner control.",
      "Zenitsu teaches courage can exist even with fear.",
      "Inosuke teaches growth from ego toward friendship."
    ]
  },
  graveofthefireflies: {
    protagonist: "Seita teaches responsibility, and how pride can have tragic consequences under hardship.",
    characters: [
      "Setsuko teaches innocence and unconditional trust.",
      "The aunt figure teaches how fear and scarcity can erode empathy.",
      "The doctor figure teaches that delayed compassion can cost lives."
    ]
  },
  asilentvoicethemovie: {
    protagonist: "Shoya Ishida teaches accountability and rebuilding self-worth through repair.",
    characters: [
      "Shoko Nishimiya teaches forgiveness and quiet resilience.",
      "Yuzuru Nishimiya teaches protective love and honesty.",
      "Tomohiro Nagatsuka teaches accepting people without judgment."
    ]
  },
  barefootgen: {
    protagonist: "Gen Nakaoka teaches resilience and hope in catastrophic loss.",
    characters: [
      "Kimie Nakaoka teaches maternal strength in crisis.",
      "Shinji teaches youthful innocence in wartime vulnerability.",
      "The broader community teaches how social systems fail the powerless."
    ]
  },
  yourlieinapril: {
    protagonist: "Kosei Arima teaches healing through expression and facing pain instead of hiding from it.",
    characters: [
      "Kaori Miyazono teaches living boldly even with limited time.",
      "Tsubaki Sawabe teaches quiet love and everyday loyalty.",
      "Ryota Watari teaches friendship through encouragement."
    ]
  },
  darlinginthefranxx: {
    protagonist:
      "Hiro and Zero Two teach that acceptance can rebuild identity, and that chosen bonds can challenge even the systems designed to erase individuality.",
    characters: [
      "Ichigo teaches emotional maturity, loyalty, and learning to let love evolve beyond possession.",
      "Goro teaches patient, selfless care when feelings are not reciprocated.",
      "Kokoro teaches the courage to choose tenderness and future over imposed social rules."
    ]
  },
  onepiece: {
    protagonist: "Monkey D. Luffy teaches freedom, loyalty, and dreaming without fear.",
    characters: [
      "Roronoa Zoro teaches discipline and honor.",
      "Nami teaches resilience and strategic thinking.",
      "Nico Robin teaches that found family can heal isolation."
    ]
  },
  bleachthousandyearbloodwar: {
    protagonist: "Ichigo Kurosaki teaches duty to protect others while carrying personal burden.",
    characters: [
      "Rukia Kuchiki teaches dignity and steady courage.",
      "Uryu Ishida teaches conviction and conflicted loyalty.",
      "Byakuya Kuchiki teaches growth from pride to responsibility."
    ]
  },
  deathnote: {
    protagonist: "Light Yagami teaches how ego can corrupt idealism.",
    characters: [
      "L teaches disciplined skepticism and evidence-first thinking.",
      "Misa Amane teaches the danger of obsession without boundaries.",
      "Soichiro Yagami teaches integrity even under extreme pressure."
    ]
  },
  cowboybebop: {
    protagonist: "Spike Spiegel teaches confronting your past instead of escaping it forever.",
    characters: [
      "Jet Black teaches stability, patience, and mature accountability.",
      "Faye Valentine teaches self-preservation and rediscovering trust.",
      "Ed teaches creativity and emotional freedom."
    ]
  },
  frierenbeyondjourneysend: {
    protagonist: "Frieren teaches valuing people while there is still time.",
    characters: [
      "Fern teaches consistency and emotional maturity.",
      "Stark teaches courage despite fear.",
      "Himmel teaches kindness as a daily choice."
    ]
  },
  dragonballz: {
    protagonist: "Goku teaches relentless self-improvement with humility.",
    characters: [
      "Vegeta teaches pride transformed through growth.",
      "Gohan teaches balancing potential with responsibility.",
      "Piccolo teaches mentorship and disciplined care."
    ]
  },
  narutoshippuden: {
    protagonist: "Naruto in Shippuden teaches turning pain into leadership and empathy.",
    characters: [
      "Sasuke teaches how unresolved trauma can distort purpose.",
      "Sakura teaches emotional strength and medical responsibility.",
      "Kakashi teaches sacrifice with strategic calm."
    ]
  },
  spiritedaway: {
    protagonist: "Chihiro teaches courage and identity in an overwhelming world.",
    characters: [
      "Haku teaches loyalty and remembering your true self.",
      "Zeniba teaches compassion over fear.",
      "Kamaji teaches diligence and helping others quietly."
    ]
  },
  yourname: {
    protagonist: "Mitsuha and Taki teach empathy by literally living each other's perspective.",
    characters: [
      "Mitsuha teaches honoring roots while pursuing your own path.",
      "Taki teaches persistence and emotional honesty.",
      "Miki teaches practical kindness and support."
    ]
  },
  princessmononoke: {
    protagonist: "Ashitaka teaches seeking balance instead of choosing hatred.",
    characters: [
      "San teaches fierce protection of nature and identity.",
      "Lady Eboshi teaches complex leadership with social reform.",
      "Jigo teaches survival pragmatism and moral ambiguity."
    ]
  },
  howlsmovingcastle: {
    protagonist: "Sophie teaches self-acceptance and quiet bravery.",
    characters: [
      "Howl teaches responsibility behind charm.",
      "Calcifer teaches loyalty and hidden vulnerability.",
      "Markl teaches adaptability and trust."
    ]
  },
  demonslayerkimetsunoyaibathemoviemugentrain: {
    protagonist: "Tanjiro in Mugen Train teaches perseverance through grief.",
    characters: [
      "Rengoku teaches conviction and protecting others to the very end.",
      "Inosuke teaches courage sharpened by teamwork.",
      "Zenitsu teaches inner strength beneath fear."
    ]
  },
  myneighbortotoro: {
    protagonist: "Satsuki and Mei teach wonder, trust, and family resilience.",
    characters: [
      "Satsuki teaches responsibility at a young age.",
      "Mei teaches pure curiosity and courage.",
      "Totoro teaches comfort through gentle presence."
    ]
  },
  neongenesisevangeliontheendofevangelion: {
    protagonist: "Shinji teaches the painful work of accepting yourself and others.",
    characters: [
      "Asuka teaches the cost of pride without healing.",
      "Rei teaches identity, agency, and sacrifice.",
      "Misato teaches flawed adulthood and protective love."
    ]
  },
  wolfchildren: {
    protagonist: "Hana teaches unconditional love, sacrifice, and patient parenting.",
    characters: [
      "Ame teaches choosing your own nature without guilt.",
      "Yuki teaches balancing identity with social belonging.",
      "The father teaches legacy through values, not presence."
    ]
  },
  akira: {
    protagonist: "Kaneda teaches loyalty and stepping up during chaos.",
    characters: [
      "Tetsuo teaches how insecurity and unchecked power can become destructive.",
      "Kei teaches resistance and moral focus.",
      "The Espers teach consequence beyond human control."
    ]
  },
  castleinthesky: {
    protagonist: "Pazu teaches persistence and integrity in pursuit of truth.",
    characters: [
      "Sheeta teaches courage rooted in compassion.",
      "Dola teaches leadership with rough kindness.",
      "Muska teaches how power without ethics becomes tyranny."
    ]
  },
  kikisdeliveryservice: {
    protagonist: "Kiki teaches that independence grows through patience, effort, and self-trust.",
    characters: [
      "Jiji teaches playful honesty and emotional grounding.",
      "Osono teaches practical kindness and community support.",
      "Ursula teaches creative resilience during self-doubt."
    ]
  },
  ponyo: {
    protagonist: "Ponyo teaches pure-hearted love, curiosity, and joyful courage.",
    characters: [
      "Sosuke teaches loyalty and responsibility even as a child.",
      "Lisa teaches calm strength and warm parenting.",
      "Fujimoto teaches protective love learning to let go."
    ]
  },
  thecatreturns: {
    protagonist: "Haru teaches confidence and choosing your own life path.",
    characters: [
      "The Baron teaches elegance, courage, and moral clarity.",
      "Muta teaches bravery beneath a comic exterior.",
      "Toto teaches loyalty and attentive companionship."
    ]
  },
  whisperoftheheart: {
    protagonist: "Shizuku teaches disciplined creativity and believing in your voice.",
    characters: [
      "Seiji teaches focused ambition and craft dedication.",
      "Shizuku's father teaches quiet encouragement and trust.",
      "Nishi teaches mentorship that awakens artistic confidence."
    ]
  },
  laidbackcamp: {
    protagonist: "Rin teaches enjoying solitude without shutting out connection.",
    characters: [
      "Nadeshiko teaches gratitude and contagious positivity.",
      "Chiaki teaches playful leadership and group warmth.",
      "Aoi teaches humor and emotional ease in friendship."
    ]
  },
  spyxfamily: {
    protagonist: "Loid Forger teaches that genuine care can grow even inside a fake mission.",
    characters: [
      "Anya teaches empathy, innocence, and emotional honesty.",
      "Yor teaches fierce love with quiet vulnerability.",
      "Bond teaches protective loyalty and trust."
    ]
  },
  barakamon: {
    protagonist: "Seishuu Handa teaches humility and rediscovering joy in your craft.",
    characters: [
      "Naru teaches spontaneous happiness and emotional openness.",
      "Hiroshi teaches grounded friendship and perspective.",
      "Miwa teaches confidence through playful challenge."
    ]
  },
  kon: {
    protagonist: "Yui teaches that passion can begin imperfectly and still become meaningful.",
    characters: [
      "Mio teaches discipline with sincerity.",
      "Ritsu teaches energy, fun, and team spirit.",
      "Tsumugi teaches generosity and emotional warmth."
    ]
  },
  nonnonbiyori: {
    protagonist: "Renge teaches wonder, curiosity, and finding joy in little things.",
    characters: [
      "Hotaru teaches gentle admiration and friendship.",
      "Natsumi teaches playful freedom and confidence.",
      "Komari teaches perseverance despite insecurity."
    ]
  },
  iwanttoeatyourpancreas: {
    protagonist:
      "Haruki Shiga teaches that opening your heart to someone can transform how deeply you value life itself.",
    characters: [
      "Sakura Yamauchi teaches joyful courage in the face of mortality.",
      "Kyoko teaches the pain and beauty of loyal friendship.",
      "Takahiro teaches emotional immaturity can hide unspoken care."
    ]
  },
  joseethetigerandthefish: {
    protagonist: "Tsuneo teaches perseverance and loving someone without limiting either person's future.",
    characters: [
      "Josee teaches courage, self-worth, and stepping beyond fear.",
      "Mai teaches grounded friendship and emotional accountability.",
      "Hayato teaches practical support during crisis."
    ]
  },
  thegardenofwords: {
    protagonist:
      "Takao teaches that quiet consistency and compassionate attention can become a lifeline for someone in emotional isolation.",
    characters: [
      "Yukari teaches vulnerability and rebuilding identity after social collapse.",
      "Takao's mother teaches how adult instability can shape a young person's emotional maturity.",
      "The classroom world teaches the cost of judgment without empathy."
    ]
  },
  clannadafterstory: {
    protagonist: "Tomoya teaches responsibility, fatherhood, and choosing love even after devastating grief.",
    characters: [
      "Nagisa teaches emotional gentleness and resilient hope.",
      "Ushio teaches innocence that reconnects people to purpose.",
      "Akio teaches fierce parental love and long-view sacrifice."
    ]
  },
  fruitsbasket: {
    protagonist: "Tohru teaches radical kindness without losing inner strength.",
    characters: [
      "Kyo teaches that being accepted can heal years of shame.",
      "Yuki teaches reclaiming self-worth after emotional control.",
      "Shigure teaches that intelligence without emotional responsibility can wound others."
    ]
  },
  kaguyasamaloveiswar: {
    protagonist: "Kaguya teaches that vulnerability is not weakness, it is the gateway to real love.",
    characters: [
      "Miyuki teaches discipline, self-belief, and confessing despite fear.",
      "Chika teaches emotional spontaneity and joy.",
      "Ishigami teaches recovery from social isolation through genuine connection."
    ]
  },
  toradora: {
    protagonist: "Ryuuji teaches patience, care, and choosing emotional sincerity over confusion.",
    characters: [
      "Taiga teaches that anger often protects unhealed vulnerability.",
      "Minori teaches optimism while carrying private pain.",
      "Ami teaches self-awareness behind social masks."
    ]
  },
  kaijuno8: {
    protagonist: "Kafka Hibino teaches that a late start can still become a legendary comeback.",
    characters: [
      "Mina Ashiro teaches relentless excellence and duty to the mission.",
      "Reno Ichikawa teaches disciplined growth and respect for mentors.",
      "Kikoru Shinomiya teaches confidence that matures into true teamwork."
    ]
  },
  haikyu: {
    protagonist: "Shoyo Hinata teaches that heart, effort, and adaptation can outgrow natural limitations.",
    characters: [
      "Tobio Kageyama teaches precision, accountability, and evolving from control to trust.",
      "Daichi Sawamura teaches quiet leadership and emotional stability under pressure.",
      "Tetsuro Kuroo teaches strategic thinking and turning rivalry into growth."
    ]
  },
  hajimenoippo: {
    protagonist: "Ippo Makunouchi teaches that courage is continuing despite fear, not being fearless.",
    characters: [
      "Mamoru Takamura teaches ruthless standards and turning talent into achievement.",
      "Genji Kamogawa teaches discipline, fundamentals, and coach-student trust.",
      "Ichiro Miyata teaches technical precision and quiet professional pride."
    ]
  },
  gintama: {
    protagonist: "Gintoki Sakata teaches protecting your people while carrying pain without glorifying it.",
    characters: [
      "Kagura teaches fierce loyalty and strength with emotional honesty.",
      "Shinpachi Shimura teaches moral consistency and grounded integrity.",
      "Toshiro Hijikata teaches duty, structure, and leadership under chaos."
    ]
  },
  mobpsycho100: {
    protagonist: "Shigeo Kageyama teaches emotional control, humility, and self-worth beyond raw ability.",
    characters: [
      "Arataka Reigen teaches practical wisdom, empathy, and owning your flaws.",
      "Ritsu Kageyama teaches ambition guided by conscience.",
      "Dimple teaches that even selfish people can evolve through connection."
    ]
  },
  psychopass: {
    protagonist: "Akane Tsunemori teaches moral clarity inside systems that reward obedience over conscience.",
    characters: [
      "Shinya Kogami teaches conviction and the cost of justice pursued alone.",
      "Nobuchika Ginoza teaches growth from rigid judgment toward human empathy.",
      "Shogo Makishima teaches how intelligence without ethics becomes predatory."
    ]
  },
  parasytethemaxim: {
    protagonist: "Shinichi Izumi teaches adapting under trauma without surrendering your humanity.",
    characters: [
      "Migi teaches strategic thinking and the value of unemotional clarity.",
      "Satomi Murano teaches empathy and emotional grounding when identity is unstable.",
      "Ryoko Tamiya teaches unsettling truths about instinct, learning, and motherhood."
    ]
  },
  bluelock: {
    protagonist: "Yoichi Isagi teaches reading the game, trusting your hunger, and acting decisively.",
    characters: [
      "Meguru Bachira teaches creative freedom and fearless self-expression.",
      "Rin Itoshi teaches elite discipline and performance under pressure.",
      "Jinpachi Ego teaches that ambition must be sharpened through ruthless accountability."
    ]
  },
  thesevendeadlysins: {
    protagonist: "Meliodas teaches carrying immense power with loyalty and restraint.",
    characters: [
      "Elizabeth teaches compassion and emotional resilience through repeated loss.",
      "Ban teaches devotion, sacrifice, and loving without possession.",
      "Escanor teaches dignity, confidence, and protecting others with pride."
    ]
  },
  weatheringwithyou: {
    protagonist: "Hodaka Morishima teaches choosing love while learning to live with consequence.",
    characters: [
      "Hina Amano teaches sacrifice, tenderness, and protecting others even at personal cost.",
      "Keisuke Suga teaches flawed adulthood and the courage to care despite emotional burnout.",
      "Natsumi Suga teaches warmth and practical resilience in uncertain city life."
    ]
  },
  suzume: {
    protagonist: "Suzume Iwato teaches turning grief into motion, and motion into healing.",
    characters: [
      "Souta Munakata teaches duty, patience, and protecting people even when misunderstood.",
      "Tamaki Iwato teaches complicated family love and the need for emotional honesty.",
      "Daijin teaches that attachment can be innocent, but still emotionally disruptive."
    ]
  },
  "5centimeterspersecond": {
    protagonist: "Takaki Toono teaches that memory can shape you, but must not imprison your future.",
    characters: [
      "Akari Shinohara teaches quiet devotion and the pain of love separated by time.",
      "Kanae Sumida teaches unspoken love, courage, and the ache of emotional timing.",
      "The passing years teach that maturity often means accepting what cannot be restored."
    ]
  },
  nana: {
    protagonist: "Nana Osaki teaches fierce independence, creative ambition, and the cost of emotional armor.",
    characters: [
      "Nana Komatsu teaches vulnerability, attachment, and the hard journey toward self-respect.",
      "Ren Honjo teaches passion, dependency, and how unresolved pain can consume love.",
      "Yasu Takagi teaches emotional steadiness, accountability, and quiet support under chaos."
    ]
  },
  horimiya: {
    protagonist: "Izumi Miyamura teaches self-acceptance and trusting someone with your true self.",
    characters: [
      "Kyoko Hori teaches emotional balance between strength and tenderness.",
      "Tooru teaches loyalty and steady friendship.",
      "Yuki teaches sensitivity and communication in awkward emotional spaces."
    ]
  }
};

const PROTAGONIST_IMAGES = {
  attackontitan: "https://myanimelist.net/images/characters/10/216895.jpg",
  vinlandsaga: "https://myanimelist.net/images/characters/9/309871.jpg",
  berserk: "https://myanimelist.net/images/characters/13/284125.jpg",
  monster: "https://myanimelist.net/images/characters/15/347641.jpg",
  hunterxhunter: "https://myanimelist.net/images/characters/11/174517.jpg",
  fullmetalalchemistbrotherhood: "https://myanimelist.net/images/characters/9/72533.jpg",
  cyberpunkedgerunners: "https://myanimelist.net/images/characters/11/483437.jpg",
  codegeass: "https://myanimelist.net/images/characters/8/406163.jpg",
  jujutsukaisen: "https://myanimelist.net/images/characters/6/467646.jpg",
  madeinabyss: "https://myanimelist.net/images/characters/6/621896.jpg",
  erased: "https://myanimelist.net/images/characters/8/298512.jpg",
  steinsgate: "https://myanimelist.net/images/characters/6/122643.jpg",
  violetevergarden: "https://myanimelist.net/images/characters/9/345616.jpg",
  naruto: "https://myanimelist.net/images/characters/2/284121.jpg",
  blackclover: "https://myanimelist.net/images/characters/8/312836.jpg",
  demonslayerkimetsunoyaiba: "https://myanimelist.net/images/characters/6/386735.jpg",
  graveofthefireflies: "https://myanimelist.net/images/characters/5/570294.jpg",
  asilentvoicethemovie: "https://myanimelist.net/images/characters/8/302316.jpg",
  barefootgen: "https://myanimelist.net/images/characters/4/357629.jpg",
  yourlieinapril: "https://myanimelist.net/images/characters/4/273755.jpg",
  darlinginthefranxx: "https://myanimelist.net/images/characters/14/559013.jpg",
  onepiece: "https://myanimelist.net/images/characters/9/310307.jpg",
  deathnote: "https://myanimelist.net/images/characters/6/63870.jpg",
  cowboybebop: "https://myanimelist.net/images/characters/11/516853.jpg",
  frierenbeyondjourneysend: "https://myanimelist.net/images/characters/7/525105.jpg",
  dragonballz: "https://myanimelist.net/images/characters/14/401183.jpg",
  narutoshippuden: "https://myanimelist.net/images/characters/2/284121.jpg",
  spiritedaway: "https://myanimelist.net/images/characters/7/434512.jpg",
  yourname: "https://myanimelist.net/images/characters/5/336342.jpg",
  princessmononoke: "https://myanimelist.net/images/characters/10/247715.jpg",
  howlsmovingcastle: "https://myanimelist.net/images/characters/10/129315.jpg",
  demonslayerkimetsunoyaibathemoviemugentrain:
    "https://myanimelist.net/images/characters/6/386735.jpg",
  myneighbortotoro: "https://myanimelist.net/images/characters/4/55560.jpg",
  neongenesisevangeliontheendofevangelion:
    "https://myanimelist.net/images/characters/5/225177.jpg",
  wolfchildren: "https://myanimelist.net/images/characters/11/611555.jpg",
  akira: "https://myanimelist.net/images/characters/15/114607.jpg",
  castleinthesky: "https://myanimelist.net/images/characters/8/295942.jpg",
  bleachthousandyearbloodwar: "https://myanimelist.net/images/characters/3/512788.jpg",
  kikisdeliveryservice: "https://myanimelist.net/images/characters/13/162627.jpg",
  ponyo: "https://myanimelist.net/images/characters/13/73419.jpg",
  thecatreturns: "https://myanimelist.net/images/characters/8/367313.jpg",
  whisperoftheheart: "https://myanimelist.net/images/characters/5/267491.jpg",
  laidbackcamp: "https://myanimelist.net/images/characters/6/338513.jpg",
  spyxfamily: "https://myanimelist.net/images/characters/12/496423.jpg",
  barakamon: "https://myanimelist.net/images/characters/16/241997.jpg",
  kon: "https://myanimelist.net/images/characters/6/112779.jpg",
  nonnonbiyori: "https://myanimelist.net/images/characters/9/208455.jpg",
  iwanttoeatyourpancreas: "https://myanimelist.net/images/characters/2/357137.jpg",
  joseethetigerandthefish: "https://myanimelist.net/images/characters/10/472777.jpg",
  thegardenofwords: "https://myanimelist.net/images/characters/14/204233.jpg",
  clannadafterstory: "https://myanimelist.net/images/characters/8/324645.jpg",
  fruitsbasket: "https://myanimelist.net/images/characters/7/132087.jpg",
  kaguyasamaloveiswar: "https://myanimelist.net/images/characters/2/381091.jpg",
  toradora: "https://myanimelist.net/images/characters/7/82305.jpg",
  horimiya: "https://myanimelist.net/images/characters/13/407377.jpg",
  kaijuno8: "https://myanimelist.net/images/characters/14/552100.jpg",
  haikyu: "https://myanimelist.net/images/characters/9/308852.jpg",
  hajimenoippo: "https://myanimelist.net/images/characters/16/74142.jpg",
  gintama: "https://myanimelist.net/images/characters/15/241479.jpg",
  mobpsycho100: "https://myanimelist.net/images/characters/6/343344.jpg",
  psychopass: "https://myanimelist.net/images/characters/9/179601.jpg",
  parasytethemaxim: "https://myanimelist.net/images/characters/6/269013.jpg",
  bluelock: "https://myanimelist.net/images/characters/6/558080.jpg",
  thesevendeadlysins: "https://myanimelist.net/images/characters/2/255447.jpg",
  suzume: "https://myanimelist.net/images/characters/2/470108.jpg",
  weatheringwithyou: "https://myanimelist.net/images/characters/13/441133.jpg",
  "5centimeterspersecond": "https://myanimelist.net/images/characters/10/56152.jpg",
  nana: "https://myanimelist.net/images/characters/7/28355.jpg"
};

const PROTAGONIST_QUOTES = {
  attackontitan: "If we don't fight, we can't win.",
  vinlandsaga: "I have no enemies.",
  berserk: "Struggle, endure, contend.",
  monster: "All lives are created equal.",
  hunterxhunter: "Enjoy the little detours to the fullest.",
  fullmetalalchemistbrotherhood: "A lesson without pain is meaningless.",
  cyberpunkedgerunners: "I'm built different.",
  codegeass: "The ones who should kill are those prepared to be killed.",
  jujutsukaisen: "I don't want to regret the way I live.",
  madeinabyss: "Let's go all the way down.",
  erased: "If you don't act, nothing changes.",
  steinsgate: "El Psy Kongroo.",
  violetevergarden: "I want to know what 'I love you' means.",
  naruto: "I never go back on my word.",
  blackclover: "My magic is never giving up.",
  demonslayerkimetsunoyaiba: "No matter how much it hurts, keep living.",
  graveofthefireflies: "We'll keep going, no matter what.",
  asilentvoicethemovie: "I want to live and face everyone.",
  barefootgen: "Even in ashes, we keep walking.",
  yourlieinapril: "Maybe there's only a dark road ahead, but still, you keep going.",
  darlinginthefranxx: "I found you, my darling.",
  onepiece: "I'm going to be King of the Pirates!",
  bleachthousandyearbloodwar: "If fate is a millstone, then we are the grist.",
  deathnote: "I am justice.",
  cowboybebop: "Whatever happens, happens.",
  frierenbeyondjourneysend: "People are quick to die.",
  dragonballz: "Power comes in response to a need.",
  narutoshippuden: "I won't let my comrades die.",
  spiritedaway: "I finally get a bouquet and it's a goodbye present.",
  yourname: "I was always searching for someone.",
  princessmononoke: "To see with eyes unclouded by hate.",
  howlsmovingcastle: "A heart's a heavy burden.",
  demonslayerkimetsunoyaibathemoviemugentrain: "Set your heart ablaze.",
  myneighbortotoro: "Trees and people used to be good friends.",
  neongenesisevangeliontheendofevangelion: "I mustn't run away.",
  wolfchildren: "Live your life the way you choose.",
  akira: "Kaneda, what do you see?",
  castleinthesky: "No matter how many weapons you have, the world cannot live without love.",
  kikisdeliveryservice: "I think something's wrong with me.",
  ponyo: "Ponyo loves Sosuke!",
  thecatreturns: "I can still choose my own way.",
  whisperoftheheart: "I want to become an amazing writer.",
  laidbackcamp: "Outdoor food tastes better than usual.",
  spyxfamily: "Heh.",
  barakamon: "I want to write calligraphy that's truly mine.",
  kon: "Fun things are fun!",
  nonnonbiyori: "Nyanpasu!",
  iwanttoeatyourpancreas: "I want to live each day while I can.",
  joseethetigerandthefish: "I want to see the world with my own eyes.",
  thegardenofwords: "If only we could fall forever like rain.",
  clannadafterstory: "The places I can cry are in a bathroom and in Daddy's arms.",
  fruitsbasket: "Maybe there are no limits to how much one can love.",
  kaguyasamaloveiswar: "How cute.",
  toradora: "I hate waiting, but if waiting means being with you, I'll wait forever.",
  horimiya: "I like the person I am when I'm with you.",
  kaijuno8: "I'm not done yet.",
  haikyu: "Fly.",
  hajimenoippo: "Not everyone who works hard is rewarded, but everyone who succeeds has worked hard.",
  gintama: "The night is darkest just before dawn.",
  mobpsycho100: "If everyone is not special, maybe you can be what you want.",
  psychopass: "The law doesn't protect the people. People protect the law.",
  parasytethemaxim: "Humans are interesting creatures.",
  bluelock: "I'll devour you.",
  thesevendeadlysins: "If it means protecting my friends, I'd fight gods.",
  suzume: "I have to go. I have to close that door.",
  weatheringwithyou: "I want you more than any blue sky!",
  "5centimeterspersecond": "How fast do I have to live to see you again?",
  nana: "Hey Nana, if there is a next life, can we be friends again?"
};

const LOCAL_IMAGE_FALLBACK = "./anime-fallback.svg";
const MY_FAV_STORAGE_KEY = "animefan_my_watchlist_v1";
const GRAPHQL_ENDPOINT = "https://caching.graphql.imdb.com/";
const GRAPHQL_QUERY = `
  query ($id: ID!) {
    title(id: $id) {
      id
      titleText {
        text
      }
      releaseYear {
        year
      }
      primaryImage {
        url
      }
      ratingsSummary {
        aggregateRating
        voteCount
      }
    }
  }
`;

const state = {
  seriesRanking: [],
  movieRanking: [],
  tabsFavItems: [],
  masterpieceItems: [],
  voidItems: [],
  lightheartedItems: [],
  loveItems: [],
  userFavouriteItems: [],
  userFavouriteIds: new Set(),
  seriesFiltered: [],
  movieFiltered: [],
  readerCatalog: [],
  itemById: new Map()
};

const seriesGrid = document.getElementById("seriesGrid");
const movieGrid = document.getElementById("movieGrid");
const tabsFavGrid = document.getElementById("tabsFavGrid");
const masterpieceGrid = document.getElementById("masterpieceGrid");
const voidGrid = document.getElementById("voidGrid");
const lightheartedGrid = document.getElementById("lightheartedGrid");
const loveGrid = document.getElementById("loveGrid");
const myDeviceFavGrid = document.getElementById("myDeviceFavGrid");
const seriesStatusBanner = document.getElementById("seriesStatusBanner");
const movieStatusBanner = document.getElementById("movieStatusBanner");
const tabsFavStatusBanner = document.getElementById("tabsFavStatusBanner");
const masterpieceStatusBanner = document.getElementById("masterpieceStatusBanner");
const voidStatusBanner = document.getElementById("voidStatusBanner");
const lightheartedStatusBanner = document.getElementById("lightheartedStatusBanner");
const loveStatusBanner = document.getElementById("loveStatusBanner");
const myDeviceFavStatus = document.getElementById("myDeviceFavStatus");
const lastUpdated = document.getElementById("lastUpdated");
const refreshBtn = document.getElementById("refreshBtn");
const clearMyFavouritesBtn = document.getElementById("clearMyFavouritesBtn");
const seriesSearchInput = document.getElementById("seriesSearchInput");
const movieSearchInput = document.getElementById("movieSearchInput");
const globalAnimeSearch = document.getElementById("globalAnimeSearch");
const animeSuggestions = document.getElementById("animeSuggestions");
const findAnimeBtn = document.getElementById("findAnimeBtn");
const animeSelect = document.getElementById("animeSelect");
const sourceSelect = document.getElementById("sourceSelect");
const openTabBtn = document.getElementById("openTabBtn");
const readerPanel = document.querySelector(".reader-panel");
const learningPanel = document.getElementById("learningPanel");
const learningTitle = document.getElementById("learningTitle");
const learningAbout = document.getElementById("learningAbout");
const learningProtagonist = document.getElementById("learningProtagonist");
const learningTeaches = document.getElementById("learningTeaches");
const learningImpact = document.getElementById("learningImpact");
const learningDepth = document.getElementById("learningDepth");
const learningCharacters = document.getElementById("learningCharacters");
const learningEmotionHeading = document.getElementById("learningEmotionHeading");
const learningVoidReason = document.getElementById("learningVoidReason");
const learningProtagonistImage = document.getElementById("learningProtagonistImage");
const loveExtrasBlock = document.getElementById("loveExtrasBlock");
const learningLoveFeelsReal = document.getElementById("learningLoveFeelsReal");
const learningLoveType = document.getElementById("learningLoveType");
const learningLoveOutcome = document.getElementById("learningLoveOutcome");
const learningAfterWatchFeeling = document.getElementById("learningAfterWatchFeeling");
const learningWatchNext = document.getElementById("learningWatchNext");
const backToTopBtn = document.getElementById("backToTopBtn");
const backToCurrentSectionBtn = document.getElementById("backToCurrentSectionBtn");
const sectionTabLinks = Array.from(document.querySelectorAll(".section-tabs a"));
const scrollSections = Array.from(document.querySelectorAll("main .panel[id]"));
let sectionFocusResetId = null;
let currentLearningSectionId = null;

const CONTEXT_SECTION_MAP = {
  userFavorite: { id: "myDeviceFavouritesSection", label: "My Watchlist" },
  masterpiece: { id: "masterpieceSection", label: "My Fav 5 masterpieces of all time" },
  favorite: { id: "myFavSection", label: "Best Anime series" },
  lighthearted: { id: "lightheartedSection", label: "Top 10 light hearted Animes" },
  love: { id: "loveSection", label: "Best Anime Love Stories Ever" },
  void: { id: "voidSection", label: "Animes That Create a Void Inside You" },
  series: { id: "seriesSection", label: "Top 10 Anime Series basis imdb rating" },
  movie: { id: "moviesSection", label: "Top 10 Anime Movies basis imdb rating" }
};
if (backToCurrentSectionBtn) {
  backToCurrentSectionBtn.disabled = true;
}
const lessonHoverPreview = document.createElement("div");
lessonHoverPreview.className = "lesson-hover-preview";
lessonHoverPreview.innerHTML = `
  <img alt="Protagonist preview" />
  <div class="lesson-hover-copy">
    <p class="lesson-hover-name">Protagonist</p>
    <p class="lesson-hover-msg">Please click to know my life lessons.</p>
    <p class="lesson-hover-quote-kicker">My favourite dialogue is</p>
    <p class="lesson-hover-quote">"Every scar can become strength."</p>
  </div>
`;
document.body.appendChild(lessonHoverPreview);
const lessonHoverImage = lessonHoverPreview.querySelector("img");
const lessonHoverName = lessonHoverPreview.querySelector(".lesson-hover-name");
const lessonHoverMsg = lessonHoverPreview.querySelector(".lesson-hover-msg");
const lessonHoverQuote = lessonHoverPreview.querySelector(".lesson-hover-quote");
const watchlistToast = document.createElement("div");
watchlistToast.className = "watchlist-toast";
watchlistToast.setAttribute("role", "status");
watchlistToast.setAttribute("aria-live", "polite");
document.body.appendChild(watchlistToast);
const supportsHover =
  typeof window.matchMedia === "function" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let touchPreviewTarget = null;
let lessonHoverAutoHideId = null;
let watchlistToastHideId = null;

function normalizeTitle(value) {
  return (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function compactVotes(n) {
  if (n >= 1000000) {
    return `${(n / 1000000).toFixed(1)}M`;
  }
  if (n >= 1000) {
    return `${(n / 1000).toFixed(0)}K`;
  }
  return String(n || 0);
}

function proxiedImageUrl(url) {
  return url;
}

function normalizeImageUrl(url) {
  if (!url) {
    return LOCAL_IMAGE_FALLBACK;
  }
  if (url.includes("cdn.myanimelist.net/images/")) {
    return url.replace("https://cdn.myanimelist.net", "https://myanimelist.net");
  }
  return proxiedImageUrl(url);
}

function uniqueUrls(urls) {
  const seen = new Set();
  const out = [];
  urls.forEach((url) => {
    if (!url || seen.has(url)) {
      return;
    }
    seen.add(url);
    out.push(url);
  });
  return out;
}

function posterFallbackList(item, learning) {
  const original = item.image || LOCAL_IMAGE_FALLBACK;
  const directMAL = original.includes("cdn.myanimelist.net/images/")
    ? original.replace("https://cdn.myanimelist.net", "https://myanimelist.net")
    : null;
  const protagonistImage = protagonistImageFor(learning, item);
  return uniqueUrls([
    normalizeImageUrl(original),
    directMAL,
    normalizeImageUrl(protagonistImage),
    LOCAL_IMAGE_FALLBACK
  ]);
}

function watchSourcesFor(title) {
  const q = encodeURIComponent(title);
  return [
    {
      label: "Watch In India (JustWatch)",
      url: `https://www.justwatch.com/in/search?q=${q}`
    },
    {
      label: "YouTube Legal/Free (India)",
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} official anime free india`)}`
    }
  ];
}

const FREE_MANGA_LINKS_BY_KEY = {
  onepiece: [{ label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/titles/100020" }],
  hunterxhunter: [
    {
      label: "MANGA Plus (Free Legal Chapters)",
      url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Hunter%20x%20Hunter"
    }
  ],
  bleachthousandyearbloodwar: [
    { label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Bleach" }
  ],
  deathnote: [
    { label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Death%20Note" }
  ],
  dragonballz: [
    { label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Dragon%20Ball" }
  ],
  naruto: [{ label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Naruto" }],
  narutoshippuden: [
    { label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Naruto" }
  ],
  jujutsukaisen: [
    { label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Jujutsu%20Kaisen" }
  ],
  demonslayerkimetsunoyaiba: [
    {
      label: "MANGA Plus (Free Legal Chapters)",
      url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Demon%20Slayer"
    }
  ],
  demonslayerkimetsunoyaibathemoviemugentrain: [
    {
      label: "MANGA Plus (Free Legal Chapters)",
      url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Demon%20Slayer"
    }
  ],
  blackclover: [
    { label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Black%20Clover" }
  ],
  spyxfamily: [{ label: "MANGA Plus (Free Legal Chapters)", url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Spy%20x%20Family" }],
  kaguyasamaloveiswar: [
    {
      label: "MANGA Plus (Free Legal Chapters)",
      url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Kaguya-sama%20Love%20is%20War"
    }
  ],
  kaijuno8: [
    {
      label: "MANGA Plus (Free Legal Chapters)",
      url: "https://mangaplus.shueisha.co.jp/search_result?keyword=Kaiju%20No.%208"
    }
  ]
};

function dedupeSources(sources) {
  const seen = new Set();
  return sources.filter((source) => {
    if (!source || !source.url) {
      return false;
    }
    if (seen.has(source.url)) {
      return false;
    }
    seen.add(source.url);
    return true;
  });
}

function indiaFreeMangaSourcesFor(item) {
  const key = normalizeTitle(item.title);
  const mappedKey = TITLE_ALIASES[key] || key;
  const mappedFree = FREE_MANGA_LINKS_BY_KEY[mappedKey] || [];

  if (!mappedFree.length) {
    return [];
  }

  return dedupeSources(mappedFree);
}

function indiaPaidMangaSourcesFor(item) {
  const q = encodeURIComponent(`${item.title} manga`);
  return [
    {
      label: "Google Books (Read/Preview Search)",
      url: `https://www.google.com/search?tbm=bks&q=${q}`
    },
    {
      label: "Google Play Books (Digital Read/Preview)",
      url: `https://play.google.com/store/search?q=${q}&c=books`
    }
  ];
}

function isStoreLikeSource(source) {
  const url = (source?.url || "").toLowerCase();
  return (
    url.includes("amazon.") ||
    url.includes("flipkart.") ||
    url.includes("store.crunchyroll.com") ||
    url.includes("bookwalker.")
  );
}

function sourceLinksFor(item) {
  const freeIndiaSources = indiaFreeMangaSourcesFor(item);
  const verifiedFreeIndiaSources = freeIndiaSources.filter(
    (source) => source && source.url && !source.url.includes("search_result")
  );
  const freeFinderSources = freeIndiaSources.filter(
    (source) => source && source.url && source.url.includes("search_result")
  );
  const indiaPaidSources = indiaPaidMangaSourcesFor(item);
  const existingOfficial = Array.isArray(item.mangaSources) && item.mangaSources.length > 0
    ? item.mangaSources
    : [
    {
      label: "Crunchyroll Store",
      url: `https://store.crunchyroll.com/search?q=${encodeURIComponent(`${item.title} manga`)}`
    }
  ];
  const existingReaderFriendly = existingOfficial.filter((source) => !isStoreLikeSource(source));
  const existingStoreLike = existingOfficial.filter((source) => isStoreLikeSource(source));

  if (verifiedFreeIndiaSources.length) {
    return dedupeSources([
      ...verifiedFreeIndiaSources,
      ...indiaPaidSources,
      ...existingReaderFriendly,
      ...freeFinderSources
    ]);
  }

  return dedupeSources([
    ...indiaPaidSources,
    ...existingReaderFriendly,
    ...freeFinderSources,
    ...existingStoreLike
  ]);
}

function snapshotItem(item) {
  return {
    ...item,
    image: normalizeImageUrl(item.image || LOCAL_IMAGE_FALLBACK),
    imdbUrl: `https://www.imdb.com/title/${item.imdbId}/`,
    rating: item.fallbackRating,
    votes: item.fallbackVotes,
    source: "snapshot"
  };
}

async function fetchLiveItem(item) {
  const payload = {
    query: GRAPHQL_QUERY,
    variables: { id: item.imdbId }
  };

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`IMDb request failed with ${response.status}`);
  }

  const json = await response.json();
  const title = json?.data?.title;
  const summary = title?.ratingsSummary;

  if (!summary?.aggregateRating || !summary?.voteCount) {
    throw new Error("IMDb response missing rating data");
  }

  return {
    ...item,
    title: title.titleText?.text || item.title,
    year: title.releaseYear?.year || item.year,
    image: normalizeImageUrl(title.primaryImage?.url || item.image || LOCAL_IMAGE_FALLBACK),
    imdbUrl: `https://www.imdb.com/title/${item.imdbId}/`,
    rating: summary.aggregateRating,
    votes: summary.voteCount,
    source: "live"
  };
}

async function loadItemSet(candidates) {
  const settled = await Promise.allSettled(candidates.map((item) => fetchLiveItem(item)));
  const liveById = new Map();

  settled.forEach((entry) => {
    if (entry.status === "fulfilled") {
      liveById.set(entry.value.imdbId, entry.value);
    }
  });

  const items = candidates.map((item) => liveById.get(item.imdbId) || snapshotItem(item));

  return {
    items,
    liveCount: liveById.size,
    total: candidates.length
  };
}

function rerank(items) {
  return items
    .slice()
    .sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return b.votes - a.votes;
    })
    .slice(0, 10);
}

function dedupeById(items) {
  const seen = new Map();
  items.forEach((item) => {
    if (!seen.has(item.imdbId)) {
      seen.set(item.imdbId, item);
    }
  });
  return Array.from(seen.values());
}

function buildLibraryMap(items) {
  const map = new Map();
  items.forEach((item) => {
    map.set(normalizeTitle(item.title), item);
  });

  Object.entries(TITLE_ALIASES).forEach(([aliasKey, canonicalKey]) => {
    if (!map.has(aliasKey) && map.has(canonicalKey)) {
      map.set(aliasKey, map.get(canonicalKey));
    }
  });

  return map;
}

function buildCustomList(titleList, libraryMap) {
  return titleList
    .map((title) => {
      const normalized = normalizeTitle(title);
      return libraryMap.get(normalized) || null;
    })
    .filter(Boolean);
}

function allLibraryItemsSorted() {
  return Array.from(state.itemById.values()).sort((a, b) => a.title.localeCompare(b.title));
}

function refreshGlobalSuggestions() {
  if (!animeSuggestions) {
    return;
  }
  animeSuggestions.innerHTML = allLibraryItemsSorted()
    .map(
      (item) =>
        `<option value="${item.title}" label="${item.year} | IMDb ${Number(item.rating || 0).toFixed(1)}"></option>`
    )
    .join("");
}

function findAnimeByQuery(query) {
  const normalizedQuery = normalizeTitle(query);
  if (!normalizedQuery) {
    return null;
  }

  const allItems = allLibraryItemsSorted();
  const exact = allItems.find((item) => normalizeTitle(item.title) === normalizedQuery);
  if (exact) {
    return exact;
  }

  return allItems.find((item) => normalizeTitle(item.title).includes(normalizedQuery)) || null;
}

function highlightAnimeCard(card) {
  document.querySelectorAll(".card.search-hit").forEach((node) => {
    node.classList.remove("search-hit");
  });
  card.classList.remove("search-hit");
  void card.offsetWidth;
  card.classList.add("search-hit");
}

function findCardForItem(item) {
  return document.querySelector(`.card[data-imdb-id="${item.imdbId}"]`);
}

function loadUserFavouriteIds() {
  try {
    const raw = localStorage.getItem(MY_FAV_STORAGE_KEY);
    const parsed = JSON.parse(raw || "[]");
    if (!Array.isArray(parsed)) {
      return new Set();
    }
    return new Set(parsed.filter((id) => typeof id === "string" && id.trim().length > 0));
  } catch (error) {
    return new Set();
  }
}

function persistUserFavouriteIds() {
  try {
    localStorage.setItem(MY_FAV_STORAGE_KEY, JSON.stringify(Array.from(state.userFavouriteIds)));
  } catch (error) {
    // Ignore storage write failures and keep UI usable.
  }
}

function isUserFavourite(imdbId) {
  return state.userFavouriteIds.has(imdbId);
}

function refreshFavouriteButtons(scope = document) {
  scope.querySelectorAll("[data-toggle-favourite]").forEach((button) => {
    const imdbId = button.dataset.toggleFavourite;
    const saved = isUserFavourite(imdbId);
    button.classList.toggle("is-saved", saved);
    button.textContent = saved ? "Remove From My Watchlist" : "Add To My Watchlist";
    button.setAttribute("aria-pressed", saved ? "true" : "false");
  });
}

function buildUserFavouriteItems() {
  return Array.from(state.userFavouriteIds)
    .map((imdbId) => state.itemById.get(imdbId))
    .filter(Boolean);
}

function renderUserFavouriteSection() {
  if (!myDeviceFavGrid || !myDeviceFavStatus) {
    return;
  }

  const items = buildUserFavouriteItems();
  state.userFavouriteItems = items;

  if (!items.length) {
    myDeviceFavStatus.innerHTML =
      'Tap <strong>Add To My Watchlist</strong> on any anime to make your watchlist.';
    myDeviceFavGrid.innerHTML = "<p>No anime saved yet.</p>";
    if (clearMyFavouritesBtn) {
      clearMyFavouritesBtn.disabled = true;
    }
    return;
  }

  if (clearMyFavouritesBtn) {
    clearMyFavouritesBtn.disabled = false;
  }

  myDeviceFavStatus.textContent = `${items.length} anime saved in My Watchlist on this browser/device.`;
  renderGrid(items, myDeviceFavGrid, "userFavorite");
  refreshFavouriteButtons(myDeviceFavGrid);
}

function toggleUserFavourite(imdbId) {
  if (!imdbId) {
    return;
  }

  const wasSaved = state.userFavouriteIds.has(imdbId);
  if (wasSaved) {
    state.userFavouriteIds.delete(imdbId);
  } else {
    state.userFavouriteIds.add(imdbId);
  }

  persistUserFavouriteIds();
  renderUserFavouriteSection();
  refreshFavouriteButtons();

  const item = state.itemById.get(imdbId);
  if (!wasSaved) {
    showWatchlistToast(item?.title ? `${item.title} added to My Watchlist` : "Added to My Watchlist", "add");
  } else {
    showWatchlistToast(item?.title ? `${item.title} removed from My Watchlist` : "Removed from My Watchlist", "remove");
  }
}

function showWatchlistToast(message, type = "add") {
  if (!watchlistToast) {
    return;
  }
  watchlistToast.textContent = message;
  watchlistToast.classList.toggle("is-remove", type === "remove");
  watchlistToast.classList.add("is-visible");
  if (watchlistToastHideId) {
    clearTimeout(watchlistToastHideId);
  }
  watchlistToastHideId = window.setTimeout(() => {
    watchlistToast.classList.remove("is-visible");
    watchlistToastHideId = null;
  }, 1650);
}

function jumpToAnimeFromSearch() {
  if (!globalAnimeSearch) {
    return;
  }

  const query = globalAnimeSearch.value.trim();
  if (!query) {
    return;
  }

  const item = findAnimeByQuery(query);
  if (!item) {
    globalAnimeSearch.setAttribute("aria-invalid", "true");
    return;
  }

  globalAnimeSearch.removeAttribute("aria-invalid");
  globalAnimeSearch.value = item.title;

  let card = findCardForItem(item);
  if (!card) {
    seriesSearchInput.value = "";
    movieSearchInput.value = "";
    applySeriesSearch();
    applyMovieSearch();
    card = findCardForItem(item);
  }

  if (!card) {
    return;
  }

  card.scrollIntoView({ behavior: "smooth", block: "center" });
  highlightAnimeCard(card);
}

function sentenceFragmentsCount(value) {
  const text = String(value || "").trim();
  if (!text) {
    return 0;
  }
  return text
    .split(/[.!?]+/)
    .map((part) => part.trim())
    .filter(Boolean).length;
}

function appendNarrativeLayer(baseText, extraText) {
  const base = String(baseText || "").trim();
  const extra = String(extraText || "").trim();
  if (!base) {
    return extra;
  }
  if (!extra) {
    return base;
  }
  const baseLower = base.toLowerCase();
  if (baseLower.includes(extra.toLowerCase())) {
    return base;
  }
  const separator = /[.!?]$/.test(base) ? " " : ". ";
  return `${base}${separator}${extra}`;
}

function protagonistNameFromLine(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "The protagonist";
  }
  const marker = raw.toLowerCase().indexOf(" teaches");
  if (marker > 0) {
    return raw.slice(0, marker).trim();
  }
  return raw.split(".")[0].trim() || "The protagonist";
}

function polishLearningEntry(entry, item, context) {
  const polished = { ...entry };
  const title = item?.title || "This anime";
  const protagonist = protagonistNameFromLine(polished.protagonist);
  const isLove = context === "love";
  const isVoid = context === "void";
  const isLighthearted = context === "lighthearted";

  const aboutLayer = isLove
    ? `${title} feels emotionally authentic because romance and personal growth evolve together instead of feeling forced.`
    : isVoid
      ? `${title} stays with you because its emotional peaks come with real consequence, not surface-level tragedy.`
      : isLighthearted
        ? `${title} works as comfort content because its warmth feels earned through character chemistry and emotional sincerity.`
        : `${title} becomes memorable because its conflict keeps testing identity, values, and emotional maturity.`;

  const teachesLayer = isLove
    ? "Its core lesson is that love is not just intensity; it is consistency, accountability, and emotional courage over time."
    : isVoid
      ? "Its deepest teaching is that grief can destroy you or refine you, depending on whether you choose avoidance or growth."
      : isLighthearted
        ? "Its teaching lands in daily life: joy, patience, and healthy connection are real strengths, not minor emotions."
        : "The practical lesson is to align decisions with values, especially when pressure makes shortcuts look attractive.";

  const impactLayer = isLove
    ? "After watching, people often re-evaluate communication, timing, and emotional responsibility in their own relationships."
    : isVoid
      ? "Its after-effect is usually introspective silence, where viewers process loss, identity, and the cost of emotional truth."
      : isLighthearted
        ? "Its real-life value is recovery: it gently resets emotional bandwidth and helps people return to life with steadier energy."
        : "Its long-term impact is reflective: it encourages better self-audit, healthier boundaries, and more intentional choices.";

  const protagonistLayer = `${protagonist} feels compelling because the lesson is earned through setbacks, humility, and visible growth.`;

  if (sentenceFragmentsCount(polished.about) < 2 || String(polished.about || "").length < 170) {
    polished.about = appendNarrativeLayer(polished.about, aboutLayer);
  }
  if (sentenceFragmentsCount(polished.teaches) < 2 || String(polished.teaches || "").length < 165) {
    polished.teaches = appendNarrativeLayer(polished.teaches, teachesLayer);
  }
  if (sentenceFragmentsCount(polished.impact) < 2 || String(polished.impact || "").length < 165) {
    polished.impact = appendNarrativeLayer(polished.impact, impactLayer);
  }
  if (sentenceFragmentsCount(polished.protagonist) < 2 || String(polished.protagonist || "").length < 120) {
    polished.protagonist = appendNarrativeLayer(polished.protagonist, protagonistLayer);
  }

  if (Array.isArray(polished.characters)) {
    polished.characters = polished.characters
      .map((line) => {
        const cleaned = String(line || "").trim();
        if (!cleaned) {
          return "";
        }
        return /[.!?]$/.test(cleaned) ? cleaned : `${cleaned}.`;
      })
      .filter(Boolean);
  }

  if (isVoid) {
    const voidLayer =
      "The emotional damage lands because hope and pain are interwoven so tightly that even beautiful moments carry aftershock.";
    if (sentenceFragmentsCount(polished.voidReason) < 2 || String(polished.voidReason || "").length < 165) {
      polished.voidReason = appendNarrativeLayer(polished.voidReason, voidLayer);
    }
  }

  if (isLighthearted) {
    const smileLayer =
      "That smile lasts because the story gives comfort without becoming shallow, and its characters feel like people you want to spend time with.";
    if (sentenceFragmentsCount(polished.smileReason) < 2 || String(polished.smileReason || "").length < 155) {
      polished.smileReason = appendNarrativeLayer(polished.smileReason, smileLayer);
    }
  }

  if (isLove) {
    if (sentenceFragmentsCount(polished.loveFeelsReal) < 2 || String(polished.loveFeelsReal || "").length < 155) {
      polished.loveFeelsReal = appendNarrativeLayer(
        polished.loveFeelsReal,
        "What makes it work is emotional consequence: choices change relationships, and the story does not hide that cost."
      );
    }
    if (sentenceFragmentsCount(polished.afterWatchFeeling) < 2 || String(polished.afterWatchFeeling || "").length < 120) {
      polished.afterWatchFeeling = appendNarrativeLayer(
        polished.afterWatchFeeling,
        "It usually leaves viewers replaying key scenes because the emotional arcs feel personal rather than performative."
      );
    }
  }

  return polished;
}

function getLearningEntry(item, context) {
  const key = normalizeTitle(item.title);
  const mappedKey = TITLE_ALIASES[key] || key;
  const base = LEARNINGS[mappedKey] || {
    about:
      `${item.title} presents layered character conflict, emotional tension, and value-based choices that shape who people become.`,
    teaches:
      "It teaches perspective-taking, responsibility under pressure, and how choices reveal character over time.",
    impact:
      "Its impact comes from turning entertainment into reflection: what to keep, what to change, and how to live with more intention.",
    emotionalDepth: "8.0/10"
  };
  const characters = CHARACTER_LESSONS[mappedKey] || {
    protagonist: "The protagonist teaches courage, responsibility, and emotional growth through adversity.",
    characters: [
      "A close friend teaches loyalty and support under pressure.",
      "A mentor figure teaches discipline and long-term perspective.",
      "A rival or foil teaches self-awareness and accountability."
    ]
  };

  if (context === "love") {
    const loveTags = LOVE_TAGS[mappedKey] || {
      loveFeelsReal:
        "The relationship feels believable because the emotional progress comes through consistent choices, vulnerability, and mutual growth.",
      loveType: "Character-driven romance",
      breakOrHeal: "Bittersweet",
      afterWatchFeeling: "Reflective, tender, and emotionally attached to the characters.",
      watchNext: "Your Name."
    };

    const rawEntry = {
      entryKey: mappedKey,
      ...base,
      ...characters,
      ...loveTags
    };
    return polishLearningEntry(rawEntry, item, context);
  }

  if (context === "void" && !base.voidReason) {
    const rawEntry = {
      entryKey: mappedKey,
      ...base,
      ...characters,
      voidReason:
        "This one can still leave a deep emotional void because its most hopeful moments are tied to difficult loss, reflection, and after-credits silence."
    };
    return polishLearningEntry(rawEntry, item, context);
  }

  if (context === "lighthearted" && !base.smileReason) {
    const rawEntry = {
      entryKey: mappedKey,
      ...base,
      ...characters,
      smileReason:
        "It puts a smile on your face with cozy energy, lovable characters, and moments that feel comforting from start to end."
    };
    return polishLearningEntry(rawEntry, item, context);
  }

  const rawEntry = {
    entryKey: mappedKey,
    ...base,
    ...characters
  };
  return polishLearningEntry(rawEntry, item, context);
}

function protagonistImageFor(entry, item) {
  const image = PROTAGONIST_IMAGES[entry.entryKey];
  if (image && !image.includes("apple-touch-icon")) {
    return normalizeImageUrl(image);
  }
  return normalizeImageUrl(item.image || LOCAL_IMAGE_FALLBACK);
}

function protagonistNameFromLesson(entry) {
  const raw = (entry?.protagonist || "").trim();
  if (!raw) {
    return "Protagonist";
  }
  const marker = raw.toLowerCase().indexOf(" teaches");
  if (marker > 0) {
    return raw.slice(0, marker).trim();
  }
  const firstSentence = raw.split(".")[0].trim();
  return firstSentence || "Protagonist";
}

function protagonistQuoteFor(entry) {
  const quote = PROTAGONIST_QUOTES[entry.entryKey];
  if (quote) {
    return quote;
  }
  return "Every scar can become strength.";
}

function positionLessonHoverPreview(clientX, clientY) {
  const pad = 14;
  const previewRect = lessonHoverPreview.getBoundingClientRect();
  const width = previewRect.width || 280;
  const height = previewRect.height || 112;

  let x = clientX + 18;
  let y = clientY + 18;

  if (x + width + pad > window.innerWidth) {
    x = clientX - width - 18;
  }
  if (y + height + pad > window.innerHeight) {
    y = clientY - height - 18;
  }

  x = Math.max(pad, x);
  y = Math.max(pad, y);

  lessonHoverPreview.style.setProperty("--x", `${x}px`);
  lessonHoverPreview.style.setProperty("--y", `${y}px`);
}

function clearLessonHoverAutoHide() {
  if (lessonHoverAutoHideId) {
    clearTimeout(lessonHoverAutoHideId);
    lessonHoverAutoHideId = null;
  }
}

function hideLessonHoverPreview({ clearTouchState = true } = {}) {
  clearLessonHoverAutoHide();
  lessonHoverPreview.classList.remove("is-visible");
  lessonHoverPreview.classList.remove("is-touch-actionable");
  if (clearTouchState) {
    touchPreviewTarget = null;
  }
}

function openTouchPreviewTarget(event) {
  if (supportsHover || !touchPreviewTarget) {
    return;
  }
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const itemId = touchPreviewTarget.itemId;
  const context = touchPreviewTarget.context || "";
  const item = state.itemById.get(itemId);
  if (!item) {
    hideLessonHoverPreview();
    return;
  }

  hideLessonHoverPreview();
  showLearnings(item, context);
}

function showLessonHoverPreview(button, event, { touchMode = false } = {}) {
  const item = state.itemById.get(button.dataset.learning);
  if (!item) {
    return;
  }

  const entry = getLearningEntry(item, button.dataset.context || "");
  const protagonistName = protagonistNameFromLesson(entry);
  const protagonistImage = protagonistImageFor(entry, item);
  const quote = protagonistQuoteFor(entry);

  lessonHoverImage.onerror = () => {
    lessonHoverImage.onerror = () => {
      lessonHoverImage.onerror = null;
      lessonHoverImage.src = LOCAL_IMAGE_FALLBACK;
    };
    lessonHoverImage.src = normalizeImageUrl(item.image || LOCAL_IMAGE_FALLBACK);
  };
  lessonHoverImage.src = protagonistImage;
  lessonHoverImage.alt = `${protagonistName} portrait`;
  lessonHoverName.textContent = protagonistName;
  lessonHoverMsg.textContent = touchMode
    ? "Tap this card to open my life lessons."
    : "Please click to know my life lessons.";
  lessonHoverQuote.textContent = `"${quote}"`;
  lessonHoverPreview.classList.toggle("is-touch-actionable", touchMode);
  lessonHoverPreview.classList.add("is-visible");

  if (event && typeof event.clientX === "number" && typeof event.clientY === "number") {
    positionLessonHoverPreview(event.clientX, event.clientY);
  } else {
    const rect = button.getBoundingClientRect();
    positionLessonHoverPreview(rect.right, rect.top + rect.height / 2);
  }
}

function handleLessonHoverMove(event) {
  if (!lessonHoverPreview.classList.contains("is-visible")) {
    return;
  }
  positionLessonHoverPreview(event.clientX, event.clientY);
}

function showLearnings(item, context) {
  const entry = getLearningEntry(item, context);
  const protagonistImage = protagonistImageFor(entry, item);
  const sectionInfo = CONTEXT_SECTION_MAP[context] || null;

  if (backToCurrentSectionBtn) {
    if (sectionInfo) {
      currentLearningSectionId = sectionInfo.id;
      backToCurrentSectionBtn.disabled = false;
      backToCurrentSectionBtn.textContent = `Back To ${sectionInfo.label}`;
    } else {
      currentLearningSectionId = null;
      backToCurrentSectionBtn.disabled = true;
      backToCurrentSectionBtn.textContent = "Back To Current Section";
    }
  }

  learningTitle.textContent = item.title;
  learningProtagonistImage.onerror = () => {
    learningProtagonistImage.onerror = () => {
      learningProtagonistImage.onerror = null;
      learningProtagonistImage.src = LOCAL_IMAGE_FALLBACK;
    };
    learningProtagonistImage.src = normalizeImageUrl(item.image || LOCAL_IMAGE_FALLBACK);
  };
  learningProtagonistImage.src = protagonistImage;
  learningProtagonistImage.alt = `${item.title} protagonist portrait`;
  learningAbout.textContent = entry.about;
  learningProtagonist.textContent = entry.protagonist;
  learningTeaches.textContent = entry.teaches;
  learningImpact.textContent = entry.impact;
  learningDepth.textContent = `Emotional Depth: ${entry.emotionalDepth}`;
  learningCharacters.innerHTML = (entry.characters || [])
    .map((line) => `<li>${line}</li>`)
    .join("");
  const isLighthearted = context === "lighthearted";
  const isLove = context === "love";
  if (learningEmotionHeading) {
    learningEmotionHeading.textContent = isLighthearted
      ? "Why It Puts Smile On Your Face"
      : "Why It Can Break You Emotionally";
  }
  learningVoidReason.classList.toggle("smile-reason", isLighthearted);
  if (isLighthearted) {
    learningVoidReason.textContent = entry.smileReason
      ? `Why It Puts Smile On Your Face: ${entry.smileReason}`
      : "Why It Puts Smile On Your Face: this title is comforting, funny, and emotionally warm in a way that leaves you lighter.";
  } else {
    learningVoidReason.textContent = entry.voidReason
      ? `Why It Breaks You: ${entry.voidReason}`
      : "Why It Breaks You: this title may not devastate you in one blow, but it leaves a lasting emotional echo through its values, losses, and character choices.";
  }

  if (loveExtrasBlock) {
    if (isLove) {
      loveExtrasBlock.hidden = false;
      learningLoveFeelsReal.textContent =
        entry.loveFeelsReal ||
        "Their emotional growth feels grounded in vulnerability, not shortcuts.";
      learningLoveType.textContent = entry.loveType || "Character-driven romance";
      learningLoveOutcome.textContent = entry.breakOrHeal || "Bittersweet";
      learningAfterWatchFeeling.textContent =
        entry.afterWatchFeeling || "Reflective and emotionally attached to the story.";
      learningWatchNext.textContent = entry.watchNext || "Your Name.";
    } else {
      loveExtrasBlock.hidden = true;
      learningLoveFeelsReal.textContent = "";
      learningLoveType.textContent = "";
      learningLoveOutcome.textContent = "";
      learningAfterWatchFeeling.textContent = "";
      learningWatchNext.textContent = "";
    }
  }

  learningPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function cardMarkup(item, rank, context) {
  const imdbUrl = item.imdbUrl || `https://www.imdb.com/title/${item.imdbId}/`;
  const savedInMyFavourite = isUserFavourite(item.imdbId);
  const sourceLinks = sourceLinksFor(item)
    .map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`)
    .join("");
  const [watchPrimary, watchAlt] = watchSourcesFor(item.title);
  const learning = getLearningEntry(item, context);
  const posterFallbacks = posterFallbackList(item, learning);
  const posterImage = posterFallbacks[0] || LOCAL_IMAGE_FALLBACK;
  const posterFallbackData = posterFallbacks.map((url) => encodeURIComponent(url)).join("|");
  const masterpieceNote =
    context === "masterpiece"
      ? MASTERPIECE_WRITEUPS[learning.entryKey] ||
        "This is a personal masterpiece pick for its storytelling depth and emotional power."
      : "";

  if (context === "userFavorite") {
    return `
      <article class="card my-fav-card" data-imdb-id="${item.imdbId}" data-title="${item.title}">
        <div class="my-fav-top">
          <img
            class="my-fav-thumb"
            src="${posterImage}"
            alt="${item.title} poster"
            loading="lazy"
            data-fallback-list="${posterFallbackData}"
            data-fallback-index="0"
            onerror="const list=(this.dataset.fallbackList||'').split('|').filter(Boolean).map((u)=>decodeURIComponent(u));const next=Number(this.dataset.fallbackIndex||0)+1;this.dataset.fallbackIndex=String(next);if(next<list.length){this.src=list[next];}else{this.onerror=null;this.src='${LOCAL_IMAGE_FALLBACK}';}"
          />
          <div>
            <h3 class="title">${item.title}</h3>
            <p class="my-fav-meta">IMDb ${item.rating.toFixed(1)} • ${item.year}</p>
          </div>
        </div>
        <div class="my-fav-actions">
          <button class="btn btn-alt" data-open-reader="${item.imdbId}">Read Source</button>
          <button class="btn btn-learning" data-learning="${item.imdbId}" data-context="${context}">Life Lessons</button>
          <button
            class="btn btn-favourite-toggle is-saved"
            data-toggle-favourite="${item.imdbId}"
            aria-pressed="true"
          >Remove From My Watchlist</button>
        </div>
      </article>
    `;
  }

  return `
    <article class="card" data-imdb-id="${item.imdbId}" data-title="${item.title}">
      <div class="poster-wrap">
        <span class="rank">#${rank}</span>
        <img
          src="${posterImage}"
          alt="${item.title} poster"
          loading="lazy"
          data-fallback-list="${posterFallbackData}"
          data-fallback-index="0"
          onerror="const list=(this.dataset.fallbackList||'').split('|').filter(Boolean).map((u)=>decodeURIComponent(u));const next=Number(this.dataset.fallbackIndex||0)+1;this.dataset.fallbackIndex=String(next);if(next<list.length){this.src=list[next];}else{this.onerror=null;this.src='${LOCAL_IMAGE_FALLBACK}';}"
        />
      </div>
      <div class="card-body">
        <h3 class="title">${item.title}</h3>
        <div class="meta">
          <a class="rating-chip rating-link" href="${imdbUrl}" target="_blank" rel="noopener noreferrer">IMDb ${item.rating.toFixed(1)}</a>
          <span>${compactVotes(item.votes)} votes</span>
          <span>${item.year}</span>
        </div>
        <div class="links">
          <a href="${imdbUrl}" target="_blank" rel="noopener noreferrer">IMDb Page</a>
          ${sourceLinks}
        </div>
        <div class="watch-actions">
          <a class="watch-btn" href="${watchPrimary.url}" target="_blank" rel="noopener noreferrer">${watchPrimary.label}</a>
          <a class="watch-btn watch-btn-alt" href="${watchAlt.url}" target="_blank" rel="noopener noreferrer">${watchAlt.label}</a>
        </div>
        <div class="card-actions">
          <button class="btn" data-open-reader="${item.imdbId}">Read Source (Official)</button>
          <button class="btn btn-learning" data-learning="${item.imdbId}" data-context="${context}">Life Lessons</button>
          <button
            class="btn btn-favourite-toggle ${savedInMyFavourite ? "is-saved" : ""}"
            data-toggle-favourite="${item.imdbId}"
            aria-pressed="${savedInMyFavourite ? "true" : "false"}"
          >${savedInMyFavourite ? "Remove From My Watchlist" : "Add To My Watchlist"}</button>
        </div>
        ${
          context === "love"
            ? `<div class="love-tags">
                <p><strong>Why This Love Feels Real:</strong> ${learning.loveFeelsReal || "A grounded emotional build-up that feels human."}</p>
                <p><strong>Love Type:</strong> ${learning.loveType || "Character-driven romance"}</p>
                <p><strong>Will It Break You or Heal You:</strong> ${learning.breakOrHeal || "Bittersweet"}</p>
                <p><strong>After-Watch Feeling:</strong> ${learning.afterWatchFeeling || "Tender and reflective."}</p>
                <p><strong>If You Loved This Watch Next:</strong> ${learning.watchNext || "Your Name."}</p>
              </div>`
            : ""
        }
        ${context === "void" && learning.voidReason ? `<p class="void-hook">Why it breaks you: ${learning.voidReason}</p>` : ""}
        ${
          context === "lighthearted" && learning.smileReason
            ? `<p class="smile-hook">Why it puts smile on your face: ${learning.smileReason}</p>`
            : ""
        }
        ${
          context === "masterpiece"
            ? `<div class="masterpiece-note"><h4>Why This Is A Masterpiece</h4><p>${masterpieceNote}</p></div>`
            : ""
        }
      </div>
    </article>
  `;
}

function attachCardButtons(container) {
  container.querySelectorAll("[data-open-reader]").forEach((button) => {
    button.addEventListener("click", () => {
      animeSelect.value = button.dataset.openReader;
      hydrateSourceSelect();
      openSelectedSourceNewTab();
      if (readerPanel) {
        readerPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  container.querySelectorAll("[data-learning]").forEach((button) => {
    if (supportsHover) {
      button.addEventListener("mouseenter", (event) => {
        showLessonHoverPreview(button, event);
      });
      button.addEventListener("mousemove", handleLessonHoverMove);
      button.addEventListener("mouseleave", hideLessonHoverPreview);
    }
    button.addEventListener("focus", () => {
      showLessonHoverPreview(button);
    });
    button.addEventListener("blur", hideLessonHoverPreview);
    button.addEventListener("click", (event) => {
      const item = state.itemById.get(button.dataset.learning);
      if (!item) {
        return;
      }

      if (!supportsHover) {
        event.preventDefault();
        const context = button.dataset.context || "";
        const alreadyTargeted =
          touchPreviewTarget &&
          touchPreviewTarget.itemId === item.imdbId &&
          touchPreviewTarget.context === context &&
          lessonHoverPreview.classList.contains("is-visible");

        if (alreadyTargeted) {
          hideLessonHoverPreview();
          showLearnings(item, context);
          return;
        }

        touchPreviewTarget = {
          itemId: item.imdbId,
          context
        };
        showLessonHoverPreview(button, event, { touchMode: true });
        clearLessonHoverAutoHide();
        lessonHoverAutoHideId = window.setTimeout(() => {
          hideLessonHoverPreview();
        }, 4200);
        return;
      }

      hideLessonHoverPreview();
      showLearnings(item, button.dataset.context || "");
    });
  });

  container.querySelectorAll("[data-toggle-favourite]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleUserFavourite(button.dataset.toggleFavourite || "");
    });
  });
}

function renderGrid(items, container, context) {
  if (!items.length) {
    container.innerHTML = "<p>No title matches this section.</p>";
    return;
  }

  container.innerHTML = items.map((item, index) => cardMarkup(item, index + 1, context)).join("");
  attachCardButtons(container);
}

function applySeriesSearch() {
  const query = seriesSearchInput.value.trim().toLowerCase();
  state.seriesFiltered = query
    ? state.seriesRanking.filter((item) => item.title.toLowerCase().includes(query))
    : state.seriesRanking.slice();
  renderGrid(state.seriesFiltered, seriesGrid, "series");
}

function applyMovieSearch() {
  const query = movieSearchInput.value.trim().toLowerCase();
  state.movieFiltered = query
    ? state.movieRanking.filter((item) => item.title.toLowerCase().includes(query))
    : state.movieRanking.slice();
  renderGrid(state.movieFiltered, movieGrid, "movie");
}

function hydrateReaderCatalog() {
  state.readerCatalog = dedupeById([
    ...state.seriesRanking,
    ...state.movieRanking,
    ...state.tabsFavItems,
    ...state.masterpieceItems,
    ...state.voidItems,
    ...state.lightheartedItems,
    ...state.loveItems,
    ...state.userFavouriteItems
  ]);

  animeSelect.innerHTML = state.readerCatalog
    .map((item) => `<option value="${item.imdbId}">${item.title}</option>`)
    .join("");

  hydrateSourceSelect();
}

function hydrateSourceSelect() {
  const item = state.itemById.get(animeSelect.value) || state.readerCatalog[0];
  if (!item) {
    sourceSelect.innerHTML = "";
    return;
  }

  sourceSelect.innerHTML = sourceLinksFor(item)
    .map((source) => `<option value="${source.url}">${source.label}</option>`)
    .join("");
}

function openSelectedSourceNewTab() {
  const url = sourceSelect.value;
  if (!url) {
    return false;
  }
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  return true;
}

function easeInOutCubic(progress) {
  if (progress < 0.5) {
    return 4 * progress * progress * progress;
  }
  return 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function animateWindowScrollTo(targetY, duration = 780) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };
    requestAnimationFrame(step);
  });
}

function setActiveSectionTab(sectionId) {
  sectionTabLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("is-active", href === `#${sectionId}`);
  });
}

function flashSectionFocus(section) {
  if (!section) {
    return;
  }

  if (sectionFocusResetId) {
    clearTimeout(sectionFocusResetId);
  }

  section.classList.remove("section-focus");
  void section.offsetWidth;
  section.classList.add("section-focus");
  sectionFocusResetId = window.setTimeout(() => {
    section.classList.remove("section-focus");
  }, 820);
}

async function scrollToSectionPanel(section, { animate = true } = {}) {
  if (!section) {
    return;
  }

  const targetY = Math.max(0, window.scrollY + section.getBoundingClientRect().top - 72);
  if (animate) {
    await animateWindowScrollTo(targetY);
  } else {
    window.scrollTo(0, targetY);
  }
  flashSectionFocus(section);
}

function setupSectionTabNavigation() {
  if (sectionTabLinks.length === 0 || scrollSections.length === 0) {
    return;
  }

  sectionTabLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) {
        return;
      }
      const section = document.querySelector(href);
      if (!section) {
        return;
      }

      event.preventDefault();
      const sectionId = section.id;
      setActiveSectionTab(sectionId);
      await scrollToSectionPanel(section, { animate: true });

      if (window.location.hash !== `#${sectionId}`) {
        history.replaceState(null, "", `#${sectionId}`);
      }
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        let topEntry = null;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          if (!topEntry || entry.intersectionRatio > topEntry.intersectionRatio) {
            topEntry = entry;
          }
        });

        if (topEntry && topEntry.target && topEntry.target.id) {
          setActiveSectionTab(topEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-20% 0px -52% 0px"
      }
    );

    scrollSections.forEach((section) => observer.observe(section));
  }

  const initialHash = window.location.hash;
  if (initialHash && initialHash.startsWith("#")) {
    const initialSection = document.querySelector(initialHash);
    if (initialSection) {
      setActiveSectionTab(initialSection.id);
      window.setTimeout(() => {
        scrollToSectionPanel(initialSection, { animate: true });
      }, 120);
      return;
    }
  }
  setActiveSectionTab(scrollSections[0].id);
}

function describeLiveStatus(label, liveCount, total) {
  if (liveCount === total) {
    return `${label}: live IMDb ratings loaded.`;
  }
  if (liveCount >= Math.min(10, total)) {
    return `${label}: mostly live IMDb ratings loaded (partial snapshot fallback used).`;
  }
  return `${label}: live fetch unavailable, showing latest snapshot.`;
}

async function loadAllSections({ force = false } = {}) {
  refreshBtn.disabled = true;
  seriesStatusBanner.textContent = force ? "Refreshing anime series rankings..." : "Loading anime series rankings...";
  movieStatusBanner.textContent = force ? "Refreshing anime movie rankings..." : "Loading anime movie rankings...";
  tabsFavStatusBanner.textContent = "Refreshing Best Anime series list...";
  masterpieceStatusBanner.textContent = "Refreshing My Fav 5 masterpieces of all time...";
  voidStatusBanner.textContent = "Refreshing emotional anime list...";
  lightheartedStatusBanner.textContent = "Refreshing light hearted anime picks...";
  loveStatusBanner.textContent = "Refreshing Best Anime Love Stories Ever...";
  if (myDeviceFavStatus) {
    myDeviceFavStatus.textContent = "Refreshing your saved watchlist...";
  }

  const [seriesSet, movieSet, extraSet] = await Promise.all([
    loadItemSet(TV_CANDIDATES),
    loadItemSet(MOVIE_CANDIDATES),
    loadItemSet(EXTRA_LIBRARY_ITEMS)
  ]);

  state.seriesRanking = rerank(seriesSet.items);
  state.movieRanking = rerank(movieSet.items);

  const fullLibrary = dedupeById([...seriesSet.items, ...movieSet.items, ...extraSet.items]);
  state.itemById = new Map(fullLibrary.map((item) => [item.imdbId, item]));
  const libraryMap = buildLibraryMap(fullLibrary);

  state.tabsFavItems = buildCustomList(TABS_FAVOURITE_LIST, libraryMap);
  state.masterpieceItems = buildCustomList(MASTERPIECE_LIST, libraryMap);
  state.voidItems = buildCustomList(VOID_LIST, libraryMap);
  state.lightheartedItems = buildCustomList(LIGHTHEARTED_LIST, libraryMap);
  state.loveItems = buildCustomList(LOVE_STORY_LIST, libraryMap);

  seriesStatusBanner.textContent = describeLiveStatus("Anime series", seriesSet.liveCount, seriesSet.total);
  movieStatusBanner.textContent = describeLiveStatus("Anime movies", movieSet.liveCount, movieSet.total);
  tabsFavStatusBanner.textContent =
    "Best Anime series: this list is purely based on my personal choice and what I genuinely love watching.";
  masterpieceStatusBanner.textContent =
    "My Fav 5 masterpieces of all time: these 5 titles are my personal all-time masterpieces.";
  voidStatusBanner.textContent =
    "Animes That Create a Void Inside You: this list is purely based on my personal feelings after finishing these.";
  lightheartedStatusBanner.textContent =
    "Top 10 light hearted Animes: smile-first picks for cozy, uplifting, low-stress watching.";
  loveStatusBanner.textContent =
    "Best Anime Love Stories Ever: movies first, then series, with deep life lessons and emotional takeaways.";

  const allLive = [seriesSet, movieSet, extraSet].every((set) => set.liveCount === set.total);
  if (allLive) {
    lastUpdated.textContent = `Live updated: ${new Date().toLocaleString()}`;
  } else {
    lastUpdated.textContent = `Updated: ${new Date().toLocaleString()}`;
  }

  applySeriesSearch();
  applyMovieSearch();
  renderGrid(state.tabsFavItems, tabsFavGrid, "favorite");
  renderGrid(state.masterpieceItems, masterpieceGrid, "masterpiece");
  renderUserFavouriteSection();
  renderGrid(state.voidItems, voidGrid, "void");
  renderGrid(state.lightheartedItems, lightheartedGrid, "lighthearted");
  renderGrid(state.loveItems, loveGrid, "love");
  refreshFavouriteButtons();
  hydrateReaderCatalog();
  refreshGlobalSuggestions();

  refreshBtn.disabled = false;
}

refreshBtn.addEventListener("click", () => loadAllSections({ force: true }));
seriesSearchInput.addEventListener("input", applySeriesSearch);
movieSearchInput.addEventListener("input", applyMovieSearch);
if (findAnimeBtn) {
  findAnimeBtn.addEventListener("click", jumpToAnimeFromSearch);
}
if (globalAnimeSearch) {
  globalAnimeSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      jumpToAnimeFromSearch();
    }
  });
  globalAnimeSearch.addEventListener("change", () => {
    if (globalAnimeSearch.value.trim()) {
      jumpToAnimeFromSearch();
    }
  });
}
animeSelect.addEventListener("change", hydrateSourceSelect);
openTabBtn.addEventListener("click", openSelectedSourceNewTab);
if (clearMyFavouritesBtn) {
  clearMyFavouritesBtn.addEventListener("click", () => {
    state.userFavouriteIds.clear();
    persistUserFavouriteIds();
    renderUserFavouriteSection();
    refreshFavouriteButtons();
  });
}
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", async () => {
    hideLessonHoverPreview();
    await animateWindowScrollTo(0);
    if (scrollSections[0]?.id) {
      setActiveSectionTab(scrollSections[0].id);
    }
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  });
}
if (backToCurrentSectionBtn) {
  backToCurrentSectionBtn.addEventListener("click", async () => {
    hideLessonHoverPreview();
    if (!currentLearningSectionId) {
      return;
    }
    const sourceSection = document.getElementById(currentLearningSectionId);
    if (!sourceSection) {
      return;
    }
    setActiveSectionTab(currentLearningSectionId);
    await scrollToSectionPanel(sourceSection, { animate: true });
    if (window.location.hash !== `#${currentLearningSectionId}`) {
      history.replaceState(null, "", `#${currentLearningSectionId}`);
    }
  });
}
window.addEventListener("scroll", hideLessonHoverPreview, { passive: true });
window.addEventListener("resize", hideLessonHoverPreview);
lessonHoverPreview.addEventListener("click", openTouchPreviewTarget);
lessonHoverPreview.addEventListener("touchend", openTouchPreviewTarget, { passive: false });
document.addEventListener(
  "touchstart",
  (event) => {
    if (supportsHover) {
      return;
    }
    if (!event.target.closest("[data-learning]") && !event.target.closest(".lesson-hover-preview")) {
      hideLessonHoverPreview();
    }
  },
  { passive: true }
);
state.userFavouriteIds = loadUserFavouriteIds();
setupSectionTabNavigation();

loadAllSections();
