import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
      eveniet maxime,voluptatem voluptatum blanditiis modi molestiae temporibus
      quam ratione minus saepe esse exercitationem porro quia perferendis neque
      iste. Rem, nam.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=Teo0250&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Teo0250&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
