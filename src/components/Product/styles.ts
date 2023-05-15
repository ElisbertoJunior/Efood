import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.cardColor};
  position: relative;
`
export const HatingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardContent = styled.div`
  margin-top: -5px;
  border: 1px solid ${colors.roseColor};
  padding: 8px;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.roseColor};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.roseColor};
  margin: 16px 0;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
`
