const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Correct path
const bcrypt = require('bcryptjs'); // bcryptjs is commonly used

// Signup route
router.post('/signup', async (req, res) => {
  const { name, username, email, password, role } = req.body;

  if (!name || !username || !email || !role)
    return res.status(400).send('All fields required');

  db.query(
    'SELECT * FROM users WHERE username = ? OR email = ?',
    [username, email],
    async (err, results) => {
      if (err) return res.status(500).send('Database error');
      if (results.length > 0) return res.status(400).send('Username or email already exists');

      const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

      db.query(
        'INSERT INTO users (name, username, email, password, role) VALUES (?, ?, ?, ?, ?)',
        [name, username, email, hashedPassword, role],
        (err, result) => {
          if (err) return res.status(500).send('Database error');
          res.status(200).send('User registered successfully');
        }
      );
    }
  );
});

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).send('All fields required');

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).send('Database error');
    if (results.length === 0) return res.status(400).send('User not found');

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send('Incorrect password');

    // Return role for frontend redirect
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        role: user.role
      }
    });
  });
});

module.exports = router;
