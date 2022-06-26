export default async function bubbleSort({
  array,
  render,
  renderWithDelay,
  setActive,
  clearActive,
  setDone,
  clearStatuses,
}) {

  console.log('bubble sort started');

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

      setActive(a, b);
      await renderWithDelay();

      if (a.value > b.value) {
        swap(array, i, i + 1);
        isSorted = false;

        await renderWithDelay();

        doneElement = a;
      };

      clearActive(a, b);
    }

    setDone(doneElement);
    if (isSorted) break;
  }

  clearStatuses();
  render();

  console.log('bubble sort done');
}

function swap(array, indexA, indexB) {
  [ array[indexA], array[indexB] ] = [ array[indexB], array[indexA] ];
  return true;
}
