import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ClipboardList } from 'lucide-react';
import ProductQuiz from '../components/ProductQuiz';
import PageHero from '../components/PageHero';

const FORMSPREE_URL = 'https://formspree.io/f/xnjoqkld';
const RATE_LIMIT_KEY = 'atech_last_submit';
const RATE_LIMIT_MS = 5 * 60 * 1000; // 5 minutes

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-blue-400" />,
    title: 'ที่อยู่',
    lines: ['66/234 ซอยเฉลิมพระเกียรติร.๙ 87', 'เขตประเวศ แขวงประเวศ กรุงเทพมหานคร 10250'],
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-400" />,
    title: 'โทรศัพท์',
    lines: ['082-428-2653'],
    href: 'tel:+66824282653',
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-400" />,
    title: 'อีเมล',
    lines: ['atechtools.sales@gmail.com'],
    href: 'mailto:atechtools.sales@gmail.com',
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: 'เวลาทำการ',
    lines: ['จันทร์ – ศุกร์: 09:00 – 18:00 น.'],
  },
];

export default function ContactPage() {
  const [quizStage, setQuizStage] = useState('prompt'); // 'prompt' | 'quiz' | 'done'
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [honeypot, setHoneypot] = useState(''); // must stay empty
  const [phoneError, setPhoneError] = useState('');
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleQuizComplete = ({ subject, message }) => {
    setForm((prev) => ({ ...prev, subject, message }));
    setQuizStage('done');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'phone') {
      const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
      // Auto-format: XXX-XXX-XXXX
      let formatted = digits;
      if (digits.length > 6) {
        formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      } else if (digits.length > 3) {
        formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
      }
      setForm((prev) => ({ ...prev, phone: formatted }));
      if (digits.length > 0 && digits.length < 9) {
        setPhoneError('เบอร์โทรศัพท์ต้องมี 9-10 หลัก');
      } else {
        setPhoneError('');
      }
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot check — bots fill hidden fields
    if (honeypot) return;

    // Phone digit validation
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 9 || digits.length > 10) {
      setPhoneError('เบอร์โทรศัพท์ต้องมี 9-10 หลัก');
      return;
    }

    // 2. Rate limit check
    const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
    if (lastSubmit && Date.now() - parseInt(lastSubmit, 10) < RATE_LIMIT_MS) {
      const remaining = Math.ceil((RATE_LIMIT_MS - (Date.now() - parseInt(lastSubmit, 10))) / 60000);
      setError(`กรุณารอ ${remaining} นาทีก่อนส่งข้อความใหม่`);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
        setSubmitted(true);
      } else {
        setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
      }
    } catch {
      setError('ไม่สามารถเชื่อมต่อได้ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Talk to our team"
        title="ส่งรายละเอียดงานให้เราช่วยตรวจสอบ"
        description="ระบุประเภทงาน วัสดุ เครื่องจักร หรือรหัสสินค้าที่สนใจ ทีมงานจะติดต่อกลับเพื่อช่วยแนะนำและจัดทำใบเสนอราคา"
      />

      {/* Contact Content */}
      <section className="bg-[#f7f9fc] section-pad">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="relative overflow-hidden rounded-xl bg-[#0d2045] p-6 text-white sm:p-8">
                <div className="absolute inset-0 technical-grid opacity-15" />
                <h2 className="relative text-xl font-bold mb-6">ข้อมูลติดต่อ</h2>
                <div className="relative space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="shrink-0">{info.icon}</div>
                      <div>
                        <div className="text-blue-300 text-sm font-medium mb-1">{info.title}</div>
                        {info.href ? (
                          <a href={info.href} className="break-all text-sm text-white underline-offset-4 hover:underline">
                            {info.lines[0]}
                          </a>
                        ) : (
                          info.lines.map((line) => (
                            <div key={line} className="text-sm text-white">{line}</div>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="h-56 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <iframe
                  title="แผนที่ A-Tech Tools"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.844477299085!2d100.6904625!3d13.727864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d619bc551cda9%3A0x321b236f85ead273!2sA%20Tech%20Tools!5e0!3m2!1sth!2sth!4v1711440000000!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quiz prompt / quiz / badge */}
              {!submitted && quizStage === 'prompt' && (
                <div className="flex flex-col gap-4 rounded-xl border border-blue-200 bg-blue-50 p-5 sm:flex-row sm:items-center sm:p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <ClipboardList className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-[#0d2045]">ไม่แน่ใจว่าต้องการสินค้าแบบไหน?</span>
                    </div>
                    <p className="text-sm text-gray-500">ตอบคำถาม 3 ข้อ แล้วเราจะช่วยแนะนำสินค้าที่ตรงกับความต้องการของคุณ</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button
                      onClick={() => setQuizStage('quiz')}
                      className="rounded-lg bg-[#0d2045] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a3a6e]"
                    >
                      เริ่มเลย
                    </button>
                    <button
                      onClick={() => setQuizStage('done')}
                      className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      ข้ามไป
                    </button>
                  </div>
                </div>
              )}

              {!submitted && quizStage === 'quiz' && (
                <ProductQuiz onComplete={handleQuizComplete} />
              )}

              {!submitted && quizStage === 'done' && form.message && (
                <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-3 flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-green-800">กรอกข้อมูลจากแบบสอบถามแล้ว — ตรวจสอบและแก้ไขได้ในฟอร์มด้านล่าง</span>
                </div>
              )}

              <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#0d2045] mb-2">ส่งข้อความเรียบร้อยแล้ว!</h3>
                    <p className="text-gray-600">ทีมงานจะติดต่อกลับภายใน 1 วันทำการ</p>
                    <button
                      onClick={() => { setSubmitted(false); setQuizStage('prompt'); setForm({ name: '', company: '', phone: '', email: '', subject: '', message: '' }); }}
                      className="mt-6 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      ส่งข้อความใหม่
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#0d2045] mb-6">ส่งข้อความหาเรา</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="ชื่อ นามสกุล"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">บริษัท / องค์กร</label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="ชื่อบริษัท"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์ *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="080-000-0000"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 ${
                              phoneError ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-blue-500'
                            }`}
                          />
                          {phoneError && (
                            <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ *</label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 bg-white"
                        >
                          <option value="">เลือกหัวข้อ</option>
                          <option value="สอบถามสินค้า">สอบถามสินค้า</option>
                          <option value="ขอใบเสนอราคา">ขอใบเสนอราคา</option>
                          <option value="ปรึกษาด้านเทคนิค">ปรึกษาด้านเทคนิค</option>
                          <option value="หลังการขาย">บริการหลังการขาย</option>
                          <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความ *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="รายละเอียดที่ต้องการสอบถาม..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 resize-none"
                        />
                      </div>
                      {/* Honeypot — hidden from real users, bots fill this */}
                      <div aria-hidden="true" className="hidden">
                        <input
                          type="text"
                          name="_gotcha"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                      )}
                      <button
                        type="submit"
                        disabled={loading || !!phoneError}
                        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <Send className="w-4 h-4" /> {loading ? 'กำลังส่ง...' : 'ส่งข้อความ'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
