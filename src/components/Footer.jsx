import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { productCategories } from '../data/products';

const companyLinks = [
  { to: '/about', label: 'เกี่ยวกับเรา' },
  { to: '/products', label: 'สินค้าทั้งหมด' },
  { to: '/news', label: 'ข่าวสารและบทความ' },
  { to: '/contact', label: 'ติดต่อทีมวิศวกร' },
];

export default function Footer() {
  return (
    <footer className="bg-[#08152a] text-white">
      <div className="border-b border-white/10">
        <div className="site-container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold">ต้องการเลือกเครื่องมือให้ตรงกับงาน?</p>
            <p className="mt-1 text-sm text-slate-400">ส่งรายละเอียดวัสดุ เครื่องจักร และลักษณะงานให้ทีมเราช่วยตรวจสอบ</p>
          </div>
          <Link to="/contact" className="btn-light shrink-0">
            ปรึกษาทีมงาน <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="site-container py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.35fr_0.8fr_1fr_1.25fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              aria-label="A-Tech Precision Tools — หน้าหลัก"
            >
              <BrandLogo inverse markClassName="h-11 w-11" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              เครื่องมือตัดคาร์ไบด์และโซลูชันงานตัดเฉือนสำหรับภาคการผลิต พร้อมคำแนะนำด้านการเลือกใช้และบริการหลังการขาย
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Authorized GESAC Distributor
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">บริษัท</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">หมวดสินค้า</h3>
            <ul className="mt-5 space-y-3">
              {productCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">ติดต่อ</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>66/234 ซอยเฉลิมพระเกียรติ ร.9 87 เขตประเวศ กรุงเทพมหานคร 10250</span>
              </li>
              <li>
                <a href="tel:+66824282653" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-blue-400" /> 082-428-2653
                </a>
              </li>
              <li>
                <a href="mailto:atechtools.sales@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-blue-400" /> atechtools.sales@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2568 A-Tech Tools. สงวนลิขสิทธิ์ทุกประการ</p>
          <p>Precision tooling for better machining</p>
        </div>
      </div>
    </footer>
  );
}
