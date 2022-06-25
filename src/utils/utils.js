import { hslGradient } from "./hslGradient";

function getRelativeValue({value, minValue = 1, maxValue}) {
  const relativeValue = (value - minValue) / (maxValue - minValue);
  return relativeValue;
}

function getHeight({relativeValue, minHeight = 10, maxHeight = 100,
}) {
  const height = relativeValue * (maxHeight - minHeight) + minHeight;
  return height;
}

export function getNewArray(n) {
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    const percent = getRelativeValue({value: i, maxValue: n});

    const element = {
      value: i,
      height: getHeight({ relativeValue: percent }),
      color: hslGradient.getColor(percent * 100),
      isActive: false,
      isDone: false,
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
