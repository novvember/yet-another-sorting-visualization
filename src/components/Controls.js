function Controls({list, onChange}) {
  return (
    <div className="controls playground__controls">
      <h2 className="controls__title">Способ сортировки</h2>
      <select name="algorithm" className="input input_important" onChange={onChange}>
        {list.map(algorithm => (
          <option
            key={algorithm.id}
            value={algorithm.id}
          >
            {algorithm.name}
          </option>
          ))}
      </select>
    </div>
  );
}

export default Controls;
