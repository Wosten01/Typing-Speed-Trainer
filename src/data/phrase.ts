export const TYPING_PHRASES = [
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
  "The golden sun dipped below the horizon, painting the sky with hues of pink and orange.",
  "A quiet brook babbled softly as it wound its way through the lush green valley.",
  "The wind whispered secrets through the tall, swaying pine trees.",
  "A lone bird soared high above the tranquil lake, its reflection gliding on the surface below.",
  "Soft rain pattered gently against the window, creating a soothing rhythm in the night.",
  "The wooden dock creaked as the waves lapped gently against its weathered planks.",
  "A crisp autumn breeze carried the scent of fallen leaves and wood smoke through the air.",
  "The moon hung low in the sky, casting a silver glow over the sleepy village.",
  "Morning dew clung to the blades of grass, sparkling in the early light.",
  "The gentle hum of crickets filled the warm summer night with a peaceful melody.",
  "A single candle flickered on the table, its flame dancing in the stillness of the room.",
  "The ancient oak tree stood proudly in the field, its branches stretching towards the sky.",
  "The cool evening breeze carried the faint scent of jasmine through the garden.",
  "Snowflakes drifted silently down, blanketing the world in a soft, white embrace.",
  "The soft glow of the lantern illuminated the cobblestone path winding through the village.",
  "A cat purred contentedly by the fireplace, its fur bathed in the warm glow of the flames.",
  "The rolling hills were dotted with wildflowers, swaying gently in the summer breeze.",
  "A small boat bobbed lazily in the harbor, the water lapping quietly against its hull.",
  "The warm rays of the sun filtered through the leaves, casting dappled shadows on the ground.",
  "A light mist hung over the river, the water barely visible beneath the soft, white veil.",

  "A gentle stream meandered.",
  "test test",
  "hello world hello world hello world",
];

export const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * TYPING_PHRASES.length);
  return TYPING_PHRASES[randomIndex];
};
