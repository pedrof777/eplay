import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({ background, children, title }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.Title>{title}</S.Title>
      {children}
    </div>
  </S.Container>
)

export default Section
