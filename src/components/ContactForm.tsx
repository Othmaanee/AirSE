
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Utilisation de FormSubmit pour envoyer le formulaire par email
      const response = await fetch("https://formsubmit.co/contact.airse@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nouveau message depuis le site - ${formData.subject}`,
          _captcha: "false", // Désactiver le captcha (optionnel)
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Formulaire envoyé avec succès",
          description: "Nous vous contacterons dans les plus brefs délais.",
          duration: 5000,
        });
        
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Échec de l'envoi du formulaire");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer ultérieurement.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-airse-navy mb-6">Contactez-nous</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 XX XX XX XX"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Sujet *
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Objet de votre message"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Décrivez votre projet ou votre demande..."
                rows={5}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-airse-light-blue hover:bg-airse-blue text-white" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer votre message"}
            </Button>
          </form>
        </div>
        
        <div className="bg-gradient-to-br from-airse-light-blue to-airse-dark-blue text-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Téléphone</p>
                <a href="tel:0652451715" className="hover:underline">06 52 45 17 15</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:contact.airse@gmail.com" className="hover:underline">contact.airse@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-2">Horaires d'ouverture</h4>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span>8h00 - 18h00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi:</span>
                <span>Sur rendez-vous</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche:</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6">
            <p className="text-sm">
              N'hésitez pas à nous contacter pour obtenir un devis gratuit ou pour toute information complémentaire sur nos services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
