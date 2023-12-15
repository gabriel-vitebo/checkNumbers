import { DeleteButton } from './components/deleteButton'
import { Input } from './components/input'
import { InputReadOnly } from './components/inputReadOnly'
import {
  Container,
  DrawnNumbers,
  Header,
  Main,
  Result,
  UserGames,
  UserNumberGame,
} from './styles'

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
        <div className="buttonDelete">
          <DeleteButton />
        </div>
        <div className="content">
          <UserGames>
            <InputReadOnly
              id="gameOne"
              title="Jogo 1"
              value={'01-20-65-78-07-33'}
              readOnly
              hasButton
            />
          </UserGames>
          <Result>
            <InputReadOnly
              hasButton={false}
              id="gameOne"
              title="Resultado"
              value={'01-20-65-78-07-33'}
              readOnly
            />
          </Result>
        </div>
      </Main>
    </Container>
  )
}

export default App
