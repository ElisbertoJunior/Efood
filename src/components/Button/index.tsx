import { AddButton, ButtonMore } from './styles'

type Props = {
  typeButton: 'button' | 'linkButton'
  type: 'button' | 'submit'
  children: string | number
  to?: string
  onClick?: () => void
}

const Button = ({ typeButton, children, to, onClick, type }: Props) => {
  if (typeButton === 'button') {
    return (
      <ButtonMore onClick={onClick} type={'button'} to={to as string}>
        {children}
      </ButtonMore>
    )
  }

  return (
    <AddButton type={type} onClick={onClick}>
      {children}
    </AddButton>
  )
}
export default Button
