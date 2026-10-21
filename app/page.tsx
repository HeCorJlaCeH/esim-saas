'use client';

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

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
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
      
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px]"></div>
      </div>

      {/* Header / Navbar */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-800/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-black shadow-lg shadow-cyan-500/30">
            ⚡
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            eSIM Vibe
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#early-access" className="hover:text-white transition">Early Access</a>
          <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <a 
          href="#early-access" 
          className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-full transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
        >
          Get 35% OFF
        </a>
      </header>

      {/* Hero Section */}
      <section id="early-access" className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-cyan-400 mb-8 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Pre-Launch Exclusive Offer
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Travel the World on Your Vibe. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Zero Roaming Stress
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          eSIM Vibe is launching soon! Join our waitlist today and secure an exclusive <strong className="text-white font-semibold">35% OFF discount</strong> on your first high-speed global mobile data pack.
        </p>

        {/* Waitlist Form Box */}
        <div className="max-w-md mx-auto p-2 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          {status === 'success' ? (
            <div className="py-6 px-4 text-center space-y-2">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="text-xl font-bold text-white">You&apos;re on the list!</h3>
              <p className="text-xs text-slate-400">
                We&apos;ve reserved your <span className="text-cyan-400 font-semibold">35% OFF discount</span>. We&apos;ll notify your email right at launch!
              </p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                required
                placeholder="Enter your email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 sm:border-none px-4 py-3.5 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition text-center shadow-lg shadow-cyan-500/25 disabled:opacity-50 whitespace-nowrap"
              >
                {status === 'loading' ? 'Securing...' : 'Claim 35% OFF 🔥'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-xs text-rose-400 mt-2 text-center">Something went wrong. Please try again!</p>
          )}
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-slate-400">
          <div className="flex items-center gap-2">✓ 150+ Countries Covered</div>
          <div className="flex items-center gap-2">✓ Instant QR Activation</div>
          <div className="flex items-center gap-2">✓ No Contracts or hidden fees</div>
        </div>
      </section>

      {/* Destinations Preview (No Prices, Pre-launch concept) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Global Connectivity at Launch</h2>
          <p className="text-slate-400 text-sm md:text-base">Get early access discounts for top travel destinations worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Turkey */}
          <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-3xl mb-2 block">🇹🇷</span>
                <h3 className="text-xl font-bold">Turkey</h3>
                <p className="text-xs text-slate-400">High-speed 5G Networks</p>
              </div>
              <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full font-medium">35% OFF Locked</span>
            </div>
            <p className="text-xs text-slate-400 my-4">Instant connection across Istanbul, Antalya, and nationwide.</p>
            <a href="#early-access" className="block text-center w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 transition text-xs font-semibold text-white">
              Reserve Early Access
            </a>
          </div>

          {/* USA */}
          <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-3xl mb-2 block">🇺🇸</span>
                <h3 className="text-xl font-bold">United States</h3>
                <p className="text-xs text-slate-400">Nationwide LTE / 5G</p>
              </div>
              <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full font-medium">35% OFF Locked</span>
            </div>
            <p className="text-xs text-slate-400 my-4">Seamless data coast-to-coast without expensive US roaming.</p>
            <a href="#early-access" className="block text-center w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 transition text-xs font-semibold text-white">
              Reserve Early Access
            </a>
          </div>

          {/* Japan */}
          <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-3xl mb-2 block">🇯🇵</span>
                <h3 className="text-xl font-bold">Japan</h3>
                <p className="text-xs text-slate-400">Ultra-fast Local Networks</p>
              </div>
              <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full font-medium">35% OFF Locked</span>
            </div>
            <p className="text-xs text-slate-400 my-4">Fast internet for Tokyo, Kyoto, and everywhere in between.</p>
            <a href="#early-access" className="block text-center w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 transition text-xs font-semibold text-white">
              Reserve Early Access
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">How eSIM Vibe Works</h2>
          <p className="text-slate-400 text-sm">No physical stores, no plastic SIM cards, no hassle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-blue-500/30">1</div>
            <h4 className="font-semibold mb-2">Join Waitlist</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Enter your email above to claim your exclusive 35% launch discount.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-cyan-500/30">2</div>
            <h4 className="font-semibold mb-2">Get Your Pass</h4>
            <p className="text-xs text-slate-400 leading-relaxed">At launch, pick your destination and receive an instant activation QR code.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-indigo-500/30">3</div>
            <h4 className="font-semibold mb-2">Connect Anywhere</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Scan the QR code and enjoy instant high-speed mobile data on arrival.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div>
            <div className="font-bold text-slate-300 text-sm mb-1">eSIM Vibe</div>
            <p>© 2026 eSIM Vibe. Global Travel Connectivity Services.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:support@esimvibe.app" className="hover:text-slate-300 transition">Contact: support@esimvibe.app</a>
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
