import { AddButton, ButtonMore } from './styles'

type Props = {
  type: 'button' | 'linkButton'
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ type, children, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonMore onClick={onClick} type={'button'} to={to as string}>
        {children}
      </ButtonMore>
    )
  }

  return <AddButton onClick={onClick}>{children}</AddButton>
}
export default Button
