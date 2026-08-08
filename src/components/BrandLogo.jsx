function BrandMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="48" height="48" rx="13" fill="#F8FAFC" />
      <path
        d="M7 34.75 20.2 8h7.63L41 34.75h-8.08l-2.15-4.88H17.16l-2.1 4.88H7Z"
        fill="#0D2045"
      />
      <path d="m24 15.2 4.03 9.25h-8.1L24 15.2Z" fill="#3B82F6" />
      <path d="M16.9 29.87h13.87l-2.36-5.42H19.3l-2.4 5.42Z" fill="#2563EB" />
      <path d="m34.57 32.53 4.76-2.21L41 34.75h-6.08l-.35-2.22Z" fill="#F59E0B" />
      <path
        d="M12.25 39.5h23.5"
        stroke="#93C5FD"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BrandLogo({ className = '', markClassName = 'h-10 w-10', inverse = false }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BrandMark className={`shrink-0 ${markClassName}`} />
      <span className="flex flex-col leading-none">
        <span className={`flex items-baseline whitespace-nowrap font-extrabold tracking-[0.08em] ${inverse ? 'text-white' : 'text-[#0d2045]'}`}>
          <span>A</span>
          <span className="mx-0.5 text-blue-500">—</span>
          <span>TECH</span>
        </span>
        <span className={`mt-1 whitespace-nowrap text-[0.58rem] font-semibold tracking-[0.32em] ${inverse ? 'text-blue-300' : 'text-slate-500'}`}>
          PRECISION TOOLS
        </span>
      </span>
    </span>
  );
}
