import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [myArray, setMyArray] = useState([])
  const [inputdata, setInputdata] = useState("")
  const deletedata = (i) => {
    let deleted = myArray.filter((x, index) => {
      return index !== i
    })
    setMyArray(deleted)
  }
  const editdata = (i) => {
    let editValue = prompt("Enter New Value")
    let data = myArray;

    data[i] = { inputValue: editValue }
    setMyArray([...data])
  }
  return (
    <div>
      <input
        onChange={(e) => { setInputdata(e.target.value) }}
        placeholder='enter your name'

      />
      <button onClick={() => {
        setMyArray(
          [...myArray, { inputValue: inputdata }]
        )
      }}>Add</button>
      <button onClick={()=>{setMyArray([])}}>Delete All</button>
      {
        myArray.map((e, i) => {
          return <>

            <p>{e.inputValue}</p>
            <button onClick={() => { deletedata(i) }}>Delete</button>
            <button onClick={() => { editdata(i) }}>Edit</button>
          </>
        })
      }
    </div>
  );
}

export default App;
