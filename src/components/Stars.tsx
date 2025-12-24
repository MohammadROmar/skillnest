import { Star } from 'lucide-react';

export default function Stars({ size }: { size: string }) {
  return (
    <div className="flex items-center justify-center gap-0.5 lg:justify-start">
      <Star className={`fill-yellow-500 text-yellow-500 ${size}`} />
      <Star className={`fill-yellow-500 text-yellow-500 ${size}`} />
      <Star className={`fill-yellow-500 text-yellow-500 ${size}`} />
      <Star className={`fill-yellow-500 text-yellow-500 ${size}`} />
      <Star className={`fill-yellow-500 text-yellow-500 ${size}`} />
    </div>
  );
}
