import React from "react";

import NumberInput from "./NumberInput";

function GeneralControls({barsNumber, onBarsChange, onShuffle}) {

  const [barsValue, setBarsValue] = React.useState(barsNumber);

  function handleBarsSubmit(event) {
    event.preventDefault();
    onBarsChange(barsValue);
  }

  return (
    <div className="general-controls">
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
        <button type="submit" className="input input_type_form-button">➡</button>
      </form>

      <button type="button" className="input" onClick={onShuffle}>🔀 Перемешать</button>
      <button type="button" className="input input_important">⏭ Запустить</button>
      <button type="button" className="input">⏮ Запустить наоборот</button>
    </div>
  );
}

export default GeneralControls;
