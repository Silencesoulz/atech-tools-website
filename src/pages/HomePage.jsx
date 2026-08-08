import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  Check,
  ChevronRight,
  Cpu,
  Factory,
  Gauge,
  HeartPulse,
  Headphones,
  PackageCheck,
  Plane,
  Zap,
} from 'lucide-react';
import CategoryIcon from '../components/CategoryIcon';
import SectionHeading from '../components/SectionHeading';
import { industries, productCategories } from '../data/products';

const assurances = [
  { icon: BadgeCheck, title: 'สินค้า GESAC ของแท้', text: 'จากผู้จำหน่ายอย่างเป็นทางการ' },
  { icon: PackageCheck, title: 'จัดหาเป็นระบบ', text: 'ตรวจสอบรุ่นและสเปกก่อนเสนอราคา' },
  { icon: Headphones, title: 'Application Support', text: 'ช่วยเลือกเครื่องมือให้เหมาะกับงาน' },
];

const industryIcons = [CarFront, Plane, Factory, Cpu, HeartPulse, Zap];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="page-hero relative min-h-[620px] overflow-hidden sm:min-h-[650px]">
        <div className="absolute inset-0 technical-grid opacity-35" />
        <div className="absolute -right-32 top-8 h-[34rem] w-[34rem] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="site-container relative grid min-h-[620px] items-center gap-14 py-16 sm:min-h-[650px] sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-[0.62rem] font-bold tracking-wide text-blue-200 sm:px-3.5 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              AUTHORIZED GESAC DISTRIBUTOR · THAILAND
            </div>
            <h1 className="mt-7 text-[2.15rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">
              เลือกเครื่องมือตัดจาก
              <span className="block text-blue-300">การใช้งานจริง</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              เครื่องมือกัด กลึง เจาะ และทำเกลียวสำหรับงานตัดเฉือน พร้อมทีมงานช่วยตรวจสอบสเปกให้ตรงกับวัสดุ เครื่องจักร และเป้าหมายการผลิต
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className="btn-primary">
                เลือกตามประเภทงาน <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10">
                ปรึกษาทีมงาน
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              {['สินค้า GESAC ของแท้', 'คำแนะนำด้านเทคนิค', 'บริการหลังการขาย'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-5 rounded-[2rem] border border-white/10" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur">
              <img
                src="/milling-tools.png"
                alt="เครื่องมือตัดและหัวกัดคาร์ไบด์"
                className="h-[430px] w-full rounded-[1rem] object-cover"
              />
              <div className="absolute inset-x-7 bottom-7 rounded-xl border border-white/15 bg-[#08152a]/90 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Tooling portfolio</p>
                    <p className="mt-1 font-bold text-white">Milling · Turning · Drilling</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Gauge className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-7 rounded-xl border border-blue-300/20 bg-blue-600 px-4 py-3 text-white shadow-xl">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-blue-100">Partner brand</p>
              <p className="mt-0.5 text-xl font-extrabold tracking-[0.12em]">GESAC</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {assurances.map((assurance) => {
            const AssuranceIcon = assurance.icon;
            return (
            <div key={assurance.title} className="flex items-center gap-4 py-6 sm:px-6 first:pl-0 last:pr-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <AssuranceIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">{assurance.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{assurance.text}</p>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-[#f7f9fc]">
        <div className="site-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Browse by operation"
              title="เริ่มจากประเภทงานตัดเฉือน"
              description="จัดหมวดตามกระบวนการผลิต เพื่อให้ค้นหาเครื่องมือได้เร็วและเทียบซีรีส์ในกลุ่มเดียวกันได้ง่ายขึ้น"
            />
            <Link to="/products" className="hidden items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:flex">
              ดูทุกหมวดสินค้า <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <CategoryIcon category={category} className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.14em] text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">{category.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-600">{category.nameEn}</p>
                <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">{category.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold text-slate-500">{category.products.length} กลุ่มผลิตภัณฑ์</span>
                  <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>
              </Link>
            ))}
          </div>
          <Link to="/products" className="btn-secondary mt-6 w-full sm:hidden">
            ดูทุกหมวดสินค้า <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-[#0b1b34]">
        <div className="absolute inset-0 technical-grid opacity-20" />
        <div className="site-container relative">
          <SectionHeading
            eyebrow="Industry coverage"
            title="รองรับงานผลิตหลายอุตสาหกรรม"
            description="ตั้งแต่งานผลิตจำนวนมาก ไปจนถึงชิ้นส่วนที่ต้องควบคุมความแม่นยำและวัสดุตัดเฉือนยาก"
            align="center"
            inverse
          />
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index];
              return (
                <div key={industry.name} className="bg-[#0b1b34] p-4 text-center transition-colors hover:bg-white/5 sm:p-5">
                  <Icon className="mx-auto h-6 w-6 text-blue-400" />
                  <h3 className="mt-4 text-sm font-bold text-white">{industry.name}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-14">
        <div className="site-container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">Need a recommendation?</p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">ให้ทีมงานช่วยคัดเครื่องมือที่เหมาะกับงานของคุณ</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-light">
              ขอคำแนะนำ <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+66824282653" className="btn-secondary border-white/25 bg-transparent text-white hover:bg-white/10">
              โทร 082-428-2653
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
