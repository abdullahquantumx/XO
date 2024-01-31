"use client"
import React, { useState } from 'react';

const Services = () => {
  const [textInput, setTextInput] = useState('');
  const [rows, setRows] = useState([]);
  const [displayedValues, setDisplayedValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
    // Assuming you have an array of labels
const labels = ['Pregnancies', 'Glucose', 'BloodPressure', 'Skin Thickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'];

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (textInput.toLowerCase() === 'diabetes') {
      const initialRows = Array(8).fill('').map((_, index) => ({ id: index, inputValue: '' }));
      setRows(initialRows);
      setDisplayedValues(initialRows.map(() => ''));
      setErrorMessage('');
      setSubmitMessage('');
    } else {
      setRows([]);
      setDisplayedValues([]);
      setErrorMessage('Invalid input. Please enter "diabetes".');
      setSubmitMessage('');
    }
  };

  const handleRowInputChange = (rowId, e) => {
    const updatedRows = [...rows];
    updatedRows[rowId].inputValue = e.target.value;
    setRows(updatedRows);
  };

  const handleRowButtonClick = (rowId) => {
    const updatedDisplayedValues = [...displayedValues];
    updatedDisplayedValues[rowId] = rows[rowId].inputValue;
    setDisplayedValues(updatedDisplayedValues);
    console.log(`Row ${rowId + 1} Button Clicked with input:`, rows[rowId].inputValue);
  };

  const handleSubmitClick = () => {
    if (rows.every((row) => row.inputValue.trim() !== '')) {
      console.log('Array Values:', rows.map((row) => row.inputValue));
      setSubmitMessage('All inputs are filled. Ready to submit!');
    } else {
      setSubmitMessage('Please fill in all inputs before submitting.');
    }
  };

  return (
    <div className="bg-blue-500 p-8 flex flex-col items-center">
      <label htmlFor="textInput" className="block text-white mb-4 text-center lg:text-center lg:w-full">
        Enter Text:
      </label>
      <div className="flex flex-col md:flex-row w-full md:w-2/3 lg:w-1/2 lg:justify-center">
        <input
          type="text"
          id="textInput"
          className="bg-white p-2 rounded border border-gray-300 mb-2 md:mr-2"
          value={textInput}
          onChange={handleInputChange}
        />
        <button
          className="bg-green-500 text-white p-2 rounded w-full md:w-auto"
          onClick={handleButtonClick}
        >
          Enter
        </button>
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

      {rows.map((row, index) => (
        <div key={row.id} className="mt-5 flex-col md:flex-row items-center">
          <label htmlFor={`rowInput-${row.id}`} className="block text-white mb-2 md:mr-2">
             {labels[row.id]}:
          </label>
          <input
            type="text"
            id={`rowInput-${row.id}`}
            className="bg-white p-2 rounded border border-gray-300 mb-2 md:mr-2"
            value={row.inputValue}
            onChange={(e) => handleRowInputChange(row.id, e)}
          />
          <button
            className="bg-green-500 text-white p-2 rounded w-full md:w-auto"
            onClick={() => handleRowButtonClick(row.id)}
          >
            Submit
          </button>
          {displayedValues[index] && (
            <div className="ml-2 mt-2 md:mt-0">Input Value: {displayedValues[index]}</div>
          )}
        </div>
      ))}

      <div className="mt-5">
        <button
          className="bg-red-500 text-white p-2 rounded lg:text-center lg:w-full"
          onClick={handleSubmitClick}
        >
            Submit All Inputs
        </button>
        {submitMessage && <p className="mt-2">{submitMessage}</p>}
      </div>
    </div>
  );
};
export default Services;
