import { useMemo, useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { products, categories } from './data/products';

const CONTACT = {
  address: '12 Navoi Street, Tashkent, Uzbekistan',
  phone: '+998 90 123 45 67',
  phoneRaw: '+998901234567',
  hours: 'Open daily · 10:00 — 23:00',
  instagram: 'https://instagram.com',
  telegram: 'https://telegram.org',
  maps: 'https://maps.google.com',
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const searchActive = search.trim().length > 0;

  const visibleProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    const safeProducts = products || [];

    if (q) {
      return safeProducts.filter((p) => {
        const name = p?.name?.toLowerCase() || '';
        const description = p?.description?.toLowerCase() || '';
        const category = p?.category?.toLowerCase() || '';
        const ingredients = p?.ingredients || [];

        return (
          name.includes(q) ||
          description.includes(q) ||
          category.includes(q) ||
          ingredients.some((i) => (i?.toLowerCase() || '').includes(q))
        );
      });
    }
    return safeProducts.filter((p) => p?.category === activeCategory);
  }, [search, activeCategory]);

  const handleSelectCategory = (cat) => {
    setSearch('');
    setActiveCategory(cat);
    requestAnimationFrame(() => {
      const grid = document.getElementById('menu');
      if (grid) {
        const top = grid.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenMenu={() => setMenuOpen(true)}
        CONTACT={CONTACT}
        search={search}
        onSearchChange={setSearch}
      />

      <MobileMenu
        open={menuOpen}
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onClose={() => setMenuOpen(false)}
        CONTACT={CONTACT}
      />

      <main>
        <Hero search={search} onSearchChange={setSearch} />

        <div id="menu" className="relative">
          <CategoryBar
            categories={categories}
            active={activeCategory}
            onSelect={handleSelectCategory}
            searchActive={searchActive}
          />

          <ProductGrid
            products={visibleProducts}
            onSelect={setSelectedProduct}
            search={search}
            activeCategory={activeCategory}
          />
        </div>
      </main>

      <Footer CONTACT={CONTACT} />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <ScrollToTop />
    </div>
  );
}