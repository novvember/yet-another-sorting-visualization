function GeneralControls() {
  return (
    <div className="general-controls">
      <form className="general-controls__create-form">
        <label>
          <input
            className="input input_type_input"
            type="number"
            // value="100"
          ></input>
          <span> столбиков</span>
        </label>
        <button type="submit" className="input">Создать</button>
      </form>

      <button type="button" className="input">🔀 Перемешать</button>
      <button type="button" className="input input_important">Сортировать по 📈 возрастающей</button>
      <button type="button" className="input input_important">Сортировать по 📉 убывающей</button>
    </div>
  );
}

export default GeneralControls;
