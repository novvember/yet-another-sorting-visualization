function Controls() {
  return (
    <div className="controls playground__controls">
      <h2 className="controls__title">Способ сортировки</h2>
      <select name="algorithm" className="input input_important">
        <option value="value1">Сортировка пузырьком</option>
        <option value="value2">Сортировка перемешиванием</option>
        <option value="value3">Сортировка вставками</option>
      </select>
    </div>
  );
}

export default Controls;
