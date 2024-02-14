import sgMail, { MailDataRequired } from '@sendgrid/mail';

interface CotizacionData {
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    proyecto: string;
}

const enviarCorreoCotizacion = async (datos: CotizacionData): Promise<void> => {
    const { nombre, apellidos, email, telefono, proyecto } = datos;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const mensaje: MailDataRequired = {
        to: 'hazelo235@gmail.com', // Reemplaza con tu correo destino
        from: 'contactoutm.com@gmail.com', // Reemplaza con tu correo de envío
        subject: 'Nueva cotización recibida',
        text: `
            Nombre: ${nombre} ${apellidos}
            Correo electrónico: ${email}
            Teléfono: ${telefono}
            Proyecto: ${proyecto}
        `,
    };

    try {
        await sgMail.send(mensaje);
        console.log('Correo enviado con éxito');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el correo electrónico');
    }
};

export default enviarCorreoCotizacion;
