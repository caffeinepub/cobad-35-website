import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

export default function HeroSection() {
  const scrollToEnrollment = () => {
    const enrollmentSection = document.getElementById('enrollment-form');
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/hero-background.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-full">
            <GraduationCap className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
          COBAD 35
        </h1>
        
        <p className="text-xl md:text-3xl text-primary-foreground/95 mb-4 font-medium max-w-3xl mx-auto">
          Construyendo el Futuro de México
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          Educación de calidad, instalaciones modernas y un compromiso con la excelencia académica. 
          Tu camino hacia el éxito comienza aquí.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToEnrollment}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 rounded-full shadow-2xl transform transition hover:scale-105"
          >
            Inscríbete Ahora
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              const aboutSection = document.getElementById('about-section');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full"
          >
            Conoce Más
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
