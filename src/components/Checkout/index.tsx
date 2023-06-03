import { useState } from 'react'
import * as Yup from 'yup'
import Button from '../Button'
import { ButtonGroup, Container, InputGroup, Row } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { priceFormat } from '../Menu'
import { getTotalPrice } from '../Cart'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

type Props = {
  onClick: () => void
}

const Checkout = ({ onClick }: Props) => {
  const [payActive, setPayActive] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: '',
      fullName: '',
      number: '',
      code: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O campo precisa ter 8 carcteres')
        .max(8, 'O campo precisa ter 8 carcteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string()
        .min(1, 'O campo precisa ter no minimo 1 carctere')
        .max(5, 'O campo precisa ter no maximo 5 carcteres')
        .required('O campo é obrigatório'),
      complement: Yup.string(),

      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 carcteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O campo precisa ter no minimo 3 carctere')
        .max(3, 'O campo precisa ter no maximo 3 carcteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter no minimo 2 carctere')
        .max(2, 'O campo precisa ter no maximo 2 carcteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter no minimo 2 carctere')
        .max(2, 'O campo precisa ter no maximo 2 carcteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),

        delivery: {
          receiver: values.receiver,
          address: {
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },

        payment: {
          card: {
            name: values.fullName,
            number: values.number,
            code: Number(values.code),

            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={payActive ? 'is-invisible' : ''}>
          <h2>Entrega</h2>
          <InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              value={form.values.receiver}
              type="text"
              name="receiver"
              id="receiver"
            />
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
