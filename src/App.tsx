import { Input } from './components/input'
import { Container, DrawnNumbers, Header, Main, UserNumberGame } from './styles'

function App() {
  return (
    <Container>
      <Header>
        <UserNumberGame>
          <h2>Digite os seus números</h2>
          <Input
            id="userNumber"
            hasButton
            placeholder={'ex.: 01,20,65,78,07,33'}
            option="Adicionar"
          />
        </UserNumberGame>
        <DrawnNumbers>
          <h2>Digite os números sorteados</h2>
          <Input
            id="resultNumber"
            hasButton
            placeholder={'ex.: 01,20,65,78,07,33'}
            option="Conferir"
          />
        </DrawnNumbers>
      </Header>
      <Main>
        <Input
          id="gameOne"
          hasButton={false}
          title="Jogo 1"
          value={'01, 02, 03'}
          readOnly
        />
      </Main>
    </Container>
  )
}

export default App
