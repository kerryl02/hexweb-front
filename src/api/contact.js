// routes/contact.js
const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Route pour soumettre le formulaire de contact
router.post(
  '/',
  [
    body('name')
      .notEmpty()
      .withMessage('Le nom est requis.')
      .trim()
      .escape(),
    body('firstname')
      .notEmpty()
      .withMessage('Le prénom est requis.')
      .trim()
      .escape(),
    body('email')
      .isEmail()
      .withMessage('Veuillez entrer une adresse e-mail valide.')
      .normalizeEmail(),
    body('phone')
      .optional()
      .trim()
      .escape(), // On peut rendre ce champ optionnel
    body('message')
      .notEmpty()
      .withMessage('Le message est requis.')
      .trim()
      .escape(),
  ],
  async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, firstname, email, phone, message } = req.body;

    // Configurer Nodemailer avec O2Switch
    const transporter = nodemailer.createTransport({
      host: 'mail.hexweb.fr', // ou l'hôte SMTP de O2Switch
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Options du mail
    const mailOptions = {
      from: `${name} ${firstname} <${email}>`, // expéditeur
      to: process.env.EMAIL_USER, // destinataire
      subject: `Nouveau message de ${name} ${firstname}`,
      text: `Nom: ${name}\nPrénom: ${firstname}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ msg: 'Message envoyé avec succès.' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
  }
);


module.exports = router;
