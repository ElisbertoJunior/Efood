import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductsContainer = styled.section`
  background-color: ${colors.whiteColor};
`

export const ProductsContent = styled.ul`
  padding: 80px 170px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 48px;
`
