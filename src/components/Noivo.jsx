import GlassButton from './GlassButton.jsx'
import noivoImg from '../assets/noivo.jpg'
import heroImg from '../assets/hero.jpg'

export default function Noivo() {
  return (
    <section className="blk noivo" id="noivo">
      <div className="noivo-bg-wrapper">
        <div className="bgim" style={{ backgroundImage: `url(${noivoImg})` }} aria-hidden="true"></div>
      </div>
      
      <div className="huge-bg-text" aria-hidden="true">NOIVO</div>
      
      <div className="wrap">
        <div className="noivo-content">
          <p className="eyebrow rv">O grande dia</p>
          <div>
            <h2 className="tt rv d1">Dia do <em>Noivo.</em></h2>
            
            <ul className="premium-list">
              <li className="rv d2"><span className="dash"></span> Sala 100% reservada</li>
              <li className="rv d2"><span className="dash"></span> Equipe exclusiva</li>
              <li className="rv d2"><span className="dash"></span> Cerveja e Bar Premium</li>
              <li className="rv d2"><span className="dash"></span> Corte, barba e a calma antes do sim</li>
            </ul>
            
            <a href="#agendar" className="btn-noivo-wide rv d3">Reservar o dia</a>
          </div>
        </div>
        
        <div className="polaroids rv d3">
           <div className="polaroid p1">
              <div className="p-img" style={{ backgroundImage: `url(${noivoImg})` }}></div>
           </div>
           <div className="polaroid p2">
              <div className="p-img" style={{ backgroundImage: `url(${heroImg})` }}></div>
           </div>
        </div>
      </div>
    </section>
  )
}
