function Main() {
  return (
    <main>
      <div className="general-controls">
        <button type="button">Перемешать</button>
        <button type="button">Сортировать по возрастающей</button>
        <button type="button">Сортировать по убывающей</button>
      </div>

      <div className="playground">
        <ul className="field">
          <li className="element">Element</li>
          <li className="element">Element</li>
          <li className="element">Element</li>
          <li className="element">Element</li>
          <li className="element">Element</li>
          <li className="element">Element</li>
          <li className="element">Element</li>
        </ul>

        <div className="controls">
          <h2 className="controls__title">Способ сортировки</h2>
          <select name="algorithm">
            <option value="value1">Сортировка пузырьком</option>
            <option value="value2">Сортировка перемешиванием</option>
            <option value="value3">Сортировка вставками</option>
          </select>
        </div>

        <div className="results">
          <p className="results__result">Операций:</p>
          <p className="results__result">Время:</p>
        </div>

      </div>

    </main>
  );
}

export default Main;
