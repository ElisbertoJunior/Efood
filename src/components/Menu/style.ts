import styled from 'styled-components'
import { colors } from '../../styles'
import { ProductsContent } from '../ProductsList/styles'

export const ProductsContainer = styled.section`
  background-color: ${colors.whiteColor};
`

export const MenuListContent = styled(ProductsContent)`
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin-top: 250px;
`
