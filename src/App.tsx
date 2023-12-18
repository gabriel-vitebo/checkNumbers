import { ChangeEvent, useState } from 'react'
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
  const [userNumber, setUserNumber] = useState('')
  const [userNumberList, setUserNumberList] = useState<string[]>([])
  const [drawnNumbers, setDrawnNumbers] = useState<string[]>([])
  const [amount, setAmount] = useState(0)

  const handleUserNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.target.value)
  }

  const handleAddNumber = () => {
    setUserNumberList((prevList) => [...prevList, userNumber])
    setUserNumber('')
    setAmount((prevAmount) => prevAmount + 1)
  }

  const handleDrawnNumbersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.split(',')
    setDrawnNumbers(numbers.map((num) => num.trim()))
  }

  const handleCheckNumbers = () => {
    // Perform the logic to check matching numbers and update the result field
    const results = userNumberList.map((userNumbers) => {
      const matchedNumbers = userNumbers
        .split(',')
        .map((num) => num.trim())
        .filter((num) => drawnNumbers.includes(num))
      return matchedNumbers.join(', ')
    })

    // Update the result field for each game
    setUserNumberList((prevList) =>
      prevList.map((userNumbers, index) => results[index]),
    )
  }

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
            onChange={handleDrawnNumbersChange}
            option="Conferir"
            onClick={handleCheckNumbers}
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
            {userNumberList.map((result, index) => (
              <InputReadOnly
                key={index}
                id={amount.toString()}
                title={`Resultado Jogo ${index + 1}`}
                value={result}
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
