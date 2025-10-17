import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import StoreCard from '@/components/StoreCard';
import { storeLocations } from '@/data/stores';

const StoreLocations = () => {
  const [stores, setStores] = useState(storeLocations);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'Indonesia' | 'Malaysia' | 'Singapore'>('all');

  useEffect(() => {
    // Simulate database fetch
    const fetchStores = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let filtered = storeLocations;
      if (activeFilter !== 'all') {
        filtered = storeLocations.filter(store => store.country === activeFilter);
      }
      
      setStores(filtered);
      setLoading(false);
    };

    fetchStores();
  }, [activeFilter]);

  const filters = [
    { id: 'all' as const, label: 'Semua' },
    { id: 'Indonesia' as const, label: 'Indonesia' },
    { id: 'Malaysia' as const, label: 'Malaysia' },
    { id: 'Singapore' as const, label: 'Singapore' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Lokasi Toko Kami</h1>
          <p className="text-muted-foreground">
            Temukan outlet Bolu Bika Ambon Zulaikha terdekat di kota Anda
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-muted-foreground mb-4">
                Peta interaktif akan ditampilkan di sini
              </p>
              <p className="text-sm text-muted-foreground">
                {/* TODO: Integrate Google Maps iframe */}
                Integrasi dengan Google Maps untuk menampilkan lokasi semua outlet
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? 'bg-primary hover:bg-primary/90 text-foreground' : ''}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Store List */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-muted rounded mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stores.map((store) => (
              <StoreCard key={store.id} {...store} />
            ))}
          </div>
        )}

        {/* Partnership CTA */}
        <div className="gradient-section rounded-2xl p-8 md:p-12 text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ingin Menjadi Mitra Kami?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan jaringan mitra Bolu Bika Ambon Zulaikha dan kembangkan bisnis Anda bersama brand terpercaya
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <a href="/contact">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreLocations;
