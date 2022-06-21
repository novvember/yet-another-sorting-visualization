export function getNewArray(n) {
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }

  return newArray;
}

export function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
