import { useState } from 'react'
import './App.css'
import CardForm from './components/CardForm'
import SuccessCard from './components/SuccessCard'

const App = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailError(validateEmail(email))
    setIsSubmit(true)
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!email) {
      return 'Valid email required'
    } else if (!regex.test(email)) {
      return 'This is not a valid email format'
    }
    return ''
  }

  return (
    <>
      {emailError === '' && isSubmit ? (
        <SuccessCard email={email} />
      ) : (
        <CardForm
          email={email}
          emailError={emailError}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  )
}

export default App
