import React from 'react';

export default function Home() {
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
            RoamFlow
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#destinations" className="hover:text-white transition">Destinations</a>
          <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <a 
          href="#destinations" 
          className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-full transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
        >
          Get eSIM Now
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-cyan-400 mb-8 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Global High-Speed 5G Coverage
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Stay Connected Worldwide <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Without Roaming Fees
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Instant digital eSIM for 160+ countries. Keep your primary phone number, switch networks on the fly, and enjoy seamless mobile data anywhere you travel.
        </p>

        {/* Search / Action Bar */}
        <div className="max-w-xl mx-auto p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col sm:flex-row gap-2 backdrop-blur-xl">
          <input 
            type="text" 
            placeholder="Search country (e.g. Turkey, Japan, USA)..." 
            className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
          />
          <a 
            href="#destinations"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition text-center shadow-lg shadow-blue-600/30"
          >
            Find Plans
          </a>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-slate-400">
          <div className="flex items-center gap-2">✓ Instant QR Delivery</div>
          <div className="flex items-center gap-2">✓ No Contracts</div>
          <div className="flex items-center gap-2">✓ 24/7 Support</div>
        </div>
      </section>

      {/* Popular Destinations Grid */}
      <section id="destinations" className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Popular eSIM Destinations</h2>
          <p className="text-slate-400 text-sm md:text-base">Affordable prepaid data plans with top local network providers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Turkey */}
          <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-3xl mb-2 block">🇹🇷</span>
                <h3 className="text-xl font-bold">Turkey</h3>
                <p className="text-xs text-slate-400">Turkcell / Vodafone 5G</p>
              </div>
              <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full font-medium">Top Choice</span>
            </div>
            <div className="my-6">
              <span className="text-3xl font-extrabold text-white">$4.50</span>
              <span className="text-slate-400 text-xs ml-1">/ 3 GB (30 Days)</span>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 transition text-xs font-semibold text-white">
              Buy eSIM Plan
            </button>
          </div>

          {/* USA */}
          <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-3xl mb-2 block">🇺🇸</span>
                <h3 className="text-xl font-bold">United States</h3>
                <p className="text-xs text-slate-400">AT&T / T-Mobile LTE</p>
              </div>
            </div>
            <div className="my-6">
              <span className="text-3xl font-extrabold text-white">$6.00</span>
              <span className="text-slate-400 text-xs ml-1">/ 5 GB (30 Days)</span>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 transition text-xs font-semibold text-white">
              Buy eSIM Plan
            </button>
          </div>

          {/* Japan */}
          <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-3xl mb-2 block">🇯🇵</span>
                <h3 className="text-xl font-bold">Japan</h3>
                <p className="text-xs text-slate-400">NTT Docomo / SoftBank</p>
              </div>
            </div>
            <div className="my-6">
              <span className="text-3xl font-extrabold text-white">$5.50</span>
              <span className="text-slate-400 text-xs ml-1">/ 3 GB (15 Days)</span>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 transition text-xs font-semibold text-white">
              Buy eSIM Plan
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">3 Steps to Get Online</h2>
          <p className="text-slate-400 text-sm">No physical store visits, no swap of SIM cards required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-blue-500/30">1</div>
            <h4 className="font-semibold mb-2">Select Your Plan</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Choose your travel destination and the data package that fits your trip.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-cyan-500/30">2</div>
            <h4 className="font-semibold mb-2">Scan QR Code</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Receive instant email with your eSIM QR code and scan it with your phone camera.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-indigo-500/30">3</div>
            <h4 className="font-semibold mb-2">Enjoy Internet</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Turn on data roaming upon arrival and connect instantly to local high-speed networks.</p>
          </div>
        </div>
      </section>

      {/* Footer (Compliance Required) */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div>
            <div className="font-bold text-slate-300 text-sm mb-1">RoamFlow eSIM</div>
            <p>© 2026 RoamFlow Inc. Global Travel Connectivity Services.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:support@roamflow.io" className="hover:text-slate-300 transition">Contact: support@roamflow.io</a>
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
