import bubbleSort from "./bubbleSort";
import quickSort from "./quickSort"

const sortingAlgorithms = [
  {
    id: 'bubbleSort',
    name: 'Сортировка пузырьком',
    f: bubbleSort,
  },
  {
    id: 'quickSort',
    name: 'Быстрая сортировка',
    f: quickSort,
  },
]

export default sortingAlgorithms;

