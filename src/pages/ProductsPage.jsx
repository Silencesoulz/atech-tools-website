import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { productCategories } from '../data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);

  const active = productCategories.find((c) => c.id === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0d2045] to-[#1a3a6e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">สินค้าของเรา</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">เครื่องมือตัดครบวงจร</h1>
          <p className="text-blue-100 text-xl max-w-xl mx-auto">
            สินค้ากว่า 5,000 รายการ ครอบคลุมทุกประเภทงานตัดเฉือน
          </p>
        </div>
      </section>

      {/* Category Tabs + Detail */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 pb-4">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#0d2045] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          {active && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{active.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0d2045]">{active.name}</h2>
                    <p className="text-gray-400 text-sm">{active.nameEn}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{active.description}</p>
                <h3 className="font-semibold text-[#0d2045] mb-3">ผลิตภัณฑ์ในหมวดหมู่นี้:</h3>
                <ul className="space-y-2 mb-8">
                  {active.products.map((p) => (
                    <li key={p.series} className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span><span className="font-semibold text-[#0d2045]">{p.series}</span> — {p.desc}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0d2045] hover:bg-[#1a3a6e] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  สอบถามสินค้า <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <img
                  src={active.image}
                  alt={active.name}
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Products Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0d2045]">หมวดหมู่สินค้าทั้งหมด</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className="font-bold text-[#0d2045] text-sm">{cat.name}</h3>
                  </div>
                  <p className="text-gray-400 text-xs">{cat.nameEn}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#0d2045] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">การประยุกต์ใช้งาน</p>
            <h2 className="text-3xl font-bold text-white">วัสดุงานที่รองรับ</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'เหล็กกล้า', sub: 'Steel', color: 'bg-gray-500' },
              { name: 'สแตนเลส', sub: 'Stainless', color: 'bg-blue-500' },
              { name: 'เหล็กหล่อ', sub: 'Cast Iron', color: 'bg-orange-500' },
              { name: 'อลูมิเนียม', sub: 'Aluminum', color: 'bg-sky-400' },
              { name: 'ไทเทเนียม', sub: 'Titanium', color: 'bg-purple-500' },
              { name: 'วัสดุพิเศษ', sub: 'Superalloy', color: 'bg-rose-500' },
            ].map((mat) => (
              <div key={mat.name} className="text-center">
                <div className={`w-14 h-14 ${mat.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-xs">{mat.sub.slice(0, 2)}</span>
                </div>
                <div className="text-white font-semibold text-sm">{mat.name}</div>
                <div className="text-blue-300 text-xs">{mat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0d2045] mb-4">ไม่พบสินค้าที่ต้องการ?</h2>
          <p className="text-gray-600 text-lg mb-8">ติดต่อทีมงานเราเพื่อสอบถามสินค้าตามความต้องการเฉพาะของคุณ</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0d2045] hover:bg-[#1a3a6e] text-white px-8 py-3 rounded-lg font-bold transition-colors"
          >
            ติดต่อสอบถาม <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
