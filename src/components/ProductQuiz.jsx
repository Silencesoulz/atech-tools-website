import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { steps, productMap, customerLabel } from '../data/quiz';

export default function ProductQuiz({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({ customerType: '', productType: [], material: [] });

  const step = steps[currentStep];
  const isMulti = !!step.multi;
  const currentAnswer = answers[step.id];

  const toggleOption = (value) => {
    if (isMulti) {
      setAnswers((prev) => ({
        ...prev,
        [step.id]: prev[step.id].includes(value)
          ? prev[step.id].filter((v) => v !== value)
          : [...prev[step.id], value],
      }));
    } else {
      setAnswers((prev) => ({ ...prev, [step.id]: value }));
    }
  };

  const isSelected = (value) =>
    isMulti ? currentAnswer.includes(value) : currentAnswer === value;

  const canNext = isMulti ? currentAnswer.length > 0 : currentAnswer !== '';

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      // Build summary for the form
      const products = answers.productType.map((p) => productMap[p]).join(', ');
      const materials = answers.material.join(', ');
      const customer = customerLabel[answers.customerType] || answers.customerType;
      const subject = 'สอบถามสินค้า';
      const message = `ประเภทลูกค้า: ${customer}\nเครื่องมือที่ต้องการ: ${products}\nวัสดุงาน: ${materials}`;
      onComplete({ subject, message, rawAnswers: answers });
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>คำถาม {currentStep + 1} / {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold text-[#0d2045] mb-1">{step.question}</h3>
      <p className="text-gray-400 text-sm mb-6">{step.subtitle}</p>

      {/* Options */}
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {step.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => toggleOption(opt.value)}
            className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
              isSelected(opt.value)
                ? 'border-blue-600 bg-blue-50 shadow-sm'
                : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
            }`}
          >
            <span className="text-2xl shrink-0">{opt.icon}</span>
            <div className="flex-1 min-w-0">
              <div className={`font-semibold text-sm ${isSelected(opt.value) ? 'text-blue-700' : 'text-gray-800'}`}>
                {opt.label}
              </div>
              <div className="text-gray-400 text-xs mt-0.5">{opt.desc}</div>
            </div>
            {isSelected(opt.value) && (
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            )}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep((s) => s - 1)}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-5 py-3 font-medium text-slate-600 transition-colors hover:border-slate-300"
          >
            <ChevronLeft className="w-4 h-4" /> ย้อนกลับ
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!canNext}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {currentStep < steps.length - 1 ? (
            <>ถัดไป <ChevronRight className="w-4 h-4" /></>
          ) : (
            <>ดูสินค้าที่แนะนำ &amp; ส่งข้อความ <ChevronRight className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </div>
  );
}
