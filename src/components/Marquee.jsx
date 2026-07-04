import logoNavy from '../assets/logo-navy.png'

function Group() {
  return (
    <>
      <span className="mq-item"><i>No seu tempo,</i><em>do seu jeito.</em></span>
      <img className="mq-logo" src={logoNavy} alt="" />
      <span className="mq-item"><i>Barbearia Torres</i><em>desde 1992</em></span>
      <img className="mq-logo" src={logoNavy} alt="" />
      <span className="mq-item"><i>Belo Horizonte</i><em>Brasil | EUA</em></span>
      <img className="mq-logo" src={logoNavy} alt="" />
    </>
  )
}

export default function Marquee() {
  return (
    <div className="marq" aria-hidden="true">
      <div className="track">
        <div className="half"><Group /></div>
        <div className="half"><Group /></div>
      </div>
    </div>
  )
}
