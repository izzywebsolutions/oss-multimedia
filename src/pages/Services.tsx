const services = [
  {
    title: 'Livestreaming & Broadcast Solutions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M21 6h-2V4h-2v2h-2v2h2v2h2V8h2zM3 6h10v12H3zm2 2v8h6V8z"/></svg>
    ),
    desc: 'End-to-end multi-cam production, graphics, talkback, bonded internet, remote guests, and broadcast delivery to YouTube, Facebook, and RTMP/CDN targets.'
  },
  {
    title: 'Photography & Videography',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M9.4 5l1.6-2h2l1.6 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm3.6 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0-2.5A2.5 2.5 0 1 1 15.5 12A2.5 2.5 0 0 1 13 14.5"/></svg>
    ),
    desc: 'Weddings, corporate, documentary, promos. Cinematic lighting, color-managed workflows, and pristine sound capture.'
  },
  {
    title: 'Post-Production & Editing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M2 6h20v2H2zm0 5h14v2H2zm0 5h20v2H2z"/></svg>
    ),
    desc: 'Color grading, audio post, motion graphics, and delivery masters optimized for web, broadcast, and social.'
  },
  {
    title: 'Creative Direction & Branding',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m1 17.93V20h-2v-.07A8.006 8.006 0 0 1 4.07 13H4v-2h.07A8.006 8.006 0 0 1 11 4.07V4h2v.07A8.006 8.006 0 0 1 19.93 11H20v2h-.07A8.006 8.006 0 0 1 13 19.93"/></svg>
    ),
    desc: 'Concept development, brand visual systems, campaign planning, and production supervision for consistent quality.'
  },
  {
    title: 'Equipment Rentals',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M20 6H4a2 2 0 0 0-2 2v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a2 2 0 0 0-2-2m-6 8H6v-2h8z"/></svg>
    ),
    desc: 'Cameras, lenses, lighting, audio, switchers, drones, and accessories. Flexible pickup/delivery within Lagos.'
  },
  {
    title: 'Training & Consultancy',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5"/></svg>
    ),
    desc: 'Workshops for media teams: camera ops, lighting, audio, livestream engineering, and post-production best practices.'
  },
]

export default function Services() {
  const seven = [
    'Photography (Portraits/Events)',
    'Videography (Events/Commercials)',
    'Livestreaming (Conferences/Weddings)',
    'Creative Direction (Storyboarding/Planning)',
    'Post-Production (Editing/Color Grading)',
    'Branding & Digital Assets (Content/Social Mgmt)',
    'Rentals (See Rentals page)',
  ]

  return (
    <section className="container-max py-12">
      <h1 className="font-clash text-4xl">Services</h1>
      <p className="text-warmgray mt-2 text-sm">We solve high costs & poor quality with affordable premium magic.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 border border-white/5 bg-base-100/10 rounded-md">
            <div className="flex items-start gap-3">
              <div className="text-lagosgold">{s.icon}</div>
              <div>
                <h3 className="font-clash text-2xl text-lagosgold">{s.title}</h3>
                <p className="text-warmgray mt-2 text-sm">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 7 sections summary */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        {seven.map((t) => (
          <div key={t} className="p-4 bg-base-100/10 border border-white/5">{t}</div>
        ))}
      </div>

      {/* Our Process Accordion */}
      <div className="mt-10 join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-white/10 bg-base-100/10">
          <input type="checkbox" />
          <div className="collapse-title font-clash text-lg">Consult</div>
          <div className="collapse-content text-sm text-warmgray">Tailored budgets.</div>
        </div>
        <div className="collapse collapse-arrow join-item border border-white/10 bg-base-100/10">
          <input type="checkbox" />
          <div className="collapse-title font-clash text-lg">Create</div>
          <div className="collapse-content text-sm text-warmgray">Cinematic output.</div>
        </div>
        <div className="collapse collapse-arrow join-item border border-white/10 bg-base-100/10">
          <input type="checkbox" />
          <div className="collapse-title font-clash text-lg">Deliver</div>
          <div className="collapse-content text-sm text-warmgray">Fast & flexible.</div>
        </div>
      </div>

      <p className="mt-6 text-xs text-warmgray">Pricing note: Flexible pricing—we work with your budget for magical results.</p>
    </section>
  )
}
