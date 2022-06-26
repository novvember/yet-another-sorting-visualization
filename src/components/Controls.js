function Controls() {
  return (
    <div className="controls playground__controls">
      <h2 className="controls__title">Способ сортировки</h2>
      <select name="algorithm" className="input input_important">
        <option value="value1" name="bubleSort">... пузырьком</option>
      </select>
    </div>
  );
}

export default Controls;
