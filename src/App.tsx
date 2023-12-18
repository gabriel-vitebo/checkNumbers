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
import { ChangeEvent, useState } from 'react'

function App() {
  const [userNumber, setUserNumber] = useState('')
  const [userNumberList, setUserNumberList] = useState<string[]>([])
  const [amount, setAmount] = useState(0)

  const handleUserNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.target.value)
  }

  const handleAddNumber = () => {
    setUserNumberList((prevList) => [...prevList, userNumber])
    setUserNumber('')
    setAmount(amount + 1)
  }

  console.log(userNumber)
  return (
    <Container>
      <Header>
        <UserNumberGame>
          <h2>Digite os seus números</h2>
          <Input
            id="userNumber"
            hasButton
            placeholder={'ex.: 01,20,65,78,07,33'}
            onChange={handleUserNumberChange}
            value={userNumber}
            option="Adicionar"
            onClick={handleAddNumber}
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
        {userNumberList.length >= 1 ? (
          <div className="buttonDelete">
            <DeleteButton />
          </div>
        ) : (
          <></>
        )}

        <div className="content">
          <UserGames>
            {userNumberList.map((number, index) => (
              <InputReadOnly
                key={index}
                id={amount.toString()}
                title={`jogo ${amount.toString()}`}
                value={number}
                readOnly
                hasButton
              />
            ))}
          </UserGames>
          <Result>
            {userNumberList.map((index) => (
              <InputReadOnly
                key={index}
                id={amount.toString()}
                title={`jogo ${amount.toString()}`}
                value="default"
                hasButton={false}
                readOnly
              />
            ))}
          </Result>
        </div>
      </Main>
    </Container>
  )
}

export default App
