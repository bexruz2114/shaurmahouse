import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Send, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ CONTACT }) {
  return (
    <footer className="mt-16 border-t border-beige bg-beige/40 px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start">
          
          {/* 1. Brend va Logo */}
          <div className="flex flex-col items-start space-y-4 rounded-3xl bg-white/60 p-6 shadow-soft ring-1 ring-beige/60 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-charcoal/60">
              Mazali shaurma, pide va boshqa milliy taomlar — buyurtma asosida tez va sifatli tayyorlanadi.
            </p>
          </div>

          {/* 2. Bizning manzil */}
          <div className="rounded-3xl bg-white/60 p-6 shadow-soft ring-1 ring-beige/60 backdrop-blur-sm">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-charcoal/50">
              Bizning manzil
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-charcoal/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-softyellow-600" />
                <span>Toʻraqoʻrgʻon, Namangan viloyati, Oʻzbekiston</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-softyellow-600" />
                <a href="tel:+998552525556" className="font-medium transition-colors hover:text-charcoal">
                  +998-55-252-55-56
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-softyellow-600" />
                <span>8:00 - 03:00</span>
              </li>
            </ul>
          </div>

          {/* 3. Bizni kuzating */}
          <div className="rounded-3xl bg-white/60 p-6 shadow-soft ring-1 ring-beige/60 backdrop-blur-sm">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-charcoal/50">
              Bizni kuzating
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/shaurma_housee?igsh=MWhha3l3eG1zbDFpMA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-charcoal shadow-soft transition-all duration-200 hover:bg-softyellow-300 hover:scale-105"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/Shaurmahouse_restaurant_bot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-charcoal shadow-soft transition-all duration-200 hover:bg-softyellow-300 hover:scale-105"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 4. Xarita */}
          <div className="rounded-3xl bg-white/60 p-6 shadow-soft ring-1 ring-beige/60 backdrop-blur-sm">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-charcoal/50">
              Xarita
            </h4>
            <p className="mt-2 text-sm text-charcoal/60">Bizni xaritadan osongina toping.</p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.app.goo.gl/2MrmwpxR1rzCLwqVA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-charcoal px-5 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-charcoal/90"
            >
              Google Xaritada ochish
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-beige/80 pt-6 text-center text-xs text-charcoal/50 sm:flex-row sm:text-left">
          <p>© 2026 SHAURMAHOUSE. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}