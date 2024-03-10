import React, { useState } from 'react';
import "./style.css";

const InputField = ({label, type, value, name, placeholder, onChange}) => {
  const [user, setUser] =useState("");
  return (
    <div className='input-field'>
    {label && <label htmlFor='input-fild'>{label}</label>}
    <input
    type={type} 
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    />
    </div>
  )
}

export default InputField