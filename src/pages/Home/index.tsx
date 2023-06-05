import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ProductsList from '../../components/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'

export interface MenuItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) return <Loader />

  return (
    <>
      <Header type="home" />
      <ProductsList restaurantList={restaurants} />
    </>
  )
}

export default Home
