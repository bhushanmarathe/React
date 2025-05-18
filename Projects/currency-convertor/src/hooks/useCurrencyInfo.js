import { useCallback, useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;

// function Child(onclick) {
//   console.log("Child Rendered");
//   return <button onClick={onclick}>Click me</button>;
// }

// function Parent() {
//   const [count, setCount] = useState(0);

//   // const handleClick = () => {
//   //   setCount(count + 1);
//   // };

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   console.log("parent rendered");
//   return (
//     <div>
//       <Child onClick={handleClick} />
//       <h1>Count={count}</h1>
//     </div>
//   );
// }
