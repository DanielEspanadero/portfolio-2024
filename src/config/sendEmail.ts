import axios from 'axios';
import { FormEvent } from 'react';

const RESEND_API = import.meta.env.VITE_RESEND_API;

const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('recipient-email') as string;
    const subject = 'Contactado desde: daniel-espanadero.com';
    const message = formData.get('text') as string;

    if (name.length < 3 || name.length > 200) {
        alert('El nombre debe tener entre 3 y 200 caracteres.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return;
    }

    if (message.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
        return;
    }

    const emailData = {
        from: 'onboarding@resend.dev',
        to: 'developer@daniel-espanadero.com',
        subject: subject,
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            </div>
        `,
    };

    try {
        const response = await axios.post('/emails', emailData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API}`
            }
        });
        console.log('Email sent successfully:', response.data);
        form.reset();
        return "Email sent successfully!";
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export default sendEmail;
