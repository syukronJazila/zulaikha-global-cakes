import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle, Share2, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<typeof allProducts[0] | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<typeof allProducts>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate database fetch
    const fetchProduct = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundProduct = allProducts.find(p => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products (same category, exclude current)
        const related = allProducts
          .filter(p => p.categoryId === foundProduct.categoryId && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      } else {
        navigate('/products');
      }
      
      setLoading(false);
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.name,
          text: product?.shortDesc,
          url: url,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(url);
      toast.success('Link berhasil disalin!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-8"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square bg-muted rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-10 bg-muted rounded w-3/4"></div>
                <div className="h-6 bg-muted rounded w-1/4"></div>
                <div className="h-20 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-primary transition-colors">Produk</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to={`/products?category=${product.categoryId}`} className="hover:text-primary transition-colors">
            {product.category}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent hover:border-muted'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <Badge variant="secondary" className="mb-3 bg-accent text-secondary">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-muted-foreground mb-6">{product.shortDesc}</p>

            <div className="border-t border-border pt-6 mb-6">
              <Tabs defaultValue="composition" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="composition">Komposisi</TabsTrigger>
                  <TabsTrigger value="info">Informasi</TabsTrigger>
                  <TabsTrigger value="taste">Rasa</TabsTrigger>
                </TabsList>
                <TabsContent value="composition" className="mt-4">
                  <div className="space-y-2">
                    {product.detailInfo.composition.split(',').map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item.trim()}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="info" className="mt-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Berat</span>
                      <span className="font-medium">{product.detailInfo.weight}</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Penyimpanan</span>
                      <span className="font-medium">{product.detailInfo.storage}</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Masa Kadaluarsa</span>
                      <span className="font-medium">{product.detailInfo.expired}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ukuran</span>
                      <span className="font-medium">{product.detailInfo.size}</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="taste" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.detailInfo.taste}
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Share Buttons */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Bagikan:</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="mr-2" />
                  Bagikan
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                size="lg"
              >
                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Hubungi Kami untuk Memesan
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full"
                size="lg"
              >
                <Link to="/locations">
                  <MapPin size={20} className="mr-2" />
                  Lihat Lokasi Toko
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Produk Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
