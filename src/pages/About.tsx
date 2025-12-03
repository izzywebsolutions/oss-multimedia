export default function About() {
  return (
    <section className="container-max py-12">
      <h1 className="font-clash text-4xl">About OSS MULTIMEDIA</h1>
      <p className="text-warmgray mt-4 max-w-3xl">
        We are a Lagos-based creative and technical production company delivering high-impact media solutions.
        From multi-camera livestreams to cinematic documentaries, we combine storytelling, engineering, and logistics to
        help organizations communicate clearly and beautifully.
      </p>

      {/* Founder portrait */}
      <div className="grid md:grid-cols-2 gap-6 items-center mt-10">
        <img src="public/pics/oluseye.jpg" loading="lazy" alt="Founder portrait" className="w-full h-96 object-cover rounded" />
        <div>
          <h3 className="font-clash text-3xl">Oluseye “Ebenezer” Ilusanmi</h3>
          <p className="text-warmgray">Founder & Technical Director</p>
          <p className="text-sm text-warmgray mt-3">From a young age, Oluseye “Ebenezer” Ilusanmi was driven by one question:
“How can creativity and technology work together to tell powerful stories?”

That passion became the foundation of OSS Multimedia.

Ebenezer built the company from the ground up—learning every cable, camera, light, and software needed to turn ideas into reality. Today, he brings years of hands-on experience in media production, branding, cinematography, and technical direction. His greatest strength is his ability to take a client’s rough idea and shape it into something professional, impactful, and visually unforgettable.

For him, every project is more than a job;
it’s an opportunity to help someone’s vision come alive.

His leadership, creativity, and commitment to quality continue to guide OSS Multimedia as a trusted partner for businesses, creators, and organizations who want their message to stand out.</p>
        </div>
      </div>

      {/* Brand Values Carousel */}
      <div className="mt-12">
        <div className="carousel w-full rounded border border-white/10 bg-base-100/10">
          {[
            'Creativity','Excellence','Discipline','Humility','Innovation','Storytelling','Professionalism','On-time Delivery'
          ].map((label, idx) => (
            <div key={label} id={`slide-${idx}`} className="carousel-item w-full flex items-center justify-center h-36">
              <div className="text-center">
                <div className="text-lagosgold font-clash text-xl">{label}</div>
                <div className="text-xs text-warmgray mt-1">Our core value</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          { title: 'Mission', desc: 'Enable brands, churches, and communities to tell powerful stories that inspire action.' },
          { title: 'Expertise', desc: 'Livestreaming, photography, videography, rental operations, and hands-on training.' },
          { title: 'Approach', desc: 'Detail-driven, on schedule, and tailored to context—no two projects are the same.' },
        ].map((i) => (
          <div key={i.title} className="p-6 bg-base-100/10 border border-white/5 rounded-md">
            <h3 className="font-clash text-xl text-lagosgold">{i.title}</h3>
            <p className="text-sm text-warmgray mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
