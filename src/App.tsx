import EstiloGlobal, { Container } from './styles'
import SideBar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Projetos from './Containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
