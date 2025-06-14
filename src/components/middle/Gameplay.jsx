import React from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import Rolleddice from './Rolleddice'
import { useState } from 'react'
import Lastpara from '../last/Lastpara'

const Gameplay = () => {
  const [Score, setScore] = useState(0)
  const [Selected, setSelected] = useState( );
  const [CDice, setCDice] = useState(1);
  const [Rules, setRules] = useState(false)
  
  const RandomNO = (min, max ) =>{
    if(!Selected){ 
      alert('You have not Selected any number')
      return;}
    console.log( Math.floor(Math.random() *(max - min) + min));
    return Math.floor(Math.random() *(max - min) + min);
  };
 const Roll = () =>{
   const Rnum = RandomNO(1, 7);
 setCDice((prev) => Rnum )
  
  if(Selected == Rnum ){
    setScore(prev => prev + Rnum)
  } else{
    setScore(prev => prev - 2);
  }
   setSelected('')
 };
 const ResetScore = () =>{
  setScore(0);
 }

  return (
    <div  className=' text-amber-50 mt-5 mx-5 ' >
      
    <div className=' bg-black flex justify-between items-center'>
     <Totalscore  Score={Score}  />
     <Numberselector Selected={Selected}
      setSelected={setSelected} />
   </div>
   <Rolleddice  CDice={CDice}
      Roll={Roll}/>
     <div className='text-black w-full h-full bg-amber-50 gap-y-3  flex flex-col items-center justify-center mb-5 mt-4' >
          <button onClick={ResetScore} className=' bg-amber-50 w-40 border-1 text-xl  align-middle  font-bold p-1 text-black hover:bg-black hover:text-amber-50 active:scale-75' >
         RESET SCORE
        </button>
    
        <button onClick={()=>{
        setRules((prev) => !prev)
        }} className='bg-black w-40 border-1 text-xl  align-middle  font-bold p-1 text-amber-50 hover:bg-amber-50 hover:text-black active:scale-75'> {Rules ? 'hide' : ''}
        Show RULES
        </button>
        {Rules && <Lastpara/>}
        </div>

        
    </div>
  )
}

export default Gameplay