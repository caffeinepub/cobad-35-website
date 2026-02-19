import { MapPin } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-burgundy/10 p-4 rounded-full">
              <MapPin className="w-10 h-10 text-burgundy" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-burgundy-dark dark:text-burgundy-light max-w-2xl mx-auto">
            Visítanos en COBAD 35 de Gómez Farías
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-burgundy">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.123456789!2d-98.123456!3d25.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM5JzE1LjYiTiA5OMKwMDcnMjQuNCJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de COBAD 35 de Gómez Farías"
              className="w-full"
            />
          </div>
          
          <div className="mt-8 bg-burgundy/5 dark:bg-burgundy/10 rounded-xl p-6 border-2 border-burgundy/20">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-burgundy shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-burgundy mb-2">
                  COBAD 35 de Gómez Farías
                </h3>
                <p className="text-burgundy-dark dark:text-burgundy-light">
                  Te esperamos en nuestras instalaciones. Ven a conocer nuestra escuela y descubre todo lo que tenemos para ofrecerte.
                </p>
                <a
                  href="https://maps.app.goo.gl/7vmjBD4RjaFTk1gY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-burgundy hover:text-burgundy-dark dark:hover:text-burgundy-light font-semibold underline transition-colors"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
