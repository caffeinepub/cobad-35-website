import { Button } from '@/components/ui/button';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

export default function ContactButtons() {
  const whatsappNumber = '528313031210';
  const instagramHandle = 'omar_garcia_18';

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre COBAD 35.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open(`https://www.instagram.com/${instagramHandle}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        onClick={openWhatsApp}
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl w-14 h-14 p-0 transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <SiWhatsapp className="w-7 h-7" />
      </Button>
      
      <Button
        onClick={openInstagram}
        size="lg"
        className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white rounded-full shadow-2xl w-14 h-14 p-0 transition-all hover:scale-110"
        aria-label="Seguir en Instagram"
      >
        <SiInstagram className="w-7 h-7" />
      </Button>
    </div>
  );
}
