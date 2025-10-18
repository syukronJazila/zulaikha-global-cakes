import { Calendar, Store, Globe, Package, Award, ShieldCheck } from 'lucide-react';
import toko1 from '@/assets/toko.png';
import toko2 from '@/assets/toko2.jpg';


const About = () => {
  const stats = [
    { icon: Calendar, number: '29+', label: 'Tahun Pengalaman' },
    { icon: Store, number: '10+', label: 'Cabang' },
    { icon: Globe, number: '3', label: 'Negara Ekspor' },
    { icon: Package, number: '12+', label: 'Varian Produk' }
  ];

  const certifications = [
    {
      name: 'Halal MUI',
      description: 'Bersertifikat Halal dari Majelis Ulama Indonesia'
    },
    {
      name: 'BPOM',
      description: 'Terdaftar di Badan Pengawas Obat dan Makanan'
    },
    {
      name: 'ISO 22000',
      description: 'Standar manajemen keamanan pangan internasional'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Company Story Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-6">Tentang Bolu Bika Ambon Zulaikha</h1>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Berdiri sejak tahun 1995 di kota Medan, Sumatera Utara, Bolu Bika Ambon Zulaikha 
                  dimulai dari kecintaan keluarga kami terhadap kue tradisional khas Medan. Dengan 
                  resep turun-temurun yang dijaga keasliannya, kami berkomitmen menghadirkan cita 
                  rasa authentic untuk setiap pelanggan.
                </p>
                <p>
                  Perjalanan kami tidak selalu mudah, namun dengan dedikasi dan konsistensi dalam 
                  menjaga kualitas, kini Bolu Bika Ambon Zulaikha telah menjadi salah satu brand 
                  terpercaya di Indonesia dan telah merambah pasar internasional.
                </p>
                <p>
                  Ekspansi kami ke Malaysia dan Singapura membuktikan bahwa cita rasa tradisional 
                  Indonesia mampu bersaing di kancah global. Setiap produk yang kami hasilkan 
                  melewati kontrol kualitas ketat untuk memastikan kepuasan pelanggan.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={toko1}
                  alt="Bolu Bika Ambon Zulaikha Store"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={toko2}
                  alt="Production Process"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Visi & Misi Kami</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visi</h3>
                  <p className="text-muted-foreground">
                    Menjadi produsen kue tradisional Indonesia terdepan yang mendunia dengan 
                    tetap mempertahankan keaslian resep dan kualitas premium.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Misi</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Menghadirkan produk berkualitas tinggi dengan bahan baku pilihan terbaik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Menjaga keaslian resep warisan dengan standar produksi modern</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Memperluas jangkauan pasar domestik dan internasional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Memberikan pelayanan terbaik kepada setiap pelanggan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements/Milestones */}
        <div className="mb-16 py-16 gradient-section rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pencapaian Kami</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="text-primary mx-auto mb-4" size={48} />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sertifikasi & Penghargaan</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center group"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <ShieldCheck className="text-secondary" size={40} />
                  ) : index === 1 ? (
                    <Award className="text-secondary" size={40} />
                  ) : (
                    <Award className="text-secondary" size={40} />
                  )}
                </div>
                <h3 className="font-bold text-xl mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
