import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const navLinks = [
  { to: '/', label: 'หน้าหลัก' },
  { to: '/about', label: 'เกี่ยวกับเรา' },
  { to: '/products', label: 'สินค้า' },
  { to: '/news', label: 'ข่าวสาร' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_20px_rgba(15,23,42,0.05)] backdrop-blur-xl">
      <div className="hidden bg-[#09172d] text-slate-300 lg:block">
        <div className="site-container flex h-8 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">Authorized distributor of GESAC Tools in Thailand</p>
          <div className="flex items-center gap-5">
            <a href="tel:+66824282653" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5 text-blue-400" /> 082-428-2653
            </a>
            <a href="mailto:atechtools.sales@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5 text-blue-400" /> atechtools.sales@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="site-container">
        <div className="flex h-[4.5rem] items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="A-Tech Precision Tools — หน้าหลัก"
          >
            <BrandLogo className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-7 md:flex">
            <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-3 after:-bottom-[1.05rem] after:h-0.5 after:bg-blue-600 after:transition-transform ${
                    isActive
                      ? 'text-blue-700 after:scale-x-100'
                      : 'text-slate-600 hover:text-slate-950 after:scale-x-0'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            </nav>
            <Link to="/contact" className="btn-primary min-h-0 px-4 py-2.5">
              ขอใบเสนอราคา <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-md text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="site-container space-y-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              ขอใบเสนอราคา <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
