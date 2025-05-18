import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPasssword] = useState("");

  //done from chatgpt
  const [isClicked, setIsClicked] = useState(false); // Added state for button active effect

  //useRef hook

  const passwordRef = useRef(null); //jo aapko reference deta hai page par koi bhi element ho uska and
  //then uske sath manupilation kar sakte ho

  const passwordGenerator = useCallback(() => {
    //usecallback function ko memorized karta hai
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPasssword(pass);
  }, [
    //(fn,dependencies)
    length,
    numberAllowed,
    charactersAllowed,
    setPasssword,
  ]);

  // const copyPasswordToClipboard = () => {
  //   navigator.clipboard.writeText(password);
  // };

  // const copyPasswordToClipboard = useCallback(() => {
  //   window.navigator.clipboard.writeText(password);
  // }, [password]);

  // const copyPasswordToClipboard = useCallback(() => {
  //   //Optimized
  //   passwordRef.current?.select();
  //   window.navigator.clipboard.writeText(password);
  // }, [password]);

  const copyPasswordToClipboard = useCallback(() => {
    //More_Optimized
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
    setIsClicked(true); // Set button as clicked
    setTimeout(() => setIsClicked(false), 100); // Reset after 300ms to show the effect briefly
  }, [password]);

  useEffect(() => {
    // jab bhi page load hota hai tab first  time par useEffect call hota hai aur dependency array mai se
    // koi bhi value change hoti hai tab useEffect wapis call hota hai
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]); //(callback,dependncy array)
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div
        className="
        flex shadow rounded-lg overflow-hidden mb-4"
      >
        <input
          type="text"
          value={password}
          className="outline-none w-full  py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          // className="
          // outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ${
            isClicked ? "bg-blue-500" : ""
          }`} // Apply active style when clicked
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charactersAllowed}
            id="characterInput"
            onChange={(e) => {
              setCharactersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

// //basic understanding of callback

// // import React, { useState } from "react";

// // function Child({ onClick }) {
// //   console.log("Child rendered");
// //   return <button onClick={onClick}>Click me</button>;
// // }

// // function Parent() {
// //   const [count, setCount] = useState(0);

// //   const handleClick = () => {
// //     setCount(count + 1);
// //   };

// //   console.log("Parent rendered");
// //   return (
// //     <div>
// //       <Child onClick={handleClick} />
// //       <p>Count: {count}</p>
// //     </div>
// //   );
// // }

// // export default Parent;

// // import React, { useState, useCallback } from "react";

// // function Child({ onClick }) {
// //   console.log("Child rendered");
// //   return <button onClick={onClick}>Click me</button>;
// // }

// // function Parent() {
// //   const [count, setCount] = useState(0);

// //   const handleClick = useCallback(() => {
// //     setCount(count + 1);
// //   }, [count]); // Only re-create handleClick when count changes

// //   console.log("Parent rendered");
// //   return (
// //     <div>
// //       <Child onClick={handleClick} />
// //       <p>Count: {count}</p>
// //     </div>
// //   );
// // }

// // export default Parent;

//only change lastName
// import React, { useState } from "react";

// function ChangeLastName() {
//   // Initializing state with firstname and lastname
//   const [name, setName] = useState({ firstname: "John", lastname: "Doe" });

//   // Function to change the last name when the button is clicked
//   const handleClick = () => {
//     setName((prevName) => ({
//       ...prevName, // Spread the existing name object

//       lastname: "Smith", // Update only the last name
//     }));
//   };

//   return (
//     <div>
//       <h1>
//         Hello, {name.firstname} {name.lastname}!
//       </h1>
//       <button onClick={handleClick}>Change Last Name</button>
//     </div>
//   );
// }

// export default ChangeLastName;
