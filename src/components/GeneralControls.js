function GeneralControls() {
  return (
    <div className="general-controls">
      <form>
        <input
          type="number"
          placeholder="100 стобиков"
        ></input>
        <button type="submit">Создать</button>
      </form>

      <button type="button">🔀 Перемешать</button>
      <button type="button">Сортировать по 📈 возрастающей</button>
      <button type="button">Сортировать по 📉 убывающей</button>
    </div>
  );
}

export default GeneralControls;
