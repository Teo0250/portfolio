import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ButtonTheme, Sticky } from './styles'

const SideBar = () => (
  <aside>
    <Sticky>
      <Avatar />
      <Title fontSize={20}> Matheus Medeiros </Title>
      <Paragraph type="secundario" fontSize={16}>
        Teo0250
      </Paragraph>
      <Description type="principal">Full-Stack Python Developer</Description>
      <ButtonTheme>Change Theme</ButtonTheme>
    </Sticky>
  </aside>
)

export default SideBar
