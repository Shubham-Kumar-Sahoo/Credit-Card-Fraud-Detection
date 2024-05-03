import React from 'react'
import { useOutput } from '../context/OutputContext';

const Result:React.FC = () => {
  const outputContext = useOutput();
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-center font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent text-5xl tracking-wide">
        Result
      </h1>
      <div className="mt-10 font-bold text-xl">{outputContext?.data?.data}</div>
    </div>
  );
}

export default Result