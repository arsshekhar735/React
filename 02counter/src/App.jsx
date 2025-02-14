import { useState } from 'react';


function App() {
  
  let [counter, setCounter] = useState(15)

  const addValue =() =>{
    console.log("value added",counter)
    // counter = counter +1
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // These 4 will not work because that react update the Ui as in unstable_batchedUpdates. Basically in one go it update all
    // Solution is using Updater function given by useState
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)



    
  }
  const removevalue = () => {
    console.log("Value removed",counter)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      

      <button onClick={addValue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
