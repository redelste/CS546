const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        name: 'Ryan Edelstein',
        biography: 'Hi, my name is Ryan Edelstein, and this is Web Dev Lab 6. Today marks the beginning of the week right before midterms, in which all professors assign large projects at the same time, and have them due within days of eachother. It is my favorite time of year because it forces us to do work and help us focus on time management, however it also means that we have to actually do work. \n Additionally I am on the fencing team, which means I have to balance work with practice and travel. Traveling is fun and I wish to visit many of the countries in Asia, such as China, South Korea, India, and Japan. I am most excited to visit India, as I am very fascinated by the cuisine that can be found there.',
        favoriteShows: ['Game of Thrones', 'Breaking Bad', 'Rick and Morty'],
        hobbies: ['fencing', 'Art', 'Eating']
    })
});
module.exports = router;
