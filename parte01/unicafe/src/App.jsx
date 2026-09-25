import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, all, averageRatio } = props

  const positive = parseInt((good / all) * 100)

  if (all === 0) {
    return (
      <div>
        <p>No feedback given yet.</p>
      </div>
    )
  } else {
    return (
      <>
        <table>
          <tbody>
            <Row  text="Good" value={good}/>
            <Row  text="Neutral" value={neutral}/>
            <Row  text="Bad" value={bad}/>
            <Row  text="All" value={all}/>
            <Row  text="Positive" value={`${positive} %`}/>
            <Row  text="Average" value={averageRatio}/>
          </tbody>
        </table>
      </>
    )
  }
}

const Row = (props) => {
  console.log(props)
  return (
    <>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = (good + bad + neutral)
  const score = good - bad
  const averageRatio = all === 0 ? 0 : score / all

  const handleGoodClick = () => { setGood(good + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }
  const handleBadClick = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={handleGoodClick} text="Add good review" />
      <Button handleClick={handleNeutralClick} text="Add neutral review" />
      <Button handleClick={handleBadClick} text="Add bad review" />

      <h1>Statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} all={all} averageRatio={averageRatio} />
    </div>
  )
}

export default App