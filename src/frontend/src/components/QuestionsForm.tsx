import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitQuestion } from '../hooks/useQueries';
import { Loader2, CheckCircle2, MessageCircle, GraduationCap } from 'lucide-react';

export default function QuestionsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    question: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const submitQuestion = useSubmitQuestion();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'El teléfono es requerido';
    }

    if (!formData.question.trim()) {
      newErrors.question = 'La pregunta es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await submitQuestion.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        question: '',
      });
      setErrors({});
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 8000);
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl border-burgundy border-2 bg-white dark:bg-gray-900">
          <CardHeader className="text-center pb-8 bg-burgundy/5 dark:bg-burgundy/10">
            <CardTitle className="text-3xl md:text-4xl font-bold text-burgundy mb-2">
              ¿Tienes Dudas?
            </CardTitle>
            <CardDescription className="text-lg text-burgundy-dark dark:text-burgundy-light">
              Estamos aquí para ayudarte. Envíanos tu pregunta y te responderemos pronto.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            {showSuccess ? (
              <div className="text-center py-16 px-4">
                <div className="flex justify-center mb-6">
                  <div className="bg-burgundy/10 dark:bg-burgundy/20 p-6 rounded-full">
                    <GraduationCap className="w-20 h-20 text-burgundy" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mb-6 leading-tight">
                  ¡No se van a arrepentir de estudiar en el COBAD 35 de Gómez Farías!
                </h3>
                <div className="mt-8 p-6 bg-burgundy/5 dark:bg-burgundy/10 rounded-xl border-2 border-burgundy/20">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-12 h-12 text-burgundy" />
                  </div>
                  <p className="text-xl text-burgundy-dark dark:text-burgundy-light font-semibold mb-2">
                    Tu pregunta ha sido enviada exitosamente
                  </p>
                  <p className="text-burgundy-dark/80 dark:text-burgundy-light/80">
                    Nuestro equipo te responderá lo antes posible
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Nombre *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Tu nombre"
                    className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                      errors.name ? 'border-destructive' : 'border-burgundy/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-question" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email-question"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                      errors.email ? 'border-destructive' : 'border-burgundy/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber-question" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Teléfono *
                  </Label>
                  <Input
                    id="phoneNumber-question"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    placeholder="+52 123 456 7890"
                    className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                      errors.phoneNumber ? 'border-destructive' : 'border-burgundy/30'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-destructive">{errors.phoneNumber}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="question" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Tu Pregunta *
                  </Label>
                  <Textarea
                    id="question"
                    value={formData.question}
                    onChange={(e) => handleChange('question', e.target.value)}
                    placeholder="Escribe tu pregunta o duda aquí..."
                    rows={5}
                    className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                      errors.question ? 'border-destructive' : 'border-burgundy/30'
                    }`}
                  />
                  {errors.question && (
                    <p className="text-sm text-destructive">{errors.question}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg py-6 bg-burgundy hover:bg-burgundy-dark text-white font-semibold transition-colors"
                  disabled={submitQuestion.isPending}
                >
                  {submitQuestion.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Enviar Pregunta
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
