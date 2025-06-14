import React from 'react'

const Scomponent = ({Toggle }) => {
  return (
    <div className=' overflow-x-auto flex bg-black m-10 '> 
        
        <div className=' flex flex-row items-center justify-between  gap-4 h-full  w-full p-5'>
            <img className='w-[65%] h-1/2 ' src="/public/dice.webp" alt="" />
        <div>
            <div className='text-5xl shrink-0 font-extrabold text-white' ><h1>DICE GAME</h1></div>
            <br />
            <button onClick={Toggle} className='bg-amber-50 w-50 text-2xl   font-bold p-3 text-black hover:bg-blue-100 active:scale-75' >PLAY NOW </button>
            </div>        </div>
           </div>
  )
}

export default Scomponent