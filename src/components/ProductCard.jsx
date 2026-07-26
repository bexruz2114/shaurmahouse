import { motion } from 'framer-motion';
import { Star, Flame } from 'lucide-react';
import { formatPrice } from '../utils/format';

const badgeConfig = {
  bestseller: { label: 'Bestseller', icon: Flame, classes: 'bg-softyellow-400 text-charcoal' },
  new: { label: 'New', icon: Star, classes: 'bg-white/90 text-charcoal ring-1 ring-softyellow-300' },
};

export default function ProductCard({ product, onSelect }) {
  const badge = product.badge ? badgeConfig[product.badge] : null;
  const BadgeIcon = badge?.icon;

  // Narx obyekt bo'lsa (pizzalar), boshlang'ich kichik narxini olamiz, aks holda oddiy narx
  const displayPrice = product.price && typeof product.price === 'object' 
    ? product.price.small 
    : product.price;

  const isObjectPrice = product.price && typeof product.price === 'object';

  return (
    <motion.button
      layout
      onClick={() => onSelect(product)}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-soft ring-1 ring-beige/60 transition-shadow duration-300 hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-softyellow-400"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-beige">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {badge && (
          <span
            className={`absolute left-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-soft ${badge.classes}`}
          >
            {BadgeIcon && <BadgeIcon className="h-3 w-3" />}
            {badge.label}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-charcoal">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-charcoal/55">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-1">
            {isObjectPrice && <span className="text-xs text-charcoal/50">dan</span>}
            <span className="text-base font-bold text-charcoal">
              {formatPrice(displayPrice)}
            </span>
          </div>
          <span className="text-xs font-medium text-charcoal/40 transition-colors group-hover:text-softyellow-500">
            Details →
          </span>
        </div>
      </div>
    </motion.button>
  );
}