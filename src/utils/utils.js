export function getNewArray(n) {
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    newArray.push(i);
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
