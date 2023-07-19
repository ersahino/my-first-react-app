import { useState } from "react";


function App() {
  return (


    <div className="butonlar">
      <h1>Tıkladığında ayrı ayrı artan sayaç.</h1>
      <p>Cristiano Ronaldo'ya </p><MyButton />
      <p>Lionel Messi'ye </p><MyButton />
    </div>



  )

  function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return <button onClick={handleClick}>{count} kere tıklandı.</button>;
  }
}

export default App;
