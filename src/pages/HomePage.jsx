import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';
import { productCategories, industries } from '../data/products';

const stats = [
  { value: '500+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '5,000+', label: 'รายการสินค้า' },
  { value: '🚚', label: 'จัดส่งทั่วประเทศไทย' },
  { value: '24/7', label: 'บริการให้คำปรึกษา' },
];


export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2045] to-[#1a3a6e] min-h-[85vh] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        {/* Decorative circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full -mr-48 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-blue-400/10 rounded-full -mb-32 blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-500/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-200 text-sm font-medium">เครื่องมือตัดคุณภาพสูง • พร้อมส่ง</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              โซลูชันเครื่องมือตัด<br />
              <span className="text-blue-300">ครบวงจร</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-8">
              เอ-เทค ทูลส์ ผู้จำหน่ายเครื่องมือตัดคุณภาพสูง ครอบคลุมทุกประเภทงานตัดเฉือน
              พร้อมทีมวิศวกรผู้เชี่ยวชาญให้คำปรึกษา
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ดูสินค้าทั้งหมด <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ขอใบเสนอราคา
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">เกี่ยวกับเรา</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2045] leading-tight mb-6">
                ผู้จำหน่ายอย่างเป็นทางการ<br />ของ GESAC Tools ในไทย
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A-Tech Tools คือ Authorized Distributor ของ GESAC Tools — แบรนด์เครื่องมือตัดคาร์ไบด์ชั้นนำระดับโลก
                จาก Xiamen Tungsten Co., Ltd. (XTC) ประเทศจีน
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                ด้วยทีมวิศวกรผู้เชี่ยวชาญและสินค้า GESAC ของแท้ครบครันกว่า 5,000 รายการ
                เราพร้อมให้คำปรึกษาและนำเสนอโซลูชันที่ตรงกับความต้องการของลูกค้าแต่ละราย
              </p>
              <ul className="space-y-2 mb-8">
                {['ผู้จำหน่าย GESAC Tools อย่างเป็นทางการในไทย', 'สินค้า GESAC ของแท้ พร้อมส่งจากสต็อก', 'วิศวกรให้คำปรึกษาฟรี', 'บริการหลังการขายครบครัน'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#0d2045] hover:bg-[#1a3a6e] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                รู้จักเราเพิ่มเติม <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80"
                alt="CNC Machining"
                className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-96"
              />
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-xl p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0d2045] rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[#0d2045] font-bold text-sm leading-tight">Authorized Distributor</div>
                  <div className="text-gray-400 text-xs">GESAC Tools — Thailand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">สินค้าของเรา</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2045]">หมวดหมู่เครื่องมือตัด</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">เครื่องมือตัดคาร์ไบด์ครบวงจร สำหรับงานตัดเฉือนทุกประเภท</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                to="/products"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="font-bold text-[#0d2045] text-lg">{cat.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">{cat.nameEn}</p>
                  <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                    ดูรายละเอียด <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#0d2045] hover:bg-[#1a3a6e] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ดูสินค้าทั้งหมด <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">อุตสาหกรรมที่เราให้บริการ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2045]">โซลูชันสำหรับทุกอุตสาหกรรม</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-sm transition-all">
                <div className="text-4xl mb-2">{ind.icon}</div>
                <h3 className="font-semibold text-[#0d2045] text-sm mb-1">{ind.name}</h3>
                <p className="text-gray-500 text-xs">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">ข่าวสารล่าสุด</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2045]">ข่าวสารและบทความ</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">ติดตามข่าวสาร อัปเดตสินค้าใหม่ และเทคโนโลยีเครื่องมือตัดล่าสุดจาก GESAC</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Facebook CTA */}
              <div className="bg-[#0d2045] p-10 flex flex-col justify-center">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">ติดตามเราบน Facebook</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                  รับข่าวสาร โปรโมชั่น และอัปเดตสินค้าใหม่ล่าสุดจาก GESAC ได้ก่อนใครผ่าน Facebook Page
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 bg-white text-[#0d2045] font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors self-start"
                >
                  ดูข่าวสารทั้งหมด <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Highlights */}
              <div className="p-8 flex flex-col gap-5 justify-center">
                {[
                  { tag: 'สินค้าใหม่', title: 'GESAC BuzzEdge — End Mill สำหรับงานอลูมิเนียมประสิทธิภาพสูง', desc: 'ออกแบบมาเพื่อการตัดเฉือนอลูมิเนียมโดยเฉพาะ ลดการสะสมของเนื้องาน (BUE) และผิวงานเรียบในการตัดครั้งเดียว' },
                  { tag: 'เทคโนโลยี', title: 'AH Series Angle Head — ขยายขีดความสามารถเครื่อง CNC ของคุณ', desc: 'แก้ปัญหางานที่เครื่องมาตรฐานทำไม่ได้ ด้วย Angle Head ที่ปรับมุมได้หลากหลาย' },
                  { tag: 'อัปเดต', title: 'GESAC เข้าร่วมงานแสดงสินค้า TIMTOS 2025 ที่ไทเปประเทศไต้หวัน', desc: 'นำเสนอนวัตกรรมเครื่องมือตัดคาร์ไบด์รุ่นใหม่ล่าสุด พร้อมโซลูชั่นสำหรับอุตสาหกรรมยานยนต์และการบิน' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="shrink-0 mt-0.5 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">{item.tag}</span>
                    <div>
                      <p className="font-semibold text-[#0d2045] text-sm leading-snug mb-1">{item.title}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-[#0d2045] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">ต้องการคำปรึกษาด้านเครื่องมือตัด?</h2>
          <p className="text-blue-100 text-lg mb-8">ทีมวิศวกรของเราพร้อมช่วยคุณเลือกเครื่องมือที่เหมาะสมที่สุด</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0d2045] hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              ติดต่อเราเลย <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+6621234567"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              โทร 082-428-2653
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
