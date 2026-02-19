import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitApplication } from '../hooks/useQueries';
import { Loader2, CheckCircle2, Send } from 'lucide-react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    previousSchool: '',
    gradeLevel: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const submitApplication = useSubmitApplication();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'El teléfono es requerido';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'La fecha de nacimiento es requerida';
    }

    if (!formData.previousSchool.trim()) {
      newErrors.previousSchool = 'La escuela anterior es requerida';
    }

    if (!formData.gradeLevel) {
      newErrors.gradeLevel = 'El grado es requerido';
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
      await submitApplication.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        previousSchool: '',
        gradeLevel: '',
      });
      setErrors({});
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="enrollment-form" className="py-20 bg-burgundy/5 dark:bg-burgundy/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-burgundy/30 bg-white dark:bg-gray-900">
          <CardHeader className="text-center pb-8 bg-burgundy/5 dark:bg-burgundy/10">
            <CardTitle className="text-3xl md:text-4xl font-bold text-burgundy mb-2">
              Solicitud de Inscripción
            </CardTitle>
            <CardDescription className="text-lg text-burgundy-dark dark:text-burgundy-light">
              Completa el formulario y da el primer paso hacia tu futuro
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            {showSuccess ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <div className="bg-burgundy/10 p-4 rounded-full">
                    <CheckCircle2 className="w-16 h-16 text-burgundy" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-burgundy mb-2">
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-burgundy-dark dark:text-burgundy-light">
                  Gracias por tu interés en COBAD 35. Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="Juan Pérez García"
                    className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                      errors.fullName ? 'border-destructive' : 'border-burgundy/30'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email"
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
                  <Label htmlFor="phoneNumber" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Teléfono *
                  </Label>
                  <Input
                    id="phoneNumber"
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
                  <Label htmlFor="dateOfBirth" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Fecha de Nacimiento *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                    className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                      errors.dateOfBirth ? 'border-destructive' : 'border-burgundy/30'
                    }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-sm text-destructive">{errors.dateOfBirth}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousSchool" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Escuela Anterior *
                  </Label>
                  <Input
                    id="previousSchool"
                    value={formData.previousSchool}
                    onChange={(e) => handleChange('previousSchool', e.target.value)}
                    placeholder="Nombre de tu escuela anterior"
                    className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                      errors.previousSchool ? 'border-destructive' : 'border-burgundy/30'
                    }`}
                  />
                  {errors.previousSchool && (
                    <p className="text-sm text-destructive">{errors.previousSchool}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gradeLevel" className="text-burgundy-dark dark:text-burgundy-light font-semibold">
                    Grado al que Deseas Ingresar *
                  </Label>
                  <Select
                    value={formData.gradeLevel}
                    onValueChange={(value) => handleChange('gradeLevel', value)}
                  >
                    <SelectTrigger 
                      id="gradeLevel"
                      className={`border-2 focus:border-burgundy focus:ring-burgundy ${
                        errors.gradeLevel ? 'border-destructive' : 'border-burgundy/30'
                      }`}
                    >
                      <SelectValue placeholder="Selecciona un grado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Primer Semestre</SelectItem>
                      <SelectItem value="2">Segundo Semestre</SelectItem>
                      <SelectItem value="3">Tercer Semestre</SelectItem>
                      <SelectItem value="4">Cuarto Semestre</SelectItem>
                      <SelectItem value="5">Quinto Semestre</SelectItem>
                      <SelectItem value="6">Sexto Semestre</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gradeLevel && (
                    <p className="text-sm text-destructive">{errors.gradeLevel}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg py-6 bg-burgundy hover:bg-burgundy-dark text-white font-semibold transition-colors"
                  disabled={submitApplication.isPending}
                >
                  {submitApplication.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Solicitud
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
