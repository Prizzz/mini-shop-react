import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1>Hello React! {count}</h1>
    </div>
  );
}

export default App;
