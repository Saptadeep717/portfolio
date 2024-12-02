import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ status: number; message: string }> => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return { status: 202, message: 'Message accepted and will be processed shortly!' };
    }
    throw new Error('Failed to send message');
  } catch (error) {
    console.error('Email error:', error);
    return { status: 500, message: 'Failed to send message. Please try again.' };
  }
};