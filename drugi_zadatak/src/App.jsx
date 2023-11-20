import { useState, useRef } from 'react'
import './App.css'
import Datum from './components/Datum'
import Logo from './components/Logo'
import Vrijeme from './components/Vrijeme';


function App() {
  const [rez1, postaviBroj1] = useState(0);
  const [rez2, postaviBroj2] = useState(0);
//   function lijevo(){
//       if (rez1>0){
//         return(
//           <p>{rez1}:{rez2}</p>
//         )
//       }
//   }
//   function desno(){
//     if (rez2>0){
//       return(
//         <p>{rez1}:{rez2}</p>
//       )
//     }
// }

  return (
    <div>
    <div className='okvir'>
      <div className='gore'>
        <Datum />
        <Vrijeme minute={90}/>
      </div>
      <div className="sredina">
        <Logo link = "src\assets\miami.png" ime_kluba = "Inter Miami"/>
        <div className="rezultat">
            <p>{rez1}:{rez2}</p>
        </div>
        <Logo link = "src\assets\houston.png" ime_kluba = "Houston Dynamo"/>
      </div>
      <div className='dole'>
        {/* <div className="gol">
            <p>{lijevo()}</p>
        </div> */}
        <div className='kontrole'>
          <button onClick={() => postaviBroj1(rez1 + 1)} className="botun">+</button>
          <button onClick={() => postaviBroj1(rez1 - 1)} className="botun" disabled={rez1 === 0}>-</button>
          <button onClick={() => postaviBroj2(rez2 + 1)} className="botun">+</button>
          <button onClick={() => postaviBroj2(rez2 - 1)} className="botun" disabled={rez2 === 0}>-</button>
        </div>
        {/* <div className="gol">
            <p>{desno()}</p>
        </div> */}
      </div>
    </div>
    <div className='reset'>
      <button>Reset</button>
    </div>
    </div>
  )
}

export default App
