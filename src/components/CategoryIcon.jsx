import {
  AlignHorizontalSpaceAround,
  CircleDotDashed,
  Disc3,
  RefreshCw,
  Sparkles,
  Wrench,
} from 'lucide-react';

const categoryIcons = {
  milling: Disc3,
  turning: RefreshCw,
  drilling: CircleDotDashed,
  threading: AlignHorizontalSpaceAround,
  grooving: Wrench,
  special: Sparkles,
};

export default function CategoryIcon({ category, className = 'h-6 w-6' }) {
  const Icon = categoryIcons[typeof category === 'string' ? category : category.id] || Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
