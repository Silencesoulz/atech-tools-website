import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, ClipboardList } from 'lucide-react';
import CategoryIcon from '../components/CategoryIcon';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { productCategories } from '../data/products';

const materials = [
  { code: 'P', name: 'เหล็กกล้า', sub: 'Steel', color: 'bg-blue-600' },
  { code: 'M', name: 'สแตนเลส', sub: 'Stainless steel', color: 'bg-amber-500' },
  { code: 'K', name: 'เหล็กหล่อ', sub: 'Cast iron', color: 'bg-red-500' },
  { code: 'N', name: 'โลหะสี', sub: 'Non-ferrous', color: 'bg-emerald-500' },
  { code: 'S', name: 'วัสดุทนความร้อน', sub: 'Superalloy', color: 'bg-orange-500' },
  { code: 'H', name: 'เหล็กชุบแข็ง', sub: 'Hardened steel', color: 'bg-slate-500' },
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category');
  const active = productCategories.find((category) => category.id === requestedCategory) || productCategories[0];
  const activeIndex = productCategories.findIndex((category) => category.id === active.id);

  const selectCategory = (categoryId, shouldScroll = false) => {
    setSearchParams({ category: categoryId });
    if (shouldScroll) {
      requestAnimationFrame(() => {
        document.getElementById('category-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Product portfolio"
        title="ค้นหาเครื่องมือตามกระบวนการ"
        description="เลือกประเภทงานตัดเฉือนก่อน แล้วดูซีรีส์ที่เกี่ยวข้องภายในหมวดเดียว—ลดการค้นหาซ้ำและช่วยให้เปรียบเทียบตัวเลือกได้ชัดเจนขึ้น"
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            ให้ทีมงานช่วยเลือก <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#category-browser" className="btn-secondary border-white/20 bg-white/5 text-white hover:bg-white/10">
            ดูหมวดสินค้าทั้งหมด
          </a>
        </div>
      </PageHero>

      <section id="category-browser" className="border-b border-slate-200 bg-white py-8 sm:py-10">
        <div className="site-container">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">เลือกประเภทงาน</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
            {productCategories.map((category, index) => {
              const isActive = active.id === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => selectCategory(category.id, true)}
                  aria-pressed={isActive}
                  className={`group rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/15'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <CategoryIcon category={category} className={`h-5 w-5 ${isActive ? 'text-blue-100' : 'text-blue-600'}`} />
                    <span className={`text-[0.65rem] font-bold ${isActive ? 'text-blue-200' : 'text-slate-300'}`}>0{index + 1}</span>
                  </div>
                  <p className="mt-4 text-sm font-bold">{category.name}</p>
                  <p className={`mt-0.5 truncate text-[0.65rem] ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>{category.nameEn}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="category-detail" className="scroll-mt-28 bg-[#f7f9fc] section-pad">
        <div className="site-container">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d2045] text-white">
                  <CategoryIcon category={active} className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">Category 0{activeIndex + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-400">{active.nameEn}</p>
                </div>
              </div>
              <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{active.name}</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">{active.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  สอบถามหมวดนี้ <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-slate-500">
                  <Check className="h-4 w-4 text-emerald-500" /> {active.products.length} กลุ่มผลิตภัณฑ์
                </span>
              </div>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-2xl bg-[#0b1b34] p-6 text-white sm:p-8">
              <div className="absolute inset-0 technical-grid opacity-30" />
              <div className="absolute -right-12 -top-12 flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-blue-500/10 text-blue-300/25">
                <CategoryIcon category={active} className="h-28 w-28" />
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">GESAC tooling system</p>
                  <h3 className="mt-3 max-w-sm text-2xl font-extrabold sm:text-3xl">{active.nameEn}</h3>
                </div>
                <div className="mt-20">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Key series</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.products.slice(0, 4).map((product) => (
                      <span key={product.series} className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">
                        {product.series}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">Series overview</p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-950">ผลิตภัณฑ์ในหมวดนี้</h3>
              </div>
              <p className="hidden text-sm text-slate-400 sm:block">คลิก “สอบถามสินค้า” เพื่อให้ทีมงานช่วยตรวจสอบรุ่นย่อย</p>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {active.products.map((product, index) => (
                <div key={product.series} className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-300">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-extrabold text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-950">{product.series}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Workpiece materials"
            title="เลือกต่อจากวัสดุชิ้นงาน"
            description="รหัสกลุ่มวัสดุช่วยสื่อสารเกรดอินเสิร์ตและเงื่อนไขการตัดได้ชัดขึ้น เมื่อติดต่อทีมงาน โปรดแจ้งชนิดวัสดุหรือเกรดที่ใช้งานจริง"
          />
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
            {materials.map((material) => (
              <div key={material.code} className="min-w-0 rounded-xl border border-slate-200 p-4 sm:p-5">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${material.color} text-sm font-extrabold text-white`}>
                  {material.code}
                </span>
                <h3 className="mt-4 text-sm font-bold leading-5 text-slate-950">{material.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{material.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d2045] py-14">
        <div className="site-container grid items-center gap-6 lg:grid-cols-[1fr_auto]">
          <div className="flex items-start gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300 sm:flex">
              <ClipboardList className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold text-white">ยังไม่แน่ใจว่าจะเริ่มจากหมวดไหน?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">ตอบคำถามสั้น ๆ เรื่องประเภทงานและวัสดุ แล้วส่งข้อมูลให้ทีมเราช่วยแนะนำ</p>
            </div>
          </div>
          <Link to="/contact" className="btn-light">
            ใช้ตัวช่วยเลือกสินค้า <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
