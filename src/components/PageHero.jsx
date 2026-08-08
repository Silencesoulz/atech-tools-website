export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero relative overflow-hidden">
      <div className="absolute inset-0 technical-grid opacity-30" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="site-container relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-dark">{eyebrow}</p>
          <h1 className="mt-4 text-[2.1rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
