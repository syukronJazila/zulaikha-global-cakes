import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  city: string;
  text: string;
  rating: number;
  photo: string;
}

const TestimonialCard = ({ name, city, text, rating, photo }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <Quote className="text-primary mb-4" size={32} />
      <p className="text-muted-foreground italic mb-4">{text}</p>
      <div className="flex items-center mb-3">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={16} className="fill-primary text-primary" />
        ))}
      </div>
      <div className="flex items-center">
        <img
          src={photo}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
