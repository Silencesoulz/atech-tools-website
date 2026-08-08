import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const FB_PAGE_URL = 'https://www.facebook.com/p/GESAC-100067716916255/';

export default function NewsPage() {
  // Re-parse FB widgets after React renders
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0d2045] to-[#1a3a6e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">ข่าวสาร</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">ข่าวสารและบทความ</h1>
          <p className="text-blue-100 text-xl max-w-xl mx-auto">
            ติดตามข่าวสารผลิตภัณฑ์ใหม่และเทคโนโลยีล่าสุดจาก GESAC Tools
          </p>
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* FB Page Plugin - Main */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#0d2045]">โพสต์ล่าสุดจาก GESAC</h2>
                <a
                  href={FB_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  ดูทั้งหมดที่ Facebook <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Facebook Page Plugin Embed */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex justify-center p-4">
                <div
                  className="fb-page"
                  data-href={FB_PAGE_URL}
                  data-tabs="timeline"
                  data-width="680"
                  data-height="800"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="false"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Follow CTA */}
              <div className="bg-[#0d2045] rounded-2xl p-6 text-white text-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">ติดตาม GESAC บน Facebook</h3>
                <p className="text-blue-200 text-sm mb-4">รับข่าวสารผลิตภัณฑ์ใหม่และเทคนิคการตัดเฉือนก่อนใคร</p>
                <a
                  href={FB_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors w-full justify-center"
                >
                  กดติดตาม Page
                </a>
              </div>

              {/* GESAC Website */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0d2045] mb-3">เว็บไซต์ทางการ GESAC</h3>
                <p className="text-gray-500 text-sm mb-4">ดูข้อมูลผลิตภัณฑ์ครบถ้วนและ catalogue ที่เว็บไซต์ทางการของ GESAC</p>
                <a
                  href="https://www.gesac-tools.com/th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0d2045] hover:bg-[#1a3a6e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors w-full justify-center"
                >
                  ไปยังเว็บไซต์ GESAC <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Topics */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0d2045] mb-4">หัวข้อที่น่าสนใจ</h3>
                <div className="flex flex-wrap gap-2">
                  {['ผลิตภัณฑ์ใหม่', 'Milling', 'Turning', 'Drilling', 'Threading', 'BuzzEdge', 'Deep Hole', 'Superalloy', 'Automotive', 'Aerospace'].map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
