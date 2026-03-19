"use client";

import React, { useEffect, useRef, useState } from 'react';
import {
  Search,
  ShoppingCart,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Plus,
  Minus,
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation, useNavigate } from '@/lib/router';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const Announcement = () => (
  <div className="h-9 fixed top-0 left-0 right-0 z-[1200] bg-primary text-white/90 border-b border-white/10 flex items-center overflow-hidden">
    <div className="flex gap-10 whitespace-nowrap animate-marquee px-[100%]">
      {[1, 2].map((i) => (
        <React.Fragment key={i}>
          <span className="text-xs font-semibold tracking-wider">
            <strong className="text-secondary tracking-[2px] uppercase mr-2">Free Delivery</strong> 
            on orders over ₹999
          </span>
          <span className="text-xs font-semibold tracking-wider">
            <strong className="text-secondary tracking-[2px] uppercase mr-2">Easy Returns</strong> 
            within 14 days
          </span>
          <span className="text-xs font-semibold tracking-wider">
            <strong className="text-secondary tracking-[2px] uppercase mr-2">New</strong> 
            The Velvet Retreat Collection
          </span>
          <span className="text-xs font-semibold tracking-wider">
            <strong className="text-secondary tracking-[2px] uppercase mr-2">White-Glove</strong> 
            Assembly Available
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Navbar = ({ theme, toggleTheme, onSearchOpen }: { theme: string, toggleTheme: () => void, onSearchOpen: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMegaOpen, setIsMobileMegaOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`h-[74px] flex justify-between items-center px-[5%] fixed w-full top-9 z-[1100] transition-all duration-220 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-md' : 'bg-background/80 backdrop-blur-md'}`}>
        <div className="font-heading text-[28px] font-bold tracking-[2px] uppercase select-none cursor-pointer">
          <Link href="/">NestCraft</Link>
        </div>

        <div className="hidden lg:flex gap-10 items-center">
          <div 
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <Link href="/shop">
              <button className="text-foreground text-[11px] font-extrabold uppercase tracking-[2px] py-2.5 flex items-center gap-1 hover:text-secondary transition-colors">
                Shop <ChevronDown size={14} />
              </button>
            </Link>
            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 top-[52px] w-[min(1050px,92vw)] bg-surface border border-border shadow-2xl p-6 rounded-lg"
                >
                  <div className="grid grid-cols-[1.25fr_1fr_1fr_1fr_1fr] gap-5">
                    <div className="pr-2.5 border-r border-border/90">
                      <div className="inline-flex gap-2.5 items-center text-[11px] tracking-[2px] uppercase text-secondary font-black">
                        <span>Furniture</span><span className="opacity-50">•</span><span>Curated</span>
                      </div>
                      <h3 className="font-heading text-[22px] font-bold leading-tight mt-2.5">Design-led essentials for every room.</h3>
                      <p className="text-xs text-muted mt-2.5 max-w-[240px] font-semibold">Explore best-selling silhouettes, artisan materials, and modern classics crafted for timeless living.</p>
                      <button className="mt-[18px] bg-primary text-white px-[18px] h-11 rounded-full text-[14px] font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all">Explore Collections</button>
                    </div>

                    {[
                      { title: 'Living Room', id: 'living-room', sub: 'Sofas, accent chairs, coffee tables', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200' },
                      { title: 'Bedroom', id: 'bedroom', sub: 'Beds, nightstands, soft textiles', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200' },
                      { title: 'Dining Room', id: 'dining-room', sub: 'Tables, chairs, sideboards', img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&q=80&w=1200' },
                      { title: 'Decor', id: 'decor', sub: 'Lighting, ceramics, wall accents', img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&q=80&w=1200' }
                    ].map((item) => (
                      <Link key={item.title} href={`/category/${item.id}`} className="grid gap-2.5 group">
                        <div className="h-[140px] overflow-hidden rounded-md border border-border bg-muted/10">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-240 group-hover:scale-105" />
                        </div>
                        <div className="font-heading text-[22px] font-bold tracking-tight leading-tight">{item.title}</div>
                        <div className="text-xs text-muted font-bold">{item.sub}</div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/shop" className="text-foreground text-[11px] font-extrabold uppercase tracking-[2px] py-2.5 hover:text-secondary transition-colors">Shop</Link>
          <Link href="/services" className="text-foreground text-[11px] font-extrabold uppercase tracking-[2px] py-2.5 hover:text-secondary transition-colors">Services</Link>
          <Link href="/blog" className="text-foreground text-[11px] font-extrabold uppercase tracking-[2px] py-2.5 hover:text-secondary transition-colors">Journal</Link>
          <Link href="/about" className="text-foreground text-[11px] font-extrabold uppercase tracking-[2px] py-2.5 hover:text-secondary transition-colors">About</Link>
          <Link href="/contact" className="text-foreground text-[11px] font-extrabold uppercase tracking-[2px] py-2.5 hover:text-secondary transition-colors">Contact</Link>
        </div>

        <div className="flex gap-2.5 items-center">
          <button 
            onClick={onSearchOpen}
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-muted/10 transition-all text-foreground"
          >
            <Search size={20} />
          </button>
          <Link 
            href="/cart"
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-muted/10 transition-all text-foreground relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-white text-[10px] font-black rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          <button 
            onClick={toggleTheme}
            className="inline-flex items-center gap-2.5 h-[42px] px-[14px] rounded-full border border-border bg-surface/70 hover:border-secondary/50 transition-all text-foreground text-[11px] font-extrabold uppercase tracking-wider"
          >
            {theme === 'dark' ? <Sun size={18} className="text-secondary" /> : <Moon size={18} className="text-secondary" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <button 
            className="lg:hidden w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-muted/10 transition-all text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-[110px] left-0 right-0 bg-background/85 backdrop-blur-md border-b border-border p-[18px_5%_26px] z-[1099] lg:hidden"
            >
              <button 
                className="w-full flex justify-between items-center py-3.5 text-foreground text-[12px] font-black uppercase tracking-[2px]"
                onClick={() => setIsMobileMegaOpen(!isMobileMegaOpen)}
              >
                Shop 
                <span className="flex gap-2 items-center">
                  <small className="text-muted font-black tracking-[2px]">MEGA</small>
                  {isMobileMegaOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {isMobileMegaOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden grid gap-3 pb-4"
                  >
                    {[
                      { title: 'Living Room', id: 'living-room', sub: 'Sofas, chairs, tables' },
                      { title: 'Bedroom', id: 'bedroom', sub: 'Beds, nightstands, textiles' },
                      { title: 'Dining Room', id: 'dining-room', sub: 'Tables, chairs, storage' },
                      { title: 'Decor', id: 'decor', sub: 'Lighting, ceramics, accents' }
                    ].map(item => (
                      <Link key={item.title} href={`/category/${item.id}`} className="text-foreground font-extrabold" onClick={() => setIsMobileMenuOpen(false)}>
                        {item.title} <small className="block text-muted font-bold mt-0.5">{item.sub}</small>
                      </Link>
                    ))}
                    <div className="h-px bg-border my-2" />
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/shop" className="flex justify-between items-center py-3.5 text-foreground text-[12px] font-black uppercase tracking-[2px]">Shop <ArrowRight size={16} /></Link>
              <Link href="/services" className="flex justify-between items-center py-3.5 text-foreground text-[12px] font-black uppercase tracking-[2px]">Services <ArrowRight size={16} /></Link>
              <Link href="/blog" className="flex justify-between items-center py-3.5 text-foreground text-[12px] font-black uppercase tracking-[2px]">Journal <ArrowRight size={16} /></Link>
              <Link href="/about" className="flex justify-between items-center py-3.5 text-foreground text-[12px] font-black uppercase tracking-[2px]">About <ArrowRight size={16} /></Link>
              <Link href="/contact" className="flex justify-between items-center py-3.5 text-foreground text-[12px] font-black uppercase tracking-[2px]">Contact <ArrowRight size={16} /></Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[110px] bg-black/35 z-[1098] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredProducts = query.length > 1 
    ? products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSelect = (id: number) => {
    navigate(`/product/${id}`);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-background/95 backdrop-blur-xl flex flex-col items-center pt-32 px-[5%]"
        >
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-all"
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-3xl">
            <div className="relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted" size={24} />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for furniture, decor, or collections..."
                className="w-full h-20 pl-16 pr-8 rounded-3xl bg-surface border border-border outline-none focus:border-secondary transition-all text-2xl font-bold placeholder:text-muted/30"
              />
            </div>

            <div className="space-y-8">
              {query.length > 1 ? (
                <>
                  <h4 className="text-[11px] font-black uppercase tracking-[3px] text-muted">Search Results ({filteredProducts.length})</h4>
                  <div className="grid gap-4">
                    {filteredProducts.map(product => (
                      <button 
                        key={product.id}
                        onClick={() => handleSelect(product.id)}
                        className="flex items-center gap-6 p-4 rounded-2xl border border-border bg-surface hover:border-secondary transition-all text-left group"
                      >
                        <div className="w-16 h-20 rounded-lg overflow-hidden border border-border bg-background">
                          <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-lg tracking-tight group-hover:text-secondary transition-colors">{product.title}</p>
                          <p className="text-xs text-muted font-bold uppercase tracking-wider">{product.category}</p>
                        </div>
                        <div className="ml-auto font-black text-secondary">{product.price}</div>
                      </button>
                    ))}
                    {filteredProducts.length === 0 && (
                      <div className="py-12 text-center">
                        <p className="text-xl font-bold text-muted">No results found for "{query}"</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-[11px] font-black uppercase tracking-[3px] text-muted">Popular Categories</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Living Room', 'Bedroom', 'Dining Room', 'Lighting', 'Decor'].map(cat => (
                      <Link 
                        key={cat}
                        href={`/category/${cat.toLowerCase().replace(' ', '-')}`}
                        onClick={onClose}
                        className="px-6 h-12 rounded-full border border-border bg-surface flex items-center font-bold hover:border-secondary hover:text-secondary transition-all"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer className="bg-surface border-t border-border pt-20 pb-10 px-[5%]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <div className="font-heading text-[28px] font-bold tracking-[2px] uppercase select-none">
          NestCraft
        </div>
        <p className="text-muted font-semibold max-w-[300px]">
          Sculpting personal spaces with design-led essentials. Minimalist furniture crafted for the modern home.
        </p>
        <div className="flex gap-4">
          {[
            { name: 'Instagram', icon: Instagram, url: '#' },
            { name: 'Facebook', icon: Facebook, url: '#' },
            { name: 'Twitter', icon: Twitter, url: '#' },
            { name: 'Youtube', icon: Youtube, url: '#' }
          ].map(social => (
            <a key={social.name} href={social.url} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
              <span className="sr-only">{social.name}</span>
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[2px] text-foreground mb-6">Shop</h4>
        <ul className="space-y-4">
          {['Living Room', 'Bedroom', 'Dining Room', 'Home Office', 'Decor'].map(item => (
            <li key={item}>
              <Link href="/shop" className="text-muted font-bold hover:text-secondary transition-colors">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[2px] text-foreground mb-6">Company</h4>
        <ul className="space-y-4">
          {[
            { name: 'Our Story', path: '/about' },
            { name: 'Craftsmanship', path: '/about' },
            { name: 'Sustainability', path: '/about' },
            { name: 'Journal', path: '/blog' },
            { name: 'Contact', path: '/contact' }
          ].map(item => (
            <li key={item.name}>
              <Link href={item.path} className="text-muted font-bold hover:text-secondary transition-colors">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[2px] text-foreground mb-6">Support</h4>
        <ul className="space-y-4">
          {[
            { name: 'Shipping & Delivery', path: '/faq' },
            { name: 'Returns & Exchanges', path: '/faq' },
            { name: 'Care Guide', path: '/faq' },
            { name: 'FAQ', path: '/faq' },
            { name: 'Privacy Policy', path: '/faq' }
          ].map(item => (
            <li key={item.name}>
              <Link href={item.path} className="text-muted font-bold hover:text-secondary transition-colors">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="huge-watermark">NESTCRAFT</div>

    <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[11px] font-black uppercase tracking-[2px] text-muted">
        © 2026 NestCraft Interiors. All rights reserved.
      </p>
      <div className="flex gap-8 items-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[11px] font-black uppercase tracking-[2px] text-muted hover:text-secondary transition-colors flex items-center gap-2"
        >
          Back to Top <ArrowUp size={14} />
        </button>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-[11px] font-black uppercase tracking-[2px] text-muted hover:text-secondary transition-colors">Terms</a>
          <a href="#" className="text-[11px] font-black uppercase tracking-[2px] text-muted hover:text-secondary transition-colors">Privacy</a>
          <a href="#" className="text-[11px] font-black uppercase tracking-[2px] text-muted hover:text-secondary transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);



export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSearchOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary/30">
      <Announcement />
      <Navbar theme={theme} toggleTheme={toggleTheme} onSearchOpen={() => setIsSearchOpen(true)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <main className="pt-[110px]">{children}</main>
      <Footer />
    </div>
  );
}
