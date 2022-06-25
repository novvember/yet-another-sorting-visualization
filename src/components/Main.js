import React from "react";

import GeneralControls from "./GeneralControls";
import Playground from "./Playground";
import Field from "./Field";
import Controls from "./Controls";
import Results from "./Results";

import {getNewArray, shuffleArray} from '../utils/utils.js';
import bubleSort from "../utils/bubleSort";

function Main() {
  const [barsNumber, setBarsNumber] = React.useState(20);
  const [barsArray, setBarsArray] = React.useState( shuffleArray(getNewArray(barsNumber)) );
  const [isInProgress, setIsInProgress] = React.useState(false);


  React.useEffect(() => {
    setBarsArray( shuffleArray(getNewArray(barsNumber)) );
  }, [barsNumber])

  function handleShuffle() {
    setBarsArray(shuffleArray);
  }

  async function handleRunSorting() {
    setIsInProgress(true);
    await bubleSort(barsArray, setBarsArray);
    setIsInProgress(false);
  }

  return (
    <main>
      <GeneralControls
        barsNumber={barsNumber}
        onBarsChange={setBarsNumber}
        onShuffle={handleShuffle}
        onRunSorting={handleRunSorting}
      />
      <Playground>
        <Field
          barsArray={barsArray}
          isInProgress={isInProgress}
        />
        <Controls />
        <Results />
      </Playground>
    </main>
  );
}

export default Main;
