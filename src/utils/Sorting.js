export class Sorting {
  constructor({
    sortArray,
    array,
    setArray,
    delay,
    isStopped,
    onComparison,
  }) {
    this._sortArray = sortArray;
    this._array = array.slice();
    this._setArray = setArray;
    this._delay = delay;
    this._isStopped = isStopped;
    this._onComparison = onComparison;
  }

  _wait(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), delay);
    });
  }

  _setActive(...elements) {
    elements.forEach(element => element.isActive = true);
  }

  _clearActive(...elements) {
    elements.forEach(element => element.isActive = false);
  }

  _setDone(...elements) {
    elements.forEach(element => element.isDone = true);
  }

  _clearDone(...elements) {
    elements.forEach(element => element.isDone = false);
  }

  _clearStatuses() {
    this._clearActive(...this._array);
    this._clearDone(...this._array);
  }

  _render() {
    this._setArray(this._array.slice());
  }

  async _renderWithDelay() {
    this._render();
    await this._wait(this._delay);
  }

  async start() {
    await this._sortArray({
      array: this._array,
      render: this._render.bind(this),
      renderWithDelay: this._renderWithDelay.bind(this),
      setActive: this._setActive,
      clearActive: this._clearActive,
      setDone: this._setDone,
      clearStatuses: this._clearStatuses.bind(this),
      isStopped: this._isStopped,
      onComparison: this._onComparison,
    });
    this._isStopped.value = false;
  }
}
