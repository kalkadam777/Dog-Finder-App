import { useRef, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { MainSide } from './components/MainSide/MainSide'
import { Dogs } from './components/Dogs/Dogs'
import axios from "axios";
import { Dialog } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  const [dogs, setDogs] = useState([])
  const [inputText, setInputText] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

    const getDogs = () => {
        setLoading(true)
        setError(false)
        axios.
        get(`https://dog.ceo/api/breed/${inputText}/images`)
        .then( (res) => {
            setTimeout(() => {
              setLoading(false)
            }, 5000);
            setDogs(res.data.message)
            setInputText('')
        })
        .catch( (error) => {
            console.log(error)
            setLoading(false)
            setError(true)
        })
    }

    const inputRef = useRef()

    const focusInput = () => {
        inputRef.current.focus()
    }

  return (
    <>
      <Header/>
      <MainSide getDogs={getDogs} setInputText={setInputText} inputRef={inputRef} inputText={inputText} />
      <Dogs dogs={dogs} isLoading={isLoading} isError={isError} focusInput={focusInput}/>
      {/* <Dialog/> */}
    </>
  )
}

export default App
