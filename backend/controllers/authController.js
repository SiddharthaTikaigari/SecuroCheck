const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Signup
exports.signup = (req, res) => {
  const { name, username, email, password, role } = req.body;
  
  // Check if username exists
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length > 0) return res.status(400).send('Username already exists');

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Insert user
    db.query(
      'INSERT INTO users (name, username, email, password, role) VALUES (?,?,?,?,?)',
      [name, username, email, hashedPassword, role],
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('User registered successfully');
      }
    );
  });
};

// Login
exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(400).send('User not found');

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) return res.status(401).send('Invalid password');

    res.json({ message: 'Login successful', role: user.role });
  });
};
