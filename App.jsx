import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [hashValue, setHashValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
    console.log('Input Value:', event.target.value);
  }

  function startHash() {
    const hash = CryptoJS.SHA256(inputValue).toString(CryptoJS.enc.Hex);
    console.log('Generated Hash:', hash);
    setHashValue(hash);
  }

  return (
    <div>
      <input 
        type="text" 
        name="inputText" 
        value={inputValue} 
        onChange={handleChange} 
      />
      <button onClick={startHash}>Hash</button>
      <p>Hashed value = {hashValue}</p>
    </div>
  );
}

export default App;
