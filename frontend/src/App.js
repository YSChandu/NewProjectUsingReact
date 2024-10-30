import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}


function Counter(){
  const [count , setCount] = useState(0);

  useEffect(() => {
      const interval = setInterval(function(){
        setCount(count => count +1)
      }, 1000)
      return function(){
        clearInterval(interval);
      }  
  }, []);

  return (
    <div>
      <button>{count}</button>
    </div>
  );
}

export default App;
