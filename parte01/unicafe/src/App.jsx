import { useState } from 'react'

const Button = (props) => {
  //console.log(props)
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //const [all, setAll] = useState(0)
  //const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    //setAll(all + 1)
    const valorActual = (good + 1)
    console.log("good increments", valorActual)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    //setAll(all + 1)
    const valorActual = (neutral + 1)
    console.log("neutral increments", valorActual)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    //setAll(all + 1)
    const valorActual = (bad + 1)
    console.log("bad increments", valorActual)
  }

  return (
    <div>
      <Button handleClick={handleGoodClick} text="Add good review" />
      <Button handleClick={handleNeutralClick} text="Add neutral review" />
      <Button handleClick={handleBadClick} text="Add bad review" />

      <p>Good reviews: {good}</p>
      <p>Neutral reviews: {neutral}</p>
      <p>Bad reviews: {bad}</p>

      {/*<p>All reviews: {all}</p>*/}
    </div>
  )
}

export default App