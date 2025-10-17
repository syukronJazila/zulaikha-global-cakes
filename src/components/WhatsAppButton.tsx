import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20produk%20Bolu%20Bika%20Ambon%20Zulaikha"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
