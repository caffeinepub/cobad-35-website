import { BookOpen, Users, Trophy, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Excelencia Académica',
      description: 'Programas educativos de alta calidad con maestros certificados y comprometidos con tu éxito.',
      image: '/assets/generated/academic-excellence.dim_600x600.png',
    },
    {
      icon: Users,
      title: 'Ambiente Colaborativo',
      description: 'Aprende en un entorno que fomenta el trabajo en equipo, la creatividad y el desarrollo personal.',
      image: '/assets/generated/students-collaboration.dim_800x600.png',
    },
    {
      icon: Sparkles,
      title: 'Instalaciones Modernas',
      description: 'Laboratorios equipados, biblioteca actualizada y espacios diseñados para tu aprendizaje.',
      image: '/assets/generated/school-facilities.dim_800x600.png',
    },
    {
      icon: Trophy,
      title: 'Éxito Comprobado',
      description: 'Nuestros egresados destacan en universidades y en el campo laboral gracias a su formación integral.',
      image: null,
    },
  ];

  return (
    <section id="about-section" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4">
            ¿Por Qué Elegir COBAD 35?
          </h2>
          <p className="text-lg text-burgundy-dark dark:text-burgundy-light max-w-2xl mx-auto">
            Somos más que una escuela, somos una comunidad comprometida con tu futuro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-burgundy/30 hover:border-burgundy group bg-white dark:bg-gray-900"
              >
                <CardContent className="p-0">
                  {benefit.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-burgundy/10 p-3 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-burgundy" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-burgundy mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-burgundy-dark dark:text-burgundy-light leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-burgundy/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-burgundy/20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-burgundy">
            Formando Líderes del Mañana
          </h3>
          <p className="text-center text-burgundy-dark dark:text-burgundy-light text-lg leading-relaxed">
            En COBAD 35, no solo te preparamos académicamente, sino que desarrollamos tus habilidades 
            sociales, tu pensamiento crítico y tu capacidad de liderazgo. Nuestro compromiso es brindarte 
            las herramientas necesarias para que alcances tus metas y contribuyas positivamente a la sociedad.
          </p>
        </div>
      </div>
    </section>
  );
}
