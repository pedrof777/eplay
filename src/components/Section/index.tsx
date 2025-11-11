import { Container, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({ background, children, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section
