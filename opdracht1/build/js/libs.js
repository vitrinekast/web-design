/**
 * http://animejs.com
 * JavaScript animation engine
 * @version v2.2.0
 * @author Julian Garnier
 * @copyright ©2017 Julian Garnier
 * Released under the MIT license
**/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.anime = factory();
  }
}(this, () => {

  // Defaults

  const defaultInstanceSettings = {
    update: undefined,
    begin: undefined,
    run: undefined,
    complete: undefined,
    loop: 1,
    direction: 'normal',
    autoplay: true,
    offset: 0
  }

  const defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    easing: 'easeOutElastic',
    elasticity: 500,
    round: 0
  }

  const validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY', 'perspective'];
  let transformString;

  // Utils

  function stringContains(str, text) {
    return str.indexOf(text) > -1;
  }

  const is = {
    arr: a => Array.isArray(a),
    obj: a => stringContains(Object.prototype.toString.call(a), 'Object'),
    pth: a => is.obj(a) && a.hasOwnProperty('totalLength'),
    svg: a => a instanceof SVGElement,
    dom: a => a.nodeType || is.svg(a),
    str: a => typeof a === 'string',
    fnc: a => typeof a === 'function',
    und: a => typeof a === 'undefined',
    hex: a => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a),
    rgb: a => /^rgb/.test(a),
    hsl: a => /^hsl/.test(a),
    col: a => (is.hex(a) || is.rgb(a) || is.hsl(a))
  }

  // BezierEasing https://github.com/gre/bezier-easing

  const bezier = (() => {

    const kSplineTableSize = 11;
    const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

    function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 };
    function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 };
    function C (aA1)      { return 3.0 * aA1 };

    function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT };
    function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) };

    function binarySubdivide (aX, aA, aB, mX1, mX2) {
      let currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) { aB = currentT } else { aA = currentT };
      } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
      return currentT;
    }

    function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
      for (let i = 0; i < 4; ++i) {
        const currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) return aGuessT;
        const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }

    function bezier(mX1, mY1, mX2, mY2) {

      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
      let sampleValues = new Float32Array(kSplineTableSize);

      if (mX1 !== mY1 || mX2 !== mY2) {
        for (let i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }

      function getTForX(aX) {

        let intervalStart = 0.0;
        let currentSample = 1;
        const lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample;

        const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        const guessForT = intervalStart + dist * kSampleStepSize;
        const initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= 0.001) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }

      }

      return x => {
        if (mX1 === mY1 && mX2 === mY2) return x;
        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(getTForX(x), mY1, mY2);
      }

    }

    return bezier;

  })();

  const easings = (() => {

    const names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic'];

    // Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/

    function elastic(t, p) {
      return t === 0 || t === 1 ? t :
      -Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2.0) * Math.asin(1))) * (Math.PI * 2)) / p );
    }

    // Approximated Penner equations http://matthewlein.com/ceaser/

    const equations = {
      In: [
        [0.550, 0.085, 0.680, 0.530], /* InQuad */
        [0.550, 0.055, 0.675, 0.190], /* InCubic */
        [0.895, 0.030, 0.685, 0.220], /* InQuart */
        [0.755, 0.050, 0.855, 0.060], /* InQuint */
        [0.470, 0.000, 0.745, 0.715], /* InSine */
        [0.950, 0.050, 0.795, 0.035], /* InExpo */
        [0.600, 0.040, 0.980, 0.335], /* InCirc */
        [0.600, -0.280, 0.735, 0.045], /* InBack */
        elastic /* InElastic */
      ], Out: [
        [0.250, 0.460, 0.450, 0.940], /* OutQuad */
        [0.215, 0.610, 0.355, 1.000], /* OutCubic */
        [0.165, 0.840, 0.440, 1.000], /* OutQuart */
        [0.230, 1.000, 0.320, 1.000], /* OutQuint */
        [0.390, 0.575, 0.565, 1.000], /* OutSine */
        [0.190, 1.000, 0.220, 1.000], /* OutExpo */
        [0.075, 0.820, 0.165, 1.000], /* OutCirc */
        [0.175, 0.885, 0.320, 1.275], /* OutBack */
        (t, f) => 1 - elastic(1 - t, f) /* OutElastic */
      ], InOut: [
        [0.455, 0.030, 0.515, 0.955], /* InOutQuad */
        [0.645, 0.045, 0.355, 1.000], /* InOutCubic */
        [0.770, 0.000, 0.175, 1.000], /* InOutQuart */
        [0.860, 0.000, 0.070, 1.000], /* InOutQuint */
        [0.445, 0.050, 0.550, 0.950], /* InOutSine */
        [1.000, 0.000, 0.000, 1.000], /* InOutExpo */
        [0.785, 0.135, 0.150, 0.860], /* InOutCirc */
        [0.680, -0.550, 0.265, 1.550], /* InOutBack */
        (t, f) => t < .5 ? elastic(t * 2, f) / 2 : 1 - elastic(t * -2 + 2, f) / 2 /* InOutElastic */
      ]
    }

    let functions = {
      linear: bezier(0.250, 0.250, 0.750, 0.750)
    }

    for (let type in equations) {
      equations[type].forEach((f, i) => {
        functions['ease'+type+names[i]] = is.fnc(f) ? f : bezier.apply(this, f);
      });
    }

    return functions;

  })();

  // Strings

  function stringToHyphens(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  function selectString(str) {
    if (is.col(str)) return;
    try {
      let nodes = document.querySelectorAll(str);
      return nodes;
    } catch(e) {
      return;
    }
  }

  // Arrays

  function filterArray(arr, callback) {
    const len = arr.length;
    const thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    let result = [];
    for (let i = 0; i < len; i++) {
      if (i in arr) {
        const val = arr[i];
        if (callback.call(thisArg, val, i, arr)) {
          result.push(val);
        }
      }
    }
    return result;
  }

  function flattenArray(arr) {
    return arr.reduce((a, b) => a.concat(is.arr(b) ? flattenArray(b) : b), []);
  }

  function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [o];
  }

  function arrayContains(arr, val) {
    return arr.some(a => a === val);
  }

  // Objects

  function cloneObject(o) {
    let clone = {};
    for (let p in o) clone[p] = o[p];
    return clone;
  }

  function replaceObjectProps(o1, o2) {
    let o = cloneObject(o1);
    for (let p in o1) o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    return o;
  }

  function mergeObjects(o1, o2) {
    let o = cloneObject(o1);
    for (let p in o2) o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    return o;
  }

  // Colors

  function rgbToRgba(rgbValue) {
    const rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? `rgba(${rgb[1]},1)` : rgbValue;
  }

  function hexToRgba(hexValue) {
    const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const hex = hexValue.replace(rgx, (m, r, g, b) => r + r + g + g + b + b );
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const r = parseInt(rgb[1], 16);
    const g = parseInt(rgb[2], 16);
    const b = parseInt(rgb[3], 16);
    return `rgba(${r},${g},${b},1)`;
  }

  function hslToRgba(hslValue) {
    const hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    const h = parseInt(hsl[1]) / 360;
    const s = parseInt(hsl[2]) / 100;
    const l = parseInt(hsl[3]) / 100;
    const a = hsl[4] || 1;
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    let r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return `rgba(${r * 255},${g * 255},${b * 255},${a})`;
  }

  function colorToRgb(val) {
    if (is.rgb(val)) return rgbToRgba(val);
    if (is.hex(val)) return hexToRgba(val);
    if (is.hsl(val)) return hslToRgba(val);
  }

  // Units

  function getUnit(val) {
    const split = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) return split[2];
  }

  function getTransformUnit(propName) {
    if (stringContains(propName, 'translate') || propName === 'perspective') return 'px';
    if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) return 'deg';
  }

  // Values

  function minMaxValue(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
  }

  function getCSSValue(el, prop) {
    if (prop in el.style) {
      return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
    }
  }

  function getAnimationType(el, prop) {
    if (is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
    if (is.dom(el) && (el.getAttribute(prop) || (is.svg(el) && el[prop]))) return 'attribute';
    if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) return 'css';
    if (el[prop] != null) return 'object';
  }

  function getTransformValue(el, propName) {
    const defaultUnit = getTransformUnit(propName);
    const defaultVal = stringContains(propName, 'scale') ? 1 : 0 + defaultUnit;
    const str = el.style.transform;
    if (!str) return defaultVal;
    let match = [];
    let props = [];
    let values = [];
    const rgx = /(\w+)\((.+?)\)/g;
    while (match = rgx.exec(str)) {
      props.push(match[1]);
      values.push(match[2]);
    }
    const value = filterArray(values, (val, i) => props[i] === propName);
    return value.length ? value[0] : defaultVal;
  }

  function getOriginalTargetValue(target, propName) {
    switch (getAnimationType(target, propName)) {
      case 'transform': return getTransformValue(target, propName);
      case 'css': return getCSSValue(target, propName);
      case 'attribute': return target.getAttribute(propName);
    }
    return target[propName] || 0;
  }

  function getRelativeValue(to, from) {
    const operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    const u = getUnit(to) || 0;
    const x = parseFloat(from);
    const y = parseFloat(to.replace(operator[0], ''));
    switch (operator[0][0]) {
      case '+': return x + y + u;
      case '-': return x - y + u;
      case '*': return x * y + u;
    }
  }

  function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    const originalUnit = getUnit(val);
    const unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    return unit && !/\s/g.test(val) ? unitLess + unit : unitLess;
  }

  // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes.
  // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  function getCircleLength(el) {
    return 2 * Math.PI * el.getAttribute('r');
  }

  function getRectLength(el) {
    return (el.getAttribute('width') * 2) + (el.getAttribute('height') * 2);
  }

  function getLineLength(el) {
    return getDistance(
      {x: el.getAttribute('x1'), y: el.getAttribute('y1')},
      {x: el.getAttribute('x2'), y: el.getAttribute('y2')}
    );
  }

  function getPolylineLength(el) {
    const points = el.points;
    let totalLength = 0;
    let previousPos;
    for (let i = 0 ; i < points.numberOfItems; i++) {
      const currentPos = points.getItem(i);
      if (i > 0) totalLength += getDistance(previousPos, currentPos);
      previousPos = currentPos;
    }
    return totalLength;
  }

  function getPolygonLength(el) {
    const points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
  }

  // Path animation

  function getTotalLength(el) {
    if (el.getTotalLength) return el.getTotalLength();
    switch(el.tagName.toLowerCase()) {
      case 'circle': return getCircleLength(el);
      case 'rect': return getRectLength(el);
      case 'line': return getLineLength(el);
      case 'polyline': return getPolylineLength(el);
      case 'polygon': return getPolygonLength(el);
    }
  }

  function setDashoffset(el) {
    const pathLength = getTotalLength(el);
    el.setAttribute('stroke-dasharray', pathLength);
    return pathLength;
  }

  // Motion path

  function getPath(path, percent) {
    const el = is.str(path) ? selectString(path)[0] : path;
    const p = percent || 100;
    return function(prop) {
      return {
        el: el,
        property: prop,
        totalLength: getTotalLength(el) * (p / 100)
      }
    }
  }

  function getPathProgress(path, progress) {
    function point(offset = 0) {
      const l = progress + offset >= 1 ? progress + offset : 0;
      return path.el.getPointAtLength(l);
    }
    const p = point();
    const p0 = point(-1);
    const p1 = point(+1);
    switch (path.property) {
      case 'x': return p.x;
      case 'y': return p.y;
      case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  }

  // Decompose value

  function decomposeValue(val, unit) {
    const rgx = /-?\d*\.?\d+/g;
    const value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
    return {
      original: value,
      numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
      strings: (is.str(val) || unit) ? value.split(rgx) : []
    }
  }

  // Animatables

  function parseTargets(targets) {
    const targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
    return filterArray(targetsArray, (item, pos, self) => self.indexOf(item) === pos);
  }

  function getAnimatables(targets) {
    const parsed = parseTargets(targets);
    return parsed.map((t, i) => {
      return {target: t, id: i, total: parsed.length};
    });
  }

  // Properties

  function normalizePropertyTweens(prop, tweenSettings) {
    let settings = cloneObject(tweenSettings);
    if (is.arr(prop)) {
      const l = prop.length;
      const isFromTo = (l === 2 && !is.obj(prop[0]));
      if (!isFromTo) {
        // Duration divided by the number of tweens
        if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
      } else {
        // Transform [from, to] values shorthand to a valid tween value
        prop = {value: prop};
      }
    }
    return toArray(prop).map((v, i) => {
      // Default delay value should be applied only on the first tween
      const delay = !i ? tweenSettings.delay : 0;
      // Use path object as a tween value
      let obj = is.obj(v) && !is.pth(v) ? v : {value: v};
      // Set default delay value
      if (is.und(obj.delay)) obj.delay = delay;
      return obj;
    }).map(k => mergeObjects(k, settings));
  }

  function getProperties(instanceSettings, tweenSettings, params) {
    let properties = [];
    const settings = mergeObjects(instanceSettings, tweenSettings);
    for (let p in params) {
      if (!settings.hasOwnProperty(p) && p !== 'targets') {
        properties.push({
          name: p,
          offset: settings['offset'],
          tweens: normalizePropertyTweens(params[p], tweenSettings)
        });
      }
    }
    return properties;
  }

  // Tweens

  function normalizeTweenValues(tween, animatable) {
    let t = {};
    for (let p in tween) {
      let value = getFunctionValue(tween[p], animatable);
      if (is.arr(value)) {
        value = value.map(v => getFunctionValue(v, animatable));
        if (value.length === 1) value = value[0];
      }
      t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
  }

  function normalizeEasing(val) {
    return is.arr(val) ? bezier.apply(this, val) : easings[val];
  }

  function normalizeTweens(prop, animatable) {
    let previousTween;
    return prop.tweens.map(t => {
      let tween = normalizeTweenValues(t, animatable);
      const tweenValue = tween.value;
      const originalValue = getOriginalTargetValue(animatable.target, prop.name);
      const previousValue = previousTween ? previousTween.to.original : originalValue;
      const from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
      const to = getRelativeValue(is.arr(tweenValue) ? tweenValue[1] : tweenValue, from);
      const unit = getUnit(to) || getUnit(from) || getUnit(originalValue);
      tween.from = decomposeValue(from, unit);
      tween.to = decomposeValue(to, unit);
      tween.start = previousTween ? previousTween.end : prop.offset;
      tween.end = tween.start + tween.delay + tween.duration;
      tween.easing = normalizeEasing(tween.easing);
      tween.elasticity = (1000 - minMaxValue(tween.elasticity, 1, 999)) / 1000;
      tween.isPath = is.pth(tweenValue);
      tween.isColor = is.col(tween.from.original);
      if (tween.isColor) tween.round = 1;
      previousTween = tween;
      return tween;
    });
  }

  // Tween progress

  const setTweenProgress = {
    css: (t, p, v) => t.style[p] = v,
    attribute: (t, p, v) => t.setAttribute(p, v),
    object: (t, p, v) => t[p] = v,
    transform: (t, p, v, transforms, id) => {
      if (!transforms[id]) transforms[id] = [];
      transforms[id].push(`${p}(${v})`);
    }
  }

  // Animations

  function createAnimation(animatable, prop) {
    const animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
      const tweens = normalizeTweens(prop, animatable);
      return {
        type: animType,
        property: prop.name,
        animatable: animatable,
        tweens: tweens,
        duration: tweens[tweens.length - 1].end,
        delay: tweens[0].delay
      }
    }
  }

  function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(animatable => {
      return properties.map(prop => {
        return createAnimation(animatable, prop);
      });
    })), a => !is.und(a));
  }

  // Create Instance

  function getInstanceTimings(type, animations, instanceSettings, tweenSettings) {
    const isDelay = (type === 'delay');
    if (animations.length) {
      return (isDelay ? Math.min : Math.max).apply(Math, animations.map(anim => anim[type]));
    } else {
      return isDelay ? tweenSettings.delay : instanceSettings.offset + tweenSettings.delay + tweenSettings.duration;
    }
  }

  function createNewInstance(params) {
    const instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    const tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    const animatables = getAnimatables(params.targets);
    const properties = getProperties(instanceSettings, tweenSettings, params);
    const animations = getAnimations(animatables, properties);
    return mergeObjects(instanceSettings, {
      children: [],
      animatables: animatables,
      animations: animations,
      duration: getInstanceTimings('duration', animations, instanceSettings, tweenSettings),
      delay: getInstanceTimings('delay', animations, instanceSettings, tweenSettings)
    });
  }

  // Core

  let activeInstances = [];
  let raf = 0;

  const engine = (() => {
    function play() { raf = requestAnimationFrame(step); };
    function step(t) {
      const activeLength = activeInstances.length;
      if (activeLength) {
        let i = 0;
        while (i < activeLength) {
          if (activeInstances[i]) activeInstances[i].tick(t);
          i++;
        }
        play();
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }
    return play;
  })();


  // Public Instance

  function anime(params = {}) {

    let now, startTime, lastTime = 0;

    let resolve = null;

    function makePromise() {
      return window.Promise && new Promise(_resolve => resolve = _resolve);
    }

    let promise = makePromise();

    let instance = createNewInstance(params);

    function toggleInstanceDirection() {
      instance.reversed = !instance.reversed;
    }

    function adjustTime(time) {
      return instance.reversed ? instance.duration - time : time;
    }

    function syncInstanceChildren(time) {
      const children = instance.children;
      const childrenLength = children.length;
      if (time >= instance.currentTime) {
        for (let i = 0; i < childrenLength; i++) children[i].seek(time);
      } else {
        for (let i = childrenLength; i--;) children[i].seek(time);
      }
    }

    function setAnimationsProgress(insTime) {
      let i = 0;
      let transforms = {};
      const animations = instance.animations;
      const animationsLength = animations.length;
      while (i < animationsLength) {
        const anim = animations[i];
        const animatable = anim.animatable;
        const tweens = anim.tweens;
        const tweenLength = tweens.length - 1;
        let tween = tweens[tweenLength];
        // Only check for keyframes if there is more than one tween
        if (tweenLength) tween = filterArray(tweens, t => (insTime < t.end))[0] || tween;
        const elapsed = minMaxValue(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
        const eased = isNaN(elapsed) ? 1 : tween.easing(elapsed, tween.elasticity);
        const strings = tween.to.strings;
        const round = tween.round;
        let numbers = [];
        let progress;
        const toNumbersLength = tween.to.numbers.length;
        for (let n = 0; n < toNumbersLength; n++) {
          let value;
          const toNumber = tween.to.numbers[n];
          const fromNumber = tween.from.numbers[n];
          if (!tween.isPath) {
            value = fromNumber + (eased * (toNumber - fromNumber));
          } else {
            value = getPathProgress(tween.value, eased * toNumber);
          }
          if (round) {
            if (!(tween.isColor && n > 2)) {
              value = Math.round(value * round) / round;
            }
          }
          numbers.push(value);
        }
        // Manual Array.reduce for better performances
        const stringsLength = strings.length;
        if (!stringsLength) {
          progress = numbers[0];
        } else {
          progress = strings[0];
          for (let s = 0; s < stringsLength; s++) {
            const a = strings[s];
            const b = strings[s + 1];
            const n = numbers[s];
            if (!isNaN(n)) {
              if (!b) {
                progress += n + ' ';
              } else {
                progress += n + b;
              }
            }
          }
        }
        setTweenProgress[anim.type](animatable.target, anim.property, progress, transforms, animatable.id);
        anim.currentValue = progress;
        i++;
      }
      const transformsLength = Object.keys(transforms).length;
      if (transformsLength) {
        for (let id = 0; id < transformsLength; id++) {
          if (!transformString) {
            const t = 'transform';
            transformString = (getCSSValue(document.body, t) ? t : `-webkit-${t}`);
          }
          instance.animatables[id].target.style[transformString] = transforms[id].join(' ');
        }
      }
      instance.currentTime = insTime;
      instance.progress = (insTime / instance.duration) * 100;
    }

    function setCallback(cb) {
      if (instance[cb]) instance[cb](instance);
    }

    function countIteration() {
      if (instance.remaining && instance.remaining !== true) {
        instance.remaining--;
      }
    }

    function setInstanceProgress(engineTime) {
      const insDuration = instance.duration;
      const insOffset = instance.offset;
      const insStart = insOffset + instance.delay;
      const insCurrentTime = instance.currentTime;
      const insReversed = instance.reversed;
      const insTime = adjustTime(engineTime);
      if (instance.children.length) syncInstanceChildren(insTime);
      if (insTime >= insStart || !insDuration) {
        if (!instance.began) {
          instance.began = true;
          setCallback('begin');
        }
        setCallback('run');
      }
      if (insTime > insOffset && insTime < insDuration) {
        setAnimationsProgress(insTime);
      } else {
        if (insTime <= insOffset && insCurrentTime !== 0) {
          setAnimationsProgress(0);
          if (insReversed) countIteration();
        }
        if ((insTime >= insDuration && insCurrentTime !== insDuration) || !insDuration) {
          setAnimationsProgress(insDuration);
          if (!insReversed) countIteration();
        }
      }
      setCallback('update');
      if (engineTime >= insDuration) {
        if (instance.remaining) {
          startTime = now;
          if (instance.direction === 'alternate') toggleInstanceDirection();
        } else {
          instance.pause();
          if (!instance.completed) {
            instance.completed = true;
            setCallback('complete');
            if ('Promise' in window) {
              resolve();
              promise = makePromise();
            }
          }
        }
        lastTime = 0;
      }
    }

    instance.reset = function() {
      const direction = instance.direction;
      const loops = instance.loop;
      instance.currentTime = 0;
      instance.progress = 0;
      instance.paused = true;
      instance.began = false;
      instance.completed = false;
      instance.reversed = direction === 'reverse';
      instance.remaining = direction === 'alternate' && loops === 1 ? 2 : loops;
      setAnimationsProgress(0);
      for (let i = instance.children.length; i--; ){
        instance.children[i].reset();
      }
    }

    instance.tick = function(t) {
      now = t;
      if (!startTime) startTime = now;
      const engineTime = (lastTime + now - startTime) * anime.speed;
      setInstanceProgress(engineTime);
    }

    instance.seek = function(time) {
      setInstanceProgress(adjustTime(time));
    }

    instance.pause = function() {
      const i = activeInstances.indexOf(instance);
      if (i > -1) activeInstances.splice(i, 1);
      instance.paused = true;
    }

    instance.play = function() {
      if (!instance.paused) return;
      instance.paused = false;
      startTime = 0;
      lastTime = adjustTime(instance.currentTime);
      activeInstances.push(instance);
      if (!raf) engine();
    }

    instance.reverse = function() {
      toggleInstanceDirection();
      startTime = 0;
      lastTime = adjustTime(instance.currentTime);
    }

    instance.restart = function() {
      instance.pause();
      instance.reset();
      instance.play();
    }

    instance.finished = promise;

    instance.reset();

    if (instance.autoplay) instance.play();

    return instance;

  }

  // Remove targets from animation

  function removeTargets(targets) {
    const targetsArray = parseTargets(targets);
    for (let i = activeInstances.length; i--;) {
      const instance = activeInstances[i];
      const animations = instance.animations;
      for (let a = animations.length; a--;) {
        if (arrayContains(targetsArray, animations[a].animatable.target)) {
          animations.splice(a, 1);
          if (!animations.length) instance.pause();
        }
      }
    }
  }

  // Timeline

  function timeline(params) {
    let tl = anime(params);
    tl.pause();
    tl.duration = 0;
    tl.add = function(instancesParams) {
      tl.children.forEach(i => { i.began = true; i.completed = true; });
      toArray(instancesParams).forEach(instanceParams => {
        let insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params || {}));
        insParams.targets = insParams.targets || params.targets;
        const tlDuration = tl.duration;
        const insOffset = insParams.offset;
        insParams.autoplay = false;
        insParams.direction = tl.direction;
        insParams.offset = is.und(insOffset) ? tlDuration : getRelativeValue(insOffset, tlDuration);
        tl.began = true;
        tl.completed = true;
        tl.seek(insParams.offset);
        const ins = anime(insParams);
        ins.began = true;
        ins.completed = true;
        if (ins.duration > tlDuration) tl.duration = ins.duration;
        tl.children.push(ins);
      });
      tl.seek(0);
      tl.reset();
      if (tl.autoplay) tl.restart();
      return tl;
    }
    return tl;
  }

  anime.version = '2.2.0';
  anime.speed = 1;
  anime.running = activeInstances;
  anime.remove = removeTargets;
  anime.getValue = getOriginalTargetValue;
  anime.path = getPath;
  anime.setDashoffset = setDashoffset;
  anime.bezier = bezier;
  anime.easings = easings;
  anime.timeline = timeline;
  anime.random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return anime;

}));

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Navigo = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isPushStateAvailable() {
  return !!(typeof window !== 'undefined' && window.history && window.history.pushState);
}

function Navigo(r, useHash, hash) {
  this.root = null;
  this._routes = [];
  this._useHash = useHash;
  this._hash = typeof hash === 'undefined' ? '#' : hash;
  this._paused = false;
  this._destroyed = false;
  this._lastRouteResolved = null;
  this._notFoundHandler = null;
  this._defaultHandler = null;
  this._usePushState = !useHash && isPushStateAvailable();
  this._onLocationChange = this._onLocationChange.bind(this);
  this._genericHooks = null;
  this._historyAPIUpdateMethod = 'pushState';

  if (r) {
    this.root = useHash ? r.replace(/\/$/, '/' + this._hash) : r.replace(/\/$/, '');
  } else if (useHash) {
    this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, '/' + this._hash);
  }

  this._listen();
  this.updatePageLinks();
}

function clean(s) {
  if (s instanceof RegExp) return s;
  return s.replace(/\/+$/, '').replace(/^\/+/, '^/');
}

function regExpResultToParams(match, names) {
  if (names.length === 0) return null;
  if (!match) return null;
  return match.slice(1, match.length).reduce(function (params, value, index) {
    if (params === null) params = {};
    params[names[index]] = decodeURIComponent(value);
    return params;
  }, null);
}

function replaceDynamicURLParts(route) {
  var paramNames = [],
      regexp;

  if (route instanceof RegExp) {
    regexp = route;
  } else {
    regexp = new RegExp(route.replace(Navigo.PARAMETER_REGEXP, function (full, dots, name) {
      paramNames.push(name);
      return Navigo.REPLACE_VARIABLE_REGEXP;
    }).replace(Navigo.WILDCARD_REGEXP, Navigo.REPLACE_WILDCARD) + Navigo.FOLLOWED_BY_SLASH_REGEXP, Navigo.MATCH_REGEXP_FLAGS);
  }
  return { regexp: regexp, paramNames: paramNames };
}

function getUrlDepth(url) {
  return url.replace(/\/$/, '').split('/').length;
}

function compareUrlDepth(urlA, urlB) {
  return getUrlDepth(urlB) - getUrlDepth(urlA);
}

function findMatchedRoutes(url) {
  var routes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return routes.map(function (route) {
    var _replaceDynamicURLPar = replaceDynamicURLParts(clean(route.route)),
        regexp = _replaceDynamicURLPar.regexp,
        paramNames = _replaceDynamicURLPar.paramNames;

    var match = url.replace(/^\/+/, '/').match(regexp);
    var params = regExpResultToParams(match, paramNames);

    return match ? { match: match, route: route, params: params } : false;
  }).filter(function (m) {
    return m;
  });
}

function match(url, routes) {
  return findMatchedRoutes(url, routes)[0] || false;
}

function root(url, routes) {
  var matched = routes.map(function (route) {
    return route.route === '' || route.route === '*' ? url : url.split(new RegExp(route.route + '($|\/)'))[0];
  });
  var fallbackURL = clean(url);

  if (matched.length > 1) {
    return matched.reduce(function (result, url) {
      if (result.length > url.length) result = url;
      return result;
    }, matched[0]);
  } else if (matched.length === 1) {
    return matched[0];
  }
  return fallbackURL;
}

function isHashChangeAPIAvailable() {
  return typeof window !== 'undefined' && 'onhashchange' in window;
}

function extractGETParameters(url) {
  return url.split(/\?(.*)?$/).slice(1).join('');
}

function getOnlyURL(url, useHash, hash) {
  var onlyURL = url,
      split;
  var cleanGETParam = function cleanGETParam(str) {
    return str.split(/\?(.*)?$/)[0];
  };

  if (typeof hash === 'undefined') {
    // To preserve BC
    hash = '#';
  }

  if (isPushStateAvailable() && !useHash) {
    onlyURL = cleanGETParam(url).split(hash)[0];
  } else {
    split = url.split(hash);
    onlyURL = split.length > 1 ? cleanGETParam(split[1]) : cleanGETParam(split[0]);
  }

  return onlyURL;
}

function manageHooks(handler, hooks, params) {
  if (hooks && (typeof hooks === 'undefined' ? 'undefined' : _typeof(hooks)) === 'object') {
    if (hooks.before) {
      hooks.before(function () {
        var shouldRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!shouldRoute) return;
        handler();
        hooks.after && hooks.after(params);
      }, params);
      return;
    } else if (hooks.after) {
      handler();
      hooks.after && hooks.after(params);
      return;
    }
  }
  handler();
}

function isHashedRoot(url, useHash, hash) {
  if (isPushStateAvailable() && !useHash) {
    return false;
  }

  if (!url.match(hash)) {
    return false;
  }

  var split = url.split(hash);

  return split.length < 2 || split[1] === '';
}

Navigo.prototype = {
  helpers: {
    match: match,
    root: root,
    clean: clean,
    getOnlyURL: getOnlyURL
  },
  navigate: function navigate(path, absolute) {
    var to;

    path = path || '';
    if (this._usePushState) {
      to = (!absolute ? this._getRoot() + '/' : '') + path.replace(/^\/+/, '/');
      to = to.replace(/([^:])(\/{2,})/g, '$1/');
      history[this._historyAPIUpdateMethod]({}, '', to);
      this.resolve();
    } else if (typeof window !== 'undefined') {
      path = path.replace(new RegExp('^' + this._hash), '');
      window.location.href = window.location.href.replace(/#$/, '').replace(new RegExp(this._hash + '.*$'), '') + this._hash + path;
    }
    return this;
  },
  on: function on() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'function') {
      this._defaultHandler = { handler: args[0], hooks: args[1] };
    } else if (args.length >= 2) {
      if (args[0] === '/') {
        var func = args[1];

        if (_typeof(args[1]) === 'object') {
          func = args[1].uses;
        }

        this._defaultHandler = { handler: func, hooks: args[2] };
      } else {
        this._add(args[0], args[1], args[2]);
      }
    } else if (_typeof(args[0]) === 'object') {
      var orderedRoutes = Object.keys(args[0]).sort(compareUrlDepth);

      orderedRoutes.forEach(function (route) {
        _this.on(route, args[0][route]);
      });
    }
    return this;
  },
  off: function off(handler) {
    if (this._defaultHandler !== null && handler === this._defaultHandler.handler) {
      this._defaultHandler = null;
    } else if (this._notFoundHandler !== null && handler === this._notFoundHandler.handler) {
      this._notFoundHandler = null;
    }
    this._routes = this._routes.reduce(function (result, r) {
      if (r.handler !== handler) result.push(r);
      return result;
    }, []);
    return this;
  },
  notFound: function notFound(handler, hooks) {
    this._notFoundHandler = { handler: handler, hooks: hooks };
    return this;
  },
  resolve: function resolve(current) {
    var _this2 = this;

    var handler, m;
    var url = (current || this._cLoc()).replace(this._getRoot(), '');

    if (this._useHash) {
      url = url.replace(new RegExp('^\/' + this._hash), '/');
    }

    var GETParameters = extractGETParameters(current || this._cLoc());
    var onlyURL = getOnlyURL(url, this._useHash, this._hash);

    if (this._paused) return false;

    if (this._lastRouteResolved && onlyURL === this._lastRouteResolved.url && GETParameters === this._lastRouteResolved.query) {
      if (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already) {
        this._lastRouteResolved.hooks.already(this._lastRouteResolved.params);
      }
      return false;
    }

    m = match(onlyURL, this._routes);

    if (m) {
      this._callLeave();
      this._lastRouteResolved = {
        url: onlyURL,
        query: GETParameters,
        hooks: m.route.hooks,
        params: m.params,
        name: m.route.name
      };
      handler = m.route.handler;
      manageHooks(function () {
        manageHooks(function () {
          m.route.route instanceof RegExp ? handler.apply(undefined, m.match.slice(1, m.match.length)) : handler(m.params, GETParameters);
        }, m.route.hooks, m.params, _this2._genericHooks);
      }, this._genericHooks, m.params);
      return m;
    } else if (this._defaultHandler && (onlyURL === '' || onlyURL === '/' || onlyURL === this._hash || isHashedRoot(onlyURL, this._useHash, this._hash))) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._defaultHandler.hooks };
          _this2._defaultHandler.handler(GETParameters);
        }, _this2._defaultHandler.hooks);
      }, this._genericHooks);
      return true;
    } else if (this._notFoundHandler) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._notFoundHandler.hooks };
          _this2._notFoundHandler.handler(GETParameters);
        }, _this2._notFoundHandler.hooks);
      }, this._genericHooks);
    }
    return false;
  },
  destroy: function destroy() {
    this._routes = [];
    this._destroyed = true;
    this._lastRouteResolved = null;
    this._genericHooks = null;
    clearTimeout(this._listeningInterval);
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this._onLocationChange);
      window.removeEventListener('hashchange', this._onLocationChange);
    }
  },
  updatePageLinks: function updatePageLinks() {
    var self = this;

    if (typeof document === 'undefined') return;

    this._findLinks().forEach(function (link) {
      if (!link.hasListenerAttached) {
        link.addEventListener('click', function (e) {
          if ((e.ctrlKey || e.metaKey) && e.target.tagName.toLowerCase() == 'a') {
            return false;
          }
          var location = self.getLinkPath(link);

          if (!self._destroyed) {
            e.preventDefault();
            self.navigate(location.replace(/\/+$/, '').replace(/^\/+/, '/'));
          }
        });
        link.hasListenerAttached = true;
      }
    });
  },
  generate: function generate(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var result = this._routes.reduce(function (result, route) {
      var key;

      if (route.name === name) {
        result = route.route;
        for (key in data) {
          result = result.toString().replace(':' + key, data[key]);
        }
      }
      return result;
    }, '');

    return this._useHash ? this._hash + result : result;
  },
  link: function link(path) {
    return this._getRoot() + path;
  },
  pause: function pause() {
    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this._paused = status;
    if (status) {
      this._historyAPIUpdateMethod = 'replaceState';
    } else {
      this._historyAPIUpdateMethod = 'pushState';
    }
  },
  resume: function resume() {
    this.pause(false);
  },
  historyAPIUpdateMethod: function historyAPIUpdateMethod(value) {
    if (typeof value === 'undefined') return this._historyAPIUpdateMethod;
    this._historyAPIUpdateMethod = value;
    return value;
  },
  disableIfAPINotAvailable: function disableIfAPINotAvailable() {
    if (!isPushStateAvailable()) {
      this.destroy();
    }
  },
  lastRouteResolved: function lastRouteResolved() {
    return this._lastRouteResolved;
  },
  getLinkPath: function getLinkPath(link) {
    return link.getAttribute('href');
  },
  hooks: function hooks(_hooks) {
    this._genericHooks = _hooks;
  },

  _add: function _add(route) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var hooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (typeof route === 'string') {
      route = encodeURI(route);
    }
    this._routes.push((typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) === 'object' ? {
      route: route,
      handler: handler.uses,
      name: handler.as,
      hooks: hooks || handler.hooks
    } : { route: route, handler: handler, hooks: hooks });

    return this._add;
  },
  _getRoot: function _getRoot() {
    if (this.root !== null) return this.root;
    this.root = root(this._cLoc().split('?')[0], this._routes);
    return this.root;
  },
  _listen: function _listen() {
    var _this3 = this;

    if (this._usePushState) {
      window.addEventListener('popstate', this._onLocationChange);
    } else if (isHashChangeAPIAvailable()) {
      window.addEventListener('hashchange', this._onLocationChange);
    } else {
      var cached = this._cLoc(),
          current = void 0,
          _check = void 0;

      _check = function check() {
        current = _this3._cLoc();
        if (cached !== current) {
          cached = current;
          _this3.resolve();
        }
        _this3._listeningInterval = setTimeout(_check, 200);
      };
      _check();
    }
  },
  _cLoc: function _cLoc() {
    if (typeof window !== 'undefined') {
      if (typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__ !== 'undefined') {
        return window.__NAVIGO_WINDOW_LOCATION_MOCK__;
      }
      return clean(window.location.href);
    }
    return '';
  },
  _findLinks: function _findLinks() {
    return [].slice.call(document.querySelectorAll('[data-navigo]'));
  },
  _onLocationChange: function _onLocationChange() {
    this.resolve();
  },
  _callLeave: function _callLeave() {
    var lastRouteResolved = this._lastRouteResolved;

    if (lastRouteResolved && lastRouteResolved.hooks && lastRouteResolved.hooks.leave) {
      lastRouteResolved.hooks.leave(lastRouteResolved.params);
    }
  }
};

Navigo.PARAMETER_REGEXP = /([:*])(\w+)/g;
Navigo.WILDCARD_REGEXP = /\*/g;
Navigo.REPLACE_VARIABLE_REGEXP = '([^\/]+)';
Navigo.REPLACE_WILDCARD = '(?:.*)';
Navigo.FOLLOWED_BY_SLASH_REGEXP = '(?:\/$|$)';
Navigo.MATCH_REGEXP_FLAGS = '';

return Navigo;

})));
/*! NoSleep.min.js v0.9.0 - git.io/vfn01 - Rich Tibbett - MIT license */
!function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NoSleep=e():A.NoSleep=e()}("undefined"!=typeof self?self:this,function(){return function(A){function e(B){if(o[B])return o[B].exports;var Q=o[B]={i:B,l:!1,exports:{}};return A[B].call(Q.exports,Q,Q.exports,e),Q.l=!0,Q.exports}var o={};return e.m=A,e.c=o,e.d=function(A,o,B){e.o(A,o)||Object.defineProperty(A,o,{configurable:!1,enumerable:!0,get:B})},e.n=function(A){var o=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(o,"a",o),o},e.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},e.p="",e(e.s=0)}([function(A,e,o){"use strict";function B(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}var Q=function(){function A(A,e){for(var o=0;o<e.length;o++){var B=e[o];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(A,B.key,B)}}return function(e,o,B){return o&&A(e.prototype,o),B&&A(e,B),e}}(),t=o(1),n=t.webm,c=t.mp4,E="undefined"!=typeof navigator&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,l=function(){function A(){var e=this;B(this,A),E?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("muted",""),this.noSleepVideo.setAttribute("title","No Sleep"),this.noSleepVideo.setAttribute("playsinline",""),this._addSourceToVideo(this.noSleepVideo,"webm",n),this._addSourceToVideo(this.noSleepVideo,"mp4",c),this.noSleepVideo.addEventListener("loadedmetadata",function(){e.noSleepVideo.duration<=1?e.noSleepVideo.setAttribute("loop",""):e.noSleepVideo.addEventListener("timeupdate",function(){e.noSleepVideo.currentTime>.5&&(e.noSleepVideo.currentTime=Math.random())})}))}return Q(A,[{key:"_addSourceToVideo",value:function(A,e,o){var B=document.createElement("source");B.src=o,B.type="video/"+e,A.appendChild(B)}},{key:"enable",value:function(){E?(this.disable(),console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "),this.noSleepTimer=window.setInterval(function(){document.hidden||(window.location.href=window.location.href.split("#")[0],window.setTimeout(window.stop,0))},15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){E?this.noSleepTimer&&(console.warn("\n          NoSleep now disabled for older iOS devices.\n        "),window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),A}();A.exports=l},function(A,e,o){"use strict";A.exports={webm:"data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=",mp4:"data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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"}}])});