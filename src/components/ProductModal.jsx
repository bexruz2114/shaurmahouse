import { AnimatePresence, motion } from 'framer-motion';
import { X, Star, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatPrice } from '../utils/format';

const badgeConfig = {
  bestseller: { label: 'Bestseller', icon: Flame, classes: 'bg-softyellow-400 text-charcoal' },
  new: { label: 'New', icon: Star, classes: 'bg-white/90 text-charcoal ring-1 ring-softyellow-300' },
};

export default function ProductModal({ product, onClose }) {
  // Massivdagi 1-narxning indeksi (0) bo'yicha boshlanadi
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!product) return;
    setSelectedIndex(0);
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  const badge = product?.badge ? badgeConfig[product.badge] : null;
  const BadgeIcon = badge?.icon;

  // Narx massiv, obyekt yoki oddiy son ekanligini aniqlab olish
  const getPricesArray = () => {
    if (!product.price) return [];
    if (Array.isArray(product.price)) return product.price;
    if (typeof product.price === 'object') return Object.values(product.price);
    return [product.price];
  };

  const prices = getPricesArray();
  const currentPrice = prices[selectedIndex] !== undefined ? prices[selectedIndex] : prices[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.98 }}
          className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-cream shadow-soft-xl sm:rounded-3xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-soft transition-colors hover:bg-softyellow-300"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl bg-beige sm:aspect-[16/10]">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            {badge && (
              <span className={`absolute left-4 top-4 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold shadow-soft ${badge.classes}`}>
                {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
                {badge.label}
              </span>
            )}
          </div>

          {/* Body */}
          <div className="p-6 sm:p-7">
            <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
              {product.name}
            </h2>

            {/* Narx variantlarini tanlash tugmalari (so'zlar o'rniga to'g'ridan-to'g'ri narxlar chiqadi) */}
            {prices.length > 1 && (
              <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                  Narxni tanlang
                </span>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {prices.map((priceVal, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className={`rounded-2xl py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                        selectedIndex === index
                          ? 'bg-softyellow-400 text-charcoal shadow-soft ring-2 ring-softyellow-500'
                          : 'bg-white text-charcoal/70 hover:bg-beige/50'
                      }`}
                    >
                      {formatPrice(priceVal)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7 flex items-center justify-between border-t border-beige pt-5">
              <span className="text-sm text-charcoal/50">Tanlangan narx</span>
              <span className="font-display text-2xl font-bold text-charcoal">
                {formatPrice(currentPrice)}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}