import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '919555529034'; // Country code 91 + 9555529034
  const defaultMessage = encodeURIComponent(
    'Hello Sky Tech Net Solutions, I would like to enquire about your services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg cursor-pointer"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}