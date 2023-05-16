import { Link } from 'react-router-dom'
import {
  Container,
  HeaderPerfil,
  HeaderPerfilContainer,
  LinkItem,
  Links,
  Text
} from './style'

type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type }: Props) => {
  if (type === 'home') {
    return (
      <Container style={{ backgroundImage: 'url("images/fundo.png")' }}>
        <img height={58} width={125} src={'images/logo.png'} alt="Logo Efood" />
        <Text>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Text>
      </Container>
    )
  }

  return (
    <HeaderPerfil style={{ backgroundImage: 'url("images/fundo.png")' }}>
      <HeaderPerfilContainer>
        <nav>
          <Links>
            <li>
              <LinkItem to={'/'}>Restaurantes</LinkItem>
            </li>
            <li>
              <img
                height={58}
                width={125}
                src={'images/logo.png'}
                alt="Logo Efood"
              />
            </li>
            <li>
              <LinkItem to="#">0 produto(s) no carrinho</LinkItem>
            </li>
          </Links>
        </nav>
      </HeaderPerfilContainer>
    </HeaderPerfil>
  )
}

export default Header
