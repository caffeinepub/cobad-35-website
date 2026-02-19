import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'cobad35';

  return (
    <footer className="bg-burgundy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">COBAD 35</h3>
            <p className="text-white/80">
              Construyendo el futuro de México a través de la educación de calidad.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/80">
              <li>WhatsApp: +52 831 303 1210</li>
              <li>Instagram: @omar_garcia_18</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <p className="text-white/80">
              Lunes a Viernes<br />
              7:00 AM - 3:00 PM
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} COBAD 35. Todos los derechos reservados.
          </p>
          <p className="text-white/70 mt-2">
            Página creada por Omar García Arias, alumno del COBAD 35
          </p>
          <p className="text-white/60 mt-2 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 fill-current" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
