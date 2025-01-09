import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'portfoliodml@gmail.com',
    pass: 'tneq actl owdu aeru',
  },
});

export const POST: RequestHandler = async ({ request }) => {
  const { prenom, discord, email, objet, message } = await request.json();

  const emailContent = `
    Prénom : ${prenom}
    DIscord : ${discord}
    E-mail : ${email}

    Message :
    ${message}
  `;

  try {
    await transporter.sendMail({
      from: 'portfoliodml@gmail.com',
      to: 'dml.contactpro@gmail.com',
      subject: objet,
      text: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};
