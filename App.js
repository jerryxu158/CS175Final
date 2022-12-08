import './App.css';

import React, {useState} from 'react'

function App() {
  const [returnedData, setReturnedData] = useState([{cardName:'', setCode:'', setNumber:0, price:0, storeName:''}
                                                  ,{cardName:'', setCode:'', setNumber:0, price:0, storeName:''}])
  const [params, setParams] = useState({cardName:'', setCode:'', setNumber:0})

  const setInput = (e) =>{
    const {name,value} = e.target
    console.log(value)
    if (name === "cardName" || name ==="setCode"){
      setParams(prevState =>({
        ...prevState,
        [name]: value
      }))
    }
    else{
      setParams(prevState =>({
        ...prevState,
        [name]:parseInt(value)
      }))
    }
  }

  const getData = async() =>{
    console.log('button click')
    const newData = await fetch('/api', {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        cardName: params.cardName,
        setCode: params.setCode,
        setNumber: params.setNumber
      })
    })
    .then(res => res.json())
    console.log('returned Data:')
    console.log(newData[0])
    setReturnedData(newData)
    
  }
  return (
    <div className="App">
      <input 
            name="cardName" 
            placeholder="cardName" 
            onChange={setInput}></input>
      <input 
            
            name="setCode" 
            placeholder="setCode" 
            onChange={setInput}></input>
      <input 
            type="number"
            name="setNumber" 
            placeholder="setNumber" 
            onChange={setInput}></input>
      <button onClick = {() => getData()}> Find</button>
      <p>card name: {returnedData[0].cardName}</p>
      <p>card set: {returnedData[0].setCode}</p>
      <p>card number: {returnedData[0].setNumber}</p>
      <p>price: ${returnedData[0].price}, ${returnedData[1].price}</p>
      <p>store: {returnedData[0].storeName}, {returnedData[1].storeName}</p>
    </div>
  );
}

export default App;
