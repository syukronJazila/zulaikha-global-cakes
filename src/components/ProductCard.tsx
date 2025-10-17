import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  isBestSeller?: boolean;
}

const ProductCard = ({ id, name, category, image, shortDesc, isBestSeller }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="group">
      <div className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          {isBestSeller && (
            <Badge className="absolute top-3 right-3 bg-secondary text-white">
              Best Seller
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div className="flex items-center text-white font-semibold">
              <span>Lihat Detail</span>
              <ArrowRight size={20} className="ml-2" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <Badge variant="secondary" className="mb-2 bg-accent text-secondary">
            {category}
          </Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{shortDesc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
