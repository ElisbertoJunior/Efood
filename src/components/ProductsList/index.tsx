import Restaurant from '../../models/Restautant'
import Product from '../Product'
import { ProductsContainer, ProductsContent } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const ProductsList = ({ restaurants }: Props) => {
  return (
    <ProductsContainer>
      <div className="container">
        <ProductsContent>
          {restaurants.map((restaurant) => (
            <Product
              type="home"
              key={restaurant.id}
              title={restaurant.title}
              image={restaurant.image}
              rating={restaurant.hating}
              infos={restaurant.infos}
              description={restaurant.description}
            />
          ))}
        </ProductsContent>
      </div>
    </ProductsContainer>
  )
}

export default ProductsList
