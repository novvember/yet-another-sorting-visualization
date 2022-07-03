import React from "react";

import Form from "./Form";

function GeneralControls({
  barsNumber,
  onBarsChange,
  onShuffle,
  onRunSorting,
  onStopSorting,
  delay,
  onDelayChange,
  isInProgress,
}) {
  return (
    <div className="general-controls">
      <Form
        title="Скорость"
        hasButton={false}
        min="50"
        max="1000"
        step="50"
        defaultValue={delay}
        onChange={onDelayChange}
        onSubmit={null}
        isDisabled={isInProgress}
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
        isDisabled={isInProgress}
      />

      <button
        type="button"
        className="input"
        onClick={onShuffle}
        disabled={isInProgress}
      >
        🔀 Перемешать
      </button>
      <button
        type="button"
        className="input input_important"
        onClick={isInProgress ? onStopSorting : onRunSorting}
      >
        {isInProgress ? "⏹️ Остановить" : "⏭ Запустить"}
      </button>
      <button type="button" className="input" disabled>
        ⏮ Запустить наоборот
      </button>
    </div>
  );
}

export default GeneralControls;
