import { useState, ChangeEvent } from 'react'
import { DeleteButton } from './components/deleteButton'
import { Input } from './components/input'
import { InputReadOnly } from './components/inputReadOnly'
import {
  Container,
  Header,
  UserNumberGame,
  DrawnNumbers,
  Main,
  UserGames,
  Result,
} from './styles'

function App() {
  const [userNumber, setUserNumber] = useState('')
  const [userNumberList, setUserNumberList] = useState<string[]>([])
  const [drawnNumbers, setDrawnNumbers] = useState<string[]>([])
  const [results, setResults] = useState<string[]>([])

  const handleUserNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.target.value)
  }

  const handleAddNumber = () => {
    setUserNumberList((prevList) => [...prevList, userNumber])
    setUserNumber('')
  }

  const handleDrawnNumbersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.split(',')
    setDrawnNumbers(numbers.map((num) => num.trim()))
    localStorage.setItem('userSavedGame', JSON.stringify(drawnNumbers))
  }

  const handleCheckNumbers = () => {
    const newResults = userNumberList.map((userNumbers) => {
      const matchedNumbers = userNumbers
        .split(',')
        .map((num) => num.trim())
        .filter((num) => drawnNumbers.includes(num))
      console.log(matchedNumbers)
      return matchedNumbers.join(', ')
    })
    setResults(newResults)
  }

  const handleDeleteAllGames = () => {
    setUserNumberList([])
    setResults([])
  }

  const handleDeleteGame = (index: number) => {
    // Implement the logic to delete the game at the specified index
    const newUserNumberList = [...userNumberList]
    newUserNumberList.splice(index, 1)
    setUserNumberList(newUserNumberList)

    // Also update the results array if needed
    const newResults = [...results]
    newResults.splice(index, 1)
    setResults(newResults)
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
            <DeleteButton onClick={handleDeleteAllGames} />
          </div>
        ) : (
          <></>
        )}

        <div className="content">
          <UserGames>
            {userNumberList.map((number, index) => (
              <InputReadOnly
                key={`userNumber-${index}`}
                id={`userNumber-${index}`}
                title={`jogo ${index + 1}`}
                value={number}
                readOnly
                hasButton
                onDelete={() => handleDeleteGame(index)}
              />
            ))}
          </UserGames>
          <Result>
            {userNumberList.map((_, index) => (
              <InputReadOnly
                key={`result-${index}`}
                id={`result-${index}`}
                title={`Resultado Jogo ${index + 1}`}
                value={results[index] || ''}
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
