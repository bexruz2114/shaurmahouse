import { AnimatePresence, motion } from 'framer-motion';
import { SearchX } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onSelect, search, activeCategory }) {
  const isSearching = search.trim().length > 0;
  const heading = isSearching
    ? `Results for “${search.trim()}”`
    : activeCategory;

  return (
    <section className="px-3 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          key={heading}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-4 sm:mb-6 font-display text-xl font-bold text-charcoal sm:text-3xl px-1"
        >
          {heading}
        </motion.h2>

        {products.length === 0 ? (
          <EmptyState query={search} />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProductCard product={product} onSelect={onSelect} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function EmptyState({ query }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-16 text-center shadow-soft ring-1 ring-beige/60">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-beige">
        <SearchX className="h-7 w-7 text-charcoal/40" />
      </div>
      <p className="mt-4 font-display text-xl font-semibold text-charcoal">
        No dishes found
      </p>
      <p className="mt-1 max-w-xs text-sm text-charcoal/55">
        We couldn’t find anything matching “{query}”. Try another name or browse the categories.
      </p>
    </div>
  );
}