var router = require('express').Router();
const path = require('path');
router.get('/', async function (req, res) {
      res.sendfile('static/static.html')
});

module.exports = router;
