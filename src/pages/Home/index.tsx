import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Restaurant from '../../models/Restautant'

export interface MenuItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
}

const mainRestaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: 'images/sushi.png',
    hating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },

  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: 'images/macarrao.png',
    hating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    image: 'images/macarrao.png',
    hating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    image: 'images/macarrao.png',
    hating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    image: 'images/macarrao.png',
    hating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    image: 'images/macarrao.png',
    hating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  }
]

const Home = () => {
  return (
    <>
      <Header type="home" />
      <ProductsList restaurants={mainRestaurants} />
    </>
  )
}

export default Home
