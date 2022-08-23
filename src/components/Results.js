function Results({comparisonCount}) {
  return (
    <div className="results playground__results">
      <h2 className="results__title">Ход расчета</h2>

      <ul className="results__list">
        <li className="results__list-item">
          <span className="results__text">Сравнений:</span>
          <span className="results__result">{comparisonCount}</span>
        </li>
        <li className="results__list-item">
          <span className="results__text">Перестановок:</span>
          <span className="results__result"></span>
        </li>
        <li className="results__list-item">
          <span className="results__text">Время:</span>
          <span className="results__result"></span>
        </li>

      </ul>
    </div>
  );
}

export default Results;
