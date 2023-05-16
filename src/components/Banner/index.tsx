import { BannerContainer, RestaurantTitle, TypeTitle } from './styles'

const Banner = () => {
  return (
    <BannerContainer style={{ backgroundImage: 'url("images/macarrao.png")' }}>
      <div className="container">
        <TypeTitle>Italiana</TypeTitle>
        <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
      </div>
    </BannerContainer>
  )
}

export default Banner
