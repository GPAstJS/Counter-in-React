import './App.css';
import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)
  return (
    <div style={
      { 
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }
    } className="container">
      <h1 style={
        {
          fontSize: '100px',
          fontWeight: '300',
          
        }
      }>{count}</h1>

      <div style={
        {
          display: "flex",
          flexDirection: "row"
        }
      }>
        <button onClick={() => { setCount(count - 1) }} style={
          {
            height: '60px',
            width: '100px',
            background: '#DC3545',
            border: 'none',
            borderRadius: '15px',
            margin: '5px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold'
          }
        }>Decrement</button>
        <button onClick={() => { setCount(0) }} style={
          {
            height: '60px',
            width: '100px',
            background: '#007BFF',
            border: 'none',
            borderRadius: '15px',
            margin: '5px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold'
          }
        }>Reset</button>
        <button onClick={() => { setCount(count + 1) }} style={
          {
            height: '60px',
            width: '100px',
            background: '#28A745',
            border: 'none',
            borderRadius: '15px',
            margin: '5px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold'
          }
        } >Increment</button>
      </div>
    </div>
  );
}


