import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import SideBar from './Containers/Sidebar'
import About from './Containers/About'
import Projects from './Containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [darkThemes, setdarkThemes] = useState(false)

  function switchTheme() {
    setdarkThemes(!darkThemes)
  }

  return (
    <ThemeProvider theme={darkThemes ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <SideBar switchTheme={switchTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
