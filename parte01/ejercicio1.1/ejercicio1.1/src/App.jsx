// Desafortunadamente, toda la aplicación está en el mismo componente. Refactoriza el código para que conste de tres componentes
// nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada
// componente mediante props. Header se encarga de mostrar el nombre del curso, Content muestra las partes y su número de
// ejercicios y Total muestra el número total de ejercicios.

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>La cantidad total de ejercicios equivale a: {props.total}</p>
    </>
  )
}

const App = () => {
  const curso = 'Half Stack application development'
  const parte1 = 'Fundamentals of React'
  const ejercicios1 = 10
  const parte2 = 'Using props to pass data'
  const ejercicios2 = 7
  const parte3 = 'State of a component'
  const ejercicios3 = 14

  return (
    <>
      <Header course={curso} />

      <Content
        part1={parte1} exercises1={ejercicios1}
        part2={parte2} exercises2={ejercicios2}
        part3={parte3} exercises3={ejercicios3}
      />

      <Total total={ejercicios1 + ejercicios2 + ejercicios3} />
    </>
  )
}

export default App