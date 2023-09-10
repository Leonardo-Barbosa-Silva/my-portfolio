import styled from 'styled-components';
import Entry from './pages/Entry';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
`

function App() {

  return (
    <Container className='App' >
      <Entry />
      <About />
      <Skills />
      <Contact />
      <a href="#home" className='up'>
        <button type='button'>&#10132;</button>
      </a>
    </Container>
  )
}

export default App
