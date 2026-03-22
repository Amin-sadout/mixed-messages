const charInput = document.getElementById('charInput');
const animeInput = document.getElementById('animeInput');
const quoteInput = document.getElementById('quoteInput');
const addBtn = document.getElementById('addBtn');
const generateBtn = document.getElementById('generateBtn');
const quoteOutput = document.getElementById('quoteOutput');
const infoOutput = document.getElementById('infoOutput');
const errorMsg = document.getElementById('errorMsg');

//let isChanged = false; will probably use later

const quotes = [
  {
    character: "Tomoya Okazaki",
    quote: "What are you so hesitant about? It’s your dream, isn’t it? It’s right in front of you, and you’re wavering? You gotta be reckless and take whatever you can!",
    anime: "Clannad"
  },
  {
    character: "Monkey D. Luffy",
    quote: "If you don’t take risks, you can’t create a future.",
    anime: "One Piece"
  },
  {
    character: "Vegeta",
    quote: "Push through the pain. Giving up hurts more.",
    anime: "Dragon Ball Z"
  },
  {
    character: "Tanjiro Kamado",
    quote: "The strong should aid and protect the weak. Then, the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature.",
    anime: "Demon Slayer"
  },
  {
    character: "Naruto Uzumaki",
    quote: "Hard work is worthless for those that don’t believe in themselves.",
    anime: "Naruto"
  },
  {
    character: "Grovyle",
    quote: "The important thing is not how long you live. It’s what you accomplish with your life.",
    anime: "Pokémon"
  },
  {
    character: "Shakuyaku",
    quote: "It's quiet, but can you hear it? Little by little, the tides are changing, and the world with them.",
    anime: "One Piece"
  },
  {
    character: "Roy Mustang",
    quote: "Nothing’s perfect, the world’s not perfect, but it’s there for us, trying the best it can. That’s what makes it so damn beautiful.",
    anime: "Fullmetal Alchemist"
  },
  {
    character: "Monk Momoaki",
    quote: "If you never listen to anyone, you can't give proper advice.",
    anime: "The Boy and the Beast"
  },
  {
    character: "Misato Katsuragi",
    quote: "Sometimes you need a little wishful thinking to keep on living",
    anime: "Neon Genesis Evangelion"
  },
  {
    character: "Subaru Natsuki",
    quote: "I guess, as long as I have life, all I can do is fight with all my might.",
    anime: "Re:Zero"
  },
  {
    character: "Mitsuyoshi Anzai",
    quote: "When you give up, that’s when the game ends.",
    anime: "Slam Dunk"
  },
  {
    character: "Ash Ketchum",
    quote: "You see, sometimes friends have to go away, but a part of them stays behind with you.",
    anime: "Pokémon"
  },
  {
    character: "Piccolo",
    quote: "Sometimes, we have to look beyond what we want and do what’s best.",
    anime: "Dragon Ball Z"
  },
  {
    character: "Puppet Master",
    quote: "All things change in a dynamic environment. Your effort to remain what you are is what limits you.",
    anime: "Ghost in the Shell"
  },
  {
    character: "The Elder",
    quote: "It’s not dying that frightens us. It’s living without ever having done our best.",
    anime: "Castlevania"
  },
  {
    character: "Ymir",
    quote: "You're gonna care what other people think and be someone you're not your whole life? You’re fine as you are. So, talk in your own words.",
    anime: "Attack on Titan"
  },
  {
    character: "Chiriko Tsurumi",
    quote: "There are certain things one can’t bear without changing one’s clothes.",
    anime: "Anohana"
  },
  {
    character: "Lelouch Lamperouge",
    quote: "You will never be able to love anybody else until you love yourself.",
    anime: "Code Geass"
  },
  {
    character: "Hinata Miyake",
    quote: "When you hit the point of no return, that’s the moment it truly becomes a journey. If you can still turn back, it’s not really a journey.",
    anime: "A Place Further than the Universe"
  },
  {
    character: "Violet Evergarden",
    quote: "Dead people receive more flowers than living ones because regret is stronger than gratitude.",
    anime: "Violet Evergarden"
  },
  {
    character: "Heiji Hattori",
    quote: "Life is short, so it will be appreciated. We live to our fullest due to that.",
    anime: "Detective Conan"
  },
  {
    character: "Satoru Gojo",
    quote: "Searching for someone to blame is such a pain.",
    anime: "Jujutsu Kaisen"
  },
  {
    character: "Sheeta",
    quote: "No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love.",
    anime: "Castle In The Sky"
  },
  {
    character: "Kenshin Himura",
    quote: "Helping other people is the best way to make up for your mistakes",
    anime: "Rurouni Kenshin"
  }
];

let currentIndex = -1;

// 1. Add quote
addBtn.addEventListener('click', () => {

  if (
  charInput.value.trim === '' ||
  animeInput.value.trim === '' ||
  quoteInput.value.trim === ''
) {
    errorMsg.textContent = 'Baka! you got to fill all the fielduh!'
  return;
}

  const newQuote = {
    character: charInput.value,
    anime: animeInput.value,
    quote: quoteInput.value,
  };

  quotes.push(newQuote);

  charInput.value = '';
  animeInput.value = ''
  quoteInput.value = '';
});

// 2. Generate next quote
generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }

  quoteOutput.textContent = `"${quotes[randomIndex].quote}"`;
  infoOutput.textContent = `— ${quotes[randomIndex].character}, ${quotes[randomIndex].anime}`;
});