import GlassButton from './GlassButton.jsx'
import noivoImg from '../assets/noivo.jpg'

export default function Noivo() {
  return (
    <section className="blk noivo" id="noivo">
      <div className="bgim" style={{ backgroundImage: `url(${noivoImg})` }} aria-hidden="true"></div>
      <div className="wrap">
        <div>
          <p className="eyebrow rv">O grande dia</p>
          <h2 className="tt rv d1">Dia do <em>Noivo.</em></h2>
          <p className="tx rv d2">Sala fechada, equipe dedicada, você e os padrinhos. Corte, barba e a calma que o dia pede, antes do sim.</p>
          <GlassButton href="#agendar" className="btn-wedge--soft rv d3" style={{ marginTop: 26 }}>Reservar o dia</GlassButton>
        </div>
        <div></div>
      </div>
    </section>
  )
}
