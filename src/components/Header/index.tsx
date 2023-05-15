import { Container, Text } from './style'

const Header = () => {
  return (
    <Container style={{ backgroundImage: 'url("images/fundo.png")' }}>
      <img height={58} width={125} src={'images/logo.png'} alt="Logo Efood" />
      <Text>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Text>
    </Container>
  )
}

export default Header
