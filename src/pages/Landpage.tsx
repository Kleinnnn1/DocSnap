export default function Landpage() {
  return (
    <div className="bg-[#0d0d0d] text-[#f0f0f0] font-sans overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 border-b border-[#2a2a2a] bg-[#0d0d0d]/85 backdrop-blur-md">
        <div className="font-serif text-2xl tracking-tight">
          Doc<span className="text-[#e8ff47]">Snap</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-[#888] text-sm hover:text-[#f0f0f0] transition-colors"
          >
            Features
          </a>
          <a
            href="#how"
            className="text-[#888] text-sm hover:text-[#f0f0f0] transition-colors"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-[#888] text-sm hover:text-[#f0f0f0] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#888] text-sm hover:text-[#f0f0f0] transition-colors"
          >
            Docs
          </a>
          <button className="bg-[#e8ff47] text-[#0d0d0d] px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-85 transition-opacity">
            Get Started Free
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
        {/* Glow bg */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,255,71,0.08) 0%, transparent 70%),
                radial-gradient(ellipse 40% 30% at 80% 60%, rgba(71,196,255,0.06) 0%, transparent 60%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(#2a2a2a 1px, transparent 1px),
                linear-gradient(90deg, #2a2a2a 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 border border-[#2a2a2a] rounded-full px-4 py-1.5 text-xs text-[#888] mb-8 animate-[fadeUp_0.6s_ease_both]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff47] animate-pulse" />
          No signup required for first 3 files
        </div>

        {/* Headline */}
        <h1 className="relative z-10 font-serif text-5xl md:text-7xl leading-[1.05] tracking-[-2px] mb-6 animate-[fadeUp_0.6s_ease_0.1s_both]">
          Your files,
          <br />
          <em className="italic text-[#e8ff47]">perfected</em> instantly.
        </h1>

        <p className="relative z-10 text-lg text-[#888] max-w-md leading-relaxed mb-10 animate-[fadeUp_0.6s_ease_0.2s_both]">
          Remove backgrounds, convert Word to PDF, and edit documents — all in
          one clean, fast workspace.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-[fadeUp_0.6s_ease_0.3s_both]">
          <button className="flex items-center gap-2 bg-[#e8ff47] text-[#0d0d0d] px-8 py-3.5 rounded-lg font-semibold text-base hover:-translate-y-0.5 hover:opacity-90 transition-all">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            Upload a file
          </button>
          <button className="bg-transparent text-[#f0f0f0] border border-[#2a2a2a] px-8 py-3.5 rounded-lg font-medium text-base hover:border-[#888] hover:bg-[#161616] transition-all">
            See how it works
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-[#e8ff47] mb-4">
          What we do
        </p>
        <h2 className="font-serif text-4xl md:text-5xl tracking-[-1px] leading-[1.1] mb-16">
          Three tools.
          <br />
          <em className="italic text-[#888]">Zero friction.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-[#2a2a2a] rounded-2xl overflow-hidden">
          {[
            {
              icon: "🖼️",
              title: "Remove Background",
              desc: "AI-powered background removal in seconds. Perfect cutouts for products, portraits, and logos — no manual masking needed.",
              tag: "AI Powered",
            },
            {
              icon: "📄",
              title: "Word → PDF",
              desc: "Convert .docx files to perfectly formatted PDFs. Fonts, tables, and layouts preserved exactly as designed.",
              tag: "High Fidelity",
            },
            {
              icon: "✏️",
              title: "Edit & Save PDF",
              desc: "Annotate, fill forms, reorder pages, and add text to any PDF. Export instantly with your changes baked in.",
              tag: "Non-Destructive",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative bg-[#141414] p-10 border-r border-[#2a2a2a] last:border-r-0 hover:bg-[#1e1e1e] transition-colors overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e8ff47] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl border border-[#2a2a2a] flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3 tracking-[-0.3px]">
                {feature.title}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                {feature.desc}
              </p>
              <span className="inline-block mt-5 text-[10px] font-semibold tracking-widest uppercase text-[#47c4ff] border border-[#47c4ff]/30 px-2.5 py-1 rounded">
                {feature.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="bg-[#161616] border-y border-[#2a2a2a] py-24 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#e8ff47] mb-4">
            The process
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[-1px] leading-[1.1] mb-16">
            As simple as
            <br />
            <em className="italic text-[#888]">1, 2, 3, done.</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#e8ff47] to-[#47c4ff] z-0" />

            {[
              {
                num: "1",
                title: "Upload your file",
                desc: "Drag & drop or click to upload. Supports PNG, JPG, DOCX, PDF.",
              },
              {
                num: "2",
                title: "Choose a tool",
                desc: "Select background removal, conversion, or PDF editing.",
              },
              {
                num: "3",
                title: "Process instantly",
                desc: "Our engine handles the heavy lifting in seconds.",
              },
              {
                num: "4",
                title: "Download & done",
                desc: "Get your clean, processed file. No watermarks. No fuss.",
              },
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#0d0d0d] border-2 border-[#e8ff47] flex items-center justify-center mx-auto mb-5 font-serif text-xl text-[#e8ff47]">
                  {step.num}
                </div>
                <h4 className="font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-[#888] text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-[#e8ff47] mb-4">
          Plans
        </p>
        <h2 className="font-serif text-4xl md:text-5xl tracking-[-1px] leading-[1.1] mb-16">
          Simple, honest
          <br />
          <em className="italic text-[#888]">pricing.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Free",
              price: "₱0",
              period: "",
              desc: "Great for trying things out",
              features: [
                "3 files per day",
                "Background removal",
                "Word to PDF conversion",
              ],
              missing: ["PDF editing", "Bulk processing"],
              featured: false,
            },
            {
              name: "Pro",
              price: "₱299",
              period: "/mo",
              desc: "For individuals who need more",
              features: [
                "Unlimited files",
                "Background removal",
                "Word to PDF conversion",
                "PDF editing",
              ],
              missing: ["Bulk processing"],
              featured: true,
            },
            {
              name: "Team",
              price: "₱799",
              period: "/mo",
              desc: "For teams & power users",
              features: [
                "Unlimited files",
                "Background removal",
                "Word to PDF conversion",
                "PDF editing",
                "Bulk processing",
              ],
              missing: [],
              featured: false,
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-10 border transition-all hover:-translate-y-1 ${
                plan.featured
                  ? "border-[#e8ff47] bg-gradient-to-b from-[#e8ff47]/5 to-[#141414]"
                  : "border-[#2a2a2a] bg-[#141414] hover:border-[#888]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8ff47] text-[#0d0d0d] text-[10px] font-bold tracking-[2px] uppercase px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <p className="text-xs font-semibold tracking-[2px] uppercase text-[#888] mb-4">
                {plan.name}
              </p>
              <div className="font-serif text-5xl tracking-[-2px] mb-1">
                {plan.price}
                {plan.period && (
                  <span className="text-base font-sans text-[#888]">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-[#888] text-sm mb-8">{plan.desc}</p>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <span className="text-[#e8ff47] font-bold">✓</span> {f}
                  </li>
                ))}
                {plan.missing.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2.5 text-sm text-[#888]"
                  >
                    <span className="text-[#2a2a2a] font-bold">×</span> {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.featured
                    ? "bg-[#e8ff47] text-[#0d0d0d] hover:opacity-85"
                    : "bg-transparent border border-[#2a2a2a] text-[#f0f0f0] hover:border-[#888] hover:bg-[#161616]"
                }`}
              >
                {plan.name === "Free" ? "Start for free" : `Get ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2a2a2a] px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#888] text-sm">
        <div className="font-serif text-xl">
          Doc<span className="text-[#e8ff47]">Snap</span>
        </div>
        <div>© 2025 DocSnap. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#f0f0f0] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#f0f0f0] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#f0f0f0] transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
