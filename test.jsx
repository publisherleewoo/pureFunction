import React from 'react';


const useCounterState=(initial)=>{
   const [count,setCount] = useState(initial)
   const increase =()=>{
      setCount(++count)
   }
   const decrease =()=>{
      setCount(--count)
   }

   return [count,{increase,decrease}]
}


const test = () => {
   const [count,{increase,decrease}] = useCounterState(0)
   
   return (
      <div>
         {count}
         <button onClick={increase}>+</button>
         <button onClick={decrease}>-</button>
      </div>
   );
};

export default test;