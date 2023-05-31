import { Titles as StyleTitles } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <StyleTitles fontSize={props.fontSize}>{props.children}</StyleTitles>
)

export default Title
