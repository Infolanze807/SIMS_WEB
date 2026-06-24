import React from 'react';

const PageLoader = ({ label = 'Loading…' }) => (
  <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 bg-white px-6 py-20 font-sans">
    <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-brand-accent/20 border-t-brand-accent" />
    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
  </div>
);

export default PageLoader;
