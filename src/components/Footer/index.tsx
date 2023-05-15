import { FooterContainer } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={'images/logo.png'} alt="Logo Efood" />
      <ul>
        <li>
          <a href="#">
            <img src={'icons/insta.png'} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={'icons/face.png'} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={'icons/twitter.png'} />
          </a>
        </li>
      </ul>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </p>
    </FooterContainer>
  )
}

export default Footer
