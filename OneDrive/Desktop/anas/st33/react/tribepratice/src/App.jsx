// import { useState } from 'react'
import country ,{place,area,friends,people,demo} from './data.jsx'
import './App.css'


function App() {
 

  return (
    <>
   {/* <Api/>
  <Shashank/>
   <button onClick={fun}> click to increment</button>
   <p>{count}</p>
   <button onClick={fun1}> click to increment</button> */}
   <h3>{place}</h3>
  <h3>{area}</h3>
  <h3>{country}</h3>
  <h1>{friends[0]+" "+friends[1]}</h1>
  <h1>{people.age}</h1>
    <h2>{demo()}</h2>
    </>
  )
}

export default App
