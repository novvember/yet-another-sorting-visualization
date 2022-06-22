import React from "react";

function GeneralControls({barsNumber, onBarsChange, onShuffle}) {

  const [barsValue, setBarsValue] = React.useState(barsNumber);

  function handleBarsChange(event) {
    setBarsValue(event.target.value);
  }

  function handleBarsSubmit(event) {
    event.preventDefault();
    onBarsChange(barsValue);
  }

  return (
    <div className="general-controls">
      <form className="input input_type_form" onSubmit={handleBarsSubmit}>
        <label>
          <input
            className="input input_type_form-input"
            type="number"
            minLength="10"
            maxLength="1000"
            value={barsValue}
            onChange={handleBarsChange}
          ></input>
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
