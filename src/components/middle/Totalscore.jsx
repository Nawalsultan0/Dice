import React from 'react'

const Totalscore = ({Score}) => {
  return (
    <div>
        <div className=' borrder-1 p-3 '>
        <h1  className='text-6xl font-extrabold '>
         {Score}
        </h1>
        <br />
         <h4 className='font-bold text-2xl'>Total Score </h4>
         
    </div>
    </div>
  )
}

export default Totalscore