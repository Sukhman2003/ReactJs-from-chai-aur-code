import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [passfeild, setpassfeild] = useState("");
  const copyref=useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "!@#$%^&*()_+";
    if (number) {
      str += num;
    }
    if (character) {
      str += char;
    }
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setpassfeild(pass);
  }, [length, number, character, setpassfeild]);

  const copypass=()=>{
    copyref.current.select();
    window.navigator.clipboard.writeText(passfeild);
}

  useEffect(() => {
    passwordgenerator();
  }, [length, number, character, passwordgenerator]);
  return (
    <>
      <div className="text-center w-full max-w-lg mx-auto rounded-3xl my-40 px-4 py-8 text-white bg-gray-500 my-3">
        Password Generator
        <div className="flex rounded-lg overflow-hidden mb-8">
          <input
            type="text"
            value={passfeild}
            placeholder="passfeild"
            readOnly
            ref={copyref}
            className="outline-none w-full my-2 rounded-lg px-3 py-2 bg-white text-gray-900" 
          />
          <button 
          onClick={copypass}
          className="outline-none my-2 rounded-lg px-3 py-2 bg-blue-700 text-white ">
            COPY
          </button>
        </div>
        <div className="flex  text—sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length :{length}</label>
          </div>
          <div className="flex text—sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={(e) => setnumber(e.target.checked)}
            />
            <label>Number</label>
          </div>
          <div className="flex text—sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={(e) => setcharacter(e.target.checked)}
            />
            <label>setcharacter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
