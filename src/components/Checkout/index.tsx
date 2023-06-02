import { useState } from 'react'
import Button from '../Button'
import { ButtonGroup, Container, InputGroup, Row } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { priceFormat } from '../Menu'
import { getTotalPrice } from '../Cart'

type Props = {
  onClick: () => void
}

const Checkout = ({ onClick }: Props) => {
  const [payActive, setPayActive] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={payActive ? 'is-invisible' : ''}>
          <h2>Entrega</h2>
          <InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input type="text" name="receiver" id="receiver" />
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
          <ButtonGroup>
            <Button onClick={() => setPayActive(true)} type={'linkButton'}>
              Continuar com o pagamento
            </Button>
            <Button onClick={onClick} type={'linkButton'}>
              Voltar para o carrinho
            </Button>
          </ButtonGroup>
        </div>

        <div className={!payActive ? 'is-invisible' : ''}>
          <h2>Pagamento - Valor a pagar {priceFormat(getTotalPrice(items))}</h2>
          <InputGroup>
            <label htmlFor="fullName">Nome no cartão</label>
            <input type="text" name="fullName" id="fullName" />
          </InputGroup>
          <Row>
            <InputGroup maxWidth="450px">
              <label htmlFor="number">Número do cartão</label>
              <input type="text" name="number" id="number" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="code">CVV</label>
              <input type="text" name="code" id="code" />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input type="text" name="expiresMonth" id="expiresMonth" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input type="text" name="expiresYear" id="expiresYear" />
            </InputGroup>
          </Row>
          <ButtonGroup>
            <Button onClick={() => setPayActive(true)} type={'linkButton'}>
              Finalizar pagamento
            </Button>
            <Button onClick={() => setPayActive(false)} type={'linkButton'}>
              Voltar para a edição de endereço
            </Button>
          </ButtonGroup>
        </div>
      </form>
    </Container>
  )
}

export default Checkout
