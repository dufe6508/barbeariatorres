import Button from './Button.jsx'
import logoCream from '../assets/logo-cream.png'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="pitchbox">
          <span className="tag">Pra diretoria da Torres</span>
          <h3>Essa página é uma proposta.</h3>
          <p>Podemos ir muito além dessa primeira página. Que tal construirmos o sistema inteiro juntos?</p>
          <ul>
            <li>Agendamento integrado no próprio site, fortalecendo a sua marca.</li>
            <li>Painel de gestão inteligente com agenda, caixa, comissão e contabilidade.</li>
            <li>Clube Torres por assinatura conectando todas as unidades.</li>
            <li>Dados e relatórios dos clientes sempre acessíveis.</li>
          </ul>
          <Button href="https://wa.me/5531999848388" target="_blank" rel="noopener noreferrer" variant="red">Vamos conversar</Button>
        </div>
        <div className="foot-meta">
          <img className="fl" src={logoCream} alt="Barbearia Torres" />
          <b>Barbearia Torres</b> · conceito de home reimaginada.<br />
          No seu tempo, do seu jeito · desde 1992.<br />
          Belo Horizonte / MG · Brasil | EUA.<br />
          <span style={{ opacity: .55 }}>Peça demonstrativa independente. Números ilustrativos ou públicos.</span>
        </div>
      </div>
    </footer>
  )
}
