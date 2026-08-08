export default function SectionHeading({ eyebrow, title, description, align = 'left', inverse = false }) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${inverse ? 'eyebrow-dark' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${inverse ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 leading-7 ${inverse ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
