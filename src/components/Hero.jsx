import GlassButton from './GlassButton.jsx'
import heroImg from '../assets/hero.jpg'
import clubeCream from '../assets/clube-cream.png'
import titulo from '../assets/titulo.png'

export default function Hero({ heroRef, phRef, on }) {
  return (
    <section className={`hero${on ? ' on' : ''}`} ref={heroRef} id="hero">
      <div className="ph" ref={phRef} style={{ backgroundImage: `url(${heroImg})` }} aria-hidden="true"></div>
      <div className="wrap">
        <p className="hero-tag kicker"><span className="hr" aria-hidden="true"></span>Barbearia Torres · Est. 1992</p>
        <h1 className="hero-title">
          <img src={titulo} alt="No seu tempo, do seu jeito." />
        </h1>
        <p className="sub">Agende pelo celular e chegue só na hora.</p>
        <div className="cta">
          <GlassButton href="#agendar">Agendar horário</GlassButton>
          <a href="#clube" className="btn-clube" aria-label="Conheça o Clube Torres">
            <img className="cl-logo" src={clubeCream} alt="Clube Torres" />
          </a>
        </div>
      </div>
    </section>
  )
}
