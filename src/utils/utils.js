function getRelativeValue({value, minValue = 1, maxValue}) {
  const relativeValue = (value - minValue) / (maxValue - minValue);
  return relativeValue;
}

function getAjustedValue({relativeValue, minAjusted = 1, maxAdjusted = 100,
}) {
  const adjustedValue = relativeValue * (maxAdjusted - minAjusted) + minAjusted;
  return adjustedValue;
}

export function getNewArray(n) {
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    const element = {
      value: i,
      height: getAjustedValue({
        relativeValue: getRelativeValue({value: i, maxValue: n})
      }),
      isActive: false,
    };

    newArray.push(element);
  }

  return newArray;
}

export function shuffleArray(array) {
  const newArray = array.slice();

  let currentIndex = newArray.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
}
