import { motion } from 'framer-motion';
import logo1 from "../assets/logo1.png";

export default function Hero({ search, onSearchChange }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:pt-20"
    >
      {/* subtle decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-10 h-64 w-64 rounded-full bg-softyellow-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-20 h-56 w-56 rounded-full bg-softyellow-300/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Logo emblem with border-radius */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex h-28 w-28 items-center justify-center rounded-3xl overflow-hidden bg-white shadow-soft sm:h-32 sm:w-32"
        >
          <img src={logo1} alt="Logo" className="h-full w-full object-cover" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
        >
          SHAURMA<span className="text-gradient-gold">HOUSE</span>
        </motion.h1>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 w-full max-w-md"
        >
          <SearchInput value={search} onChange={onSearchChange} />
        </motion.div>
      </div>
    </section>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal/40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search the menu…  e.g. pida"
        aria-label="Search menu"
        className="w-full rounded-2xl border border-beige bg-white py-3.5 pl-12 pr-4 text-sm text-charcoal shadow-soft outline-none transition-all duration-200 placeholder:text-charcoal/35 focus:border-softyellow-400 focus:shadow-soft-lg focus:ring-2 focus:ring-softyellow-300/40 sm:text-base"
      />
    </div>
  );
}