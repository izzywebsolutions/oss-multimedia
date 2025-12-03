import { useMemo, useState } from 'react'
import Lightbox from '../components/Lightbox'

const categories = ['All', 'Weddings', 'Church', 'Corporate', 'Concerts', 'Documentary'] as const

type Cat = typeof categories[number]

type Item = { id: number; img: string; cat: Cat }

const sample = (id: number): Item => ({ id, img: `https://picsum.photos/seed/oss-${id}/800/600`, cat: (['Weddings','Church','Corporate','Concerts','Documentary'] as Cat[])[id % 5] })

const items: Item[] = Array.from({ length: 18 }, (_, i) => sample(i+1))

export default function Portfolio() {
  const [active, setActive] = useState<Cat>('All')
  const filtered = useMemo(() => active === 'All' ? items : items.filter(i => i.cat === active), [active])
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState<string | undefined>()

  return (
    <section className="container-max py-12">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="font-clash text-4xl">Portfolio</h1>
        <a href="https://photos.google.com" target="_blank" rel="noreferrer" className="btn rounded-none gold-btn border-none">View Full Album on Google Photos</a>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)} className={`btn btn-xs rounded-none ${active === c ? 'gold-btn border-none' : 'bg-base-100/10 border border-white/10 text-warmgray'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((i) => (
          <button key={i.id} onClick={() => { setImg(i.img); setOpen(true) }} className="group relative overflow-hidden rounded">
            <img src={i.img} alt={i.cat} className="w-full h-56 object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-xs">Open</span>
            </div>
          </button>
        ))}
      </div>

      <Lightbox open={open} img={img} onClose={() => setOpen(false)} />
    </section>
  )
}
