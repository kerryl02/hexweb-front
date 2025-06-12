import nodemailer from 'nodemailer';
import { validationResult, body, checkSchema } from 'express-validator';
import { runMiddleware } from './_middleware';

const validations = [
  body('name').notEmpty().withMessage('Le nom est requis.').trim().escape(),
  body('firstname').notEmpty().withMessage('Le prénom est requis.').trim().escape(),
  body('email').isEmail().withMessage('Veuillez entrer une adresse e-mail valide.').normalizeEmail(),
  body('phone').optional().trim().escape(),
  body('message').notEmpty().withMessage('Le message est requis.').trim().escape()
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Méthode non autorisée');
  }

  await runMiddleware(req, res, validations);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, firstname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail.hexweb.fr',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${name} ${firstname} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Nouveau message de ${name} ${firstname}`,
    text: `Nom: ${name}\nPrénom: ${firstname}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ msg: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
  }
}
