import React from "react";

import Form from "./Form";

function GeneralControls({barsNumber, onBarsChange, onShuffle, onRunSorting, delay, onDelayChange}) {

  return (
    <div className="general-controls">
      <Form
        title="Замедление"
        hasButton={false}
        min="50"
        max="1000"
        step="50"
        defaultValue={delay}
        onChange={onDelayChange}
        onSubmit={null}
      />

      <Form
        title="Столбики"
        hasButton={true}
        min="10"
        max="1000"
        step="10"
        defaultValue={barsNumber}
        onChange={null}
        onSubmit={onBarsChange}
      />

      <button type="button" className="input" onClick={onShuffle}>🔀 Перемешать</button>
      <button type="button" className="input input_important" onClick={onRunSorting}>⏭ Запустить</button>
      <button type="button" className="input" disabled>⏮ Запустить наоборот</button>
    </div>
  );
}

export default GeneralControls;
