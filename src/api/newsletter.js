const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const db = require('../db');

const router = express.Router();
const dns = require("dns");

function checkEmailDomain(email) {
  const domain = email.split("@")[1];
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (err, addresses) => {
      if (err || addresses.length === 0) {
        return reject(new Error("Invalid email domain"));
      }
      resolve(true);
    });
  });
}

router.post(
    '/',
    [
        body('email')
            .isEmail()
            .withMessage('Veuillez entrer une adresse e-mail valide.')
            .normalizeEmail({ gmail_remove_dots: false }),
    ],
    async (req, res) => {
        // Vérification des erreurs de validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email } = req.body;

        // Insérer l'email dans la base de données
        const checkQuery = 'SELECT * FROM subscribers WHERE email = ?';
        db.query(checkQuery, [email], async (err, results) => {
            if (err) {
                console.error('Erreur lors de la vérification de l\'email:', err);
                return res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'Cet email est déjà inscrit.' });
            } 

            // Insérer l'email car il n'est pas encore inscrit
            const insertQuery = 'INSERT INTO subscribers (email) VALUES (?)';
            db.query(insertQuery, [email], async (err, result) => {
                if (err) {
                    console.error('Erreur lors de l\'insertion dans la base de données:', err);
                    return res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
                }

                // Configurer Nodemailer
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
                    from: `"Hexweb Support" <contact@hexweb.fr>`,
                    to: email, // destinataire
                    subject: 'Bienvenue à notre Newsletter !',
                    html: `<!DOCTYPE html>
                    <html lang="fr">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <title>Bienvenue à la Newsletter</title>
                        <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }

                        .email-container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            border-radius: 8px;
                            overflow: hidden;
                        }

                        .email-header {
                            background-color: #0073e6;
                            padding: 20px;
                            text-align: center;
                        }

                        .email-header img {
                            width: 150px;
                        }

                        .email-body {
                            padding: 20px;
                        }

                        .email-body h1 {
                            color: #333333;
                            font-size: 24px;
                        }

                        .email-body p {
                            font-size: 16px;
                            color: #555555;
                            line-height: 1.6;
                        }

                        .email-body a {
                            display: inline-block;
                            padding: 10px 20px;
                            background-color: #0073e6;
                            color: white;
                            text-decoration: none;
                            border-radius: 5px;
                            margin-top: 20px;
                        }

                        .email-footer {
                            text-align: center;
                            padding: 20px;
                            background-color: #0073e6;
                            color: white;
                        }

                        .email-footer p {
                            font-size: 12px;
                        }

                        .email-footer img {
                            width: 40px;
                            margin: 0 10px;
                        }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                        <div class="email-header">
                            <img src="https://hexweb.fr/logo.png" alt="Logo Hexweb" />
                        </div>
                        <div class="email-body">
                            <h1>Bienvenue dans la communauté Hexweb !</h1>
                            <p>
                            Bonjour et merci de vous être inscrit à notre newsletter. Nous sommes
                            ravis de vous compter parmi nos abonnés. Attendez-vous à recevoir des
                            nouvelles régulières de notre part avec les dernières mises à jour,
                            astuces et offres exclusives.
                            </p>
                            <p>
                            En attendant, vous pouvez découvrir notre guide exclusif en cliquant
                            sur le lien ci-dessous :
                            </p>
                            <a href="[lien vers le PDF]">Télécharger le guide PDF</a>
                        </div>
                        <div class="email-footer">
                            <p>Suivez-nous sur les réseaux sociaux :</p>
                            <a href="https://facebook.com/hexweb"><img src="https://hexweb.fr/icons/facebook.png" alt="Facebook" /></a>
                            <a href="https://twitter.com/hexweb"><img src="https://hexweb.fr/icons/twitter.png" alt="Twitter" /></a>
                            <a href="https://instagram.com/hexweb"><img src="https://hexweb.fr/icons/instagram.png" alt="Instagram" /></a>
                            <p>&copy; 2024 Hexweb. Tous droits réservés.</p>
                        </div>
                        </div>
                    </body>
                    </html>
                    `,
                };

                // Envoyer l'email
                try {
                    await transporter.sendMail(mailOptions);
                    return res.status(200).json({ msg: 'Inscription réussie ! Un email a été envoyé.' });
                } catch (error) {
                    console.error('Erreur lors de l\'envoi de l\'email:', error);
                    return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
                }
            });
        });
    }
);

module.exports = router;
