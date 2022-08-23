export default async function insertionSort({
  array, // массив для сортировки
  render, // отобразить состояние без задержки: render()
  renderWithDelay, // отобразить состояние с задержкой: await renderWithDelay()
  setActive, // отметить элементы массива как текущие: setActive(a, b)
  clearActive, // Убрать отметку у активных элементов: clearActive(a, b)
  setDone, // отметить элементы массива как выполненные: setDone(doneElement)
  clearStatuses, // убрать любые отметки с элементов: clearStatuses()
  isStopped, // параметр для проверки остановки пользователем: if (isStopped.value)
}) {
  console.log('insertion sort started');

  setDone(array[0]);

  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    setActive(currentElement);
    await renderWithDelay();

    const currentValue = currentElement.value;

    let j = i;

    while (j > 0) {
      const elementToCompare = array[j - 1];
      setActive(elementToCompare);
      await renderWithDelay();

      clearActive(elementToCompare);
      if (elementToCompare.value <= currentValue) break;
      j--;
      if (isStopped.value) break;
    }

    if (isStopped.value) break;

    move(array, i, j);
    await renderWithDelay();
    clearActive(currentElement);
    setDone(currentElement);

    if (isStopped.value) break;
  }

  clearStatuses();
  render();

  console.log('insertion sort done');
}

function move(array, fromIndex, toIndex) {
  array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
  return true;
}
