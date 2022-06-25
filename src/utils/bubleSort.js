export default function bubleSort(array) {
  array = array.slice();
  const n = array.length;

  // Проходы по массиву
  for (let j = 1; j <= n - 1; j++) {
    let isSorted = true;

    // Каждый проход по массиву со сравнением
    for (let i = 0; i <= n - 1 - j; i++) {
      if (array[i].value > array[i + 1].value) {
        swap(array, i, i + 1);
        isSorted = false;
      };
    }

    if (isSorted) break;
  }

  return array;
}

function swap(array, indexA, indexB) {
  [ array[indexA], array[indexB] ] = [ array[indexB], array[indexA] ];
  return true;
}
