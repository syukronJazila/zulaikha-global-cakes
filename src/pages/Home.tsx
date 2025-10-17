import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import PromoSlider from '@/components/PromoSlider';
import TestimonialCard from '@/components/TestimonialCard';
import { allProducts } from '@/data/products';
import { promos } from '@/data/promos';
import { testimonials } from '@/data/testimonials';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<typeof allProducts>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate database fetch
    const fetchFeaturedProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const featured = allProducts.filter(p => p.isBestSeller).slice(0, 8);
      if (featured.length < 8) {
        const additional = allProducts.filter(p => !p.isBestSeller).slice(0, 8 - featured.length);
        setFeaturedProducts([...featured, ...additional]);
      } else {
        setFeaturedProducts(featured);
      }
      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Resep Warisan',
      description: 'Resep turun-temurun yang telah terjaga kualitasnya sejak 1995'
    },
    {
      icon: ShieldCheck,
      title: 'Bahan Premium',
      description: 'Menggunakan bahan baku pilihan terbaik untuk cita rasa istimewa'
    },
    {
      icon: Globe,
      title: 'Ekspor Internasional',
      description: 'Produk kami telah diekspor ke Malaysia, Singapura, dan negara lainnya'
    },
    {
      icon: CheckCircle,
      title: 'Proses Higienis',
      description: 'Diproduksi dengan standar kebersihan dan keamanan pangan tertinggi'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Bolu Bika Ambon dari Medan - Sejak 1995
              </h1>
              <p className="text-xl text-muted-foreground">
                Kelezatan Tradisional Yang Telah Mendunia
              </p>
              <p className="text-muted-foreground">
                Nikmati cita rasa authentic Bolu Bika Ambon khas Medan dengan kualitas premium yang telah terbukti dan dipercaya pelanggan di berbagai negara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold">
                  <Link to="/products">
                    Lihat Produk
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <Link to="/locations">Lokasi Toko</Link>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <Globe className="mx-auto mb-2 text-primary" size={32} />
                  <p className="text-sm font-semibold">Ekspor Internasional</p>
                </div>
                <div className="text-center">
                  <ShieldCheck className="mx-auto mb-2 text-primary" size={32} />
                  <p className="text-sm font-semibold">Sertifikasi Halal</p>
                </div>
                <div className="text-center">
                  <Award className="mx-auto mb-2 text-primary" size={32} />
                  <p className="text-sm font-semibold">Bahan Premium</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=500&fit=crop"
                  alt="Bolu Bika Ambon Zulaikha"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Produk Best Seller Kami</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl shadow-md p-4 animate-pulse">
                  <div className="aspect-square bg-muted rounded-lg mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/products">
                Lihat Semua Produk
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promo/Banner Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <PromoSlider promos={promos} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami?</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-secondary" size={40} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 gradient-section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kata Pelanggan Kami</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
