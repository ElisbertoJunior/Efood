import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Menus from '../../models/Menu'
import Menu from '../../components/Menu'

const mainMenu: Menus[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: 'images/pizza.png',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },

  {
    id: 2,
    title: 'Pizza Marguerita',
    image: 'images/pizza.png',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    image: 'images/pizza.png',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    image: 'images/pizza.png',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    image: 'images/pizza.png',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    image: 'images/pizza.png',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => {
  return (
    <>
      <Header type="perfil" />
      <Banner />
      <Menu menuItens={mainMenu} />
    </>
  )
}

export default Perfil
