import axios from "axios";
import { toast } from 'react-toastify'

const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post('/api/contact', formData);
    if (response.status === 200) {
      console.log('Email sent successfully');
      toast.success('Your message has been sent')
    } else {
      console.log('Error sending email:', response.data.message);
      toast.error('There was an issue sending your message. Please try again.')
    }
  } catch (error) {
    console.log('Error:', error);
    alert('There was an error, please try again.');
  }
}

export default sendContactMessage;