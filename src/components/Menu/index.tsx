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
import Menus from '../../models/Menu'
import { MenuItem } from '../../pages/Home'

type Props = {
  menuItens: Menus[]
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
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      foto: '',
      nome: '',
      descricao: '',
      preco: 0
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
                  return setModal({
                    isVisible: true,
                    id: 0,
                    foto: '',
                    nome: '',
                    descricao: '',
                    preco: 0
                  })
                }}
              >
                <Product
                  type="menu"
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  infos={[]}
                />
              </li>
            ))}
          </MenuListContent>
        </div>
      </ProductsContainer>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img onClick={closeModal} src={'images/close.png'} />
          </header>
          <div className="content">
            <img className="imageFood" src={'images/pizza.png'} />
            <div>
              <TitleMenu>Pizza</TitleMenu>
              <MenuDescription>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. Serve: de 2 a 3 pessoas
              </MenuDescription>
              <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
          </div>
        </ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Menu
