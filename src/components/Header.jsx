import { Phone, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import logo1 from "../assets/logo1.png";
import useScrolled from '../hooks/useScrolled';

export default function Header({ categories, activeCategory, onSelectCategory, onOpenMenu, CONTACT }) {
  const scrolled = useScrolled(40);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 shadow-soft backdrop-blur-md'
          : 'bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        {logo1 && (
          <a href="#hero" className="flex items-center">
            <img src={logo1} alt="Logo" className="h-9 w-9 lg:h-11 lg:w-11" />
          </a>
        )}

        {/* Desktop categories */}
        <nav className="hidden items-center gap-1 lg:flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-softyellow-300 text-charcoal shadow-soft'
                  : 'text-charcoal/70 hover:bg-beige hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Right side — socials + menu */}
        <div className="flex items-center gap-1.5">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal/70 transition-all duration-200 hover:bg-softyellow-300 hover:text-charcoal"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal/70 transition-all duration-200 hover:bg-softyellow-300 hover:text-charcoal"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            aria-label="Call us"
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal/70 transition-all duration-200 hover:bg-softyellow-300 hover:text-charcoal"
          >
            <Phone className="h-5 w-5" />
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-charcoal transition-all duration-200 hover:bg-softyellow-300 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
