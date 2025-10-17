import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface StoreCardProps {
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  whatsapp: string;
  operatingHours: string;
  type: 'main' | 'branch' | 'reseller';
  coordinates: { lat: number; lng: number };
}

const StoreCard = ({
  name,
  address,
  city,
  country,
  phone,
  whatsapp,
  operatingHours,
  type,
  coordinates
}: StoreCardProps) => {
  const typeLabels = {
    main: 'Pusat',
    branch: 'Cabang',
    reseller: 'Reseller'
  };

  const getGoogleMapsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  };

  return (
    <div className="bg-card border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow p-6 rounded-lg">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start">
          <MapPin className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <Badge variant="secondary" className="mt-1">
              {typeLabels[type]}
            </Badge>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4 ml-7">
        {address}, {city}, {country}
      </p>

      <div className="space-y-2 mb-4 ml-7">
        <div className="flex items-center text-sm">
          <Phone size={16} className="mr-2 text-muted-foreground" />
          <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
            {phone}
          </a>
        </div>
        <div className="flex items-center text-sm">
          <MessageCircle size={16} className="mr-2 text-secondary" />
          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            {whatsapp}
          </a>
        </div>
        <div className="flex items-center text-sm">
          <Clock size={16} className="mr-2 text-muted-foreground" />
          <span className="text-muted-foreground">{operatingHours}</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1"
        >
          <a href={getGoogleMapsUrl()} target="_blank" rel="noopener noreferrer">
            <MapPin size={16} className="mr-2" />
            Petunjuk Arah
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          className="flex-1 bg-secondary hover:bg-secondary/90"
        >
          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=Halo,%20saya%20ingin%20informasi%20tentang%20produk%20Zulaikha`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} className="mr-2" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StoreCard;
