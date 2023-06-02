import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, CartItem, Overlay, Price, SideBar } from './styles'
import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../Menu'
import { useState } from 'react'
import Checkout from '../Checkout'
import { MenuItem } from '../../pages/Home'

export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((acc, totalPrice) => (acc += totalPrice.preco), 0)
}

const Cart = () => {
  const { isVisible, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [isCheckout, setIsCheckout] = useState(false)

  if (isCheckout) {
    return (
      <CartContainer className={isVisible ? 'is-visible' : ''}>
        <Overlay
          onClick={() => {
            dispatch(close())
            setIsCheckout(false)
          }}
        />
        <SideBar>
          <Checkout onClick={() => setIsCheckout(false)} />
        </SideBar>
      </CartContainer>
    )
  }

  return (
    <CartContainer className={isVisible ? 'is-visible' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        {items.length > 0 ? (
          <>
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
              <span>{priceFormat(getTotalPrice(items))}</span>
            </Price>
            <Button onClick={() => setIsCheckout(true)} type="linkButton">
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
