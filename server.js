const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

// Configurer la connexion MySQL
const db = mysql.createConnection({
  host: 'localhost', // Changez avec l'adresse de votre serveur de base de données si nécessaire
  user: 'root', // Utilisateur MySQL
  password: '', // Mot de passe de l'utilisateur
  database: 'blog_db',
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route pour récupérer tous les blogs
app.get('/blogs', (req, res) => {
  db.query('SELECT * FROM blogs', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des blogs : ', err);
      return res.status(500).send('Erreur serveur');
    }
    res.json(results);
  });
});

// Route pour ajouter un nouveau blog
app.post('/blogs', (req, res) => {
  const { title, description, image } = req.body;
  const query = 'INSERT INTO blogs (title, description, image) VALUES (?, ?, ?)';
  
  db.query(query, [title, description, image], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'ajout du blog : ', err);
      return res.status(500).send('Erreur serveur');
    }
    res.status(201).send('Blog ajouté');
  });
});

app.listen(5000, () => {
  console.log('Serveur Node.js en écoute sur http://localhost:5000');
});
