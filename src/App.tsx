import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black w-screen h-screen text-avocado-100">
      Hello World! Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
