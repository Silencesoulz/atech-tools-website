import { useEffect, useRef, useState } from 'react';
import { ExternalLink, LoaderCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const FB_PAGE_URL = 'https://www.facebook.com/p/GESAC-100067716916255/';

export default function NewsPage() {
  const feedContainerRef = useRef(null);
  const [feedStatus, setFeedStatus] = useState('loading');

  // Facebook renders the feed asynchronously, so watch for its iframe instead
  // of assuming the SDK is ready when this route first mounts.
  useEffect(() => {
    const container = feedContainerRef.current;
    if (!container) return undefined;

    let sdkPoll;
    let watchedIframe;
    let subscribedToFacebook = false;
    let stopped = false;

    const markReady = () => {
      if (!stopped) setFeedStatus('ready');
    };

    const watchRenderedIframe = () => {
      const iframe = container.querySelector('iframe');
      if (!iframe || iframe === watchedIframe) return;

      watchedIframe = iframe;
      iframe.addEventListener('load', markReady, { once: true });
    };

    const parseFeed = () => {
      if (!window.FB?.XFBML) return false;

      if (!subscribedToFacebook && window.FB.Event) {
        window.FB.Event.subscribe('xfbml.render', markReady);
        subscribedToFacebook = true;
      }
      window.FB.XFBML.parse(container);
      watchRenderedIframe();
      return true;
    };

    const observer = new MutationObserver(watchRenderedIframe);
    observer.observe(container, { childList: true, subtree: true });

    if (!parseFeed()) {
      sdkPoll = window.setInterval(() => {
        if (parseFeed()) window.clearInterval(sdkPoll);
      }, 300);
    }

    const fallbackTimer = window.setTimeout(() => {
      setFeedStatus((current) => (current === 'ready' ? current : 'fallback'));
    }, 15000);

    return () => {
      stopped = true;
      observer.disconnect();
      watchedIframe?.removeEventListener('load', markReady);
      if (subscribedToFacebook && window.FB?.Event) {
        window.FB.Event.unsubscribe('xfbml.render', markReady);
      }
      window.clearInterval(sdkPoll);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="News & knowledge"
        title="อัปเดตผลิตภัณฑ์และความรู้ด้านงานตัดเฉือน"
        description="ติดตามข่าวสารผลิตภัณฑ์ใหม่ เทคนิคการใช้งาน และกิจกรรมล่าสุดจาก GESAC Tools"
      />

      {/* Facebook Feed */}
      <section className="bg-[#f7f9fc] section-pad">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* FB Page Plugin - Main */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">Latest updates</p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-950">โพสต์ล่าสุดจาก GESAC</h2>
                </div>
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
              <div
                ref={feedContainerRef}
                className="relative flex min-h-[430px] justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-3 sm:min-h-[500px] sm:p-4"
              >
                {feedStatus === 'loading' && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-white p-5 text-center sm:p-8" role="status" aria-live="polite">
                    <div className="w-full max-w-sm">
                      <LoaderCircle className="mx-auto h-9 w-9 animate-spin text-blue-600" />
                      <h3 className="mt-4 font-bold text-slate-900">กำลังโหลดข่าวจาก GESAC</h3>
                      <p className="mt-2 text-sm text-slate-500">กำลังเชื่อมต่อกับ Facebook โปรดรอสักครู่</p>
                      <div className="mt-7 space-y-3" aria-hidden="true">
                        <div className="h-3 animate-pulse rounded-full bg-slate-100" />
                        <div className="h-3 w-4/5 animate-pulse rounded-full bg-slate-100" />
                        <div className="h-32 animate-pulse rounded-lg bg-slate-100" />
                      </div>
                    </div>
                  </div>
                )}

                {feedStatus === 'fallback' && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white p-5 text-center sm:p-8">
                  <div className="max-w-sm">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900">ดูข่าวล่าสุดบน Facebook</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      หากเบราว์เซอร์ปิดกั้น Facebook Feed คุณยังสามารถเปิดดูโพสต์ทั้งหมดจากเพจทางการได้โดยตรง
                    </p>
                    <a href={FB_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
                      เปิด Facebook <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                )}
                <div
                  className="fb-page relative z-10"
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
              <div className="rounded-xl bg-[#0d2045] p-7 text-center text-white">
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
                  className="btn-primary w-full"
                >
                  กดติดตาม Page
                </a>
              </div>

              {/* GESAC Website */}
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-[#0d2045] mb-3">เว็บไซต์ทางการ GESAC</h3>
                <p className="text-gray-500 text-sm mb-4">ดูข้อมูลผลิตภัณฑ์ครบถ้วนและ catalogue ที่เว็บไซต์ทางการของ GESAC</p>
                <a
                  href="https://www.gesac-tools.com/th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0d2045] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a3a6e]"
                >
                  ไปยังเว็บไซต์ GESAC <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Topics */}
              <div className="rounded-xl border border-slate-200 bg-white p-6">
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
