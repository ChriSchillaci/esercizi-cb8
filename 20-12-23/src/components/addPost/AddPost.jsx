import { useState } from 'react'
import './index.css'

// Functional component !== class component (OOP)
// Controlled Components => Necessari quando create una form
const AddPost = ({ setPostListData }) => {
  const [inputValue, setInputValue] = useState("")
  const [textareaValue, setTextareaValue] = useState("")

  const onHandleSubmit = (event) => {
    event.preventDefault()
    const letters = 'abcdefghijklmnopqrstuvwxyz'

    setPostListData(prev => [...prev, {
      id: prev.length + 1,
      username: 'Bob',
      image: `https://robohash.org/50/50${letters[Math.floor(Math.random() * letters.length)]}`,
      title: inputValue,
      body: textareaValue,
      userId: 99,
      tags: ['coding', 'bootcamp'],
      reactions: Math.floor(Math.random() * 1000)
    }])

    onHandleClear()
  }

  const onHandleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const onHandleTextareaValue = (event) => {
    setTextareaValue(event.target.value)
  }

  const onHandleClear = () => {
    setInputValue("")
    setTextareaValue("")
  }

  return (
    <form className="AddPost" onSubmit={onHandleSubmit}>
      <input type="text" placeholder='Inserisci titolo' value={inputValue} onChange={onHandleInputValue} />
      <textarea
        rows="6"
        placeholder='Digita qualcosa di sensazionale'
        value={textareaValue}
        onChange={onHandleTextareaValue}>
      </textarea>
      <div className='AddPost__btns'>
        <input type="submit" value="Aggiungi post" />
        <button type='button' onClick={onHandleClear}>Pulisci tutto</button>
      </div>
    </form>
  )
}

export default AddPost