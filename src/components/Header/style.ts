import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.header`
  height: 360px;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Text = styled.h1`
  font-size: 36px;
  color: ${colors.roseColor};
  line-height: 42px;
  text-align: center;
`
