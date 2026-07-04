const STEPS = [
  ['Um', 'Escolha a casa', 'Sete casas na cidade. Uma delas é a sua.', ''],
  ['Dois', 'Escolha o barbeiro', 'O de sempre, ou um novo.', 'd1'],
  ['Três', 'Escolha a hora', 'Confirmado na hora. A gente te lembra no dia.', 'd2'],
]

export default function BookCta() {
  return (
    <section className="blk book-cta" id="agendar">
      <div className="wrap">
        <p className="eyebrow rv">Sua cadeira espera</p>
        <h2 className="tt rv d1">Agende seu <em>horário.</em></h2>
        <div className="steps">
          {STEPS.map(([k, title, text, delay], i) => (
            <div key={k} className={`step rv${delay ? ' ' + delay : ''}`}>
              <div className="k">
                <span className="kw">{k}</span>
                <span className="kn">0{i + 1}</span>
              </div>
              <div className="stxt">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#top" className="btn-flat rv d2">Agendar meu horário</a>
      </div>
    </section>
  )
}
