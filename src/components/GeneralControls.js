import React from "react";

import NumberInput from "./NumberInput";

function GeneralControls({barsNumber, onBarsChange, onShuffle, onRunSorting, delay, onDelayChange}) {

  const [barsValue, setBarsValue] = React.useState(barsNumber);

  function handleBarsSubmit(event) {
    event.preventDefault();
    onBarsChange(barsValue);
  }

  function handleDelayChange(event) {
    onDelayChange(event.target.value);
  }

  return (
    <div className="general-controls">
      <form className="input input_type_form">
        <label>
          <span>Замедление</span>
          <input
            className="input input_type_form-input input_type_range"
            type="range"
            name="delay"
            min="50"
            max="1000"
            step="50"
            onChange={handleDelayChange}
            value={delay}
          />
          <span>{delay}</span>
        </label>
      </form>

      <form className="input input_type_form" onSubmit={handleBarsSubmit}>
        <label>
          <NumberInput
            minLength="10"
            maxLength="1000"
            defaultValue={barsValue}
            onChange={setBarsValue}
          />
          <span> столбиков</span>
        </label>
        <button type="submit" className="input input_type_form-button">❯</button>
      </form>

      <button type="button" className="input" onClick={onShuffle}>🔀 Перемешать</button>
      <button type="button" className="input input_important" onClick={onRunSorting}>⏭ Запустить</button>
      <button type="button" className="input" disabled>⏮ Запустить наоборот</button>
    </div>
  );
}

export default GeneralControls;
