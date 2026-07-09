
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Prem1545',
    icon: <FaGithub size={20} />,
    ariaLabel: 'GitHub profile'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prem-kumar-mekala-6396332b3?trk=contact-info',
    icon: <FaLinkedin size={20} />,
    ariaLabel: 'LinkedIn profile'
  },
  {
    name: 'Email',
    url: 'mailto:premyadavofficial15@gmail.com',
    icon: <Mail size={20} />,
    ariaLabel: 'Send email'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/917032536697',
    icon: <FaWhatsapp size={20} />,
    ariaLabel: 'Chat on WhatsApp'
  }
];
