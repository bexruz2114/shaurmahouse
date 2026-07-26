import { motion } from 'framer-motion';

export default function CategoryBar({ categories, active, onSelect, searchActive }) {
  // When the user is actively searching we hide the category bar — the
  // grid already shows filtered results across all categories.
  if (searchActive) return null;

  return (
    <div className="sticky top-16 z-30 -mx-4 bg-cream/85 px-4 py-3 backdrop-blur-md sm:top-16 sm:-mx-6 sm:px-6 lg:top-20">
      <div className="mx-auto max-w-6xl">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelect(cat)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-charcoal' : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-category"
                    className="absolute inset-0 rounded-full bg-softyellow-300 shadow-soft"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
