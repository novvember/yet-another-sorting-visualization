export default async function heapSort({
  array, // массив для сортировки
  render, // отобразить состояние без задержки: render()
  renderWithDelay, // отобразить состояние с задержкой: await renderWithDelay()
  setActive, // отметить элементы массива как текущие: setActive(a, b)
  clearActive, // Убрать отметку у активных элементов: clearActive(a, b)
  setDone, // отметить элементы массива как выполненные: setDone(doneElement)
  clearStatuses, // убрать любые отметки с элементов: clearStatuses()
  isStopped, // параметр для проверки остановки пользователем: if (isStopped.value)
  onComparison,
}) {
  async function siftDown(i) {
    while (2 * i + 1 < n) {
      let j = 2 * i + 1;
      if (2 * i + 2 < n && array[2 * i + 2].value > array[j].value) {
        onComparison();
        j = 2 * i + 2;
      }

      const a = array[i];
      const b = array[2 * i + 1];
      const c = 2 * i + 2 < n ? array[2 * i + 2] : array[2 * i + 1];

      setActive(a, b, c);
      onComparison();
      if (isStopped.value) break;
      await renderWithDelay();

      if (a.value >= array[j].value) {
        clearActive(a, b, c);
        break;
      }

      swap(array, i, j);
      i = j;

      if (isStopped.value) break;
      await renderWithDelay();

      clearActive(a, b, c);
      if (isStopped.value) break;
    }
  }

  console.log('heap sort started');

  let n = array.length;

  for (let i = n - 1; i >= 0; i--) {
    await siftDown(i);
    if (isStopped.value) break;
  }

  while (n) {
    const a = array[0];
    const b = array[n - 1];

    setActive(a, b);
    if (isStopped.value) break;
    await renderWithDelay();

    swap(array, 0, --n);

    if (isStopped.value) break;
    await renderWithDelay();

    clearActive(a, b);
    setDone(array[n]);

    await siftDown(0);
    if (isStopped.value) break;
  }

  clearStatuses();
  render();

  console.log('heap sort done');
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
  return true;
}
