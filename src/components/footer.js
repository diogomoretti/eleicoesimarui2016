import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <p className='footer-message'>
          A intenção dessa página é mostrar de uma maneira simples os candidatos para o eleitor =]
          <br />
          As informações contidas nessa página foram retiradas do <a className='footer-link' href='http://divulgacandcontas.tse.jus.br' target='_blank'>site oficial do TSE</a>, seguindo as normas da <a className='footer-link' href='http://www.tse.jus.br/transparencia/acesso-a-informacao/acesso-a-informacao' target='_blank'>transparência</a>.
          <br />
          Essa é uma aplicação open-source e sob a <a className='footer-link' href='https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT' target='_blank'>licença MIT</a>. Todo o código pode ser encontrado no <a className='footer-link' href='https://github.com/diogomoretti/eleicoesimarui2016.org' target='_blank'>Github</a>.
          <br />
          Caso essa página esteja infrindo alguma lei ou algum terceiro esteja sendo prejudicado, por favor entre em contato para que os devidos procedimentos sejam feitos.
        </p>
      </div>
    </footer>
  )
}

export default Footer
