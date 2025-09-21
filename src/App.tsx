import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-extrabold">Hello World!</h1>
      <p className="font-extrabold text-4xl text-yellow-500">{count}</p>
      <div className="flex gap-4 *:bg-yellow-50 text-black *:p-3 *:hover:bg-yellow-500 *:cursor-pointer">
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
