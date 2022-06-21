import React from "react";

import GeneralControls from "./GeneralControls";
import Playground from "./Playground";
import Field from "./Field";
import Controls from "./Controls";
import Results from "./Results";

import {getNewArray, shuffleArray} from '../utils/utils.js';


function Main() {
  const [barsNumber, setBarsNumber] = React.useState(100);
  const [barsArray, setBarsArray] = React.useState( shuffleArray(getNewArray(barsNumber)) );

  function handleShuffle() {
    setBarsArray(shuffleArray);
  }

  return (
    <main>
      <GeneralControls
        barsNumber={barsNumber}
        onBarsChange={setBarsNumber}
        onShuffle={handleShuffle}
      />
      <Playground>
        <Field
          barsArray={barsArray}
        />
        <Controls />
        <Results />
      </Playground>
    </main>
  );
}

export default Main;
