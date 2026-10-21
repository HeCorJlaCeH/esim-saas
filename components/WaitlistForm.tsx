'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-900/80 border border-slate-800 rounded-3xl backdrop-blur-xl shadow-2xl">
      {status === 'success' ? (
        <div className="text-center py-4 space-y-2">
          <div className="text-3xl">🎉</div>
          <h3 className="text-xl font-bold text-white">You&apos;re on the list!</h3>
          <p className="text-sm text-slate-400">
            We&apos;ve reserved your <span className="text-emerald-400 font-semibold">35% OFF</span> discount. We&apos;ll notify you right at launch!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.98] disabled:opacity-50 text-sm"
          >
            {status === 'loading' ? 'Securing your spot...' : 'Claim 35% OFF Discount 🔥'}
          </button>
          {status === 'error' && (
            <p className="text-xs text-rose-400 text-center">Something went wrong. Please try again!</p>
          )}
        </form>
      )}
    </div>
  );
}
