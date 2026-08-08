import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Share2, Tv, HeadphonesIcon, FileText, Settings, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-lg p-1.5">
                <Wrench className="w-6 h-6 text-[#0d2045]" />
              </div>
              <div className="leading-tight">
                <span className="text-white font-bold text-lg tracking-wide">A-TECH</span>
                <span className="text-blue-300 font-medium text-sm block -mt-1">TOOLS</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              ผู้จำหน่ายเครื่องมือตัดคุณภาพสูง ครบวงจร พร้อมให้คำปรึกษาและบริการหลังการขาย
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 bg-[#1a3a6e] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1a3a6e] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="YouTube"
              >
                <Tv className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">บริการของเรา</h3>
            <ul className="space-y-3">
              {[
                { icon: <HeadphonesIcon className="w-4 h-4 text-blue-400 shrink-0" />, label: 'ให้คำปรึกษาด้านเทคนิค' },
                { icon: <FileText className="w-4 h-4 text-blue-400 shrink-0" />, label: 'ขอใบเสนอราคาฟรี', to: '/contact' },
                { icon: <Settings className="w-4 h-4 text-blue-400 shrink-0" />, label: 'บริการหลังการขาย' },
                { icon: <Zap className="w-4 h-4 text-blue-400 shrink-0" />, label: 'Application Support' },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-blue-200 text-sm">
                  {item.icon}
                  {item.to ? (
                    <Link to={item.to} className="hover:text-white transition-colors">{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Brand */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">แบรนด์พันธมิตร</h3>
            <div className="bg-[#1a3a6e] rounded-xl p-4 mb-3">
              <p className="text-blue-300 text-xs uppercase tracking-widest mb-1">Authorized Distributor</p>
              <p className="text-white font-bold text-xl tracking-widest">GESAC</p>
              <p className="text-blue-200 text-xs mt-1 leading-relaxed">
                เครื่องมือตัดคาร์ไบด์คุณภาพสูง<br />จากไต้หวัน
              </p>
            </div>
            <a
              href="https://www.gesac-tools.com/th/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white text-sm transition-colors flex items-center gap-1"
            >
              <span className="text-blue-500">›</span> เว็บไซต์ GESAC อย่างเป็นทางการ
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <span>66/234 ซอยเฉลิมพระเกียรติร.๙ 87<br />เขตประเวศ แขวงประเวศ กรุงเทพมหานคร 10250</span>
              </li>
              <li className="flex items-center gap-2 text-blue-200 text-sm">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+66824282653" className="hover:text-white transition-colors">082-428-2653</a>
              </li>
              <li className="flex items-center gap-2 text-blue-200 text-sm">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:atechtools.sales@gmail.com" className="hover:text-white transition-colors">atechtools.sales@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a3a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-blue-300 text-sm">
            © 2568 A-Tech Tools. สงวนลิขสิทธิ์ทุกประการ.
          </p>
        </div>
      </div>
    </footer>
  );
}
