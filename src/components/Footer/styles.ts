import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.creamColor};
  height: 300px;
  padding: 40px 0;
  text-align: center;

  ul {
    display: flex;
    margin-top: 33px;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 10px;
    line-height: 12px;
    color: ${colors.roseColor};
    margin-top: 80px;
  }
`
