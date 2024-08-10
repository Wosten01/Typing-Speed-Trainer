export const typingPhrases = [
    "The orange bicycle quietly rolls down the cobblestone street in the afternoon.",
    "Clouds drift slowly across the vast, blue sky over a peaceful meadow.",
    "A small cat sits comfortably on a windowsill, watching the world outside.",
    "Brightly colored balloons floated gently away, disappearing into the clear, sunny sky.",
    "The ancient book rested on the wooden shelf, gathering dust over the years.",
    "A distant train whistle echoed through the quiet, empty valley in the twilight.",
    "Leaves rustled softly in the breeze, creating a calming, natural symphony.",
    "The old lighthouse stood tall against the backdrop of a fading sunset horizon.",
    "Candles flickered warmly in the dark room, casting playful shadows on the walls.",
    "A gentle stream meandered through the forest, reflecting the golden rays of sunlight.",
    "A gentle stream meandered.",
    "test test"
];

export const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * typingPhrases.length);
    return typingPhrases[randomIndex];
};
