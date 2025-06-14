import React from 'react';

const Numberselector = ({Selected, setSelected}) => {
  
  const ArrNo = [1, 2, 3, 4, 5, 6];    
  
  
  return (
    <div className='w-[75%] flex justify-end gap-x-2.5 px-2'>
      {ArrNo.map((value, i) => (
        <div
          key={i}
          onClick={() => setSelected(value)}
          className={`border p-2 text-amber-50 cursor-pointer rounded ${
            Selected === value ? 'bg-amber-50 text-black' : ''
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Numberselector;
