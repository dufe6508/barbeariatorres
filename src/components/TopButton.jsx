function ArrowUp() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
      <path d="M13 20V7.83l5.59 5.59L20 12l-8-8-8 8 1.41 1.41L11 7.83V20h2z" />
    </svg>
  )
}

export default function TopButton({ visible }) {
  return (
    <button
      className={`topbtn${visible ? ' show' : ''}`}
      aria-label="Voltar ao topo"
      onClick={() => scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
    >
      <span className="topbtn-box">
        <span className="topbtn-elem"><ArrowUp /></span>
        <span className="topbtn-elem"><ArrowUp /></span>
      </span>
    </button>
  )
}
