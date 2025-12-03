import { useState } from 'react'
import Lightbox from '../components/Lightbox'

type Item = { name: string; price: string; img: string }

const items: Item[] = [
  { name: 'Sony FX3', price: '₦85,000/day', img: 'https://images.unsplash.com/photo-1739742465329-df7fb0240632?w=800&q=80&fm=webp' },
  { name: 'Canon R5C', price: '₦95,000/day', img: 'https://images.unsplash.com/photo-1707849401033-3fe7fdd26e75?w=800&q=80&fm=webp' },
  { name: 'Sigma 24-70mm', price: '₦20,000/day', img: 'https://images.unsplash.com/photo-1681496160656-b37c9674812a?w=800&q=80&fm=webp' },
  { name: 'Aputure 600d Pro', price: '₦65,000/day', img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQDxUQDxIPDxAQEBYPEA4QERAQDw4QFxIWGBYRFhUYHjQhGBslGxcWITEhJSotLi4uFyAzODMtNygtMSsBCgoKDg0NGxAPGjIlHiU0LS0tNTctNy0tMDExNy03Ny8rKzctKzc2Ny0xMTcyLS0tKy04KysrMys4LTc4NystN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcGCAEDBAL/xABQEAACAgEBBAQGDQkGAgsAAAAAAQIDEQQFEiExBgcTQRQiUWGBkQgyNHFydJKhsrPBwtEjMzVCUlNzsfAXJYK00tMkYhUWJkNEhJOVosPh/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJhEBAAICAQIEBwAAAAAAAAAAAAECAxEEEjGRobHwBRMhQVFSYf/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACG6TdIa9DWpSTnKbahBNRWEuMm+5Lh6wJkFfbO6z65Z7fTzhHPiyqlGeV5XGWMetmRaLploLeWohB+S3NWPTLg/QwJ8HxVbGa3oSjKL5Si1JP0o+wAB1zvhH20ox9+SQHYDxWbX00fbajTx+FbWv5s8s+lOz489bol/5mn/AFAS4ICzprsyPPW6X0Wxl/I81vWHsqPPV1v4MLZ/RiBlAMNn1pbIX/iW/e0+p+2B0T62NlrlZdP4NM+PrwBle0tr6fTbvhFsKt/LjvPG9u4zj3sr1ntTKb6ZdKtNtN1S06tUae0jJ2xUMuXZtY48famXdXvSrwiMdLbvSthBuFnNSrjhYk+e8s+lLy8wzcA6NZq66YOd04VwXOU5KK97j3gd4MA251nUV5jpYO+X7yeYV++l7Z/MYHtjpnrNVlTtlGD/AO7r/Jwx5GlxfpbAuXanSXR6bhdfWpL9SL35+mMeK9JiW0utGqPDT0zm/wBu1qC+Sst+tFUOeebCkgNitga2Wo0tV81FStqjY1HO6m1nCySBD9Dn/d2m+LV/RRMAAAAAAAAACE6VdG6toU9nY5VyjxrtjxcX5Gv1ovCyvNzRNgDW/b2kv0N8tPqI7s48Yte0sh3Tg++L/FPiiO8PNhel3RejaWndN3izjmVN8UnOiflXlT4Zj3++k1rf0j2PqNBqJafUx3Zx4xksuu2HdZB98X61yfFAS2z9Tfu2W6ftEqYKd06pOLhBvd3nh5ay/R3nRdtuyftr7m+X56xv+Z2dHdpW00KNdDnC6+T1MnbCvwrTqiyHgyT7lGV888VlZx4jJfW7ehKnsfB7J0OmrFnhejrlVGt0L8it1qMHZS1LLeW3yfADGbb4y9vKcsrPjTbys8+PpOndo5Yjn0ZMy1XSSWKp6mnfnG5aiNMdbpowpVWplqKYPei8KUblGSWcwhW/F3sEfq+lc/A76fB1ide7CVd9NkaauwqqalXFck65SUuG67OGHxYQ+j2ZK7PYUai7d4S7GFtm77+4uB5rIVxeJb0WuDTnJNNc+Znl3Z10VUU6iVE6lOEYxo09s7bK64yslCNqxNvKsaju7zs3d6Tiow82z7rdI41yf5XU6yqvUXU2W1O16nX6up3KVbTwq9PFwi/FTtk3HIGGYrXfJf4vxOVudzl64v7DKY6/wWietrjHt7tL4VNwcqk5xp0KcU62nGErNVO2UYtZ3YrksEd0p0crdXWob85zsupsmoysnuVaydcLrGuMmoOEZTfPs8t5bYEPiHll/wDD8Bu19+X5mofgcaDQdrdZU7HDsYWTc1XK1yVclFpQTy85z6Du1fR/Vwm4qqdkXLdhbFeJZlNprPLgnnyY54w2HZXq1FKMUopckuCPf0Y6QXaS2UqWo2S8VSkt+KjKccuOeT8z8rMY1CnXNwsjKE4vEoyWGmKta4tfCj/MC1v+vG0f38f/AEqf9Jh+1Nu3ame/fZOyX/M+EfNFcorzIi/+lX5SPjcBKO8+HqCO7Q4cwPe9SfL1J4d8+XMDZvq9tc9laWT/AHCXoXBfyMiMW6r3/c+l/hP6cjKQAAAAAAAAAAAFS9f2l3q9JZ+zO6t/4owa+gy2iv8Arq02/s+uX7Gri2/JF12R/m4kMk6rMtXCrFs9az2n6eKltmbedCgnTGbreY+Mo9zi+cXhtOWWsZ3n3t59dnSNXqcL1bXVJOTjXbGU5PMcQjmHfjDbfLe5vCcNfWoT4qMlz3Zb2HlY/VafPjz7jo3SVZ3G1OXHOPJNJ+06T0eltibe7Pi3wdsWkm093jXlpcsvLeW223k8us6Q2WVdlLtJeLuqdlqsl7Vwk34i3m4yl383nuIvBxg6rTmm6TuMIxnTG2cIuCs34x3l2UasyzBzjJ1xjBuudbkorOXxGj6V2wcnbBXSlOU1NSVUob1jsceMJLCm3KLSUoOUt2STwQUl6D5mwJjR9IrIznvV12Rm8qqO7CFKVcatyO/GUXX2cYRcZxkvycHzWTvjt9drKdjTjKKj2Vam93FsrM9o2t5uc5yllYk5vu4GPL9ld/F/15iQ2Xs13uUYbrcY73j72JccbqwsJ+TIH3RqZQsttpkpythZFqLnVbXvyUnOK72sfqtirbcsQU4q2MabKLIynPN0LZuU25c4yeVxX7KIyfDisrHv5TG9l573z9/ygenaWrd9srWlHewlFZajGMVGKy+L4JcSOX3kexR/ryHRCH0o/aB9n3Bnb2Z1QQH2jk5SOcAfBwzs3TjdA2S6rf0Npf4T+nIyoxrq2r3dkaReXTxl8rj9pkoAAAAAAAAAAADEutSne2Tc+bhKqfqugn8zZlpB9Oat/ZmrXk01k/kxcvsI3jdZX8a3TnpP9j1a2bShwUvI8P3n/Xzkf6/mJjUQ3oteVcPf7iG4eYq49t11+G/4xh6M/X+0ece4c+v5jj1/MOHmPiT94veSSf8AWUdE5f1k5lLPI7dl6WNuprqsajW5Q3nLlhzSzLzID5rtWc93HiTFGrjp9LFVSi7bbVbZh53YQeYVyfnfH0tHx002TTpblGh/s70cRTjvN+I0ueFhp+RrvTIquzHcmgJDa8IO2VlclKFiVnDnBy4uEl3Szn1nhhHv8597speSMV38or8Wcyx3YwuCzz98DmPp+Y4qh3eeL+f/APTlY83oM46u+itetuddznBSrc4yjjKcJQa593Hl5wMV7I8sami+l1Uab99d8mBi3SLqx1FOZUf8RXz8RYsS88O/0ZArFROd0k9Rs6UG00008NNYafkPLKhoDzbo3TucDjdA2S6v1/dOj+KVfQRkBAdAv0Vo/ilX0ET4AAAAAAAAAAADp1tCsqnW8YsrlB55YlFrj6zuAdidTtWK6tLPLpPky/0mPW9Tmtcm1dokm20t67gs/ALvBCmOtezRyOXlz6+ZPZRr6mtd++0Xyrv9s8G2OqjVaaizUX6jQwqpg7Jy3r28LuS7Pi3yS720bAlS+yA2s4UafRxbSvnK+3HfCrd3YvzOU0/fgibMpL5v6/mc1R4t/wDK186D/r7SX0GwLp6G/aHCOnonXQm+d1s5xTjHzRUk2/Oks8cB6OiPQ+3atsqaJVVuqPbSdjlGLWd3C3Yvjx+Yzevqd18VhXaJLyb13+2ffsf4/wDFat+Sipeuc/wLtApCXU7r3zv0b9+Vz/8ArOP7G9d++0Xyrv8AbLwAFH/2N6799ovlXf6C2+jmwatDp4U1LLhHE7Wl2lsv1pyfnfHHJEqAAAAjdrbB02qX5eqE3yU/a2L/ABLj6DBts9VqeXpbV/DtWH8uP4FlgDX3a3Q7VafLspmor9dLeh8qPAgbNC13G0BFbR6O6TUfnaK23+tFbk/XHi/SB0dB442ZpF5NLV9BE4dGh0kaaoVV5UK4qEU3lqKWEd4AAAAAAAAAAAAAAAAAov2QXu3TfFbPrUXoUX7IH3bpvis/rUBVj+37xa9Vf/YjKXHwjef/ALnjPqKp/H7xb+z4b3QmS8k5S+TtLP2AfPse4/lta/JXp165X/gXSU77HuvjrpeXwePq7d/aXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKL9kD7t03xWf1qL0KL9kD7t03xWf1qAq38fvGwPVdsyrV9G69Nem6rXqIyUW4y912NNNcmmk/Qa//AI/eNjepb9B6f4eo/wA1aBMdDuiGn2XXOvTu2btkpWWXSjKcsLEV4qUUll8l3mQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACi/ZA+7dN8Vn9ai9Ci/ZA+7dN8Vn9agKu/H7xsb1LfoPT/D1H+atNcvx+8bG9S36D0/w9R/mrQM4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAov2QPu7TfFJ/Wl6Gv3XRtWnV6+Kok5+C12ae17rUVarPGim+eOT84Fd/j942N6lv0Hp/h6j/ADVprx2D+f7xfPUjtamWzo6OMn4RpnOy2Di0ty2+yUJRfKSw8PHJ+gCxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANb+nOhs02v1ELa3CNmrv1FUpJpWwts3m4vk17XOOKfA2QKt69tmxeno1WZ9pXb4Oo8NxwnCU23wzlOtY497AqBWLzfh5y2epDRWb1+olW4VOqFFVrTUbcW2ymot+2xJ4bXDPDmmUyrXnHD5zajorsuGk0VOnrcpRhDKlPd3m5tzecJLnJ9wEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhfXB+h7vh0/XQM0MC66tTubK3cZ7bUV1t5xu4UrM+f83j0gUJofz8P4kfpI24NQtPbu2KWM7slLHLOHk2509m/CMsY3oqWPJlZwB2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVX156nUeD11eDrwbt4TWr7aOXb2dq7LscZXBt72e7GC1CuuvP9G1fHIfU3AUHGHHP9M2q6LanUW6WEtVp1pLElFVK6N+9BRjie9FJLPHh3Y5mqkfbPhjHJ+Xgbd6D8zX/AA4/RQHeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjHWF0as2lpI6eqddco3xt3rFJrChOOFjv8ZfOZOAKP/sU1efdWm+RaXZp692EYvGYxUeHLgsHYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==' },
  { name: 'DJI Ronin RS3 Pro', price: '₦25,000/day', img: 'https://images.unsplash.com/photo-1658383177288-39a5922319e1?w=800&q=80&fm=webp' },
  { name: 'Blackmagic ATEM Vision Mixer', price: '₦45,000/day', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4vim3svhXRRtiPDHIl_Y9pScWbdUuERwYpmgwr2aZ8x7twyATOmOYLo&s' },
  { name: 'Sony A7S III', price: '₦65,000/day', img: 'https://images.unsplash.com/photo-1642396948131-69722a988455?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U29ueSUyMEE3UyUyMElJSXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Rode Wireless GO II', price: '₦10,000/day', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rode_Wireless_Go_II_microphones.jpg/1200px-Rode_Wireless_Go_II_microphones.jpg?20250426183001' },
  { name: 'Godox LED Light', price: '₦12,000/day', img: 'https://images.unsplash.com/photo-1745848038079-3c02ebc6a179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'DJI Mavic 3 Drone', price: '₦90,000/day', img: 'https://images.unsplash.com/photo-1679136578198-539e835445be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Manfrotto Tripod', price: '₦8,000/day', img: 'https://images.unsplash.com/photo-1643917369115-8a417739849f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuZnJvdHRvJTIwVHJpcG9kfGVufDB8fDB8fHww' },
  { name: 'LED Wall Panel', price: '₦120,000/day', img: 'https://images.unsplash.com/photo-1715433807693-138d921ef529?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExFRCUyMFdhbGwlMjBQYW5lbHxlbnwwfHwwfHx8MA%3D%3D' },
]

export default function Rentals() {
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState<string | undefined>()
  return (
    <section className="container-max py-12">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h1 className="font-clash text-4xl">Equipment Rentals</h1>
        <a href="#rentals-contact" className="btn rounded-none green-btn border-none">Request a Quote</a>
      </div>

      <div className="mt-4 p-4 bg-base-100/10 border border-white/10 rounded text-sm text-warmgray">
        Budget-friendly: Starting from ₦15,000/day. Cameras, Lenses, Gimbals, Lighting, Audio, Tripods, Backdrops.
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.name} className="card bg-base-100/10 border border-white/5 rounded-md overflow-hidden">
            <figure>
              <button onClick={() => { setImg(i.img); setOpen(true) }} className="block w-full">
                <img src={i.img} loading="lazy" alt={i.name} className="w-full h-48 object-cover" />
              </button>
            </figure>
            <div className="card-body">
              <h3 className="font-clash text-xl">{i.name}</h3>
              <p className="text-lagosgold text-sm">{i.price}</p>
              <div className="card-actions mt-4">
                <a href="#rentals-contact" className="btn btn-sm rounded-none gold-btn border-none">Book</a>
              </div>
            </div>
          </div>
        ))}
      </div>
        <aside className="lg:sticky lg:top-24 h-max p-4 bg-base-100/10 border border-white/10 rounded text-sm">
          <h3 className="font-clash text-xl text-lagosgold">How Rentals Work</h3>
          <ul className="mt-3 space-y-2 text-warmgray">
            <li>• Select gear</li>
            <li>• Custom quote</li>
            <li>• Deliver/setup</li>
          </ul>
        </aside>
      </div>

      <div id="rentals-contact" className="mt-12 p-6 border border-white/5 bg-base-100/10 rounded-md">
        <h3 className="font-clash text-2xl">How to Rent</h3>
        <ol className="mt-3 list-decimal list-inside text-warmgray text-sm space-y-1">
          <li>Send your gear list and dates via WhatsApp or the contact form.</li>
          <li>We confirm availability and share pickup/delivery options.</li>
          <li>Provide valid ID and a refundable deposit for select items.</li>
        </ol>
      </div>

      <Lightbox open={open} img={img} onClose={() => setOpen(false)} />
    </section>
  )
}
