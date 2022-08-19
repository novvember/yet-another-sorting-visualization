export default async function quickSort({
  array, // массив для сортировки
  render, // отобразить состояние без задержки: render()
  renderWithDelay, // отобразить состояние с задержкой: await renderWithDelay()
  setActive, // отметить элементы массива как текущие: setActive(a, b)
  clearActive, // Убрать отметку у активных элементов: clearActive(a, b)
  setDone, // отметить элементы массива как выполненные: setDone(doneElement)
  clearStatuses, // убрать любые отметки с элементов: clearStatuses()
  isStopped, // параметр для проверки остановки пользователем: if (isStopped.value)
}) {

  async function sort(startIndex, endIndex) {
    const pivot = array[startIndex];

    setActive(pivot);
    await renderWithDelay();

    for (let i = startIndex; i < endIndex; i++) {
      const element = array[i];
      const pivotIndex = array.indexOf(pivot);
      if (i === pivotIndex) continue;

      setActive(element);
      await renderWithDelay();

      if (element.value < pivot.value) {
        if (i >= pivotIndex) move(array, i, array.indexOf(pivot));
      } else {
        if (i < pivotIndex) move(array, i, array.indexOf(pivot) + 1);
      }

      await renderWithDelay();
      clearActive(element);
    }
    clearActive(pivot);
    setDone(pivot);

    const pivotIndex = array.indexOf(pivot);
    const lowerArrayIndexes = [startIndex, pivotIndex];
    const higherArrayIndexes = [pivotIndex + 1, endIndex];

    if (lowerArrayIndexes[1] - lowerArrayIndexes[0] > 1) {
      await sort(...lowerArrayIndexes);
    } else {
      setDone(array[lowerArrayIndexes[0]]);
    }

    if (higherArrayIndexes[1] - higherArrayIndexes[0] > 1) {
      await sort(...higherArrayIndexes);
    } else {
      setDone(array[higherArrayIndexes[0]]);
    }
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
