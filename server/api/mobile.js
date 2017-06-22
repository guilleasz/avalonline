const router = require('express').Router();
module.exports = router;

router.get('/', (req, res, next) => {
  res.send('<h1>THIS IS /MOBILE</h1>')
});
