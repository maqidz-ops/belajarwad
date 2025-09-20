const express = require('express');
const router = express.Router();

// Simple JSON acting as database
const users = [
  { user: 'john', name: 'John Doe', NIM: '12345678' },
  { user: 'jane', name: 'Jane Smith', NIM: '87654321' },
  { user: 'alice', name: 'Alice Johnson', NIM: '11223344' }
];

// GET /aboutus/:user
router.get('/:user', (req, res) => {
  const { user } = req.params;
  const foundUser = users.find(u => u.user === user);
  if (foundUser) {
    res.json({ name: foundUser.name, NIM: foundUser.NIM });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
