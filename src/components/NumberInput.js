import React from "react";

function NumberInput({defaultValue, onChange, minLength, maxLength}) {

  const [value, setValue] = React.useState(defaultValue);
  const [isValid, setIsValid] = React.useState(true);

  const errorClass = 'input_type_form-input_error';

  function handleChange(event) {
    const currentValue = +event.target.value;
    setValue(currentValue);

    if (currentValue >= minLength && currentValue <= maxLength) {
      setIsValid(true);
      onChange(currentValue);
    } else {
      setIsValid(false);
    }
  }

  return (
    <input
      className={"input input_type_form-input " + (!isValid && errorClass)}
      type="number"
      minLength="10"
      maxLength="1000"
      value={value}
      onChange={handleChange}
    ></input>
  );
}

export default NumberInput;
