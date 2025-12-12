import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) str += "!@#$%&*_~";
    if (numAllowed) str += "0123456789";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGen();
  }, [length, numAllowed, charAllowed, passwordGen]);

  return (
    <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-3xl px-6 py-8 my-12 bg-gray-800 text-green-500 text-lg">
      <h1 className="text-white text-center text-3xl font-bold mb-6">🔐 Password Generator</h1>

      <div className="flex shadow-lg rounded-xl overflow-hidden mb-6 bg-black">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-4 px-5 text-xl"
          placeholder="Your secure password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="bg-blue-700 text-white px-6 py-4 text-lg font-semibold hover:bg-blue-800 transition"
        >
          COPY
        </button>
      </div>

      <div className="flex flex-wrap items-center text-lg gap-x-8 gap-y-4">
        {/* Password Length Slider */}
        <div className="flex items-center gap-x-3 w-full sm:w-auto">
          <label className="font-semibold">Length:</label>
          <input
            type="range"
            min={8}
            max={30}
            value={length}
            className="cursor-pointer w-52"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <span className="text-white font-semibold">{length}</span>
        </div>

        {/* Numbers Allowed */}
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            checked={numAllowed}
            id="numberInput"
            onChange={() => setNumAllowed((prev) => !prev)}
            className="w-5 h-5"
          />
          <label htmlFor="numberInput" className="text-white font-semibold">Include Numbers</label>
        </div>

        {/* Characters Allowed */}
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
            className="w-5 h-5"
          />
          <label htmlFor="charInput" className="text-white font-semibold">Include Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
