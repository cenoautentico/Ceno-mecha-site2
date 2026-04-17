import React, { useState } from "react";

export default function App() {
  const [activeImg, setActiveImg] = useState(null);

  const gallery = [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663557548939/cJCy3vEkciXmd6ykWiDfy8/were-jaguar-ceno_606c4906.png",
  ];

  const logo = "/logo-placeholder.png";

  return (
    <div className="min-h-screen bg-black text-white font-sans tracking-wide">
      <header className="p-6 border-b border-zinc-800 flex justify-between items-center">
        <img src={logo} className="h-10" alt="Ceno Autentico logo" />
        <nav className="space-x-6 text-sm text-zinc-300">
          <a href="#home">Home</a>
          <a href="#lore">Lore</a>
          <a href="#mecha">Mecha</a>
          <a href="#timeline">Timeline</a>
          <a href="#gallery">Gallery</a>
        </nav>
      </header>

      <section id="home" className="relative px-6 py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-95" />
        <img src={logo} className="absolute inset-0 m-auto opacity-5 max-h-[500px]" alt="" />

        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">ALTER-DIMÉNSION</h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            A cinematic universe where ancient gods, advanced technology, and dimensional war converge.
          </p>
        </div>
      </section>

      <section id="lore" className="px-6 py-16 border-t border-zinc-800 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Lore</h2>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          Beneath the Naica crystal caves lies a dimensional gateway to an advanced
          Mesoamerican civilization that never collapsed. Their world thrives on
          divine alloys—Obsidium, Jadium, Solar Aurorium, and Abyssium.
        </p>

        <p className="text-zinc-300 mb-6 leading-relaxed">
          Xerxes Biotech attempted to replicate this power. Led by Dr. Blackwood,
          they engineered a genetic catalyst using modified blue corn—triggering
          catastrophic mutations in Guatemala.
        </p>

        <p className="text-zinc-300 leading-relaxed">
          The result: hybrid entities, including the Were-Jaguar twins. Their
          existence ignites a war that bridges dimensions.
        </p>
      </section>

      <section id="mecha" className="px-6 py-16 border-t border-zinc-800">
        <h2 className="text-4xl font-bold mb-10 text-center">Sentinel Systems</h2>

        <div className="space-y-10 max-w-6xl mx-auto">
          {[
            { title: "Jaguar Sentinel", desc: "Close combat dominance powered by Obsidium and Jadium." },
            { title: "Eagle Sentinel", desc: "Solar-powered aerial supremacy unit." },
            { title: "Serpent Mecha", desc: "Abyssium siege platform with integrated pilot core." },
            { title: "Death Mecha", desc: "God-tier entity forged from abyssium and dark matter." },
          ].map((m, i) => (
            <div key={i} className="p-8 border border-zinc-800 bg-zinc-900 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-2">{m.title}</h3>
              <p className="text-zinc-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="timeline" className="px-6 py-16 border-t border-zinc-800 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Timeline</h2>

        <ul className="space-y-6 text-zinc-300">
          <li><strong>Ancient Era:</strong> Dimensional civilization develops advanced alloys.</li>
          <li><strong>Discovery:</strong> Naica caves reveal gateway to alternate dimension.</li>
          <li><strong>Xerxes Initiative:</strong> Blue corn experiments begin in Guatemala.</li>
          <li><strong>Catastrophe:</strong> Mayan village destroyed, Were-Jaguar twins created.</li>
          <li><strong>Present Day:</strong> Ceno discovers the mask and enters the war.</li>
        </ul>
      </section>

      <section id="gallery" className="px-6 py-16 border-t border-zinc-800">
        <h2 className="text-4xl font-bold mb-10 text-center">Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              onClick={() => setActiveImg(src)}
              className="rounded-xl cursor-pointer hover:scale-105 transition"
              alt="Were-Jaguar concept art"
            />
          ))}
        </div>

        {activeImg && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            onClick={() => setActiveImg(null)}
          >
            <img src={activeImg} className="max-h-[90%] rounded-xl" alt="Expanded artwork" />
          </div>
        )}
      </section>

      <footer className="px-6 py-6 border-t border-zinc-800 text-center text-sm text-zinc-500">
        © 2026 Ceno Autentico — Alter-Diménsion Universe
      </footer>
    </div>
  );
}
