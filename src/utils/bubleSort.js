export default async function bubleSort(array, setArray) {
  console.log('sorting started');

  array = array.slice();
  const n = array.length;

  // Проходы по массиву
  for (let j = 1; j <= n - 1; j++) {
    let isSorted = true;
    let doneElement;

    // Каждый проход по массиву со сравнением
    for (let i = 0; i <= n - 1 - j; i++) {
      const a = array[i];
      const b = array[i + 1];
      doneElement = b;
      setActive(a);
      setActive(b);
      await render(array, setArray);

      if (a.value > b.value) {
        swap(array, i, i + 1);
        isSorted = false;
        await render(array, setArray);
        doneElement = a;
      };
      clearActive(a);
      clearActive(b);
    }

    setDone(doneElement);
    if (isSorted) break;
  }
  console.log('sorting done');
  clearStatuses(array);
  setArray(array);
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

function setActive(element) {
  element.isActive = true;
}

function clearActive(element) {
  element.isActive = false;
}

function setDone(element) {
  element.isDone = true;
}

function clearDone(element) {
  element.isDone = false;
}

function clearStatuses(array) {
  array.forEach(element => {
    clearActive(element);
    clearDone(element);
  });
  return array;
}

async function render(array, setArray) {
  setArray(array.slice());
  await wait(500);
}
