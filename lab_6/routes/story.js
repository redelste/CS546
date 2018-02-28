const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
      storyTitle: "The Man Who",
      story: "There once was a man in Khatman Du\n He really enjoyed tofu.\nWhen he went to get some, he really felt dumb, and ended up getting stew.\n\nNow stew is not fun unlike a run, so he went to go and buy shoes.\n The store was not full, as there was just a bull, so the man had to get away\n On his way out, there was a big shout, HEY YOU FORGOT YOUR BULL\n But the bull was not his\n and nor were those kids, \n so the man had to sit and stay\n As he sat, he watched them pat,\n the bull on its behind\n When the bull turned around\n it was only a clown,\n and the man felt rather down\n he had sat here all day\n he wasted is pay\n all to see a clown. \n This was no fun, as the man still felt dumb\n all for a bowl of tofu\n So the man took a rest, and gave his best,\n the rest is up to you\n did the man get his shoes\n or did he just have a snooze\n the world may never know"
    })
});
module.exports = router;
