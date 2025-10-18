import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.');
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ada pertanyaan atau ingin memesan produk kami? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama Lengkap <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                    Nomor WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subjek <span className="text-destructive">*</span>
                  </label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => handleInputChange('subject', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih subjek pesan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Pertanyaan Produk</SelectItem>
                      <SelectItem value="order">Pemesanan</SelectItem>
                      <SelectItem value="partnership">Kemitraan</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tuliskan pesan Anda di sini..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-foreground font-semibold"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="gradient-section p-6 md:p-8 rounded-xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <MapPin size={20} className="mr-2 text-primary" />
                    Kantor Pusat
                  </h3>
                  <p className="text-sm text-muted-foreground ml-7">
                    Jl. Mojopahit No.70 A-C<br />
                    Petisah Tengah, Kec. Medan Petisah<br />
                    Kota Medan, Sumatera Utara 20112<br />
                    Indonesia
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Kontak</h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/6287747571102?text=Halo,%20saya%20tertarik%20dengan%20produk%20Bolu%20Bika%20Ambon%20Zulaikha"
                      className="flex items-center text-sm hover:text-primary transition-colors"
                    >
                      <Phone size={18} className="mr-3 text-muted-foreground" />
                      +62 877-4757-1102
                    </a>
                    <a
                      href="mailto:info@zulaikhabikaambon.com"
                      className="flex items-center text-sm hover:text-primary transition-colors"
                    >
                      <Mail size={18} className="mr-3 text-muted-foreground" />
                      info@zulaikhabikaambon.com
                    </a>
                    <Button
                      asChild
                      className="w-full bg-secondary hover:bg-secondary/90 text-white mt-2"
                    >
                      <a
                        href="https://wa.me/6287747571102?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20Zulaikha"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={18} className="mr-2" />
                        Chat WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Clock size={20} className="mr-2 text-primary" />
                    Jam Operasional
                  </h3>
                  <div className="text-sm text-muted-foreground ml-7 space-y-1">
                    <p>Senin - Jumat: 08:00 - 20:00</p>
                    <p>Sabtu - Minggu: 09:00 - 20:00</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Media Sosial</h3>
                  <div className="flex space-x-3 ml-7">
                    <a
                      href="https://www.instagram.com/zulaikhabikaambonn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://web.facebook.com/p/ZulaikhaBikaAmbon-100044731158232/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
