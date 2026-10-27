import React from 'react';

const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = 129;
const GOOGLE_PROFILE_URL = 'https://www.google.com/maps?cid=17407437960497757157&hl=en';

const GoogleMark = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.44a5.51 5.51 0 0 1-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.64z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.86-3a7.18 7.18 0 0 1-10.69-3.77H1.42v3.09A12 12 0 0 0 12 24z" />
    <path fill="#FBBC05" d="M5.4 14.32a7.2 7.2 0 0 1 0-4.64V6.59H1.42a12 12 0 0 0 0 10.82l3.98-3.09z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.14 15.24 0 12 0 7.31 0 3.19 2.69 1.42 6.59l3.98 3.09A7.2 7.2 0 0 1 12 4.75z" />
  </svg>
);

const GoogleStar = ({ fill }) => (
  <span className="relative inline-block h-3.5 w-3.5 shrink-0">
    <svg viewBox="0 0 24 24" className="absolute inset-0 h-3.5 w-3.5 text-[#d5dbe3]" aria-hidden="true">
      <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
    <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#fbbc04]" aria-hidden="true">
        <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </span>
  </span>
);

export const GoogleRatingBadge = () => (
  <div className="flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-[#d6e8f5] bg-[#eef6fb] px-4 py-3 text-[#202124] shadow-[0_10px_28px_rgba(0,0,0,0.16)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
    <div className="flex min-w-0 items-center gap-2.5">
      <GoogleMark />
      <div className="min-w-0">
        <p className="text-sm font-bold leading-tight">Excellent on Google</p>
        <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          <span className="inline-flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => (
              <GoogleStar key={index} fill={Math.max(0, Math.min(1, GOOGLE_RATING - index))} />
            ))}
          </span>
          <p className="text-[11px] font-medium leading-tight text-[#5f6368] sm:text-xs">
            <span className="font-bold text-[#202124]">{GOOGLE_RATING.toFixed(1)}</span>
            {' '}out of 5 based on {GOOGLE_REVIEW_COUNT} reviews
          </p>
        </div>
      </div>
    </div>
    <a
      href={GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={`Rated ${GOOGLE_RATING} out of 5 on Google from ${GOOGLE_REVIEW_COUNT} reviews. Review us on Google`}
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1a73e8] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1558b0] sm:text-[13px]"
    >
      Review us on Google
    </a>
  </div>
);

export default GoogleRatingBadge;
