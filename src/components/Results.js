function Results() {
  return (
    <div className="results playground__results">
      <h2 className="results__title">Ход расчета</h2>

      <ul className="results__list">
        <li className="results__list-item">
          <span className="results__text">Операций:</span>
          <span className="results__result">300</span>
        </li>
        <li className="results__list-item">
          <span className="results__text">Время:</span>
          <span className="results__result">58</span>
        </li>

      </ul>
    </div>
  );
}

export default Results;
