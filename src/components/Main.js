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
  const isStopped = React.useRef({value: false});

  const [comparisonCount, setComparisonCount] = React.useState(0);

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
    resetStatistics();
    const sorting = new Sorting({
      sortArray: selectedAlgorithm.f,
      array: barsArray,
      setArray: setBarsArray,
      delay: delay,
      isStopped: isStopped.current,
      onComparison: handleComparison,
    });
    await sorting.start();
    setIsInProgress(false);
  }

  function handleStopSorting() {
    isStopped.current.value = true;
  }

  function resetStatistics() {
    setComparisonCount(0);
  }

  function handleComparison() {
    setComparisonCount(count => count + 1);
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
        onStopSorting={handleStopSorting}
        isInProgress={isInProgress}
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
        <Results
          comparisonCount={comparisonCount}
        />
      </Playground>
    </main>
  );
}

export default Main;
