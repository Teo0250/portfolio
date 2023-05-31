import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButtom } from './styles'

const Project = () => (
  <Card>
    <Title>To-do list Project</Title>
    <Paragraph type="secundario">To-do list made with VueJS</Paragraph>
    <LinkButtom>Click here to view</LinkButtom>
  </Card>
)

export default Project
