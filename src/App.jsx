import React , { useState} from 'react'
import Scomponent from './components/front/Scomponent'
import Gameplay from './components/middle/Gameplay'
import Rolleddice from './components/middle/Rolleddice'


const App = () => {
const [Gamestart, setGamestart] = useState(false)
const ToggleGame = ()=>{
  setGamestart( (prev) => !prev)
}
  
  return (
    <div  className='text-zinc-100'>
  
    {Gamestart == true ? <Gameplay/>: " "}
    {Gamestart == false ? <Scomponent Toggle = {ToggleGame} />: " "}
    </div>
  
  )
}

export default App