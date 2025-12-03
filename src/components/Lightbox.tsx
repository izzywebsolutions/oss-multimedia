import { useEffect } from 'react'

type Props = { open: boolean; img?: string; onClose: () => void }

export default function Lightbox({ open, img, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !img) return null

  return (
    <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center" onClick={onClose}>
      <img src={img} alt="Preview" className="max-h-[85vh] max-w-[90vw] object-contain" />
    </div>
  )
}
