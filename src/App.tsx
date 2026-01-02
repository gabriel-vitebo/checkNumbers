import { useState, ChangeEvent, useEffect, useRef } from 'react'
import { DeleteButton } from './components/deleteButton'
import { Input } from './components/input'
import { DetailsModal } from './components/detailsModal'
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

interface ModalGameResult {
  index: number
  matchedNumbers: string[]
  count: number
}

function App() {
  const [userNumber, setUserNumber] = useState('')
  const [userNumberList, setUserNumberList] = useState<string[]>([])
  const [drawnNumbers, setDrawnNumbers] = useState<string[]>([])
  const [results, setResults] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)
  const lastItemRef = useRef<HTMLDivElement | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [groupedResults, setGroupedResults] = useState<
    Record<number, ModalGameResult[]>
  >({})


  const formattedNumbers = (entry: string) => {
    const numberFound = entry.match(/\d+/g) || []
    return numberFound.map((num: string) => num.padStart(2, '0')).join(',')
  }

  const handleUserNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.target.value)
  }

  const handleAddNumber = () => {
    const formattedNumber = formattedNumbers(userNumber)

    if (!formattedNumber) return

    setUserNumberList((prevList) => [...prevList, formattedNumber])
    setUserNumber('')

    const storedNumbers =
      localStorage.getItem('@checkNumbers/userNumbers') || '[]'
    const numbersArray = JSON.parse(storedNumbers)
    numbersArray.push(formattedNumber)
    localStorage.setItem(
      '@checkNumbers/userNumbers',
      JSON.stringify(numbersArray),
    )
    inputRef.current?.focus()
  }

  const handleDrawnNumbersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value
    const resultNumberFormatted = formattedNumbers(numbers)
    const resultList = resultNumberFormatted.split(',')
    setDrawnNumbers(resultList.map((num) => num.trim()))
  }

  const handleCheckNumbers = () => {
    const newResults = userNumberList.map((userNumbers) => {
      const matchedNumbers = userNumbers
        .split(',')
        .map((num) => num.trim())
        .filter((num) => drawnNumbers.includes(num))
      const totalMatches = matchedNumbers.length
      return `(${totalMatches}) ${matchedNumbers.join(',')}`
    })
    localStorage.setItem(
      '@checkNumbers/gameResults',
      JSON.stringify(newResults),
    )
    setResults(newResults)
    console.log(results)
  }

  const handleDeleteAllGames = () => {
    localStorage.removeItem('@checkNumbers/userNumbers')
    localStorage.removeItem('@checkNumbers/gameResults')
    setUserNumberList([])
    setResults([])
  }

  const handleDeleteGame = (index: number) => {
    const newUserNumberList = [...userNumberList]
    newUserNumberList.splice(index, 1)
    setUserNumberList(newUserNumberList)

    const newResults = [...results]
    newResults.splice(index, 1)
    setResults(newResults)

    const storedUserNumbers =
      localStorage.getItem('@checkNumbers/userNumbers') || '[]'
    const storedGameResults =
      localStorage.getItem('@checkNumbers/gameResults') || '[]'

    if (storedUserNumbers && storedGameResults) {
      const parsedUserNumbers = JSON.parse(storedUserNumbers)
      const parsedGameResults = JSON.parse(storedGameResults)

      parsedUserNumbers.splice(index, 1)
      parsedGameResults.splice(index, 1)

      localStorage.setItem(
        '@checkNumbers/userNumbers',
        JSON.stringify(parsedUserNumbers),
      )
      localStorage.setItem(
        '@checkNumbers/gameResults',
        JSON.stringify(parsedGameResults),
      )
      setUserNumberList(parsedUserNumbers)
      setResults(parsedGameResults)
    }
  }

  const handleOpenDetails = () => {
    const grouped: Record<number, ModalGameResult[]> = {}

    userNumberList.forEach((userNumbers, index) => {
      const matchedNumbers = userNumbers
        .split(',')
        .map((n) => n.trim())
        .filter((n) => drawnNumbers.includes(n))

      const count = matchedNumbers.length

      if (count === 0) return

      if (!grouped[count]) {
        grouped[count] = []
      }

      grouped[count].push({
        index,
        matchedNumbers,
        count,
      })
    })

    setGroupedResults(grouped)
    setIsModalOpen(true)
  }


  useEffect(() => {
    const storedUserNumbers = localStorage.getItem('@checkNumbers/userNumbers')
    const storedGameResults = localStorage.getItem('@checkNumbers/gameResults')

    if (storedUserNumbers !== null) {
      setUserNumberList(JSON.parse(storedUserNumbers))
    }
    if (storedGameResults !== null) {
      setResults(JSON.parse(storedGameResults))
    }
  }, [])

  useEffect(() => {
    if (userNumberList.length === 0) return
    setTimeout(() => {
      lastItemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 50)
  }, [userNumberList])

  return (
    <Container>
      <Header>
        <UserNumberGame>
          <h2>Jogos</h2>
          <Input
            id="userNumber"
            hasButton
            placeholder={'Digite os seus números'}
            onChange={handleUserNumberChange}
            value={userNumber}
            option="Adicionar"
            onButtonClick={handleAddNumber}
            inputRef={inputRef}
          />
        </UserNumberGame>
        <DrawnNumbers>
          <h2>Resultado</h2>
          <Input
            id="resultNumber"
            hasButton
            placeholder={'Digite o resultado'}
            onChange={handleDrawnNumbersChange}
            option="Conferir"
            onButtonClick={handleCheckNumbers}
          />
        </DrawnNumbers>
        {results.length > 0 && (
          <button
            type="button"
            onClick={handleOpenDetails}
            style={{
              marginLeft: '1rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Ver detalhes
          </button>
        )}

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
              <div
                key={`userNumber-${index}`}
                ref={index === userNumberList.length - 1 ? lastItemRef : null}
              >
                <InputReadOnly
                  id={`userNumber-${index}`}
                  title={`jogo ${index + 1}`}
                  value={number}
                  readOnly
                  hasButton
                  onDelete={() => handleDeleteGame(index)}
                />
              </div>
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
    <DetailsModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      grouped={groupedResults}
    />
    </Container>
  )
}

export default App
