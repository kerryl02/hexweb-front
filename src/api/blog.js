const express = require('express');
const db = require('../db'); // Assure-toi que ce chemin soit correct
const router = express.Router();

// Route de la page d'accueil du blog
router.get('/', (req, res) => {
    console.log('Route /api/web-business atteinte'); // Log pour débogage
    const sql = 'SELECT * FROM articles';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des articles:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        console.log('Articles récupérés:', results); // Log pour débogage
        res.json(results); // Retourne tous les articles
    });
});

// Route pour les articles par catégorie
router.get('/:category', (req, res) => {
    const categorySlug = req.params.category;
    const sql = `
      SELECT articles.* FROM articles
      JOIN categories ON articles.category_id = categories.id
      WHERE categories.slug = ?
    `;
    db.query(sql, [categorySlug], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des articles par catégorie:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        res.json(results); // Retourne les articles de la catégorie
    });
});

// Route pour un article spécifique
router.get('/:category/:slug', (req, res) => {
    const categorySlug = req.params.category;
    const articleSlug = req.params.slug;
    const sql = `
      SELECT articles.* FROM articles
      JOIN categories ON articles.category_id = categories.id
      WHERE articles.slug = ? AND categories.slug = ?
    `;
    db.query(sql, [articleSlug, categorySlug], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'article:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Article non trouvé.' });
        }
        res.json(results[0]); // Retourne le contenu de l'article
    });
});

module.exports = router;
