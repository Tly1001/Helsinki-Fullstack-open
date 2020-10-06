import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ course }) => { 
  return course.parts.map( part => 
    <Part name={part.name} exercises={part.exercises} /> 
    ) 
  }

const Total = ({ course }) => {
  let total = 0
  course.parts.forEach( p => total += p.exercises )
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))