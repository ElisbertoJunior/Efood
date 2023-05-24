import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, CartItem, Overlay, Price, SideBar } from './styles'
import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../Menu'

const Cart = () => {
  const { isVisible, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, totalPrice) => (acc += totalPrice.preco), 0)
  }

  return (
    <CartContainer className={isVisible ? 'is-visible' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{priceFormat(item.preco)}</p>
              </div>
              <button
                onClick={() => dispatch(remove(item.id))}
                type="button"
              ></button>
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <span>{priceFormat(getTotalPrice())}</span>
        </Price>
        <Button type="linkButton">Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
