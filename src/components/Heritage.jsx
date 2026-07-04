import mrTorresBg from '../assets/mr-torres-bg.jpg'

const FACTS = [
  ['1992', 'Fundação'],
  ['7', 'Casas'],
  ['2', 'Países'],
]

export default function Heritage() {
  return (
    <section className="blk herit" id="heranca">
      <span className="yr" aria-hidden="true">1992</span>
      <div className="wrap">
        <div className="grid">
          <div className="herit-copy">
            <p className="eyebrow rv">A herança</p>
            <h2 className="tt rv d1">Começou numa <em>cadeira.</em></h2>
            <p className="quote rv d2"><b>Edimar Torres</b> abriu a primeira Torres no Caiçara, em 1992. O papo de trinta anos atrás da navalha virou livro. A barbearia virou ponto da cidade.</p>
            <p className="sign rv d3">Mr. Torres · <b>fundador</b></p>
            <div className="facts rv d3">
              {FACTS.map(([n, l]) => (
                <div className="fact" key={l}>
                  <div className="n">{n}</div>
                  <div className="l">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="herit-media">
            <figure className="portrait rv d1">
              <img src={mrTorresBg} alt="Edimar Torres, o Mr. Torres, ao lado da cadeira de barbeiro" loading="lazy" />
              <figcaption>Edimar Torres · <b>fundador · 1992</b></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
