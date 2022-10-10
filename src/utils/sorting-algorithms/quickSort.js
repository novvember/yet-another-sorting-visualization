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
    if (isStopped.value) return;

    if (endIndex - startIndex <= 1) {
      setDone(...(array.slice(startIndex, endIndex) || []));
      return;
    }

    const pivot = array[getRandom(startIndex, endIndex - 1)];

    setActive(pivot);
    await renderWithDelay();

    const m = await split(startIndex, endIndex, pivot);

    clearActive(pivot);

    await sort(startIndex, m);
    await sort(m, endIndex);
  }

  async function split(startIndex, endIndex, pivot) {
    let m = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
      if (isStopped.value) return;
      const element = array[i];

      setActive(element);
      onComparison();
      await renderWithDelay();

      if (element.value < pivot.value) {
        swap(array, i, m++);
      }

      await renderWithDelay();
      if (element !== pivot) clearActive(element);
    }

    return m;
  }

  console.log('quick sort started');

  await sort(0, array.length);
  clearStatuses();
  render();

  console.log('quick sort done');
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
  return true;
}

function getRandom(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
