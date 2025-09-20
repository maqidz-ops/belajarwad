const express = require('express');
const router = express.Router();

// GET /greeting?name=Teo
router.get('/', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`hello ${name}`);
  } else {
    res.send('hello');
  }
});

module.exports = router;
