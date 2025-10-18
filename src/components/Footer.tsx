import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/zulaikha.png';


const Footer = () => {
  const productCategories = [
    { name: 'Bika Ambon', link: '/products?category=bika' },
    { name: 'Brownies', link: '/products?category=brownies' },
    { name: 'Lapis Legit', link: '/products?category=lapis' },
    { name: 'Cookies', link: '/products?category=cookies' }
  ];

  const quickLinks = [
    { name: 'Beranda', link: '/' },
    { name: 'Produk', link: '/products' },
    { name: 'Lokasi Toko', link: '/locations' },
    { name: 'Tentang Kami', link: '/about' },
    { name: 'Kontak', link: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="h-30 w-48 mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Logo Zulaikha"
                className="h-full w-auto object-cover object-center px-2 rounded-3xl"
              />
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Cita Rasa Tradisional Medan Yang Mendunia Sejak 1995
            </p>
            <div className="flex space-x-3">
              <a
                href="https://web.facebook.com/p/ZulaikhaBikaAmbon-100044731158232/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/zulaikhabikaambonn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.link}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Kategori Produk</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.link}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Mojopahit No.70 A-C, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20112</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="https://wa.me/6287747571102?text=Halo,%20saya%20tertarik%20dengan%20produk%20Bolu%20Bika%20Ambon%20Zulaikha" className="hover:text-primary transition-colors">
                  +62 877-4757-1102
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@zulaikhabikaambon.com" className="hover:text-primary transition-colors">
                  info@zulaikhabikaambon.com
                </a>
              </li>
              <li>
                <Button
                  asChild
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90 text-white mt-2"
                >
                  <a
                    href="https://wa.me/6287747571102?text=Halo,%20saya%20tertarik%20dengan%20produk%20Bolu%20Bika%20Ambon%20Zulaikha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Bolu Bika Ambon Zulaikha. Hak Cipta Dilindungi.</p>
          <p className="mt-2">Dibuat dengan ❤️ di Medan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
