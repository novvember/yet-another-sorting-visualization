import GeneralControls from "./GeneralControls";
import Playground from "./Playground";
import Field from "./Field";
import Controls from "./Controls";

function Main() {
  return (
    <main>
      <GeneralControls />
      <Playground>
        <Field />
        <Controls />




    <div className="results playground__results">
      <p className="results__result">Операций:</p>
      <p className="results__result">Время:</p>
    </div>



      </Playground>
    </main>
  );
}

export default Main;
