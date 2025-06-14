import React from 'react'


const Rolleddice = ({Roll, CDice}) => {
  
  return (
 <div className='bg-amber-50   ' >
    <div onClick={Roll} 
    className='text-black w-full h-full bg-amber-50  flex flex-col items-center justify-center mt-40'>
        <img src={`public/DiceRolled/dice_${CDice}.jpg`} alt="" />
        <br />
        <h1 className=' font-bold' >Click Dice To Rolled</h1>
    </div>
      
  
 </div>
  )
}

export default Rolleddice