import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [operant1, setOperant1] = useState("");
  const [operant2, setOperant2] = useState("");
  const [result, setResult] = useState("")
  const calculate = (action) => {
    const n1 = parseFloat(operant1);
    const n2 = parseFloat(operant2);


    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter a valid numbers");
      return;
    } else {
      switch (action) {
        case "add":
          setResult(n1 + n2);
          break;
        case "substract":
          setResult(n1 + -n2);
          break;
        case "multiply":
          setResult(n1 * n2);
          break;
        case "divide":
          if (n2 === 0) {
            setResult("Cannot divide by zero");
          } else {
            setResult(n1 / n2);
            break;
          }
        default:
          setResult("")
      }
    }
  }

  return (
    <div style={{ backgroundColor: "lightgray", width:["100vw"], height:["100vh"],  margin:"auto"}}>


      <div style={{ display:"flex", justifyContent:"center", flexDirection:'column', margin:"auto", alignItems:"center"}}>
        <h1>Calculator</h1>
        <div>

       
       <input
            type="text"
            value={operant1}
            onChange={(e) => setOperant1(e.target.value)}
            placeholder="Enter Number"
            style={{
              padding: "0.8rem 1rem",
              width: "180px",
              border: "2px solid #66a6ff",
              borderRadius: "8px",
              outline: "none",
              fontSize: "1rem",
              background: "#f9f9f9",
              color: "#333",
              marginRight:'1em'
            }}
          />
        <input
            type="text"
            value={operant2}
            onChange={(e) => setOperant2(e.target.value)}
            placeholder="Enter Number"
            style={{
              padding: "0.8rem 1rem",
              width: "180px",
              border: "2px solid #66a6ff",
              borderRadius: "8px",
              outline: "none",
              fontSize: "1rem",
              background: "#f9f9f9",
              color: "#333",
            }}
          />
        </div>

        <div style={{margin:"2em", display:"flex", gap:"1em"}}>
          <button style={{backgroundColor:'skyblue',padding:"0.6em 1em", fontSize:"1rem", borderStyle:"none",borderRadius:"5px"}} onClick={() => calculate("add")}>Add</button>
          <button style={{backgroundColor:'skyblue',padding:"0.6em 1em", fontSize:"1rem", borderStyle:"none",borderRadius:"5px"}} onClick={() => calculate("substract")}>Substract</button>
          <button style={{backgroundColor:'skyblue',padding:"0.6em 1em", fontSize:"1rem", borderStyle:"none",borderRadius:"5px"}} onClick={() => calculate("multiply")}>Multiply</button>
          <button style={{backgroundColor:'skyblue',padding:"0.6em 1em", fontSize:"1rem", borderStyle:"none",borderRadius:"5px"}} onClick={() => calculate("divide")}>Divide</button>
        </div>
        <div style={{color:'blue', fontSize:'1.2rem'}}>Output: {result}</div>
      </div>
    </div>

  )
}

export default App
