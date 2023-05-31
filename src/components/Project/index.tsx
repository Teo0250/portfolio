import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButtom } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragraph type="secundario">Lista de taferas feita com VueJS</Paragraph>
    <LinkButtom>Visualizar</LinkButtom>
  </Card>
)

export default Project
