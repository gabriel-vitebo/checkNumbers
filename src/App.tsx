import { Input } from './components/input'
import { Container, ResultGame, UserGame } from './styles'

function App() {
  return (
    <Container>
      <UserGame>
        <h2>Digite os seus números</h2>
        <Input
          id="userNumber"
          hasButton
          placeholder={'ex.: 01,20,65,78,07,33'}
        />
      </UserGame>
      <ResultGame>
        <h2>Digite os números sorteados</h2>
        <Input
          id="resultNumber"
          hasButton
          placeholder={'ex.: 01,20,65,78,07,33'}
        />
      </ResultGame>
    </Container>
  )
}

export default App
