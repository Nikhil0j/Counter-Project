import { useEffect, useState } from 'react'

function App() {
  // hum useState ka use krte hai kyuki wo ui me ek saath saari value ko update krdeta hai. Js me same kaam krne ke liye har element ko select krke krna hota tha
  let [counter, setCounter]= useState(0)
  useEffect(()=>{
    console.log("Count: ", counter)
  },[counter])
  // let counter = 15;
  let incValue = () =>{
    if(counter<20){
      counter = counter+1;
      setCounter(counter);
    }
    
    console.log("Counter is ",counter);
  }

  let decValue = () =>{
    if(counter>0){
      counter = counter-1;
      setCounter(counter);
      console.log("Counter is ",counter)
    }
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className='text-center space-y-4'>
      <h1 className='text-4xl'>Counter</h1>

      <h3 className='text-xl'>Counter Value: {counter}</h3>
      <button className='text-2xl px-4 py-2 bg-blue-500 text-white rounded' onClick={incValue}>
        Increase value {counter}</button>
      <br />
      <button className='text-2xl px-4 py-2 bg-red-500 text-white rounded' onClick={decValue}>
        Decrease value {counter}</button>
    </div>
    </div>
  )
}

export default App
