export default async function quickSort({
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
  async function sort(startIndex, endIndex) {
    async function sortSubarray(startIndex, endIndex) {
      const elements = array.slice(startIndex, endIndex) || [];

      if (elements.length > 1) {
        await sort(startIndex, endIndex);
      } else {
        setDone(...elements);
      }
    }

    const pivot = array[startIndex];

    setActive(pivot);
    await renderWithDelay();

    for (let i = startIndex; i < endIndex; i++) {
      const element = array[i];
      const pivotIndex = array.indexOf(pivot);
      if (i === pivotIndex) continue;

      setActive(element);
      onComparison();
      await renderWithDelay();

      if (element.value < pivot.value) {
        if (i >= pivotIndex) move(array, i, array.indexOf(pivot));
      } else {
        if (i < pivotIndex) move(array, i, array.indexOf(pivot) + 1);
      }

      await renderWithDelay();
      clearActive(element);

      if (isStopped.value) return;
    }
    clearActive(pivot);
    setDone(pivot);

    const pivotIndex = array.indexOf(pivot);
    const lowerArrayIndexes = [startIndex, pivotIndex];
    const higherArrayIndexes = [pivotIndex + 1, endIndex];

    await sortSubarray(...lowerArrayIndexes);
    await sortSubarray(...higherArrayIndexes);
  }

  console.log('quick sort started');

  await sort(0, array.length);
  clearStatuses();
  render();

  console.log('quick sort done');
}

function move(array, fromIndex, toIndex) {
  array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
  return true;
}
