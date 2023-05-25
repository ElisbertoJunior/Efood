import { useDispatch, useSelector } from 'react-redux'
import { Container, HeaderPerfil, LinkItem, Links, Text } from './style'

import fundo from '../../images/fundo.png'
import logo from '../../images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  if (type === 'home') {
    return (
      <Container style={{ backgroundImage: `url(${fundo})` }}>
        <img height={58} width={125} src={logo} alt="Logo Efood" />
        <Text>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Text>
      </Container>
    )
  }

  return (
    <HeaderPerfil style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <nav>
          <Links>
            <li>
              <LinkItem to={'/'}>Restaurantes</LinkItem>
            </li>
            <li>
              <img src={logo} alt="Logo Efood" />
            </li>
            <li>
              <LinkItem onClick={() => dispatch(open())} to="#">
                {items.length} produto(s) no carrinho
              </LinkItem>
            </li>
          </Links>
        </nav>
      </div>
    </HeaderPerfil>
  )
}

export default Header
