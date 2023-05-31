import EstiloGlobal, { Container } from './styles'
import SideBar from './Containers/Sidebar'
import About from './Containers/About'
import Projects from './Containers/Projects'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
