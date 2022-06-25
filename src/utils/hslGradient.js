
class HslGradient {
  constructor(rawGradient) {
    this._rawGradient = rawGradient;
    this._gradient = this._getGradientFromRaw(this._rawGradient);
    this._intervals = Object.keys(this._gradient);

  }

  _getGradientFromRaw(raw) {
    const gradient = {};
    raw.forEach(item => {
      let [color, percent] = item.split(')');
      percent = parseInt(percent);
      color = color.slice(4);
      let [h, s, l] = color.split(' ');
      h = parseInt(h);
      s = parseInt(s);
      l = parseInt(l);
      gradient[percent] = {
        h,
        s,
        l
      };
    })
    return gradient;
  }

  _getInterval(percent) {
    let min = 0;
    let max = 100;
    for (let key of this._intervals) {
      if (percent > +key) min = +key;
      if (percent < +key) {
        max = +key;
        break;
      };
    }
    return [min, max];
  }

  _getPositionInInterval(percent, [min, max]) {
    return (percent - min) / (max - min);
  }

  _getApproxValue(position, min, max) {
    return Math.round(position * (max - min) + min);
  }


  _getApproxHue(position, min, max) {
    if (max < min) max += 360;
    return Math.round(position * (max - min) + min) % 360;
  }

  getColor(percent) {
    const [minInterval, maxInterval] = this._getInterval(percent);
    const positionInInterval = this._getPositionInInterval(percent, [minInterval, maxInterval]);

    const minColor = this._gradient[minInterval];
    const maxColor = this._gradient[maxInterval];

    const h = this._getApproxHue(positionInInterval, minColor.h, maxColor.h);
    const s = this._getApproxValue(positionInInterval, minColor.s, maxColor.s);
    const l = this._getApproxValue(positionInInterval, minColor.l, maxColor.l);

    const colorText = `hsl(${h}deg ${s}% ${l}%)`;

    return colorText;
  }
}

// Gradient generated with https://www.joshwcomeau.com/gradient-generator/
export const hslGradient = new HslGradient([
  'hsl(283deg 100% 22%) 0%',
  'hsl(298deg 100% 25%) 11%',
  'hsl(313deg 100% 28%) 22%',
  'hsl(327deg 100% 31%) 33%',
  'hsl(342deg 100% 35%) 44%',
  'hsl(356deg 100% 37%) 56%',
  'hsl(11deg 100% 41%) 67%',
  'hsl(26deg 100% 44%) 78%',
  'hsl(40deg 100% 47%) 89%',
  'hsl(55deg 100% 50%) 100%'
]);
