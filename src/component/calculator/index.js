import React, { useState } from 'react'
import InputField from '../../shared/input'
import Button from '../../shared/button'
import "./style.css"

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [output, setOutput] = useState(0);

  const onChangeHandler1 = (e) => {
    const { value } = e.target
    setFirstNumber(parseInt(value))
  }
  const onChangeHandler2 = (e) => {
    const { value } = e.target
    setSecondNumber(parseInt(value))
  }



  const addCalculate = () => {
    if (firstNumber == "" || secondNumber == "") {
      alert("please entere the value");
    } else {
      const result = (firstNumber) + (secondNumber);
      console.log(result);
      setOutput(result);
    }
  }

  const addSubtaction = () => {
    if (firstNumber == "" || secondNumber == "") {
      alert("please entere the value");
    } else {
      const result = (firstNumber) - (secondNumber);
      setOutput(result);
    }
  }

  const addMultiple = () => {
    if (firstNumber == "" || secondNumber == "") {
      alert("please entere the value");
    } else {
      const result = (firstNumber) * (secondNumber);
      setOutput(result);
    }
  }

  const addDivistion = () => {
    if (firstNumber == "" || secondNumber == "") {
      alert("please entere the value");
    } else {
      const result = (firstNumber) / (secondNumber);
      setOutput(result);
    }
  }
  const clearAll = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOutput();
  }


  return (
    <div className='container'>
      <div className='form-control'>
        <div className='inputs'>
          <InputField
            className="input-control"
            type="number"
            placeholder="Enter First Number"
            name="firstNumber"
            label="First Number"
            onChange={onChangeHandler1}
            value={firstNumber}
          />
          <InputField
            type="number"
            placeholder="Enter Second Nummber"
            name="secondNumber"
            value={secondNumber}
            label="Second Number"
            onChange={onChangeHandler2}
          />
        </div>
        <div className='btn-button'>
          <Button
            type="button"
            onClick={addCalculate}
            label="Add +"
          />
          <Button
            type="button"
            onClick={addSubtaction}
            label="subtraction -"
          />
          <Button
            type="button"
            onClick={addMultiple}
            label="Addition *"
          />
          <Button
            type="button"
            onClick={addDivistion}
            label="Division /"
          />

        </div>
        {output && <h4>Result : {output}</h4>}
        {output && <Button
          type="button"
          onClick={clearAll}
          label="Clear"
          className="danger"
        />}
      </div>
    </div>
  )
}

export default Calculator