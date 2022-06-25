export default async function bubleSort(array, setArray) {
  console.log('sorting started');

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
        setArray(array.slice());
      };


      await wait(500);
    }

    if (isSorted) break;
  }

  console.log('sorting done');

  return array;
}

function swap(array, indexA, indexB) {
  [ array[indexA], array[indexB] ] = [ array[indexB], array[indexA] ];
  return true;
}


function wait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), delay);
  })
}
