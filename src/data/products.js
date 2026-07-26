// =============================================================
//  SHAURMAHOUSE — MENU DATA
//  Edit this file to add, change or remove products.
//  No component code needs to change.
//
//  Each product: { id, name, category, price, image, badge }
//  badge: "bestseller" | "new" | null
// =============================================================
import ovqat1 from "../assets/bivshteks.png";
import ovqat2 from "../assets/befstrogan.png";
import ovqat3 from "../assets/jiz.png";
import ovqat4 from "../assets/mastava.png";
import ovqat5 from "../assets/qaynatma sho'rva.png";
import ovqat6 from "../assets/qotirma.png";
import ovqat7 from "../assets/qozon kabob.png";
import pide1 from "../assets/xachapuri.png";
import pide2 from "../assets/pishloqli pide.png";
import pide3 from "../assets/assorti pide.png";
import pide4 from "../assets/farsh pide.png";
import turk1 from "../assets/bef fajita.png";
import turk2 from "../assets/bonfile.png";
import turk3 from "../assets/achchiq totli tovuq.png";
import pizza1 from "../assets/peperoni piza.png";
import pizza2 from "../assets/goshtli piza.png";
import pizza3 from "../assets/qazili piza.png";
import pizza4 from "../assets/assortli piza.png";
import pizza5 from "../assets/tovuqli.png";
import pizza6 from "../assets/qoziqorinli piza.png";
import hotdog1 from "../assets/hotdogoddiy.png";
import hotdog2 from "../assets/hotdogoshtli.png";
import hotdog3 from "../assets/soshot.png";
import hotdog4 from "../assets/chikenhot.png";
import lavash1 from "../assets/lavash.png";
import lavash2 from "../assets/tandur lavash.png";
import lavash3 from "../assets/tovuqlilav.png";
import drink1 from "../assets/moxito1.png";
import drink2 from "../assets/moxito2.png";
import drink3 from "../assets/moxito3.png";
import drink4 from "../assets/kompot.png";
import ocean from "../assets/ocean.png";
import salad1 from "../assets/sezar.png";
import salad2 from "../assets/mujskoy kapriz.png";
import salad3 from "../assets/salat4.png"; // Yoki faylning asl nomi qanday bo'lsa shuni yozing
import salad4 from "../assets/Sveji salat.png";
import kfs1 from "../assets/kfc.png";
import kfs2 from "../assets/special kfc.png";
import kfs3 from "../assets/achchiq kfc.png";
import fr1 from "../assets/kichik fri.png";
import fr2 from "../assets/katta fri.png";
import sandvich1 from "../assets/classic sandwich.png";
import sandvich2 from "../assets/qazilik sandwich.png";
import sandvich3 from "../assets/gohstli sandwich.png";
import sandvich4 from "../assets/tovuqli sandwich.png";
import choy1 from "../assets/kok choy.png";
import choy2 from "../assets/qora choy.png";
import choy3 from "../assets/dovchali choy.png";
import choy4 from "../assets/limon choy.png";
import choy5 from "../assets/malinali choy.png";
import sos1 from "../assets/barbeque sosu.png";
import sos2 from "../assets/gorchitsa.png";
import sos3 from "../assets/achchiq chili sous.png";
import sos4 from "../assets/sarimsoqli sous.png";




export const products = [
  // ───────────────────────── Milliy taomlar ─────────────────────────
  {
    id: 1,
    name: 'Bifshteks',
    category: 'Milliy Taomlar',
    price: 25000,
    image: ovqat1,
    badge: null,
  },
  {
    id: 2,
    name: 'Lazer Osh',
    category: 'Milliy Taomlar',
    price: 35000,
    image: 'https://s1.15min.lt/static/cache/MTAwMHg1MjMsNTUzeDMzOCw2MTYxNzksb3JpZ2luYWwsLGlkPTEwMzYyNjE4JmRhdGU9MjAyNSUyRjEwJTJGMTcsMjQyOTI4Njk1Ng==/plovas-68f1f2087af39.jpg',
    badge: null,
  },
  {
    id: 3,
    name: 'Befstrogan',
    category: 'Milliy Taomlar',
    price: 25000,
    image: ovqat2,
    badge: null,
  },
  {
    id: 4,
    name: 'Jiz',
    category: 'Milliy Taomlar',
    price: 30000,
    image: ovqat3,
    badge: null,
  },
    {
    id: 5,
    name: 'Mastava',
    category: 'Milliy Taomlar',
    price: 25000,
    image: ovqat4,
    badge: null,
  },
    {
    id: 6,
    name: 'Qotirma',
    category: 'Milliy Taomlar',
    price: 35000,
    image: ovqat5,
    badge: null,
  },
    {
    id: 7,
    name: 'Qotirma',
    category: 'Milliy Taomlar',
    price: 35000,
    image: ovqat6,
    badge: null,
  },

    {
    id: 8,
    name: 'Qozon Kabob',
    category: 'Milliy Taomlar',
    price: 25000,
    image: ovqat7,
    badge: null,
  },

  // ───────────────────────── Pidelar ─────────────────────────
  {
    id: 5,
    name: 'Xachapuri',
    category: 'Pidelar',
    price: 40000,
    image: pide1,
    badge: null,
  },
  {
    id: 6,
    name: 'Pishloqli Pide',
    category: 'Pidelar',
    price: 40000,
    image: pide2,
    badge: null,
  },
  {
    id: 7,
    name: 'Assorti Pide',
    category: 'Pidelar',
    price: 55000,
    image: pide3,
    badge: null,
  },
  {
    id: 8,
    name: 'Farsh Pide',
    category: 'Pidelar',
    price: 55000,
    image: pide4,
    badge: null,
  },

  // ───────────────────────── Burgerlar ─────────────────────────
  {
    id: 9,
    name: 'Bef Fajita',
    category: 'Turk Taomlari',
    price: 40000,
    image: turk1,
    badge: null,
  },
  {
    id: 10,
    name: 'Special Bonfile',
    category: 'Turk Taomlari',
    price: 38000,
    image: turk2,
    badge: null,
  },
  {
    id: 11,
    name: 'Achchiq totli tovuq',
    category: 'Turk Taomlari',
    price: 35000,
    image: turk3,
    badge: 'new',
  },
  // ───────────────────────── Lavash va Hot-Doglar ─────────────────────────
  {
    id: 13,
    name: 'Hot-Dog Oddiy',
    category: 'Lavash va Hot-Doglar',
   price: { small: 15000, medium: 18000,},
    image: hotdog1,
    badge: null,
  },
  {
    id: 14,
    name: 'Hot-Dog Go’shtli',
    category: 'Lavash va Hot-Doglar',
 price: { small: 18000, medium: 20000, large: 25000 },
    image: hotdog2,
    badge: null,
  },
    {
    id: 40,
    name: 'Hot-Dog Sasiskalik',
    category: 'Lavash va Hot-Doglar',
 price: { small: 15000, medium: 18000, large: 20000 },
    image: hotdog3,
    badge: null,
  }, 
   {
    id: 42,
    name: 'Hot-Dog Chiken',
    category: 'Lavash va Hot-Doglar',
 price: { small: 20000, medium: 25000,},
    image: hotdog4,
    badge: null,
  },
  {
    id: 15,
    name: 'Lavash Oddiy',
    category: 'Lavash va Hot-Doglar',
    price: { small: 30000, medium: 35000, large: 40000 },
    image: lavash1,
    badge: null,
  },
  {
    id: 19,
    name: 'Tandir Lavash',
    category: 'Lavash va Hot-Doglar',
    price: { small: 30000, medium: 35000, large: 40000 },
    image: lavash2,
    badge:  null,
  },
    {
    id: 20,
    name: 'Tovuqli Lavash',
    category: 'Lavash va Hot-Doglar',
    price: { small: 30000, medium: 35000, large: 40000, big: 45000 },
    image: lavash3,
    badge:  null,
  },
  // ─────────────────────────Pizzalar ─────────────────────────
  {
    id: 16,
    name: 'Peperoni Pizza',
    category: 'Pizzalar',
    price: { small: 80000, medium: 100000, large: 150000 },
    image: pizza1,
    badge: null,
  },
  {
    id: 17,
    name: 'Goshtli Pizza',
    category: 'Pizzalar',
    price: { small: 80000, medium: 100000, large: 150000 },
    image: pizza2,
    badge: null,
  },
  {
    id: 18,
    name: 'Qazili Pizza',
    category: 'Pizzalar',
    price: { small: 80000, medium: 100000, large: 150000 },
    image: pizza3,
    badge: null,
  },
  {
    id: 19,
    name: 'Assorti Pizza',
    category: 'Pizzalar',
    price: { small: 80000, medium: 100000, large: 150000 },
    image: pizza4,
    badge: 'bestseller',
  },
  {
    id: 20,
    name: 'Tovuqli Pizza',
    category: 'Pizzalar',
    price: { small: 80000, medium: 100000, large: 150000 },
    image: pizza5,
    badge: null,
  },
  {
    id: 21,
    name: 'Qoziqorinli Pizza',
    category: 'Pizzalar',
    price: { small: 80000, medium: 100000, large: 150000 },
    image: pizza6,
    badge: null,
  },

  // ───────────────────────── Moxitolar (Drinks) ─────────────────────────
  {
    id: 19,
    name: 'Moxito Lime',
    category: 'Moxitolar',
   price: { small: 15000, medium: 18000,},
    image: drink1,
    badge: null,
  },
  {
    id: 20,
    name: 'Moxito Qulupnay',
    category: 'Moxitolar',
   price: { small: 15000, medium: 18000,},
    image: drink2,
    badge: null,
  },
  {
    id: 21,
    name: ' Moxito Ocean',
    category: 'Moxitolar',
    price: { small: 15000, medium: 12000 },
    image: ocean,
    badge: null,
  },
    {
    id: 78,
    name: 'Kopmot',
    category: 'Moxitolar',
    price: { small: 15000, medium: 12000 },
    image: drink4,
    badge: null,
  },

  // ───────────────────────── Salatlar ─────────────────────────
  {
    id: 22,
    name: 'Sezar Salat',
    category: 'Salatlar',
    price: 25000,
    image: salad1,
    badge: 'bestseller',
  },
  {
    id: 23,
    name: 'Mujiskoy Kapriz',
    category: 'Salatlar',
    price: 25000,
    image: salad2,
    badge: null,
  },
  {
    id: 24,
    name: 'Gretskiy Salat',
    category: 'Salatlar',
    price: 30000,
    image: salad3,
    badge: null,
  },
  {
    id: 78,
    name: 'Sveji Salat',
    category: 'Salatlar',
    price: 15000,
    image: salad4,
    badge: null,
  },

  // ───────────────────────── Kfs & Fri ─────────────────────────
  {
    id: 25,
    name: 'Kfs',
    category: 'Kfs & Fri',
    price: 25000,
    image: kfs1,
    badge: null,
  },
  {
    id: 26,
    name: 'Special Kfs',
    category: 'Kfs & Fri',
    price: 30000,
    image: kfs2,
    badge: null,
  },
    {
    id: 90,
    name: 'Achchiq Kfs',
    category: 'Kfs & Fri',
    price: 25000,
    image: kfs3,
    badge: null,
  },
    {
    id: 91,
    name: 'Kichik Fri',
    category: 'Kfs & Fri',
    price: 15000,
    image: fr1,
    badge: null,
  },
    {
    id: 92,
    name: 'Katta Fri',
    category: 'Kfs & Fri',
    price: 20000,
    image: fr2,
    badge: null,
  },

  // ───────────────────────── Combo ─────────────────────────
  {
    id: 27,
    name: 'Classic Sandwich',
    category: 'Sandwichlar',
    price: 25000,
    image: sandvich1,
    badge: null,
  },
  {
    id: 28,
    name: 'Qazilik Sandwich',
    category: 'Sandwichlar',
    price: 30000,
    image: sandvich2,
    badge: null,
  },
  {
    id: 29,
    name: 'Go`shtli Sandwich',
    category: 'Sandwichlar',
    price: 30000,
    image: sandvich3,
    badge: null,
  },
  {
    id: 45,
    name: 'Tovuqli Sandwich',
    category: 'Sandwichlar',
    price: 25000,
    image: sandvich4,
    badge: null,
  },
  // ───────────────────────── Soslar (Sauces) ─────────────────────────
  {
    id: 30,
    name: 'Ko`k Choy',
    category: 'Choylar',
    price: 3000,
    image: choy1,
    badge: null,
  },
  {
    id: 31,
    name: 'Qora Choy',
    category: 'Choylar',
    price: 3000,
    image: choy2,
    badge: null,
  },
  {
    id: 32,
    name: 'Dovchali Choy',
    category: 'Choylar',
    price: 20000,
    image: choy3,
    badge: null,
  },
    {
    id: 33,
    name: 'Limon Choy',
    category: 'Choylar',
    price: 15000,
    image: choy4,
    badge: null,
  },
    {
    id: 34,
    name: 'Malinali Choy',
    category: 'Choylar',
    price: 20000,
    image: choy5,
    badge: null,
  },
//  ───────────────────────── Souslar (Sauces) ─────────────────────────
  {
    id: 35,
    name: 'Barbeque Sous',
    category: 'Souslar',
    price: 3000,
    image: sos1,
    badge: null,
  },
  {
    id: 36,
    name: 'Gorchitsa Sous',
    category: 'Souslar',
    price: 3000,
    image: sos2,
    badge: null,
  },
  {
    id: 37,
    name: 'Achiq chili Sous',
    category: 'Souslar',
    price: 5000,
    image: sos3,
    badge: null,
  },
  {
    id: 38,
    name: 'Sarimsoqli Sariq Sous',
    category: 'Souslar',
    price: 3000,
    image: sos4,
    badge: null,
  },
];

// Categories are derived from the product list, but we keep an explicit
// ordered list so the navigation order is stable and predictable.
export const categories = [
  'Milliy Taomlar',
  'Pidelar',
  'Turk Taomlari',
  'Lavash va Hot-Doglar',
  "Pizzalar",
  'Moxitolar',
  'Salatlar',
  'Kfs & Fri',
  'Sandwichlar',
  'Choylar',
  'Souslar',
];