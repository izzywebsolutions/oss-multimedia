import { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  intervalMs?: number
  overlayClassName?: string
}

const sources = [
  '/hero-videos/Hero1.mp4',
  '/hero-videos/Hero2.mp4',
  '/hero-videos/Hero3.mp4',
  '/hero-videos/Hero4.mp4',
  '/hero-videos/Hero5.mp4',
  '/hero-videos/Hero6.mp4',
]

export default function HeroVideoRotator({ intervalMs = 18000, overlayClassName = '' }: Props) {
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Preload hint: memoize list so the browser can cache across swaps
  const srcList = useMemo(() => sources, [])

  useEffect(() => {
    const id = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIdx((p) => (p + 1) % srcList.length)
        setFade(false)
      }, 700) // fade duration
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs, srcList.length])

  useEffect(() => {
    // attempt to reload/play new source silently
    const v = videoRef.current
    if (v) {
      v.load()
      const p = v.play()
      if (p) p.catch(() => {/* ignore autoplay block */})
    }
  }, [idx])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video ref={videoRef} className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`} style={{ filter: 'brightness(1.1)' }} autoPlay muted loop playsInline>
        <source src={srcList[idx]} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-midnight/40 ${overlayClassName}`} />
    </div>
  )
}
