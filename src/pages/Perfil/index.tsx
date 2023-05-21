import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'

import { Restaurant } from '../Home'
import Menu from '../../components/Menu'

const Perfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
