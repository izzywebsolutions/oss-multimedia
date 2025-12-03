export default function Contact() {
  return (
    <section className="container-max py-12">
      <h1 className="font-clash text-4xl">Contact</h1>
      <p className="text-warmgray mt-2">Tell us about your project and we’ll get back within 24 hours.</p>

      <form className="mt-8 grid md:grid-cols-2 gap-4">
        <input className="input input-bordered rounded-none bg-base-100/10 border-white/10" placeholder="Full Name" />
        <input className="input input-bordered rounded-none bg-base-100/10 border-white/10" placeholder="Email" />
        <input className="input input-bordered rounded-none bg-base-100/10 border-white/10 md:col-span-2" placeholder="Phone / WhatsApp" />
        <textarea className="textarea textarea-bordered rounded-none bg-base-100/10 border-white/10 md:col-span-2" placeholder="Project details" rows={6} />
        <button className="btn rounded-none gold-btn border-none md:col-span-2">Send Message</button>
      </form>

      <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm text-warmgray">
        <div>
          <h3 className="font-clash text-lagosgold">Email</h3>
          <p>hello@ossmultimedia.ng</p>
        </div>
        <div>
          <h3 className="font-clash text-lagosgold">Phone</h3>
          <p>+234 801 234 5678</p>
        </div>
        <div>
          <h3 className="font-clash text-lagosgold">Location</h3>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </section>
  )
}
