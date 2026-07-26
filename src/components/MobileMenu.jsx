import { AnimatePresence, motion } from 'framer-motion';
import { X, Instagram, Send, Phone } from 'lucide-react';
import Logo from './Logo';

export default function MobileMenu({ open, categories, activeCategory, onSelectCategory, onClose, CONTACT }) {
  const handleSelect = (cat) => {
    onSelectCategory(cat);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-sm lg:hidden"
          />

          {/* Slide-down panel */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 top-0 z-50 max-h-[85vh] overflow-y-auto rounded-b-3xl bg-cream px-5 pb-8 pt-4 shadow-soft-xl lg:hidden"
          >
            <div className="mb-4 flex items-center justify-between">
              <Logo className="h-9 w-9" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-beige text-charcoal transition-colors hover:bg-softyellow-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-1.5">
              {categories.map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  onClick={() => handleSelect(cat)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-base font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-softyellow-300 text-charcoal shadow-soft'
                      : 'bg-beige/60 text-charcoal/80 hover:bg-beige'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 border-t border-beige pt-6">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-charcoal transition-colors hover:bg-softyellow-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-charcoal transition-colors hover:bg-softyellow-300">
                <Send className="h-5 w-5" />
              </a>
              <a href={`tel:${CONTACT.phoneRaw}`} aria-label="Call" className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-charcoal transition-colors hover:bg-softyellow-300">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
