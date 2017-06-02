const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const catalog = {
  "Penis Envy Cubensis Spore Syringe": {
    "Price": "$18.45",
    "Model": "IND",
    "Availability": "Out Of Stock",
    "Summary": "Cubensis mushroom spores all the way from India, an EXTREMELY large growing cubensis that was found fruiting from elephant dung. It’s not uncommon for cubensis mushrooms to grow lar..",
    "Weight": "0.40oz",
    "Image": "https://www.mushrooms.com/image/cache/catalog/mushroom_pictures/Orissa-India/giant-magic-mushrooms-10-90x90.jpg"
  },
  "Orissa India Cubensis Spore Syringe": {
    "Price": "$18.45",
    "Model": "TC",
    "Availability": "Out Of Stock",
    "Summary": "The Treasure Coast spores come from a nice cubensis from the east coast of Florida. It’s named after the area it was found is referred to as the Treasure Coat because of all the ship wrecks in t..",
    "Weight": "0.40oz",
    "Image": "https://www.mushrooms.com/image/cache/catalog/mushroom_pictures/Treasure-Coast/treasure-coast-cubensis-01-90x90.jpg"
  },
  "Treasure Coast Cubensis Spore Syringe": {
    "Price": "$18.45",
    "Model": "PE",
    "Availability": 30,
    "Summary": "Mushrooms.com is one of only a few spore vendors that carry the original true AUTHENTIC Penis Envy mushroom spores! The reason this strain of cubensis mushroom spores is so difficult to find..",
    "Weight": "0.40oz",
    "Image": "https://www.mushrooms.com/image/cache/catalog/mushroom_pictures/Penis-Envy/penis-envy-mushrooms-04-90x90.jpg"
  },
  "Thailand Koh Samui Super Strain Cubensis Spore Syringe": {
    "Price": "$18.45",
    "Model": "KSSS",
    "Availability": 30,
    "Summary": "The Koh Samui Super Strain has been one of our best sellers ever since we introduced it at The Hawks Eye. We helped fund a trip for Enthomycologist John Allen and -Clyde- to find us spores to..",
    "Weight": "0.40oz",
    "Image": "https://www.mushrooms.com/image/cache/catalog/mushroom_pictures/Thai-ksss/cubensis-spores-mushroom-caps-03-90x90.jpg"
  }
}
app.get('/fungus-among-us', (request, response) => {
  response.json(catalog);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Port 3000!");
})
