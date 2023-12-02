import { useEffect, useState } from 'react'
import { Container, TableContainer, InputContainer } from './style'

type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: number
}
type CompanyType = {
  name: string
  catchPhrase: string
  bs: string
}
interface userInterface {
  id: number
  name: string
  username: string
  email: string
  address: AddressType
  phone: number
  website: string
  company: CompanyType
}

export function Table() {
  const [users, setUsers] = useState<userInterface[]>([])
  const [inputValue, setInputValue] = useState('')
  const [search, setSearch] = useState(false)
  const [searchedValue, setSearchedValue] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [users])

  function toFilterArray(obj) {
    const compareValue = obj.name.toLowerCase()
    const compareSecondValue = obj.username.toLowerCase()
    const compareThirdValue = obj.email.toLowerCase()
    const inputValueToLowerCase = inputValue.toLowerCase()
    return (
      compareValue === inputValueToLowerCase ||
      compareSecondValue === inputValueToLowerCase ||
      compareThirdValue === inputValueToLowerCase
    )
  }

  useEffect(() => {
    if (inputValue) {
      const itensFiltradosMap = users.filter(toFilterArray).map((object) => (
        <>
          <tr className="filteredList" key={object.id}>
            <td>{object.name}</td>
            <td>{object.username}</td>
            <td>{object.email}</td>
          </tr>
        </>
      ))
      setSearchedValue(itensFiltradosMap)
      setSearch(true)
    } else {
      setSearch(false)
    }
  }, [inputValue, users])

  function toShuffleList() {
    function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
    shuffleArray(users)
    console.log(users)
  }

  return (
    <>
      <Container>
        <InputContainer>
          Search
          <input type="text" onChange={(e) => setInputValue(e.target.value)} />
          <button type="button" onClick={toShuffleList}>
            SHUFFLE
          </button>
        </InputContainer>
        <TableContainer>
          <tr>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
          </tr>

          {inputValue && search ? (
            <>{searchedValue}</>
          ) : (
            users.map((object) => (
              <>
                <tr key={object.id}>
                  <td>{object.name}</td>
                  <td>{object.username}</td>
                  <td>{object.email}</td>
                </tr>
              </>
            ))
          )}
        </TableContainer>
      </Container>
    </>
  )
}
