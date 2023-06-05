import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  MenuDescription,
  MenuListContent,
  Modal,
  ModalContent,
  ProductsContainer,
  TitleMenu
} from './style'
import Product from '../Product'
import close from '../../images/close.png'

import { add, open } from '../../store/reducers/cart'

import { priceFormat } from '../../utils'

type Props = {
  menuItens: MenuItem[]
}

interface ModalState extends MenuItem {
  isVisible: boolean
}

const Menu = ({ menuItens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    id: 0,
    foto: '',
    nome: '',
    descricao: '',
    preco: 0,
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      foto: '',
      nome: '',
      descricao: '',
      preco: 0,
      porcao: ''
    })
  }

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(modal))
    dispatch(open())
    closeModal()
  }

  return (
    <>
      <ProductsContainer>
        <div className="container">
          <MenuListContent>
            {menuItens.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    id: item.id,
                    foto: item.foto,
                    nome: item.nome,
                    descricao: item.descricao,
                    preco: item.preco,
                    porcao: item.porcao
                  })
                }}
              >
                <Product
                  type="menu"
                  key={item.id}
                  image={item.foto}
                  title={item.nome}
                  description={item.descricao}
                  tipo={''}
                  id={item.id}
                />
              </li>
            ))}
          </MenuListContent>
        </div>
      </ProductsContainer>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img onClick={closeModal} src={close} />
          </header>
          <div className="content">
            <img className="imageFood" src={modal.foto} />
            <div>
              <TitleMenu>{modal.nome}</TitleMenu>
              <MenuDescription>{modal.descricao}</MenuDescription>
              <MenuDescription>Serve: {modal.porcao}</MenuDescription>
              <button onClick={addCart}>
                Adicionar ao carrinho - {priceFormat(modal.preco)}
              </button>
            </div>
          </div>
        </ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Menu
