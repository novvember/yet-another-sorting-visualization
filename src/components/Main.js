import React from "react";

import GeneralControls from "./GeneralControls";
import Playground from "./Playground";
import Field from "./Field";
import Controls from "./Controls";
import Results from "./Results";

import {getNewArray, shuffleArray} from '../utils/utils.js';
import { Sorting } from "../utils/Sorting.js";
import sortingAlgorithms from "../utils/sorting-algorithms/sortingAlgorithms";

function Main() {
  const [barsNumber, setBarsNumber] = React.useState(20);
  const [barsArray, setBarsArray] = React.useState( shuffleArray(getNewArray(barsNumber)) );
  const [isInProgress, setIsInProgress] = React.useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState(sortingAlgorithms[0]);
  const [delay, setDelay] = React.useState(500);

  React.useEffect(() => {
    setBarsArray( shuffleArray(getNewArray(barsNumber)) );
  }, [barsNumber]);

  function handleShuffle() {
    setBarsArray(shuffleArray);
  }

  function handleChangeAlgorithm(event) {
    setSelectedAlgorithm( sortingAlgorithms.find(algorithm => {
      return algorithm.id === event.target.value;
    }));
  }

  async function handleRunSorting() {
    setIsInProgress(true);
    const sorting = new Sorting({
      sortArray: selectedAlgorithm.f,
      array: barsArray,
      setArray: setBarsArray,
      delay: delay,
    });
    await sorting.start();
    setIsInProgress(false);
  }

  return (
    <main>
      <GeneralControls
        barsNumber={barsNumber}
        onBarsChange={setBarsNumber}
        delay={delay}
        onDelayChange={setDelay}
        onShuffle={handleShuffle}
        onRunSorting={handleRunSorting}
      />
      <Playground>
        <Field
          barsArray={barsArray}
          isInProgress={isInProgress}
        />
        <Controls
          list={sortingAlgorithms}
          onChange={handleChangeAlgorithm}
        />
        <Results />
      </Playground>
    </main>
  );
}

export default Main;
