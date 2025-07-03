import { useState, useRef} from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSendEmail } from "@/hooks/useSendEmail";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Contact= () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { sendEmail } = useSendEmail();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  // ✅ Handles input changes safely
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  // Handles form submission with async/await
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
 

     if (!executeRecaptcha) {
      alert('Recaptcha not loaded');
      return;
    }

    const token = await executeRecaptcha('contact_form');
    if (!token) {
      toast({
        title: "❌ Recaptcha failed",
        description: "Please try again.",
        variant: "destructive"
      });
      return;
    }
    console.log('Recaptcha token:', token);
    
    const res = await sendEmail(
      formRef.current,
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      import.meta.env.VITE_EMAILJS_USER_ID
    );

    if (res.success) {
      toast({
        title: "✅ Message sent!",
        description: "Your message has been received. I'll get back to you shortly."
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "❌ Failed to send",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-purple" size={20} />,
      label: "Email",
      value: "ijeoma_enem@outlook.com",
      href: "mailto:ijeoma_enem@outlook.com"
    },
    {
      icon: <Phone className="text-purple" size={20} />,
      label: "Phone",
      value: "+2348036114738",
      href: "tel:+2348036114738"
    },
    {
      icon: <Linkedin className="text-purple" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/ijeoma-enem-a4780017",
      href: "https://linkedin.com/in/ijeoma-enem-a4780017"
    },
    {
      icon: <Github className="text-purple" size={20} />,
      label: "GitHub",
      value: "github.com/iphieaijay",
      href: "https://github.com/iphieaijay"
    }
  ];
const setTokenFunc = (getToken) => {
    setToken(getToken);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-purple/5 to-navy-light/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-purple mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-gray-200 shadow-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-navy">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form  ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-navy font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-gray-300 focus:border-purple focus:ring-purple"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-navy font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-gray-300 focus:border-purple focus:ring-purple"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-navy font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 border-gray-300 focus:border-purple focus:ring-purple"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple hover:bg-purple-light text-white py-3 text-lg font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-navy">{info.label}</p>
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-purple transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-purple border-2 bg-gradient-to-br from-purple/5 to-navy/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-navy mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-700 mb-6">
                  Whether you need backend development, system architecture, or technical mentorship, 
                  I'm here to help bring your vision to life.
                </p>
                <Button 
                  asChild
                  className="bg-navy hover:bg-navy-light text-white px-8 py-3"
                >
                  <a href="mailto:ijeoma_enem@outlook.com">
                    Start a Conversation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

