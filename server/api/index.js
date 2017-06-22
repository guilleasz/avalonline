const router = require('express').Router();
module.exports = router;

router.use('/mobile', require('./mobile'));
router.use('/browser', require('./browser'));

router.use((req, res) => {
  res.status(404).send('Not found');
});
