import Button from '../Button'
import { Container, InputGroup, Row } from './styles'

type Props = {
  onClick: () => void
}

const Checkout = ({ onClick }: Props) => {
  return (
    <Container>
      <h2>Entrega</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input type="text" name="fullName" id="fullName" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input type="text" name="address" id="address" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input type="text" name="city" id="city" />
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input type="text" name="zipCode" id="zipCode" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="houseNumber">Número</label>
            <input type="text" name="houseNumber" id="houseNumber" />
          </InputGroup>
        </Row>
        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input type="text" name="complement" id="complement" />
        </InputGroup>

        <Button type={'linkButton'}>Continuar com o pagamento</Button>
        <Button onClick={onClick} type={'linkButton'}>
          Voltar para o carrinho
        </Button>
      </form>
    </Container>
  )
}

export default Checkout
