import bubbleSort from "./bubbleSort";
import quickSort from "./quickSort"

const sortingAlgorithms = [
  {
    id: 'bubbleSort',
    name: '... пузырьком',
    f: bubbleSort,
  },
  {
    id: 'quickSort',
    name: 'Быстрая...',
    f: quickSort,
  },
]

export default sortingAlgorithms;

