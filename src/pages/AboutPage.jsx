import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, Lightbulb, Heart, FlaskConical, Factory, Globe, ShieldCheck, Microscope, Zap } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: 'คุณภาพเป็นหัวใจ',
    desc: 'เราคัดสรรเฉพาะสินค้าที่ผ่านมาตรฐานคุณภาพระดับสากล เพื่อให้ลูกค้ามั่นใจในทุกการใช้งาน',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
    title: 'นวัตกรรมและความเชี่ยวชาญ',
    desc: 'ทีมงานผู้เชี่ยวชาญของเราติดตามเทคโนโลยีเครื่องมือตัดล่าสุด เพื่อนำเสนอโซลูชันที่ดีที่สุด',
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-400" />,
    title: 'ใส่ใจลูกค้าทุกราย',
    desc: 'เราให้ความสำคัญกับความพึงพอใจของลูกค้า พร้อมบริการหลังการขายที่ครบครันตลอดการใช้งาน',
  },
];

const gesacReasons = [
  {
    icon: <FlaskConical className="w-7 h-7 text-blue-400" />,
    title: 'ห่วงโซ่วัตถุดิบครบวงจร',
    desc: 'GESAC เป็นบริษัทในเครือ XTC ผู้ผลิตทังสเตนรายใหญ่สุดในโลก ควบคุมคุณภาพตั้งแต่วัตถุดิบถึงผลิตภัณฑ์สำเร็จรูป ทำให้ต้นทุนและคุณภาพสม่ำเสมอสูงกว่าคู่แข่ง',
  },
  {
    icon: <Microscope className="w-7 h-7 text-blue-400" />,
    title: 'R&D ชั้นนำระดับโลก',
    desc: 'ทีม R&D กว่า 400 คน พร้อมศูนย์วิจัยระดับชาติและสถานีวิจัยหลังปริญญาเอก 3 แห่ง คิดค้นเทคโนโลยีใหม่อย่างต่อเนื่อง เช่น BuzzEdge Ultrasonic และ Deep Hole Drill 40D',
  },
  {
    icon: <Factory className="w-7 h-7 text-blue-400" />,
    title: 'กำลังการผลิตสูง พร้อมส่ง',
    desc: 'คลังสินค้าอัจฉริยะกว่า 6 ล้านรายการ พร้อมส่งทันที ด้วยฐานการผลิต 5 แห่งและทีมช่างฝีมือกว่า 600 คน รับประกันความสม่ำเสมอของคุณภาพในทุก Lot การผลิต',
  },
  {
    icon: <Globe className="w-7 h-7 text-blue-400" />,
    title: 'ส่วนแบ่งตลาดโลกสูงสุด',
    desc: 'ครองส่วนแบ่งตลาดทังสเตนโลก 25% และ Carbide Rod 20% ของตลาดโลก (35% ในสหรัฐอเมริกา) — เป็นเครื่องยืนยันว่าอุตสาหกรรมชั้นนำทั่วโลกไว้วางใจ GESAC',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    title: 'สิทธิบัตรและมาตรฐานสากล',
    desc: 'มีสิทธิบัตรกว่า 400 รายการ และผ่านการรับรองมาตรฐานสากลครบถ้วน รับประกันว่าทุกผลิตภัณฑ์ผ่านการทดสอบอย่างเข้มงวดก่อนออกสู่ตลาด',
  },
  {
    icon: <Zap className="w-7 h-7 text-blue-400" />,
    title: 'โซลูชันครบวงจร',
    desc: 'ไม่ใช่แค่ขายสินค้า — GESAC มีทีมวิศวกรให้คำปรึกษาด้านการตัดเฉือน พร้อมบริการ resharpening, custom tool และโซลูชันเฉพาะทางสำหรับทุกอุตสาหกรรม',
  },
];

const stats = [
  { value: '500+', label: 'ลูกค้าที่ไว้วางใจ' },
  { value: '5,000+', label: 'รายการสินค้า' },
  { value: '15+', label: 'ปีประสบการณ์' },
  { value: '50+', label: 'วิศวกรผู้เชี่ยวชาญ' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0d2045] to-[#1a3a6e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">เกี่ยวกับเรา</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">A-Tech Tools</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
            ผู้จำหน่ายอย่างเป็นทางการของ GESAC Tools ในประเทศไทย<br />
            เครื่องมือตัดคาร์ไบด์คุณภาพสูงระดับโลก พร้อมทีมวิศวกรผู้เชี่ยวชาญ
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d2045] mb-6">เรื่องราวของเรา</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A-Tech Tools คือ <strong className="text-[#0d2045]">ผู้จำหน่ายอย่างเป็นทางการ (Authorized Distributor) ของ GESAC Tools ในประเทศไทย</strong> — แบรนด์เครื่องมือตัดคาร์ไบด์ชั้นนำระดับโลกจาก Xiamen Golden Egret Special Alloy Co., Ltd. (GESAC) ประเทศจีน
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                GESAC เป็นบริษัทในเครือ Xiamen Tungsten Co., Ltd. (XTC) หนึ่งในผู้ผลิตทังสเตนและคาร์ไบด์รายใหญ่ที่สุดในโลก
                มีประสบการณ์ด้านการวิจัย พัฒนา และผลิตเครื่องมือตัดความแม่นยำสูงมากกว่า 20 ปี
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                เราพร้อมให้บริการลูกค้าในประเทศไทยด้วยสินค้า GESAC ของแท้ครบครัน พร้อมทีมวิศวกรผู้เชี่ยวชาญให้คำปรึกษา
                และบริการหลังการขายอย่างครบวงจร
              </p>
              <div className="space-y-3">
                {['ผู้จำหน่าย GESAC Tools อย่างเป็นทางการในประเทศไทย', 'สินค้า GESAC ของแท้ มีใบรับรองจากผู้ผลิต', 'ทีมวิศวกรผู้เชี่ยวชาญด้านการตัดเฉือน', 'สต็อกสินค้าพร้อมส่งจากคลังสินค้าในประเทศ', 'บริการหลังการขายและรับประกันคุณภาพ'].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Workshop"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                  alt="Tools"
                  className="rounded-xl w-full h-36 object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=400&q=80"
                  alt="Precision"
                  className="rounded-xl w-full h-36 object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0d2045] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">ค่านิยมของเรา</p>
            <h2 className="text-3xl font-bold text-[#0d2045]">สิ่งที่เราเชื่อ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-[#0d2045] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0d2045] mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GESAC */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">ทำไมต้องเลือก GESAC</p>
            <h2 className="text-3xl font-bold text-[#0d2045]">จุดเด่นของแบรนด์ GESAC</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              GESAC ไม่ใช่แค่แบรนด์เครื่องมือตัดทั่วไป — นี่คือเหตุผลที่อุตสาหกรรมชั้นนำทั่วโลกเลือกใช้
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gesacReasons.map((r) => (
              <div key={r.title} className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                <div className="w-14 h-14 bg-[#0d2045] rounded-xl flex items-center justify-center mb-4">
                  {r.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0d2045] mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-[#0d2045] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">พร้อมร่วมงานกับเรา?</h2>
          <p className="text-blue-100 text-lg mb-8">ติดต่อทีมงานเพื่อรับคำปรึกษาและใบเสนอราคาฟรี</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0d2045] hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            ติดต่อเราเลย <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
