import React, { useRef } from 'react'

import '../css/App.css'

function App() {
  const inputRef = useRef()
  const outputRef = useRef()

  function handleBtnFormat() {
    const input = inputRef.current.value

    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 6)
      outputRef.current.value = formatted
    } catch (e) {
      outputRef.current.value = e
    }
  }

  return (
    <div className="btn-container">
      <button
        type="button"
        className=" btn-clear"
        onClick={(e) => (
          (inputRef.current.value = null), (outputRef.current.value = null)
        )}
      >
        Clear
      </button>
      <button
        type="button"
        className="btn btn-format"
        onClick={handleBtnFormat}
      >
        Format
      </button>
      <div className="container">
        <textarea
          className="large-area large-area--input"
          ref={inputRef}
          placeholder="Enter your JSON here to format"
        ></textarea>

        <textarea
          readOnly
          className="large-area large-area--output"
          ref={outputRef}
          placeholder="Your formated JSON will appear here"
        ></textarea>
      </div>
    </div>
  )
}

export default App
