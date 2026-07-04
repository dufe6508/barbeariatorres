import unitAlberto from '../assets/unit-alberto.jpg'
import unitEstoril from '../assets/unit-estoril.jpg'
import unitBuritis from '../assets/unit-buritis.jpg'
import unitCaicara from '../assets/unit-caicara.jpg'
import unitVila from '../assets/unit-vila.jpg'
import unitUsa from '../assets/unit-usa.jpg'

function Go({ label = 'Agendar' }) {
  return (
    <span className="go"><span className="go-t">{label}</span></span>
  )
}

function PicUnit({ img, delay, name, place, cta, wide, small, flag }) {
  const cls = `unit pic rv${delay ? ' ' + delay : ''}${wide ? ' wide' : ''}${small ? ' small' : ''}`
  return (
    <a className={cls} href="#agendar">
      <span className="im" style={{ backgroundImage: `url(${img})` }}></span>
      {flag && <span className="flagtag">{flag}</span>}
      <span className="meta">
        <h3>{name}</h3>
        <p>{place}</p>
        <Go label={cta} />
      </span>
    </a>
  )
}

export default function Units() {
  return (
    <section className="blk" id="unidades">
      <div className="wrap">
        <p className="eyebrow rv">Onde nos encontrar</p>
        <h2 className="tt rv d1" style={{ marginBottom: 40 }}>Sete casas, <em>dois países.</em></h2>
        <div className="units">
          <PicUnit img={unitAlberto} name="Alberto Cintra" place="União · Belo Horizonte" />
          <PicUnit img={unitEstoril} delay="d1" name="Estoril" place="Av. Barão Homem de Melo, 3380" />
          <PicUnit img={unitCaicara} small name="Caiçara" place="Av. Pedro II, 4100 · a primeira casa" />
          <PicUnit img={unitBuritis} small delay="d1" name="Buritis" place="Av. Prof. Mário Werneck, 3361" />
          <PicUnit img={unitVila} small delay="d2" name="Vila da Serra" place="Al. Oscar Niemeyer, 1369 · Nova Lima" />
          <PicUnit img={unitUsa} wide name="Torres Men Care · EUA" place="A mesma cadeira, do outro lado do mapa." cta="Conhecer" flag="EUA" />
        </div>
      </div>
    </section>
  )
}
