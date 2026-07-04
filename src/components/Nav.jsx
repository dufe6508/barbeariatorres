import logoCream from '../assets/logo-cream.png'
import logoNavy from '../assets/logo-navy.png'

const LINKS = [
  ['unidades', 'Unidades'],
  ['clube', 'Clube'],
  ['noivo', 'Dia do Noivo'],
]

export default function Nav({ navRef, activeId, menuOpen, onToggleMenu }) {
  return (
    <>
      <header className="nav" ref={navRef} id="nav">
        <div className="wrap">
          <a href="#top" aria-label="Barbearia Torres — início">
            <img className="logo lt" src={logoCream} alt="Barbearia Torres" />
            <img className="logo dk" src={logoNavy} alt="Barbearia Torres" />
          </a>
          <nav className="mainnav">
            {LINKS.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={activeId === id ? 'act' : ''}>{label}</a>
            ))}
          </nav>
          <div className="right">
            <a href="#agendar" className="btn-outline">Agendar</a>
            <button
              className={`burger${menuOpen ? ' x' : ''}`}
              onClick={onToggleMenu}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div className={`mmenu${menuOpen ? ' open' : ''}`}>
          <a href="#top" onClick={onToggleMenu}>Início <i>01</i></a>
          {LINKS.map(([id, label], i) => (
            <a key={id} href={`#${id}`} onClick={onToggleMenu}>{label} <i>{String(i + 2).padStart(2, '0')}</i></a>
          ))}
          <a href="#agendar" onClick={onToggleMenu}>Agendar <i>05</i></a>
        </div>
      </header>
    </>
  )
}
