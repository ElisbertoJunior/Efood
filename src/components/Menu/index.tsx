import { useState } from 'react'
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

import { MenuItem } from '../../pages/Home'

type Props = {
  menuItens: MenuItem[]
}

interface ModalState extends MenuItem {
  isVisible: boolean
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
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
              <button>
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
