import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

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
export const HeaderPerfil = styled(Container)`
  height: 163px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LinkItem = styled(Link)`
  font-size: 18px;
  color: ${colors.roseColor};
  line-height: 21px;
  font-weight: bold;
`
export const HeaderPerfilContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
