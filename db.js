const mysql = require('mysql2');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Adresse du serveur MySQL
  user: 'root', // Nom d'utilisateur MySQL
  password: '', // Mot de passe MySQL
  database: 'blog_db', // Nom de la base de données
});

// Connexion à la base de données
connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à MySQL:', error);
    process.exit(1); // Quitte l'application en cas d'erreur
  }
  console.log('Connecté à MySQL');
});

module.exports = connection;