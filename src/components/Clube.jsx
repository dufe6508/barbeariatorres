import clubeLogo from '../assets/clube-logo.png'

export default function Clube({ wordRef }) {
  return (
    <section className="blk clube" id="clube">
      <div className="bgword" ref={wordRef} aria-hidden="true">CLUBE</div>
      <div className="wrap">
        <div className="inner">
          <p className="club-label rv">Corte e barba ilimitados</p>
          <img className="cllogo rv d1" src={clubeLogo} alt="Clube Torres" />
          <p className="pitch rv d2">A sua barbearia por <em>assinatura.</em></p>
          <a href="#agendar" className="btn-cream rv d3">
            <span className="lbl">Assinar o Clube</span>
            <span className="ar" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
