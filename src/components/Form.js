import React from "react";

function Form({ title, hasButton, min, max, step, defaultValue, onChange, onSubmit }) {
  const errorClass = 'form__number-input_error';

  const [value, setValue] = React.useState(defaultValue);
  const [isValid, setIsValid] = React.useState(true);

  function checkIsValid(value) {
    return value >= min && value <= max;
  }

  function handleChange(event) {
    const currentValue = +event.target.value;
    setValue(currentValue);
    if ( checkIsValid(currentValue) ) {
      setIsValid(true);
      if (onChange) onChange(currentValue);
    } else {
      setIsValid(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if ( checkIsValid(value) && onSubmit) onSubmit(value);
  }

  return (
    <form className="input form" onSubmit={handleSubmit}>
      <label className="form__label">
        <span className="form__title">{title}</span>
        <input
          className="form__range-input"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
      </label>
      <input
        className={'form__number-input ' + (!isValid ? errorClass : '')}
        type="number"
        minLength={min}
        maxLength={max}
        value={value}
        onChange={handleChange}
      />

      {hasButton && (
        <button className="form__button" type="submit" aria-label="Сохранить">
          ↵
        </button>
      )}
    </form>
  );
}

export default Form;
