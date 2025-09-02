import React, { useEffect, useState } from 'react';

type ConsentValue = 'accepted' | 'rejected' | null;

const STORAGE_KEY = 'cookieConsent';

const CookieBanner: React.FC = () => {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue;
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleChoice = (value: Exclude<ConsentValue, null>) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsent(value);
    setIsVisible(false);
  };

  if (!isVisible || consent === 'accepted' || consent === 'rejected') return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl">
        <div className="m-4 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur px-5 py-4 text-white shadow-2xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm sm:text-base text-white/80">
              We use essential and analytics cookies to improve your experience. See our{' '}
              <a href="/cookies" className="underline text-lazy-green hover:text-green-400">Cookie Policy</a>.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => handleChoice('rejected')}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={() => handleChoice('accepted')}
                className="rounded-full bg-lazy-green px-5 py-2 text-sm font-semibold text-black hover:bg-white transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;


