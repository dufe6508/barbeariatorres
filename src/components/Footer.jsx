import Button from './Button.jsx'
import logoCream from '../assets/logo-cream.png'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="pitchbox">
          <span className="tag">Pra diretoria da Torres</span>
          <h3>Essa página é uma proposta.</h3>
          <p>Fizemos sem briefing. A marca é de vocês; a gente só subiu o acabamento. E dá pra ir muito além da home — a gente constrói o sistema inteiro:</p>
          <ul>
            <li>Agendamento dentro do site, na sua marca — sem terceirizado.</li>
            <li>Painel de gestão completo: agenda, caixa, comissão de barbeiro e contabilidade.</li>
            <li>Clube Torres por assinatura em todas as unidades.</li>
            <li>Dados do cliente e relatórios na mão de vocês.</li>
          </ul>
          <Button href="#" variant="red">Vamos conversar</Button>
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
