"use client";
import React, { useState } from 'react';

const Textform = () => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleRemoveSpaces = () => {
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    setText(cleanedText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Text Form</h1>
        <div className="mb-3">
          <textarea
            className="w-full p-2 text-black border border-gray-300 rounded-md bg-gray-200"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-blue-600" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-blue-600" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-blue-600" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-blue-600" onClick={handleRemoveSpaces}>
          Remove Spaces
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-1 hover:bg-blue-600" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container mx-auto my-3 p-4">
        <h2 className="text-xl font-semibold mb-2">Your text Summary</h2>
        <p>{text.split(/\s+/).filter((word) => word).length} words and {text.length} characters</p>
        <h2 className="text-xl font-semibold mt-4">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
};

export default Textform;
