import { useRef } from "react";

function Counter() {
  let count = useRef(0);

  const handleClick = () => {
    const result = (count.current += 1);
    console.log(result);
    return result;
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default Counter;
