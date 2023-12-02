import styled from 'styled-components'

export const Container = styled.div`
  color: white;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

export const InputContainer = styled.div`
  justify-content: center;
  align-items: center;

  gap: 1rem;
  display: flex;

  flex-direction: column;

  width: 50%;

  & input {
    width: 35%;
    border: none;
    outline: none;
    border-radius: 10px;
    padding-left: 15px;
    margin-bottom: 15px;
  }
  & input:hover {
    border: 2px solid #f4f4f4;
  }
  & input:focus {
    border: 2px solid #f4f4f4;
  }
`

export const TableContainer = styled.table`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30%;

  & tr {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding-top: 0.25rem;
  }

  & th {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    border: 1px solid #ccc;
  }

  & td {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .filteredList {
    margin-top: 15px;
    border: 1px solid #ccc;
  }
`
