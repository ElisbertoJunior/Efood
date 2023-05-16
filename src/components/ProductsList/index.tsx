import Menu from '../../models/Menu'
import Restaurant from '../../models/Restautant'
import Product from '../Product'
import { MenuListContent, ProductsContainer, ProductsContent } from './styles'

type Props = {
  type: 'home' | 'menu'
  restaurants: Restaurant[]
  menuItens: Menu[]
}

const ProductsList = ({ restaurants, type, menuItens }: Props) => {
  if (type === 'home') {
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
  return (
    <ProductsContainer>
      <div className="container">
        <MenuListContent>
          {menuItens.map((item) => (
            <Product
              type="menu"
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              infos={[]}
            />
          ))}
        </MenuListContent>
      </div>
    </ProductsContainer>
  )
}

export default ProductsList
