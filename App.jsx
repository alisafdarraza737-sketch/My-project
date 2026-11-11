import React from 'react'
import './App.css'

function Students(props) {
  return (
    <>
      <h1>List of Students</h1>
      <h2>Name: {props.abc.name}</h2>
      <h2>Age: {props.abc.age}</h2>
    </>
  )
}

function App() {
  const student = { id: 1, name: 'mark', age: 30 }

  return (
    <div>
      <h1 style={{ color: 'red' }}>hello world</h1>
      <h2>Another heading</h2>
      <p style={{ color: 'white', backgroundColor: 'blue', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>
        This is dummy paragraph
      </p>
      <p>This paragraph is used for styling</p>
      <Students abc={student} />
    </div>
  )
}

export default App