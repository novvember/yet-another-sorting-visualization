import GeneralControls from "./GeneralControls";
import Playground from "./Playground";
import Field from "./Field";

function Main() {
  return (
    <main>
      <GeneralControls />
      <Playground>
        <Field />


    <div className="controls playground__controls">
      <h2 className="controls__title">Способ сортировки</h2>
      <select name="algorithm">
        <option value="value1">Сортировка пузырьком</option>
        <option value="value2">Сортировка перемешиванием</option>
        <option value="value3">Сортировка вставками</option>
      </select>
    </div>

    <div className="results playground__results">
      <p className="results__result">Операций:</p>
      <p className="results__result">Время:</p>
    </div>



      </Playground>
    </main>
  );
}

export default Main;
