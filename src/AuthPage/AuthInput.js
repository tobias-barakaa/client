import React from 'react'

export const AuthInput = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler

}) => {
    const handleValueChange = (e) => {
        onChangeHandler(e.target.value, field)
    }
   
    const handleInputBlur = (e) => {
        onBlurHandler(e.target.value, field);
    }
  return (
    <>
    <div className='auth-form-label'>
        <span>{label}</span>
      
    </div>
    <input
    type={type}
    value={value}
    onChange={handleValueChange}
    onBlur={handleInputBlur}
    />
    <span className='auth-form-validation-message'>
        {showErrorMessage && validationMessage}
    </span>
    </>
  )
}

