import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroVideoRotator from '../components/HeroVideoRotator'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[86vh] md:h-[92vh]">
        <HeroVideoRotator />
        <div className="hero-overlay h-full flex items-center">
          <div className="container-max">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-clash text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl"
            >
              Capturing Stories.
              <br />
              Powering Experiences.
              <br />
              Inspiring Change.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-warmgray mt-4 max-w-3xl"
            >
              From Lagos to the World — Professional Livestreaming • Photography • Videography • Rentals • Training
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link to="/contact" className="btn rounded-none gold-btn border-none">Book a Service</Link>
              <Link to="/rentals" className="btn rounded-none green-btn border-none">View Rentals</Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-4 text-sm text-warmgray"
            >
              Capturing Reality. Creating Magic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-4 flex items-center gap-4 text-warmgray"
            >
              <a href="https://www.tiktok.com/@starbossmedia" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-lagosgold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M21 8.5a6.5 6.5 0 0 1-5-2.4V16a5 5 0 1 1-5-5c.3 0 .7 0 1 .1V9a7 7 0 1 0 7 7V9a8.5 8.5 0 0 0 2  -.5z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/seyeilusanmi" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-lagosgold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88a1.94 1.94 0 0 1 0 3.88M3 8.25h3.88V21H3zm6.44 0H14v1.72a4.33 4.33 0 0 1 3.67-1.97C20.8 8 21 11.1 21 14.85V21h-3.88v-5.06c0-1.2 0-2.75-1.67-2.75s-1.92 1.3-1.92 2.67V21H9.44z"/></svg>
              </a>
              <a href="https://wa.me/message/JZCW37E74U6DI1" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-lagosgold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current"><path d="M19 17.5c-.3-.1-1-.5-1.2-.6-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1-1.6-.6-2.8-1.7-3.7-3.1-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2 0-.5-.3-.5-.5-.5h-.4c-.1 0-.4.1-.6.3-.7.7-1 1.7-1 2.6 0 .3.1.6.2.9 0 .1.1.1.1.2.1.2.2.4.3.6 1 1.8 2.5 3.1 4.3 4 .3.1.6.2.9.3.4.1.8.1 1.1.1.4 0 .8 0 1.2-.1.4-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.3z"/><path d="M26.1 5.9C23.3 3.1 19.8 1.6 16 1.6C8.6 1.6 2.6 7.6 2.6 15c0 2.3.6 4.5 1.7 6.5L2 30.4l9-2.3c1.9 1 4.1 1.5 6.3 1.5c7.4 0 13.4-6 13.4-13.4c0-3.6-1.4-7.1-4.2-9.9zM16 27.7c-2 0-3.9-.5-5.6-1.4l-.4-.2l-5.3 1.4l1.4-5.2l-.3-.5c-1-1.7-1.6-3.7-1.6-5.7c0-6.3 5.1-11.4 11.4-11.4c3 0 5.9 1.2 8.1 3.4C25.9 10 27.3 12.4 27.3 15c.1 6.3-5.1 11.4-11.3 12.7z"/></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="container-max py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-clash text-3xl">Our Core Services</h2>
          <Link to="/services" className="text-sm link-underline">See all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { title: 'Livestreaming', desc: 'Seamless multi-cam live production for churches and corporate events.' },
            { title: 'Photography', desc: 'Editorial-grade photos with cinematic lighting and color.' },
            { title: 'Videography', desc: 'Documentaries, promos, conferences, and more.' },
            { title: 'Equipment Rentals', desc: 'Professional cameras, lenses, audio, and lighting.' },
          ].map((c) => (
            <div key={c.title} className="card bg-base-100/10 border border-white/5 rounded-none hover:translate-y-[-2px] transition">
              <div className="card-body">
                <h3 className="font-clash text-xl text-lagosgold">{c.title}</h3>
                <p className="text-warmgray text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution (cinematic) */}
      <section className="container-max py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div>
            <h3 className="font-clash text-2xl text-lagosgold mb-3">The Problem We Saw</h3>
            <ul className="text-warmgray space-y-3 text-sm leading-relaxed">
              <li>• Professional media production is too expensive or inaccessible in Nigeria</li>
              <li>• Poor livestreams disappoint families abroad and ruin special moments</li>
              <li>• Churches & events suffer from low production value</li>
              <li>• Small businesses and creatives can’t compete globally</li>
              <li>• Unreliable vendors, inconsistent editing, and slow delivery</li>
              <li>• Good equipment is locked behind high prices</li>
            </ul>
          </div>
          <div>
            <h3 className="font-clash text-2xl text-emerald mb-3">Our Solution</h3>
            <ul className="text-warmgray space-y-3 text-sm leading-relaxed">
              <li>• World-class cinematic output at prices that actually make sense</li>
              <li>• Mobile studio that comes to YOU — anywhere in Nigeria</li>
              <li>• International broadcast quality with authentic Nigerian soul</li>
              <li>• Skilled team that shows up early and delivers on time</li>
              <li>• Full-service: shoot → edit → livestream → rent → train — all in one place</li>
              <li>• Hollywood-grade editing, color, and sound</li>
              <li>• Affordable rentals so every creator can access premium gear</li>
            </ul>
          </div>
        </motion.div>
        <div className="text-center mt-10 font-clash text-lagosgold">“Whatever your budget, we create magic.”</div>
      </section>

      {/* Why Choose OSS */}
      <section className="container-max py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Creativity', d: 'Emotional stories' },
            { t: 'Excellence', d: 'Global standards' },
            { t: 'Reliability', d: 'On-time delivery' },
          ].map((c) => (
            <div key={c.t} className="p-6 bg-base-100/10 border border-white/5 rounded-md">
              <h4 className="font-clash text-xl text-lagosgold">{c.t}</h4>
              <p className="text-sm text-warmgray mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="container-max py-8">
        <h2 className="font-clash text-3xl mb-6">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="relative group overflow-hidden rounded-md">
              <img src={`https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop`} alt="Featured" className="w-full h-52 object-cover opacity-90 group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-sm">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder portrait */}
      <section className="container-max py-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src="public/pics/oluseye.jpg" loading="lazy" alt="Founder portrait" className="w-full h-80 object-cover rounded" />
          <div>
            <h3 className="font-clash text-3xl">Oluseye “Ebenezer” Ilusanmi</h3>
            <p className="text-warmgray">Founder & Technical Director</p>
            <p className="text-sm text-warmgray mt-3">The creative mind and technical engine behind OSS Multimedia.
Ebenezer blends vision, precision, and innovation to deliver media solutions that stand out—every time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-max py-16">
        <h2 className="font-clash text-3xl mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: 'OSS delivered flawless livestream for our conference — crystal audio and zero downtime.', a: 'Lamide, Tech Conference' },
            { q: 'Professional team with great eye for detail. Our wedding film is stunning.', a: 'Ada & Segun' },
            { q: 'Reliable rental gear and on-time delivery across Lagos.', a: 'Chidera, Producer' },
          ].map((t) => (
            <div key={t.a} className="p-6 bg-base-100/10 border border-white/5 rounded-md">
              <p className="text-sm text-warmgray">“{t.q}”</p>
              <p className="mt-3 text-xs text-warmgray">— {t.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-max py-20">
        <div className="p-8 md:p-12 bg-gradient-to-br from-emerald/20 to-lagosgold/10 border border-white/10">
          <h3 className="font-clash text-2xl md:text-3xl">Ready to create something exceptional?</h3>
          <p className="text-warmgray mt-2">Let’s plan your production, event, or campaign today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn rounded-none gold-btn border-none">Book Now</Link>
            <Link to="/portfolio" className="btn rounded-none green-btn border-none">View Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
