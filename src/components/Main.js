import GeneralControls from "./GeneralControls";
import Playground from "./Playground";
import Field from "./Field";
import Controls from "./Controls";
import Results from "./Results";

function Main() {
  return (
    <main>
      <GeneralControls />
      <Playground>
        <Field />
        <Controls />
        <Results />
      </Playground>
    </main>
  );
}

export default Main;
