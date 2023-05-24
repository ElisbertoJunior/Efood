import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { useGetRestaurantQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) return <h3>Carregando...</h3>

  return (
    <>
      <Header type="perfil" />
      <Banner restaurant={restaurant} />
      <Menu menuItens={restaurant.cardapio} />
    </>
  )
}

export default Perfil
