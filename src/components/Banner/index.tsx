import { Restaurant } from '../../pages/Home'
import { BannerContainer, RestaurantTitle, TypeTitle } from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <TypeTitle>{restaurant.tipo}</TypeTitle>
        <RestaurantTitle>{restaurant.titulo}</RestaurantTitle>
      </div>
    </BannerContainer>
  )
}

export default Banner
