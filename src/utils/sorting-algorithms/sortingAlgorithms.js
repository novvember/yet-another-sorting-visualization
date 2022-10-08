import bubbleSort from './bubbleSort';
import quickSort from './quickSort';
import insertionSort from './insertionSort';
import heapSort from './heapSort';

const sortingAlgorithms = [
  {
    id: 'bubbleSort',
    name: 'Сортировка пузырьком',
    f: bubbleSort,
  },
  {
    id: 'insertionSort',
    name: 'Сортировка вставками',
    f: insertionSort,
  },
  {
    id: 'heapSort',
    name: 'Сортировка кучей',
    f: heapSort,
  },
  {
    id: 'quickSort',
    name: 'Быстрая сортировка',
    f: quickSort,
  },
];

export default sortingAlgorithms;
