export default function WhatsAppFloat() {
  const phone = '2348012345678' // replace with actual business number
  const url = `https://wa.me/${phone}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="btn btn-circle bg-emerald border-none shadow-lg hover:brightness-110">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-white">
          <path d="M19 17.5c-.3-.1-1-.5-1.2-.6-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1-1.6-.6-2.8-1.7-3.7-3.1-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2 0-.5-.3-.5-.5-.5h-.4c-.1 0-.4.1-.6.3-.7.7-1 1.7-1 2.6 0 .3.1.6.2.9 0 .1.1.1.1.2.1.2.2.4.3.6 1 1.8 2.5 3.1 4.3 4 .3.1.6.2.9.3.4.1.8.1 1.1.1.4 0 .8 0 1.2-.1.4-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.3z"/>
          <path d="M26.1 5.9C23.3 3.1 19.8 1.6 16 1.6 8.6 1.6 2.6 7.6 2.6 15c0 2.3.6 4.5 1.7 6.5L2 30.4l9-2.3c1.9 1 4.1 1.5 6.3 1.5 7.4 0 13.4-6 13.4-13.4 0-3.6-1.4-7.1-4.2-9.9zM16 27.7c-2 0-3.9-.5-5.6-1.4l-.4-.2-5.3 1.4 1.4-5.2-.3-.5c-1-1.7-1.6-3.7-1.6-5.7 0-6.3 5.1-11.4 11.4-11.4 3 0 5.9 1.2 8.1 3.4C25.9 10 27.3 12.4 27.3 15c.1 6.3-5.1 11.4-11.3 12.7z"/>
        </svg>
      </div>
    </a>
  )
}
