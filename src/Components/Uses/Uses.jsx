import React from 'react'
import './Uses.css'

const Uses = () => {
  return (
    <div className="uses-container">
        <h2>How to Use the Currency Converter</h2>
        <ol>
            <li>Select the currency you want to convert from in the first dropdown menu.</li>
            <li>Select the currency you want to convert to in the second dropdown menu.</li>
            <li>Enter the amount you want to convert in the input field.</li>
            <li>Click the "Convert" button to see the converted amount.</li>
        </ol>
    </div>
  )
}

export default Uses