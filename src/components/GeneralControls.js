function GeneralControls() {
  return (
    <div className="general-controls">
      <form className="input input_type_form">
        <label>
          <input
            className="input input_type_form-input"
            type="number"
            // value="100"
          ></input>
          <span> столбиков</span>
        </label>
        <button type="submit" className="input input_type_form-button">→</button>
      </form>

      <button type="button" className="input">🔀 Перемешать</button>
      <button type="button" className="input input_important">📈 Запустить</button>
      <button type="button" className="input">📉 Запустить наоборот</button>
    </div>
  );
}

export default GeneralControls;
