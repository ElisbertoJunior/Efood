import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  //if (!restaurant) return <Loader />

  return (
    <>
      <Header type="perfil" />
      {!restaurant ? (
        <Loader />
      ) : (
        <>
          <Banner restaurant={restaurant} />
          <Menu menuItens={restaurant.cardapio} />
        </>
      )}
    </>
  )
}

export default Perfil
