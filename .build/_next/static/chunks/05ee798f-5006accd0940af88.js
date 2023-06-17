"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[174], { 7804: function(e, t, n) {
  let i;
  n.d(t, { CP7: function() {
    return i7;
  }, DvJ: function() {
    return tD;
  }, Kj0: function() {
    return tU;
  }, Pa4: function() {
    return H;
  }, TOt: function() {
    return rz;
  }, cPb: function() {
    return tG;
  }, ejS: function() {
    return rl;
  }, nls: function() {
    return i9;
  }, vBJ: function() {
    return te;
  }, xsS: function() {
    return i8;
  } });
  let r = "srgb", a = "srgb-linear", s = "display-p3", o = "300 es";
  class l {
    addEventListener(e10, t10) {
      void 0 === this._listeners && (this._listeners = {});
      let n10 = this._listeners;
      void 0 === n10[e10] && (n10[e10] = []), -1 === n10[e10].indexOf(t10) && n10[e10].push(t10);
    }
    hasEventListener(e10, t10) {
      if (void 0 === this._listeners)
        return false;
      let n10 = this._listeners;
      return void 0 !== n10[e10] && -1 !== n10[e10].indexOf(t10);
    }
    removeEventListener(e10, t10) {
      if (void 0 === this._listeners)
        return;
      let n10 = this._listeners, i10 = n10[e10];
      if (void 0 !== i10) {
        let e11 = i10.indexOf(t10);
        -1 !== e11 && i10.splice(e11, 1);
      }
    }
    dispatchEvent(e10) {
      if (void 0 === this._listeners)
        return;
      let t10 = this._listeners, n10 = t10[e10.type];
      if (void 0 !== n10) {
        e10.target = this;
        let t11 = n10.slice(0);
        for (let n11 = 0, i10 = t11.length; n11 < i10; n11++)
          t11[n11].call(this, e10);
        e10.target = null;
      }
    }
  }
  let h = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], u = Math.PI / 180, c = 180 / Math.PI;
  function d() {
    let e10 = 4294967295 * Math.random() | 0, t10 = 4294967295 * Math.random() | 0, n10 = 4294967295 * Math.random() | 0, i10 = 4294967295 * Math.random() | 0, r10 = h[255 & e10] + h[e10 >> 8 & 255] + h[e10 >> 16 & 255] + h[e10 >> 24 & 255] + "-" + h[255 & t10] + h[t10 >> 8 & 255] + "-" + h[t10 >> 16 & 15 | 64] + h[t10 >> 24 & 255] + "-" + h[63 & n10 | 128] + h[n10 >> 8 & 255] + "-" + h[n10 >> 16 & 255] + h[n10 >> 24 & 255] + h[255 & i10] + h[i10 >> 8 & 255] + h[i10 >> 16 & 255] + h[i10 >> 24 & 255];
    return r10.toLowerCase();
  }
  function p(e10, t10, n10) {
    return Math.max(t10, Math.min(n10, e10));
  }
  function f(e10) {
    return (e10 & e10 - 1) == 0 && 0 !== e10;
  }
  function m(e10) {
    return Math.pow(2, Math.floor(Math.log(e10) / Math.LN2));
  }
  function g(e10, t10) {
    switch (t10.constructor) {
      case Float32Array:
        return e10;
      case Uint32Array:
        return e10 / 4294967295;
      case Uint16Array:
        return e10 / 65535;
      case Uint8Array:
        return e10 / 255;
      case Int32Array:
        return Math.max(e10 / 2147483647, -1);
      case Int16Array:
        return Math.max(e10 / 32767, -1);
      case Int8Array:
        return Math.max(e10 / 127, -1);
      default:
        throw Error("Invalid component type.");
    }
  }
  function _(e10, t10) {
    switch (t10.constructor) {
      case Float32Array:
        return e10;
      case Uint32Array:
        return Math.round(4294967295 * e10);
      case Uint16Array:
        return Math.round(65535 * e10);
      case Uint8Array:
        return Math.round(255 * e10);
      case Int32Array:
        return Math.round(2147483647 * e10);
      case Int16Array:
        return Math.round(32767 * e10);
      case Int8Array:
        return Math.round(127 * e10);
      default:
        throw Error("Invalid component type.");
    }
  }
  class v {
    constructor(e10 = 0, t10 = 0) {
      v.prototype.isVector2 = true, this.x = e10, this.y = t10;
    }
    get width() {
      return this.x;
    }
    set width(e10) {
      this.x = e10;
    }
    get height() {
      return this.y;
    }
    set height(e10) {
      this.y = e10;
    }
    set(e10, t10) {
      return this.x = e10, this.y = t10, this;
    }
    setScalar(e10) {
      return this.x = e10, this.y = e10, this;
    }
    setX(e10) {
      return this.x = e10, this;
    }
    setY(e10) {
      return this.y = e10, this;
    }
    setComponent(e10, t10) {
      switch (e10) {
        case 0:
          this.x = t10;
          break;
        case 1:
          this.y = t10;
          break;
        default:
          throw Error("index is out of range: " + e10);
      }
      return this;
    }
    getComponent(e10) {
      switch (e10) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error("index is out of range: " + e10);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e10) {
      return this.x = e10.x, this.y = e10.y, this;
    }
    add(e10) {
      return this.x += e10.x, this.y += e10.y, this;
    }
    addScalar(e10) {
      return this.x += e10, this.y += e10, this;
    }
    addVectors(e10, t10) {
      return this.x = e10.x + t10.x, this.y = e10.y + t10.y, this;
    }
    addScaledVector(e10, t10) {
      return this.x += e10.x * t10, this.y += e10.y * t10, this;
    }
    sub(e10) {
      return this.x -= e10.x, this.y -= e10.y, this;
    }
    subScalar(e10) {
      return this.x -= e10, this.y -= e10, this;
    }
    subVectors(e10, t10) {
      return this.x = e10.x - t10.x, this.y = e10.y - t10.y, this;
    }
    multiply(e10) {
      return this.x *= e10.x, this.y *= e10.y, this;
    }
    multiplyScalar(e10) {
      return this.x *= e10, this.y *= e10, this;
    }
    divide(e10) {
      return this.x /= e10.x, this.y /= e10.y, this;
    }
    divideScalar(e10) {
      return this.multiplyScalar(1 / e10);
    }
    applyMatrix3(e10) {
      let t10 = this.x, n10 = this.y, i10 = e10.elements;
      return this.x = i10[0] * t10 + i10[3] * n10 + i10[6], this.y = i10[1] * t10 + i10[4] * n10 + i10[7], this;
    }
    min(e10) {
      return this.x = Math.min(this.x, e10.x), this.y = Math.min(this.y, e10.y), this;
    }
    max(e10) {
      return this.x = Math.max(this.x, e10.x), this.y = Math.max(this.y, e10.y), this;
    }
    clamp(e10, t10) {
      return this.x = Math.max(e10.x, Math.min(t10.x, this.x)), this.y = Math.max(e10.y, Math.min(t10.y, this.y)), this;
    }
    clampScalar(e10, t10) {
      return this.x = Math.max(e10, Math.min(t10, this.x)), this.y = Math.max(e10, Math.min(t10, this.y)), this;
    }
    clampLength(e10, t10) {
      let n10 = this.length();
      return this.divideScalar(n10 || 1).multiplyScalar(Math.max(e10, Math.min(t10, n10)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(e10) {
      return this.x * e10.x + this.y * e10.y;
    }
    cross(e10) {
      return this.x * e10.y - this.y * e10.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      let e10 = Math.atan2(-this.y, -this.x) + Math.PI;
      return e10;
    }
    angleTo(e10) {
      let t10 = Math.sqrt(this.lengthSq() * e10.lengthSq());
      if (0 === t10)
        return Math.PI / 2;
      let n10 = this.dot(e10) / t10;
      return Math.acos(p(n10, -1, 1));
    }
    distanceTo(e10) {
      return Math.sqrt(this.distanceToSquared(e10));
    }
    distanceToSquared(e10) {
      let t10 = this.x - e10.x, n10 = this.y - e10.y;
      return t10 * t10 + n10 * n10;
    }
    manhattanDistanceTo(e10) {
      return Math.abs(this.x - e10.x) + Math.abs(this.y - e10.y);
    }
    setLength(e10) {
      return this.normalize().multiplyScalar(e10);
    }
    lerp(e10, t10) {
      return this.x += (e10.x - this.x) * t10, this.y += (e10.y - this.y) * t10, this;
    }
    lerpVectors(e10, t10, n10) {
      return this.x = e10.x + (t10.x - e10.x) * n10, this.y = e10.y + (t10.y - e10.y) * n10, this;
    }
    equals(e10) {
      return e10.x === this.x && e10.y === this.y;
    }
    fromArray(e10, t10 = 0) {
      return this.x = e10[t10], this.y = e10[t10 + 1], this;
    }
    toArray(e10 = [], t10 = 0) {
      return e10[t10] = this.x, e10[t10 + 1] = this.y, e10;
    }
    fromBufferAttribute(e10, t10) {
      return this.x = e10.getX(t10), this.y = e10.getY(t10), this;
    }
    rotateAround(e10, t10) {
      let n10 = Math.cos(t10), i10 = Math.sin(t10), r10 = this.x - e10.x, a2 = this.y - e10.y;
      return this.x = r10 * n10 - a2 * i10 + e10.x, this.y = r10 * i10 + a2 * n10 + e10.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class x {
    constructor(e10, t10, n10, i10, r10, a2, s2, o2, l2) {
      x.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== e10 && this.set(e10, t10, n10, i10, r10, a2, s2, o2, l2);
    }
    set(e10, t10, n10, i10, r10, a2, s2, o2, l2) {
      let h2 = this.elements;
      return h2[0] = e10, h2[1] = i10, h2[2] = s2, h2[3] = t10, h2[4] = r10, h2[5] = o2, h2[6] = n10, h2[7] = a2, h2[8] = l2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e10) {
      let t10 = this.elements, n10 = e10.elements;
      return t10[0] = n10[0], t10[1] = n10[1], t10[2] = n10[2], t10[3] = n10[3], t10[4] = n10[4], t10[5] = n10[5], t10[6] = n10[6], t10[7] = n10[7], t10[8] = n10[8], this;
    }
    extractBasis(e10, t10, n10) {
      return e10.setFromMatrix3Column(this, 0), t10.setFromMatrix3Column(this, 1), n10.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e10) {
      let t10 = e10.elements;
      return this.set(t10[0], t10[4], t10[8], t10[1], t10[5], t10[9], t10[2], t10[6], t10[10]), this;
    }
    multiply(e10) {
      return this.multiplyMatrices(this, e10);
    }
    premultiply(e10) {
      return this.multiplyMatrices(e10, this);
    }
    multiplyMatrices(e10, t10) {
      let n10 = e10.elements, i10 = t10.elements, r10 = this.elements, a2 = n10[0], s2 = n10[3], o2 = n10[6], l2 = n10[1], h2 = n10[4], u2 = n10[7], c2 = n10[2], d2 = n10[5], p2 = n10[8], f2 = i10[0], m2 = i10[3], g2 = i10[6], _2 = i10[1], v2 = i10[4], x2 = i10[7], y2 = i10[2], M2 = i10[5], S2 = i10[8];
      return r10[0] = a2 * f2 + s2 * _2 + o2 * y2, r10[3] = a2 * m2 + s2 * v2 + o2 * M2, r10[6] = a2 * g2 + s2 * x2 + o2 * S2, r10[1] = l2 * f2 + h2 * _2 + u2 * y2, r10[4] = l2 * m2 + h2 * v2 + u2 * M2, r10[7] = l2 * g2 + h2 * x2 + u2 * S2, r10[2] = c2 * f2 + d2 * _2 + p2 * y2, r10[5] = c2 * m2 + d2 * v2 + p2 * M2, r10[8] = c2 * g2 + d2 * x2 + p2 * S2, this;
    }
    multiplyScalar(e10) {
      let t10 = this.elements;
      return t10[0] *= e10, t10[3] *= e10, t10[6] *= e10, t10[1] *= e10, t10[4] *= e10, t10[7] *= e10, t10[2] *= e10, t10[5] *= e10, t10[8] *= e10, this;
    }
    determinant() {
      let e10 = this.elements, t10 = e10[0], n10 = e10[1], i10 = e10[2], r10 = e10[3], a2 = e10[4], s2 = e10[5], o2 = e10[6], l2 = e10[7], h2 = e10[8];
      return t10 * a2 * h2 - t10 * s2 * l2 - n10 * r10 * h2 + n10 * s2 * o2 + i10 * r10 * l2 - i10 * a2 * o2;
    }
    invert() {
      let e10 = this.elements, t10 = e10[0], n10 = e10[1], i10 = e10[2], r10 = e10[3], a2 = e10[4], s2 = e10[5], o2 = e10[6], l2 = e10[7], h2 = e10[8], u2 = h2 * a2 - s2 * l2, c2 = s2 * o2 - h2 * r10, d2 = l2 * r10 - a2 * o2, p2 = t10 * u2 + n10 * c2 + i10 * d2;
      if (0 === p2)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      let f2 = 1 / p2;
      return e10[0] = u2 * f2, e10[1] = (i10 * l2 - h2 * n10) * f2, e10[2] = (s2 * n10 - i10 * a2) * f2, e10[3] = c2 * f2, e10[4] = (h2 * t10 - i10 * o2) * f2, e10[5] = (i10 * r10 - s2 * t10) * f2, e10[6] = d2 * f2, e10[7] = (n10 * o2 - l2 * t10) * f2, e10[8] = (a2 * t10 - n10 * r10) * f2, this;
    }
    transpose() {
      let e10;
      let t10 = this.elements;
      return e10 = t10[1], t10[1] = t10[3], t10[3] = e10, e10 = t10[2], t10[2] = t10[6], t10[6] = e10, e10 = t10[5], t10[5] = t10[7], t10[7] = e10, this;
    }
    getNormalMatrix(e10) {
      return this.setFromMatrix4(e10).invert().transpose();
    }
    transposeIntoArray(e10) {
      let t10 = this.elements;
      return e10[0] = t10[0], e10[1] = t10[3], e10[2] = t10[6], e10[3] = t10[1], e10[4] = t10[4], e10[5] = t10[7], e10[6] = t10[2], e10[7] = t10[5], e10[8] = t10[8], this;
    }
    setUvTransform(e10, t10, n10, i10, r10, a2, s2) {
      let o2 = Math.cos(r10), l2 = Math.sin(r10);
      return this.set(n10 * o2, n10 * l2, -n10 * (o2 * a2 + l2 * s2) + a2 + e10, -i10 * l2, i10 * o2, -i10 * (-l2 * a2 + o2 * s2) + s2 + t10, 0, 0, 1), this;
    }
    scale(e10, t10) {
      return this.premultiply(y.makeScale(e10, t10)), this;
    }
    rotate(e10) {
      return this.premultiply(y.makeRotation(-e10)), this;
    }
    translate(e10, t10) {
      return this.premultiply(y.makeTranslation(e10, t10)), this;
    }
    makeTranslation(e10, t10) {
      return e10.isVector2 ? this.set(1, 0, e10.x, 0, 1, e10.y, 0, 0, 1) : this.set(1, 0, e10, 0, 1, t10, 0, 0, 1), this;
    }
    makeRotation(e10) {
      let t10 = Math.cos(e10), n10 = Math.sin(e10);
      return this.set(t10, -n10, 0, n10, t10, 0, 0, 0, 1), this;
    }
    makeScale(e10, t10) {
      return this.set(e10, 0, 0, 0, t10, 0, 0, 0, 1), this;
    }
    equals(e10) {
      let t10 = this.elements, n10 = e10.elements;
      for (let e11 = 0; e11 < 9; e11++)
        if (t10[e11] !== n10[e11])
          return false;
      return true;
    }
    fromArray(e10, t10 = 0) {
      for (let n10 = 0; n10 < 9; n10++)
        this.elements[n10] = e10[n10 + t10];
      return this;
    }
    toArray(e10 = [], t10 = 0) {
      let n10 = this.elements;
      return e10[t10] = n10[0], e10[t10 + 1] = n10[1], e10[t10 + 2] = n10[2], e10[t10 + 3] = n10[3], e10[t10 + 4] = n10[4], e10[t10 + 5] = n10[5], e10[t10 + 6] = n10[6], e10[t10 + 7] = n10[7], e10[t10 + 8] = n10[8], e10;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  let y = new x();
  function M(e10) {
    for (let t10 = e10.length - 1; t10 >= 0; --t10)
      if (e10[t10] >= 65535)
        return true;
    return false;
  }
  function S(e10) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", e10);
  }
  Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
  let E = {};
  function T(e10) {
    e10 in E || (E[e10] = true, console.warn(e10));
  }
  function b(e10) {
    return e10 < 0.04045 ? 0.0773993808 * e10 : Math.pow(0.9478672986 * e10 + 0.0521327014, 2.4);
  }
  function A(e10) {
    return e10 < 31308e-7 ? 12.92 * e10 : 1.055 * Math.pow(e10, 0.41666) - 0.055;
  }
  let w = new x().fromArray([0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7, 1e-7, 0.9105199]), R = new x().fromArray([1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7, 0, 1.0982735]), C = { [a]: (e10) => e10, [r]: (e10) => e10.convertSRGBToLinear(), [s]: function(e10) {
    return e10.convertSRGBToLinear().applyMatrix3(R);
  } }, L = { [a]: (e10) => e10, [r]: (e10) => e10.convertLinearToSRGB(), [s]: function(e10) {
    return e10.applyMatrix3(w).convertLinearToSRGB();
  } }, P = { enabled: true, get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  }, set legacyMode(legacyMode) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !legacyMode;
  }, get workingColorSpace() {
    return a;
  }, set workingColorSpace(colorSpace) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  }, convert: function(e10, t10, n10) {
    if (false === this.enabled || t10 === n10 || !t10 || !n10)
      return e10;
    let i10 = C[t10], r10 = L[n10];
    if (void 0 === i10 || void 0 === r10)
      throw Error(`Unsupported color space conversion, "${t10}" to "${n10}".`);
    return r10(i10(e10));
  }, fromWorkingColorSpace: function(e10, t10) {
    return this.convert(e10, this.workingColorSpace, t10);
  }, toWorkingColorSpace: function(e10, t10) {
    return this.convert(e10, t10, this.workingColorSpace);
  } };
  class U {
    static getDataURL(e10) {
      let t10;
      if (/^data:/i.test(e10.src) || "undefined" == typeof HTMLCanvasElement)
        return e10.src;
      if (e10 instanceof HTMLCanvasElement)
        t10 = e10;
      else {
        void 0 === i && (i = S("canvas")), i.width = e10.width, i.height = e10.height;
        let n10 = i.getContext("2d");
        e10 instanceof ImageData ? n10.putImageData(e10, 0, 0) : n10.drawImage(e10, 0, 0, e10.width, e10.height), t10 = i;
      }
      return t10.width > 2048 || t10.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e10), t10.toDataURL("image/jpeg", 0.6)) : t10.toDataURL("image/png");
    }
    static sRGBToLinear(e10) {
      if ("undefined" != typeof HTMLImageElement && e10 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e10 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e10 instanceof ImageBitmap) {
        let t10 = S("canvas");
        t10.width = e10.width, t10.height = e10.height;
        let n10 = t10.getContext("2d");
        n10.drawImage(e10, 0, 0, e10.width, e10.height);
        let i10 = n10.getImageData(0, 0, e10.width, e10.height), r10 = i10.data;
        for (let e11 = 0; e11 < r10.length; e11++)
          r10[e11] = 255 * b(r10[e11] / 255);
        return n10.putImageData(i10, 0, 0), t10;
      }
      if (!e10.data)
        return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e10;
      {
        let t10 = e10.data.slice(0);
        for (let e11 = 0; e11 < t10.length; e11++)
          t10 instanceof Uint8Array || t10 instanceof Uint8ClampedArray ? t10[e11] = Math.floor(255 * b(t10[e11] / 255)) : t10[e11] = b(t10[e11]);
        return { data: t10, width: e10.width, height: e10.height };
      }
    }
  }
  let N = 0;
  class D {
    constructor(e10 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: N++ }), this.uuid = d(), this.data = e10, this.version = 0;
    }
    set needsUpdate(e10) {
      true === e10 && this.version++;
    }
    toJSON(e10) {
      let t10 = void 0 === e10 || "string" == typeof e10;
      if (!t10 && void 0 !== e10.images[this.uuid])
        return e10.images[this.uuid];
      let n10 = { uuid: this.uuid, url: "" }, i10 = this.data;
      if (null !== i10) {
        let e11;
        if (Array.isArray(i10)) {
          e11 = [];
          for (let t11 = 0, n11 = i10.length; t11 < n11; t11++)
            i10[t11].isDataTexture ? e11.push(I(i10[t11].image)) : e11.push(I(i10[t11]));
        } else
          e11 = I(i10);
        n10.url = e11;
      }
      return t10 || (e10.images[this.uuid] = n10), n10;
    }
  }
  function I(e10) {
    return "undefined" != typeof HTMLImageElement && e10 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e10 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e10 instanceof ImageBitmap ? U.getDataURL(e10) : e10.data ? { data: Array.from(e10.data), width: e10.width, height: e10.height, type: e10.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let O = 0;
  class F extends l {
    constructor(e10 = F.DEFAULT_IMAGE, t10 = F.DEFAULT_MAPPING, n10 = 1001, i10 = 1001, a2 = 1006, s2 = 1008, o2 = 1023, l2 = 1009, h2 = F.DEFAULT_ANISOTROPY, u2 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: O++ }), this.uuid = d(), this.name = "", this.source = new D(e10), this.mipmaps = [], this.mapping = t10, this.channel = 0, this.wrapS = n10, this.wrapT = i10, this.magFilter = a2, this.minFilter = s2, this.anisotropy = h2, this.format = o2, this.internalFormat = null, this.type = l2, this.offset = new v(0, 0), this.repeat = new v(1, 1), this.center = new v(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new x(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, "string" == typeof u2 ? this.colorSpace = u2 : (T("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = 3001 === u2 ? r : ""), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
    }
    get image() {
      return this.source.data;
    }
    set image(e10 = null) {
      this.source.data = e10;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e10) {
      return this.name = e10.name, this.source = e10.source, this.mipmaps = e10.mipmaps.slice(0), this.mapping = e10.mapping, this.channel = e10.channel, this.wrapS = e10.wrapS, this.wrapT = e10.wrapT, this.magFilter = e10.magFilter, this.minFilter = e10.minFilter, this.anisotropy = e10.anisotropy, this.format = e10.format, this.internalFormat = e10.internalFormat, this.type = e10.type, this.offset.copy(e10.offset), this.repeat.copy(e10.repeat), this.center.copy(e10.center), this.rotation = e10.rotation, this.matrixAutoUpdate = e10.matrixAutoUpdate, this.matrix.copy(e10.matrix), this.generateMipmaps = e10.generateMipmaps, this.premultiplyAlpha = e10.premultiplyAlpha, this.flipY = e10.flipY, this.unpackAlignment = e10.unpackAlignment, this.colorSpace = e10.colorSpace, this.userData = JSON.parse(JSON.stringify(e10.userData)), this.needsUpdate = true, this;
    }
    toJSON(e10) {
      let t10 = void 0 === e10 || "string" == typeof e10;
      if (!t10 && void 0 !== e10.textures[this.uuid])
        return e10.textures[this.uuid];
      let n10 = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e10).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (n10.userData = this.userData), t10 || (e10.textures[this.uuid] = n10), n10;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(e10) {
      if (300 !== this.mapping)
        return e10;
      if (e10.applyMatrix3(this.matrix), e10.x < 0 || e10.x > 1)
        switch (this.wrapS) {
          case 1e3:
            e10.x = e10.x - Math.floor(e10.x);
            break;
          case 1001:
            e10.x = e10.x < 0 ? 0 : 1;
            break;
          case 1002:
            1 === Math.abs(Math.floor(e10.x) % 2) ? e10.x = Math.ceil(e10.x) - e10.x : e10.x = e10.x - Math.floor(e10.x);
        }
      if (e10.y < 0 || e10.y > 1)
        switch (this.wrapT) {
          case 1e3:
            e10.y = e10.y - Math.floor(e10.y);
            break;
          case 1001:
            e10.y = e10.y < 0 ? 0 : 1;
            break;
          case 1002:
            1 === Math.abs(Math.floor(e10.y) % 2) ? e10.y = Math.ceil(e10.y) - e10.y : e10.y = e10.y - Math.floor(e10.y);
        }
      return this.flipY && (e10.y = 1 - e10.y), e10;
    }
    set needsUpdate(e10) {
      true === e10 && (this.version++, this.source.needsUpdate = true);
    }
    get encoding() {
      return T("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === r ? 3001 : 3e3;
    }
    set encoding(e10) {
      T("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = 3001 === e10 ? r : "";
    }
  }
  F.DEFAULT_IMAGE = null, F.DEFAULT_MAPPING = 300, F.DEFAULT_ANISOTROPY = 1;
  class z {
    constructor(e10 = 0, t10 = 0, n10 = 0, i10 = 1) {
      z.prototype.isVector4 = true, this.x = e10, this.y = t10, this.z = n10, this.w = i10;
    }
    get width() {
      return this.z;
    }
    set width(e10) {
      this.z = e10;
    }
    get height() {
      return this.w;
    }
    set height(e10) {
      this.w = e10;
    }
    set(e10, t10, n10, i10) {
      return this.x = e10, this.y = t10, this.z = n10, this.w = i10, this;
    }
    setScalar(e10) {
      return this.x = e10, this.y = e10, this.z = e10, this.w = e10, this;
    }
    setX(e10) {
      return this.x = e10, this;
    }
    setY(e10) {
      return this.y = e10, this;
    }
    setZ(e10) {
      return this.z = e10, this;
    }
    setW(e10) {
      return this.w = e10, this;
    }
    setComponent(e10, t10) {
      switch (e10) {
        case 0:
          this.x = t10;
          break;
        case 1:
          this.y = t10;
          break;
        case 2:
          this.z = t10;
          break;
        case 3:
          this.w = t10;
          break;
        default:
          throw Error("index is out of range: " + e10);
      }
      return this;
    }
    getComponent(e10) {
      switch (e10) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error("index is out of range: " + e10);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e10) {
      return this.x = e10.x, this.y = e10.y, this.z = e10.z, this.w = void 0 !== e10.w ? e10.w : 1, this;
    }
    add(e10) {
      return this.x += e10.x, this.y += e10.y, this.z += e10.z, this.w += e10.w, this;
    }
    addScalar(e10) {
      return this.x += e10, this.y += e10, this.z += e10, this.w += e10, this;
    }
    addVectors(e10, t10) {
      return this.x = e10.x + t10.x, this.y = e10.y + t10.y, this.z = e10.z + t10.z, this.w = e10.w + t10.w, this;
    }
    addScaledVector(e10, t10) {
      return this.x += e10.x * t10, this.y += e10.y * t10, this.z += e10.z * t10, this.w += e10.w * t10, this;
    }
    sub(e10) {
      return this.x -= e10.x, this.y -= e10.y, this.z -= e10.z, this.w -= e10.w, this;
    }
    subScalar(e10) {
      return this.x -= e10, this.y -= e10, this.z -= e10, this.w -= e10, this;
    }
    subVectors(e10, t10) {
      return this.x = e10.x - t10.x, this.y = e10.y - t10.y, this.z = e10.z - t10.z, this.w = e10.w - t10.w, this;
    }
    multiply(e10) {
      return this.x *= e10.x, this.y *= e10.y, this.z *= e10.z, this.w *= e10.w, this;
    }
    multiplyScalar(e10) {
      return this.x *= e10, this.y *= e10, this.z *= e10, this.w *= e10, this;
    }
    applyMatrix4(e10) {
      let t10 = this.x, n10 = this.y, i10 = this.z, r10 = this.w, a2 = e10.elements;
      return this.x = a2[0] * t10 + a2[4] * n10 + a2[8] * i10 + a2[12] * r10, this.y = a2[1] * t10 + a2[5] * n10 + a2[9] * i10 + a2[13] * r10, this.z = a2[2] * t10 + a2[6] * n10 + a2[10] * i10 + a2[14] * r10, this.w = a2[3] * t10 + a2[7] * n10 + a2[11] * i10 + a2[15] * r10, this;
    }
    divideScalar(e10) {
      return this.multiplyScalar(1 / e10);
    }
    setAxisAngleFromQuaternion(e10) {
      this.w = 2 * Math.acos(e10.w);
      let t10 = Math.sqrt(1 - e10.w * e10.w);
      return t10 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e10.x / t10, this.y = e10.y / t10, this.z = e10.z / t10), this;
    }
    setAxisAngleFromRotationMatrix(e10) {
      let t10, n10, i10;
      let r10 = e10.elements, a2 = r10[0], s2 = r10[4], o2 = r10[8], l2 = r10[1], h2 = r10[5], u2 = r10[9], c2 = r10[2], d2 = r10[6], p2 = r10[10];
      if (0.01 > Math.abs(s2 - l2) && 0.01 > Math.abs(o2 - c2) && 0.01 > Math.abs(u2 - d2)) {
        if (0.1 > Math.abs(s2 + l2) && 0.1 > Math.abs(o2 + c2) && 0.1 > Math.abs(u2 + d2) && 0.1 > Math.abs(a2 + h2 + p2 - 3))
          return this.set(1, 0, 0, 0), this;
        let e11 = (a2 + 1) / 2, r11 = (h2 + 1) / 2, f3 = (p2 + 1) / 2, m2 = (s2 + l2) / 4, g2 = (o2 + c2) / 4, _2 = (u2 + d2) / 4;
        return e11 > r11 && e11 > f3 ? e11 < 0.01 ? (t10 = 0, n10 = 0.707106781, i10 = 0.707106781) : (n10 = m2 / (t10 = Math.sqrt(e11)), i10 = g2 / t10) : r11 > f3 ? r11 < 0.01 ? (t10 = 0.707106781, n10 = 0, i10 = 0.707106781) : (t10 = m2 / (n10 = Math.sqrt(r11)), i10 = _2 / n10) : f3 < 0.01 ? (t10 = 0.707106781, n10 = 0.707106781, i10 = 0) : (t10 = g2 / (i10 = Math.sqrt(f3)), n10 = _2 / i10), this.set(t10, n10, i10, Math.PI), this;
      }
      let f2 = Math.sqrt((d2 - u2) * (d2 - u2) + (o2 - c2) * (o2 - c2) + (l2 - s2) * (l2 - s2));
      return 1e-3 > Math.abs(f2) && (f2 = 1), this.x = (d2 - u2) / f2, this.y = (o2 - c2) / f2, this.z = (l2 - s2) / f2, this.w = Math.acos((a2 + h2 + p2 - 1) / 2), this;
    }
    min(e10) {
      return this.x = Math.min(this.x, e10.x), this.y = Math.min(this.y, e10.y), this.z = Math.min(this.z, e10.z), this.w = Math.min(this.w, e10.w), this;
    }
    max(e10) {
      return this.x = Math.max(this.x, e10.x), this.y = Math.max(this.y, e10.y), this.z = Math.max(this.z, e10.z), this.w = Math.max(this.w, e10.w), this;
    }
    clamp(e10, t10) {
      return this.x = Math.max(e10.x, Math.min(t10.x, this.x)), this.y = Math.max(e10.y, Math.min(t10.y, this.y)), this.z = Math.max(e10.z, Math.min(t10.z, this.z)), this.w = Math.max(e10.w, Math.min(t10.w, this.w)), this;
    }
    clampScalar(e10, t10) {
      return this.x = Math.max(e10, Math.min(t10, this.x)), this.y = Math.max(e10, Math.min(t10, this.y)), this.z = Math.max(e10, Math.min(t10, this.z)), this.w = Math.max(e10, Math.min(t10, this.w)), this;
    }
    clampLength(e10, t10) {
      let n10 = this.length();
      return this.divideScalar(n10 || 1).multiplyScalar(Math.max(e10, Math.min(t10, n10)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(e10) {
      return this.x * e10.x + this.y * e10.y + this.z * e10.z + this.w * e10.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e10) {
      return this.normalize().multiplyScalar(e10);
    }
    lerp(e10, t10) {
      return this.x += (e10.x - this.x) * t10, this.y += (e10.y - this.y) * t10, this.z += (e10.z - this.z) * t10, this.w += (e10.w - this.w) * t10, this;
    }
    lerpVectors(e10, t10, n10) {
      return this.x = e10.x + (t10.x - e10.x) * n10, this.y = e10.y + (t10.y - e10.y) * n10, this.z = e10.z + (t10.z - e10.z) * n10, this.w = e10.w + (t10.w - e10.w) * n10, this;
    }
    equals(e10) {
      return e10.x === this.x && e10.y === this.y && e10.z === this.z && e10.w === this.w;
    }
    fromArray(e10, t10 = 0) {
      return this.x = e10[t10], this.y = e10[t10 + 1], this.z = e10[t10 + 2], this.w = e10[t10 + 3], this;
    }
    toArray(e10 = [], t10 = 0) {
      return e10[t10] = this.x, e10[t10 + 1] = this.y, e10[t10 + 2] = this.z, e10[t10 + 3] = this.w, e10;
    }
    fromBufferAttribute(e10, t10) {
      return this.x = e10.getX(t10), this.y = e10.getY(t10), this.z = e10.getZ(t10), this.w = e10.getW(t10), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class B extends l {
    constructor(e10 = 1, t10 = 1, n10 = {}) {
      super(), this.isWebGLRenderTarget = true, this.width = e10, this.height = t10, this.depth = 1, this.scissor = new z(0, 0, e10, t10), this.scissorTest = false, this.viewport = new z(0, 0, e10, t10), void 0 !== n10.encoding && (T("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n10.colorSpace = 3001 === n10.encoding ? r : ""), this.texture = new F({ width: e10, height: t10, depth: 1 }, n10.mapping, n10.wrapS, n10.wrapT, n10.magFilter, n10.minFilter, n10.format, n10.type, n10.anisotropy, n10.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = void 0 !== n10.generateMipmaps && n10.generateMipmaps, this.texture.internalFormat = void 0 !== n10.internalFormat ? n10.internalFormat : null, this.texture.minFilter = void 0 !== n10.minFilter ? n10.minFilter : 1006, this.depthBuffer = void 0 === n10.depthBuffer || n10.depthBuffer, this.stencilBuffer = void 0 !== n10.stencilBuffer && n10.stencilBuffer, this.depthTexture = void 0 !== n10.depthTexture ? n10.depthTexture : null, this.samples = void 0 !== n10.samples ? n10.samples : 0;
    }
    setSize(e10, t10, n10 = 1) {
      (this.width !== e10 || this.height !== t10 || this.depth !== n10) && (this.width = e10, this.height = t10, this.depth = n10, this.texture.image.width = e10, this.texture.image.height = t10, this.texture.image.depth = n10, this.dispose()), this.viewport.set(0, 0, e10, t10), this.scissor.set(0, 0, e10, t10);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e10) {
      this.width = e10.width, this.height = e10.height, this.depth = e10.depth, this.scissor.copy(e10.scissor), this.scissorTest = e10.scissorTest, this.viewport.copy(e10.viewport), this.texture = e10.texture.clone(), this.texture.isRenderTargetTexture = true;
      let t10 = Object.assign({}, e10.texture.image);
      return this.texture.source = new D(t10), this.depthBuffer = e10.depthBuffer, this.stencilBuffer = e10.stencilBuffer, null !== e10.depthTexture && (this.depthTexture = e10.depthTexture.clone()), this.samples = e10.samples, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class V extends F {
    constructor(e10 = null, t10 = 1, n10 = 1, i10 = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: e10, width: t10, height: n10, depth: i10 }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  class G {
    constructor(e10 = 0, t10 = 0, n10 = 0, i10 = 1) {
      this.isQuaternion = true, this._x = e10, this._y = t10, this._z = n10, this._w = i10;
    }
    static slerpFlat(e10, t10, n10, i10, r10, a2, s2) {
      let o2 = n10[i10 + 0], l2 = n10[i10 + 1], h2 = n10[i10 + 2], u2 = n10[i10 + 3], c2 = r10[a2 + 0], d2 = r10[a2 + 1], p2 = r10[a2 + 2], f2 = r10[a2 + 3];
      if (0 === s2) {
        e10[t10 + 0] = o2, e10[t10 + 1] = l2, e10[t10 + 2] = h2, e10[t10 + 3] = u2;
        return;
      }
      if (1 === s2) {
        e10[t10 + 0] = c2, e10[t10 + 1] = d2, e10[t10 + 2] = p2, e10[t10 + 3] = f2;
        return;
      }
      if (u2 !== f2 || o2 !== c2 || l2 !== d2 || h2 !== p2) {
        let e11 = 1 - s2, t11 = o2 * c2 + l2 * d2 + h2 * p2 + u2 * f2, n11 = t11 >= 0 ? 1 : -1, i11 = 1 - t11 * t11;
        if (i11 > Number.EPSILON) {
          let r12 = Math.sqrt(i11), a3 = Math.atan2(r12, t11 * n11);
          e11 = Math.sin(e11 * a3) / r12, s2 = Math.sin(s2 * a3) / r12;
        }
        let r11 = s2 * n11;
        if (o2 = o2 * e11 + c2 * r11, l2 = l2 * e11 + d2 * r11, h2 = h2 * e11 + p2 * r11, u2 = u2 * e11 + f2 * r11, e11 === 1 - s2) {
          let e12 = 1 / Math.sqrt(o2 * o2 + l2 * l2 + h2 * h2 + u2 * u2);
          o2 *= e12, l2 *= e12, h2 *= e12, u2 *= e12;
        }
      }
      e10[t10] = o2, e10[t10 + 1] = l2, e10[t10 + 2] = h2, e10[t10 + 3] = u2;
    }
    static multiplyQuaternionsFlat(e10, t10, n10, i10, r10, a2) {
      let s2 = n10[i10], o2 = n10[i10 + 1], l2 = n10[i10 + 2], h2 = n10[i10 + 3], u2 = r10[a2], c2 = r10[a2 + 1], d2 = r10[a2 + 2], p2 = r10[a2 + 3];
      return e10[t10] = s2 * p2 + h2 * u2 + o2 * d2 - l2 * c2, e10[t10 + 1] = o2 * p2 + h2 * c2 + l2 * u2 - s2 * d2, e10[t10 + 2] = l2 * p2 + h2 * d2 + s2 * c2 - o2 * u2, e10[t10 + 3] = h2 * p2 - s2 * u2 - o2 * c2 - l2 * d2, e10;
    }
    get x() {
      return this._x;
    }
    set x(e10) {
      this._x = e10, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e10) {
      this._y = e10, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e10) {
      this._z = e10, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e10) {
      this._w = e10, this._onChangeCallback();
    }
    set(e10, t10, n10, i10) {
      return this._x = e10, this._y = t10, this._z = n10, this._w = i10, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e10) {
      return this._x = e10.x, this._y = e10.y, this._z = e10.z, this._w = e10.w, this._onChangeCallback(), this;
    }
    setFromEuler(e10, t10) {
      let n10 = e10._x, i10 = e10._y, r10 = e10._z, a2 = e10._order, s2 = Math.cos, o2 = Math.sin, l2 = s2(n10 / 2), h2 = s2(i10 / 2), u2 = s2(r10 / 2), c2 = o2(n10 / 2), d2 = o2(i10 / 2), p2 = o2(r10 / 2);
      switch (a2) {
        case "XYZ":
          this._x = c2 * h2 * u2 + l2 * d2 * p2, this._y = l2 * d2 * u2 - c2 * h2 * p2, this._z = l2 * h2 * p2 + c2 * d2 * u2, this._w = l2 * h2 * u2 - c2 * d2 * p2;
          break;
        case "YXZ":
          this._x = c2 * h2 * u2 + l2 * d2 * p2, this._y = l2 * d2 * u2 - c2 * h2 * p2, this._z = l2 * h2 * p2 - c2 * d2 * u2, this._w = l2 * h2 * u2 + c2 * d2 * p2;
          break;
        case "ZXY":
          this._x = c2 * h2 * u2 - l2 * d2 * p2, this._y = l2 * d2 * u2 + c2 * h2 * p2, this._z = l2 * h2 * p2 + c2 * d2 * u2, this._w = l2 * h2 * u2 - c2 * d2 * p2;
          break;
        case "ZYX":
          this._x = c2 * h2 * u2 - l2 * d2 * p2, this._y = l2 * d2 * u2 + c2 * h2 * p2, this._z = l2 * h2 * p2 - c2 * d2 * u2, this._w = l2 * h2 * u2 + c2 * d2 * p2;
          break;
        case "YZX":
          this._x = c2 * h2 * u2 + l2 * d2 * p2, this._y = l2 * d2 * u2 + c2 * h2 * p2, this._z = l2 * h2 * p2 - c2 * d2 * u2, this._w = l2 * h2 * u2 - c2 * d2 * p2;
          break;
        case "XZY":
          this._x = c2 * h2 * u2 - l2 * d2 * p2, this._y = l2 * d2 * u2 - c2 * h2 * p2, this._z = l2 * h2 * p2 + c2 * d2 * u2, this._w = l2 * h2 * u2 + c2 * d2 * p2;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a2);
      }
      return false !== t10 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e10, t10) {
      let n10 = t10 / 2, i10 = Math.sin(n10);
      return this._x = e10.x * i10, this._y = e10.y * i10, this._z = e10.z * i10, this._w = Math.cos(n10), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e10) {
      let t10 = e10.elements, n10 = t10[0], i10 = t10[4], r10 = t10[8], a2 = t10[1], s2 = t10[5], o2 = t10[9], l2 = t10[2], h2 = t10[6], u2 = t10[10], c2 = n10 + s2 + u2;
      if (c2 > 0) {
        let e11 = 0.5 / Math.sqrt(c2 + 1);
        this._w = 0.25 / e11, this._x = (h2 - o2) * e11, this._y = (r10 - l2) * e11, this._z = (a2 - i10) * e11;
      } else if (n10 > s2 && n10 > u2) {
        let e11 = 2 * Math.sqrt(1 + n10 - s2 - u2);
        this._w = (h2 - o2) / e11, this._x = 0.25 * e11, this._y = (i10 + a2) / e11, this._z = (r10 + l2) / e11;
      } else if (s2 > u2) {
        let e11 = 2 * Math.sqrt(1 + s2 - n10 - u2);
        this._w = (r10 - l2) / e11, this._x = (i10 + a2) / e11, this._y = 0.25 * e11, this._z = (o2 + h2) / e11;
      } else {
        let e11 = 2 * Math.sqrt(1 + u2 - n10 - s2);
        this._w = (a2 - i10) / e11, this._x = (r10 + l2) / e11, this._y = (o2 + h2) / e11, this._z = 0.25 * e11;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e10, t10) {
      let n10 = e10.dot(t10) + 1;
      return n10 < Number.EPSILON ? (n10 = 0, Math.abs(e10.x) > Math.abs(e10.z) ? (this._x = -e10.y, this._y = e10.x, this._z = 0, this._w = n10) : (this._x = 0, this._y = -e10.z, this._z = e10.y, this._w = n10)) : (this._x = e10.y * t10.z - e10.z * t10.y, this._y = e10.z * t10.x - e10.x * t10.z, this._z = e10.x * t10.y - e10.y * t10.x, this._w = n10), this.normalize();
    }
    angleTo(e10) {
      return 2 * Math.acos(Math.abs(p(this.dot(e10), -1, 1)));
    }
    rotateTowards(e10, t10) {
      let n10 = this.angleTo(e10);
      return 0 === n10 || this.slerp(e10, Math.min(1, t10 / n10)), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(e10) {
      return this._x * e10._x + this._y * e10._y + this._z * e10._z + this._w * e10._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let e10 = this.length();
      return 0 === e10 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e10 = 1 / e10, this._x = this._x * e10, this._y = this._y * e10, this._z = this._z * e10, this._w = this._w * e10), this._onChangeCallback(), this;
    }
    multiply(e10) {
      return this.multiplyQuaternions(this, e10);
    }
    premultiply(e10) {
      return this.multiplyQuaternions(e10, this);
    }
    multiplyQuaternions(e10, t10) {
      let n10 = e10._x, i10 = e10._y, r10 = e10._z, a2 = e10._w, s2 = t10._x, o2 = t10._y, l2 = t10._z, h2 = t10._w;
      return this._x = n10 * h2 + a2 * s2 + i10 * l2 - r10 * o2, this._y = i10 * h2 + a2 * o2 + r10 * s2 - n10 * l2, this._z = r10 * h2 + a2 * l2 + n10 * o2 - i10 * s2, this._w = a2 * h2 - n10 * s2 - i10 * o2 - r10 * l2, this._onChangeCallback(), this;
    }
    slerp(e10, t10) {
      if (0 === t10)
        return this;
      if (1 === t10)
        return this.copy(e10);
      let n10 = this._x, i10 = this._y, r10 = this._z, a2 = this._w, s2 = a2 * e10._w + n10 * e10._x + i10 * e10._y + r10 * e10._z;
      if (s2 < 0 ? (this._w = -e10._w, this._x = -e10._x, this._y = -e10._y, this._z = -e10._z, s2 = -s2) : this.copy(e10), s2 >= 1)
        return this._w = a2, this._x = n10, this._y = i10, this._z = r10, this;
      let o2 = 1 - s2 * s2;
      if (o2 <= Number.EPSILON) {
        let e11 = 1 - t10;
        return this._w = e11 * a2 + t10 * this._w, this._x = e11 * n10 + t10 * this._x, this._y = e11 * i10 + t10 * this._y, this._z = e11 * r10 + t10 * this._z, this.normalize(), this._onChangeCallback(), this;
      }
      let l2 = Math.sqrt(o2), h2 = Math.atan2(l2, s2), u2 = Math.sin((1 - t10) * h2) / l2, c2 = Math.sin(t10 * h2) / l2;
      return this._w = a2 * u2 + this._w * c2, this._x = n10 * u2 + this._x * c2, this._y = i10 * u2 + this._y * c2, this._z = r10 * u2 + this._z * c2, this._onChangeCallback(), this;
    }
    slerpQuaternions(e10, t10, n10) {
      return this.copy(e10).slerp(t10, n10);
    }
    random() {
      let e10 = Math.random(), t10 = Math.sqrt(1 - e10), n10 = Math.sqrt(e10), i10 = 2 * Math.PI * Math.random(), r10 = 2 * Math.PI * Math.random();
      return this.set(t10 * Math.cos(i10), n10 * Math.sin(r10), n10 * Math.cos(r10), t10 * Math.sin(i10));
    }
    equals(e10) {
      return e10._x === this._x && e10._y === this._y && e10._z === this._z && e10._w === this._w;
    }
    fromArray(e10, t10 = 0) {
      return this._x = e10[t10], this._y = e10[t10 + 1], this._z = e10[t10 + 2], this._w = e10[t10 + 3], this._onChangeCallback(), this;
    }
    toArray(e10 = [], t10 = 0) {
      return e10[t10] = this._x, e10[t10 + 1] = this._y, e10[t10 + 2] = this._z, e10[t10 + 3] = this._w, e10;
    }
    fromBufferAttribute(e10, t10) {
      return this._x = e10.getX(t10), this._y = e10.getY(t10), this._z = e10.getZ(t10), this._w = e10.getW(t10), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e10) {
      return this._onChangeCallback = e10, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class H {
    constructor(e10 = 0, t10 = 0, n10 = 0) {
      H.prototype.isVector3 = true, this.x = e10, this.y = t10, this.z = n10;
    }
    set(e10, t10, n10) {
      return void 0 === n10 && (n10 = this.z), this.x = e10, this.y = t10, this.z = n10, this;
    }
    setScalar(e10) {
      return this.x = e10, this.y = e10, this.z = e10, this;
    }
    setX(e10) {
      return this.x = e10, this;
    }
    setY(e10) {
      return this.y = e10, this;
    }
    setZ(e10) {
      return this.z = e10, this;
    }
    setComponent(e10, t10) {
      switch (e10) {
        case 0:
          this.x = t10;
          break;
        case 1:
          this.y = t10;
          break;
        case 2:
          this.z = t10;
          break;
        default:
          throw Error("index is out of range: " + e10);
      }
      return this;
    }
    getComponent(e10) {
      switch (e10) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error("index is out of range: " + e10);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e10) {
      return this.x = e10.x, this.y = e10.y, this.z = e10.z, this;
    }
    add(e10) {
      return this.x += e10.x, this.y += e10.y, this.z += e10.z, this;
    }
    addScalar(e10) {
      return this.x += e10, this.y += e10, this.z += e10, this;
    }
    addVectors(e10, t10) {
      return this.x = e10.x + t10.x, this.y = e10.y + t10.y, this.z = e10.z + t10.z, this;
    }
    addScaledVector(e10, t10) {
      return this.x += e10.x * t10, this.y += e10.y * t10, this.z += e10.z * t10, this;
    }
    sub(e10) {
      return this.x -= e10.x, this.y -= e10.y, this.z -= e10.z, this;
    }
    subScalar(e10) {
      return this.x -= e10, this.y -= e10, this.z -= e10, this;
    }
    subVectors(e10, t10) {
      return this.x = e10.x - t10.x, this.y = e10.y - t10.y, this.z = e10.z - t10.z, this;
    }
    multiply(e10) {
      return this.x *= e10.x, this.y *= e10.y, this.z *= e10.z, this;
    }
    multiplyScalar(e10) {
      return this.x *= e10, this.y *= e10, this.z *= e10, this;
    }
    multiplyVectors(e10, t10) {
      return this.x = e10.x * t10.x, this.y = e10.y * t10.y, this.z = e10.z * t10.z, this;
    }
    applyEuler(e10) {
      return this.applyQuaternion(W.setFromEuler(e10));
    }
    applyAxisAngle(e10, t10) {
      return this.applyQuaternion(W.setFromAxisAngle(e10, t10));
    }
    applyMatrix3(e10) {
      let t10 = this.x, n10 = this.y, i10 = this.z, r10 = e10.elements;
      return this.x = r10[0] * t10 + r10[3] * n10 + r10[6] * i10, this.y = r10[1] * t10 + r10[4] * n10 + r10[7] * i10, this.z = r10[2] * t10 + r10[5] * n10 + r10[8] * i10, this;
    }
    applyNormalMatrix(e10) {
      return this.applyMatrix3(e10).normalize();
    }
    applyMatrix4(e10) {
      let t10 = this.x, n10 = this.y, i10 = this.z, r10 = e10.elements, a2 = 1 / (r10[3] * t10 + r10[7] * n10 + r10[11] * i10 + r10[15]);
      return this.x = (r10[0] * t10 + r10[4] * n10 + r10[8] * i10 + r10[12]) * a2, this.y = (r10[1] * t10 + r10[5] * n10 + r10[9] * i10 + r10[13]) * a2, this.z = (r10[2] * t10 + r10[6] * n10 + r10[10] * i10 + r10[14]) * a2, this;
    }
    applyQuaternion(e10) {
      let t10 = this.x, n10 = this.y, i10 = this.z, r10 = e10.x, a2 = e10.y, s2 = e10.z, o2 = e10.w, l2 = o2 * t10 + a2 * i10 - s2 * n10, h2 = o2 * n10 + s2 * t10 - r10 * i10, u2 = o2 * i10 + r10 * n10 - a2 * t10, c2 = -r10 * t10 - a2 * n10 - s2 * i10;
      return this.x = l2 * o2 + -(c2 * r10) + -(h2 * s2) - -(u2 * a2), this.y = h2 * o2 + -(c2 * a2) + -(u2 * r10) - -(l2 * s2), this.z = u2 * o2 + -(c2 * s2) + -(l2 * a2) - -(h2 * r10), this;
    }
    project(e10) {
      return this.applyMatrix4(e10.matrixWorldInverse).applyMatrix4(e10.projectionMatrix);
    }
    unproject(e10) {
      return this.applyMatrix4(e10.projectionMatrixInverse).applyMatrix4(e10.matrixWorld);
    }
    transformDirection(e10) {
      let t10 = this.x, n10 = this.y, i10 = this.z, r10 = e10.elements;
      return this.x = r10[0] * t10 + r10[4] * n10 + r10[8] * i10, this.y = r10[1] * t10 + r10[5] * n10 + r10[9] * i10, this.z = r10[2] * t10 + r10[6] * n10 + r10[10] * i10, this.normalize();
    }
    divide(e10) {
      return this.x /= e10.x, this.y /= e10.y, this.z /= e10.z, this;
    }
    divideScalar(e10) {
      return this.multiplyScalar(1 / e10);
    }
    min(e10) {
      return this.x = Math.min(this.x, e10.x), this.y = Math.min(this.y, e10.y), this.z = Math.min(this.z, e10.z), this;
    }
    max(e10) {
      return this.x = Math.max(this.x, e10.x), this.y = Math.max(this.y, e10.y), this.z = Math.max(this.z, e10.z), this;
    }
    clamp(e10, t10) {
      return this.x = Math.max(e10.x, Math.min(t10.x, this.x)), this.y = Math.max(e10.y, Math.min(t10.y, this.y)), this.z = Math.max(e10.z, Math.min(t10.z, this.z)), this;
    }
    clampScalar(e10, t10) {
      return this.x = Math.max(e10, Math.min(t10, this.x)), this.y = Math.max(e10, Math.min(t10, this.y)), this.z = Math.max(e10, Math.min(t10, this.z)), this;
    }
    clampLength(e10, t10) {
      let n10 = this.length();
      return this.divideScalar(n10 || 1).multiplyScalar(Math.max(e10, Math.min(t10, n10)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(e10) {
      return this.x * e10.x + this.y * e10.y + this.z * e10.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e10) {
      return this.normalize().multiplyScalar(e10);
    }
    lerp(e10, t10) {
      return this.x += (e10.x - this.x) * t10, this.y += (e10.y - this.y) * t10, this.z += (e10.z - this.z) * t10, this;
    }
    lerpVectors(e10, t10, n10) {
      return this.x = e10.x + (t10.x - e10.x) * n10, this.y = e10.y + (t10.y - e10.y) * n10, this.z = e10.z + (t10.z - e10.z) * n10, this;
    }
    cross(e10) {
      return this.crossVectors(this, e10);
    }
    crossVectors(e10, t10) {
      let n10 = e10.x, i10 = e10.y, r10 = e10.z, a2 = t10.x, s2 = t10.y, o2 = t10.z;
      return this.x = i10 * o2 - r10 * s2, this.y = r10 * a2 - n10 * o2, this.z = n10 * s2 - i10 * a2, this;
    }
    projectOnVector(e10) {
      let t10 = e10.lengthSq();
      if (0 === t10)
        return this.set(0, 0, 0);
      let n10 = e10.dot(this) / t10;
      return this.copy(e10).multiplyScalar(n10);
    }
    projectOnPlane(e10) {
      return k.copy(this).projectOnVector(e10), this.sub(k);
    }
    reflect(e10) {
      return this.sub(k.copy(e10).multiplyScalar(2 * this.dot(e10)));
    }
    angleTo(e10) {
      let t10 = Math.sqrt(this.lengthSq() * e10.lengthSq());
      if (0 === t10)
        return Math.PI / 2;
      let n10 = this.dot(e10) / t10;
      return Math.acos(p(n10, -1, 1));
    }
    distanceTo(e10) {
      return Math.sqrt(this.distanceToSquared(e10));
    }
    distanceToSquared(e10) {
      let t10 = this.x - e10.x, n10 = this.y - e10.y, i10 = this.z - e10.z;
      return t10 * t10 + n10 * n10 + i10 * i10;
    }
    manhattanDistanceTo(e10) {
      return Math.abs(this.x - e10.x) + Math.abs(this.y - e10.y) + Math.abs(this.z - e10.z);
    }
    setFromSpherical(e10) {
      return this.setFromSphericalCoords(e10.radius, e10.phi, e10.theta);
    }
    setFromSphericalCoords(e10, t10, n10) {
      let i10 = Math.sin(t10) * e10;
      return this.x = i10 * Math.sin(n10), this.y = Math.cos(t10) * e10, this.z = i10 * Math.cos(n10), this;
    }
    setFromCylindrical(e10) {
      return this.setFromCylindricalCoords(e10.radius, e10.theta, e10.y);
    }
    setFromCylindricalCoords(e10, t10, n10) {
      return this.x = e10 * Math.sin(t10), this.y = n10, this.z = e10 * Math.cos(t10), this;
    }
    setFromMatrixPosition(e10) {
      let t10 = e10.elements;
      return this.x = t10[12], this.y = t10[13], this.z = t10[14], this;
    }
    setFromMatrixScale(e10) {
      let t10 = this.setFromMatrixColumn(e10, 0).length(), n10 = this.setFromMatrixColumn(e10, 1).length(), i10 = this.setFromMatrixColumn(e10, 2).length();
      return this.x = t10, this.y = n10, this.z = i10, this;
    }
    setFromMatrixColumn(e10, t10) {
      return this.fromArray(e10.elements, 4 * t10);
    }
    setFromMatrix3Column(e10, t10) {
      return this.fromArray(e10.elements, 3 * t10);
    }
    setFromEuler(e10) {
      return this.x = e10._x, this.y = e10._y, this.z = e10._z, this;
    }
    setFromColor(e10) {
      return this.x = e10.r, this.y = e10.g, this.z = e10.b, this;
    }
    equals(e10) {
      return e10.x === this.x && e10.y === this.y && e10.z === this.z;
    }
    fromArray(e10, t10 = 0) {
      return this.x = e10[t10], this.y = e10[t10 + 1], this.z = e10[t10 + 2], this;
    }
    toArray(e10 = [], t10 = 0) {
      return e10[t10] = this.x, e10[t10 + 1] = this.y, e10[t10 + 2] = this.z, e10;
    }
    fromBufferAttribute(e10, t10) {
      return this.x = e10.getX(t10), this.y = e10.getY(t10), this.z = e10.getZ(t10), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      let e10 = (Math.random() - 0.5) * 2, t10 = Math.random() * Math.PI * 2, n10 = Math.sqrt(1 - e10 ** 2);
      return this.x = n10 * Math.cos(t10), this.y = n10 * Math.sin(t10), this.z = e10, this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  let k = new H(), W = new G();
  class X {
    constructor(e10 = new H(Infinity, Infinity, Infinity), t10 = new H(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = e10, this.max = t10;
    }
    set(e10, t10) {
      return this.min.copy(e10), this.max.copy(t10), this;
    }
    setFromArray(e10) {
      this.makeEmpty();
      for (let t10 = 0, n10 = e10.length; t10 < n10; t10 += 3)
        this.expandByPoint(q.fromArray(e10, t10));
      return this;
    }
    setFromBufferAttribute(e10) {
      this.makeEmpty();
      for (let t10 = 0, n10 = e10.count; t10 < n10; t10++)
        this.expandByPoint(q.fromBufferAttribute(e10, t10));
      return this;
    }
    setFromPoints(e10) {
      this.makeEmpty();
      for (let t10 = 0, n10 = e10.length; t10 < n10; t10++)
        this.expandByPoint(e10[t10]);
      return this;
    }
    setFromCenterAndSize(e10, t10) {
      let n10 = q.copy(t10).multiplyScalar(0.5);
      return this.min.copy(e10).sub(n10), this.max.copy(e10).add(n10), this;
    }
    setFromObject(e10, t10 = false) {
      return this.makeEmpty(), this.expandByObject(e10, t10);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e10) {
      return this.min.copy(e10.min), this.max.copy(e10.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e10) {
      return this.isEmpty() ? e10.set(0, 0, 0) : e10.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e10) {
      return this.isEmpty() ? e10.set(0, 0, 0) : e10.subVectors(this.max, this.min);
    }
    expandByPoint(e10) {
      return this.min.min(e10), this.max.max(e10), this;
    }
    expandByVector(e10) {
      return this.min.sub(e10), this.max.add(e10), this;
    }
    expandByScalar(e10) {
      return this.min.addScalar(-e10), this.max.addScalar(e10), this;
    }
    expandByObject(e10, t10 = false) {
      if (e10.updateWorldMatrix(false, false), void 0 !== e10.boundingBox)
        null === e10.boundingBox && e10.computeBoundingBox(), Y.copy(e10.boundingBox), Y.applyMatrix4(e10.matrixWorld), this.union(Y);
      else {
        let n11 = e10.geometry;
        if (void 0 !== n11) {
          if (t10 && void 0 !== n11.attributes && void 0 !== n11.attributes.position) {
            let t11 = n11.attributes.position;
            for (let n12 = 0, i10 = t11.count; n12 < i10; n12++)
              q.fromBufferAttribute(t11, n12).applyMatrix4(e10.matrixWorld), this.expandByPoint(q);
          } else
            null === n11.boundingBox && n11.computeBoundingBox(), Y.copy(n11.boundingBox), Y.applyMatrix4(e10.matrixWorld), this.union(Y);
        }
      }
      let n10 = e10.children;
      for (let e11 = 0, i10 = n10.length; e11 < i10; e11++)
        this.expandByObject(n10[e11], t10);
      return this;
    }
    containsPoint(e10) {
      return !(e10.x < this.min.x) && !(e10.x > this.max.x) && !(e10.y < this.min.y) && !(e10.y > this.max.y) && !(e10.z < this.min.z) && !(e10.z > this.max.z);
    }
    containsBox(e10) {
      return this.min.x <= e10.min.x && e10.max.x <= this.max.x && this.min.y <= e10.min.y && e10.max.y <= this.max.y && this.min.z <= e10.min.z && e10.max.z <= this.max.z;
    }
    getParameter(e10, t10) {
      return t10.set((e10.x - this.min.x) / (this.max.x - this.min.x), (e10.y - this.min.y) / (this.max.y - this.min.y), (e10.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e10) {
      return !(e10.max.x < this.min.x) && !(e10.min.x > this.max.x) && !(e10.max.y < this.min.y) && !(e10.min.y > this.max.y) && !(e10.max.z < this.min.z) && !(e10.min.z > this.max.z);
    }
    intersectsSphere(e10) {
      return this.clampPoint(e10.center, q), q.distanceToSquared(e10.center) <= e10.radius * e10.radius;
    }
    intersectsPlane(e10) {
      let t10, n10;
      return e10.normal.x > 0 ? (t10 = e10.normal.x * this.min.x, n10 = e10.normal.x * this.max.x) : (t10 = e10.normal.x * this.max.x, n10 = e10.normal.x * this.min.x), e10.normal.y > 0 ? (t10 += e10.normal.y * this.min.y, n10 += e10.normal.y * this.max.y) : (t10 += e10.normal.y * this.max.y, n10 += e10.normal.y * this.min.y), e10.normal.z > 0 ? (t10 += e10.normal.z * this.min.z, n10 += e10.normal.z * this.max.z) : (t10 += e10.normal.z * this.max.z, n10 += e10.normal.z * this.min.z), t10 <= -e10.constant && n10 >= -e10.constant;
    }
    intersectsTriangle(e10) {
      if (this.isEmpty())
        return false;
      this.getCenter(et), en.subVectors(this.max, et), J.subVectors(e10.a, et), Z.subVectors(e10.b, et), K.subVectors(e10.c, et), Q.subVectors(Z, J), $.subVectors(K, Z), ee.subVectors(J, K);
      let t10 = [0, -Q.z, Q.y, 0, -$.z, $.y, 0, -ee.z, ee.y, Q.z, 0, -Q.x, $.z, 0, -$.x, ee.z, 0, -ee.x, -Q.y, Q.x, 0, -$.y, $.x, 0, -ee.y, ee.x, 0];
      return !!(ea(t10, J, Z, K, en) && ea(t10 = [1, 0, 0, 0, 1, 0, 0, 0, 1], J, Z, K, en)) && (ei.crossVectors(Q, $), ea(t10 = [ei.x, ei.y, ei.z], J, Z, K, en));
    }
    clampPoint(e10, t10) {
      return t10.copy(e10).clamp(this.min, this.max);
    }
    distanceToPoint(e10) {
      return this.clampPoint(e10, q).distanceTo(e10);
    }
    getBoundingSphere(e10) {
      return this.isEmpty() ? e10.makeEmpty() : (this.getCenter(e10.center), e10.radius = 0.5 * this.getSize(q).length()), e10;
    }
    intersect(e10) {
      return this.min.max(e10.min), this.max.min(e10.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e10) {
      return this.min.min(e10.min), this.max.max(e10.max), this;
    }
    applyMatrix4(e10) {
      return this.isEmpty() || (j[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e10), j[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e10), j[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e10), j[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e10), j[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e10), j[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e10), j[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e10), j[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e10), this.setFromPoints(j)), this;
    }
    translate(e10) {
      return this.min.add(e10), this.max.add(e10), this;
    }
    equals(e10) {
      return e10.min.equals(this.min) && e10.max.equals(this.max);
    }
  }
  let j = [new H(), new H(), new H(), new H(), new H(), new H(), new H(), new H()], q = new H(), Y = new X(), J = new H(), Z = new H(), K = new H(), Q = new H(), $ = new H(), ee = new H(), et = new H(), en = new H(), ei = new H(), er = new H();
  function ea(e10, t10, n10, i10, r10) {
    for (let a2 = 0, s2 = e10.length - 3; a2 <= s2; a2 += 3) {
      er.fromArray(e10, a2);
      let s3 = r10.x * Math.abs(er.x) + r10.y * Math.abs(er.y) + r10.z * Math.abs(er.z), o2 = t10.dot(er), l2 = n10.dot(er), h2 = i10.dot(er);
      if (Math.max(-Math.max(o2, l2, h2), Math.min(o2, l2, h2)) > s3)
        return false;
    }
    return true;
  }
  let es = new X(), eo = new H(), el = new H();
  class eh {
    constructor(e10 = new H(), t10 = -1) {
      this.center = e10, this.radius = t10;
    }
    set(e10, t10) {
      return this.center.copy(e10), this.radius = t10, this;
    }
    setFromPoints(e10, t10) {
      let n10 = this.center;
      void 0 !== t10 ? n10.copy(t10) : es.setFromPoints(e10).getCenter(n10);
      let i10 = 0;
      for (let t11 = 0, r10 = e10.length; t11 < r10; t11++)
        i10 = Math.max(i10, n10.distanceToSquared(e10[t11]));
      return this.radius = Math.sqrt(i10), this;
    }
    copy(e10) {
      return this.center.copy(e10.center), this.radius = e10.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(e10) {
      return e10.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e10) {
      return e10.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e10) {
      let t10 = this.radius + e10.radius;
      return e10.center.distanceToSquared(this.center) <= t10 * t10;
    }
    intersectsBox(e10) {
      return e10.intersectsSphere(this);
    }
    intersectsPlane(e10) {
      return Math.abs(e10.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e10, t10) {
      let n10 = this.center.distanceToSquared(e10);
      return t10.copy(e10), n10 > this.radius * this.radius && (t10.sub(this.center).normalize(), t10.multiplyScalar(this.radius).add(this.center)), t10;
    }
    getBoundingBox(e10) {
      return this.isEmpty() ? (e10.makeEmpty(), e10) : (e10.set(this.center, this.center), e10.expandByScalar(this.radius), e10);
    }
    applyMatrix4(e10) {
      return this.center.applyMatrix4(e10), this.radius = this.radius * e10.getMaxScaleOnAxis(), this;
    }
    translate(e10) {
      return this.center.add(e10), this;
    }
    expandByPoint(e10) {
      if (this.isEmpty())
        return this.center.copy(e10), this.radius = 0, this;
      eo.subVectors(e10, this.center);
      let t10 = eo.lengthSq();
      if (t10 > this.radius * this.radius) {
        let e11 = Math.sqrt(t10), n10 = (e11 - this.radius) * 0.5;
        this.center.addScaledVector(eo, n10 / e11), this.radius += n10;
      }
      return this;
    }
    union(e10) {
      return e10.isEmpty() ? this : this.isEmpty() ? (this.copy(e10), this) : (true === this.center.equals(e10.center) ? this.radius = Math.max(this.radius, e10.radius) : (el.subVectors(e10.center, this.center).setLength(e10.radius), this.expandByPoint(eo.copy(e10.center).add(el)), this.expandByPoint(eo.copy(e10.center).sub(el))), this);
    }
    equals(e10) {
      return e10.center.equals(this.center) && e10.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  let eu = new H(), ec = new H(), ed = new H(), ep = new H(), ef = new H(), em = new H(), eg = new H();
  class e_ {
    constructor(e10 = new H(), t10 = new H(0, 0, -1)) {
      this.origin = e10, this.direction = t10;
    }
    set(e10, t10) {
      return this.origin.copy(e10), this.direction.copy(t10), this;
    }
    copy(e10) {
      return this.origin.copy(e10.origin), this.direction.copy(e10.direction), this;
    }
    at(e10, t10) {
      return t10.copy(this.origin).addScaledVector(this.direction, e10);
    }
    lookAt(e10) {
      return this.direction.copy(e10).sub(this.origin).normalize(), this;
    }
    recast(e10) {
      return this.origin.copy(this.at(e10, eu)), this;
    }
    closestPointToPoint(e10, t10) {
      t10.subVectors(e10, this.origin);
      let n10 = t10.dot(this.direction);
      return n10 < 0 ? t10.copy(this.origin) : t10.copy(this.origin).addScaledVector(this.direction, n10);
    }
    distanceToPoint(e10) {
      return Math.sqrt(this.distanceSqToPoint(e10));
    }
    distanceSqToPoint(e10) {
      let t10 = eu.subVectors(e10, this.origin).dot(this.direction);
      return t10 < 0 ? this.origin.distanceToSquared(e10) : (eu.copy(this.origin).addScaledVector(this.direction, t10), eu.distanceToSquared(e10));
    }
    distanceSqToSegment(e10, t10, n10, i10) {
      let r10, a2, s2, o2;
      ec.copy(e10).add(t10).multiplyScalar(0.5), ed.copy(t10).sub(e10).normalize(), ep.copy(this.origin).sub(ec);
      let l2 = 0.5 * e10.distanceTo(t10), h2 = -this.direction.dot(ed), u2 = ep.dot(this.direction), c2 = -ep.dot(ed), d2 = ep.lengthSq(), p2 = Math.abs(1 - h2 * h2);
      if (p2 > 0) {
        if (r10 = h2 * c2 - u2, a2 = h2 * u2 - c2, o2 = l2 * p2, r10 >= 0) {
          if (a2 >= -o2) {
            if (a2 <= o2) {
              let e11 = 1 / p2;
              r10 *= e11, a2 *= e11, s2 = r10 * (r10 + h2 * a2 + 2 * u2) + a2 * (h2 * r10 + a2 + 2 * c2) + d2;
            } else
              s2 = -(r10 = Math.max(0, -(h2 * (a2 = l2) + u2))) * r10 + a2 * (a2 + 2 * c2) + d2;
          } else
            s2 = -(r10 = Math.max(0, -(h2 * (a2 = -l2) + u2))) * r10 + a2 * (a2 + 2 * c2) + d2;
        } else
          a2 <= -o2 ? (a2 = (r10 = Math.max(0, -(-h2 * l2 + u2))) > 0 ? -l2 : Math.min(Math.max(-l2, -c2), l2), s2 = -r10 * r10 + a2 * (a2 + 2 * c2) + d2) : a2 <= o2 ? (r10 = 0, s2 = (a2 = Math.min(Math.max(-l2, -c2), l2)) * (a2 + 2 * c2) + d2) : (a2 = (r10 = Math.max(0, -(h2 * l2 + u2))) > 0 ? l2 : Math.min(Math.max(-l2, -c2), l2), s2 = -r10 * r10 + a2 * (a2 + 2 * c2) + d2);
      } else
        a2 = h2 > 0 ? -l2 : l2, s2 = -(r10 = Math.max(0, -(h2 * a2 + u2))) * r10 + a2 * (a2 + 2 * c2) + d2;
      return n10 && n10.copy(this.origin).addScaledVector(this.direction, r10), i10 && i10.copy(ec).addScaledVector(ed, a2), s2;
    }
    intersectSphere(e10, t10) {
      eu.subVectors(e10.center, this.origin);
      let n10 = eu.dot(this.direction), i10 = eu.dot(eu) - n10 * n10, r10 = e10.radius * e10.radius;
      if (i10 > r10)
        return null;
      let a2 = Math.sqrt(r10 - i10), s2 = n10 - a2, o2 = n10 + a2;
      return o2 < 0 ? null : s2 < 0 ? this.at(o2, t10) : this.at(s2, t10);
    }
    intersectsSphere(e10) {
      return this.distanceSqToPoint(e10.center) <= e10.radius * e10.radius;
    }
    distanceToPlane(e10) {
      let t10 = e10.normal.dot(this.direction);
      if (0 === t10)
        return 0 === e10.distanceToPoint(this.origin) ? 0 : null;
      let n10 = -(this.origin.dot(e10.normal) + e10.constant) / t10;
      return n10 >= 0 ? n10 : null;
    }
    intersectPlane(e10, t10) {
      let n10 = this.distanceToPlane(e10);
      return null === n10 ? null : this.at(n10, t10);
    }
    intersectsPlane(e10) {
      let t10 = e10.distanceToPoint(this.origin);
      if (0 === t10)
        return true;
      let n10 = e10.normal.dot(this.direction);
      return n10 * t10 < 0;
    }
    intersectBox(e10, t10) {
      let n10, i10, r10, a2, s2, o2;
      let l2 = 1 / this.direction.x, h2 = 1 / this.direction.y, u2 = 1 / this.direction.z, c2 = this.origin;
      return (l2 >= 0 ? (n10 = (e10.min.x - c2.x) * l2, i10 = (e10.max.x - c2.x) * l2) : (n10 = (e10.max.x - c2.x) * l2, i10 = (e10.min.x - c2.x) * l2), h2 >= 0 ? (r10 = (e10.min.y - c2.y) * h2, a2 = (e10.max.y - c2.y) * h2) : (r10 = (e10.max.y - c2.y) * h2, a2 = (e10.min.y - c2.y) * h2), n10 > a2 || r10 > i10) ? null : ((r10 > n10 || isNaN(n10)) && (n10 = r10), (a2 < i10 || isNaN(i10)) && (i10 = a2), u2 >= 0 ? (s2 = (e10.min.z - c2.z) * u2, o2 = (e10.max.z - c2.z) * u2) : (s2 = (e10.max.z - c2.z) * u2, o2 = (e10.min.z - c2.z) * u2), n10 > o2 || s2 > i10) ? null : ((s2 > n10 || n10 != n10) && (n10 = s2), (o2 < i10 || i10 != i10) && (i10 = o2), i10 < 0) ? null : this.at(n10 >= 0 ? n10 : i10, t10);
    }
    intersectsBox(e10) {
      return null !== this.intersectBox(e10, eu);
    }
    intersectTriangle(e10, t10, n10, i10, r10) {
      let a2;
      ef.subVectors(t10, e10), em.subVectors(n10, e10), eg.crossVectors(ef, em);
      let s2 = this.direction.dot(eg);
      if (s2 > 0) {
        if (i10)
          return null;
        a2 = 1;
      } else {
        if (!(s2 < 0))
          return null;
        a2 = -1, s2 = -s2;
      }
      ep.subVectors(this.origin, e10);
      let o2 = a2 * this.direction.dot(em.crossVectors(ep, em));
      if (o2 < 0)
        return null;
      let l2 = a2 * this.direction.dot(ef.cross(ep));
      if (l2 < 0 || o2 + l2 > s2)
        return null;
      let h2 = -a2 * ep.dot(eg);
      return h2 < 0 ? null : this.at(h2 / s2, r10);
    }
    applyMatrix4(e10) {
      return this.origin.applyMatrix4(e10), this.direction.transformDirection(e10), this;
    }
    equals(e10) {
      return e10.origin.equals(this.origin) && e10.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class ev {
    constructor(e10, t10, n10, i10, r10, a2, s2, o2, l2, h2, u2, c2, d2, p2, f2, m2) {
      ev.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== e10 && this.set(e10, t10, n10, i10, r10, a2, s2, o2, l2, h2, u2, c2, d2, p2, f2, m2);
    }
    set(e10, t10, n10, i10, r10, a2, s2, o2, l2, h2, u2, c2, d2, p2, f2, m2) {
      let g2 = this.elements;
      return g2[0] = e10, g2[4] = t10, g2[8] = n10, g2[12] = i10, g2[1] = r10, g2[5] = a2, g2[9] = s2, g2[13] = o2, g2[2] = l2, g2[6] = h2, g2[10] = u2, g2[14] = c2, g2[3] = d2, g2[7] = p2, g2[11] = f2, g2[15] = m2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new ev().fromArray(this.elements);
    }
    copy(e10) {
      let t10 = this.elements, n10 = e10.elements;
      return t10[0] = n10[0], t10[1] = n10[1], t10[2] = n10[2], t10[3] = n10[3], t10[4] = n10[4], t10[5] = n10[5], t10[6] = n10[6], t10[7] = n10[7], t10[8] = n10[8], t10[9] = n10[9], t10[10] = n10[10], t10[11] = n10[11], t10[12] = n10[12], t10[13] = n10[13], t10[14] = n10[14], t10[15] = n10[15], this;
    }
    copyPosition(e10) {
      let t10 = this.elements, n10 = e10.elements;
      return t10[12] = n10[12], t10[13] = n10[13], t10[14] = n10[14], this;
    }
    setFromMatrix3(e10) {
      let t10 = e10.elements;
      return this.set(t10[0], t10[3], t10[6], 0, t10[1], t10[4], t10[7], 0, t10[2], t10[5], t10[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(e10, t10, n10) {
      return e10.setFromMatrixColumn(this, 0), t10.setFromMatrixColumn(this, 1), n10.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e10, t10, n10) {
      return this.set(e10.x, t10.x, n10.x, 0, e10.y, t10.y, n10.y, 0, e10.z, t10.z, n10.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(e10) {
      let t10 = this.elements, n10 = e10.elements, i10 = 1 / ex.setFromMatrixColumn(e10, 0).length(), r10 = 1 / ex.setFromMatrixColumn(e10, 1).length(), a2 = 1 / ex.setFromMatrixColumn(e10, 2).length();
      return t10[0] = n10[0] * i10, t10[1] = n10[1] * i10, t10[2] = n10[2] * i10, t10[3] = 0, t10[4] = n10[4] * r10, t10[5] = n10[5] * r10, t10[6] = n10[6] * r10, t10[7] = 0, t10[8] = n10[8] * a2, t10[9] = n10[9] * a2, t10[10] = n10[10] * a2, t10[11] = 0, t10[12] = 0, t10[13] = 0, t10[14] = 0, t10[15] = 1, this;
    }
    makeRotationFromEuler(e10) {
      let t10 = this.elements, n10 = e10.x, i10 = e10.y, r10 = e10.z, a2 = Math.cos(n10), s2 = Math.sin(n10), o2 = Math.cos(i10), l2 = Math.sin(i10), h2 = Math.cos(r10), u2 = Math.sin(r10);
      if ("XYZ" === e10.order) {
        let e11 = a2 * h2, n11 = a2 * u2, i11 = s2 * h2, r11 = s2 * u2;
        t10[0] = o2 * h2, t10[4] = -o2 * u2, t10[8] = l2, t10[1] = n11 + i11 * l2, t10[5] = e11 - r11 * l2, t10[9] = -s2 * o2, t10[2] = r11 - e11 * l2, t10[6] = i11 + n11 * l2, t10[10] = a2 * o2;
      } else if ("YXZ" === e10.order) {
        let e11 = o2 * h2, n11 = o2 * u2, i11 = l2 * h2, r11 = l2 * u2;
        t10[0] = e11 + r11 * s2, t10[4] = i11 * s2 - n11, t10[8] = a2 * l2, t10[1] = a2 * u2, t10[5] = a2 * h2, t10[9] = -s2, t10[2] = n11 * s2 - i11, t10[6] = r11 + e11 * s2, t10[10] = a2 * o2;
      } else if ("ZXY" === e10.order) {
        let e11 = o2 * h2, n11 = o2 * u2, i11 = l2 * h2, r11 = l2 * u2;
        t10[0] = e11 - r11 * s2, t10[4] = -a2 * u2, t10[8] = i11 + n11 * s2, t10[1] = n11 + i11 * s2, t10[5] = a2 * h2, t10[9] = r11 - e11 * s2, t10[2] = -a2 * l2, t10[6] = s2, t10[10] = a2 * o2;
      } else if ("ZYX" === e10.order) {
        let e11 = a2 * h2, n11 = a2 * u2, i11 = s2 * h2, r11 = s2 * u2;
        t10[0] = o2 * h2, t10[4] = i11 * l2 - n11, t10[8] = e11 * l2 + r11, t10[1] = o2 * u2, t10[5] = r11 * l2 + e11, t10[9] = n11 * l2 - i11, t10[2] = -l2, t10[6] = s2 * o2, t10[10] = a2 * o2;
      } else if ("YZX" === e10.order) {
        let e11 = a2 * o2, n11 = a2 * l2, i11 = s2 * o2, r11 = s2 * l2;
        t10[0] = o2 * h2, t10[4] = r11 - e11 * u2, t10[8] = i11 * u2 + n11, t10[1] = u2, t10[5] = a2 * h2, t10[9] = -s2 * h2, t10[2] = -l2 * h2, t10[6] = n11 * u2 + i11, t10[10] = e11 - r11 * u2;
      } else if ("XZY" === e10.order) {
        let e11 = a2 * o2, n11 = a2 * l2, i11 = s2 * o2, r11 = s2 * l2;
        t10[0] = o2 * h2, t10[4] = -u2, t10[8] = l2 * h2, t10[1] = e11 * u2 + r11, t10[5] = a2 * h2, t10[9] = n11 * u2 - i11, t10[2] = i11 * u2 - n11, t10[6] = s2 * h2, t10[10] = r11 * u2 + e11;
      }
      return t10[3] = 0, t10[7] = 0, t10[11] = 0, t10[12] = 0, t10[13] = 0, t10[14] = 0, t10[15] = 1, this;
    }
    makeRotationFromQuaternion(e10) {
      return this.compose(eM, e10, eS);
    }
    lookAt(e10, t10, n10) {
      let i10 = this.elements;
      return eb.subVectors(e10, t10), 0 === eb.lengthSq() && (eb.z = 1), eb.normalize(), eE.crossVectors(n10, eb), 0 === eE.lengthSq() && (1 === Math.abs(n10.z) ? eb.x += 1e-4 : eb.z += 1e-4, eb.normalize(), eE.crossVectors(n10, eb)), eE.normalize(), eT.crossVectors(eb, eE), i10[0] = eE.x, i10[4] = eT.x, i10[8] = eb.x, i10[1] = eE.y, i10[5] = eT.y, i10[9] = eb.y, i10[2] = eE.z, i10[6] = eT.z, i10[10] = eb.z, this;
    }
    multiply(e10) {
      return this.multiplyMatrices(this, e10);
    }
    premultiply(e10) {
      return this.multiplyMatrices(e10, this);
    }
    multiplyMatrices(e10, t10) {
      let n10 = e10.elements, i10 = t10.elements, r10 = this.elements, a2 = n10[0], s2 = n10[4], o2 = n10[8], l2 = n10[12], h2 = n10[1], u2 = n10[5], c2 = n10[9], d2 = n10[13], p2 = n10[2], f2 = n10[6], m2 = n10[10], g2 = n10[14], _2 = n10[3], v2 = n10[7], x2 = n10[11], y2 = n10[15], M2 = i10[0], S2 = i10[4], E2 = i10[8], T2 = i10[12], b2 = i10[1], A2 = i10[5], w2 = i10[9], R2 = i10[13], C2 = i10[2], L2 = i10[6], P2 = i10[10], U2 = i10[14], N2 = i10[3], D2 = i10[7], I2 = i10[11], O2 = i10[15];
      return r10[0] = a2 * M2 + s2 * b2 + o2 * C2 + l2 * N2, r10[4] = a2 * S2 + s2 * A2 + o2 * L2 + l2 * D2, r10[8] = a2 * E2 + s2 * w2 + o2 * P2 + l2 * I2, r10[12] = a2 * T2 + s2 * R2 + o2 * U2 + l2 * O2, r10[1] = h2 * M2 + u2 * b2 + c2 * C2 + d2 * N2, r10[5] = h2 * S2 + u2 * A2 + c2 * L2 + d2 * D2, r10[9] = h2 * E2 + u2 * w2 + c2 * P2 + d2 * I2, r10[13] = h2 * T2 + u2 * R2 + c2 * U2 + d2 * O2, r10[2] = p2 * M2 + f2 * b2 + m2 * C2 + g2 * N2, r10[6] = p2 * S2 + f2 * A2 + m2 * L2 + g2 * D2, r10[10] = p2 * E2 + f2 * w2 + m2 * P2 + g2 * I2, r10[14] = p2 * T2 + f2 * R2 + m2 * U2 + g2 * O2, r10[3] = _2 * M2 + v2 * b2 + x2 * C2 + y2 * N2, r10[7] = _2 * S2 + v2 * A2 + x2 * L2 + y2 * D2, r10[11] = _2 * E2 + v2 * w2 + x2 * P2 + y2 * I2, r10[15] = _2 * T2 + v2 * R2 + x2 * U2 + y2 * O2, this;
    }
    multiplyScalar(e10) {
      let t10 = this.elements;
      return t10[0] *= e10, t10[4] *= e10, t10[8] *= e10, t10[12] *= e10, t10[1] *= e10, t10[5] *= e10, t10[9] *= e10, t10[13] *= e10, t10[2] *= e10, t10[6] *= e10, t10[10] *= e10, t10[14] *= e10, t10[3] *= e10, t10[7] *= e10, t10[11] *= e10, t10[15] *= e10, this;
    }
    determinant() {
      let e10 = this.elements, t10 = e10[0], n10 = e10[4], i10 = e10[8], r10 = e10[12], a2 = e10[1], s2 = e10[5], o2 = e10[9], l2 = e10[13], h2 = e10[2], u2 = e10[6], c2 = e10[10], d2 = e10[14], p2 = e10[3], f2 = e10[7], m2 = e10[11], g2 = e10[15];
      return p2 * (+r10 * o2 * u2 - i10 * l2 * u2 - r10 * s2 * c2 + n10 * l2 * c2 + i10 * s2 * d2 - n10 * o2 * d2) + f2 * (+t10 * o2 * d2 - t10 * l2 * c2 + r10 * a2 * c2 - i10 * a2 * d2 + i10 * l2 * h2 - r10 * o2 * h2) + m2 * (+t10 * l2 * u2 - t10 * s2 * d2 - r10 * a2 * u2 + n10 * a2 * d2 + r10 * s2 * h2 - n10 * l2 * h2) + g2 * (-i10 * s2 * h2 - t10 * o2 * u2 + t10 * s2 * c2 + i10 * a2 * u2 - n10 * a2 * c2 + n10 * o2 * h2);
    }
    transpose() {
      let e10;
      let t10 = this.elements;
      return e10 = t10[1], t10[1] = t10[4], t10[4] = e10, e10 = t10[2], t10[2] = t10[8], t10[8] = e10, e10 = t10[6], t10[6] = t10[9], t10[9] = e10, e10 = t10[3], t10[3] = t10[12], t10[12] = e10, e10 = t10[7], t10[7] = t10[13], t10[13] = e10, e10 = t10[11], t10[11] = t10[14], t10[14] = e10, this;
    }
    setPosition(e10, t10, n10) {
      let i10 = this.elements;
      return e10.isVector3 ? (i10[12] = e10.x, i10[13] = e10.y, i10[14] = e10.z) : (i10[12] = e10, i10[13] = t10, i10[14] = n10), this;
    }
    invert() {
      let e10 = this.elements, t10 = e10[0], n10 = e10[1], i10 = e10[2], r10 = e10[3], a2 = e10[4], s2 = e10[5], o2 = e10[6], l2 = e10[7], h2 = e10[8], u2 = e10[9], c2 = e10[10], d2 = e10[11], p2 = e10[12], f2 = e10[13], m2 = e10[14], g2 = e10[15], _2 = u2 * m2 * l2 - f2 * c2 * l2 + f2 * o2 * d2 - s2 * m2 * d2 - u2 * o2 * g2 + s2 * c2 * g2, v2 = p2 * c2 * l2 - h2 * m2 * l2 - p2 * o2 * d2 + a2 * m2 * d2 + h2 * o2 * g2 - a2 * c2 * g2, x2 = h2 * f2 * l2 - p2 * u2 * l2 + p2 * s2 * d2 - a2 * f2 * d2 - h2 * s2 * g2 + a2 * u2 * g2, y2 = p2 * u2 * o2 - h2 * f2 * o2 - p2 * s2 * c2 + a2 * f2 * c2 + h2 * s2 * m2 - a2 * u2 * m2, M2 = t10 * _2 + n10 * v2 + i10 * x2 + r10 * y2;
      if (0 === M2)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let S2 = 1 / M2;
      return e10[0] = _2 * S2, e10[1] = (f2 * c2 * r10 - u2 * m2 * r10 - f2 * i10 * d2 + n10 * m2 * d2 + u2 * i10 * g2 - n10 * c2 * g2) * S2, e10[2] = (s2 * m2 * r10 - f2 * o2 * r10 + f2 * i10 * l2 - n10 * m2 * l2 - s2 * i10 * g2 + n10 * o2 * g2) * S2, e10[3] = (u2 * o2 * r10 - s2 * c2 * r10 - u2 * i10 * l2 + n10 * c2 * l2 + s2 * i10 * d2 - n10 * o2 * d2) * S2, e10[4] = v2 * S2, e10[5] = (h2 * m2 * r10 - p2 * c2 * r10 + p2 * i10 * d2 - t10 * m2 * d2 - h2 * i10 * g2 + t10 * c2 * g2) * S2, e10[6] = (p2 * o2 * r10 - a2 * m2 * r10 - p2 * i10 * l2 + t10 * m2 * l2 + a2 * i10 * g2 - t10 * o2 * g2) * S2, e10[7] = (a2 * c2 * r10 - h2 * o2 * r10 + h2 * i10 * l2 - t10 * c2 * l2 - a2 * i10 * d2 + t10 * o2 * d2) * S2, e10[8] = x2 * S2, e10[9] = (p2 * u2 * r10 - h2 * f2 * r10 - p2 * n10 * d2 + t10 * f2 * d2 + h2 * n10 * g2 - t10 * u2 * g2) * S2, e10[10] = (a2 * f2 * r10 - p2 * s2 * r10 + p2 * n10 * l2 - t10 * f2 * l2 - a2 * n10 * g2 + t10 * s2 * g2) * S2, e10[11] = (h2 * s2 * r10 - a2 * u2 * r10 - h2 * n10 * l2 + t10 * u2 * l2 + a2 * n10 * d2 - t10 * s2 * d2) * S2, e10[12] = y2 * S2, e10[13] = (h2 * f2 * i10 - p2 * u2 * i10 + p2 * n10 * c2 - t10 * f2 * c2 - h2 * n10 * m2 + t10 * u2 * m2) * S2, e10[14] = (p2 * s2 * i10 - a2 * f2 * i10 - p2 * n10 * o2 + t10 * f2 * o2 + a2 * n10 * m2 - t10 * s2 * m2) * S2, e10[15] = (a2 * u2 * i10 - h2 * s2 * i10 + h2 * n10 * o2 - t10 * u2 * o2 - a2 * n10 * c2 + t10 * s2 * c2) * S2, this;
    }
    scale(e10) {
      let t10 = this.elements, n10 = e10.x, i10 = e10.y, r10 = e10.z;
      return t10[0] *= n10, t10[4] *= i10, t10[8] *= r10, t10[1] *= n10, t10[5] *= i10, t10[9] *= r10, t10[2] *= n10, t10[6] *= i10, t10[10] *= r10, t10[3] *= n10, t10[7] *= i10, t10[11] *= r10, this;
    }
    getMaxScaleOnAxis() {
      let e10 = this.elements, t10 = e10[0] * e10[0] + e10[1] * e10[1] + e10[2] * e10[2], n10 = e10[4] * e10[4] + e10[5] * e10[5] + e10[6] * e10[6], i10 = e10[8] * e10[8] + e10[9] * e10[9] + e10[10] * e10[10];
      return Math.sqrt(Math.max(t10, n10, i10));
    }
    makeTranslation(e10, t10, n10) {
      return e10.isVector3 ? this.set(1, 0, 0, e10.x, 0, 1, 0, e10.y, 0, 0, 1, e10.z, 0, 0, 0, 1) : this.set(1, 0, 0, e10, 0, 1, 0, t10, 0, 0, 1, n10, 0, 0, 0, 1), this;
    }
    makeRotationX(e10) {
      let t10 = Math.cos(e10), n10 = Math.sin(e10);
      return this.set(1, 0, 0, 0, 0, t10, -n10, 0, 0, n10, t10, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e10) {
      let t10 = Math.cos(e10), n10 = Math.sin(e10);
      return this.set(t10, 0, n10, 0, 0, 1, 0, 0, -n10, 0, t10, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e10) {
      let t10 = Math.cos(e10), n10 = Math.sin(e10);
      return this.set(t10, -n10, 0, 0, n10, t10, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e10, t10) {
      let n10 = Math.cos(t10), i10 = Math.sin(t10), r10 = 1 - n10, a2 = e10.x, s2 = e10.y, o2 = e10.z, l2 = r10 * a2, h2 = r10 * s2;
      return this.set(l2 * a2 + n10, l2 * s2 - i10 * o2, l2 * o2 + i10 * s2, 0, l2 * s2 + i10 * o2, h2 * s2 + n10, h2 * o2 - i10 * a2, 0, l2 * o2 - i10 * s2, h2 * o2 + i10 * a2, r10 * o2 * o2 + n10, 0, 0, 0, 0, 1), this;
    }
    makeScale(e10, t10, n10) {
      return this.set(e10, 0, 0, 0, 0, t10, 0, 0, 0, 0, n10, 0, 0, 0, 0, 1), this;
    }
    makeShear(e10, t10, n10, i10, r10, a2) {
      return this.set(1, n10, r10, 0, e10, 1, a2, 0, t10, i10, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e10, t10, n10) {
      let i10 = this.elements, r10 = t10._x, a2 = t10._y, s2 = t10._z, o2 = t10._w, l2 = r10 + r10, h2 = a2 + a2, u2 = s2 + s2, c2 = r10 * l2, d2 = r10 * h2, p2 = r10 * u2, f2 = a2 * h2, m2 = a2 * u2, g2 = s2 * u2, _2 = o2 * l2, v2 = o2 * h2, x2 = o2 * u2, y2 = n10.x, M2 = n10.y, S2 = n10.z;
      return i10[0] = (1 - (f2 + g2)) * y2, i10[1] = (d2 + x2) * y2, i10[2] = (p2 - v2) * y2, i10[3] = 0, i10[4] = (d2 - x2) * M2, i10[5] = (1 - (c2 + g2)) * M2, i10[6] = (m2 + _2) * M2, i10[7] = 0, i10[8] = (p2 + v2) * S2, i10[9] = (m2 - _2) * S2, i10[10] = (1 - (c2 + f2)) * S2, i10[11] = 0, i10[12] = e10.x, i10[13] = e10.y, i10[14] = e10.z, i10[15] = 1, this;
    }
    decompose(e10, t10, n10) {
      let i10 = this.elements, r10 = ex.set(i10[0], i10[1], i10[2]).length(), a2 = ex.set(i10[4], i10[5], i10[6]).length(), s2 = ex.set(i10[8], i10[9], i10[10]).length(), o2 = this.determinant();
      o2 < 0 && (r10 = -r10), e10.x = i10[12], e10.y = i10[13], e10.z = i10[14], ey.copy(this);
      let l2 = 1 / r10, h2 = 1 / a2, u2 = 1 / s2;
      return ey.elements[0] *= l2, ey.elements[1] *= l2, ey.elements[2] *= l2, ey.elements[4] *= h2, ey.elements[5] *= h2, ey.elements[6] *= h2, ey.elements[8] *= u2, ey.elements[9] *= u2, ey.elements[10] *= u2, t10.setFromRotationMatrix(ey), n10.x = r10, n10.y = a2, n10.z = s2, this;
    }
    makePerspective(e10, t10, n10, i10, r10, a2, s2 = 2e3) {
      let o2, l2;
      let h2 = this.elements;
      if (2e3 === s2)
        o2 = -(a2 + r10) / (a2 - r10), l2 = -2 * a2 * r10 / (a2 - r10);
      else if (2001 === s2)
        o2 = -a2 / (a2 - r10), l2 = -a2 * r10 / (a2 - r10);
      else
        throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s2);
      return h2[0] = 2 * r10 / (t10 - e10), h2[4] = 0, h2[8] = (t10 + e10) / (t10 - e10), h2[12] = 0, h2[1] = 0, h2[5] = 2 * r10 / (n10 - i10), h2[9] = (n10 + i10) / (n10 - i10), h2[13] = 0, h2[2] = 0, h2[6] = 0, h2[10] = o2, h2[14] = l2, h2[3] = 0, h2[7] = 0, h2[11] = -1, h2[15] = 0, this;
    }
    makeOrthographic(e10, t10, n10, i10, r10, a2, s2 = 2e3) {
      let o2, l2;
      let h2 = this.elements, u2 = 1 / (t10 - e10), c2 = 1 / (n10 - i10), d2 = 1 / (a2 - r10);
      if (2e3 === s2)
        o2 = (a2 + r10) * d2, l2 = -2 * d2;
      else if (2001 === s2)
        o2 = r10 * d2, l2 = -1 * d2;
      else
        throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s2);
      return h2[0] = 2 * u2, h2[4] = 0, h2[8] = 0, h2[12] = -((t10 + e10) * u2), h2[1] = 0, h2[5] = 2 * c2, h2[9] = 0, h2[13] = -((n10 + i10) * c2), h2[2] = 0, h2[6] = 0, h2[10] = l2, h2[14] = -o2, h2[3] = 0, h2[7] = 0, h2[11] = 0, h2[15] = 1, this;
    }
    equals(e10) {
      let t10 = this.elements, n10 = e10.elements;
      for (let e11 = 0; e11 < 16; e11++)
        if (t10[e11] !== n10[e11])
          return false;
      return true;
    }
    fromArray(e10, t10 = 0) {
      for (let n10 = 0; n10 < 16; n10++)
        this.elements[n10] = e10[n10 + t10];
      return this;
    }
    toArray(e10 = [], t10 = 0) {
      let n10 = this.elements;
      return e10[t10] = n10[0], e10[t10 + 1] = n10[1], e10[t10 + 2] = n10[2], e10[t10 + 3] = n10[3], e10[t10 + 4] = n10[4], e10[t10 + 5] = n10[5], e10[t10 + 6] = n10[6], e10[t10 + 7] = n10[7], e10[t10 + 8] = n10[8], e10[t10 + 9] = n10[9], e10[t10 + 10] = n10[10], e10[t10 + 11] = n10[11], e10[t10 + 12] = n10[12], e10[t10 + 13] = n10[13], e10[t10 + 14] = n10[14], e10[t10 + 15] = n10[15], e10;
    }
  }
  let ex = new H(), ey = new ev(), eM = new H(0, 0, 0), eS = new H(1, 1, 1), eE = new H(), eT = new H(), eb = new H(), eA = new ev(), ew = new G();
  class eR {
    constructor(e10 = 0, t10 = 0, n10 = 0, i10 = eR.DEFAULT_ORDER) {
      this.isEuler = true, this._x = e10, this._y = t10, this._z = n10, this._order = i10;
    }
    get x() {
      return this._x;
    }
    set x(e10) {
      this._x = e10, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e10) {
      this._y = e10, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e10) {
      this._z = e10, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e10) {
      this._order = e10, this._onChangeCallback();
    }
    set(e10, t10, n10, i10 = this._order) {
      return this._x = e10, this._y = t10, this._z = n10, this._order = i10, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e10) {
      return this._x = e10._x, this._y = e10._y, this._z = e10._z, this._order = e10._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e10, t10 = this._order, n10 = true) {
      let i10 = e10.elements, r10 = i10[0], a2 = i10[4], s2 = i10[8], o2 = i10[1], l2 = i10[5], h2 = i10[9], u2 = i10[2], c2 = i10[6], d2 = i10[10];
      switch (t10) {
        case "XYZ":
          this._y = Math.asin(p(s2, -1, 1)), 0.9999999 > Math.abs(s2) ? (this._x = Math.atan2(-h2, d2), this._z = Math.atan2(-a2, r10)) : (this._x = Math.atan2(c2, l2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-p(h2, -1, 1)), 0.9999999 > Math.abs(h2) ? (this._y = Math.atan2(s2, d2), this._z = Math.atan2(o2, l2)) : (this._y = Math.atan2(-u2, r10), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(p(c2, -1, 1)), 0.9999999 > Math.abs(c2) ? (this._y = Math.atan2(-u2, d2), this._z = Math.atan2(-a2, l2)) : (this._y = 0, this._z = Math.atan2(o2, r10));
          break;
        case "ZYX":
          this._y = Math.asin(-p(u2, -1, 1)), 0.9999999 > Math.abs(u2) ? (this._x = Math.atan2(c2, d2), this._z = Math.atan2(o2, r10)) : (this._x = 0, this._z = Math.atan2(-a2, l2));
          break;
        case "YZX":
          this._z = Math.asin(p(o2, -1, 1)), 0.9999999 > Math.abs(o2) ? (this._x = Math.atan2(-h2, l2), this._y = Math.atan2(-u2, r10)) : (this._x = 0, this._y = Math.atan2(s2, d2));
          break;
        case "XZY":
          this._z = Math.asin(-p(a2, -1, 1)), 0.9999999 > Math.abs(a2) ? (this._x = Math.atan2(c2, l2), this._y = Math.atan2(s2, r10)) : (this._x = Math.atan2(-h2, d2), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t10);
      }
      return this._order = t10, true === n10 && this._onChangeCallback(), this;
    }
    setFromQuaternion(e10, t10, n10) {
      return eA.makeRotationFromQuaternion(e10), this.setFromRotationMatrix(eA, t10, n10);
    }
    setFromVector3(e10, t10 = this._order) {
      return this.set(e10.x, e10.y, e10.z, t10);
    }
    reorder(e10) {
      return ew.setFromEuler(this), this.setFromQuaternion(ew, e10);
    }
    equals(e10) {
      return e10._x === this._x && e10._y === this._y && e10._z === this._z && e10._order === this._order;
    }
    fromArray(e10) {
      return this._x = e10[0], this._y = e10[1], this._z = e10[2], void 0 !== e10[3] && (this._order = e10[3]), this._onChangeCallback(), this;
    }
    toArray(e10 = [], t10 = 0) {
      return e10[t10] = this._x, e10[t10 + 1] = this._y, e10[t10 + 2] = this._z, e10[t10 + 3] = this._order, e10;
    }
    _onChange(e10) {
      return this._onChangeCallback = e10, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  eR.DEFAULT_ORDER = "XYZ";
  class eC {
    constructor() {
      this.mask = 1;
    }
    set(e10) {
      this.mask = (1 << e10 | 0) >>> 0;
    }
    enable(e10) {
      this.mask |= 1 << e10 | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e10) {
      this.mask ^= 1 << e10 | 0;
    }
    disable(e10) {
      this.mask &= ~(1 << e10 | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e10) {
      return (this.mask & e10.mask) != 0;
    }
    isEnabled(e10) {
      return (this.mask & (1 << e10 | 0)) != 0;
    }
  }
  let eL = 0, eP = new H(), eU = new G(), eN = new ev(), eD = new H(), eI = new H(), eO = new H(), eF = new G(), ez = new H(1, 0, 0), eB = new H(0, 1, 0), eV = new H(0, 0, 1), eG = { type: "added" }, eH = { type: "removed" };
  class ek extends l {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: eL++ }), this.uuid = d(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ek.DEFAULT_UP.clone();
      let e10 = new H(), t10 = new eR(), n10 = new G(), i10 = new H(1, 1, 1);
      t10._onChange(function() {
        n10.setFromEuler(t10, false);
      }), n10._onChange(function() {
        t10.setFromQuaternion(n10, void 0, false);
      }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e10 }, rotation: { configurable: true, enumerable: true, value: t10 }, quaternion: { configurable: true, enumerable: true, value: n10 }, scale: { configurable: true, enumerable: true, value: i10 }, modelViewMatrix: { value: new ev() }, normalMatrix: { value: new x() } }), this.matrix = new ev(), this.matrixWorld = new ev(), this.matrixAutoUpdate = ek.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.matrixWorldAutoUpdate = ek.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new eC(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(e10) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e10), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e10) {
      return this.quaternion.premultiply(e10), this;
    }
    setRotationFromAxisAngle(e10, t10) {
      this.quaternion.setFromAxisAngle(e10, t10);
    }
    setRotationFromEuler(e10) {
      this.quaternion.setFromEuler(e10, true);
    }
    setRotationFromMatrix(e10) {
      this.quaternion.setFromRotationMatrix(e10);
    }
    setRotationFromQuaternion(e10) {
      this.quaternion.copy(e10);
    }
    rotateOnAxis(e10, t10) {
      return eU.setFromAxisAngle(e10, t10), this.quaternion.multiply(eU), this;
    }
    rotateOnWorldAxis(e10, t10) {
      return eU.setFromAxisAngle(e10, t10), this.quaternion.premultiply(eU), this;
    }
    rotateX(e10) {
      return this.rotateOnAxis(ez, e10);
    }
    rotateY(e10) {
      return this.rotateOnAxis(eB, e10);
    }
    rotateZ(e10) {
      return this.rotateOnAxis(eV, e10);
    }
    translateOnAxis(e10, t10) {
      return eP.copy(e10).applyQuaternion(this.quaternion), this.position.add(eP.multiplyScalar(t10)), this;
    }
    translateX(e10) {
      return this.translateOnAxis(ez, e10);
    }
    translateY(e10) {
      return this.translateOnAxis(eB, e10);
    }
    translateZ(e10) {
      return this.translateOnAxis(eV, e10);
    }
    localToWorld(e10) {
      return this.updateWorldMatrix(true, false), e10.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e10) {
      return this.updateWorldMatrix(true, false), e10.applyMatrix4(eN.copy(this.matrixWorld).invert());
    }
    lookAt(e10, t10, n10) {
      e10.isVector3 ? eD.copy(e10) : eD.set(e10, t10, n10);
      let i10 = this.parent;
      this.updateWorldMatrix(true, false), eI.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? eN.lookAt(eI, eD, this.up) : eN.lookAt(eD, eI, this.up), this.quaternion.setFromRotationMatrix(eN), i10 && (eN.extractRotation(i10.matrixWorld), eU.setFromRotationMatrix(eN), this.quaternion.premultiply(eU.invert()));
    }
    add(e10) {
      if (arguments.length > 1) {
        for (let e11 = 0; e11 < arguments.length; e11++)
          this.add(arguments[e11]);
        return this;
      }
      return e10 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e10), this) : (e10 && e10.isObject3D ? (null !== e10.parent && e10.parent.remove(e10), e10.parent = this, this.children.push(e10), e10.dispatchEvent(eG)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e10), this);
    }
    remove(e10) {
      if (arguments.length > 1) {
        for (let e11 = 0; e11 < arguments.length; e11++)
          this.remove(arguments[e11]);
        return this;
      }
      let t10 = this.children.indexOf(e10);
      return -1 !== t10 && (e10.parent = null, this.children.splice(t10, 1), e10.dispatchEvent(eH)), this;
    }
    removeFromParent() {
      let e10 = this.parent;
      return null !== e10 && e10.remove(this), this;
    }
    clear() {
      for (let e10 = 0; e10 < this.children.length; e10++) {
        let t10 = this.children[e10];
        t10.parent = null, t10.dispatchEvent(eH);
      }
      return this.children.length = 0, this;
    }
    attach(e10) {
      return this.updateWorldMatrix(true, false), eN.copy(this.matrixWorld).invert(), null !== e10.parent && (e10.parent.updateWorldMatrix(true, false), eN.multiply(e10.parent.matrixWorld)), e10.applyMatrix4(eN), this.add(e10), e10.updateWorldMatrix(false, true), this;
    }
    getObjectById(e10) {
      return this.getObjectByProperty("id", e10);
    }
    getObjectByName(e10) {
      return this.getObjectByProperty("name", e10);
    }
    getObjectByProperty(e10, t10) {
      if (this[e10] === t10)
        return this;
      for (let n10 = 0, i10 = this.children.length; n10 < i10; n10++) {
        let i11 = this.children[n10], r10 = i11.getObjectByProperty(e10, t10);
        if (void 0 !== r10)
          return r10;
      }
    }
    getObjectsByProperty(e10, t10) {
      let n10 = [];
      this[e10] === t10 && n10.push(this);
      for (let i10 = 0, r10 = this.children.length; i10 < r10; i10++) {
        let r11 = this.children[i10].getObjectsByProperty(e10, t10);
        r11.length > 0 && (n10 = n10.concat(r11));
      }
      return n10;
    }
    getWorldPosition(e10) {
      return this.updateWorldMatrix(true, false), e10.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e10) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(eI, e10, eO), e10;
    }
    getWorldScale(e10) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(eI, eF, e10), e10;
    }
    getWorldDirection(e10) {
      this.updateWorldMatrix(true, false);
      let t10 = this.matrixWorld.elements;
      return e10.set(t10[8], t10[9], t10[10]).normalize();
    }
    raycast() {
    }
    traverse(e10) {
      e10(this);
      let t10 = this.children;
      for (let n10 = 0, i10 = t10.length; n10 < i10; n10++)
        t10[n10].traverse(e10);
    }
    traverseVisible(e10) {
      if (false === this.visible)
        return;
      e10(this);
      let t10 = this.children;
      for (let n10 = 0, i10 = t10.length; n10 < i10; n10++)
        t10[n10].traverseVisible(e10);
    }
    traverseAncestors(e10) {
      let t10 = this.parent;
      null !== t10 && (e10(t10), t10.traverseAncestors(e10));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(e10) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e10) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, e10 = true);
      let t10 = this.children;
      for (let n10 = 0, i10 = t10.length; n10 < i10; n10++) {
        let i11 = t10[n10];
        (true === i11.matrixWorldAutoUpdate || true === e10) && i11.updateMatrixWorld(e10);
      }
    }
    updateWorldMatrix(e10, t10) {
      let n10 = this.parent;
      if (true === e10 && null !== n10 && true === n10.matrixWorldAutoUpdate && n10.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), true === t10) {
        let e11 = this.children;
        for (let t11 = 0, n11 = e11.length; t11 < n11; t11++) {
          let n12 = e11[t11];
          true === n12.matrixWorldAutoUpdate && n12.updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(e10) {
      let t10 = void 0 === e10 || "string" == typeof e10, n10 = {};
      t10 && (e10 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n10.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
      let i10 = {};
      function r10(t11, n11) {
        return void 0 === t11[n11.uuid] && (t11[n11.uuid] = n11.toJSON(e10)), n11.uuid;
      }
      if (i10.uuid = this.uuid, i10.type = this.type, "" !== this.name && (i10.name = this.name), true === this.castShadow && (i10.castShadow = true), true === this.receiveShadow && (i10.receiveShadow = true), false === this.visible && (i10.visible = false), false === this.frustumCulled && (i10.frustumCulled = false), 0 !== this.renderOrder && (i10.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i10.userData = this.userData), i10.layers = this.layers.mask, i10.matrix = this.matrix.toArray(), i10.up = this.up.toArray(), false === this.matrixAutoUpdate && (i10.matrixAutoUpdate = false), this.isInstancedMesh && (i10.type = "InstancedMesh", i10.count = this.count, i10.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i10.instanceColor = this.instanceColor.toJSON())), this.isScene)
        this.background && (this.background.isColor ? i10.background = this.background.toJSON() : this.background.isTexture && (i10.background = this.background.toJSON(e10).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i10.environment = this.environment.toJSON(e10).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i10.geometry = r10(e10.geometries, this.geometry);
        let t11 = this.geometry.parameters;
        if (void 0 !== t11 && void 0 !== t11.shapes) {
          let n11 = t11.shapes;
          if (Array.isArray(n11))
            for (let t12 = 0, i11 = n11.length; t12 < i11; t12++) {
              let i12 = n11[t12];
              r10(e10.shapes, i12);
            }
          else
            r10(e10.shapes, n11);
        }
      }
      if (this.isSkinnedMesh && (i10.bindMode = this.bindMode, i10.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r10(e10.skeletons, this.skeleton), i10.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
        if (Array.isArray(this.material)) {
          let t11 = [];
          for (let n11 = 0, i11 = this.material.length; n11 < i11; n11++)
            t11.push(r10(e10.materials, this.material[n11]));
          i10.material = t11;
        } else
          i10.material = r10(e10.materials, this.material);
      }
      if (this.children.length > 0) {
        i10.children = [];
        for (let t11 = 0; t11 < this.children.length; t11++)
          i10.children.push(this.children[t11].toJSON(e10).object);
      }
      if (this.animations.length > 0) {
        i10.animations = [];
        for (let t11 = 0; t11 < this.animations.length; t11++) {
          let n11 = this.animations[t11];
          i10.animations.push(r10(e10.animations, n11));
        }
      }
      if (t10) {
        let t11 = a2(e10.geometries), i11 = a2(e10.materials), r11 = a2(e10.textures), s2 = a2(e10.images), o2 = a2(e10.shapes), l2 = a2(e10.skeletons), h2 = a2(e10.animations), u2 = a2(e10.nodes);
        t11.length > 0 && (n10.geometries = t11), i11.length > 0 && (n10.materials = i11), r11.length > 0 && (n10.textures = r11), s2.length > 0 && (n10.images = s2), o2.length > 0 && (n10.shapes = o2), l2.length > 0 && (n10.skeletons = l2), h2.length > 0 && (n10.animations = h2), u2.length > 0 && (n10.nodes = u2);
      }
      return n10.object = i10, n10;
      function a2(e11) {
        let t11 = [];
        for (let n11 in e11) {
          let i11 = e11[n11];
          delete i11.metadata, t11.push(i11);
        }
        return t11;
      }
    }
    clone(e10) {
      return new this.constructor().copy(this, e10);
    }
    copy(e10, t10 = true) {
      if (this.name = e10.name, this.up.copy(e10.up), this.position.copy(e10.position), this.rotation.order = e10.rotation.order, this.quaternion.copy(e10.quaternion), this.scale.copy(e10.scale), this.matrix.copy(e10.matrix), this.matrixWorld.copy(e10.matrixWorld), this.matrixAutoUpdate = e10.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e10.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e10.matrixWorldAutoUpdate, this.layers.mask = e10.layers.mask, this.visible = e10.visible, this.castShadow = e10.castShadow, this.receiveShadow = e10.receiveShadow, this.frustumCulled = e10.frustumCulled, this.renderOrder = e10.renderOrder, this.animations = e10.animations, this.userData = JSON.parse(JSON.stringify(e10.userData)), true === t10)
        for (let t11 = 0; t11 < e10.children.length; t11++) {
          let n10 = e10.children[t11];
          this.add(n10.clone());
        }
      return this;
    }
  }
  ek.DEFAULT_UP = new H(0, 1, 0), ek.DEFAULT_MATRIX_AUTO_UPDATE = true, ek.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  let eW = new H(), eX = new H(), ej = new H(), eq = new H(), eY = new H(), eJ = new H(), eZ = new H(), eK = new H(), eQ = new H(), e$ = new H(), e0 = false;
  class e1 {
    constructor(e10 = new H(), t10 = new H(), n10 = new H()) {
      this.a = e10, this.b = t10, this.c = n10;
    }
    static getNormal(e10, t10, n10, i10) {
      i10.subVectors(n10, t10), eW.subVectors(e10, t10), i10.cross(eW);
      let r10 = i10.lengthSq();
      return r10 > 0 ? i10.multiplyScalar(1 / Math.sqrt(r10)) : i10.set(0, 0, 0);
    }
    static getBarycoord(e10, t10, n10, i10, r10) {
      eW.subVectors(i10, t10), eX.subVectors(n10, t10), ej.subVectors(e10, t10);
      let a2 = eW.dot(eW), s2 = eW.dot(eX), o2 = eW.dot(ej), l2 = eX.dot(eX), h2 = eX.dot(ej), u2 = a2 * l2 - s2 * s2;
      if (0 === u2)
        return r10.set(-2, -1, -1);
      let c2 = 1 / u2, d2 = (l2 * o2 - s2 * h2) * c2, p2 = (a2 * h2 - s2 * o2) * c2;
      return r10.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(e10, t10, n10, i10) {
      return this.getBarycoord(e10, t10, n10, i10, eq), eq.x >= 0 && eq.y >= 0 && eq.x + eq.y <= 1;
    }
    static getUV(e10, t10, n10, i10, r10, a2, s2, o2) {
      return false === e0 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), e0 = true), this.getInterpolation(e10, t10, n10, i10, r10, a2, s2, o2);
    }
    static getInterpolation(e10, t10, n10, i10, r10, a2, s2, o2) {
      return this.getBarycoord(e10, t10, n10, i10, eq), o2.setScalar(0), o2.addScaledVector(r10, eq.x), o2.addScaledVector(a2, eq.y), o2.addScaledVector(s2, eq.z), o2;
    }
    static isFrontFacing(e10, t10, n10, i10) {
      return eW.subVectors(n10, t10), eX.subVectors(e10, t10), 0 > eW.cross(eX).dot(i10);
    }
    set(e10, t10, n10) {
      return this.a.copy(e10), this.b.copy(t10), this.c.copy(n10), this;
    }
    setFromPointsAndIndices(e10, t10, n10, i10) {
      return this.a.copy(e10[t10]), this.b.copy(e10[n10]), this.c.copy(e10[i10]), this;
    }
    setFromAttributeAndIndices(e10, t10, n10, i10) {
      return this.a.fromBufferAttribute(e10, t10), this.b.fromBufferAttribute(e10, n10), this.c.fromBufferAttribute(e10, i10), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e10) {
      return this.a.copy(e10.a), this.b.copy(e10.b), this.c.copy(e10.c), this;
    }
    getArea() {
      return eW.subVectors(this.c, this.b), eX.subVectors(this.a, this.b), 0.5 * eW.cross(eX).length();
    }
    getMidpoint(e10) {
      return e10.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e10) {
      return e1.getNormal(this.a, this.b, this.c, e10);
    }
    getPlane(e10) {
      return e10.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e10, t10) {
      return e1.getBarycoord(e10, this.a, this.b, this.c, t10);
    }
    getUV(e10, t10, n10, i10, r10) {
      return false === e0 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), e0 = true), e1.getInterpolation(e10, this.a, this.b, this.c, t10, n10, i10, r10);
    }
    getInterpolation(e10, t10, n10, i10, r10) {
      return e1.getInterpolation(e10, this.a, this.b, this.c, t10, n10, i10, r10);
    }
    containsPoint(e10) {
      return e1.containsPoint(e10, this.a, this.b, this.c);
    }
    isFrontFacing(e10) {
      return e1.isFrontFacing(this.a, this.b, this.c, e10);
    }
    intersectsBox(e10) {
      return e10.intersectsTriangle(this);
    }
    closestPointToPoint(e10, t10) {
      let n10, i10;
      let r10 = this.a, a2 = this.b, s2 = this.c;
      eY.subVectors(a2, r10), eJ.subVectors(s2, r10), eK.subVectors(e10, r10);
      let o2 = eY.dot(eK), l2 = eJ.dot(eK);
      if (o2 <= 0 && l2 <= 0)
        return t10.copy(r10);
      eQ.subVectors(e10, a2);
      let h2 = eY.dot(eQ), u2 = eJ.dot(eQ);
      if (h2 >= 0 && u2 <= h2)
        return t10.copy(a2);
      let c2 = o2 * u2 - h2 * l2;
      if (c2 <= 0 && o2 >= 0 && h2 <= 0)
        return n10 = o2 / (o2 - h2), t10.copy(r10).addScaledVector(eY, n10);
      e$.subVectors(e10, s2);
      let d2 = eY.dot(e$), p2 = eJ.dot(e$);
      if (p2 >= 0 && d2 <= p2)
        return t10.copy(s2);
      let f2 = d2 * l2 - o2 * p2;
      if (f2 <= 0 && l2 >= 0 && p2 <= 0)
        return i10 = l2 / (l2 - p2), t10.copy(r10).addScaledVector(eJ, i10);
      let m2 = h2 * p2 - d2 * u2;
      if (m2 <= 0 && u2 - h2 >= 0 && d2 - p2 >= 0)
        return eZ.subVectors(s2, a2), i10 = (u2 - h2) / (u2 - h2 + (d2 - p2)), t10.copy(a2).addScaledVector(eZ, i10);
      let g2 = 1 / (m2 + f2 + c2);
      return n10 = f2 * g2, i10 = c2 * g2, t10.copy(r10).addScaledVector(eY, n10).addScaledVector(eJ, i10);
    }
    equals(e10) {
      return e10.a.equals(this.a) && e10.b.equals(this.b) && e10.c.equals(this.c);
    }
  }
  let e2 = 0;
  class e3 extends l {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: e2++ }), this.uuid = d(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e10) {
      this._alphaTest > 0 != e10 > 0 && this.version++, this._alphaTest = e10;
    }
    onBuild() {
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e10) {
      if (void 0 !== e10)
        for (let t10 in e10) {
          let n10 = e10[t10];
          if (void 0 === n10) {
            console.warn(`THREE.Material: parameter '${t10}' has value of undefined.`);
            continue;
          }
          let i10 = this[t10];
          if (void 0 === i10) {
            console.warn(`THREE.Material: '${t10}' is not a property of THREE.${this.type}.`);
            continue;
          }
          i10 && i10.isColor ? i10.set(n10) : i10 && i10.isVector3 && n10 && n10.isVector3 ? i10.copy(n10) : this[t10] = n10;
        }
    }
    toJSON(e10) {
      let t10 = void 0 === e10 || "string" == typeof e10;
      t10 && (e10 = { textures: {}, images: {} });
      let n10 = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
      function i10(e11) {
        let t11 = [];
        for (let n11 in e11) {
          let i11 = e11[n11];
          delete i11.metadata, t11.push(i11);
        }
        return t11;
      }
      if (n10.uuid = this.uuid, n10.type = this.type, "" !== this.name && (n10.name = this.name), this.color && this.color.isColor && (n10.color = this.color.getHex()), void 0 !== this.roughness && (n10.roughness = this.roughness), void 0 !== this.metalness && (n10.metalness = this.metalness), void 0 !== this.sheen && (n10.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n10.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n10.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n10.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n10.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n10.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n10.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n10.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n10.shininess = this.shininess), void 0 !== this.clearcoat && (n10.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n10.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n10.clearcoatMap = this.clearcoatMap.toJSON(e10).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n10.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e10).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n10.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e10).uuid, n10.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n10.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n10.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n10.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n10.iridescenceMap = this.iridescenceMap.toJSON(e10).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n10.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e10).uuid), void 0 !== this.anisotropy && (n10.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n10.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n10.anisotropyMap = this.anisotropyMap.toJSON(e10).uuid), this.map && this.map.isTexture && (n10.map = this.map.toJSON(e10).uuid), this.matcap && this.matcap.isTexture && (n10.matcap = this.matcap.toJSON(e10).uuid), this.alphaMap && this.alphaMap.isTexture && (n10.alphaMap = this.alphaMap.toJSON(e10).uuid), this.lightMap && this.lightMap.isTexture && (n10.lightMap = this.lightMap.toJSON(e10).uuid, n10.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n10.aoMap = this.aoMap.toJSON(e10).uuid, n10.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n10.bumpMap = this.bumpMap.toJSON(e10).uuid, n10.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n10.normalMap = this.normalMap.toJSON(e10).uuid, n10.normalMapType = this.normalMapType, n10.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n10.displacementMap = this.displacementMap.toJSON(e10).uuid, n10.displacementScale = this.displacementScale, n10.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n10.roughnessMap = this.roughnessMap.toJSON(e10).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n10.metalnessMap = this.metalnessMap.toJSON(e10).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n10.emissiveMap = this.emissiveMap.toJSON(e10).uuid), this.specularMap && this.specularMap.isTexture && (n10.specularMap = this.specularMap.toJSON(e10).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n10.specularIntensityMap = this.specularIntensityMap.toJSON(e10).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n10.specularColorMap = this.specularColorMap.toJSON(e10).uuid), this.envMap && this.envMap.isTexture && (n10.envMap = this.envMap.toJSON(e10).uuid, void 0 !== this.combine && (n10.combine = this.combine)), void 0 !== this.envMapIntensity && (n10.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n10.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n10.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n10.gradientMap = this.gradientMap.toJSON(e10).uuid), void 0 !== this.transmission && (n10.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n10.transmissionMap = this.transmissionMap.toJSON(e10).uuid), void 0 !== this.thickness && (n10.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n10.thicknessMap = this.thicknessMap.toJSON(e10).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n10.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n10.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n10.size = this.size), null !== this.shadowSide && (n10.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n10.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n10.blending = this.blending), 0 !== this.side && (n10.side = this.side), this.vertexColors && (n10.vertexColors = true), this.opacity < 1 && (n10.opacity = this.opacity), true === this.transparent && (n10.transparent = this.transparent), n10.depthFunc = this.depthFunc, n10.depthTest = this.depthTest, n10.depthWrite = this.depthWrite, n10.colorWrite = this.colorWrite, n10.stencilWrite = this.stencilWrite, n10.stencilWriteMask = this.stencilWriteMask, n10.stencilFunc = this.stencilFunc, n10.stencilRef = this.stencilRef, n10.stencilFuncMask = this.stencilFuncMask, n10.stencilFail = this.stencilFail, n10.stencilZFail = this.stencilZFail, n10.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n10.rotation = this.rotation), true === this.polygonOffset && (n10.polygonOffset = true), 0 !== this.polygonOffsetFactor && (n10.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n10.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n10.linewidth = this.linewidth), void 0 !== this.dashSize && (n10.dashSize = this.dashSize), void 0 !== this.gapSize && (n10.gapSize = this.gapSize), void 0 !== this.scale && (n10.scale = this.scale), true === this.dithering && (n10.dithering = true), this.alphaTest > 0 && (n10.alphaTest = this.alphaTest), true === this.alphaToCoverage && (n10.alphaToCoverage = this.alphaToCoverage), true === this.premultipliedAlpha && (n10.premultipliedAlpha = this.premultipliedAlpha), true === this.forceSinglePass && (n10.forceSinglePass = this.forceSinglePass), true === this.wireframe && (n10.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n10.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n10.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n10.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (n10.flatShading = this.flatShading), false === this.visible && (n10.visible = false), false === this.toneMapped && (n10.toneMapped = false), false === this.fog && (n10.fog = false), Object.keys(this.userData).length > 0 && (n10.userData = this.userData), t10) {
        let t11 = i10(e10.textures), r10 = i10(e10.images);
        t11.length > 0 && (n10.textures = t11), r10.length > 0 && (n10.images = r10);
      }
      return n10;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e10) {
      this.name = e10.name, this.blending = e10.blending, this.side = e10.side, this.vertexColors = e10.vertexColors, this.opacity = e10.opacity, this.transparent = e10.transparent, this.blendSrc = e10.blendSrc, this.blendDst = e10.blendDst, this.blendEquation = e10.blendEquation, this.blendSrcAlpha = e10.blendSrcAlpha, this.blendDstAlpha = e10.blendDstAlpha, this.blendEquationAlpha = e10.blendEquationAlpha, this.depthFunc = e10.depthFunc, this.depthTest = e10.depthTest, this.depthWrite = e10.depthWrite, this.stencilWriteMask = e10.stencilWriteMask, this.stencilFunc = e10.stencilFunc, this.stencilRef = e10.stencilRef, this.stencilFuncMask = e10.stencilFuncMask, this.stencilFail = e10.stencilFail, this.stencilZFail = e10.stencilZFail, this.stencilZPass = e10.stencilZPass, this.stencilWrite = e10.stencilWrite;
      let t10 = e10.clippingPlanes, n10 = null;
      if (null !== t10) {
        let e11 = t10.length;
        n10 = Array(e11);
        for (let i10 = 0; i10 !== e11; ++i10)
          n10[i10] = t10[i10].clone();
      }
      return this.clippingPlanes = n10, this.clipIntersection = e10.clipIntersection, this.clipShadows = e10.clipShadows, this.shadowSide = e10.shadowSide, this.colorWrite = e10.colorWrite, this.precision = e10.precision, this.polygonOffset = e10.polygonOffset, this.polygonOffsetFactor = e10.polygonOffsetFactor, this.polygonOffsetUnits = e10.polygonOffsetUnits, this.dithering = e10.dithering, this.alphaTest = e10.alphaTest, this.alphaToCoverage = e10.alphaToCoverage, this.premultipliedAlpha = e10.premultipliedAlpha, this.forceSinglePass = e10.forceSinglePass, this.visible = e10.visible, this.toneMapped = e10.toneMapped, this.userData = JSON.parse(JSON.stringify(e10.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(e10) {
      true === e10 && this.version++;
    }
  }
  let e4 = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, e5 = { h: 0, s: 0, l: 0 }, e6 = { h: 0, s: 0, l: 0 };
  function e7(e10, t10, n10) {
    return (n10 < 0 && (n10 += 1), n10 > 1 && (n10 -= 1), n10 < 1 / 6) ? e10 + (t10 - e10) * 6 * n10 : n10 < 0.5 ? t10 : n10 < 2 / 3 ? e10 + (t10 - e10) * 6 * (2 / 3 - n10) : e10;
  }
  class e8 {
    constructor(e10, t10, n10) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e10, t10, n10);
    }
    set(e10, t10, n10) {
      return void 0 === t10 && void 0 === n10 ? e10 && e10.isColor ? this.copy(e10) : "number" == typeof e10 ? this.setHex(e10) : "string" == typeof e10 && this.setStyle(e10) : this.setRGB(e10, t10, n10), this;
    }
    setScalar(e10) {
      return this.r = e10, this.g = e10, this.b = e10, this;
    }
    setHex(e10, t10 = r) {
      return e10 = Math.floor(e10), this.r = (e10 >> 16 & 255) / 255, this.g = (e10 >> 8 & 255) / 255, this.b = (255 & e10) / 255, P.toWorkingColorSpace(this, t10), this;
    }
    setRGB(e10, t10, n10, i10 = P.workingColorSpace) {
      return this.r = e10, this.g = t10, this.b = n10, P.toWorkingColorSpace(this, i10), this;
    }
    setHSL(e10, t10, n10, i10 = P.workingColorSpace) {
      if (e10 = (e10 % 1 + 1) % 1, t10 = p(t10, 0, 1), n10 = p(n10, 0, 1), 0 === t10)
        this.r = this.g = this.b = n10;
      else {
        let i11 = n10 <= 0.5 ? n10 * (1 + t10) : n10 + t10 - n10 * t10, r10 = 2 * n10 - i11;
        this.r = e7(r10, i11, e10 + 1 / 3), this.g = e7(r10, i11, e10), this.b = e7(r10, i11, e10 - 1 / 3);
      }
      return P.toWorkingColorSpace(this, i10), this;
    }
    setStyle(e10, t10 = r) {
      let n10;
      function i10(t11) {
        void 0 !== t11 && 1 > parseFloat(t11) && console.warn("THREE.Color: Alpha component of " + e10 + " will be ignored.");
      }
      if (n10 = /^(\w+)\(([^\)]*)\)/.exec(e10)) {
        let r10;
        let a2 = n10[1], s2 = n10[2];
        switch (a2) {
          case "rgb":
          case "rgba":
            if (r10 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2))
              return i10(r10[4]), this.setRGB(Math.min(255, parseInt(r10[1], 10)) / 255, Math.min(255, parseInt(r10[2], 10)) / 255, Math.min(255, parseInt(r10[3], 10)) / 255, t10);
            if (r10 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2))
              return i10(r10[4]), this.setRGB(Math.min(100, parseInt(r10[1], 10)) / 100, Math.min(100, parseInt(r10[2], 10)) / 100, Math.min(100, parseInt(r10[3], 10)) / 100, t10);
            break;
          case "hsl":
          case "hsla":
            if (r10 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2))
              return i10(r10[4]), this.setHSL(parseFloat(r10[1]) / 360, parseFloat(r10[2]) / 100, parseFloat(r10[3]) / 100, t10);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + e10);
        }
      } else if (n10 = /^\#([A-Fa-f\d]+)$/.exec(e10)) {
        let i11 = n10[1], r10 = i11.length;
        if (3 === r10)
          return this.setRGB(parseInt(i11.charAt(0), 16) / 15, parseInt(i11.charAt(1), 16) / 15, parseInt(i11.charAt(2), 16) / 15, t10);
        if (6 === r10)
          return this.setHex(parseInt(i11, 16), t10);
        console.warn("THREE.Color: Invalid hex color " + e10);
      } else if (e10 && e10.length > 0)
        return this.setColorName(e10, t10);
      return this;
    }
    setColorName(e10, t10 = r) {
      let n10 = e4[e10.toLowerCase()];
      return void 0 !== n10 ? this.setHex(n10, t10) : console.warn("THREE.Color: Unknown color " + e10), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e10) {
      return this.r = e10.r, this.g = e10.g, this.b = e10.b, this;
    }
    copySRGBToLinear(e10) {
      return this.r = b(e10.r), this.g = b(e10.g), this.b = b(e10.b), this;
    }
    copyLinearToSRGB(e10) {
      return this.r = A(e10.r), this.g = A(e10.g), this.b = A(e10.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e10 = r) {
      return P.fromWorkingColorSpace(e9.copy(this), e10), 65536 * Math.round(p(255 * e9.r, 0, 255)) + 256 * Math.round(p(255 * e9.g, 0, 255)) + Math.round(p(255 * e9.b, 0, 255));
    }
    getHexString(e10 = r) {
      return ("000000" + this.getHex(e10).toString(16)).slice(-6);
    }
    getHSL(e10, t10 = P.workingColorSpace) {
      let n10, i10;
      P.fromWorkingColorSpace(e9.copy(this), t10);
      let r10 = e9.r, a2 = e9.g, s2 = e9.b, o2 = Math.max(r10, a2, s2), l2 = Math.min(r10, a2, s2), h2 = (l2 + o2) / 2;
      if (l2 === o2)
        n10 = 0, i10 = 0;
      else {
        let e11 = o2 - l2;
        switch (i10 = h2 <= 0.5 ? e11 / (o2 + l2) : e11 / (2 - o2 - l2), o2) {
          case r10:
            n10 = (a2 - s2) / e11 + (a2 < s2 ? 6 : 0);
            break;
          case a2:
            n10 = (s2 - r10) / e11 + 2;
            break;
          case s2:
            n10 = (r10 - a2) / e11 + 4;
        }
        n10 /= 6;
      }
      return e10.h = n10, e10.s = i10, e10.l = h2, e10;
    }
    getRGB(e10, t10 = P.workingColorSpace) {
      return P.fromWorkingColorSpace(e9.copy(this), t10), e10.r = e9.r, e10.g = e9.g, e10.b = e9.b, e10;
    }
    getStyle(e10 = r) {
      P.fromWorkingColorSpace(e9.copy(this), e10);
      let t10 = e9.r, n10 = e9.g, i10 = e9.b;
      return e10 !== r ? `color(${e10} ${t10.toFixed(3)} ${n10.toFixed(3)} ${i10.toFixed(3)})` : `rgb(${Math.round(255 * t10)},${Math.round(255 * n10)},${Math.round(255 * i10)})`;
    }
    offsetHSL(e10, t10, n10) {
      return this.getHSL(e5), e5.h += e10, e5.s += t10, e5.l += n10, this.setHSL(e5.h, e5.s, e5.l), this;
    }
    add(e10) {
      return this.r += e10.r, this.g += e10.g, this.b += e10.b, this;
    }
    addColors(e10, t10) {
      return this.r = e10.r + t10.r, this.g = e10.g + t10.g, this.b = e10.b + t10.b, this;
    }
    addScalar(e10) {
      return this.r += e10, this.g += e10, this.b += e10, this;
    }
    sub(e10) {
      return this.r = Math.max(0, this.r - e10.r), this.g = Math.max(0, this.g - e10.g), this.b = Math.max(0, this.b - e10.b), this;
    }
    multiply(e10) {
      return this.r *= e10.r, this.g *= e10.g, this.b *= e10.b, this;
    }
    multiplyScalar(e10) {
      return this.r *= e10, this.g *= e10, this.b *= e10, this;
    }
    lerp(e10, t10) {
      return this.r += (e10.r - this.r) * t10, this.g += (e10.g - this.g) * t10, this.b += (e10.b - this.b) * t10, this;
    }
    lerpColors(e10, t10, n10) {
      return this.r = e10.r + (t10.r - e10.r) * n10, this.g = e10.g + (t10.g - e10.g) * n10, this.b = e10.b + (t10.b - e10.b) * n10, this;
    }
    lerpHSL(e10, t10) {
      this.getHSL(e5), e10.getHSL(e6);
      let n10 = (1 - t10) * e5.h + t10 * e6.h, i10 = (1 - t10) * e5.s + t10 * e6.s, r10 = (1 - t10) * e5.l + t10 * e6.l;
      return this.setHSL(n10, i10, r10), this;
    }
    setFromVector3(e10) {
      return this.r = e10.x, this.g = e10.y, this.b = e10.z, this;
    }
    applyMatrix3(e10) {
      let t10 = this.r, n10 = this.g, i10 = this.b, r10 = e10.elements;
      return this.r = r10[0] * t10 + r10[3] * n10 + r10[6] * i10, this.g = r10[1] * t10 + r10[4] * n10 + r10[7] * i10, this.b = r10[2] * t10 + r10[5] * n10 + r10[8] * i10, this;
    }
    equals(e10) {
      return e10.r === this.r && e10.g === this.g && e10.b === this.b;
    }
    fromArray(e10, t10 = 0) {
      return this.r = e10[t10], this.g = e10[t10 + 1], this.b = e10[t10 + 2], this;
    }
    toArray(e10 = [], t10 = 0) {
      return e10[t10] = this.r, e10[t10 + 1] = this.g, e10[t10 + 2] = this.b, e10;
    }
    fromBufferAttribute(e10, t10) {
      return this.r = e10.getX(t10), this.g = e10.getY(t10), this.b = e10.getZ(t10), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  let e9 = new e8();
  e8.NAMES = e4;
  class te extends e3 {
    constructor(e10) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new e8(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e10);
    }
    copy(e10) {
      return super.copy(e10), this.color.copy(e10.color), this.map = e10.map, this.lightMap = e10.lightMap, this.lightMapIntensity = e10.lightMapIntensity, this.aoMap = e10.aoMap, this.aoMapIntensity = e10.aoMapIntensity, this.specularMap = e10.specularMap, this.alphaMap = e10.alphaMap, this.envMap = e10.envMap, this.combine = e10.combine, this.reflectivity = e10.reflectivity, this.refractionRatio = e10.refractionRatio, this.wireframe = e10.wireframe, this.wireframeLinewidth = e10.wireframeLinewidth, this.wireframeLinecap = e10.wireframeLinecap, this.wireframeLinejoin = e10.wireframeLinejoin, this.fog = e10.fog, this;
    }
  }
  let tt = new H(), tn = new v();
  class ti {
    constructor(e10, t10, n10 = false) {
      if (Array.isArray(e10))
        throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, this.name = "", this.array = e10, this.itemSize = t10, this.count = void 0 !== e10 ? e10.length / t10 : 0, this.normalized = n10, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.gpuType = 1015, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(e10) {
      true === e10 && this.version++;
    }
    setUsage(e10) {
      return this.usage = e10, this;
    }
    copy(e10) {
      return this.name = e10.name, this.array = new e10.array.constructor(e10.array), this.itemSize = e10.itemSize, this.count = e10.count, this.normalized = e10.normalized, this.usage = e10.usage, this.gpuType = e10.gpuType, this;
    }
    copyAt(e10, t10, n10) {
      e10 *= this.itemSize, n10 *= t10.itemSize;
      for (let i10 = 0, r10 = this.itemSize; i10 < r10; i10++)
        this.array[e10 + i10] = t10.array[n10 + i10];
      return this;
    }
    copyArray(e10) {
      return this.array.set(e10), this;
    }
    applyMatrix3(e10) {
      if (2 === this.itemSize)
        for (let t10 = 0, n10 = this.count; t10 < n10; t10++)
          tn.fromBufferAttribute(this, t10), tn.applyMatrix3(e10), this.setXY(t10, tn.x, tn.y);
      else if (3 === this.itemSize)
        for (let t10 = 0, n10 = this.count; t10 < n10; t10++)
          tt.fromBufferAttribute(this, t10), tt.applyMatrix3(e10), this.setXYZ(t10, tt.x, tt.y, tt.z);
      return this;
    }
    applyMatrix4(e10) {
      for (let t10 = 0, n10 = this.count; t10 < n10; t10++)
        tt.fromBufferAttribute(this, t10), tt.applyMatrix4(e10), this.setXYZ(t10, tt.x, tt.y, tt.z);
      return this;
    }
    applyNormalMatrix(e10) {
      for (let t10 = 0, n10 = this.count; t10 < n10; t10++)
        tt.fromBufferAttribute(this, t10), tt.applyNormalMatrix(e10), this.setXYZ(t10, tt.x, tt.y, tt.z);
      return this;
    }
    transformDirection(e10) {
      for (let t10 = 0, n10 = this.count; t10 < n10; t10++)
        tt.fromBufferAttribute(this, t10), tt.transformDirection(e10), this.setXYZ(t10, tt.x, tt.y, tt.z);
      return this;
    }
    set(e10, t10 = 0) {
      return this.array.set(e10, t10), this;
    }
    getX(e10) {
      let t10 = this.array[e10 * this.itemSize];
      return this.normalized && (t10 = g(t10, this.array)), t10;
    }
    setX(e10, t10) {
      return this.normalized && (t10 = _(t10, this.array)), this.array[e10 * this.itemSize] = t10, this;
    }
    getY(e10) {
      let t10 = this.array[e10 * this.itemSize + 1];
      return this.normalized && (t10 = g(t10, this.array)), t10;
    }
    setY(e10, t10) {
      return this.normalized && (t10 = _(t10, this.array)), this.array[e10 * this.itemSize + 1] = t10, this;
    }
    getZ(e10) {
      let t10 = this.array[e10 * this.itemSize + 2];
      return this.normalized && (t10 = g(t10, this.array)), t10;
    }
    setZ(e10, t10) {
      return this.normalized && (t10 = _(t10, this.array)), this.array[e10 * this.itemSize + 2] = t10, this;
    }
    getW(e10) {
      let t10 = this.array[e10 * this.itemSize + 3];
      return this.normalized && (t10 = g(t10, this.array)), t10;
    }
    setW(e10, t10) {
      return this.normalized && (t10 = _(t10, this.array)), this.array[e10 * this.itemSize + 3] = t10, this;
    }
    setXY(e10, t10, n10) {
      return e10 *= this.itemSize, this.normalized && (t10 = _(t10, this.array), n10 = _(n10, this.array)), this.array[e10 + 0] = t10, this.array[e10 + 1] = n10, this;
    }
    setXYZ(e10, t10, n10, i10) {
      return e10 *= this.itemSize, this.normalized && (t10 = _(t10, this.array), n10 = _(n10, this.array), i10 = _(i10, this.array)), this.array[e10 + 0] = t10, this.array[e10 + 1] = n10, this.array[e10 + 2] = i10, this;
    }
    setXYZW(e10, t10, n10, i10, r10) {
      return e10 *= this.itemSize, this.normalized && (t10 = _(t10, this.array), n10 = _(n10, this.array), i10 = _(i10, this.array), r10 = _(r10, this.array)), this.array[e10 + 0] = t10, this.array[e10 + 1] = n10, this.array[e10 + 2] = i10, this.array[e10 + 3] = r10, this;
    }
    onUpload(e10) {
      return this.onUploadCallback = e10, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let e10 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (e10.name = this.name), 35044 !== this.usage && (e10.usage = this.usage), (0 !== this.updateRange.offset || -1 !== this.updateRange.count) && (e10.updateRange = this.updateRange), e10;
    }
    copyColorsArray() {
      console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
    }
    copyVector2sArray() {
      console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
    }
    copyVector3sArray() {
      console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
    }
    copyVector4sArray() {
      console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
    }
  }
  class tr extends ti {
    constructor(e10, t10, n10) {
      super(new Uint16Array(e10), t10, n10);
    }
  }
  class ta extends ti {
    constructor(e10, t10, n10) {
      super(new Uint32Array(e10), t10, n10);
    }
  }
  class ts extends ti {
    constructor(e10, t10, n10) {
      super(new Float32Array(e10), t10, n10);
    }
  }
  let to = 0, tl = new ev(), th = new ek(), tu = new H(), tc = new X(), td = new X(), tp = new H();
  class tf extends l {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: to++ }), this.uuid = d(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(e10) {
      return Array.isArray(e10) ? this.index = new (M(e10) ? ta : tr)(e10, 1) : this.index = e10, this;
    }
    getAttribute(e10) {
      return this.attributes[e10];
    }
    setAttribute(e10, t10) {
      return this.attributes[e10] = t10, this;
    }
    deleteAttribute(e10) {
      return delete this.attributes[e10], this;
    }
    hasAttribute(e10) {
      return void 0 !== this.attributes[e10];
    }
    addGroup(e10, t10, n10 = 0) {
      this.groups.push({ start: e10, count: t10, materialIndex: n10 });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e10, t10) {
      this.drawRange.start = e10, this.drawRange.count = t10;
    }
    applyMatrix4(e10) {
      let t10 = this.attributes.position;
      void 0 !== t10 && (t10.applyMatrix4(e10), t10.needsUpdate = true);
      let n10 = this.attributes.normal;
      if (void 0 !== n10) {
        let t11 = new x().getNormalMatrix(e10);
        n10.applyNormalMatrix(t11), n10.needsUpdate = true;
      }
      let i10 = this.attributes.tangent;
      return void 0 !== i10 && (i10.transformDirection(e10), i10.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(e10) {
      return tl.makeRotationFromQuaternion(e10), this.applyMatrix4(tl), this;
    }
    rotateX(e10) {
      return tl.makeRotationX(e10), this.applyMatrix4(tl), this;
    }
    rotateY(e10) {
      return tl.makeRotationY(e10), this.applyMatrix4(tl), this;
    }
    rotateZ(e10) {
      return tl.makeRotationZ(e10), this.applyMatrix4(tl), this;
    }
    translate(e10, t10, n10) {
      return tl.makeTranslation(e10, t10, n10), this.applyMatrix4(tl), this;
    }
    scale(e10, t10, n10) {
      return tl.makeScale(e10, t10, n10), this.applyMatrix4(tl), this;
    }
    lookAt(e10) {
      return th.lookAt(e10), th.updateMatrix(), this.applyMatrix4(th.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(tu).negate(), this.translate(tu.x, tu.y, tu.z), this;
    }
    setFromPoints(e10) {
      let t10 = [];
      for (let n10 = 0, i10 = e10.length; n10 < i10; n10++) {
        let i11 = e10[n10];
        t10.push(i11.x, i11.y, i11.z || 0);
      }
      return this.setAttribute("position", new ts(t10, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new X());
      let e10 = this.attributes.position, t10 = this.morphAttributes.position;
      if (e10 && e10.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new H(-1 / 0, -1 / 0, -1 / 0), new H(Infinity, Infinity, Infinity));
        return;
      }
      if (void 0 !== e10) {
        if (this.boundingBox.setFromBufferAttribute(e10), t10)
          for (let e11 = 0, n10 = t10.length; e11 < n10; e11++) {
            let n11 = t10[e11];
            tc.setFromBufferAttribute(n11), this.morphTargetsRelative ? (tp.addVectors(this.boundingBox.min, tc.min), this.boundingBox.expandByPoint(tp), tp.addVectors(this.boundingBox.max, tc.max), this.boundingBox.expandByPoint(tp)) : (this.boundingBox.expandByPoint(tc.min), this.boundingBox.expandByPoint(tc.max));
          }
      } else
        this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new eh());
      let e10 = this.attributes.position, t10 = this.morphAttributes.position;
      if (e10 && e10.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new H(), 1 / 0);
        return;
      }
      if (e10) {
        let n10 = this.boundingSphere.center;
        if (tc.setFromBufferAttribute(e10), t10)
          for (let e11 = 0, n11 = t10.length; e11 < n11; e11++) {
            let n12 = t10[e11];
            td.setFromBufferAttribute(n12), this.morphTargetsRelative ? (tp.addVectors(tc.min, td.min), tc.expandByPoint(tp), tp.addVectors(tc.max, td.max), tc.expandByPoint(tp)) : (tc.expandByPoint(td.min), tc.expandByPoint(td.max));
          }
        tc.getCenter(n10);
        let i10 = 0;
        for (let t11 = 0, r10 = e10.count; t11 < r10; t11++)
          tp.fromBufferAttribute(e10, t11), i10 = Math.max(i10, n10.distanceToSquared(tp));
        if (t10)
          for (let r10 = 0, a2 = t10.length; r10 < a2; r10++) {
            let a3 = t10[r10], s2 = this.morphTargetsRelative;
            for (let t11 = 0, r11 = a3.count; t11 < r11; t11++)
              tp.fromBufferAttribute(a3, t11), s2 && (tu.fromBufferAttribute(e10, t11), tp.add(tu)), i10 = Math.max(i10, n10.distanceToSquared(tp));
          }
        this.boundingSphere.radius = Math.sqrt(i10), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      let e10 = this.index, t10 = this.attributes;
      if (null === e10 || void 0 === t10.position || void 0 === t10.normal || void 0 === t10.uv) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      let n10 = e10.array, i10 = t10.position.array, r10 = t10.normal.array, a2 = t10.uv.array, s2 = i10.length / 3;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new ti(new Float32Array(4 * s2), 4));
      let o2 = this.getAttribute("tangent").array, l2 = [], h2 = [];
      for (let e11 = 0; e11 < s2; e11++)
        l2[e11] = new H(), h2[e11] = new H();
      let u2 = new H(), c2 = new H(), d2 = new H(), p2 = new v(), f2 = new v(), m2 = new v(), g2 = new H(), _2 = new H(), x2 = this.groups;
      0 === x2.length && (x2 = [{ start: 0, count: n10.length }]);
      for (let e11 = 0, t11 = x2.length; e11 < t11; ++e11) {
        let t12 = x2[e11], r11 = t12.start, s3 = t12.count;
        for (let e12 = r11, t13 = r11 + s3; e12 < t13; e12 += 3)
          !function(e13, t14, n11) {
            u2.fromArray(i10, 3 * e13), c2.fromArray(i10, 3 * t14), d2.fromArray(i10, 3 * n11), p2.fromArray(a2, 2 * e13), f2.fromArray(a2, 2 * t14), m2.fromArray(a2, 2 * n11), c2.sub(u2), d2.sub(u2), f2.sub(p2), m2.sub(p2);
            let r12 = 1 / (f2.x * m2.y - m2.x * f2.y);
            isFinite(r12) && (g2.copy(c2).multiplyScalar(m2.y).addScaledVector(d2, -f2.y).multiplyScalar(r12), _2.copy(d2).multiplyScalar(f2.x).addScaledVector(c2, -m2.x).multiplyScalar(r12), l2[e13].add(g2), l2[t14].add(g2), l2[n11].add(g2), h2[e13].add(_2), h2[t14].add(_2), h2[n11].add(_2));
          }(n10[e12 + 0], n10[e12 + 1], n10[e12 + 2]);
      }
      let y2 = new H(), M2 = new H(), S2 = new H(), E2 = new H();
      function T2(e11) {
        S2.fromArray(r10, 3 * e11), E2.copy(S2);
        let t11 = l2[e11];
        y2.copy(t11), y2.sub(S2.multiplyScalar(S2.dot(t11))).normalize(), M2.crossVectors(E2, t11);
        let n11 = M2.dot(h2[e11]);
        o2[4 * e11] = y2.x, o2[4 * e11 + 1] = y2.y, o2[4 * e11 + 2] = y2.z, o2[4 * e11 + 3] = n11 < 0 ? -1 : 1;
      }
      for (let e11 = 0, t11 = x2.length; e11 < t11; ++e11) {
        let t12 = x2[e11], i11 = t12.start, r11 = t12.count;
        for (let e12 = i11, t13 = i11 + r11; e12 < t13; e12 += 3)
          T2(n10[e12 + 0]), T2(n10[e12 + 1]), T2(n10[e12 + 2]);
      }
    }
    computeVertexNormals() {
      let e10 = this.index, t10 = this.getAttribute("position");
      if (void 0 !== t10) {
        let n10 = this.getAttribute("normal");
        if (void 0 === n10)
          n10 = new ti(new Float32Array(3 * t10.count), 3), this.setAttribute("normal", n10);
        else
          for (let e11 = 0, t11 = n10.count; e11 < t11; e11++)
            n10.setXYZ(e11, 0, 0, 0);
        let i10 = new H(), r10 = new H(), a2 = new H(), s2 = new H(), o2 = new H(), l2 = new H(), h2 = new H(), u2 = new H();
        if (e10)
          for (let c2 = 0, d2 = e10.count; c2 < d2; c2 += 3) {
            let d3 = e10.getX(c2 + 0), p2 = e10.getX(c2 + 1), f2 = e10.getX(c2 + 2);
            i10.fromBufferAttribute(t10, d3), r10.fromBufferAttribute(t10, p2), a2.fromBufferAttribute(t10, f2), h2.subVectors(a2, r10), u2.subVectors(i10, r10), h2.cross(u2), s2.fromBufferAttribute(n10, d3), o2.fromBufferAttribute(n10, p2), l2.fromBufferAttribute(n10, f2), s2.add(h2), o2.add(h2), l2.add(h2), n10.setXYZ(d3, s2.x, s2.y, s2.z), n10.setXYZ(p2, o2.x, o2.y, o2.z), n10.setXYZ(f2, l2.x, l2.y, l2.z);
          }
        else
          for (let e11 = 0, s3 = t10.count; e11 < s3; e11 += 3)
            i10.fromBufferAttribute(t10, e11 + 0), r10.fromBufferAttribute(t10, e11 + 1), a2.fromBufferAttribute(t10, e11 + 2), h2.subVectors(a2, r10), u2.subVectors(i10, r10), h2.cross(u2), n10.setXYZ(e11 + 0, h2.x, h2.y, h2.z), n10.setXYZ(e11 + 1, h2.x, h2.y, h2.z), n10.setXYZ(e11 + 2, h2.x, h2.y, h2.z);
        this.normalizeNormals(), n10.needsUpdate = true;
      }
    }
    merge() {
      return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."), this;
    }
    normalizeNormals() {
      let e10 = this.attributes.normal;
      for (let t10 = 0, n10 = e10.count; t10 < n10; t10++)
        tp.fromBufferAttribute(e10, t10), tp.normalize(), e10.setXYZ(t10, tp.x, tp.y, tp.z);
    }
    toNonIndexed() {
      function e10(e11, t11) {
        let n11 = e11.array, i11 = e11.itemSize, r11 = e11.normalized, a3 = new n11.constructor(t11.length * i11), s2 = 0, o2 = 0;
        for (let r12 = 0, l2 = t11.length; r12 < l2; r12++) {
          s2 = e11.isInterleavedBufferAttribute ? t11[r12] * e11.data.stride + e11.offset : t11[r12] * i11;
          for (let e12 = 0; e12 < i11; e12++)
            a3[o2++] = n11[s2++];
        }
        return new ti(a3, i11, r11);
      }
      if (null === this.index)
        return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      let t10 = new tf(), n10 = this.index.array, i10 = this.attributes;
      for (let r11 in i10) {
        let a3 = i10[r11], s2 = e10(a3, n10);
        t10.setAttribute(r11, s2);
      }
      let r10 = this.morphAttributes;
      for (let i11 in r10) {
        let a3 = [], s2 = r10[i11];
        for (let t11 = 0, i12 = s2.length; t11 < i12; t11++) {
          let i13 = s2[t11], r11 = e10(i13, n10);
          a3.push(r11);
        }
        t10.morphAttributes[i11] = a3;
      }
      t10.morphTargetsRelative = this.morphTargetsRelative;
      let a2 = this.groups;
      for (let e11 = 0, n11 = a2.length; e11 < n11; e11++) {
        let n12 = a2[e11];
        t10.addGroup(n12.start, n12.count, n12.materialIndex);
      }
      return t10;
    }
    toJSON() {
      let e10 = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (e10.uuid = this.uuid, e10.type = this.type, "" !== this.name && (e10.name = this.name), Object.keys(this.userData).length > 0 && (e10.userData = this.userData), void 0 !== this.parameters) {
        let t11 = this.parameters;
        for (let n11 in t11)
          void 0 !== t11[n11] && (e10[n11] = t11[n11]);
        return e10;
      }
      e10.data = { attributes: {} };
      let t10 = this.index;
      null !== t10 && (e10.data.index = { type: t10.array.constructor.name, array: Array.prototype.slice.call(t10.array) });
      let n10 = this.attributes;
      for (let t11 in n10) {
        let i11 = n10[t11];
        e10.data.attributes[t11] = i11.toJSON(e10.data);
      }
      let i10 = {}, r10 = false;
      for (let t11 in this.morphAttributes) {
        let n11 = this.morphAttributes[t11], a3 = [];
        for (let t12 = 0, i11 = n11.length; t12 < i11; t12++) {
          let i12 = n11[t12];
          a3.push(i12.toJSON(e10.data));
        }
        a3.length > 0 && (i10[t11] = a3, r10 = true);
      }
      r10 && (e10.data.morphAttributes = i10, e10.data.morphTargetsRelative = this.morphTargetsRelative);
      let a2 = this.groups;
      a2.length > 0 && (e10.data.groups = JSON.parse(JSON.stringify(a2)));
      let s2 = this.boundingSphere;
      return null !== s2 && (e10.data.boundingSphere = { center: s2.center.toArray(), radius: s2.radius }), e10;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e10) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      let t10 = {};
      this.name = e10.name;
      let n10 = e10.index;
      null !== n10 && this.setIndex(n10.clone(t10));
      let i10 = e10.attributes;
      for (let e11 in i10) {
        let n11 = i10[e11];
        this.setAttribute(e11, n11.clone(t10));
      }
      let r10 = e10.morphAttributes;
      for (let e11 in r10) {
        let n11 = [], i11 = r10[e11];
        for (let e12 = 0, r11 = i11.length; e12 < r11; e12++)
          n11.push(i11[e12].clone(t10));
        this.morphAttributes[e11] = n11;
      }
      this.morphTargetsRelative = e10.morphTargetsRelative;
      let a2 = e10.groups;
      for (let e11 = 0, t11 = a2.length; e11 < t11; e11++) {
        let t12 = a2[e11];
        this.addGroup(t12.start, t12.count, t12.materialIndex);
      }
      let s2 = e10.boundingBox;
      null !== s2 && (this.boundingBox = s2.clone());
      let o2 = e10.boundingSphere;
      return null !== o2 && (this.boundingSphere = o2.clone()), this.drawRange.start = e10.drawRange.start, this.drawRange.count = e10.drawRange.count, this.userData = e10.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  let tm = new ev(), tg = new e_(), t_ = new eh(), tv = new H(), tx = new H(), ty = new H(), tM = new H(), tS = new H(), tE = new H(), tT = new v(), tb = new v(), tA = new v(), tw = new H(), tR = new H(), tC = new H(), tL = new H(), tP = new H();
  class tU extends ek {
    constructor(e10 = new tf(), t10 = new te()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = e10, this.material = t10, this.updateMorphTargets();
    }
    copy(e10, t10) {
      return super.copy(e10, t10), void 0 !== e10.morphTargetInfluences && (this.morphTargetInfluences = e10.morphTargetInfluences.slice()), void 0 !== e10.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e10.morphTargetDictionary)), this.material = e10.material, this.geometry = e10.geometry, this;
    }
    updateMorphTargets() {
      let e10 = this.geometry, t10 = e10.morphAttributes, n10 = Object.keys(t10);
      if (n10.length > 0) {
        let e11 = t10[n10[0]];
        if (void 0 !== e11) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t11 = 0, n11 = e11.length; t11 < n11; t11++) {
            let n12 = e11[t11].name || String(t11);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n12] = t11;
          }
        }
      }
    }
    getVertexPosition(e10, t10) {
      let n10 = this.geometry, i10 = n10.attributes.position, r10 = n10.morphAttributes.position, a2 = n10.morphTargetsRelative;
      t10.fromBufferAttribute(i10, e10);
      let s2 = this.morphTargetInfluences;
      if (r10 && s2) {
        tE.set(0, 0, 0);
        for (let n11 = 0, i11 = r10.length; n11 < i11; n11++) {
          let i12 = s2[n11], o2 = r10[n11];
          0 !== i12 && (tS.fromBufferAttribute(o2, e10), a2 ? tE.addScaledVector(tS, i12) : tE.addScaledVector(tS.sub(t10), i12));
        }
        t10.add(tE);
      }
      return t10;
    }
    raycast(e10, t10) {
      let n10 = this.geometry, i10 = this.material, r10 = this.matrixWorld;
      if (void 0 !== i10) {
        if (null === n10.boundingSphere && n10.computeBoundingSphere(), t_.copy(n10.boundingSphere), t_.applyMatrix4(r10), tg.copy(e10.ray).recast(e10.near), false === t_.containsPoint(tg.origin) && (null === tg.intersectSphere(t_, tv) || tg.origin.distanceToSquared(tv) > (e10.far - e10.near) ** 2) || (tm.copy(r10).invert(), tg.copy(e10.ray).applyMatrix4(tm), null !== n10.boundingBox && false === tg.intersectsBox(n10.boundingBox)))
          return;
        this._computeIntersections(e10, t10, tg);
      }
    }
    _computeIntersections(e10, t10, n10) {
      let i10;
      let r10 = this.geometry, a2 = this.material, s2 = r10.index, o2 = r10.attributes.position, l2 = r10.attributes.uv, h2 = r10.attributes.uv1, u2 = r10.attributes.normal, c2 = r10.groups, d2 = r10.drawRange;
      if (null !== s2) {
        if (Array.isArray(a2))
          for (let r11 = 0, o3 = c2.length; r11 < o3; r11++) {
            let o4 = c2[r11], p2 = a2[o4.materialIndex], f2 = Math.max(o4.start, d2.start), m2 = Math.min(s2.count, Math.min(o4.start + o4.count, d2.start + d2.count));
            for (let r12 = f2; r12 < m2; r12 += 3) {
              let a3 = s2.getX(r12), c3 = s2.getX(r12 + 1), d3 = s2.getX(r12 + 2);
              (i10 = tN(this, p2, e10, n10, l2, h2, u2, a3, c3, d3)) && (i10.faceIndex = Math.floor(r12 / 3), i10.face.materialIndex = o4.materialIndex, t10.push(i10));
            }
          }
        else {
          let r11 = Math.max(0, d2.start), o3 = Math.min(s2.count, d2.start + d2.count);
          for (let c3 = r11; c3 < o3; c3 += 3) {
            let r12 = s2.getX(c3), o4 = s2.getX(c3 + 1), d3 = s2.getX(c3 + 2);
            (i10 = tN(this, a2, e10, n10, l2, h2, u2, r12, o4, d3)) && (i10.faceIndex = Math.floor(c3 / 3), t10.push(i10));
          }
        }
      } else if (void 0 !== o2) {
        if (Array.isArray(a2))
          for (let r11 = 0, s3 = c2.length; r11 < s3; r11++) {
            let s4 = c2[r11], p2 = a2[s4.materialIndex], f2 = Math.max(s4.start, d2.start), m2 = Math.min(o2.count, Math.min(s4.start + s4.count, d2.start + d2.count));
            for (let r12 = f2; r12 < m2; r12 += 3) {
              let a3 = r12, o3 = r12 + 1, c3 = r12 + 2;
              (i10 = tN(this, p2, e10, n10, l2, h2, u2, a3, o3, c3)) && (i10.faceIndex = Math.floor(r12 / 3), i10.face.materialIndex = s4.materialIndex, t10.push(i10));
            }
          }
        else {
          let r11 = Math.max(0, d2.start), s3 = Math.min(o2.count, d2.start + d2.count);
          for (let o3 = r11; o3 < s3; o3 += 3) {
            let r12 = o3, s4 = o3 + 1, c3 = o3 + 2;
            (i10 = tN(this, a2, e10, n10, l2, h2, u2, r12, s4, c3)) && (i10.faceIndex = Math.floor(o3 / 3), t10.push(i10));
          }
        }
      }
    }
  }
  function tN(e10, t10, n10, i10, r10, a2, s2, o2, l2, h2) {
    e10.getVertexPosition(o2, tx), e10.getVertexPosition(l2, ty), e10.getVertexPosition(h2, tM);
    let u2 = function(e11, t11, n11, i11, r11, a3, s3, o3) {
      if (null === (1 === t11.side ? i11.intersectTriangle(s3, a3, r11, true, o3) : i11.intersectTriangle(r11, a3, s3, 0 === t11.side, o3)))
        return null;
      tP.copy(o3), tP.applyMatrix4(e11.matrixWorld);
      let l3 = n11.ray.origin.distanceTo(tP);
      return l3 < n11.near || l3 > n11.far ? null : { distance: l3, point: tP.clone(), object: e11 };
    }(e10, t10, n10, i10, tx, ty, tM, tL);
    if (u2) {
      r10 && (tT.fromBufferAttribute(r10, o2), tb.fromBufferAttribute(r10, l2), tA.fromBufferAttribute(r10, h2), u2.uv = e1.getInterpolation(tL, tx, ty, tM, tT, tb, tA, new v())), a2 && (tT.fromBufferAttribute(a2, o2), tb.fromBufferAttribute(a2, l2), tA.fromBufferAttribute(a2, h2), u2.uv1 = e1.getInterpolation(tL, tx, ty, tM, tT, tb, tA, new v()), u2.uv2 = u2.uv1), s2 && (tw.fromBufferAttribute(s2, o2), tR.fromBufferAttribute(s2, l2), tC.fromBufferAttribute(s2, h2), u2.normal = e1.getInterpolation(tL, tx, ty, tM, tw, tR, tC, new H()), u2.normal.dot(i10.direction) > 0 && u2.normal.multiplyScalar(-1));
      let e11 = { a: o2, b: l2, c: h2, normal: new H(), materialIndex: 0 };
      e1.getNormal(tx, ty, tM, e11.normal), u2.face = e11;
    }
    return u2;
  }
  class tD extends tf {
    constructor(e10 = 1, t10 = 1, n10 = 1, i10 = 1, r10 = 1, a2 = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: e10, height: t10, depth: n10, widthSegments: i10, heightSegments: r10, depthSegments: a2 };
      let s2 = this;
      i10 = Math.floor(i10), r10 = Math.floor(r10), a2 = Math.floor(a2);
      let o2 = [], l2 = [], h2 = [], u2 = [], c2 = 0, d2 = 0;
      function p2(e11, t11, n11, i11, r11, a3, p3, f2, m2, g2, _2) {
        let v2 = a3 / m2, x2 = p3 / g2, y2 = a3 / 2, M2 = p3 / 2, S2 = f2 / 2, E2 = m2 + 1, T2 = g2 + 1, b2 = 0, A2 = 0, w2 = new H();
        for (let a4 = 0; a4 < T2; a4++) {
          let s3 = a4 * x2 - M2;
          for (let o3 = 0; o3 < E2; o3++) {
            let c3 = o3 * v2 - y2;
            w2[e11] = c3 * i11, w2[t11] = s3 * r11, w2[n11] = S2, l2.push(w2.x, w2.y, w2.z), w2[e11] = 0, w2[t11] = 0, w2[n11] = f2 > 0 ? 1 : -1, h2.push(w2.x, w2.y, w2.z), u2.push(o3 / m2), u2.push(1 - a4 / g2), b2 += 1;
          }
        }
        for (let e12 = 0; e12 < g2; e12++)
          for (let t12 = 0; t12 < m2; t12++) {
            let n12 = c2 + t12 + E2 * e12, i12 = c2 + t12 + E2 * (e12 + 1), r12 = c2 + (t12 + 1) + E2 * (e12 + 1), a4 = c2 + (t12 + 1) + E2 * e12;
            o2.push(n12, i12, a4), o2.push(i12, r12, a4), A2 += 6;
          }
        s2.addGroup(d2, A2, _2), d2 += A2, c2 += b2;
      }
      p2("z", "y", "x", -1, -1, n10, t10, e10, a2, r10, 0), p2("z", "y", "x", 1, -1, n10, t10, -e10, a2, r10, 1), p2("x", "z", "y", 1, 1, e10, n10, t10, i10, a2, 2), p2("x", "z", "y", 1, -1, e10, n10, -t10, i10, a2, 3), p2("x", "y", "z", 1, -1, e10, t10, n10, i10, r10, 4), p2("x", "y", "z", -1, -1, e10, t10, -n10, i10, r10, 5), this.setIndex(o2), this.setAttribute("position", new ts(l2, 3)), this.setAttribute("normal", new ts(h2, 3)), this.setAttribute("uv", new ts(u2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new tD(e10.width, e10.height, e10.depth, e10.widthSegments, e10.heightSegments, e10.depthSegments);
    }
  }
  function tI(e10) {
    let t10 = {};
    for (let n10 in e10)
      for (let i10 in t10[n10] = {}, e10[n10]) {
        let r10 = e10[n10][i10];
        r10 && (r10.isColor || r10.isMatrix3 || r10.isMatrix4 || r10.isVector2 || r10.isVector3 || r10.isVector4 || r10.isTexture || r10.isQuaternion) ? r10.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t10[n10][i10] = null) : t10[n10][i10] = r10.clone() : Array.isArray(r10) ? t10[n10][i10] = r10.slice() : t10[n10][i10] = r10;
      }
    return t10;
  }
  function tO(e10) {
    let t10 = {};
    for (let n10 = 0; n10 < e10.length; n10++) {
      let i10 = tI(e10[n10]);
      for (let e11 in i10)
        t10[e11] = i10[e11];
    }
    return t10;
  }
  function tF(e10) {
    return null === e10.getRenderTarget() ? e10.outputColorSpace : a;
  }
  let tz = { clone: tI, merge: tO };
  class tB extends e3 {
    constructor(e10) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== e10 && this.setValues(e10);
    }
    copy(e10) {
      return super.copy(e10), this.fragmentShader = e10.fragmentShader, this.vertexShader = e10.vertexShader, this.uniforms = tI(e10.uniforms), this.uniformsGroups = function(e11) {
        let t10 = [];
        for (let n10 = 0; n10 < e11.length; n10++)
          t10.push(e11[n10].clone());
        return t10;
      }(e10.uniformsGroups), this.defines = Object.assign({}, e10.defines), this.wireframe = e10.wireframe, this.wireframeLinewidth = e10.wireframeLinewidth, this.fog = e10.fog, this.lights = e10.lights, this.clipping = e10.clipping, this.extensions = Object.assign({}, e10.extensions), this.glslVersion = e10.glslVersion, this;
    }
    toJSON(e10) {
      let t10 = super.toJSON(e10);
      for (let n11 in t10.glslVersion = this.glslVersion, t10.uniforms = {}, this.uniforms) {
        let i10 = this.uniforms[n11], r10 = i10.value;
        r10 && r10.isTexture ? t10.uniforms[n11] = { type: "t", value: r10.toJSON(e10).uuid } : r10 && r10.isColor ? t10.uniforms[n11] = { type: "c", value: r10.getHex() } : r10 && r10.isVector2 ? t10.uniforms[n11] = { type: "v2", value: r10.toArray() } : r10 && r10.isVector3 ? t10.uniforms[n11] = { type: "v3", value: r10.toArray() } : r10 && r10.isVector4 ? t10.uniforms[n11] = { type: "v4", value: r10.toArray() } : r10 && r10.isMatrix3 ? t10.uniforms[n11] = { type: "m3", value: r10.toArray() } : r10 && r10.isMatrix4 ? t10.uniforms[n11] = { type: "m4", value: r10.toArray() } : t10.uniforms[n11] = { value: r10 };
      }
      Object.keys(this.defines).length > 0 && (t10.defines = this.defines), t10.vertexShader = this.vertexShader, t10.fragmentShader = this.fragmentShader, t10.lights = this.lights, t10.clipping = this.clipping;
      let n10 = {};
      for (let e11 in this.extensions)
        true === this.extensions[e11] && (n10[e11] = true);
      return Object.keys(n10).length > 0 && (t10.extensions = n10), t10;
    }
  }
  class tV extends ek {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ev(), this.projectionMatrix = new ev(), this.projectionMatrixInverse = new ev(), this.coordinateSystem = 2e3;
    }
    copy(e10, t10) {
      return super.copy(e10, t10), this.matrixWorldInverse.copy(e10.matrixWorldInverse), this.projectionMatrix.copy(e10.projectionMatrix), this.projectionMatrixInverse.copy(e10.projectionMatrixInverse), this.coordinateSystem = e10.coordinateSystem, this;
    }
    getWorldDirection(e10) {
      this.updateWorldMatrix(true, false);
      let t10 = this.matrixWorld.elements;
      return e10.set(-t10[8], -t10[9], -t10[10]).normalize();
    }
    updateMatrixWorld(e10) {
      super.updateMatrixWorld(e10), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e10, t10) {
      super.updateWorldMatrix(e10, t10), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class tG extends tV {
    constructor(e10 = 50, t10 = 1, n10 = 0.1, i10 = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e10, this.zoom = 1, this.near = n10, this.far = i10, this.focus = 10, this.aspect = t10, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e10, t10) {
      return super.copy(e10, t10), this.fov = e10.fov, this.zoom = e10.zoom, this.near = e10.near, this.far = e10.far, this.focus = e10.focus, this.aspect = e10.aspect, this.view = null === e10.view ? null : Object.assign({}, e10.view), this.filmGauge = e10.filmGauge, this.filmOffset = e10.filmOffset, this;
    }
    setFocalLength(e10) {
      let t10 = 0.5 * this.getFilmHeight() / e10;
      this.fov = 2 * c * Math.atan(t10), this.updateProjectionMatrix();
    }
    getFocalLength() {
      let e10 = Math.tan(0.5 * u * this.fov);
      return 0.5 * this.getFilmHeight() / e10;
    }
    getEffectiveFOV() {
      return 2 * c * Math.atan(Math.tan(0.5 * u * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e10, t10, n10, i10, r10, a2) {
      this.aspect = e10 / t10, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e10, this.view.fullHeight = t10, this.view.offsetX = n10, this.view.offsetY = i10, this.view.width = r10, this.view.height = a2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      let e10 = this.near, t10 = e10 * Math.tan(0.5 * u * this.fov) / this.zoom, n10 = 2 * t10, i10 = this.aspect * n10, r10 = -0.5 * i10, a2 = this.view;
      if (null !== this.view && this.view.enabled) {
        let e11 = a2.fullWidth, s3 = a2.fullHeight;
        r10 += a2.offsetX * i10 / e11, t10 -= a2.offsetY * n10 / s3, i10 *= a2.width / e11, n10 *= a2.height / s3;
      }
      let s2 = this.filmOffset;
      0 !== s2 && (r10 += e10 * s2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r10, r10 + i10, t10, t10 - n10, e10, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e10) {
      let t10 = super.toJSON(e10);
      return t10.object.fov = this.fov, t10.object.zoom = this.zoom, t10.object.near = this.near, t10.object.far = this.far, t10.object.focus = this.focus, t10.object.aspect = this.aspect, null !== this.view && (t10.object.view = Object.assign({}, this.view)), t10.object.filmGauge = this.filmGauge, t10.object.filmOffset = this.filmOffset, t10;
    }
  }
  class tH extends ek {
    constructor(e10, t10, n10) {
      super(), this.type = "CubeCamera", this.renderTarget = n10, this.coordinateSystem = null;
      let i10 = new tG(-90, 1, e10, t10);
      i10.layers = this.layers, this.add(i10);
      let r10 = new tG(-90, 1, e10, t10);
      r10.layers = this.layers, this.add(r10);
      let a2 = new tG(-90, 1, e10, t10);
      a2.layers = this.layers, this.add(a2);
      let s2 = new tG(-90, 1, e10, t10);
      s2.layers = this.layers, this.add(s2);
      let o2 = new tG(-90, 1, e10, t10);
      o2.layers = this.layers, this.add(o2);
      let l2 = new tG(-90, 1, e10, t10);
      l2.layers = this.layers, this.add(l2);
    }
    updateCoordinateSystem() {
      let e10 = this.coordinateSystem, t10 = this.children.concat(), [n10, i10, r10, a2, s2, o2] = t10;
      for (let e11 of t10)
        this.remove(e11);
      if (2e3 === e10)
        n10.up.set(0, 1, 0), n10.lookAt(1, 0, 0), i10.up.set(0, 1, 0), i10.lookAt(-1, 0, 0), r10.up.set(0, 0, -1), r10.lookAt(0, 1, 0), a2.up.set(0, 0, 1), a2.lookAt(0, -1, 0), s2.up.set(0, 1, 0), s2.lookAt(0, 0, 1), o2.up.set(0, 1, 0), o2.lookAt(0, 0, -1);
      else if (2001 === e10)
        n10.up.set(0, -1, 0), n10.lookAt(-1, 0, 0), i10.up.set(0, -1, 0), i10.lookAt(1, 0, 0), r10.up.set(0, 0, 1), r10.lookAt(0, 1, 0), a2.up.set(0, 0, -1), a2.lookAt(0, -1, 0), s2.up.set(0, -1, 0), s2.lookAt(0, 0, 1), o2.up.set(0, -1, 0), o2.lookAt(0, 0, -1);
      else
        throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e10);
      for (let e11 of t10)
        this.add(e11), e11.updateMatrixWorld();
    }
    update(e10, t10) {
      null === this.parent && this.updateMatrixWorld();
      let n10 = this.renderTarget;
      this.coordinateSystem !== e10.coordinateSystem && (this.coordinateSystem = e10.coordinateSystem, this.updateCoordinateSystem());
      let [i10, r10, a2, s2, o2, l2] = this.children, h2 = e10.getRenderTarget(), u2 = e10.toneMapping, c2 = e10.xr.enabled;
      e10.toneMapping = 0, e10.xr.enabled = false;
      let d2 = n10.texture.generateMipmaps;
      n10.texture.generateMipmaps = false, e10.setRenderTarget(n10, 0), e10.render(t10, i10), e10.setRenderTarget(n10, 1), e10.render(t10, r10), e10.setRenderTarget(n10, 2), e10.render(t10, a2), e10.setRenderTarget(n10, 3), e10.render(t10, s2), e10.setRenderTarget(n10, 4), e10.render(t10, o2), n10.texture.generateMipmaps = d2, e10.setRenderTarget(n10, 5), e10.render(t10, l2), e10.setRenderTarget(h2), e10.toneMapping = u2, e10.xr.enabled = c2, n10.texture.needsPMREMUpdate = true;
    }
  }
  class tk extends F {
    constructor(e10, t10, n10, i10, r10, a2, s2, o2, l2, h2) {
      super(e10 = void 0 !== e10 ? e10 : [], t10 = void 0 !== t10 ? t10 : 301, n10, i10, r10, a2, s2, o2, l2, h2), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(e10) {
      this.image = e10;
    }
  }
  class tW extends B {
    constructor(e10 = 1, t10 = {}) {
      super(e10, e10, t10), this.isWebGLCubeRenderTarget = true;
      let n10 = { width: e10, height: e10, depth: 1 }, i10 = [n10, n10, n10, n10, n10, n10];
      void 0 !== t10.encoding && (T("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t10.colorSpace = 3001 === t10.encoding ? r : ""), this.texture = new tk(i10, t10.mapping, t10.wrapS, t10.wrapT, t10.magFilter, t10.minFilter, t10.format, t10.type, t10.anisotropy, t10.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = void 0 !== t10.generateMipmaps && t10.generateMipmaps, this.texture.minFilter = void 0 !== t10.minFilter ? t10.minFilter : 1006;
    }
    fromEquirectangularTexture(e10, t10) {
      this.texture.type = t10.type, this.texture.colorSpace = t10.colorSpace, this.texture.generateMipmaps = t10.generateMipmaps, this.texture.minFilter = t10.minFilter, this.texture.magFilter = t10.magFilter;
      let n10 = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i10 = new tD(5, 5, 5), r10 = new tB({ name: "CubemapFromEquirect", uniforms: tI(n10.uniforms), vertexShader: n10.vertexShader, fragmentShader: n10.fragmentShader, side: 1, blending: 0 });
      r10.uniforms.tEquirect.value = t10;
      let a2 = new tU(i10, r10), s2 = t10.minFilter;
      1008 === t10.minFilter && (t10.minFilter = 1006);
      let o2 = new tH(1, 10, this);
      return o2.update(e10, a2), t10.minFilter = s2, a2.geometry.dispose(), a2.material.dispose(), this;
    }
    clear(e10, t10, n10, i10) {
      let r10 = e10.getRenderTarget();
      for (let r11 = 0; r11 < 6; r11++)
        e10.setRenderTarget(this, r11), e10.clear(t10, n10, i10);
      e10.setRenderTarget(r10);
    }
  }
  let tX = new H(), tj = new H(), tq = new x();
  class tY {
    constructor(e10 = new H(1, 0, 0), t10 = 0) {
      this.isPlane = true, this.normal = e10, this.constant = t10;
    }
    set(e10, t10) {
      return this.normal.copy(e10), this.constant = t10, this;
    }
    setComponents(e10, t10, n10, i10) {
      return this.normal.set(e10, t10, n10), this.constant = i10, this;
    }
    setFromNormalAndCoplanarPoint(e10, t10) {
      return this.normal.copy(e10), this.constant = -t10.dot(this.normal), this;
    }
    setFromCoplanarPoints(e10, t10, n10) {
      let i10 = tX.subVectors(n10, t10).cross(tj.subVectors(e10, t10)).normalize();
      return this.setFromNormalAndCoplanarPoint(i10, e10), this;
    }
    copy(e10) {
      return this.normal.copy(e10.normal), this.constant = e10.constant, this;
    }
    normalize() {
      let e10 = 1 / this.normal.length();
      return this.normal.multiplyScalar(e10), this.constant *= e10, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(e10) {
      return this.normal.dot(e10) + this.constant;
    }
    distanceToSphere(e10) {
      return this.distanceToPoint(e10.center) - e10.radius;
    }
    projectPoint(e10, t10) {
      return t10.copy(e10).addScaledVector(this.normal, -this.distanceToPoint(e10));
    }
    intersectLine(e10, t10) {
      let n10 = e10.delta(tX), i10 = this.normal.dot(n10);
      if (0 === i10)
        return 0 === this.distanceToPoint(e10.start) ? t10.copy(e10.start) : null;
      let r10 = -(e10.start.dot(this.normal) + this.constant) / i10;
      return r10 < 0 || r10 > 1 ? null : t10.copy(e10.start).addScaledVector(n10, r10);
    }
    intersectsLine(e10) {
      let t10 = this.distanceToPoint(e10.start), n10 = this.distanceToPoint(e10.end);
      return t10 < 0 && n10 > 0 || n10 < 0 && t10 > 0;
    }
    intersectsBox(e10) {
      return e10.intersectsPlane(this);
    }
    intersectsSphere(e10) {
      return e10.intersectsPlane(this);
    }
    coplanarPoint(e10) {
      return e10.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e10, t10) {
      let n10 = t10 || tq.getNormalMatrix(e10), i10 = this.coplanarPoint(tX).applyMatrix4(e10), r10 = this.normal.applyMatrix3(n10).normalize();
      return this.constant = -i10.dot(r10), this;
    }
    translate(e10) {
      return this.constant -= e10.dot(this.normal), this;
    }
    equals(e10) {
      return e10.normal.equals(this.normal) && e10.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  let tJ = new eh(), tZ = new H();
  class tK {
    constructor(e10 = new tY(), t10 = new tY(), n10 = new tY(), i10 = new tY(), r10 = new tY(), a2 = new tY()) {
      this.planes = [e10, t10, n10, i10, r10, a2];
    }
    set(e10, t10, n10, i10, r10, a2) {
      let s2 = this.planes;
      return s2[0].copy(e10), s2[1].copy(t10), s2[2].copy(n10), s2[3].copy(i10), s2[4].copy(r10), s2[5].copy(a2), this;
    }
    copy(e10) {
      let t10 = this.planes;
      for (let n10 = 0; n10 < 6; n10++)
        t10[n10].copy(e10.planes[n10]);
      return this;
    }
    setFromProjectionMatrix(e10, t10 = 2e3) {
      let n10 = this.planes, i10 = e10.elements, r10 = i10[0], a2 = i10[1], s2 = i10[2], o2 = i10[3], l2 = i10[4], h2 = i10[5], u2 = i10[6], c2 = i10[7], d2 = i10[8], p2 = i10[9], f2 = i10[10], m2 = i10[11], g2 = i10[12], _2 = i10[13], v2 = i10[14], x2 = i10[15];
      if (n10[0].setComponents(o2 - r10, c2 - l2, m2 - d2, x2 - g2).normalize(), n10[1].setComponents(o2 + r10, c2 + l2, m2 + d2, x2 + g2).normalize(), n10[2].setComponents(o2 + a2, c2 + h2, m2 + p2, x2 + _2).normalize(), n10[3].setComponents(o2 - a2, c2 - h2, m2 - p2, x2 - _2).normalize(), n10[4].setComponents(o2 - s2, c2 - u2, m2 - f2, x2 - v2).normalize(), 2e3 === t10)
        n10[5].setComponents(o2 + s2, c2 + u2, m2 + f2, x2 + v2).normalize();
      else if (2001 === t10)
        n10[5].setComponents(s2, u2, f2, v2).normalize();
      else
        throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t10);
      return this;
    }
    intersectsObject(e10) {
      if (void 0 !== e10.boundingSphere)
        null === e10.boundingSphere && e10.computeBoundingSphere(), tJ.copy(e10.boundingSphere).applyMatrix4(e10.matrixWorld);
      else {
        let t10 = e10.geometry;
        null === t10.boundingSphere && t10.computeBoundingSphere(), tJ.copy(t10.boundingSphere).applyMatrix4(e10.matrixWorld);
      }
      return this.intersectsSphere(tJ);
    }
    intersectsSprite(e10) {
      return tJ.center.set(0, 0, 0), tJ.radius = 0.7071067811865476, tJ.applyMatrix4(e10.matrixWorld), this.intersectsSphere(tJ);
    }
    intersectsSphere(e10) {
      let t10 = this.planes, n10 = e10.center, i10 = -e10.radius;
      for (let e11 = 0; e11 < 6; e11++) {
        let r10 = t10[e11].distanceToPoint(n10);
        if (r10 < i10)
          return false;
      }
      return true;
    }
    intersectsBox(e10) {
      let t10 = this.planes;
      for (let n10 = 0; n10 < 6; n10++) {
        let i10 = t10[n10];
        if (tZ.x = i10.normal.x > 0 ? e10.max.x : e10.min.x, tZ.y = i10.normal.y > 0 ? e10.max.y : e10.min.y, tZ.z = i10.normal.z > 0 ? e10.max.z : e10.min.z, 0 > i10.distanceToPoint(tZ))
          return false;
      }
      return true;
    }
    containsPoint(e10) {
      let t10 = this.planes;
      for (let n10 = 0; n10 < 6; n10++)
        if (0 > t10[n10].distanceToPoint(e10))
          return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function tQ() {
    let e10 = null, t10 = false, n10 = null, i10 = null;
    function r10(t11, a2) {
      n10(t11, a2), i10 = e10.requestAnimationFrame(r10);
    }
    return { start: function() {
      true !== t10 && null !== n10 && (i10 = e10.requestAnimationFrame(r10), t10 = true);
    }, stop: function() {
      e10.cancelAnimationFrame(i10), t10 = false;
    }, setAnimationLoop: function(e11) {
      n10 = e11;
    }, setContext: function(t11) {
      e10 = t11;
    } };
  }
  function t$(e10, t10) {
    let n10 = t10.isWebGL2, i10 = /* @__PURE__ */ new WeakMap();
    return { get: function(e11) {
      return e11.isInterleavedBufferAttribute && (e11 = e11.data), i10.get(e11);
    }, remove: function(t11) {
      t11.isInterleavedBufferAttribute && (t11 = t11.data);
      let n11 = i10.get(t11);
      n11 && (e10.deleteBuffer(n11.buffer), i10.delete(t11));
    }, update: function(t11, r10) {
      if (t11.isGLBufferAttribute) {
        let e11 = i10.get(t11);
        (!e11 || e11.version < t11.version) && i10.set(t11, { buffer: t11.buffer, type: t11.type, bytesPerElement: t11.elementSize, version: t11.version });
        return;
      }
      t11.isInterleavedBufferAttribute && (t11 = t11.data);
      let a2 = i10.get(t11);
      void 0 === a2 ? i10.set(t11, function(t12, i11) {
        let r11;
        let a3 = t12.array, s2 = t12.usage, o2 = e10.createBuffer();
        if (e10.bindBuffer(i11, o2), e10.bufferData(i11, a3, s2), t12.onUploadCallback(), a3 instanceof Float32Array)
          r11 = e10.FLOAT;
        else if (a3 instanceof Uint16Array) {
          if (t12.isFloat16BufferAttribute) {
            if (n10)
              r11 = e10.HALF_FLOAT;
            else
              throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
          } else
            r11 = e10.UNSIGNED_SHORT;
        } else if (a3 instanceof Int16Array)
          r11 = e10.SHORT;
        else if (a3 instanceof Uint32Array)
          r11 = e10.UNSIGNED_INT;
        else if (a3 instanceof Int32Array)
          r11 = e10.INT;
        else if (a3 instanceof Int8Array)
          r11 = e10.BYTE;
        else if (a3 instanceof Uint8Array)
          r11 = e10.UNSIGNED_BYTE;
        else if (a3 instanceof Uint8ClampedArray)
          r11 = e10.UNSIGNED_BYTE;
        else
          throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + a3);
        return { buffer: o2, type: r11, bytesPerElement: a3.BYTES_PER_ELEMENT, version: t12.version };
      }(t11, r10)) : a2.version < t11.version && (!function(t12, i11, r11) {
        let a3 = i11.array, s2 = i11.updateRange;
        e10.bindBuffer(r11, t12), -1 === s2.count ? e10.bufferSubData(r11, 0, a3) : (n10 ? e10.bufferSubData(r11, s2.offset * a3.BYTES_PER_ELEMENT, a3, s2.offset, s2.count) : e10.bufferSubData(r11, s2.offset * a3.BYTES_PER_ELEMENT, a3.subarray(s2.offset, s2.offset + s2.count)), s2.count = -1), i11.onUploadCallback();
      }(a2.buffer, t11, r10), a2.version = t11.version);
    } };
  }
  class t0 extends tf {
    constructor(e10 = 1, t10 = 1, n10 = 1, i10 = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: e10, height: t10, widthSegments: n10, heightSegments: i10 };
      let r10 = e10 / 2, a2 = t10 / 2, s2 = Math.floor(n10), o2 = Math.floor(i10), l2 = s2 + 1, h2 = o2 + 1, u2 = e10 / s2, c2 = t10 / o2, d2 = [], p2 = [], f2 = [], m2 = [];
      for (let e11 = 0; e11 < h2; e11++) {
        let t11 = e11 * c2 - a2;
        for (let n11 = 0; n11 < l2; n11++) {
          let i11 = n11 * u2 - r10;
          p2.push(i11, -t11, 0), f2.push(0, 0, 1), m2.push(n11 / s2), m2.push(1 - e11 / o2);
        }
      }
      for (let e11 = 0; e11 < o2; e11++)
        for (let t11 = 0; t11 < s2; t11++) {
          let n11 = t11 + l2 * e11, i11 = t11 + l2 * (e11 + 1), r11 = t11 + 1 + l2 * (e11 + 1), a3 = t11 + 1 + l2 * e11;
          d2.push(n11, i11, a3), d2.push(i11, r11, a3);
        }
      this.setIndex(d2), this.setAttribute("position", new ts(p2, 3)), this.setAttribute("normal", new ts(f2, 3)), this.setAttribute("uv", new ts(m2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new t0(e10.width, e10.height, e10.widthSegments, e10.heightSegments);
    }
  }
  let t1 = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			 return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float R21 = R12;\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = dFdx( surf_pos.xyz );\n		vec3 vSigmaY = dFdy( surf_pos.xyz );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_v0 0.339\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_v1 0.276\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_v4 0.046\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_v5 0.016\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_v6 0.0038\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( LEGACY_LIGHTS )\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#else\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	anisotropyV /= material.anisotropy;\n	material.anisotropy = saturate( material.anisotropy );\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometry.viewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif", map_fragment: "#ifdef USE_MAP\n	diffuseColor *= texture2D( map, vMapUv );\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#ifdef USE_UV\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#ifdef USE_UV\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#ifdef USE_UV\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}" }, t2 = { common: { diffuse: { value: new e8(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new x() }, alphaMap: { value: null }, alphaMapTransform: { value: new x() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new x() } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new x() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new x() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new x() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new x() }, normalScale: { value: new v(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new x() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new x() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new x() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new x() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new e8(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new e8(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new x() }, alphaTest: { value: 0 }, uvTransform: { value: new x() } }, sprite: { diffuse: { value: new e8(16777215) }, opacity: { value: 1 }, center: { value: new v(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new x() }, alphaMap: { value: null }, alphaMapTransform: { value: new x() }, alphaTest: { value: 0 } } }, t3 = { basic: { uniforms: tO([t2.common, t2.specularmap, t2.envmap, t2.aomap, t2.lightmap, t2.fog]), vertexShader: t1.meshbasic_vert, fragmentShader: t1.meshbasic_frag }, lambert: { uniforms: tO([t2.common, t2.specularmap, t2.envmap, t2.aomap, t2.lightmap, t2.emissivemap, t2.bumpmap, t2.normalmap, t2.displacementmap, t2.fog, t2.lights, { emissive: { value: new e8(0) } }]), vertexShader: t1.meshlambert_vert, fragmentShader: t1.meshlambert_frag }, phong: { uniforms: tO([t2.common, t2.specularmap, t2.envmap, t2.aomap, t2.lightmap, t2.emissivemap, t2.bumpmap, t2.normalmap, t2.displacementmap, t2.fog, t2.lights, { emissive: { value: new e8(0) }, specular: { value: new e8(1118481) }, shininess: { value: 30 } }]), vertexShader: t1.meshphong_vert, fragmentShader: t1.meshphong_frag }, standard: { uniforms: tO([t2.common, t2.envmap, t2.aomap, t2.lightmap, t2.emissivemap, t2.bumpmap, t2.normalmap, t2.displacementmap, t2.roughnessmap, t2.metalnessmap, t2.fog, t2.lights, { emissive: { value: new e8(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: t1.meshphysical_vert, fragmentShader: t1.meshphysical_frag }, toon: { uniforms: tO([t2.common, t2.aomap, t2.lightmap, t2.emissivemap, t2.bumpmap, t2.normalmap, t2.displacementmap, t2.gradientmap, t2.fog, t2.lights, { emissive: { value: new e8(0) } }]), vertexShader: t1.meshtoon_vert, fragmentShader: t1.meshtoon_frag }, matcap: { uniforms: tO([t2.common, t2.bumpmap, t2.normalmap, t2.displacementmap, t2.fog, { matcap: { value: null } }]), vertexShader: t1.meshmatcap_vert, fragmentShader: t1.meshmatcap_frag }, points: { uniforms: tO([t2.points, t2.fog]), vertexShader: t1.points_vert, fragmentShader: t1.points_frag }, dashed: { uniforms: tO([t2.common, t2.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: t1.linedashed_vert, fragmentShader: t1.linedashed_frag }, depth: { uniforms: tO([t2.common, t2.displacementmap]), vertexShader: t1.depth_vert, fragmentShader: t1.depth_frag }, normal: { uniforms: tO([t2.common, t2.bumpmap, t2.normalmap, t2.displacementmap, { opacity: { value: 1 } }]), vertexShader: t1.meshnormal_vert, fragmentShader: t1.meshnormal_frag }, sprite: { uniforms: tO([t2.sprite, t2.fog]), vertexShader: t1.sprite_vert, fragmentShader: t1.sprite_frag }, background: { uniforms: { uvTransform: { value: new x() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: t1.background_vert, fragmentShader: t1.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: t1.backgroundCube_vert, fragmentShader: t1.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: t1.cube_vert, fragmentShader: t1.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: t1.equirect_vert, fragmentShader: t1.equirect_frag }, distanceRGBA: { uniforms: tO([t2.common, t2.displacementmap, { referencePosition: { value: new H() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: t1.distanceRGBA_vert, fragmentShader: t1.distanceRGBA_frag }, shadow: { uniforms: tO([t2.lights, t2.fog, { color: { value: new e8(0) }, opacity: { value: 1 } }]), vertexShader: t1.shadow_vert, fragmentShader: t1.shadow_frag } };
  t3.physical = { uniforms: tO([t3.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new x() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new x() }, clearcoatNormalScale: { value: new v(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new x() }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new x() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new x() }, sheen: { value: 0 }, sheenColor: { value: new e8(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new x() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new x() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new x() }, transmissionSamplerSize: { value: new v() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new x() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new e8(0) }, specularColor: { value: new e8(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new x() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new x() }, anisotropyVector: { value: new v() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new x() } }]), vertexShader: t1.meshphysical_vert, fragmentShader: t1.meshphysical_frag };
  let t4 = { r: 0, b: 0, g: 0 };
  function t5(e10, t10, n10, i10, a2, s2, o2) {
    let l2, h2;
    let u2 = new e8(0), c2 = true === s2 ? 0 : 1, d2 = null, p2 = 0, f2 = null;
    function m2(t11, n11) {
      t11.getRGB(t4, tF(e10)), i10.buffers.color.setClear(t4.r, t4.g, t4.b, n11, o2);
    }
    return { getClearColor: function() {
      return u2;
    }, setClearColor: function(e11, t11 = 1) {
      u2.set(e11), m2(u2, c2 = t11);
    }, getClearAlpha: function() {
      return c2;
    }, setClearAlpha: function(e11) {
      m2(u2, c2 = e11);
    }, render: function(s3, g2) {
      let _2 = false, v2 = true === g2.isScene ? g2.background : null;
      if (v2 && v2.isTexture) {
        let e11 = g2.backgroundBlurriness > 0;
        v2 = (e11 ? n10 : t10).get(v2);
      }
      null === v2 ? m2(u2, c2) : v2 && v2.isColor && (m2(v2, 1), _2 = true);
      let x2 = e10.xr, y2 = x2.getEnvironmentBlendMode();
      switch (y2) {
        case "opaque":
          _2 = true;
          break;
        case "additive":
          i10.buffers.color.setClear(0, 0, 0, 1, o2), _2 = true;
          break;
        case "alpha-blend":
          i10.buffers.color.setClear(0, 0, 0, 0, o2), _2 = true;
      }
      (e10.autoClear || _2) && e10.clear(e10.autoClearColor, e10.autoClearDepth, e10.autoClearStencil), v2 && (v2.isCubeTexture || 306 === v2.mapping) ? (void 0 === h2 && ((h2 = new tU(new tD(1, 1, 1), new tB({ name: "BackgroundCubeMaterial", uniforms: tI(t3.backgroundCube.uniforms), vertexShader: t3.backgroundCube.vertexShader, fragmentShader: t3.backgroundCube.fragmentShader, side: 1, depthTest: false, depthWrite: false, fog: false }))).geometry.deleteAttribute("normal"), h2.geometry.deleteAttribute("uv"), h2.onBeforeRender = function(e11, t11, n11) {
        this.matrixWorld.copyPosition(n11.matrixWorld);
      }, Object.defineProperty(h2.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), a2.update(h2)), h2.material.uniforms.envMap.value = v2, h2.material.uniforms.flipEnvMap.value = v2.isCubeTexture && false === v2.isRenderTargetTexture ? -1 : 1, h2.material.uniforms.backgroundBlurriness.value = g2.backgroundBlurriness, h2.material.uniforms.backgroundIntensity.value = g2.backgroundIntensity, h2.material.toneMapped = v2.colorSpace !== r, (d2 !== v2 || p2 !== v2.version || f2 !== e10.toneMapping) && (h2.material.needsUpdate = true, d2 = v2, p2 = v2.version, f2 = e10.toneMapping), h2.layers.enableAll(), s3.unshift(h2, h2.geometry, h2.material, 0, 0, null)) : v2 && v2.isTexture && (void 0 === l2 && ((l2 = new tU(new t0(2, 2), new tB({ name: "BackgroundMaterial", uniforms: tI(t3.background.uniforms), vertexShader: t3.background.vertexShader, fragmentShader: t3.background.fragmentShader, side: 0, depthTest: false, depthWrite: false, fog: false }))).geometry.deleteAttribute("normal"), Object.defineProperty(l2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), a2.update(l2)), l2.material.uniforms.t2D.value = v2, l2.material.uniforms.backgroundIntensity.value = g2.backgroundIntensity, l2.material.toneMapped = v2.colorSpace !== r, true === v2.matrixAutoUpdate && v2.updateMatrix(), l2.material.uniforms.uvTransform.value.copy(v2.matrix), (d2 !== v2 || p2 !== v2.version || f2 !== e10.toneMapping) && (l2.material.needsUpdate = true, d2 = v2, p2 = v2.version, f2 = e10.toneMapping), l2.layers.enableAll(), s3.unshift(l2, l2.geometry, l2.material, 0, 0, null));
    } };
  }
  function t6(e10, t10, n10, i10) {
    let r10 = e10.getParameter(e10.MAX_VERTEX_ATTRIBS), a2 = i10.isWebGL2 ? null : t10.get("OES_vertex_array_object"), s2 = i10.isWebGL2 || null !== a2, o2 = {}, l2 = p2(null), h2 = l2, u2 = false;
    function c2(t11) {
      return i10.isWebGL2 ? e10.bindVertexArray(t11) : a2.bindVertexArrayOES(t11);
    }
    function d2(t11) {
      return i10.isWebGL2 ? e10.deleteVertexArray(t11) : a2.deleteVertexArrayOES(t11);
    }
    function p2(e11) {
      let t11 = [], n11 = [], i11 = [];
      for (let e12 = 0; e12 < r10; e12++)
        t11[e12] = 0, n11[e12] = 0, i11[e12] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: t11, enabledAttributes: n11, attributeDivisors: i11, object: e11, attributes: {}, index: null };
    }
    function f2() {
      let e11 = h2.newAttributes;
      for (let t11 = 0, n11 = e11.length; t11 < n11; t11++)
        e11[t11] = 0;
    }
    function m2(e11) {
      g2(e11, 0);
    }
    function g2(n11, r11) {
      let a3 = h2.newAttributes, s3 = h2.enabledAttributes, o3 = h2.attributeDivisors;
      if (a3[n11] = 1, 0 === s3[n11] && (e10.enableVertexAttribArray(n11), s3[n11] = 1), o3[n11] !== r11) {
        let a4 = i10.isWebGL2 ? e10 : t10.get("ANGLE_instanced_arrays");
        a4[i10.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n11, r11), o3[n11] = r11;
      }
    }
    function _2() {
      let t11 = h2.newAttributes, n11 = h2.enabledAttributes;
      for (let i11 = 0, r11 = n11.length; i11 < r11; i11++)
        n11[i11] !== t11[i11] && (e10.disableVertexAttribArray(i11), n11[i11] = 0);
    }
    function v2(t11, n11, i11, r11, a3, s3, o3) {
      true === o3 ? e10.vertexAttribIPointer(t11, n11, i11, a3, s3) : e10.vertexAttribPointer(t11, n11, i11, r11, a3, s3);
    }
    function x2() {
      y2(), u2 = true, h2 !== l2 && c2((h2 = l2).object);
    }
    function y2() {
      l2.geometry = null, l2.program = null, l2.wireframe = false;
    }
    return { setup: function(r11, l3, d3, x3, y3) {
      let M2 = false;
      if (s2) {
        let t11 = function(t12, n11, r12) {
          let s3 = true === r12.wireframe, l4 = o2[t12.id];
          void 0 === l4 && (l4 = {}, o2[t12.id] = l4);
          let h3 = l4[n11.id];
          void 0 === h3 && (h3 = {}, l4[n11.id] = h3);
          let u3 = h3[s3];
          return void 0 === u3 && (u3 = p2(i10.isWebGL2 ? e10.createVertexArray() : a2.createVertexArrayOES()), h3[s3] = u3), u3;
        }(x3, d3, l3);
        h2 !== t11 && c2((h2 = t11).object), (M2 = function(e11, t12, n11, i11) {
          let r12 = h2.attributes, a3 = t12.attributes, s3 = 0, o3 = n11.getAttributes();
          for (let t13 in o3) {
            let n12 = o3[t13];
            if (n12.location >= 0) {
              let n13 = r12[t13], i12 = a3[t13];
              if (void 0 === i12 && ("instanceMatrix" === t13 && e11.instanceMatrix && (i12 = e11.instanceMatrix), "instanceColor" === t13 && e11.instanceColor && (i12 = e11.instanceColor)), void 0 === n13 || n13.attribute !== i12 || i12 && n13.data !== i12.data)
                return true;
              s3++;
            }
          }
          return h2.attributesNum !== s3 || h2.index !== i11;
        }(r11, x3, d3, y3)) && function(e11, t12, n11, i11) {
          let r12 = {}, a3 = t12.attributes, s3 = 0, o3 = n11.getAttributes();
          for (let t13 in o3) {
            let n12 = o3[t13];
            if (n12.location >= 0) {
              let n13 = a3[t13];
              void 0 === n13 && ("instanceMatrix" === t13 && e11.instanceMatrix && (n13 = e11.instanceMatrix), "instanceColor" === t13 && e11.instanceColor && (n13 = e11.instanceColor));
              let i12 = {};
              i12.attribute = n13, n13 && n13.data && (i12.data = n13.data), r12[t13] = i12, s3++;
            }
          }
          h2.attributes = r12, h2.attributesNum = s3, h2.index = i11;
        }(r11, x3, d3, y3);
      } else {
        let e11 = true === l3.wireframe;
        (h2.geometry !== x3.id || h2.program !== d3.id || h2.wireframe !== e11) && (h2.geometry = x3.id, h2.program = d3.id, h2.wireframe = e11, M2 = true);
      }
      null !== y3 && n10.update(y3, e10.ELEMENT_ARRAY_BUFFER), (M2 || u2) && (u2 = false, function(r12, a3, s3, o3) {
        if (false === i10.isWebGL2 && (r12.isInstancedMesh || o3.isInstancedBufferGeometry) && null === t10.get("ANGLE_instanced_arrays"))
          return;
        f2();
        let l4 = o3.attributes, h3 = s3.getAttributes(), u3 = a3.defaultAttributeValues;
        for (let t11 in h3) {
          let a4 = h3[t11];
          if (a4.location >= 0) {
            let s4 = l4[t11];
            if (void 0 === s4 && ("instanceMatrix" === t11 && r12.instanceMatrix && (s4 = r12.instanceMatrix), "instanceColor" === t11 && r12.instanceColor && (s4 = r12.instanceColor)), void 0 !== s4) {
              let t12 = s4.normalized, l5 = s4.itemSize, h4 = n10.get(s4);
              if (void 0 === h4)
                continue;
              let u4 = h4.buffer, c3 = h4.type, d4 = h4.bytesPerElement, p3 = true === i10.isWebGL2 && (c3 === e10.INT || c3 === e10.UNSIGNED_INT || 1013 === s4.gpuType);
              if (s4.isInterleavedBufferAttribute) {
                let n11 = s4.data, i11 = n11.stride, h5 = s4.offset;
                if (n11.isInstancedInterleavedBuffer) {
                  for (let e11 = 0; e11 < a4.locationSize; e11++)
                    g2(a4.location + e11, n11.meshPerAttribute);
                  true !== r12.isInstancedMesh && void 0 === o3._maxInstanceCount && (o3._maxInstanceCount = n11.meshPerAttribute * n11.count);
                } else
                  for (let e11 = 0; e11 < a4.locationSize; e11++)
                    m2(a4.location + e11);
                e10.bindBuffer(e10.ARRAY_BUFFER, u4);
                for (let e11 = 0; e11 < a4.locationSize; e11++)
                  v2(a4.location + e11, l5 / a4.locationSize, c3, t12, i11 * d4, (h5 + l5 / a4.locationSize * e11) * d4, p3);
              } else {
                if (s4.isInstancedBufferAttribute) {
                  for (let e11 = 0; e11 < a4.locationSize; e11++)
                    g2(a4.location + e11, s4.meshPerAttribute);
                  true !== r12.isInstancedMesh && void 0 === o3._maxInstanceCount && (o3._maxInstanceCount = s4.meshPerAttribute * s4.count);
                } else
                  for (let e11 = 0; e11 < a4.locationSize; e11++)
                    m2(a4.location + e11);
                e10.bindBuffer(e10.ARRAY_BUFFER, u4);
                for (let e11 = 0; e11 < a4.locationSize; e11++)
                  v2(a4.location + e11, l5 / a4.locationSize, c3, t12, l5 * d4, l5 / a4.locationSize * e11 * d4, p3);
              }
            } else if (void 0 !== u3) {
              let n11 = u3[t11];
              if (void 0 !== n11)
                switch (n11.length) {
                  case 2:
                    e10.vertexAttrib2fv(a4.location, n11);
                    break;
                  case 3:
                    e10.vertexAttrib3fv(a4.location, n11);
                    break;
                  case 4:
                    e10.vertexAttrib4fv(a4.location, n11);
                    break;
                  default:
                    e10.vertexAttrib1fv(a4.location, n11);
                }
            }
          }
        }
        _2();
      }(r11, l3, d3, x3), null !== y3 && e10.bindBuffer(e10.ELEMENT_ARRAY_BUFFER, n10.get(y3).buffer));
    }, reset: x2, resetDefaultState: y2, dispose: function() {
      for (let e11 in x2(), o2) {
        let t11 = o2[e11];
        for (let e12 in t11) {
          let n11 = t11[e12];
          for (let e13 in n11)
            d2(n11[e13].object), delete n11[e13];
          delete t11[e12];
        }
        delete o2[e11];
      }
    }, releaseStatesOfGeometry: function(e11) {
      if (void 0 === o2[e11.id])
        return;
      let t11 = o2[e11.id];
      for (let e12 in t11) {
        let n11 = t11[e12];
        for (let e13 in n11)
          d2(n11[e13].object), delete n11[e13];
        delete t11[e12];
      }
      delete o2[e11.id];
    }, releaseStatesOfProgram: function(e11) {
      for (let t11 in o2) {
        let n11 = o2[t11];
        if (void 0 === n11[e11.id])
          continue;
        let i11 = n11[e11.id];
        for (let e12 in i11)
          d2(i11[e12].object), delete i11[e12];
        delete n11[e11.id];
      }
    }, initAttributes: f2, enableAttribute: m2, disableUnusedAttributes: _2 };
  }
  function t7(e10, t10, n10, i10) {
    let r10;
    let a2 = i10.isWebGL2;
    this.setMode = function(e11) {
      r10 = e11;
    }, this.render = function(t11, i11) {
      e10.drawArrays(r10, t11, i11), n10.update(i11, r10, 1);
    }, this.renderInstances = function(i11, s2, o2) {
      let l2, h2;
      if (0 !== o2) {
        if (a2)
          l2 = e10, h2 = "drawArraysInstanced";
        else if (l2 = t10.get("ANGLE_instanced_arrays"), h2 = "drawArraysInstancedANGLE", null === l2) {
          console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          return;
        }
        l2[h2](r10, i11, s2, o2), n10.update(s2, r10, o2);
      }
    };
  }
  function t8(e10, t10, n10) {
    let i10;
    function r10(t11) {
      if ("highp" === t11) {
        if (e10.getShaderPrecisionFormat(e10.VERTEX_SHADER, e10.HIGH_FLOAT).precision > 0 && e10.getShaderPrecisionFormat(e10.FRAGMENT_SHADER, e10.HIGH_FLOAT).precision > 0)
          return "highp";
        t11 = "mediump";
      }
      return "mediump" === t11 && e10.getShaderPrecisionFormat(e10.VERTEX_SHADER, e10.MEDIUM_FLOAT).precision > 0 && e10.getShaderPrecisionFormat(e10.FRAGMENT_SHADER, e10.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let a2 = "undefined" != typeof WebGL2RenderingContext && "WebGL2RenderingContext" === e10.constructor.name, s2 = void 0 !== n10.precision ? n10.precision : "highp", o2 = r10(s2);
    o2 !== s2 && (console.warn("THREE.WebGLRenderer:", s2, "not supported, using", o2, "instead."), s2 = o2);
    let l2 = a2 || t10.has("WEBGL_draw_buffers"), h2 = true === n10.logarithmicDepthBuffer, u2 = e10.getParameter(e10.MAX_TEXTURE_IMAGE_UNITS), c2 = e10.getParameter(e10.MAX_VERTEX_TEXTURE_IMAGE_UNITS), d2 = e10.getParameter(e10.MAX_TEXTURE_SIZE), p2 = e10.getParameter(e10.MAX_CUBE_MAP_TEXTURE_SIZE), f2 = e10.getParameter(e10.MAX_VERTEX_ATTRIBS), m2 = e10.getParameter(e10.MAX_VERTEX_UNIFORM_VECTORS), g2 = e10.getParameter(e10.MAX_VARYING_VECTORS), _2 = e10.getParameter(e10.MAX_FRAGMENT_UNIFORM_VECTORS), v2 = c2 > 0, x2 = a2 || t10.has("OES_texture_float"), y2 = a2 ? e10.getParameter(e10.MAX_SAMPLES) : 0;
    return { isWebGL2: a2, drawBuffers: l2, getMaxAnisotropy: function() {
      if (void 0 !== i10)
        return i10;
      if (true === t10.has("EXT_texture_filter_anisotropic")) {
        let n11 = t10.get("EXT_texture_filter_anisotropic");
        i10 = e10.getParameter(n11.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else
        i10 = 0;
      return i10;
    }, getMaxPrecision: r10, precision: s2, logarithmicDepthBuffer: h2, maxTextures: u2, maxVertexTextures: c2, maxTextureSize: d2, maxCubemapSize: p2, maxAttributes: f2, maxVertexUniforms: m2, maxVaryings: g2, maxFragmentUniforms: _2, vertexTextures: v2, floatFragmentTextures: x2, floatVertexTextures: v2 && x2, maxSamples: y2 };
  }
  function t9(e10) {
    let t10 = this, n10 = null, i10 = 0, r10 = false, a2 = false, s2 = new tY(), o2 = new x(), l2 = { value: null, needsUpdate: false };
    function h2(e11, n11, i11, r11) {
      let a3 = null !== e11 ? e11.length : 0, h3 = null;
      if (0 !== a3) {
        if (h3 = l2.value, true !== r11 || null === h3) {
          let t11 = i11 + 4 * a3, r12 = n11.matrixWorldInverse;
          o2.getNormalMatrix(r12), (null === h3 || h3.length < t11) && (h3 = new Float32Array(t11));
          for (let t12 = 0, n12 = i11; t12 !== a3; ++t12, n12 += 4)
            s2.copy(e11[t12]).applyMatrix4(r12, o2), s2.normal.toArray(h3, n12), h3[n12 + 3] = s2.constant;
        }
        l2.value = h3, l2.needsUpdate = true;
      }
      return t10.numPlanes = a3, t10.numIntersection = 0, h3;
    }
    this.uniform = l2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e11, t11) {
      let n11 = 0 !== e11.length || t11 || 0 !== i10 || r10;
      return r10 = t11, i10 = e11.length, n11;
    }, this.beginShadows = function() {
      a2 = true, h2(null);
    }, this.endShadows = function() {
      a2 = false;
    }, this.setGlobalState = function(e11, t11) {
      n10 = h2(e11, t11, 0);
    }, this.setState = function(s3, o3, u2) {
      let c2 = s3.clippingPlanes, d2 = s3.clipIntersection, p2 = s3.clipShadows, f2 = e10.get(s3);
      if (r10 && null !== c2 && 0 !== c2.length && (!a2 || p2)) {
        let e11 = a2 ? 0 : i10, t11 = 4 * e11, r11 = f2.clippingState || null;
        l2.value = r11, r11 = h2(c2, o3, t11, u2);
        for (let e12 = 0; e12 !== t11; ++e12)
          r11[e12] = n10[e12];
        f2.clippingState = r11, this.numIntersection = d2 ? this.numPlanes : 0, this.numPlanes += e11;
      } else
        a2 ? h2(null) : (l2.value !== n10 && (l2.value = n10, l2.needsUpdate = i10 > 0), t10.numPlanes = i10, t10.numIntersection = 0);
    };
  }
  function ne(e10) {
    let t10 = /* @__PURE__ */ new WeakMap();
    function n10(e11, t11) {
      return 303 === t11 ? e11.mapping = 301 : 304 === t11 && (e11.mapping = 302), e11;
    }
    function i10(e11) {
      let n11 = e11.target;
      n11.removeEventListener("dispose", i10);
      let r10 = t10.get(n11);
      void 0 !== r10 && (t10.delete(n11), r10.dispose());
    }
    return { get: function(r10) {
      if (r10 && r10.isTexture && false === r10.isRenderTargetTexture) {
        let a2 = r10.mapping;
        if (303 === a2 || 304 === a2) {
          if (t10.has(r10)) {
            let e11 = t10.get(r10).texture;
            return n10(e11, r10.mapping);
          }
          {
            let a3 = r10.image;
            if (!a3 || !(a3.height > 0))
              return null;
            {
              let s2 = new tW(a3.height / 2);
              return s2.fromEquirectangularTexture(e10, r10), t10.set(r10, s2), r10.addEventListener("dispose", i10), n10(s2.texture, r10.mapping);
            }
          }
        }
      }
      return r10;
    }, dispose: function() {
      t10 = /* @__PURE__ */ new WeakMap();
    } };
  }
  let nt = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], nn = new class extends tV {
    constructor(e10 = -1, t10 = 1, n10 = 1, i10 = -1, r10 = 0.1, a2 = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e10, this.right = t10, this.top = n10, this.bottom = i10, this.near = r10, this.far = a2, this.updateProjectionMatrix();
    }
    copy(e10, t10) {
      return super.copy(e10, t10), this.left = e10.left, this.right = e10.right, this.top = e10.top, this.bottom = e10.bottom, this.near = e10.near, this.far = e10.far, this.zoom = e10.zoom, this.view = null === e10.view ? null : Object.assign({}, e10.view), this;
    }
    setViewOffset(e10, t10, n10, i10, r10, a2) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e10, this.view.fullHeight = t10, this.view.offsetX = n10, this.view.offsetY = i10, this.view.width = r10, this.view.height = a2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      let e10 = (this.right - this.left) / (2 * this.zoom), t10 = (this.top - this.bottom) / (2 * this.zoom), n10 = (this.right + this.left) / 2, i10 = (this.top + this.bottom) / 2, r10 = n10 - e10, a2 = n10 + e10, s2 = i10 + t10, o2 = i10 - t10;
      if (null !== this.view && this.view.enabled) {
        let e11 = (this.right - this.left) / this.view.fullWidth / this.zoom, t11 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r10 += e11 * this.view.offsetX, a2 = r10 + e11 * this.view.width, s2 -= t11 * this.view.offsetY, o2 = s2 - t11 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r10, a2, s2, o2, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e10) {
      let t10 = super.toJSON(e10);
      return t10.object.zoom = this.zoom, t10.object.left = this.left, t10.object.right = this.right, t10.object.top = this.top, t10.object.bottom = this.bottom, t10.object.near = this.near, t10.object.far = this.far, null !== this.view && (t10.object.view = Object.assign({}, this.view)), t10;
    }
  }(), ni = new e8(), nr = null, na = (1 + Math.sqrt(5)) / 2, ns = 1 / na, no = [new H(1, 1, 1), new H(-1, 1, 1), new H(1, 1, -1), new H(-1, 1, -1), new H(0, na, ns), new H(0, na, -ns), new H(ns, 0, na), new H(-ns, 0, na), new H(na, ns, 0), new H(-na, ns, 0)];
  class nl {
    constructor(e10) {
      this._renderer = e10, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e10, t10 = 0, n10 = 0.1, i10 = 100) {
      nr = this._renderer.getRenderTarget(), this._setSize(256);
      let r10 = this._allocateTargets();
      return r10.depthBuffer = true, this._sceneToCubeUV(e10, n10, i10, r10), t10 > 0 && this._blur(r10, 0, 0, t10), this._applyPMREM(r10), this._cleanup(r10), r10;
    }
    fromEquirectangular(e10, t10 = null) {
      return this._fromTexture(e10, t10);
    }
    fromCubemap(e10, t10 = null) {
      return this._fromTexture(e10, t10);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = nd(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = nc(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(e10) {
      this._lodMax = Math.floor(Math.log2(e10)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let e10 = 0; e10 < this._lodPlanes.length; e10++)
        this._lodPlanes[e10].dispose();
    }
    _cleanup(e10) {
      this._renderer.setRenderTarget(nr), e10.scissorTest = false, nu(e10, 0, 0, e10.width, e10.height);
    }
    _fromTexture(e10, t10) {
      301 === e10.mapping || 302 === e10.mapping ? this._setSize(0 === e10.image.length ? 16 : e10.image[0].width || e10.image[0].image.width) : this._setSize(e10.image.width / 4), nr = this._renderer.getRenderTarget();
      let n10 = t10 || this._allocateTargets();
      return this._textureToCubeUV(e10, n10), this._applyPMREM(n10), this._cleanup(n10), n10;
    }
    _allocateTargets() {
      let e10 = 3 * Math.max(this._cubeSize, 112), t10 = 4 * this._cubeSize, n10 = { magFilter: 1006, minFilter: 1006, generateMipmaps: false, type: 1016, format: 1023, colorSpace: a, depthBuffer: false }, i10 = nh(e10, t10, n10);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e10 || this._pingPongRenderTarget.height !== t10) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = nh(e10, t10, n10);
        let { _lodMax: i11 } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(e11) {
          let t11 = [], n11 = [], i12 = [], r10 = e11, a2 = e11 - 4 + 1 + nt.length;
          for (let s2 = 0; s2 < a2; s2++) {
            let a3 = Math.pow(2, r10);
            n11.push(a3);
            let o2 = 1 / a3;
            s2 > e11 - 4 ? o2 = nt[s2 - e11 + 4 - 1] : 0 === s2 && (o2 = 0), i12.push(o2);
            let l2 = 1 / (a3 - 2), h2 = -l2, u2 = 1 + l2, c2 = [h2, h2, u2, h2, u2, u2, h2, h2, u2, u2, h2, u2], d2 = new Float32Array(108), p2 = new Float32Array(72), f2 = new Float32Array(36);
            for (let e12 = 0; e12 < 6; e12++) {
              let t12 = e12 % 3 * 2 / 3 - 1, n12 = e12 > 2 ? 0 : -1, i13 = [t12, n12, 0, t12 + 2 / 3, n12, 0, t12 + 2 / 3, n12 + 1, 0, t12, n12, 0, t12 + 2 / 3, n12 + 1, 0, t12, n12 + 1, 0];
              d2.set(i13, 18 * e12), p2.set(c2, 12 * e12);
              let r11 = [e12, e12, e12, e12, e12, e12];
              f2.set(r11, 6 * e12);
            }
            let m2 = new tf();
            m2.setAttribute("position", new ti(d2, 3)), m2.setAttribute("uv", new ti(p2, 2)), m2.setAttribute("faceIndex", new ti(f2, 1)), t11.push(m2), r10 > 4 && r10--;
          }
          return { lodPlanes: t11, sizeLods: n11, sigmas: i12 };
        }(i11)), this._blurMaterial = function(e11, t11, n11) {
          let i12 = new Float32Array(20), r10 = new H(0, 1, 0), a2 = new tB({ name: "SphericalGaussianBlur", defines: { n: 20, CUBEUV_TEXEL_WIDTH: 1 / t11, CUBEUV_TEXEL_HEIGHT: 1 / n11, CUBEUV_MAX_MIP: `${e11}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i12 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r10 } }, vertexShader: np(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: 0, depthTest: false, depthWrite: false });
          return a2;
        }(i11, e10, t10);
      }
      return i10;
    }
    _compileMaterial(e10) {
      let t10 = new tU(this._lodPlanes[0], e10);
      this._renderer.compile(t10, nn);
    }
    _sceneToCubeUV(e10, t10, n10, i10) {
      let r10 = new tG(90, 1, t10, n10), a2 = [1, -1, 1, 1, 1, 1], s2 = [1, 1, 1, -1, -1, -1], o2 = this._renderer, l2 = o2.autoClear, h2 = o2.toneMapping;
      o2.getClearColor(ni), o2.toneMapping = 0, o2.autoClear = false;
      let u2 = new te({ name: "PMREM.Background", side: 1, depthWrite: false, depthTest: false }), c2 = new tU(new tD(), u2), d2 = false, p2 = e10.background;
      p2 ? p2.isColor && (u2.color.copy(p2), e10.background = null, d2 = true) : (u2.color.copy(ni), d2 = true);
      for (let t11 = 0; t11 < 6; t11++) {
        let n11 = t11 % 3;
        0 === n11 ? (r10.up.set(0, a2[t11], 0), r10.lookAt(s2[t11], 0, 0)) : 1 === n11 ? (r10.up.set(0, 0, a2[t11]), r10.lookAt(0, s2[t11], 0)) : (r10.up.set(0, a2[t11], 0), r10.lookAt(0, 0, s2[t11]));
        let l3 = this._cubeSize;
        nu(i10, n11 * l3, t11 > 2 ? l3 : 0, l3, l3), o2.setRenderTarget(i10), d2 && o2.render(c2, r10), o2.render(e10, r10);
      }
      c2.geometry.dispose(), c2.material.dispose(), o2.toneMapping = h2, o2.autoClear = l2, e10.background = p2;
    }
    _textureToCubeUV(e10, t10) {
      let n10 = this._renderer, i10 = 301 === e10.mapping || 302 === e10.mapping;
      i10 ? (null === this._cubemapMaterial && (this._cubemapMaterial = nd()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === e10.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = nc());
      let r10 = i10 ? this._cubemapMaterial : this._equirectMaterial, a2 = new tU(this._lodPlanes[0], r10), s2 = r10.uniforms;
      s2.envMap.value = e10;
      let o2 = this._cubeSize;
      nu(t10, 0, 0, 3 * o2, 2 * o2), n10.setRenderTarget(t10), n10.render(a2, nn);
    }
    _applyPMREM(e10) {
      let t10 = this._renderer, n10 = t10.autoClear;
      t10.autoClear = false;
      for (let t11 = 1; t11 < this._lodPlanes.length; t11++) {
        let n11 = Math.sqrt(this._sigmas[t11] * this._sigmas[t11] - this._sigmas[t11 - 1] * this._sigmas[t11 - 1]), i10 = no[(t11 - 1) % no.length];
        this._blur(e10, t11 - 1, t11, n11, i10);
      }
      t10.autoClear = n10;
    }
    _blur(e10, t10, n10, i10, r10) {
      let a2 = this._pingPongRenderTarget;
      this._halfBlur(e10, a2, t10, n10, i10, "latitudinal", r10), this._halfBlur(a2, e10, n10, n10, i10, "longitudinal", r10);
    }
    _halfBlur(e10, t10, n10, i10, r10, a2, s2) {
      let o2 = this._renderer, l2 = this._blurMaterial;
      "latitudinal" !== a2 && "longitudinal" !== a2 && console.error("blur direction must be either latitudinal or longitudinal!");
      let h2 = new tU(this._lodPlanes[i10], l2), u2 = l2.uniforms, c2 = this._sizeLods[n10] - 1, d2 = isFinite(r10) ? Math.PI / (2 * c2) : 2 * Math.PI / 39, p2 = r10 / d2, f2 = isFinite(r10) ? 1 + Math.floor(3 * p2) : 20;
      f2 > 20 && console.warn(`sigmaRadians, ${r10}, is too large and will clip, as it requested ${f2} samples when the maximum is set to 20`);
      let m2 = [], g2 = 0;
      for (let e11 = 0; e11 < 20; ++e11) {
        let t11 = e11 / p2, n11 = Math.exp(-t11 * t11 / 2);
        m2.push(n11), 0 === e11 ? g2 += n11 : e11 < f2 && (g2 += 2 * n11);
      }
      for (let e11 = 0; e11 < m2.length; e11++)
        m2[e11] = m2[e11] / g2;
      u2.envMap.value = e10.texture, u2.samples.value = f2, u2.weights.value = m2, u2.latitudinal.value = "latitudinal" === a2, s2 && (u2.poleAxis.value = s2);
      let { _lodMax: _2 } = this;
      u2.dTheta.value = d2, u2.mipInt.value = _2 - n10;
      let v2 = this._sizeLods[i10], x2 = 3 * v2 * (i10 > _2 - 4 ? i10 - _2 + 4 : 0), y2 = 4 * (this._cubeSize - v2);
      nu(t10, x2, y2, 3 * v2, 2 * v2), o2.setRenderTarget(t10), o2.render(h2, nn);
    }
  }
  function nh(e10, t10, n10) {
    let i10 = new B(e10, t10, n10);
    return i10.texture.mapping = 306, i10.texture.name = "PMREM.cubeUv", i10.scissorTest = true, i10;
  }
  function nu(e10, t10, n10, i10, r10) {
    e10.viewport.set(t10, n10, i10, r10), e10.scissor.set(t10, n10, i10, r10);
  }
  function nc() {
    return new tB({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: np(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: 0, depthTest: false, depthWrite: false });
  }
  function nd() {
    return new tB({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: np(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: 0, depthTest: false, depthWrite: false });
  }
  function np() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
  }
  function nf(e10) {
    let t10 = /* @__PURE__ */ new WeakMap(), n10 = null;
    function i10(e11) {
      let n11 = e11.target;
      n11.removeEventListener("dispose", i10);
      let r10 = t10.get(n11);
      void 0 !== r10 && (t10.delete(n11), r10.dispose());
    }
    return { get: function(r10) {
      if (r10 && r10.isTexture) {
        let a2 = r10.mapping, s2 = 303 === a2 || 304 === a2, o2 = 301 === a2 || 302 === a2;
        if (s2 || o2) {
          if (r10.isRenderTargetTexture && true === r10.needsPMREMUpdate) {
            r10.needsPMREMUpdate = false;
            let i11 = t10.get(r10);
            return null === n10 && (n10 = new nl(e10)), i11 = s2 ? n10.fromEquirectangular(r10, i11) : n10.fromCubemap(r10, i11), t10.set(r10, i11), i11.texture;
          }
          if (t10.has(r10))
            return t10.get(r10).texture;
          {
            let a3 = r10.image;
            if (!(s2 && a3 && a3.height > 0 || o2 && a3 && function(e11) {
              let t11 = 0;
              for (let n11 = 0; n11 < 6; n11++)
                void 0 !== e11[n11] && t11++;
              return 6 === t11;
            }(a3)))
              return null;
            {
              null === n10 && (n10 = new nl(e10));
              let a4 = s2 ? n10.fromEquirectangular(r10) : n10.fromCubemap(r10);
              return t10.set(r10, a4), r10.addEventListener("dispose", i10), a4.texture;
            }
          }
        }
      }
      return r10;
    }, dispose: function() {
      t10 = /* @__PURE__ */ new WeakMap(), null !== n10 && (n10.dispose(), n10 = null);
    } };
  }
  function nm(e10) {
    let t10 = {};
    function n10(n11) {
      let i10;
      if (void 0 !== t10[n11])
        return t10[n11];
      switch (n11) {
        case "WEBGL_depth_texture":
          i10 = e10.getExtension("WEBGL_depth_texture") || e10.getExtension("MOZ_WEBGL_depth_texture") || e10.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i10 = e10.getExtension("EXT_texture_filter_anisotropic") || e10.getExtension("MOZ_EXT_texture_filter_anisotropic") || e10.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i10 = e10.getExtension("WEBGL_compressed_texture_s3tc") || e10.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e10.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i10 = e10.getExtension("WEBGL_compressed_texture_pvrtc") || e10.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i10 = e10.getExtension(n11);
      }
      return t10[n11] = i10, i10;
    }
    return { has: function(e11) {
      return null !== n10(e11);
    }, init: function(e11) {
      e11.isWebGL2 ? n10("EXT_color_buffer_float") : (n10("WEBGL_depth_texture"), n10("OES_texture_float"), n10("OES_texture_half_float"), n10("OES_texture_half_float_linear"), n10("OES_standard_derivatives"), n10("OES_element_index_uint"), n10("OES_vertex_array_object"), n10("ANGLE_instanced_arrays")), n10("OES_texture_float_linear"), n10("EXT_color_buffer_half_float"), n10("WEBGL_multisampled_render_to_texture");
    }, get: function(e11) {
      let t11 = n10(e11);
      return null === t11 && console.warn("THREE.WebGLRenderer: " + e11 + " extension not supported."), t11;
    } };
  }
  function ng(e10, t10, n10, i10) {
    let r10 = {}, a2 = /* @__PURE__ */ new WeakMap();
    function s2(e11) {
      let o3 = e11.target;
      for (let e12 in null !== o3.index && t10.remove(o3.index), o3.attributes)
        t10.remove(o3.attributes[e12]);
      for (let e12 in o3.morphAttributes) {
        let n11 = o3.morphAttributes[e12];
        for (let e13 = 0, i11 = n11.length; e13 < i11; e13++)
          t10.remove(n11[e13]);
      }
      o3.removeEventListener("dispose", s2), delete r10[o3.id];
      let l2 = a2.get(o3);
      l2 && (t10.remove(l2), a2.delete(o3)), i10.releaseStatesOfGeometry(o3), true === o3.isInstancedBufferGeometry && delete o3._maxInstanceCount, n10.memory.geometries--;
    }
    function o2(e11) {
      let n11 = [], i11 = e11.index, r11 = e11.attributes.position, s3 = 0;
      if (null !== i11) {
        let e12 = i11.array;
        s3 = i11.version;
        for (let t11 = 0, i12 = e12.length; t11 < i12; t11 += 3) {
          let i13 = e12[t11 + 0], r12 = e12[t11 + 1], a3 = e12[t11 + 2];
          n11.push(i13, r12, r12, a3, a3, i13);
        }
      } else {
        let e12 = r11.array;
        s3 = r11.version;
        for (let t11 = 0, i12 = e12.length / 3 - 1; t11 < i12; t11 += 3) {
          let e13 = t11 + 0, i13 = t11 + 1, r12 = t11 + 2;
          n11.push(e13, i13, i13, r12, r12, e13);
        }
      }
      let o3 = new (M(n11) ? ta : tr)(n11, 1);
      o3.version = s3;
      let l2 = a2.get(e11);
      l2 && t10.remove(l2), a2.set(e11, o3);
    }
    return { get: function(e11, t11) {
      return true === r10[t11.id] || (t11.addEventListener("dispose", s2), r10[t11.id] = true, n10.memory.geometries++), t11;
    }, update: function(n11) {
      let i11 = n11.attributes;
      for (let n12 in i11)
        t10.update(i11[n12], e10.ARRAY_BUFFER);
      let r11 = n11.morphAttributes;
      for (let n12 in r11) {
        let i12 = r11[n12];
        for (let n13 = 0, r12 = i12.length; n13 < r12; n13++)
          t10.update(i12[n13], e10.ARRAY_BUFFER);
      }
    }, getWireframeAttribute: function(e11) {
      let t11 = a2.get(e11);
      if (t11) {
        let n11 = e11.index;
        null !== n11 && t11.version < n11.version && o2(e11);
      } else
        o2(e11);
      return a2.get(e11);
    } };
  }
  function n_(e10, t10, n10, i10) {
    let r10, a2, s2;
    let o2 = i10.isWebGL2;
    this.setMode = function(e11) {
      r10 = e11;
    }, this.setIndex = function(e11) {
      a2 = e11.type, s2 = e11.bytesPerElement;
    }, this.render = function(t11, i11) {
      e10.drawElements(r10, i11, a2, t11 * s2), n10.update(i11, r10, 1);
    }, this.renderInstances = function(i11, l2, h2) {
      let u2, c2;
      if (0 !== h2) {
        if (o2)
          u2 = e10, c2 = "drawElementsInstanced";
        else if (u2 = t10.get("ANGLE_instanced_arrays"), c2 = "drawElementsInstancedANGLE", null === u2) {
          console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          return;
        }
        u2[c2](r10, l2, a2, i11 * s2, h2), n10.update(l2, r10, h2);
      }
    };
  }
  function nv(e10) {
    let t10 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: t10, programs: null, autoReset: true, reset: function() {
      t10.calls = 0, t10.triangles = 0, t10.points = 0, t10.lines = 0;
    }, update: function(n10, i10, r10) {
      switch (t10.calls++, i10) {
        case e10.TRIANGLES:
          t10.triangles += r10 * (n10 / 3);
          break;
        case e10.LINES:
          t10.lines += r10 * (n10 / 2);
          break;
        case e10.LINE_STRIP:
          t10.lines += r10 * (n10 - 1);
          break;
        case e10.LINE_LOOP:
          t10.lines += r10 * n10;
          break;
        case e10.POINTS:
          t10.points += r10 * n10;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i10);
      }
    } };
  }
  function nx(e10, t10) {
    return e10[0] - t10[0];
  }
  function ny(e10, t10) {
    return Math.abs(t10[1]) - Math.abs(e10[1]);
  }
  function nM(e10, t10, n10) {
    let i10 = {}, r10 = new Float32Array(8), a2 = /* @__PURE__ */ new WeakMap(), s2 = new z(), o2 = [];
    for (let e11 = 0; e11 < 8; e11++)
      o2[e11] = [e11, 0];
    return { update: function(l2, h2, u2) {
      let c2 = l2.morphTargetInfluences;
      if (true === t10.isWebGL2) {
        let i11 = h2.morphAttributes.position || h2.morphAttributes.normal || h2.morphAttributes.color, r11 = void 0 !== i11 ? i11.length : 0, o3 = a2.get(h2);
        if (void 0 === o3 || o3.count !== r11) {
          void 0 !== o3 && o3.texture.dispose();
          let e11 = void 0 !== h2.morphAttributes.position, n11 = void 0 !== h2.morphAttributes.normal, i12 = void 0 !== h2.morphAttributes.color, l4 = h2.morphAttributes.position || [], u3 = h2.morphAttributes.normal || [], c3 = h2.morphAttributes.color || [], d3 = 0;
          true === e11 && (d3 = 1), true === n11 && (d3 = 2), true === i12 && (d3 = 3);
          let p2 = h2.attributes.position.count * d3, f2 = 1;
          p2 > t10.maxTextureSize && (f2 = Math.ceil(p2 / t10.maxTextureSize), p2 = t10.maxTextureSize);
          let m2 = new Float32Array(p2 * f2 * 4 * r11), g2 = new V(m2, p2, f2, r11);
          g2.type = 1015, g2.needsUpdate = true;
          let _2 = 4 * d3;
          for (let t11 = 0; t11 < r11; t11++) {
            let r12 = l4[t11], a3 = u3[t11], o4 = c3[t11], h3 = p2 * f2 * 4 * t11;
            for (let t12 = 0; t12 < r12.count; t12++) {
              let l5 = t12 * _2;
              true === e11 && (s2.fromBufferAttribute(r12, t12), m2[h3 + l5 + 0] = s2.x, m2[h3 + l5 + 1] = s2.y, m2[h3 + l5 + 2] = s2.z, m2[h3 + l5 + 3] = 0), true === n11 && (s2.fromBufferAttribute(a3, t12), m2[h3 + l5 + 4] = s2.x, m2[h3 + l5 + 5] = s2.y, m2[h3 + l5 + 6] = s2.z, m2[h3 + l5 + 7] = 0), true === i12 && (s2.fromBufferAttribute(o4, t12), m2[h3 + l5 + 8] = s2.x, m2[h3 + l5 + 9] = s2.y, m2[h3 + l5 + 10] = s2.z, m2[h3 + l5 + 11] = 4 === o4.itemSize ? s2.w : 1);
            }
          }
          o3 = { count: r11, texture: g2, size: new v(p2, f2) }, a2.set(h2, o3), h2.addEventListener("dispose", function e12() {
            g2.dispose(), a2.delete(h2), h2.removeEventListener("dispose", e12);
          });
        }
        let l3 = 0;
        for (let e11 = 0; e11 < c2.length; e11++)
          l3 += c2[e11];
        let d2 = h2.morphTargetsRelative ? 1 : 1 - l3;
        u2.getUniforms().setValue(e10, "morphTargetBaseInfluence", d2), u2.getUniforms().setValue(e10, "morphTargetInfluences", c2), u2.getUniforms().setValue(e10, "morphTargetsTexture", o3.texture, n10), u2.getUniforms().setValue(e10, "morphTargetsTextureSize", o3.size);
      } else {
        let t11 = void 0 === c2 ? 0 : c2.length, n11 = i10[h2.id];
        if (void 0 === n11 || n11.length !== t11) {
          n11 = [];
          for (let e11 = 0; e11 < t11; e11++)
            n11[e11] = [e11, 0];
          i10[h2.id] = n11;
        }
        for (let e11 = 0; e11 < t11; e11++) {
          let t12 = n11[e11];
          t12[0] = e11, t12[1] = c2[e11];
        }
        n11.sort(ny);
        for (let e11 = 0; e11 < 8; e11++)
          e11 < t11 && n11[e11][1] ? (o2[e11][0] = n11[e11][0], o2[e11][1] = n11[e11][1]) : (o2[e11][0] = Number.MAX_SAFE_INTEGER, o2[e11][1] = 0);
        o2.sort(nx);
        let a3 = h2.morphAttributes.position, s3 = h2.morphAttributes.normal, l3 = 0;
        for (let e11 = 0; e11 < 8; e11++) {
          let t12 = o2[e11], n12 = t12[0], i11 = t12[1];
          n12 !== Number.MAX_SAFE_INTEGER && i11 ? (a3 && h2.getAttribute("morphTarget" + e11) !== a3[n12] && h2.setAttribute("morphTarget" + e11, a3[n12]), s3 && h2.getAttribute("morphNormal" + e11) !== s3[n12] && h2.setAttribute("morphNormal" + e11, s3[n12]), r10[e11] = i11, l3 += i11) : (a3 && true === h2.hasAttribute("morphTarget" + e11) && h2.deleteAttribute("morphTarget" + e11), s3 && true === h2.hasAttribute("morphNormal" + e11) && h2.deleteAttribute("morphNormal" + e11), r10[e11] = 0);
        }
        let d2 = h2.morphTargetsRelative ? 1 : 1 - l3;
        u2.getUniforms().setValue(e10, "morphTargetBaseInfluence", d2), u2.getUniforms().setValue(e10, "morphTargetInfluences", r10);
      }
    } };
  }
  function nS(e10, t10, n10, i10) {
    let r10 = /* @__PURE__ */ new WeakMap();
    function a2(e11) {
      let t11 = e11.target;
      t11.removeEventListener("dispose", a2), n10.remove(t11.instanceMatrix), null !== t11.instanceColor && n10.remove(t11.instanceColor);
    }
    return { update: function(s2) {
      let o2 = i10.render.frame, l2 = s2.geometry, h2 = t10.get(s2, l2);
      return r10.get(h2) !== o2 && (t10.update(h2), r10.set(h2, o2)), s2.isInstancedMesh && (false === s2.hasEventListener("dispose", a2) && s2.addEventListener("dispose", a2), n10.update(s2.instanceMatrix, e10.ARRAY_BUFFER), null !== s2.instanceColor && n10.update(s2.instanceColor, e10.ARRAY_BUFFER)), h2;
    }, dispose: function() {
      r10 = /* @__PURE__ */ new WeakMap();
    } };
  }
  let nE = new F(), nT = new V(), nb = new class extends F {
    constructor(e10 = null, t10 = 1, n10 = 1, i10 = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: e10, width: t10, height: n10, depth: i10 }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }(), nA = new tk(), nw = [], nR = [], nC = new Float32Array(16), nL = new Float32Array(9), nP = new Float32Array(4);
  function nU(e10, t10, n10) {
    let i10 = e10[0];
    if (i10 <= 0 || i10 > 0)
      return e10;
    let r10 = t10 * n10, a2 = nw[r10];
    if (void 0 === a2 && (a2 = new Float32Array(r10), nw[r10] = a2), 0 !== t10) {
      i10.toArray(a2, 0);
      for (let i11 = 1, r11 = 0; i11 !== t10; ++i11)
        r11 += n10, e10[i11].toArray(a2, r11);
    }
    return a2;
  }
  function nN(e10, t10) {
    if (e10.length !== t10.length)
      return false;
    for (let n10 = 0, i10 = e10.length; n10 < i10; n10++)
      if (e10[n10] !== t10[n10])
        return false;
    return true;
  }
  function nD(e10, t10) {
    for (let n10 = 0, i10 = t10.length; n10 < i10; n10++)
      e10[n10] = t10[n10];
  }
  function nI(e10, t10) {
    let n10 = nR[t10];
    void 0 === n10 && (n10 = new Int32Array(t10), nR[t10] = n10);
    for (let i10 = 0; i10 !== t10; ++i10)
      n10[i10] = e10.allocateTextureUnit();
    return n10;
  }
  function nO(e10, t10) {
    let n10 = this.cache;
    n10[0] !== t10 && (e10.uniform1f(this.addr, t10), n10[0] = t10);
  }
  function nF(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y) && (e10.uniform2f(this.addr, t10.x, t10.y), n10[0] = t10.x, n10[1] = t10.y);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform2fv(this.addr, t10), nD(n10, t10);
    }
  }
  function nz(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y || n10[2] !== t10.z) && (e10.uniform3f(this.addr, t10.x, t10.y, t10.z), n10[0] = t10.x, n10[1] = t10.y, n10[2] = t10.z);
    else if (void 0 !== t10.r)
      (n10[0] !== t10.r || n10[1] !== t10.g || n10[2] !== t10.b) && (e10.uniform3f(this.addr, t10.r, t10.g, t10.b), n10[0] = t10.r, n10[1] = t10.g, n10[2] = t10.b);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform3fv(this.addr, t10), nD(n10, t10);
    }
  }
  function nB(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y || n10[2] !== t10.z || n10[3] !== t10.w) && (e10.uniform4f(this.addr, t10.x, t10.y, t10.z, t10.w), n10[0] = t10.x, n10[1] = t10.y, n10[2] = t10.z, n10[3] = t10.w);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform4fv(this.addr, t10), nD(n10, t10);
    }
  }
  function nV(e10, t10) {
    let n10 = this.cache, i10 = t10.elements;
    if (void 0 === i10) {
      if (nN(n10, t10))
        return;
      e10.uniformMatrix2fv(this.addr, false, t10), nD(n10, t10);
    } else {
      if (nN(n10, i10))
        return;
      nP.set(i10), e10.uniformMatrix2fv(this.addr, false, nP), nD(n10, i10);
    }
  }
  function nG(e10, t10) {
    let n10 = this.cache, i10 = t10.elements;
    if (void 0 === i10) {
      if (nN(n10, t10))
        return;
      e10.uniformMatrix3fv(this.addr, false, t10), nD(n10, t10);
    } else {
      if (nN(n10, i10))
        return;
      nL.set(i10), e10.uniformMatrix3fv(this.addr, false, nL), nD(n10, i10);
    }
  }
  function nH(e10, t10) {
    let n10 = this.cache, i10 = t10.elements;
    if (void 0 === i10) {
      if (nN(n10, t10))
        return;
      e10.uniformMatrix4fv(this.addr, false, t10), nD(n10, t10);
    } else {
      if (nN(n10, i10))
        return;
      nC.set(i10), e10.uniformMatrix4fv(this.addr, false, nC), nD(n10, i10);
    }
  }
  function nk(e10, t10) {
    let n10 = this.cache;
    n10[0] !== t10 && (e10.uniform1i(this.addr, t10), n10[0] = t10);
  }
  function nW(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y) && (e10.uniform2i(this.addr, t10.x, t10.y), n10[0] = t10.x, n10[1] = t10.y);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform2iv(this.addr, t10), nD(n10, t10);
    }
  }
  function nX(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y || n10[2] !== t10.z) && (e10.uniform3i(this.addr, t10.x, t10.y, t10.z), n10[0] = t10.x, n10[1] = t10.y, n10[2] = t10.z);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform3iv(this.addr, t10), nD(n10, t10);
    }
  }
  function nj(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y || n10[2] !== t10.z || n10[3] !== t10.w) && (e10.uniform4i(this.addr, t10.x, t10.y, t10.z, t10.w), n10[0] = t10.x, n10[1] = t10.y, n10[2] = t10.z, n10[3] = t10.w);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform4iv(this.addr, t10), nD(n10, t10);
    }
  }
  function nq(e10, t10) {
    let n10 = this.cache;
    n10[0] !== t10 && (e10.uniform1ui(this.addr, t10), n10[0] = t10);
  }
  function nY(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y) && (e10.uniform2ui(this.addr, t10.x, t10.y), n10[0] = t10.x, n10[1] = t10.y);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform2uiv(this.addr, t10), nD(n10, t10);
    }
  }
  function nJ(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y || n10[2] !== t10.z) && (e10.uniform3ui(this.addr, t10.x, t10.y, t10.z), n10[0] = t10.x, n10[1] = t10.y, n10[2] = t10.z);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform3uiv(this.addr, t10), nD(n10, t10);
    }
  }
  function nZ(e10, t10) {
    let n10 = this.cache;
    if (void 0 !== t10.x)
      (n10[0] !== t10.x || n10[1] !== t10.y || n10[2] !== t10.z || n10[3] !== t10.w) && (e10.uniform4ui(this.addr, t10.x, t10.y, t10.z, t10.w), n10[0] = t10.x, n10[1] = t10.y, n10[2] = t10.z, n10[3] = t10.w);
    else {
      if (nN(n10, t10))
        return;
      e10.uniform4uiv(this.addr, t10), nD(n10, t10);
    }
  }
  function nK(e10, t10, n10) {
    let i10 = this.cache, r10 = n10.allocateTextureUnit();
    i10[0] !== r10 && (e10.uniform1i(this.addr, r10), i10[0] = r10), n10.setTexture2D(t10 || nE, r10);
  }
  function nQ(e10, t10, n10) {
    let i10 = this.cache, r10 = n10.allocateTextureUnit();
    i10[0] !== r10 && (e10.uniform1i(this.addr, r10), i10[0] = r10), n10.setTexture3D(t10 || nb, r10);
  }
  function n$(e10, t10, n10) {
    let i10 = this.cache, r10 = n10.allocateTextureUnit();
    i10[0] !== r10 && (e10.uniform1i(this.addr, r10), i10[0] = r10), n10.setTextureCube(t10 || nA, r10);
  }
  function n0(e10, t10, n10) {
    let i10 = this.cache, r10 = n10.allocateTextureUnit();
    i10[0] !== r10 && (e10.uniform1i(this.addr, r10), i10[0] = r10), n10.setTexture2DArray(t10 || nT, r10);
  }
  function n1(e10, t10) {
    e10.uniform1fv(this.addr, t10);
  }
  function n2(e10, t10) {
    let n10 = nU(t10, this.size, 2);
    e10.uniform2fv(this.addr, n10);
  }
  function n3(e10, t10) {
    let n10 = nU(t10, this.size, 3);
    e10.uniform3fv(this.addr, n10);
  }
  function n4(e10, t10) {
    let n10 = nU(t10, this.size, 4);
    e10.uniform4fv(this.addr, n10);
  }
  function n5(e10, t10) {
    let n10 = nU(t10, this.size, 4);
    e10.uniformMatrix2fv(this.addr, false, n10);
  }
  function n6(e10, t10) {
    let n10 = nU(t10, this.size, 9);
    e10.uniformMatrix3fv(this.addr, false, n10);
  }
  function n7(e10, t10) {
    let n10 = nU(t10, this.size, 16);
    e10.uniformMatrix4fv(this.addr, false, n10);
  }
  function n8(e10, t10) {
    e10.uniform1iv(this.addr, t10);
  }
  function n9(e10, t10) {
    e10.uniform2iv(this.addr, t10);
  }
  function ie(e10, t10) {
    e10.uniform3iv(this.addr, t10);
  }
  function it(e10, t10) {
    e10.uniform4iv(this.addr, t10);
  }
  function ii(e10, t10) {
    e10.uniform1uiv(this.addr, t10);
  }
  function ir(e10, t10) {
    e10.uniform2uiv(this.addr, t10);
  }
  function ia(e10, t10) {
    e10.uniform3uiv(this.addr, t10);
  }
  function is(e10, t10) {
    e10.uniform4uiv(this.addr, t10);
  }
  function io(e10, t10, n10) {
    let i10 = this.cache, r10 = t10.length, a2 = nI(n10, r10);
    nN(i10, a2) || (e10.uniform1iv(this.addr, a2), nD(i10, a2));
    for (let e11 = 0; e11 !== r10; ++e11)
      n10.setTexture2D(t10[e11] || nE, a2[e11]);
  }
  function il(e10, t10, n10) {
    let i10 = this.cache, r10 = t10.length, a2 = nI(n10, r10);
    nN(i10, a2) || (e10.uniform1iv(this.addr, a2), nD(i10, a2));
    for (let e11 = 0; e11 !== r10; ++e11)
      n10.setTexture3D(t10[e11] || nb, a2[e11]);
  }
  function ih(e10, t10, n10) {
    let i10 = this.cache, r10 = t10.length, a2 = nI(n10, r10);
    nN(i10, a2) || (e10.uniform1iv(this.addr, a2), nD(i10, a2));
    for (let e11 = 0; e11 !== r10; ++e11)
      n10.setTextureCube(t10[e11] || nA, a2[e11]);
  }
  function iu(e10, t10, n10) {
    let i10 = this.cache, r10 = t10.length, a2 = nI(n10, r10);
    nN(i10, a2) || (e10.uniform1iv(this.addr, a2), nD(i10, a2));
    for (let e11 = 0; e11 !== r10; ++e11)
      n10.setTexture2DArray(t10[e11] || nT, a2[e11]);
  }
  class ic {
    constructor(e10, t10, n10) {
      this.id = e10, this.addr = n10, this.cache = [], this.setValue = function(e11) {
        switch (e11) {
          case 5126:
            return nO;
          case 35664:
            return nF;
          case 35665:
            return nz;
          case 35666:
            return nB;
          case 35674:
            return nV;
          case 35675:
            return nG;
          case 35676:
            return nH;
          case 5124:
          case 35670:
            return nk;
          case 35667:
          case 35671:
            return nW;
          case 35668:
          case 35672:
            return nX;
          case 35669:
          case 35673:
            return nj;
          case 5125:
            return nq;
          case 36294:
            return nY;
          case 36295:
            return nJ;
          case 36296:
            return nZ;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return nK;
          case 35679:
          case 36299:
          case 36307:
            return nQ;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return n$;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return n0;
        }
      }(t10.type);
    }
  }
  class id {
    constructor(e10, t10, n10) {
      this.id = e10, this.addr = n10, this.cache = [], this.size = t10.size, this.setValue = function(e11) {
        switch (e11) {
          case 5126:
            return n1;
          case 35664:
            return n2;
          case 35665:
            return n3;
          case 35666:
            return n4;
          case 35674:
            return n5;
          case 35675:
            return n6;
          case 35676:
            return n7;
          case 5124:
          case 35670:
            return n8;
          case 35667:
          case 35671:
            return n9;
          case 35668:
          case 35672:
            return ie;
          case 35669:
          case 35673:
            return it;
          case 5125:
            return ii;
          case 36294:
            return ir;
          case 36295:
            return ia;
          case 36296:
            return is;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return io;
          case 35679:
          case 36299:
          case 36307:
            return il;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return ih;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return iu;
        }
      }(t10.type);
    }
  }
  class ip {
    constructor(e10) {
      this.id = e10, this.seq = [], this.map = {};
    }
    setValue(e10, t10, n10) {
      let i10 = this.seq;
      for (let r10 = 0, a2 = i10.length; r10 !== a2; ++r10) {
        let a3 = i10[r10];
        a3.setValue(e10, t10[a3.id], n10);
      }
    }
  }
  let im = /(\w+)(\])?(\[|\.)?/g;
  function ig(e10, t10) {
    e10.seq.push(t10), e10.map[t10.id] = t10;
  }
  class i_ {
    constructor(e10, t10) {
      this.seq = [], this.map = {};
      let n10 = e10.getProgramParameter(t10, e10.ACTIVE_UNIFORMS);
      for (let i10 = 0; i10 < n10; ++i10) {
        let n11 = e10.getActiveUniform(t10, i10), r10 = e10.getUniformLocation(t10, n11.name);
        !function(e11, t11, n12) {
          let i11 = e11.name, r11 = i11.length;
          for (im.lastIndex = 0; ; ) {
            let a2 = im.exec(i11), s2 = im.lastIndex, o2 = a2[1], l2 = "]" === a2[2], h2 = a2[3];
            if (l2 && (o2 |= 0), void 0 === h2 || "[" === h2 && s2 + 2 === r11) {
              ig(n12, void 0 === h2 ? new ic(o2, e11, t11) : new id(o2, e11, t11));
              break;
            }
            {
              let e12 = n12.map, t12 = e12[o2];
              void 0 === t12 && ig(n12, t12 = new ip(o2)), n12 = t12;
            }
          }
        }(n11, r10, this);
      }
    }
    setValue(e10, t10, n10, i10) {
      let r10 = this.map[t10];
      void 0 !== r10 && r10.setValue(e10, n10, i10);
    }
    setOptional(e10, t10, n10) {
      let i10 = t10[n10];
      void 0 !== i10 && this.setValue(e10, n10, i10);
    }
    static upload(e10, t10, n10, i10) {
      for (let r10 = 0, a2 = t10.length; r10 !== a2; ++r10) {
        let a3 = t10[r10], s2 = n10[a3.id];
        false !== s2.needsUpdate && a3.setValue(e10, s2.value, i10);
      }
    }
    static seqWithValue(e10, t10) {
      let n10 = [];
      for (let i10 = 0, r10 = e10.length; i10 !== r10; ++i10) {
        let r11 = e10[i10];
        r11.id in t10 && n10.push(r11);
      }
      return n10;
    }
  }
  function iv(e10, t10, n10) {
    let i10 = e10.createShader(t10);
    return e10.shaderSource(i10, n10), e10.compileShader(i10), i10;
  }
  let ix = 0;
  function iy(e10, t10, n10) {
    let i10 = e10.getShaderParameter(t10, e10.COMPILE_STATUS), r10 = e10.getShaderInfoLog(t10).trim();
    if (i10 && "" === r10)
      return "";
    let a2 = /ERROR: 0:(\d+)/.exec(r10);
    if (!a2)
      return r10;
    {
      let i11 = parseInt(a2[1]);
      return n10.toUpperCase() + "\n\n" + r10 + "\n\n" + function(e11, t11) {
        let n11 = e11.split("\n"), i12 = [], r11 = Math.max(t11 - 6, 0), a3 = Math.min(t11 + 6, n11.length);
        for (let e12 = r11; e12 < a3; e12++) {
          let r12 = e12 + 1;
          i12.push(`${r12 === t11 ? ">" : " "} ${r12}: ${n11[e12]}`);
        }
        return i12.join("\n");
      }(e10.getShaderSource(t10), i11);
    }
  }
  function iM(e10) {
    return "" !== e10;
  }
  function iS(e10, t10) {
    let n10 = t10.numSpotLightShadows + t10.numSpotLightMaps - t10.numSpotLightShadowsWithMaps;
    return e10.replace(/NUM_DIR_LIGHTS/g, t10.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t10.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t10.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n10).replace(/NUM_RECT_AREA_LIGHTS/g, t10.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t10.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t10.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t10.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t10.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t10.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t10.numPointLightShadows);
  }
  function iE(e10, t10) {
    return e10.replace(/NUM_CLIPPING_PLANES/g, t10.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t10.numClippingPlanes - t10.numClipIntersection);
  }
  let iT = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function ib(e10) {
    return e10.replace(iT, iA);
  }
  function iA(e10, t10) {
    let n10 = t1[t10];
    if (void 0 === n10)
      throw Error("Can not resolve #include <" + t10 + ">");
    return ib(n10);
  }
  let iw = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function iR(e10) {
    return e10.replace(iw, iC);
  }
  function iC(e10, t10, n10, i10) {
    let r10 = "";
    for (let e11 = parseInt(t10); e11 < parseInt(n10); e11++)
      r10 += i10.replace(/\[\s*i\s*\]/g, "[ " + e11 + " ]").replace(/UNROLLED_LOOP_INDEX/g, e11);
    return r10;
  }
  function iL(e10) {
    let t10 = "precision " + e10.precision + " float;\nprecision " + e10.precision + " int;";
    return "highp" === e10.precision ? t10 += "\n#define HIGH_PRECISION" : "mediump" === e10.precision ? t10 += "\n#define MEDIUM_PRECISION" : "lowp" === e10.precision && (t10 += "\n#define LOW_PRECISION"), t10;
  }
  function iP(e10, t10, n10, i10) {
    let s2, l2, h2, u2, c2, d2;
    let p2 = e10.getContext(), f2 = n10.defines, m2 = n10.vertexShader, g2 = n10.fragmentShader, _2 = (c2 = "SHADOWMAP_TYPE_BASIC", 1 === n10.shadowMapType ? c2 = "SHADOWMAP_TYPE_PCF" : 2 === n10.shadowMapType ? c2 = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === n10.shadowMapType && (c2 = "SHADOWMAP_TYPE_VSM"), c2), v2 = function(e11) {
      let t11 = "ENVMAP_TYPE_CUBE";
      if (e11.envMap)
        switch (e11.envMapMode) {
          case 301:
          case 302:
            t11 = "ENVMAP_TYPE_CUBE";
            break;
          case 306:
            t11 = "ENVMAP_TYPE_CUBE_UV";
        }
      return t11;
    }(n10), x2 = (d2 = "ENVMAP_MODE_REFLECTION", n10.envMap && 302 === n10.envMapMode && (d2 = "ENVMAP_MODE_REFRACTION"), d2), y2 = function(e11) {
      let t11 = "ENVMAP_BLENDING_NONE";
      if (e11.envMap)
        switch (e11.combine) {
          case 0:
            t11 = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case 1:
            t11 = "ENVMAP_BLENDING_MIX";
            break;
          case 2:
            t11 = "ENVMAP_BLENDING_ADD";
        }
      return t11;
    }(n10), M2 = function(e11) {
      let t11 = e11.envMapCubeUVHeight;
      if (null === t11)
        return null;
      let n11 = Math.log2(t11) - 2;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n11), 112)), texelHeight: 1 / t11, maxMip: n11 };
    }(n10), S2 = n10.isWebGL2 ? "" : function(e11) {
      let t11 = [e11.extensionDerivatives || e11.envMapCubeUVHeight || e11.bumpMap || e11.normalMapTangentSpace || e11.clearcoatNormalMap || e11.flatShading || "physical" === e11.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e11.extensionFragDepth || e11.logarithmicDepthBuffer) && e11.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e11.extensionDrawBuffers && e11.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e11.extensionShaderTextureLOD || e11.envMap || e11.transmission) && e11.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
      return t11.filter(iM).join("\n");
    }(n10), E2 = function(e11) {
      let t11 = [];
      for (let n11 in e11) {
        let i11 = e11[n11];
        false !== i11 && t11.push("#define " + n11 + " " + i11);
      }
      return t11.join("\n");
    }(f2), T2 = p2.createProgram(), b2 = n10.glslVersion ? "#version " + n10.glslVersion + "\n" : "";
    n10.isRawShaderMaterial ? ((s2 = ["#define SHADER_TYPE " + n10.shaderType, "#define SHADER_NAME " + n10.shaderName, E2].filter(iM).join("\n")).length > 0 && (s2 += "\n"), (l2 = [S2, "#define SHADER_TYPE " + n10.shaderType, "#define SHADER_NAME " + n10.shaderName, E2].filter(iM).join("\n")).length > 0 && (l2 += "\n")) : (s2 = [iL(n10), "#define SHADER_TYPE " + n10.shaderType, "#define SHADER_NAME " + n10.shaderName, E2, n10.instancing ? "#define USE_INSTANCING" : "", n10.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n10.useFog && n10.fog ? "#define USE_FOG" : "", n10.useFog && n10.fogExp2 ? "#define FOG_EXP2" : "", n10.map ? "#define USE_MAP" : "", n10.envMap ? "#define USE_ENVMAP" : "", n10.envMap ? "#define " + x2 : "", n10.lightMap ? "#define USE_LIGHTMAP" : "", n10.aoMap ? "#define USE_AOMAP" : "", n10.bumpMap ? "#define USE_BUMPMAP" : "", n10.normalMap ? "#define USE_NORMALMAP" : "", n10.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n10.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n10.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n10.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n10.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n10.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n10.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n10.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n10.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n10.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n10.specularMap ? "#define USE_SPECULARMAP" : "", n10.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n10.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n10.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n10.metalnessMap ? "#define USE_METALNESSMAP" : "", n10.alphaMap ? "#define USE_ALPHAMAP" : "", n10.transmission ? "#define USE_TRANSMISSION" : "", n10.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n10.thicknessMap ? "#define USE_THICKNESSMAP" : "", n10.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n10.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n10.mapUv ? "#define MAP_UV " + n10.mapUv : "", n10.alphaMapUv ? "#define ALPHAMAP_UV " + n10.alphaMapUv : "", n10.lightMapUv ? "#define LIGHTMAP_UV " + n10.lightMapUv : "", n10.aoMapUv ? "#define AOMAP_UV " + n10.aoMapUv : "", n10.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n10.emissiveMapUv : "", n10.bumpMapUv ? "#define BUMPMAP_UV " + n10.bumpMapUv : "", n10.normalMapUv ? "#define NORMALMAP_UV " + n10.normalMapUv : "", n10.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n10.displacementMapUv : "", n10.metalnessMapUv ? "#define METALNESSMAP_UV " + n10.metalnessMapUv : "", n10.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n10.roughnessMapUv : "", n10.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n10.anisotropyMapUv : "", n10.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n10.clearcoatMapUv : "", n10.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n10.clearcoatNormalMapUv : "", n10.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n10.clearcoatRoughnessMapUv : "", n10.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n10.iridescenceMapUv : "", n10.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n10.iridescenceThicknessMapUv : "", n10.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n10.sheenColorMapUv : "", n10.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n10.sheenRoughnessMapUv : "", n10.specularMapUv ? "#define SPECULARMAP_UV " + n10.specularMapUv : "", n10.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n10.specularColorMapUv : "", n10.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n10.specularIntensityMapUv : "", n10.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n10.transmissionMapUv : "", n10.thicknessMapUv ? "#define THICKNESSMAP_UV " + n10.thicknessMapUv : "", n10.vertexTangents ? "#define USE_TANGENT" : "", n10.vertexColors ? "#define USE_COLOR" : "", n10.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n10.vertexUv1s ? "#define USE_UV1" : "", n10.vertexUv2s ? "#define USE_UV2" : "", n10.vertexUv3s ? "#define USE_UV3" : "", n10.pointsUvs ? "#define USE_POINTS_UV" : "", n10.flatShading ? "#define FLAT_SHADED" : "", n10.skinning ? "#define USE_SKINNING" : "", n10.morphTargets ? "#define USE_MORPHTARGETS" : "", n10.morphNormals && false === n10.flatShading ? "#define USE_MORPHNORMALS" : "", n10.morphColors && n10.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n10.morphTargetsCount > 0 && n10.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n10.morphTargetsCount > 0 && n10.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n10.morphTextureStride : "", n10.morphTargetsCount > 0 && n10.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n10.morphTargetsCount : "", n10.doubleSided ? "#define DOUBLE_SIDED" : "", n10.flipSided ? "#define FLIP_SIDED" : "", n10.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n10.shadowMapEnabled ? "#define " + _2 : "", n10.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n10.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n10.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n10.logarithmicDepthBuffer && n10.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(iM).join("\n"), l2 = [S2, iL(n10), "#define SHADER_TYPE " + n10.shaderType, "#define SHADER_NAME " + n10.shaderName, E2, n10.useFog && n10.fog ? "#define USE_FOG" : "", n10.useFog && n10.fogExp2 ? "#define FOG_EXP2" : "", n10.map ? "#define USE_MAP" : "", n10.matcap ? "#define USE_MATCAP" : "", n10.envMap ? "#define USE_ENVMAP" : "", n10.envMap ? "#define " + v2 : "", n10.envMap ? "#define " + x2 : "", n10.envMap ? "#define " + y2 : "", M2 ? "#define CUBEUV_TEXEL_WIDTH " + M2.texelWidth : "", M2 ? "#define CUBEUV_TEXEL_HEIGHT " + M2.texelHeight : "", M2 ? "#define CUBEUV_MAX_MIP " + M2.maxMip + ".0" : "", n10.lightMap ? "#define USE_LIGHTMAP" : "", n10.aoMap ? "#define USE_AOMAP" : "", n10.bumpMap ? "#define USE_BUMPMAP" : "", n10.normalMap ? "#define USE_NORMALMAP" : "", n10.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n10.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n10.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n10.anisotropy ? "#define USE_ANISOTROPY" : "", n10.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n10.clearcoat ? "#define USE_CLEARCOAT" : "", n10.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n10.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n10.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n10.iridescence ? "#define USE_IRIDESCENCE" : "", n10.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n10.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n10.specularMap ? "#define USE_SPECULARMAP" : "", n10.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n10.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n10.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n10.metalnessMap ? "#define USE_METALNESSMAP" : "", n10.alphaMap ? "#define USE_ALPHAMAP" : "", n10.alphaTest ? "#define USE_ALPHATEST" : "", n10.sheen ? "#define USE_SHEEN" : "", n10.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n10.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n10.transmission ? "#define USE_TRANSMISSION" : "", n10.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n10.thicknessMap ? "#define USE_THICKNESSMAP" : "", n10.vertexTangents ? "#define USE_TANGENT" : "", n10.vertexColors || n10.instancingColor ? "#define USE_COLOR" : "", n10.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n10.vertexUv1s ? "#define USE_UV1" : "", n10.vertexUv2s ? "#define USE_UV2" : "", n10.vertexUv3s ? "#define USE_UV3" : "", n10.pointsUvs ? "#define USE_POINTS_UV" : "", n10.gradientMap ? "#define USE_GRADIENTMAP" : "", n10.flatShading ? "#define FLAT_SHADED" : "", n10.doubleSided ? "#define DOUBLE_SIDED" : "", n10.flipSided ? "#define FLIP_SIDED" : "", n10.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n10.shadowMapEnabled ? "#define " + _2 : "", n10.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n10.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n10.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n10.logarithmicDepthBuffer && n10.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n10.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n10.toneMapping ? t1.tonemapping_pars_fragment : "", 0 !== n10.toneMapping ? function(e11, t11) {
      let n11;
      switch (t11) {
        case 1:
          n11 = "Linear";
          break;
        case 2:
          n11 = "Reinhard";
          break;
        case 3:
          n11 = "OptimizedCineon";
          break;
        case 4:
          n11 = "ACESFilmic";
          break;
        case 5:
          n11 = "Custom";
          break;
        default:
          console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t11), n11 = "Linear";
      }
      return "vec3 " + e11 + "( vec3 color ) { return " + n11 + "ToneMapping( color ); }";
    }("toneMapping", n10.toneMapping) : "", n10.dithering ? "#define DITHERING" : "", n10.opaque ? "#define OPAQUE" : "", t1.encodings_pars_fragment, function(e11, t11) {
      let n11 = function(e12) {
        switch (e12) {
          case a:
            return ["Linear", "( value )"];
          case r:
            return ["sRGB", "( value )"];
          default:
            return console.warn("THREE.WebGLProgram: Unsupported color space:", e12), ["Linear", "( value )"];
        }
      }(t11);
      return "vec4 " + e11 + "( vec4 value ) { return LinearTo" + n11[0] + n11[1] + "; }";
    }("linearToOutputTexel", n10.outputColorSpace), n10.useDepthPacking ? "#define DEPTH_PACKING " + n10.depthPacking : "", "\n"].filter(iM).join("\n")), m2 = iE(m2 = iS(m2 = ib(m2), n10), n10), g2 = iE(g2 = iS(g2 = ib(g2), n10), n10), m2 = iR(m2), g2 = iR(g2), n10.isWebGL2 && true !== n10.isRawShaderMaterial && (b2 = "#version 300 es\n", s2 = "precision mediump sampler2DArray;\n#define attribute in\n#define varying out\n#define texture2D texture\n" + s2, l2 = ["#define varying in", n10.glslVersion === o ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n10.glslVersion === o ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + l2);
    let A2 = b2 + s2 + m2, w2 = b2 + l2 + g2, R2 = iv(p2, p2.VERTEX_SHADER, A2), C2 = iv(p2, p2.FRAGMENT_SHADER, w2);
    if (p2.attachShader(T2, R2), p2.attachShader(T2, C2), void 0 !== n10.index0AttributeName ? p2.bindAttribLocation(T2, 0, n10.index0AttributeName) : true === n10.morphTargets && p2.bindAttribLocation(T2, 0, "position"), p2.linkProgram(T2), e10.debug.checkShaderErrors) {
      let t11 = p2.getProgramInfoLog(T2).trim(), n11 = p2.getShaderInfoLog(R2).trim(), i11 = p2.getShaderInfoLog(C2).trim(), r10 = true, a2 = true;
      if (false === p2.getProgramParameter(T2, p2.LINK_STATUS)) {
        if (r10 = false, "function" == typeof e10.debug.onShaderError)
          e10.debug.onShaderError(p2, T2, R2, C2);
        else {
          let e11 = iy(p2, R2, "vertex"), n12 = iy(p2, C2, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + p2.getError() + " - VALIDATE_STATUS " + p2.getProgramParameter(T2, p2.VALIDATE_STATUS) + "\n\nProgram Info Log: " + t11 + "\n" + e11 + "\n" + n12);
        }
      } else
        "" !== t11 ? console.warn("THREE.WebGLProgram: Program Info Log:", t11) : ("" === n11 || "" === i11) && (a2 = false);
      a2 && (this.diagnostics = { runnable: r10, programLog: t11, vertexShader: { log: n11, prefix: s2 }, fragmentShader: { log: i11, prefix: l2 } });
    }
    return p2.deleteShader(R2), p2.deleteShader(C2), this.getUniforms = function() {
      return void 0 === h2 && (h2 = new i_(p2, T2)), h2;
    }, this.getAttributes = function() {
      return void 0 === u2 && (u2 = function(e11, t11) {
        let n11 = {}, i11 = e11.getProgramParameter(t11, e11.ACTIVE_ATTRIBUTES);
        for (let r10 = 0; r10 < i11; r10++) {
          let i12 = e11.getActiveAttrib(t11, r10), a2 = i12.name, s3 = 1;
          i12.type === e11.FLOAT_MAT2 && (s3 = 2), i12.type === e11.FLOAT_MAT3 && (s3 = 3), i12.type === e11.FLOAT_MAT4 && (s3 = 4), n11[a2] = { type: i12.type, location: e11.getAttribLocation(t11, a2), locationSize: s3 };
        }
        return n11;
      }(p2, T2)), u2;
    }, this.destroy = function() {
      i10.releaseStatesOfProgram(this), p2.deleteProgram(T2), this.program = void 0;
    }, this.type = n10.shaderType, this.name = n10.shaderName, this.id = ix++, this.cacheKey = t10, this.usedTimes = 1, this.program = T2, this.vertexShader = R2, this.fragmentShader = C2, this;
  }
  let iU = 0;
  class iN {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e10) {
      let t10 = e10.vertexShader, n10 = e10.fragmentShader, i10 = this._getShaderStage(t10), r10 = this._getShaderStage(n10), a2 = this._getShaderCacheForMaterial(e10);
      return false === a2.has(i10) && (a2.add(i10), i10.usedTimes++), false === a2.has(r10) && (a2.add(r10), r10.usedTimes++), this;
    }
    remove(e10) {
      let t10 = this.materialCache.get(e10);
      for (let e11 of t10)
        e11.usedTimes--, 0 === e11.usedTimes && this.shaderCache.delete(e11.code);
      return this.materialCache.delete(e10), this;
    }
    getVertexShaderID(e10) {
      return this._getShaderStage(e10.vertexShader).id;
    }
    getFragmentShaderID(e10) {
      return this._getShaderStage(e10.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e10) {
      let t10 = this.materialCache, n10 = t10.get(e10);
      return void 0 === n10 && (n10 = /* @__PURE__ */ new Set(), t10.set(e10, n10)), n10;
    }
    _getShaderStage(e10) {
      let t10 = this.shaderCache, n10 = t10.get(e10);
      return void 0 === n10 && (n10 = new iD(e10), t10.set(e10, n10)), n10;
    }
  }
  class iD {
    constructor(e10) {
      this.id = iU++, this.code = e10, this.usedTimes = 0;
    }
  }
  function iI(e10, t10, n10, i10, r10, s2, o2) {
    let l2 = new eC(), h2 = new iN(), u2 = [], c2 = r10.isWebGL2, d2 = r10.logarithmicDepthBuffer, p2 = r10.vertexTextures, f2 = r10.precision, m2 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function g2(e11) {
      return 0 === e11 ? "uv" : `uv${e11}`;
    }
    return { getParameters: function(s3, l3, u3, _2, v2) {
      let x2, y2, M2, S2;
      let E2 = _2.fog, T2 = v2.geometry, b2 = s3.isMeshStandardMaterial ? _2.environment : null, A2 = (s3.isMeshStandardMaterial ? n10 : t10).get(s3.envMap || b2), w2 = A2 && 306 === A2.mapping ? A2.image.height : null, R2 = m2[s3.type];
      null !== s3.precision && (f2 = r10.getMaxPrecision(s3.precision)) !== s3.precision && console.warn("THREE.WebGLProgram.getParameters:", s3.precision, "not supported, using", f2, "instead.");
      let C2 = T2.morphAttributes.position || T2.morphAttributes.normal || T2.morphAttributes.color, L2 = void 0 !== C2 ? C2.length : 0, P2 = 0;
      if (void 0 !== T2.morphAttributes.position && (P2 = 1), void 0 !== T2.morphAttributes.normal && (P2 = 2), void 0 !== T2.morphAttributes.color && (P2 = 3), R2) {
        let e11 = t3[R2];
        x2 = e11.vertexShader, y2 = e11.fragmentShader;
      } else
        x2 = s3.vertexShader, y2 = s3.fragmentShader, h2.update(s3), M2 = h2.getVertexShaderID(s3), S2 = h2.getFragmentShaderID(s3);
      let U2 = e10.getRenderTarget(), N2 = true === v2.isInstancedMesh, D2 = !!s3.map, I2 = !!s3.matcap, O2 = !!A2, F2 = !!s3.aoMap, z2 = !!s3.lightMap, B2 = !!s3.bumpMap, V2 = !!s3.normalMap, G2 = !!s3.displacementMap, H2 = !!s3.emissiveMap, k2 = !!s3.metalnessMap, W2 = !!s3.roughnessMap, X2 = s3.anisotropy > 0, j2 = s3.clearcoat > 0, q2 = s3.iridescence > 0, Y2 = s3.sheen > 0, J2 = s3.transmission > 0, Z2 = X2 && !!s3.anisotropyMap, K2 = j2 && !!s3.clearcoatMap, Q2 = j2 && !!s3.clearcoatNormalMap, $2 = j2 && !!s3.clearcoatRoughnessMap, ee2 = q2 && !!s3.iridescenceMap, et2 = q2 && !!s3.iridescenceThicknessMap, en2 = Y2 && !!s3.sheenColorMap, ei2 = Y2 && !!s3.sheenRoughnessMap, er2 = !!s3.specularMap, ea2 = !!s3.specularColorMap, es2 = !!s3.specularIntensityMap, eo2 = J2 && !!s3.transmissionMap, el2 = J2 && !!s3.thicknessMap, eh2 = !!s3.gradientMap, eu2 = !!s3.alphaMap, ec2 = s3.alphaTest > 0, ed2 = !!s3.extensions, ep2 = !!T2.attributes.uv1, ef2 = !!T2.attributes.uv2, em2 = !!T2.attributes.uv3, eg2 = { isWebGL2: c2, shaderID: R2, shaderType: s3.type, shaderName: s3.name, vertexShader: x2, fragmentShader: y2, defines: s3.defines, customVertexShaderID: M2, customFragmentShaderID: S2, isRawShaderMaterial: true === s3.isRawShaderMaterial, glslVersion: s3.glslVersion, precision: f2, instancing: N2, instancingColor: N2 && null !== v2.instanceColor, supportsVertexTextures: p2, outputColorSpace: null === U2 ? e10.outputColorSpace : true === U2.isXRRenderTarget ? U2.texture.colorSpace : a, map: D2, matcap: I2, envMap: O2, envMapMode: O2 && A2.mapping, envMapCubeUVHeight: w2, aoMap: F2, lightMap: z2, bumpMap: B2, normalMap: V2, displacementMap: p2 && G2, emissiveMap: H2, normalMapObjectSpace: V2 && 1 === s3.normalMapType, normalMapTangentSpace: V2 && 0 === s3.normalMapType, metalnessMap: k2, roughnessMap: W2, anisotropy: X2, anisotropyMap: Z2, clearcoat: j2, clearcoatMap: K2, clearcoatNormalMap: Q2, clearcoatRoughnessMap: $2, iridescence: q2, iridescenceMap: ee2, iridescenceThicknessMap: et2, sheen: Y2, sheenColorMap: en2, sheenRoughnessMap: ei2, specularMap: er2, specularColorMap: ea2, specularIntensityMap: es2, transmission: J2, transmissionMap: eo2, thicknessMap: el2, gradientMap: eh2, opaque: false === s3.transparent && 1 === s3.blending, alphaMap: eu2, alphaTest: ec2, combine: s3.combine, mapUv: D2 && g2(s3.map.channel), aoMapUv: F2 && g2(s3.aoMap.channel), lightMapUv: z2 && g2(s3.lightMap.channel), bumpMapUv: B2 && g2(s3.bumpMap.channel), normalMapUv: V2 && g2(s3.normalMap.channel), displacementMapUv: G2 && g2(s3.displacementMap.channel), emissiveMapUv: H2 && g2(s3.emissiveMap.channel), metalnessMapUv: k2 && g2(s3.metalnessMap.channel), roughnessMapUv: W2 && g2(s3.roughnessMap.channel), anisotropyMapUv: Z2 && g2(s3.anisotropyMap.channel), clearcoatMapUv: K2 && g2(s3.clearcoatMap.channel), clearcoatNormalMapUv: Q2 && g2(s3.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: $2 && g2(s3.clearcoatRoughnessMap.channel), iridescenceMapUv: ee2 && g2(s3.iridescenceMap.channel), iridescenceThicknessMapUv: et2 && g2(s3.iridescenceThicknessMap.channel), sheenColorMapUv: en2 && g2(s3.sheenColorMap.channel), sheenRoughnessMapUv: ei2 && g2(s3.sheenRoughnessMap.channel), specularMapUv: er2 && g2(s3.specularMap.channel), specularColorMapUv: ea2 && g2(s3.specularColorMap.channel), specularIntensityMapUv: es2 && g2(s3.specularIntensityMap.channel), transmissionMapUv: eo2 && g2(s3.transmissionMap.channel), thicknessMapUv: el2 && g2(s3.thicknessMap.channel), alphaMapUv: eu2 && g2(s3.alphaMap.channel), vertexTangents: !!T2.attributes.tangent && (V2 || X2), vertexColors: s3.vertexColors, vertexAlphas: true === s3.vertexColors && !!T2.attributes.color && 4 === T2.attributes.color.itemSize, vertexUv1s: ep2, vertexUv2s: ef2, vertexUv3s: em2, pointsUvs: true === v2.isPoints && !!T2.attributes.uv && (D2 || eu2), fog: !!E2, useFog: true === s3.fog, fogExp2: E2 && E2.isFogExp2, flatShading: true === s3.flatShading, sizeAttenuation: true === s3.sizeAttenuation, logarithmicDepthBuffer: d2, skinning: true === v2.isSkinnedMesh, morphTargets: void 0 !== T2.morphAttributes.position, morphNormals: void 0 !== T2.morphAttributes.normal, morphColors: void 0 !== T2.morphAttributes.color, morphTargetsCount: L2, morphTextureStride: P2, numDirLights: l3.directional.length, numPointLights: l3.point.length, numSpotLights: l3.spot.length, numSpotLightMaps: l3.spotLightMap.length, numRectAreaLights: l3.rectArea.length, numHemiLights: l3.hemi.length, numDirLightShadows: l3.directionalShadowMap.length, numPointLightShadows: l3.pointShadowMap.length, numSpotLightShadows: l3.spotShadowMap.length, numSpotLightShadowsWithMaps: l3.numSpotLightShadowsWithMaps, numClippingPlanes: o2.numPlanes, numClipIntersection: o2.numIntersection, dithering: s3.dithering, shadowMapEnabled: e10.shadowMap.enabled && u3.length > 0, shadowMapType: e10.shadowMap.type, toneMapping: s3.toneMapped ? e10.toneMapping : 0, useLegacyLights: e10.useLegacyLights, premultipliedAlpha: s3.premultipliedAlpha, doubleSided: 2 === s3.side, flipSided: 1 === s3.side, useDepthPacking: s3.depthPacking >= 0, depthPacking: s3.depthPacking || 0, index0AttributeName: s3.index0AttributeName, extensionDerivatives: ed2 && true === s3.extensions.derivatives, extensionFragDepth: ed2 && true === s3.extensions.fragDepth, extensionDrawBuffers: ed2 && true === s3.extensions.drawBuffers, extensionShaderTextureLOD: ed2 && true === s3.extensions.shaderTextureLOD, rendererExtensionFragDepth: c2 || i10.has("EXT_frag_depth"), rendererExtensionDrawBuffers: c2 || i10.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: c2 || i10.has("EXT_shader_texture_lod"), customProgramCacheKey: s3.customProgramCacheKey() };
      return eg2;
    }, getProgramCacheKey: function(t11) {
      let n11 = [];
      if (t11.shaderID ? n11.push(t11.shaderID) : (n11.push(t11.customVertexShaderID), n11.push(t11.customFragmentShaderID)), void 0 !== t11.defines)
        for (let e11 in t11.defines)
          n11.push(e11), n11.push(t11.defines[e11]);
      return false === t11.isRawShaderMaterial && (n11.push(t11.precision), n11.push(t11.outputColorSpace), n11.push(t11.envMapMode), n11.push(t11.envMapCubeUVHeight), n11.push(t11.mapUv), n11.push(t11.alphaMapUv), n11.push(t11.lightMapUv), n11.push(t11.aoMapUv), n11.push(t11.bumpMapUv), n11.push(t11.normalMapUv), n11.push(t11.displacementMapUv), n11.push(t11.emissiveMapUv), n11.push(t11.metalnessMapUv), n11.push(t11.roughnessMapUv), n11.push(t11.anisotropyMapUv), n11.push(t11.clearcoatMapUv), n11.push(t11.clearcoatNormalMapUv), n11.push(t11.clearcoatRoughnessMapUv), n11.push(t11.iridescenceMapUv), n11.push(t11.iridescenceThicknessMapUv), n11.push(t11.sheenColorMapUv), n11.push(t11.sheenRoughnessMapUv), n11.push(t11.specularMapUv), n11.push(t11.specularColorMapUv), n11.push(t11.specularIntensityMapUv), n11.push(t11.transmissionMapUv), n11.push(t11.thicknessMapUv), n11.push(t11.combine), n11.push(t11.fogExp2), n11.push(t11.sizeAttenuation), n11.push(t11.morphTargetsCount), n11.push(t11.morphAttributeCount), n11.push(t11.numDirLights), n11.push(t11.numPointLights), n11.push(t11.numSpotLights), n11.push(t11.numSpotLightMaps), n11.push(t11.numHemiLights), n11.push(t11.numRectAreaLights), n11.push(t11.numDirLightShadows), n11.push(t11.numPointLightShadows), n11.push(t11.numSpotLightShadows), n11.push(t11.numSpotLightShadowsWithMaps), n11.push(t11.shadowMapType), n11.push(t11.toneMapping), n11.push(t11.numClippingPlanes), n11.push(t11.numClipIntersection), n11.push(t11.depthPacking), l2.disableAll(), t11.isWebGL2 && l2.enable(0), t11.supportsVertexTextures && l2.enable(1), t11.instancing && l2.enable(2), t11.instancingColor && l2.enable(3), t11.matcap && l2.enable(4), t11.envMap && l2.enable(5), t11.normalMapObjectSpace && l2.enable(6), t11.normalMapTangentSpace && l2.enable(7), t11.clearcoat && l2.enable(8), t11.iridescence && l2.enable(9), t11.alphaTest && l2.enable(10), t11.vertexColors && l2.enable(11), t11.vertexAlphas && l2.enable(12), t11.vertexUv1s && l2.enable(13), t11.vertexUv2s && l2.enable(14), t11.vertexUv3s && l2.enable(15), t11.vertexTangents && l2.enable(16), t11.anisotropy && l2.enable(17), n11.push(l2.mask), l2.disableAll(), t11.fog && l2.enable(0), t11.useFog && l2.enable(1), t11.flatShading && l2.enable(2), t11.logarithmicDepthBuffer && l2.enable(3), t11.skinning && l2.enable(4), t11.morphTargets && l2.enable(5), t11.morphNormals && l2.enable(6), t11.morphColors && l2.enable(7), t11.premultipliedAlpha && l2.enable(8), t11.shadowMapEnabled && l2.enable(9), t11.useLegacyLights && l2.enable(10), t11.doubleSided && l2.enable(11), t11.flipSided && l2.enable(12), t11.useDepthPacking && l2.enable(13), t11.dithering && l2.enable(14), t11.transmission && l2.enable(15), t11.sheen && l2.enable(16), t11.opaque && l2.enable(17), t11.pointsUvs && l2.enable(18), n11.push(l2.mask), n11.push(e10.outputColorSpace)), n11.push(t11.customProgramCacheKey), n11.join();
    }, getUniforms: function(e11) {
      let t11;
      let n11 = m2[e11.type];
      if (n11) {
        let e12 = t3[n11];
        t11 = tz.clone(e12.uniforms);
      } else
        t11 = e11.uniforms;
      return t11;
    }, acquireProgram: function(t11, n11) {
      let i11;
      for (let e11 = 0, t12 = u2.length; e11 < t12; e11++) {
        let t13 = u2[e11];
        if (t13.cacheKey === n11) {
          i11 = t13, ++i11.usedTimes;
          break;
        }
      }
      return void 0 === i11 && (i11 = new iP(e10, n11, t11, s2), u2.push(i11)), i11;
    }, releaseProgram: function(e11) {
      if (0 == --e11.usedTimes) {
        let t11 = u2.indexOf(e11);
        u2[t11] = u2[u2.length - 1], u2.pop(), e11.destroy();
      }
    }, releaseShaderCache: function(e11) {
      h2.remove(e11);
    }, programs: u2, dispose: function() {
      h2.dispose();
    } };
  }
  function iO() {
    let e10 = /* @__PURE__ */ new WeakMap();
    return { get: function(t10) {
      let n10 = e10.get(t10);
      return void 0 === n10 && (n10 = {}, e10.set(t10, n10)), n10;
    }, remove: function(t10) {
      e10.delete(t10);
    }, update: function(t10, n10, i10) {
      e10.get(t10)[n10] = i10;
    }, dispose: function() {
      e10 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function iF(e10, t10) {
    return e10.groupOrder !== t10.groupOrder ? e10.groupOrder - t10.groupOrder : e10.renderOrder !== t10.renderOrder ? e10.renderOrder - t10.renderOrder : e10.material.id !== t10.material.id ? e10.material.id - t10.material.id : e10.z !== t10.z ? e10.z - t10.z : e10.id - t10.id;
  }
  function iz(e10, t10) {
    return e10.groupOrder !== t10.groupOrder ? e10.groupOrder - t10.groupOrder : e10.renderOrder !== t10.renderOrder ? e10.renderOrder - t10.renderOrder : e10.z !== t10.z ? t10.z - e10.z : e10.id - t10.id;
  }
  function iB() {
    let e10 = [], t10 = 0, n10 = [], i10 = [], r10 = [];
    function a2(n11, i11, r11, a3, s2, o2) {
      let l2 = e10[t10];
      return void 0 === l2 ? (l2 = { id: n11.id, object: n11, geometry: i11, material: r11, groupOrder: a3, renderOrder: n11.renderOrder, z: s2, group: o2 }, e10[t10] = l2) : (l2.id = n11.id, l2.object = n11, l2.geometry = i11, l2.material = r11, l2.groupOrder = a3, l2.renderOrder = n11.renderOrder, l2.z = s2, l2.group = o2), t10++, l2;
    }
    return { opaque: n10, transmissive: i10, transparent: r10, init: function() {
      t10 = 0, n10.length = 0, i10.length = 0, r10.length = 0;
    }, push: function(e11, t11, s2, o2, l2, h2) {
      let u2 = a2(e11, t11, s2, o2, l2, h2);
      s2.transmission > 0 ? i10.push(u2) : true === s2.transparent ? r10.push(u2) : n10.push(u2);
    }, unshift: function(e11, t11, s2, o2, l2, h2) {
      let u2 = a2(e11, t11, s2, o2, l2, h2);
      s2.transmission > 0 ? i10.unshift(u2) : true === s2.transparent ? r10.unshift(u2) : n10.unshift(u2);
    }, finish: function() {
      for (let n11 = t10, i11 = e10.length; n11 < i11; n11++) {
        let t11 = e10[n11];
        if (null === t11.id)
          break;
        t11.id = null, t11.object = null, t11.geometry = null, t11.material = null, t11.group = null;
      }
    }, sort: function(e11, t11) {
      n10.length > 1 && n10.sort(e11 || iF), i10.length > 1 && i10.sort(t11 || iz), r10.length > 1 && r10.sort(t11 || iz);
    } };
  }
  function iV() {
    let e10 = /* @__PURE__ */ new WeakMap();
    return { get: function(t10, n10) {
      let i10;
      let r10 = e10.get(t10);
      return void 0 === r10 ? (i10 = new iB(), e10.set(t10, [i10])) : n10 >= r10.length ? (i10 = new iB(), r10.push(i10)) : i10 = r10[n10], i10;
    }, dispose: function() {
      e10 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function iG() {
    let e10 = {};
    return { get: function(t10) {
      let n10;
      if (void 0 !== e10[t10.id])
        return e10[t10.id];
      switch (t10.type) {
        case "DirectionalLight":
          n10 = { direction: new H(), color: new e8() };
          break;
        case "SpotLight":
          n10 = { position: new H(), direction: new H(), color: new e8(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          n10 = { position: new H(), color: new e8(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n10 = { direction: new H(), skyColor: new e8(), groundColor: new e8() };
          break;
        case "RectAreaLight":
          n10 = { color: new e8(), position: new H(), halfWidth: new H(), halfHeight: new H() };
      }
      return e10[t10.id] = n10, n10;
    } };
  }
  let iH = 0;
  function ik(e10, t10) {
    return (t10.castShadow ? 2 : 0) - (e10.castShadow ? 2 : 0) + (t10.map ? 1 : 0) - (e10.map ? 1 : 0);
  }
  function iW(e10, t10) {
    let n10 = new iG(), i10 = function() {
      let e11 = {};
      return { get: function(t11) {
        let n11;
        if (void 0 !== e11[t11.id])
          return e11[t11.id];
        switch (t11.type) {
          case "DirectionalLight":
          case "SpotLight":
            n11 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new v() };
            break;
          case "PointLight":
            n11 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new v(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return e11[t11.id] = n11, n11;
      } };
    }(), r10 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0 };
    for (let e11 = 0; e11 < 9; e11++)
      r10.probe.push(new H());
    let a2 = new H(), s2 = new ev(), o2 = new ev();
    return { setup: function(a3, s3) {
      let o3 = 0, l2 = 0, h2 = 0;
      for (let e11 = 0; e11 < 9; e11++)
        r10.probe[e11].set(0, 0, 0);
      let u2 = 0, c2 = 0, d2 = 0, p2 = 0, f2 = 0, m2 = 0, g2 = 0, _2 = 0, v2 = 0, x2 = 0;
      a3.sort(ik);
      let y2 = true === s3 ? Math.PI : 1;
      for (let e11 = 0, t11 = a3.length; e11 < t11; e11++) {
        let t12 = a3[e11], s4 = t12.color, M3 = t12.intensity, S2 = t12.distance, E2 = t12.shadow && t12.shadow.map ? t12.shadow.map.texture : null;
        if (t12.isAmbientLight)
          o3 += s4.r * M3 * y2, l2 += s4.g * M3 * y2, h2 += s4.b * M3 * y2;
        else if (t12.isLightProbe)
          for (let e12 = 0; e12 < 9; e12++)
            r10.probe[e12].addScaledVector(t12.sh.coefficients[e12], M3);
        else if (t12.isDirectionalLight) {
          let e12 = n10.get(t12);
          if (e12.color.copy(t12.color).multiplyScalar(t12.intensity * y2), t12.castShadow) {
            let e13 = t12.shadow, n11 = i10.get(t12);
            n11.shadowBias = e13.bias, n11.shadowNormalBias = e13.normalBias, n11.shadowRadius = e13.radius, n11.shadowMapSize = e13.mapSize, r10.directionalShadow[u2] = n11, r10.directionalShadowMap[u2] = E2, r10.directionalShadowMatrix[u2] = t12.shadow.matrix, m2++;
          }
          r10.directional[u2] = e12, u2++;
        } else if (t12.isSpotLight) {
          let e12 = n10.get(t12);
          e12.position.setFromMatrixPosition(t12.matrixWorld), e12.color.copy(s4).multiplyScalar(M3 * y2), e12.distance = S2, e12.coneCos = Math.cos(t12.angle), e12.penumbraCos = Math.cos(t12.angle * (1 - t12.penumbra)), e12.decay = t12.decay, r10.spot[d2] = e12;
          let a4 = t12.shadow;
          if (t12.map && (r10.spotLightMap[v2] = t12.map, v2++, a4.updateMatrices(t12), t12.castShadow && x2++), r10.spotLightMatrix[d2] = a4.matrix, t12.castShadow) {
            let e13 = i10.get(t12);
            e13.shadowBias = a4.bias, e13.shadowNormalBias = a4.normalBias, e13.shadowRadius = a4.radius, e13.shadowMapSize = a4.mapSize, r10.spotShadow[d2] = e13, r10.spotShadowMap[d2] = E2, _2++;
          }
          d2++;
        } else if (t12.isRectAreaLight) {
          let e12 = n10.get(t12);
          e12.color.copy(s4).multiplyScalar(M3), e12.halfWidth.set(0.5 * t12.width, 0, 0), e12.halfHeight.set(0, 0.5 * t12.height, 0), r10.rectArea[p2] = e12, p2++;
        } else if (t12.isPointLight) {
          let e12 = n10.get(t12);
          if (e12.color.copy(t12.color).multiplyScalar(t12.intensity * y2), e12.distance = t12.distance, e12.decay = t12.decay, t12.castShadow) {
            let e13 = t12.shadow, n11 = i10.get(t12);
            n11.shadowBias = e13.bias, n11.shadowNormalBias = e13.normalBias, n11.shadowRadius = e13.radius, n11.shadowMapSize = e13.mapSize, n11.shadowCameraNear = e13.camera.near, n11.shadowCameraFar = e13.camera.far, r10.pointShadow[c2] = n11, r10.pointShadowMap[c2] = E2, r10.pointShadowMatrix[c2] = t12.shadow.matrix, g2++;
          }
          r10.point[c2] = e12, c2++;
        } else if (t12.isHemisphereLight) {
          let e12 = n10.get(t12);
          e12.skyColor.copy(t12.color).multiplyScalar(M3 * y2), e12.groundColor.copy(t12.groundColor).multiplyScalar(M3 * y2), r10.hemi[f2] = e12, f2++;
        }
      }
      p2 > 0 && (t10.isWebGL2 ? (r10.rectAreaLTC1 = t2.LTC_FLOAT_1, r10.rectAreaLTC2 = t2.LTC_FLOAT_2) : true === e10.has("OES_texture_float_linear") ? (r10.rectAreaLTC1 = t2.LTC_FLOAT_1, r10.rectAreaLTC2 = t2.LTC_FLOAT_2) : true === e10.has("OES_texture_half_float_linear") ? (r10.rectAreaLTC1 = t2.LTC_HALF_1, r10.rectAreaLTC2 = t2.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r10.ambient[0] = o3, r10.ambient[1] = l2, r10.ambient[2] = h2;
      let M2 = r10.hash;
      (M2.directionalLength !== u2 || M2.pointLength !== c2 || M2.spotLength !== d2 || M2.rectAreaLength !== p2 || M2.hemiLength !== f2 || M2.numDirectionalShadows !== m2 || M2.numPointShadows !== g2 || M2.numSpotShadows !== _2 || M2.numSpotMaps !== v2) && (r10.directional.length = u2, r10.spot.length = d2, r10.rectArea.length = p2, r10.point.length = c2, r10.hemi.length = f2, r10.directionalShadow.length = m2, r10.directionalShadowMap.length = m2, r10.pointShadow.length = g2, r10.pointShadowMap.length = g2, r10.spotShadow.length = _2, r10.spotShadowMap.length = _2, r10.directionalShadowMatrix.length = m2, r10.pointShadowMatrix.length = g2, r10.spotLightMatrix.length = _2 + v2 - x2, r10.spotLightMap.length = v2, r10.numSpotLightShadowsWithMaps = x2, M2.directionalLength = u2, M2.pointLength = c2, M2.spotLength = d2, M2.rectAreaLength = p2, M2.hemiLength = f2, M2.numDirectionalShadows = m2, M2.numPointShadows = g2, M2.numSpotShadows = _2, M2.numSpotMaps = v2, r10.version = iH++);
    }, setupView: function(e11, t11) {
      let n11 = 0, i11 = 0, l2 = 0, h2 = 0, u2 = 0, c2 = t11.matrixWorldInverse;
      for (let t12 = 0, d2 = e11.length; t12 < d2; t12++) {
        let d3 = e11[t12];
        if (d3.isDirectionalLight) {
          let e12 = r10.directional[n11];
          e12.direction.setFromMatrixPosition(d3.matrixWorld), a2.setFromMatrixPosition(d3.target.matrixWorld), e12.direction.sub(a2), e12.direction.transformDirection(c2), n11++;
        } else if (d3.isSpotLight) {
          let e12 = r10.spot[l2];
          e12.position.setFromMatrixPosition(d3.matrixWorld), e12.position.applyMatrix4(c2), e12.direction.setFromMatrixPosition(d3.matrixWorld), a2.setFromMatrixPosition(d3.target.matrixWorld), e12.direction.sub(a2), e12.direction.transformDirection(c2), l2++;
        } else if (d3.isRectAreaLight) {
          let e12 = r10.rectArea[h2];
          e12.position.setFromMatrixPosition(d3.matrixWorld), e12.position.applyMatrix4(c2), o2.identity(), s2.copy(d3.matrixWorld), s2.premultiply(c2), o2.extractRotation(s2), e12.halfWidth.set(0.5 * d3.width, 0, 0), e12.halfHeight.set(0, 0.5 * d3.height, 0), e12.halfWidth.applyMatrix4(o2), e12.halfHeight.applyMatrix4(o2), h2++;
        } else if (d3.isPointLight) {
          let e12 = r10.point[i11];
          e12.position.setFromMatrixPosition(d3.matrixWorld), e12.position.applyMatrix4(c2), i11++;
        } else if (d3.isHemisphereLight) {
          let e12 = r10.hemi[u2];
          e12.direction.setFromMatrixPosition(d3.matrixWorld), e12.direction.transformDirection(c2), u2++;
        }
      }
    }, state: r10 };
  }
  function iX(e10, t10) {
    let n10 = new iW(e10, t10), i10 = [], r10 = [];
    return { init: function() {
      i10.length = 0, r10.length = 0;
    }, state: { lightsArray: i10, shadowsArray: r10, lights: n10 }, setupLights: function(e11) {
      n10.setup(i10, e11);
    }, setupLightsView: function(e11) {
      n10.setupView(i10, e11);
    }, pushLight: function(e11) {
      i10.push(e11);
    }, pushShadow: function(e11) {
      r10.push(e11);
    } };
  }
  function ij(e10, t10) {
    let n10 = /* @__PURE__ */ new WeakMap();
    return { get: function(i10, r10 = 0) {
      let a2;
      let s2 = n10.get(i10);
      return void 0 === s2 ? (a2 = new iX(e10, t10), n10.set(i10, [a2])) : r10 >= s2.length ? (a2 = new iX(e10, t10), s2.push(a2)) : a2 = s2[r10], a2;
    }, dispose: function() {
      n10 = /* @__PURE__ */ new WeakMap();
    } };
  }
  class iq extends e3 {
    constructor(e10) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e10);
    }
    copy(e10) {
      return super.copy(e10), this.depthPacking = e10.depthPacking, this.map = e10.map, this.alphaMap = e10.alphaMap, this.displacementMap = e10.displacementMap, this.displacementScale = e10.displacementScale, this.displacementBias = e10.displacementBias, this.wireframe = e10.wireframe, this.wireframeLinewidth = e10.wireframeLinewidth, this;
    }
  }
  class iY extends e3 {
    constructor(e10) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e10);
    }
    copy(e10) {
      return super.copy(e10), this.map = e10.map, this.alphaMap = e10.alphaMap, this.displacementMap = e10.displacementMap, this.displacementScale = e10.displacementScale, this.displacementBias = e10.displacementBias, this;
    }
  }
  function iJ(e10, t10, n10) {
    let i10 = new tK(), r10 = new v(), a2 = new v(), s2 = new z(), o2 = new iq({ depthPacking: 3201 }), l2 = new iY(), h2 = {}, u2 = n10.maxTextureSize, c2 = { 0: 1, 1: 0, 2: 2 }, d2 = new tB({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new v() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), p2 = d2.clone();
    p2.defines.HORIZONTAL_PASS = 1;
    let f2 = new tf();
    f2.setAttribute("position", new ti(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    let m2 = new tU(f2, d2), g2 = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = 1;
    let _2 = this.type;
    function x2(t11, n11, i11, r11) {
      let a3 = null, s3 = true === i11.isPointLight ? t11.customDistanceMaterial : t11.customDepthMaterial;
      if (void 0 !== s3)
        a3 = s3;
      else if (a3 = true === i11.isPointLight ? l2 : o2, e10.localClippingEnabled && true === n11.clipShadows && Array.isArray(n11.clippingPlanes) && 0 !== n11.clippingPlanes.length || n11.displacementMap && 0 !== n11.displacementScale || n11.alphaMap && n11.alphaTest > 0 || n11.map && n11.alphaTest > 0) {
        let e11 = a3.uuid, t12 = n11.uuid, i12 = h2[e11];
        void 0 === i12 && (i12 = {}, h2[e11] = i12);
        let r12 = i12[t12];
        void 0 === r12 && (r12 = a3.clone(), i12[t12] = r12), a3 = r12;
      }
      if (a3.visible = n11.visible, a3.wireframe = n11.wireframe, 3 === r11 ? a3.side = null !== n11.shadowSide ? n11.shadowSide : n11.side : a3.side = null !== n11.shadowSide ? n11.shadowSide : c2[n11.side], a3.alphaMap = n11.alphaMap, a3.alphaTest = n11.alphaTest, a3.map = n11.map, a3.clipShadows = n11.clipShadows, a3.clippingPlanes = n11.clippingPlanes, a3.clipIntersection = n11.clipIntersection, a3.displacementMap = n11.displacementMap, a3.displacementScale = n11.displacementScale, a3.displacementBias = n11.displacementBias, a3.wireframeLinewidth = n11.wireframeLinewidth, a3.linewidth = n11.linewidth, true === i11.isPointLight && true === a3.isMeshDistanceMaterial) {
        let t12 = e10.properties.get(a3);
        t12.light = i11;
      }
      return a3;
    }
    this.render = function(n11, o3, l3) {
      if (false === g2.enabled || false === g2.autoUpdate && false === g2.needsUpdate || 0 === n11.length)
        return;
      let h3 = e10.getRenderTarget(), c3 = e10.getActiveCubeFace(), f3 = e10.getActiveMipmapLevel(), v2 = e10.state;
      v2.setBlending(0), v2.buffers.color.setClear(1, 1, 1, 1), v2.buffers.depth.setTest(true), v2.setScissorTest(false);
      let y2 = 3 !== _2 && 3 === this.type, M2 = 3 === _2 && 3 !== this.type;
      for (let h4 = 0, c4 = n11.length; h4 < c4; h4++) {
        let c5 = n11[h4], f4 = c5.shadow;
        if (void 0 === f4) {
          console.warn("THREE.WebGLShadowMap:", c5, "has no shadow.");
          continue;
        }
        if (false === f4.autoUpdate && false === f4.needsUpdate)
          continue;
        r10.copy(f4.mapSize);
        let g3 = f4.getFrameExtents();
        if (r10.multiply(g3), a2.copy(f4.mapSize), (r10.x > u2 || r10.y > u2) && (r10.x > u2 && (a2.x = Math.floor(u2 / g3.x), r10.x = a2.x * g3.x, f4.mapSize.x = a2.x), r10.y > u2 && (a2.y = Math.floor(u2 / g3.y), r10.y = a2.y * g3.y, f4.mapSize.y = a2.y)), null === f4.map || true === y2 || true === M2) {
          let e11 = 3 !== this.type ? { minFilter: 1003, magFilter: 1003 } : {};
          null !== f4.map && f4.map.dispose(), f4.map = new B(r10.x, r10.y, e11), f4.map.texture.name = c5.name + ".shadowMap", f4.camera.updateProjectionMatrix();
        }
        e10.setRenderTarget(f4.map), e10.clear();
        let _3 = f4.getViewportCount();
        for (let n12 = 0; n12 < _3; n12++) {
          let r11 = f4.getViewport(n12);
          s2.set(a2.x * r11.x, a2.y * r11.y, a2.x * r11.z, a2.y * r11.w), v2.viewport(s2), f4.updateMatrices(c5, n12), i10 = f4.getFrustum(), function n13(r12, a3, s3, o4, l4) {
            if (false === r12.visible)
              return;
            let h5 = r12.layers.test(a3.layers);
            if (h5 && (r12.isMesh || r12.isLine || r12.isPoints) && (r12.castShadow || r12.receiveShadow && 3 === l4) && (!r12.frustumCulled || i10.intersectsObject(r12))) {
              r12.modelViewMatrix.multiplyMatrices(s3.matrixWorldInverse, r12.matrixWorld);
              let n14 = t10.update(r12), i11 = r12.material;
              if (Array.isArray(i11)) {
                let t11 = n14.groups;
                for (let a4 = 0, h6 = t11.length; a4 < h6; a4++) {
                  let h7 = t11[a4], u4 = i11[h7.materialIndex];
                  if (u4 && u4.visible) {
                    let t12 = x2(r12, u4, o4, l4);
                    e10.renderBufferDirect(s3, null, n14, t12, r12, h7);
                  }
                }
              } else if (i11.visible) {
                let t11 = x2(r12, i11, o4, l4);
                e10.renderBufferDirect(s3, null, n14, t11, r12, null);
              }
            }
            let u3 = r12.children;
            for (let e11 = 0, t11 = u3.length; e11 < t11; e11++)
              n13(u3[e11], a3, s3, o4, l4);
          }(o3, l3, f4.camera, c5, this.type);
        }
        true !== f4.isPointLightShadow && 3 === this.type && function(n12, i11) {
          let a3 = t10.update(m2);
          d2.defines.VSM_SAMPLES !== n12.blurSamples && (d2.defines.VSM_SAMPLES = n12.blurSamples, p2.defines.VSM_SAMPLES = n12.blurSamples, d2.needsUpdate = true, p2.needsUpdate = true), null === n12.mapPass && (n12.mapPass = new B(r10.x, r10.y)), d2.uniforms.shadow_pass.value = n12.map.texture, d2.uniforms.resolution.value = n12.mapSize, d2.uniforms.radius.value = n12.radius, e10.setRenderTarget(n12.mapPass), e10.clear(), e10.renderBufferDirect(i11, null, a3, d2, m2, null), p2.uniforms.shadow_pass.value = n12.mapPass.texture, p2.uniforms.resolution.value = n12.mapSize, p2.uniforms.radius.value = n12.radius, e10.setRenderTarget(n12.map), e10.clear(), e10.renderBufferDirect(i11, null, a3, p2, m2, null);
        }(f4, l3), f4.needsUpdate = false;
      }
      _2 = this.type, g2.needsUpdate = false, e10.setRenderTarget(h3, c3, f3);
    };
  }
  function iZ(e10, t10, n10) {
    let i10 = n10.isWebGL2, r10 = new function() {
      let t11 = false, n11 = new z(), i11 = null, r11 = new z(0, 0, 0, 0);
      return { setMask: function(n12) {
        i11 === n12 || t11 || (e10.colorMask(n12, n12, n12, n12), i11 = n12);
      }, setLocked: function(e11) {
        t11 = e11;
      }, setClear: function(t12, i12, a3, s3, o3) {
        true === o3 && (t12 *= s3, i12 *= s3, a3 *= s3), n11.set(t12, i12, a3, s3), false === r11.equals(n11) && (e10.clearColor(t12, i12, a3, s3), r11.copy(n11));
      }, reset: function() {
        t11 = false, i11 = null, r11.set(-1, 0, 0, 0);
      } };
    }(), a2 = new function() {
      let t11 = false, n11 = null, i11 = null, r11 = null;
      return { setTest: function(t12) {
        t12 ? V2(e10.DEPTH_TEST) : G2(e10.DEPTH_TEST);
      }, setMask: function(i12) {
        n11 === i12 || t11 || (e10.depthMask(i12), n11 = i12);
      }, setFunc: function(t12) {
        if (i11 !== t12) {
          switch (t12) {
            case 0:
              e10.depthFunc(e10.NEVER);
              break;
            case 1:
              e10.depthFunc(e10.ALWAYS);
              break;
            case 2:
              e10.depthFunc(e10.LESS);
              break;
            case 3:
            default:
              e10.depthFunc(e10.LEQUAL);
              break;
            case 4:
              e10.depthFunc(e10.EQUAL);
              break;
            case 5:
              e10.depthFunc(e10.GEQUAL);
              break;
            case 6:
              e10.depthFunc(e10.GREATER);
              break;
            case 7:
              e10.depthFunc(e10.NOTEQUAL);
          }
          i11 = t12;
        }
      }, setLocked: function(e11) {
        t11 = e11;
      }, setClear: function(t12) {
        r11 !== t12 && (e10.clearDepth(t12), r11 = t12);
      }, reset: function() {
        t11 = false, n11 = null, i11 = null, r11 = null;
      } };
    }(), s2 = new function() {
      let t11 = false, n11 = null, i11 = null, r11 = null, a3 = null, s3 = null, o3 = null, l3 = null, h3 = null;
      return { setTest: function(n12) {
        t11 || (n12 ? V2(e10.STENCIL_TEST) : G2(e10.STENCIL_TEST));
      }, setMask: function(i12) {
        n11 === i12 || t11 || (e10.stencilMask(i12), n11 = i12);
      }, setFunc: function(t12, n12, s4) {
        (i11 !== t12 || r11 !== n12 || a3 !== s4) && (e10.stencilFunc(t12, n12, s4), i11 = t12, r11 = n12, a3 = s4);
      }, setOp: function(t12, n12, i12) {
        (s3 !== t12 || o3 !== n12 || l3 !== i12) && (e10.stencilOp(t12, n12, i12), s3 = t12, o3 = n12, l3 = i12);
      }, setLocked: function(e11) {
        t11 = e11;
      }, setClear: function(t12) {
        h3 !== t12 && (e10.clearStencil(t12), h3 = t12);
      }, reset: function() {
        t11 = false, n11 = null, i11 = null, r11 = null, a3 = null, s3 = null, o3 = null, l3 = null, h3 = null;
      } };
    }(), o2 = /* @__PURE__ */ new WeakMap(), l2 = /* @__PURE__ */ new WeakMap(), h2 = {}, u2 = {}, c2 = /* @__PURE__ */ new WeakMap(), d2 = [], p2 = null, f2 = false, m2 = null, g2 = null, _2 = null, v2 = null, x2 = null, y2 = null, M2 = null, S2 = false, E2 = null, T2 = null, b2 = null, A2 = null, w2 = null, R2 = e10.getParameter(e10.MAX_COMBINED_TEXTURE_IMAGE_UNITS), C2 = false, L2 = e10.getParameter(e10.VERSION);
    -1 !== L2.indexOf("WebGL") ? C2 = parseFloat(/^WebGL (\d)/.exec(L2)[1]) >= 1 : -1 !== L2.indexOf("OpenGL ES") && (C2 = parseFloat(/^OpenGL ES (\d)/.exec(L2)[1]) >= 2);
    let P2 = null, U2 = {}, N2 = e10.getParameter(e10.SCISSOR_BOX), D2 = e10.getParameter(e10.VIEWPORT), I2 = new z().fromArray(N2), O2 = new z().fromArray(D2);
    function F2(t11, n11, r11, a3) {
      let s3 = new Uint8Array(4), o3 = e10.createTexture();
      e10.bindTexture(t11, o3), e10.texParameteri(t11, e10.TEXTURE_MIN_FILTER, e10.NEAREST), e10.texParameteri(t11, e10.TEXTURE_MAG_FILTER, e10.NEAREST);
      for (let o4 = 0; o4 < r11; o4++)
        i10 && (t11 === e10.TEXTURE_3D || t11 === e10.TEXTURE_2D_ARRAY) ? e10.texImage3D(n11, 0, e10.RGBA, 1, 1, a3, 0, e10.RGBA, e10.UNSIGNED_BYTE, s3) : e10.texImage2D(n11 + o4, 0, e10.RGBA, 1, 1, 0, e10.RGBA, e10.UNSIGNED_BYTE, s3);
      return o3;
    }
    let B2 = {};
    function V2(t11) {
      true !== h2[t11] && (e10.enable(t11), h2[t11] = true);
    }
    function G2(t11) {
      false !== h2[t11] && (e10.disable(t11), h2[t11] = false);
    }
    B2[e10.TEXTURE_2D] = F2(e10.TEXTURE_2D, e10.TEXTURE_2D, 1), B2[e10.TEXTURE_CUBE_MAP] = F2(e10.TEXTURE_CUBE_MAP, e10.TEXTURE_CUBE_MAP_POSITIVE_X, 6), i10 && (B2[e10.TEXTURE_2D_ARRAY] = F2(e10.TEXTURE_2D_ARRAY, e10.TEXTURE_2D_ARRAY, 1, 1), B2[e10.TEXTURE_3D] = F2(e10.TEXTURE_3D, e10.TEXTURE_3D, 1, 1)), r10.setClear(0, 0, 0, 1), a2.setClear(1), s2.setClear(0), V2(e10.DEPTH_TEST), a2.setFunc(3), X2(false), j2(1), V2(e10.CULL_FACE), W2(0);
    let H2 = { 100: e10.FUNC_ADD, 101: e10.FUNC_SUBTRACT, 102: e10.FUNC_REVERSE_SUBTRACT };
    if (i10)
      H2[103] = e10.MIN, H2[104] = e10.MAX;
    else {
      let e11 = t10.get("EXT_blend_minmax");
      null !== e11 && (H2[103] = e11.MIN_EXT, H2[104] = e11.MAX_EXT);
    }
    let k2 = { 200: e10.ZERO, 201: e10.ONE, 202: e10.SRC_COLOR, 204: e10.SRC_ALPHA, 210: e10.SRC_ALPHA_SATURATE, 208: e10.DST_COLOR, 206: e10.DST_ALPHA, 203: e10.ONE_MINUS_SRC_COLOR, 205: e10.ONE_MINUS_SRC_ALPHA, 209: e10.ONE_MINUS_DST_COLOR, 207: e10.ONE_MINUS_DST_ALPHA };
    function W2(t11, n11, i11, r11, a3, s3, o3, l3) {
      if (0 === t11) {
        true === f2 && (G2(e10.BLEND), f2 = false);
        return;
      }
      if (false === f2 && (V2(e10.BLEND), f2 = true), 5 !== t11) {
        if (t11 !== m2 || l3 !== S2) {
          if ((100 !== g2 || 100 !== x2) && (e10.blendEquation(e10.FUNC_ADD), g2 = 100, x2 = 100), l3)
            switch (t11) {
              case 1:
                e10.blendFuncSeparate(e10.ONE, e10.ONE_MINUS_SRC_ALPHA, e10.ONE, e10.ONE_MINUS_SRC_ALPHA);
                break;
              case 2:
                e10.blendFunc(e10.ONE, e10.ONE);
                break;
              case 3:
                e10.blendFuncSeparate(e10.ZERO, e10.ONE_MINUS_SRC_COLOR, e10.ZERO, e10.ONE);
                break;
              case 4:
                e10.blendFuncSeparate(e10.ZERO, e10.SRC_COLOR, e10.ZERO, e10.SRC_ALPHA);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", t11);
            }
          else
            switch (t11) {
              case 1:
                e10.blendFuncSeparate(e10.SRC_ALPHA, e10.ONE_MINUS_SRC_ALPHA, e10.ONE, e10.ONE_MINUS_SRC_ALPHA);
                break;
              case 2:
                e10.blendFunc(e10.SRC_ALPHA, e10.ONE);
                break;
              case 3:
                e10.blendFuncSeparate(e10.ZERO, e10.ONE_MINUS_SRC_COLOR, e10.ZERO, e10.ONE);
                break;
              case 4:
                e10.blendFunc(e10.ZERO, e10.SRC_COLOR);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", t11);
            }
          _2 = null, v2 = null, y2 = null, M2 = null, m2 = t11, S2 = l3;
        }
        return;
      }
      a3 = a3 || n11, s3 = s3 || i11, o3 = o3 || r11, (n11 !== g2 || a3 !== x2) && (e10.blendEquationSeparate(H2[n11], H2[a3]), g2 = n11, x2 = a3), (i11 !== _2 || r11 !== v2 || s3 !== y2 || o3 !== M2) && (e10.blendFuncSeparate(k2[i11], k2[r11], k2[s3], k2[o3]), _2 = i11, v2 = r11, y2 = s3, M2 = o3), m2 = t11, S2 = false;
    }
    function X2(t11) {
      E2 !== t11 && (t11 ? e10.frontFace(e10.CW) : e10.frontFace(e10.CCW), E2 = t11);
    }
    function j2(t11) {
      0 !== t11 ? (V2(e10.CULL_FACE), t11 !== T2 && (1 === t11 ? e10.cullFace(e10.BACK) : 2 === t11 ? e10.cullFace(e10.FRONT) : e10.cullFace(e10.FRONT_AND_BACK))) : G2(e10.CULL_FACE), T2 = t11;
    }
    function q2(t11, n11, i11) {
      t11 ? (V2(e10.POLYGON_OFFSET_FILL), (A2 !== n11 || w2 !== i11) && (e10.polygonOffset(n11, i11), A2 = n11, w2 = i11)) : G2(e10.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: r10, depth: a2, stencil: s2 }, enable: V2, disable: G2, bindFramebuffer: function(t11, n11) {
      return u2[t11] !== n11 && (e10.bindFramebuffer(t11, n11), u2[t11] = n11, i10 && (t11 === e10.DRAW_FRAMEBUFFER && (u2[e10.FRAMEBUFFER] = n11), t11 === e10.FRAMEBUFFER && (u2[e10.DRAW_FRAMEBUFFER] = n11)), true);
    }, drawBuffers: function(i11, r11) {
      let a3 = d2, s3 = false;
      if (i11) {
        if (void 0 === (a3 = c2.get(r11)) && (a3 = [], c2.set(r11, a3)), i11.isWebGLMultipleRenderTargets) {
          let t11 = i11.texture;
          if (a3.length !== t11.length || a3[0] !== e10.COLOR_ATTACHMENT0) {
            for (let n11 = 0, i12 = t11.length; n11 < i12; n11++)
              a3[n11] = e10.COLOR_ATTACHMENT0 + n11;
            a3.length = t11.length, s3 = true;
          }
        } else
          a3[0] !== e10.COLOR_ATTACHMENT0 && (a3[0] = e10.COLOR_ATTACHMENT0, s3 = true);
      } else
        a3[0] !== e10.BACK && (a3[0] = e10.BACK, s3 = true);
      s3 && (n10.isWebGL2 ? e10.drawBuffers(a3) : t10.get("WEBGL_draw_buffers").drawBuffersWEBGL(a3));
    }, useProgram: function(t11) {
      return p2 !== t11 && (e10.useProgram(t11), p2 = t11, true);
    }, setBlending: W2, setMaterial: function(t11, n11) {
      2 === t11.side ? G2(e10.CULL_FACE) : V2(e10.CULL_FACE);
      let i11 = 1 === t11.side;
      n11 && (i11 = !i11), X2(i11), 1 === t11.blending && false === t11.transparent ? W2(0) : W2(t11.blending, t11.blendEquation, t11.blendSrc, t11.blendDst, t11.blendEquationAlpha, t11.blendSrcAlpha, t11.blendDstAlpha, t11.premultipliedAlpha), a2.setFunc(t11.depthFunc), a2.setTest(t11.depthTest), a2.setMask(t11.depthWrite), r10.setMask(t11.colorWrite);
      let o3 = t11.stencilWrite;
      s2.setTest(o3), o3 && (s2.setMask(t11.stencilWriteMask), s2.setFunc(t11.stencilFunc, t11.stencilRef, t11.stencilFuncMask), s2.setOp(t11.stencilFail, t11.stencilZFail, t11.stencilZPass)), q2(t11.polygonOffset, t11.polygonOffsetFactor, t11.polygonOffsetUnits), true === t11.alphaToCoverage ? V2(e10.SAMPLE_ALPHA_TO_COVERAGE) : G2(e10.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: X2, setCullFace: j2, setLineWidth: function(t11) {
      t11 !== b2 && (C2 && e10.lineWidth(t11), b2 = t11);
    }, setPolygonOffset: q2, setScissorTest: function(t11) {
      t11 ? V2(e10.SCISSOR_TEST) : G2(e10.SCISSOR_TEST);
    }, activeTexture: function(t11) {
      void 0 === t11 && (t11 = e10.TEXTURE0 + R2 - 1), P2 !== t11 && (e10.activeTexture(t11), P2 = t11);
    }, bindTexture: function(t11, n11, i11) {
      void 0 === i11 && (i11 = null === P2 ? e10.TEXTURE0 + R2 - 1 : P2);
      let r11 = U2[i11];
      void 0 === r11 && (r11 = { type: void 0, texture: void 0 }, U2[i11] = r11), (r11.type !== t11 || r11.texture !== n11) && (P2 !== i11 && (e10.activeTexture(i11), P2 = i11), e10.bindTexture(t11, n11 || B2[t11]), r11.type = t11, r11.texture = n11);
    }, unbindTexture: function() {
      let t11 = U2[P2];
      void 0 !== t11 && void 0 !== t11.type && (e10.bindTexture(t11.type, null), t11.type = void 0, t11.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        e10.compressedTexImage2D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, compressedTexImage3D: function() {
      try {
        e10.compressedTexImage3D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, texImage2D: function() {
      try {
        e10.texImage2D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, texImage3D: function() {
      try {
        e10.texImage3D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, updateUBOMapping: function(t11, n11) {
      let i11 = l2.get(n11);
      void 0 === i11 && (i11 = /* @__PURE__ */ new WeakMap(), l2.set(n11, i11));
      let r11 = i11.get(t11);
      void 0 === r11 && (r11 = e10.getUniformBlockIndex(n11, t11.name), i11.set(t11, r11));
    }, uniformBlockBinding: function(t11, n11) {
      let i11 = l2.get(n11), r11 = i11.get(t11);
      o2.get(n11) !== r11 && (e10.uniformBlockBinding(n11, r11, t11.__bindingPointIndex), o2.set(n11, r11));
    }, texStorage2D: function() {
      try {
        e10.texStorage2D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, texStorage3D: function() {
      try {
        e10.texStorage3D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, texSubImage2D: function() {
      try {
        e10.texSubImage2D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, texSubImage3D: function() {
      try {
        e10.texSubImage3D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, compressedTexSubImage2D: function() {
      try {
        e10.compressedTexSubImage2D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, compressedTexSubImage3D: function() {
      try {
        e10.compressedTexSubImage3D.apply(e10, arguments);
      } catch (e11) {
        console.error("THREE.WebGLState:", e11);
      }
    }, scissor: function(t11) {
      false === I2.equals(t11) && (e10.scissor(t11.x, t11.y, t11.z, t11.w), I2.copy(t11));
    }, viewport: function(t11) {
      false === O2.equals(t11) && (e10.viewport(t11.x, t11.y, t11.z, t11.w), O2.copy(t11));
    }, reset: function() {
      e10.disable(e10.BLEND), e10.disable(e10.CULL_FACE), e10.disable(e10.DEPTH_TEST), e10.disable(e10.POLYGON_OFFSET_FILL), e10.disable(e10.SCISSOR_TEST), e10.disable(e10.STENCIL_TEST), e10.disable(e10.SAMPLE_ALPHA_TO_COVERAGE), e10.blendEquation(e10.FUNC_ADD), e10.blendFunc(e10.ONE, e10.ZERO), e10.blendFuncSeparate(e10.ONE, e10.ZERO, e10.ONE, e10.ZERO), e10.colorMask(true, true, true, true), e10.clearColor(0, 0, 0, 0), e10.depthMask(true), e10.depthFunc(e10.LESS), e10.clearDepth(1), e10.stencilMask(4294967295), e10.stencilFunc(e10.ALWAYS, 0, 4294967295), e10.stencilOp(e10.KEEP, e10.KEEP, e10.KEEP), e10.clearStencil(0), e10.cullFace(e10.BACK), e10.frontFace(e10.CCW), e10.polygonOffset(0, 0), e10.activeTexture(e10.TEXTURE0), e10.bindFramebuffer(e10.FRAMEBUFFER, null), true === i10 && (e10.bindFramebuffer(e10.DRAW_FRAMEBUFFER, null), e10.bindFramebuffer(e10.READ_FRAMEBUFFER, null)), e10.useProgram(null), e10.lineWidth(1), e10.scissor(0, 0, e10.canvas.width, e10.canvas.height), e10.viewport(0, 0, e10.canvas.width, e10.canvas.height), h2 = {}, P2 = null, U2 = {}, u2 = {}, c2 = /* @__PURE__ */ new WeakMap(), d2 = [], p2 = null, f2 = false, m2 = null, g2 = null, _2 = null, v2 = null, x2 = null, y2 = null, M2 = null, S2 = false, E2 = null, T2 = null, b2 = null, A2 = null, w2 = null, I2.set(0, 0, e10.canvas.width, e10.canvas.height), O2.set(0, 0, e10.canvas.width, e10.canvas.height), r10.reset(), a2.reset(), s2.reset();
    } };
  }
  function iK(e10, t10, n10, i10, s2, o2, l2) {
    let h2;
    let u2 = s2.isWebGL2, c2 = s2.maxTextures, d2 = s2.maxCubemapSize, p2 = s2.maxTextureSize, g2 = s2.maxSamples, _2 = t10.has("WEBGL_multisampled_render_to_texture") ? t10.get("WEBGL_multisampled_render_to_texture") : null, v2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), x2 = /* @__PURE__ */ new WeakMap(), y2 = /* @__PURE__ */ new WeakMap(), M2 = false;
    try {
      M2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e11) {
    }
    function E2(e11, t11) {
      return M2 ? new OffscreenCanvas(e11, t11) : S("canvas");
    }
    function T2(e11, t11, n11, i11) {
      let r10 = 1;
      if ((e11.width > i11 || e11.height > i11) && (r10 = i11 / Math.max(e11.width, e11.height)), r10 < 1 || true === t11) {
        if ("undefined" != typeof HTMLImageElement && e11 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e11 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e11 instanceof ImageBitmap) {
          let i12 = t11 ? m : Math.floor, a2 = i12(r10 * e11.width), s3 = i12(r10 * e11.height);
          void 0 === h2 && (h2 = E2(a2, s3));
          let o3 = n11 ? E2(a2, s3) : h2;
          o3.width = a2, o3.height = s3;
          let l3 = o3.getContext("2d");
          return l3.drawImage(e11, 0, 0, a2, s3), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e11.width + "x" + e11.height + ") to (" + a2 + "x" + s3 + ")."), o3;
        }
        "data" in e11 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e11.width + "x" + e11.height + ").");
      }
      return e11;
    }
    function b2(e11) {
      return f(e11.width) && f(e11.height);
    }
    function A2(e11, t11) {
      return e11.generateMipmaps && t11 && 1003 !== e11.minFilter && 1006 !== e11.minFilter;
    }
    function w2(t11) {
      e10.generateMipmap(t11);
    }
    function R2(n11, i11, a2, s3, o3 = false) {
      if (false === u2)
        return i11;
      if (null !== n11) {
        if (void 0 !== e10[n11])
          return e10[n11];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n11 + "'");
      }
      let l3 = i11;
      return i11 === e10.RED && (a2 === e10.FLOAT && (l3 = e10.R32F), a2 === e10.HALF_FLOAT && (l3 = e10.R16F), a2 === e10.UNSIGNED_BYTE && (l3 = e10.R8)), i11 === e10.RG && (a2 === e10.FLOAT && (l3 = e10.RG32F), a2 === e10.HALF_FLOAT && (l3 = e10.RG16F), a2 === e10.UNSIGNED_BYTE && (l3 = e10.RG8)), i11 === e10.RGBA && (a2 === e10.FLOAT && (l3 = e10.RGBA32F), a2 === e10.HALF_FLOAT && (l3 = e10.RGBA16F), a2 === e10.UNSIGNED_BYTE && (l3 = s3 === r && false === o3 ? e10.SRGB8_ALPHA8 : e10.RGBA8), a2 === e10.UNSIGNED_SHORT_4_4_4_4 && (l3 = e10.RGBA4), a2 === e10.UNSIGNED_SHORT_5_5_5_1 && (l3 = e10.RGB5_A1)), (l3 === e10.R16F || l3 === e10.R32F || l3 === e10.RG16F || l3 === e10.RG32F || l3 === e10.RGBA16F || l3 === e10.RGBA32F) && t10.get("EXT_color_buffer_float"), l3;
    }
    function C2(e11, t11, n11) {
      return true === A2(e11, n11) || e11.isFramebufferTexture && 1003 !== e11.minFilter && 1006 !== e11.minFilter ? Math.log2(Math.max(t11.width, t11.height)) + 1 : void 0 !== e11.mipmaps && e11.mipmaps.length > 0 ? e11.mipmaps.length : e11.isCompressedTexture && Array.isArray(e11.image) ? t11.mipmaps.length : 1;
    }
    function L2(t11) {
      return 1003 === t11 || 1004 === t11 || 1005 === t11 ? e10.NEAREST : e10.LINEAR;
    }
    function P2(e11) {
      let t11 = e11.target;
      t11.removeEventListener("dispose", P2), function(e12) {
        let t12 = i10.get(e12);
        if (void 0 === t12.__webglInit)
          return;
        let n11 = e12.source, r10 = y2.get(n11);
        if (r10) {
          let i11 = r10[t12.__cacheKey];
          i11.usedTimes--, 0 === i11.usedTimes && D2(e12), 0 === Object.keys(r10).length && y2.delete(n11);
        }
        i10.remove(e12);
      }(t11), t11.isVideoTexture && x2.delete(t11);
    }
    function N2(t11) {
      let n11 = t11.target;
      n11.removeEventListener("dispose", N2), function(t12) {
        let n12 = t12.texture, r10 = i10.get(t12), a2 = i10.get(n12);
        if (void 0 !== a2.__webglTexture && (e10.deleteTexture(a2.__webglTexture), l2.memory.textures--), t12.depthTexture && t12.depthTexture.dispose(), t12.isWebGLCubeRenderTarget)
          for (let t13 = 0; t13 < 6; t13++)
            e10.deleteFramebuffer(r10.__webglFramebuffer[t13]), r10.__webglDepthbuffer && e10.deleteRenderbuffer(r10.__webglDepthbuffer[t13]);
        else {
          if (e10.deleteFramebuffer(r10.__webglFramebuffer), r10.__webglDepthbuffer && e10.deleteRenderbuffer(r10.__webglDepthbuffer), r10.__webglMultisampledFramebuffer && e10.deleteFramebuffer(r10.__webglMultisampledFramebuffer), r10.__webglColorRenderbuffer)
            for (let t13 = 0; t13 < r10.__webglColorRenderbuffer.length; t13++)
              r10.__webglColorRenderbuffer[t13] && e10.deleteRenderbuffer(r10.__webglColorRenderbuffer[t13]);
          r10.__webglDepthRenderbuffer && e10.deleteRenderbuffer(r10.__webglDepthRenderbuffer);
        }
        if (t12.isWebGLMultipleRenderTargets)
          for (let t13 = 0, r11 = n12.length; t13 < r11; t13++) {
            let r12 = i10.get(n12[t13]);
            r12.__webglTexture && (e10.deleteTexture(r12.__webglTexture), l2.memory.textures--), i10.remove(n12[t13]);
          }
        i10.remove(n12), i10.remove(t12);
      }(n11);
    }
    function D2(t11) {
      let n11 = i10.get(t11);
      e10.deleteTexture(n11.__webglTexture);
      let r10 = t11.source, a2 = y2.get(r10);
      delete a2[n11.__cacheKey], l2.memory.textures--;
    }
    let I2 = 0;
    function O2(t11, r10) {
      let a2 = i10.get(t11);
      if (t11.isVideoTexture && function(e11) {
        let t12 = l2.render.frame;
        x2.get(e11) !== t12 && (x2.set(e11, t12), e11.update());
      }(t11), false === t11.isRenderTargetTexture && t11.version > 0 && a2.__version !== t11.version) {
        let e11 = t11.image;
        if (null === e11)
          console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else if (false === e11.complete)
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        else {
          H2(a2, t11, r10);
          return;
        }
      }
      n10.bindTexture(e10.TEXTURE_2D, a2.__webglTexture, e10.TEXTURE0 + r10);
    }
    let F2 = { 1e3: e10.REPEAT, 1001: e10.CLAMP_TO_EDGE, 1002: e10.MIRRORED_REPEAT }, z2 = { 1003: e10.NEAREST, 1004: e10.NEAREST_MIPMAP_NEAREST, 1005: e10.NEAREST_MIPMAP_LINEAR, 1006: e10.LINEAR, 1007: e10.LINEAR_MIPMAP_NEAREST, 1008: e10.LINEAR_MIPMAP_LINEAR }, B2 = { 512: e10.NEVER, 519: e10.ALWAYS, 513: e10.LESS, 515: e10.LEQUAL, 514: e10.EQUAL, 518: e10.GEQUAL, 516: e10.GREATER, 517: e10.NOTEQUAL };
    function V2(n11, r10, a2) {
      if (a2 ? (e10.texParameteri(n11, e10.TEXTURE_WRAP_S, F2[r10.wrapS]), e10.texParameteri(n11, e10.TEXTURE_WRAP_T, F2[r10.wrapT]), (n11 === e10.TEXTURE_3D || n11 === e10.TEXTURE_2D_ARRAY) && e10.texParameteri(n11, e10.TEXTURE_WRAP_R, F2[r10.wrapR]), e10.texParameteri(n11, e10.TEXTURE_MAG_FILTER, z2[r10.magFilter]), e10.texParameteri(n11, e10.TEXTURE_MIN_FILTER, z2[r10.minFilter])) : (e10.texParameteri(n11, e10.TEXTURE_WRAP_S, e10.CLAMP_TO_EDGE), e10.texParameteri(n11, e10.TEXTURE_WRAP_T, e10.CLAMP_TO_EDGE), (n11 === e10.TEXTURE_3D || n11 === e10.TEXTURE_2D_ARRAY) && e10.texParameteri(n11, e10.TEXTURE_WRAP_R, e10.CLAMP_TO_EDGE), (1001 !== r10.wrapS || 1001 !== r10.wrapT) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e10.texParameteri(n11, e10.TEXTURE_MAG_FILTER, L2(r10.magFilter)), e10.texParameteri(n11, e10.TEXTURE_MIN_FILTER, L2(r10.minFilter)), 1003 !== r10.minFilter && 1006 !== r10.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), r10.compareFunction && (e10.texParameteri(n11, e10.TEXTURE_COMPARE_MODE, e10.COMPARE_REF_TO_TEXTURE), e10.texParameteri(n11, e10.TEXTURE_COMPARE_FUNC, B2[r10.compareFunction])), true === t10.has("EXT_texture_filter_anisotropic")) {
        let a3 = t10.get("EXT_texture_filter_anisotropic");
        1003 !== r10.magFilter && (1005 === r10.minFilter || 1008 === r10.minFilter) && (1015 !== r10.type || false !== t10.has("OES_texture_float_linear")) && (false !== u2 || 1016 !== r10.type || false !== t10.has("OES_texture_half_float_linear")) && (r10.anisotropy > 1 || i10.get(r10).__currentAnisotropy) && (e10.texParameterf(n11, a3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r10.anisotropy, s2.getMaxAnisotropy())), i10.get(r10).__currentAnisotropy = r10.anisotropy);
      }
    }
    function G2(t11, n11) {
      let i11 = false;
      void 0 === t11.__webglInit && (t11.__webglInit = true, n11.addEventListener("dispose", P2));
      let r10 = n11.source, a2 = y2.get(r10);
      void 0 === a2 && (a2 = {}, y2.set(r10, a2));
      let s3 = function(e11) {
        let t12 = [];
        return t12.push(e11.wrapS), t12.push(e11.wrapT), t12.push(e11.wrapR || 0), t12.push(e11.magFilter), t12.push(e11.minFilter), t12.push(e11.anisotropy), t12.push(e11.internalFormat), t12.push(e11.format), t12.push(e11.type), t12.push(e11.generateMipmaps), t12.push(e11.premultiplyAlpha), t12.push(e11.flipY), t12.push(e11.unpackAlignment), t12.push(e11.colorSpace), t12.join();
      }(n11);
      if (s3 !== t11.__cacheKey) {
        void 0 === a2[s3] && (a2[s3] = { texture: e10.createTexture(), usedTimes: 0 }, l2.memory.textures++, i11 = true), a2[s3].usedTimes++;
        let r11 = a2[t11.__cacheKey];
        void 0 !== r11 && (a2[t11.__cacheKey].usedTimes--, 0 === r11.usedTimes && D2(n11)), t11.__cacheKey = s3, t11.__webglTexture = a2[s3].texture;
      }
      return i11;
    }
    function H2(t11, r10, a2) {
      let s3 = e10.TEXTURE_2D;
      (r10.isDataArrayTexture || r10.isCompressedArrayTexture) && (s3 = e10.TEXTURE_2D_ARRAY), r10.isData3DTexture && (s3 = e10.TEXTURE_3D);
      let l3 = G2(t11, r10), h3 = r10.source;
      n10.bindTexture(s3, t11.__webglTexture, e10.TEXTURE0 + a2);
      let c3 = i10.get(h3);
      if (h3.version !== c3.__version || true === l3) {
        let t12;
        n10.activeTexture(e10.TEXTURE0 + a2), e10.pixelStorei(e10.UNPACK_FLIP_Y_WEBGL, r10.flipY), e10.pixelStorei(e10.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r10.premultiplyAlpha), e10.pixelStorei(e10.UNPACK_ALIGNMENT, r10.unpackAlignment), e10.pixelStorei(e10.UNPACK_COLORSPACE_CONVERSION_WEBGL, e10.NONE);
        let i11 = !u2 && (1001 !== r10.wrapS || 1001 !== r10.wrapT || 1003 !== r10.minFilter && 1006 !== r10.minFilter) && false === b2(r10.image), d3 = T2(r10.image, i11, false, p2);
        d3 = Y2(r10, d3);
        let f2 = b2(d3) || u2, m2 = o2.convert(r10.format, r10.colorSpace), g3 = o2.convert(r10.type), _3 = R2(r10.internalFormat, m2, g3, r10.colorSpace);
        V2(s3, r10, f2);
        let v3 = r10.mipmaps, x3 = u2 && true !== r10.isVideoTexture, y3 = void 0 === c3.__version || true === l3, M3 = C2(r10, d3, f2);
        if (r10.isDepthTexture)
          _3 = e10.DEPTH_COMPONENT, u2 ? _3 = 1015 === r10.type ? e10.DEPTH_COMPONENT32F : 1014 === r10.type ? e10.DEPTH_COMPONENT24 : 1020 === r10.type ? e10.DEPTH24_STENCIL8 : e10.DEPTH_COMPONENT16 : 1015 === r10.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === r10.format && _3 === e10.DEPTH_COMPONENT && 1012 !== r10.type && 1014 !== r10.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r10.type = 1014, g3 = o2.convert(r10.type)), 1027 === r10.format && _3 === e10.DEPTH_COMPONENT && (_3 = e10.DEPTH_STENCIL, 1020 !== r10.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r10.type = 1020, g3 = o2.convert(r10.type))), y3 && (x3 ? n10.texStorage2D(e10.TEXTURE_2D, 1, _3, d3.width, d3.height) : n10.texImage2D(e10.TEXTURE_2D, 0, _3, d3.width, d3.height, 0, m2, g3, null));
        else if (r10.isDataTexture) {
          if (v3.length > 0 && f2) {
            x3 && y3 && n10.texStorage2D(e10.TEXTURE_2D, M3, _3, v3[0].width, v3[0].height);
            for (let i12 = 0, r11 = v3.length; i12 < r11; i12++)
              t12 = v3[i12], x3 ? n10.texSubImage2D(e10.TEXTURE_2D, i12, 0, 0, t12.width, t12.height, m2, g3, t12.data) : n10.texImage2D(e10.TEXTURE_2D, i12, _3, t12.width, t12.height, 0, m2, g3, t12.data);
            r10.generateMipmaps = false;
          } else
            x3 ? (y3 && n10.texStorage2D(e10.TEXTURE_2D, M3, _3, d3.width, d3.height), n10.texSubImage2D(e10.TEXTURE_2D, 0, 0, 0, d3.width, d3.height, m2, g3, d3.data)) : n10.texImage2D(e10.TEXTURE_2D, 0, _3, d3.width, d3.height, 0, m2, g3, d3.data);
        } else if (r10.isCompressedTexture) {
          if (r10.isCompressedArrayTexture) {
            x3 && y3 && n10.texStorage3D(e10.TEXTURE_2D_ARRAY, M3, _3, v3[0].width, v3[0].height, d3.depth);
            for (let i12 = 0, a3 = v3.length; i12 < a3; i12++)
              t12 = v3[i12], 1023 !== r10.format ? null !== m2 ? x3 ? n10.compressedTexSubImage3D(e10.TEXTURE_2D_ARRAY, i12, 0, 0, 0, t12.width, t12.height, d3.depth, m2, t12.data, 0, 0) : n10.compressedTexImage3D(e10.TEXTURE_2D_ARRAY, i12, _3, t12.width, t12.height, d3.depth, 0, t12.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : x3 ? n10.texSubImage3D(e10.TEXTURE_2D_ARRAY, i12, 0, 0, 0, t12.width, t12.height, d3.depth, m2, g3, t12.data) : n10.texImage3D(e10.TEXTURE_2D_ARRAY, i12, _3, t12.width, t12.height, d3.depth, 0, m2, g3, t12.data);
          } else {
            x3 && y3 && n10.texStorage2D(e10.TEXTURE_2D, M3, _3, v3[0].width, v3[0].height);
            for (let i12 = 0, a3 = v3.length; i12 < a3; i12++)
              t12 = v3[i12], 1023 !== r10.format ? null !== m2 ? x3 ? n10.compressedTexSubImage2D(e10.TEXTURE_2D, i12, 0, 0, t12.width, t12.height, m2, t12.data) : n10.compressedTexImage2D(e10.TEXTURE_2D, i12, _3, t12.width, t12.height, 0, t12.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : x3 ? n10.texSubImage2D(e10.TEXTURE_2D, i12, 0, 0, t12.width, t12.height, m2, g3, t12.data) : n10.texImage2D(e10.TEXTURE_2D, i12, _3, t12.width, t12.height, 0, m2, g3, t12.data);
          }
        } else if (r10.isDataArrayTexture)
          x3 ? (y3 && n10.texStorage3D(e10.TEXTURE_2D_ARRAY, M3, _3, d3.width, d3.height, d3.depth), n10.texSubImage3D(e10.TEXTURE_2D_ARRAY, 0, 0, 0, 0, d3.width, d3.height, d3.depth, m2, g3, d3.data)) : n10.texImage3D(e10.TEXTURE_2D_ARRAY, 0, _3, d3.width, d3.height, d3.depth, 0, m2, g3, d3.data);
        else if (r10.isData3DTexture)
          x3 ? (y3 && n10.texStorage3D(e10.TEXTURE_3D, M3, _3, d3.width, d3.height, d3.depth), n10.texSubImage3D(e10.TEXTURE_3D, 0, 0, 0, 0, d3.width, d3.height, d3.depth, m2, g3, d3.data)) : n10.texImage3D(e10.TEXTURE_3D, 0, _3, d3.width, d3.height, d3.depth, 0, m2, g3, d3.data);
        else if (r10.isFramebufferTexture) {
          if (y3) {
            if (x3)
              n10.texStorage2D(e10.TEXTURE_2D, M3, _3, d3.width, d3.height);
            else {
              let t13 = d3.width, i12 = d3.height;
              for (let r11 = 0; r11 < M3; r11++)
                n10.texImage2D(e10.TEXTURE_2D, r11, _3, t13, i12, 0, m2, g3, null), t13 >>= 1, i12 >>= 1;
            }
          }
        } else if (v3.length > 0 && f2) {
          x3 && y3 && n10.texStorage2D(e10.TEXTURE_2D, M3, _3, v3[0].width, v3[0].height);
          for (let i12 = 0, r11 = v3.length; i12 < r11; i12++)
            t12 = v3[i12], x3 ? n10.texSubImage2D(e10.TEXTURE_2D, i12, 0, 0, m2, g3, t12) : n10.texImage2D(e10.TEXTURE_2D, i12, _3, m2, g3, t12);
          r10.generateMipmaps = false;
        } else
          x3 ? (y3 && n10.texStorage2D(e10.TEXTURE_2D, M3, _3, d3.width, d3.height), n10.texSubImage2D(e10.TEXTURE_2D, 0, 0, 0, m2, g3, d3)) : n10.texImage2D(e10.TEXTURE_2D, 0, _3, m2, g3, d3);
        A2(r10, f2) && w2(s3), c3.__version = h3.version, r10.onUpdate && r10.onUpdate(r10);
      }
      t11.__version = r10.version;
    }
    function k2(t11, r10, a2, s3, l3) {
      let h3 = o2.convert(a2.format, a2.colorSpace), u3 = o2.convert(a2.type), c3 = R2(a2.internalFormat, h3, u3, a2.colorSpace), d3 = i10.get(r10);
      d3.__hasExternalTextures || (l3 === e10.TEXTURE_3D || l3 === e10.TEXTURE_2D_ARRAY ? n10.texImage3D(l3, 0, c3, r10.width, r10.height, r10.depth, 0, h3, u3, null) : n10.texImage2D(l3, 0, c3, r10.width, r10.height, 0, h3, u3, null)), n10.bindFramebuffer(e10.FRAMEBUFFER, t11), q2(r10) ? _2.framebufferTexture2DMultisampleEXT(e10.FRAMEBUFFER, s3, l3, i10.get(a2).__webglTexture, 0, j2(r10)) : (l3 === e10.TEXTURE_2D || l3 >= e10.TEXTURE_CUBE_MAP_POSITIVE_X && l3 <= e10.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e10.framebufferTexture2D(e10.FRAMEBUFFER, s3, l3, i10.get(a2).__webglTexture, 0), n10.bindFramebuffer(e10.FRAMEBUFFER, null);
    }
    function W2(t11, n11, i11) {
      if (e10.bindRenderbuffer(e10.RENDERBUFFER, t11), n11.depthBuffer && !n11.stencilBuffer) {
        let r10 = e10.DEPTH_COMPONENT16;
        if (i11 || q2(n11)) {
          let t12 = n11.depthTexture;
          t12 && t12.isDepthTexture && (1015 === t12.type ? r10 = e10.DEPTH_COMPONENT32F : 1014 === t12.type && (r10 = e10.DEPTH_COMPONENT24));
          let i12 = j2(n11);
          q2(n11) ? _2.renderbufferStorageMultisampleEXT(e10.RENDERBUFFER, i12, r10, n11.width, n11.height) : e10.renderbufferStorageMultisample(e10.RENDERBUFFER, i12, r10, n11.width, n11.height);
        } else
          e10.renderbufferStorage(e10.RENDERBUFFER, r10, n11.width, n11.height);
        e10.framebufferRenderbuffer(e10.FRAMEBUFFER, e10.DEPTH_ATTACHMENT, e10.RENDERBUFFER, t11);
      } else if (n11.depthBuffer && n11.stencilBuffer) {
        let r10 = j2(n11);
        i11 && false === q2(n11) ? e10.renderbufferStorageMultisample(e10.RENDERBUFFER, r10, e10.DEPTH24_STENCIL8, n11.width, n11.height) : q2(n11) ? _2.renderbufferStorageMultisampleEXT(e10.RENDERBUFFER, r10, e10.DEPTH24_STENCIL8, n11.width, n11.height) : e10.renderbufferStorage(e10.RENDERBUFFER, e10.DEPTH_STENCIL, n11.width, n11.height), e10.framebufferRenderbuffer(e10.FRAMEBUFFER, e10.DEPTH_STENCIL_ATTACHMENT, e10.RENDERBUFFER, t11);
      } else {
        let t12 = true === n11.isWebGLMultipleRenderTargets ? n11.texture : [n11.texture];
        for (let r10 = 0; r10 < t12.length; r10++) {
          let a2 = t12[r10], s3 = o2.convert(a2.format, a2.colorSpace), l3 = o2.convert(a2.type), h3 = R2(a2.internalFormat, s3, l3, a2.colorSpace), u3 = j2(n11);
          i11 && false === q2(n11) ? e10.renderbufferStorageMultisample(e10.RENDERBUFFER, u3, h3, n11.width, n11.height) : q2(n11) ? _2.renderbufferStorageMultisampleEXT(e10.RENDERBUFFER, u3, h3, n11.width, n11.height) : e10.renderbufferStorage(e10.RENDERBUFFER, h3, n11.width, n11.height);
        }
      }
      e10.bindRenderbuffer(e10.RENDERBUFFER, null);
    }
    function X2(t11) {
      let r10 = i10.get(t11), a2 = true === t11.isWebGLCubeRenderTarget;
      if (t11.depthTexture && !r10.__autoAllocateDepthBuffer) {
        if (a2)
          throw Error("target.depthTexture not supported in Cube render targets");
        !function(t12, r11) {
          let a3 = r11 && r11.isWebGLCubeRenderTarget;
          if (a3)
            throw Error("Depth Texture with cube render targets is not supported");
          if (n10.bindFramebuffer(e10.FRAMEBUFFER, t12), !(r11.depthTexture && r11.depthTexture.isDepthTexture))
            throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i10.get(r11.depthTexture).__webglTexture && r11.depthTexture.image.width === r11.width && r11.depthTexture.image.height === r11.height || (r11.depthTexture.image.width = r11.width, r11.depthTexture.image.height = r11.height, r11.depthTexture.needsUpdate = true), O2(r11.depthTexture, 0);
          let s3 = i10.get(r11.depthTexture).__webglTexture, o3 = j2(r11);
          if (1026 === r11.depthTexture.format)
            q2(r11) ? _2.framebufferTexture2DMultisampleEXT(e10.FRAMEBUFFER, e10.DEPTH_ATTACHMENT, e10.TEXTURE_2D, s3, 0, o3) : e10.framebufferTexture2D(e10.FRAMEBUFFER, e10.DEPTH_ATTACHMENT, e10.TEXTURE_2D, s3, 0);
          else if (1027 === r11.depthTexture.format)
            q2(r11) ? _2.framebufferTexture2DMultisampleEXT(e10.FRAMEBUFFER, e10.DEPTH_STENCIL_ATTACHMENT, e10.TEXTURE_2D, s3, 0, o3) : e10.framebufferTexture2D(e10.FRAMEBUFFER, e10.DEPTH_STENCIL_ATTACHMENT, e10.TEXTURE_2D, s3, 0);
          else
            throw Error("Unknown depthTexture format");
        }(r10.__webglFramebuffer, t11);
      } else if (a2) {
        r10.__webglDepthbuffer = [];
        for (let i11 = 0; i11 < 6; i11++)
          n10.bindFramebuffer(e10.FRAMEBUFFER, r10.__webglFramebuffer[i11]), r10.__webglDepthbuffer[i11] = e10.createRenderbuffer(), W2(r10.__webglDepthbuffer[i11], t11, false);
      } else
        n10.bindFramebuffer(e10.FRAMEBUFFER, r10.__webglFramebuffer), r10.__webglDepthbuffer = e10.createRenderbuffer(), W2(r10.__webglDepthbuffer, t11, false);
      n10.bindFramebuffer(e10.FRAMEBUFFER, null);
    }
    function j2(e11) {
      return Math.min(g2, e11.samples);
    }
    function q2(e11) {
      let n11 = i10.get(e11);
      return u2 && e11.samples > 0 && true === t10.has("WEBGL_multisampled_render_to_texture") && false !== n11.__useRenderToTexture;
    }
    function Y2(e11, n11) {
      let i11 = e11.colorSpace, s3 = e11.format, o3 = e11.type;
      return true === e11.isCompressedTexture || 1035 === e11.format || i11 !== a && "" !== i11 && (i11 === r ? false === u2 ? true === t10.has("EXT_sRGB") && 1023 === s3 ? (e11.format = 1035, e11.minFilter = 1006, e11.generateMipmaps = false) : n11 = U.sRGBToLinear(n11) : (1023 !== s3 || 1009 !== o3) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", i11)), n11;
    }
    this.allocateTextureUnit = function() {
      let e11 = I2;
      return e11 >= c2 && console.warn("THREE.WebGLTextures: Trying to use " + e11 + " texture units while this GPU supports only " + c2), I2 += 1, e11;
    }, this.resetTextureUnits = function() {
      I2 = 0;
    }, this.setTexture2D = O2, this.setTexture2DArray = function(t11, r10) {
      let a2 = i10.get(t11);
      if (t11.version > 0 && a2.__version !== t11.version) {
        H2(a2, t11, r10);
        return;
      }
      n10.bindTexture(e10.TEXTURE_2D_ARRAY, a2.__webglTexture, e10.TEXTURE0 + r10);
    }, this.setTexture3D = function(t11, r10) {
      let a2 = i10.get(t11);
      if (t11.version > 0 && a2.__version !== t11.version) {
        H2(a2, t11, r10);
        return;
      }
      n10.bindTexture(e10.TEXTURE_3D, a2.__webglTexture, e10.TEXTURE0 + r10);
    }, this.setTextureCube = function(t11, r10) {
      let a2 = i10.get(t11);
      if (t11.version > 0 && a2.__version !== t11.version) {
        (function(t12, r11, a3) {
          if (6 !== r11.image.length)
            return;
          let s3 = G2(t12, r11), l3 = r11.source;
          n10.bindTexture(e10.TEXTURE_CUBE_MAP, t12.__webglTexture, e10.TEXTURE0 + a3);
          let h3 = i10.get(l3);
          if (l3.version !== h3.__version || true === s3) {
            let t13;
            n10.activeTexture(e10.TEXTURE0 + a3), e10.pixelStorei(e10.UNPACK_FLIP_Y_WEBGL, r11.flipY), e10.pixelStorei(e10.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r11.premultiplyAlpha), e10.pixelStorei(e10.UNPACK_ALIGNMENT, r11.unpackAlignment), e10.pixelStorei(e10.UNPACK_COLORSPACE_CONVERSION_WEBGL, e10.NONE);
            let i11 = r11.isCompressedTexture || r11.image[0].isCompressedTexture, c3 = r11.image[0] && r11.image[0].isDataTexture, p3 = [];
            for (let e11 = 0; e11 < 6; e11++)
              i11 || c3 ? p3[e11] = c3 ? r11.image[e11].image : r11.image[e11] : p3[e11] = T2(r11.image[e11], false, true, d2), p3[e11] = Y2(r11, p3[e11]);
            let f2 = p3[0], m2 = b2(f2) || u2, g3 = o2.convert(r11.format, r11.colorSpace), _3 = o2.convert(r11.type), v3 = R2(r11.internalFormat, g3, _3, r11.colorSpace), x3 = u2 && true !== r11.isVideoTexture, y3 = void 0 === h3.__version || true === s3, M3 = C2(r11, f2, m2);
            if (V2(e10.TEXTURE_CUBE_MAP, r11, m2), i11) {
              x3 && y3 && n10.texStorage2D(e10.TEXTURE_CUBE_MAP, M3, v3, f2.width, f2.height);
              for (let i12 = 0; i12 < 6; i12++) {
                t13 = p3[i12].mipmaps;
                for (let a4 = 0; a4 < t13.length; a4++) {
                  let s4 = t13[a4];
                  1023 !== r11.format ? null !== g3 ? x3 ? n10.compressedTexSubImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, a4, 0, 0, s4.width, s4.height, g3, s4.data) : n10.compressedTexImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, a4, v3, s4.width, s4.height, 0, s4.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : x3 ? n10.texSubImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, a4, 0, 0, s4.width, s4.height, g3, _3, s4.data) : n10.texImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, a4, v3, s4.width, s4.height, 0, g3, _3, s4.data);
                }
              }
            } else {
              t13 = r11.mipmaps, x3 && y3 && (t13.length > 0 && M3++, n10.texStorage2D(e10.TEXTURE_CUBE_MAP, M3, v3, p3[0].width, p3[0].height));
              for (let i12 = 0; i12 < 6; i12++)
                if (c3) {
                  x3 ? n10.texSubImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, 0, 0, 0, p3[i12].width, p3[i12].height, g3, _3, p3[i12].data) : n10.texImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, 0, v3, p3[i12].width, p3[i12].height, 0, g3, _3, p3[i12].data);
                  for (let r12 = 0; r12 < t13.length; r12++) {
                    let a4 = t13[r12], s4 = a4.image[i12].image;
                    x3 ? n10.texSubImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, r12 + 1, 0, 0, s4.width, s4.height, g3, _3, s4.data) : n10.texImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, r12 + 1, v3, s4.width, s4.height, 0, g3, _3, s4.data);
                  }
                } else {
                  x3 ? n10.texSubImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, 0, 0, 0, g3, _3, p3[i12]) : n10.texImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, 0, v3, g3, _3, p3[i12]);
                  for (let r12 = 0; r12 < t13.length; r12++) {
                    let a4 = t13[r12];
                    x3 ? n10.texSubImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, r12 + 1, 0, 0, g3, _3, a4.image[i12]) : n10.texImage2D(e10.TEXTURE_CUBE_MAP_POSITIVE_X + i12, r12 + 1, v3, g3, _3, a4.image[i12]);
                  }
                }
            }
            A2(r11, m2) && w2(e10.TEXTURE_CUBE_MAP), h3.__version = l3.version, r11.onUpdate && r11.onUpdate(r11);
          }
          t12.__version = r11.version;
        })(a2, t11, r10);
        return;
      }
      n10.bindTexture(e10.TEXTURE_CUBE_MAP, a2.__webglTexture, e10.TEXTURE0 + r10);
    }, this.rebindTextures = function(t11, n11, r10) {
      let a2 = i10.get(t11);
      void 0 !== n11 && k2(a2.__webglFramebuffer, t11, t11.texture, e10.COLOR_ATTACHMENT0, e10.TEXTURE_2D), void 0 !== r10 && X2(t11);
    }, this.setupRenderTarget = function(t11) {
      let r10 = t11.texture, a2 = i10.get(t11), h3 = i10.get(r10);
      t11.addEventListener("dispose", N2), true !== t11.isWebGLMultipleRenderTargets && (void 0 === h3.__webglTexture && (h3.__webglTexture = e10.createTexture()), h3.__version = r10.version, l2.memory.textures++);
      let c3 = true === t11.isWebGLCubeRenderTarget, d3 = true === t11.isWebGLMultipleRenderTargets, p3 = b2(t11) || u2;
      if (c3) {
        a2.__webglFramebuffer = [];
        for (let t12 = 0; t12 < 6; t12++)
          a2.__webglFramebuffer[t12] = e10.createFramebuffer();
      } else {
        if (a2.__webglFramebuffer = e10.createFramebuffer(), d3) {
          if (s2.drawBuffers) {
            let n11 = t11.texture;
            for (let t12 = 0, r11 = n11.length; t12 < r11; t12++) {
              let r12 = i10.get(n11[t12]);
              void 0 === r12.__webglTexture && (r12.__webglTexture = e10.createTexture(), l2.memory.textures++);
            }
          } else
            console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        }
        if (u2 && t11.samples > 0 && false === q2(t11)) {
          let i11 = d3 ? r10 : [r10];
          a2.__webglMultisampledFramebuffer = e10.createFramebuffer(), a2.__webglColorRenderbuffer = [], n10.bindFramebuffer(e10.FRAMEBUFFER, a2.__webglMultisampledFramebuffer);
          for (let n11 = 0; n11 < i11.length; n11++) {
            let r11 = i11[n11];
            a2.__webglColorRenderbuffer[n11] = e10.createRenderbuffer(), e10.bindRenderbuffer(e10.RENDERBUFFER, a2.__webglColorRenderbuffer[n11]);
            let s3 = o2.convert(r11.format, r11.colorSpace), l3 = o2.convert(r11.type), h4 = R2(r11.internalFormat, s3, l3, r11.colorSpace, true === t11.isXRRenderTarget), u3 = j2(t11);
            e10.renderbufferStorageMultisample(e10.RENDERBUFFER, u3, h4, t11.width, t11.height), e10.framebufferRenderbuffer(e10.FRAMEBUFFER, e10.COLOR_ATTACHMENT0 + n11, e10.RENDERBUFFER, a2.__webglColorRenderbuffer[n11]);
          }
          e10.bindRenderbuffer(e10.RENDERBUFFER, null), t11.depthBuffer && (a2.__webglDepthRenderbuffer = e10.createRenderbuffer(), W2(a2.__webglDepthRenderbuffer, t11, true)), n10.bindFramebuffer(e10.FRAMEBUFFER, null);
        }
      }
      if (c3) {
        n10.bindTexture(e10.TEXTURE_CUBE_MAP, h3.__webglTexture), V2(e10.TEXTURE_CUBE_MAP, r10, p3);
        for (let n11 = 0; n11 < 6; n11++)
          k2(a2.__webglFramebuffer[n11], t11, r10, e10.COLOR_ATTACHMENT0, e10.TEXTURE_CUBE_MAP_POSITIVE_X + n11);
        A2(r10, p3) && w2(e10.TEXTURE_CUBE_MAP), n10.unbindTexture();
      } else if (d3) {
        let r11 = t11.texture;
        for (let s3 = 0, o3 = r11.length; s3 < o3; s3++) {
          let o4 = r11[s3], l3 = i10.get(o4);
          n10.bindTexture(e10.TEXTURE_2D, l3.__webglTexture), V2(e10.TEXTURE_2D, o4, p3), k2(a2.__webglFramebuffer, t11, o4, e10.COLOR_ATTACHMENT0 + s3, e10.TEXTURE_2D), A2(o4, p3) && w2(e10.TEXTURE_2D);
        }
        n10.unbindTexture();
      } else {
        let i11 = e10.TEXTURE_2D;
        (t11.isWebGL3DRenderTarget || t11.isWebGLArrayRenderTarget) && (u2 ? i11 = t11.isWebGL3DRenderTarget ? e10.TEXTURE_3D : e10.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n10.bindTexture(i11, h3.__webglTexture), V2(i11, r10, p3), k2(a2.__webglFramebuffer, t11, r10, e10.COLOR_ATTACHMENT0, i11), A2(r10, p3) && w2(i11), n10.unbindTexture();
      }
      t11.depthBuffer && X2(t11);
    }, this.updateRenderTargetMipmap = function(t11) {
      let r10 = b2(t11) || u2, a2 = true === t11.isWebGLMultipleRenderTargets ? t11.texture : [t11.texture];
      for (let s3 = 0, o3 = a2.length; s3 < o3; s3++) {
        let o4 = a2[s3];
        if (A2(o4, r10)) {
          let r11 = t11.isWebGLCubeRenderTarget ? e10.TEXTURE_CUBE_MAP : e10.TEXTURE_2D, a3 = i10.get(o4).__webglTexture;
          n10.bindTexture(r11, a3), w2(r11), n10.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(t11) {
      if (u2 && t11.samples > 0 && false === q2(t11)) {
        let r10 = t11.isWebGLMultipleRenderTargets ? t11.texture : [t11.texture], a2 = t11.width, s3 = t11.height, o3 = e10.COLOR_BUFFER_BIT, l3 = [], h3 = t11.stencilBuffer ? e10.DEPTH_STENCIL_ATTACHMENT : e10.DEPTH_ATTACHMENT, u3 = i10.get(t11), c3 = true === t11.isWebGLMultipleRenderTargets;
        if (c3)
          for (let t12 = 0; t12 < r10.length; t12++)
            n10.bindFramebuffer(e10.FRAMEBUFFER, u3.__webglMultisampledFramebuffer), e10.framebufferRenderbuffer(e10.FRAMEBUFFER, e10.COLOR_ATTACHMENT0 + t12, e10.RENDERBUFFER, null), n10.bindFramebuffer(e10.FRAMEBUFFER, u3.__webglFramebuffer), e10.framebufferTexture2D(e10.DRAW_FRAMEBUFFER, e10.COLOR_ATTACHMENT0 + t12, e10.TEXTURE_2D, null, 0);
        n10.bindFramebuffer(e10.READ_FRAMEBUFFER, u3.__webglMultisampledFramebuffer), n10.bindFramebuffer(e10.DRAW_FRAMEBUFFER, u3.__webglFramebuffer);
        for (let n11 = 0; n11 < r10.length; n11++) {
          l3.push(e10.COLOR_ATTACHMENT0 + n11), t11.depthBuffer && l3.push(h3);
          let d3 = void 0 !== u3.__ignoreDepthValues && u3.__ignoreDepthValues;
          if (false === d3 && (t11.depthBuffer && (o3 |= e10.DEPTH_BUFFER_BIT), t11.stencilBuffer && (o3 |= e10.STENCIL_BUFFER_BIT)), c3 && e10.framebufferRenderbuffer(e10.READ_FRAMEBUFFER, e10.COLOR_ATTACHMENT0, e10.RENDERBUFFER, u3.__webglColorRenderbuffer[n11]), true === d3 && (e10.invalidateFramebuffer(e10.READ_FRAMEBUFFER, [h3]), e10.invalidateFramebuffer(e10.DRAW_FRAMEBUFFER, [h3])), c3) {
            let t12 = i10.get(r10[n11]).__webglTexture;
            e10.framebufferTexture2D(e10.DRAW_FRAMEBUFFER, e10.COLOR_ATTACHMENT0, e10.TEXTURE_2D, t12, 0);
          }
          e10.blitFramebuffer(0, 0, a2, s3, 0, 0, a2, s3, o3, e10.NEAREST), v2 && e10.invalidateFramebuffer(e10.READ_FRAMEBUFFER, l3);
        }
        if (n10.bindFramebuffer(e10.READ_FRAMEBUFFER, null), n10.bindFramebuffer(e10.DRAW_FRAMEBUFFER, null), c3)
          for (let t12 = 0; t12 < r10.length; t12++) {
            n10.bindFramebuffer(e10.FRAMEBUFFER, u3.__webglMultisampledFramebuffer), e10.framebufferRenderbuffer(e10.FRAMEBUFFER, e10.COLOR_ATTACHMENT0 + t12, e10.RENDERBUFFER, u3.__webglColorRenderbuffer[t12]);
            let a3 = i10.get(r10[t12]).__webglTexture;
            n10.bindFramebuffer(e10.FRAMEBUFFER, u3.__webglFramebuffer), e10.framebufferTexture2D(e10.DRAW_FRAMEBUFFER, e10.COLOR_ATTACHMENT0 + t12, e10.TEXTURE_2D, a3, 0);
          }
        n10.bindFramebuffer(e10.DRAW_FRAMEBUFFER, u3.__webglMultisampledFramebuffer);
      }
    }, this.setupDepthRenderbuffer = X2, this.setupFrameBufferTexture = k2, this.useMultisampledRTT = q2;
  }
  function iQ(e10, t10, n10) {
    let i10 = n10.isWebGL2;
    return { convert: function(n11, a2 = "") {
      let s2;
      if (1009 === n11)
        return e10.UNSIGNED_BYTE;
      if (1017 === n11)
        return e10.UNSIGNED_SHORT_4_4_4_4;
      if (1018 === n11)
        return e10.UNSIGNED_SHORT_5_5_5_1;
      if (1010 === n11)
        return e10.BYTE;
      if (1011 === n11)
        return e10.SHORT;
      if (1012 === n11)
        return e10.UNSIGNED_SHORT;
      if (1013 === n11)
        return e10.INT;
      if (1014 === n11)
        return e10.UNSIGNED_INT;
      if (1015 === n11)
        return e10.FLOAT;
      if (1016 === n11)
        return i10 ? e10.HALF_FLOAT : null !== (s2 = t10.get("OES_texture_half_float")) ? s2.HALF_FLOAT_OES : null;
      if (1021 === n11)
        return e10.ALPHA;
      if (1023 === n11)
        return e10.RGBA;
      if (1024 === n11)
        return e10.LUMINANCE;
      if (1025 === n11)
        return e10.LUMINANCE_ALPHA;
      if (1026 === n11)
        return e10.DEPTH_COMPONENT;
      if (1027 === n11)
        return e10.DEPTH_STENCIL;
      if (1035 === n11)
        return null !== (s2 = t10.get("EXT_sRGB")) ? s2.SRGB_ALPHA_EXT : null;
      if (1028 === n11)
        return e10.RED;
      if (1029 === n11)
        return e10.RED_INTEGER;
      if (1030 === n11)
        return e10.RG;
      if (1031 === n11)
        return e10.RG_INTEGER;
      if (1033 === n11)
        return e10.RGBA_INTEGER;
      if (33776 === n11 || 33777 === n11 || 33778 === n11 || 33779 === n11) {
        if (a2 === r) {
          if (null === (s2 = t10.get("WEBGL_compressed_texture_s3tc_srgb")))
            return null;
          if (33776 === n11)
            return s2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (33777 === n11)
            return s2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (33778 === n11)
            return s2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (33779 === n11)
            return s2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (null === (s2 = t10.get("WEBGL_compressed_texture_s3tc")))
            return null;
          if (33776 === n11)
            return s2.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === n11)
            return s2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === n11)
            return s2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === n11)
            return s2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      }
      if (35840 === n11 || 35841 === n11 || 35842 === n11 || 35843 === n11) {
        if (null === (s2 = t10.get("WEBGL_compressed_texture_pvrtc")))
          return null;
        if (35840 === n11)
          return s2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (35841 === n11)
          return s2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (35842 === n11)
          return s2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (35843 === n11)
          return s2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (36196 === n11)
        return null !== (s2 = t10.get("WEBGL_compressed_texture_etc1")) ? s2.COMPRESSED_RGB_ETC1_WEBGL : null;
      if (37492 === n11 || 37496 === n11) {
        if (null === (s2 = t10.get("WEBGL_compressed_texture_etc")))
          return null;
        if (37492 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ETC2 : s2.COMPRESSED_RGB8_ETC2;
        if (37496 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s2.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (37808 === n11 || 37809 === n11 || 37810 === n11 || 37811 === n11 || 37812 === n11 || 37813 === n11 || 37814 === n11 || 37815 === n11 || 37816 === n11 || 37817 === n11 || 37818 === n11 || 37819 === n11 || 37820 === n11 || 37821 === n11) {
        if (null === (s2 = t10.get("WEBGL_compressed_texture_astc")))
          return null;
        if (37808 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s2.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (37809 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s2.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (37810 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s2.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (37811 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s2.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (37812 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s2.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (37813 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s2.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (37814 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s2.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (37815 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s2.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (37816 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s2.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (37817 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s2.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (37818 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s2.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (37819 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s2.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (37820 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s2.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (37821 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s2.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (36492 === n11) {
        if (null === (s2 = t10.get("EXT_texture_compression_bptc")))
          return null;
        if (36492 === n11)
          return a2 === r ? s2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      }
      if (36283 === n11 || 36284 === n11 || 36285 === n11 || 36286 === n11) {
        if (null === (s2 = t10.get("EXT_texture_compression_rgtc")))
          return null;
        if (36492 === n11)
          return s2.COMPRESSED_RED_RGTC1_EXT;
        if (36284 === n11)
          return s2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (36285 === n11)
          return s2.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (36286 === n11)
          return s2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return 1020 === n11 ? i10 ? e10.UNSIGNED_INT_24_8 : null !== (s2 = t10.get("WEBGL_depth_texture")) ? s2.UNSIGNED_INT_24_8_WEBGL : null : void 0 !== e10[n11] ? e10[n11] : null;
    } };
  }
  class i$ extends tG {
    constructor(e10 = []) {
      super(), this.isArrayCamera = true, this.cameras = e10;
    }
  }
  class i0 extends ek {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  }
  let i1 = { type: "move" };
  class i2 {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new i0(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new i0(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new H(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new H()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new i0(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new H(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new H()), this._grip;
    }
    dispatchEvent(e10) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(e10), null !== this._grip && this._grip.dispatchEvent(e10), null !== this._hand && this._hand.dispatchEvent(e10), this;
    }
    connect(e10) {
      if (e10 && e10.hand) {
        let t10 = this._hand;
        if (t10)
          for (let n10 of e10.hand.values())
            this._getHandJoint(t10, n10);
      }
      return this.dispatchEvent({ type: "connected", data: e10 }), this;
    }
    disconnect(e10) {
      return this.dispatchEvent({ type: "disconnected", data: e10 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(e10, t10, n10) {
      let i10 = null, r10 = null, a2 = null, s2 = this._targetRay, o2 = this._grip, l2 = this._hand;
      if (e10 && "visible-blurred" !== t10.session.visibilityState) {
        if (l2 && e10.hand) {
          for (let i12 of (a2 = true, e10.hand.values())) {
            let e11 = t10.getJointPose(i12, n10), r12 = this._getHandJoint(l2, i12);
            null !== e11 && (r12.matrix.fromArray(e11.transform.matrix), r12.matrix.decompose(r12.position, r12.rotation, r12.scale), r12.matrixWorldNeedsUpdate = true, r12.jointRadius = e11.radius), r12.visible = null !== e11;
          }
          let i11 = l2.joints["index-finger-tip"], r11 = l2.joints["thumb-tip"], s3 = i11.position.distanceTo(r11.position);
          l2.inputState.pinching && s3 > 0.025 ? (l2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e10.handedness, target: this })) : !l2.inputState.pinching && s3 <= 0.015 && (l2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e10.handedness, target: this }));
        } else
          null !== o2 && e10.gripSpace && null !== (r10 = t10.getPose(e10.gripSpace, n10)) && (o2.matrix.fromArray(r10.transform.matrix), o2.matrix.decompose(o2.position, o2.rotation, o2.scale), o2.matrixWorldNeedsUpdate = true, r10.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r10.linearVelocity)) : o2.hasLinearVelocity = false, r10.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r10.angularVelocity)) : o2.hasAngularVelocity = false);
        null !== s2 && (null === (i10 = t10.getPose(e10.targetRaySpace, n10)) && null !== r10 && (i10 = r10), null !== i10 && (s2.matrix.fromArray(i10.transform.matrix), s2.matrix.decompose(s2.position, s2.rotation, s2.scale), s2.matrixWorldNeedsUpdate = true, i10.linearVelocity ? (s2.hasLinearVelocity = true, s2.linearVelocity.copy(i10.linearVelocity)) : s2.hasLinearVelocity = false, i10.angularVelocity ? (s2.hasAngularVelocity = true, s2.angularVelocity.copy(i10.angularVelocity)) : s2.hasAngularVelocity = false, this.dispatchEvent(i1)));
      }
      return null !== s2 && (s2.visible = null !== i10), null !== o2 && (o2.visible = null !== r10), null !== l2 && (l2.visible = null !== a2), this;
    }
    _getHandJoint(e10, t10) {
      if (void 0 === e10.joints[t10.jointName]) {
        let n10 = new i0();
        n10.matrixAutoUpdate = false, n10.visible = false, e10.joints[t10.jointName] = n10, e10.add(n10);
      }
      return e10.joints[t10.jointName];
    }
  }
  class i3 extends F {
    constructor(e10, t10, n10, i10, r10, a2, s2, o2, l2, h2) {
      if (1026 !== (h2 = void 0 !== h2 ? h2 : 1026) && 1027 !== h2)
        throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n10 && 1026 === h2 && (n10 = 1014), void 0 === n10 && 1027 === h2 && (n10 = 1020), super(null, i10, r10, a2, s2, o2, h2, n10, l2), this.isDepthTexture = true, this.image = { width: e10, height: t10 }, this.magFilter = void 0 !== s2 ? s2 : 1003, this.minFilter = void 0 !== o2 ? o2 : 1003, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(e10) {
      return super.copy(e10), this.compareFunction = e10.compareFunction, this;
    }
    toJSON(e10) {
      let t10 = super.toJSON(e10);
      return null !== this.compareFunction && (t10.compareFunction = this.compareFunction), t10;
    }
  }
  class i4 extends l {
    constructor(e10, t10) {
      super();
      let n10 = this, i10 = null, r10 = 1, a2 = null, s2 = "local-floor", o2 = 1, l2 = null, h2 = null, u2 = null, d2 = null, p2 = null, f2 = null, m2 = t10.getContextAttributes(), g2 = null, _2 = null, v2 = [], x2 = [], y2 = null, M2 = new tG();
      M2.layers.enable(1), M2.viewport = new z();
      let S2 = new tG();
      S2.layers.enable(2), S2.viewport = new z();
      let E2 = [M2, S2], T2 = new i$();
      T2.layers.enable(1), T2.layers.enable(2);
      let b2 = null, A2 = null;
      function w2(e11) {
        let t11 = x2.indexOf(e11.inputSource);
        if (-1 === t11)
          return;
        let n11 = v2[t11];
        void 0 !== n11 && (n11.update(e11.inputSource, e11.frame, l2 || a2), n11.dispatchEvent({ type: e11.type, data: e11.inputSource }));
      }
      function R2() {
        i10.removeEventListener("select", w2), i10.removeEventListener("selectstart", w2), i10.removeEventListener("selectend", w2), i10.removeEventListener("squeeze", w2), i10.removeEventListener("squeezestart", w2), i10.removeEventListener("squeezeend", w2), i10.removeEventListener("end", R2), i10.removeEventListener("inputsourceschange", C2);
        for (let e11 = 0; e11 < v2.length; e11++) {
          let t11 = x2[e11];
          null !== t11 && (x2[e11] = null, v2[e11].disconnect(t11));
        }
        b2 = null, A2 = null, e10.setRenderTarget(g2), p2 = null, d2 = null, u2 = null, i10 = null, _2 = null, D2.stop(), n10.isPresenting = false, n10.dispatchEvent({ type: "sessionend" });
      }
      function C2(e11) {
        for (let t11 = 0; t11 < e11.removed.length; t11++) {
          let n11 = e11.removed[t11], i11 = x2.indexOf(n11);
          i11 >= 0 && (x2[i11] = null, v2[i11].disconnect(n11));
        }
        for (let t11 = 0; t11 < e11.added.length; t11++) {
          let n11 = e11.added[t11], i11 = x2.indexOf(n11);
          if (-1 === i11) {
            for (let e12 = 0; e12 < v2.length; e12++) {
              if (e12 >= x2.length) {
                x2.push(n11), i11 = e12;
                break;
              }
              if (null === x2[e12]) {
                x2[e12] = n11, i11 = e12;
                break;
              }
            }
            if (-1 === i11)
              break;
          }
          let r11 = v2[i11];
          r11 && r11.connect(n11);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getCamera = function() {
      }, this.setUserCamera = function(e11) {
        y2 = e11;
      }, this.getController = function(e11) {
        let t11 = v2[e11];
        return void 0 === t11 && (t11 = new i2(), v2[e11] = t11), t11.getTargetRaySpace();
      }, this.getControllerGrip = function(e11) {
        let t11 = v2[e11];
        return void 0 === t11 && (t11 = new i2(), v2[e11] = t11), t11.getGripSpace();
      }, this.getHand = function(e11) {
        let t11 = v2[e11];
        return void 0 === t11 && (t11 = new i2(), v2[e11] = t11), t11.getHandSpace();
      }, this.setFramebufferScaleFactor = function(e11) {
        r10 = e11, true === n10.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(e11) {
        s2 = e11, true === n10.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return l2 || a2;
      }, this.setReferenceSpace = function(e11) {
        l2 = e11;
      }, this.getBaseLayer = function() {
        return null !== d2 ? d2 : p2;
      }, this.getBinding = function() {
        return u2;
      }, this.getFrame = function() {
        return f2;
      }, this.getSession = function() {
        return i10;
      }, this.setSession = async function(h3) {
        if (null !== (i10 = h3)) {
          if (g2 = e10.getRenderTarget(), i10.addEventListener("select", w2), i10.addEventListener("selectstart", w2), i10.addEventListener("selectend", w2), i10.addEventListener("squeeze", w2), i10.addEventListener("squeezestart", w2), i10.addEventListener("squeezeend", w2), i10.addEventListener("end", R2), i10.addEventListener("inputsourceschange", C2), true !== m2.xrCompatible && await t10.makeXRCompatible(), void 0 === i10.renderState.layers || false === e10.capabilities.isWebGL2) {
            let n11 = { antialias: void 0 !== i10.renderState.layers || m2.antialias, alpha: true, depth: m2.depth, stencil: m2.stencil, framebufferScaleFactor: r10 };
            p2 = new XRWebGLLayer(i10, t10, n11), i10.updateRenderState({ baseLayer: p2 }), _2 = new B(p2.framebufferWidth, p2.framebufferHeight, { format: 1023, type: 1009, colorSpace: e10.outputColorSpace, stencilBuffer: m2.stencil });
          } else {
            let n11 = null, a3 = null, s3 = null;
            m2.depth && (s3 = m2.stencil ? t10.DEPTH24_STENCIL8 : t10.DEPTH_COMPONENT24, n11 = m2.stencil ? 1027 : 1026, a3 = m2.stencil ? 1020 : 1014);
            let o3 = { colorFormat: t10.RGBA8, depthFormat: s3, scaleFactor: r10 };
            d2 = (u2 = new XRWebGLBinding(i10, t10)).createProjectionLayer(o3), i10.updateRenderState({ layers: [d2] }), _2 = new B(d2.textureWidth, d2.textureHeight, { format: 1023, type: 1009, depthTexture: new i3(d2.textureWidth, d2.textureHeight, a3, void 0, void 0, void 0, void 0, void 0, void 0, n11), stencilBuffer: m2.stencil, colorSpace: e10.outputColorSpace, samples: m2.antialias ? 4 : 0 });
            let l3 = e10.properties.get(_2);
            l3.__ignoreDepthValues = d2.ignoreDepthValues;
          }
          _2.isXRRenderTarget = true, this.setFoveation(o2), l2 = null, a2 = await i10.requestReferenceSpace(s2), D2.setContext(i10), D2.start(), n10.isPresenting = true, n10.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== i10)
          return i10.environmentBlendMode;
      };
      let L2 = new H(), P2 = new H();
      function U2(e11, t11) {
        null === t11 ? e11.matrixWorld.copy(e11.matrix) : e11.matrixWorld.multiplyMatrices(t11.matrixWorld, e11.matrix), e11.matrixWorldInverse.copy(e11.matrixWorld).invert();
      }
      this.updateCameraXR = function(e11) {
        if (null === i10)
          return e11;
        y2 && (e11 = y2), T2.near = S2.near = M2.near = e11.near, T2.far = S2.far = M2.far = e11.far, (b2 !== T2.near || A2 !== T2.far) && (i10.updateRenderState({ depthNear: T2.near, depthFar: T2.far }), b2 = T2.near, A2 = T2.far);
        let t11 = e11.parent, n11 = T2.cameras;
        U2(T2, t11);
        for (let e12 = 0; e12 < n11.length; e12++)
          U2(n11[e12], t11);
        return 2 === n11.length ? function(e12, t12, n12) {
          L2.setFromMatrixPosition(t12.matrixWorld), P2.setFromMatrixPosition(n12.matrixWorld);
          let i11 = L2.distanceTo(P2), r11 = t12.projectionMatrix.elements, a3 = n12.projectionMatrix.elements, s3 = r11[14] / (r11[10] - 1), o3 = r11[14] / (r11[10] + 1), l3 = (r11[9] + 1) / r11[5], h3 = (r11[9] - 1) / r11[5], u3 = (r11[8] - 1) / r11[0], c2 = (a3[8] + 1) / a3[0], d3 = i11 / (-u3 + c2), p3 = -(d3 * u3);
          t12.matrixWorld.decompose(e12.position, e12.quaternion, e12.scale), e12.translateX(p3), e12.translateZ(d3), e12.matrixWorld.compose(e12.position, e12.quaternion, e12.scale), e12.matrixWorldInverse.copy(e12.matrixWorld).invert();
          let f3 = s3 + d3, m3 = o3 + d3, g3 = s3 * u3 - p3, _3 = s3 * c2 + (i11 - p3), v3 = l3 * o3 / m3 * f3, x3 = h3 * o3 / m3 * f3;
          e12.projectionMatrix.makePerspective(g3, _3, v3, x3, f3, m3), e12.projectionMatrixInverse.copy(e12.projectionMatrix).invert();
        }(T2, M2, S2) : T2.projectionMatrix.copy(M2.projectionMatrix), y2 && function(e12, t12) {
          let n12 = y2;
          null === t12 ? n12.matrix.copy(e12.matrixWorld) : (n12.matrix.copy(t12.matrixWorld), n12.matrix.invert(), n12.matrix.multiply(e12.matrixWorld)), n12.matrix.decompose(n12.position, n12.quaternion, n12.scale), n12.updateMatrixWorld(true);
          let i11 = n12.children;
          for (let e13 = 0, t13 = i11.length; e13 < t13; e13++)
            i11[e13].updateMatrixWorld(true);
          n12.projectionMatrix.copy(e12.projectionMatrix), n12.projectionMatrixInverse.copy(e12.projectionMatrixInverse), n12.isPerspectiveCamera && (n12.fov = 2 * c * Math.atan(1 / n12.projectionMatrix.elements[5]), n12.zoom = 1);
        }(T2, t11), T2;
      }, this.getFoveation = function() {
        if (null !== d2 || null !== p2)
          return o2;
      }, this.setFoveation = function(e11) {
        o2 = e11, null !== d2 && (d2.fixedFoveation = e11), null !== p2 && void 0 !== p2.fixedFoveation && (p2.fixedFoveation = e11);
      };
      let N2 = null, D2 = new tQ();
      D2.setAnimationLoop(function(t11, i11) {
        if (h2 = i11.getViewerPose(l2 || a2), f2 = i11, null !== h2) {
          let t12 = h2.views;
          null !== p2 && (e10.setRenderTargetFramebuffer(_2, p2.framebuffer), e10.setRenderTarget(_2));
          let n11 = false;
          t12.length !== T2.cameras.length && (T2.cameras.length = 0, n11 = true);
          for (let i12 = 0; i12 < t12.length; i12++) {
            let r11 = t12[i12], a3 = null;
            if (null !== p2)
              a3 = p2.getViewport(r11);
            else {
              let t13 = u2.getViewSubImage(d2, r11);
              a3 = t13.viewport, 0 === i12 && (e10.setRenderTargetTextures(_2, t13.colorTexture, d2.ignoreDepthValues ? void 0 : t13.depthStencilTexture), e10.setRenderTarget(_2));
            }
            let s3 = E2[i12];
            void 0 === s3 && ((s3 = new tG()).layers.enable(i12), s3.viewport = new z(), E2[i12] = s3), s3.matrix.fromArray(r11.transform.matrix), s3.matrix.decompose(s3.position, s3.quaternion, s3.scale), s3.projectionMatrix.fromArray(r11.projectionMatrix), s3.projectionMatrixInverse.copy(s3.projectionMatrix).invert(), s3.viewport.set(a3.x, a3.y, a3.width, a3.height), 0 === i12 && (T2.matrix.copy(s3.matrix), T2.matrix.decompose(T2.position, T2.quaternion, T2.scale)), true === n11 && T2.cameras.push(s3);
          }
        }
        for (let e11 = 0; e11 < v2.length; e11++) {
          let t12 = x2[e11], n11 = v2[e11];
          null !== t12 && void 0 !== n11 && n11.update(t12, i11, l2 || a2);
        }
        N2 && N2(t11, i11), i11.detectedPlanes && n10.dispatchEvent({ type: "planesdetected", data: i11 }), f2 = null;
      }), this.setAnimationLoop = function(e11) {
        N2 = e11;
      }, this.dispose = function() {
      };
    }
  }
  function i5(e10, t10) {
    function n10(e11, t11) {
      true === e11.matrixAutoUpdate && e11.updateMatrix(), t11.value.copy(e11.matrix);
    }
    function i10(i11, r10) {
      i11.opacity.value = r10.opacity, r10.color && i11.diffuse.value.copy(r10.color), r10.emissive && i11.emissive.value.copy(r10.emissive).multiplyScalar(r10.emissiveIntensity), r10.map && (i11.map.value = r10.map, n10(r10.map, i11.mapTransform)), r10.alphaMap && (i11.alphaMap.value = r10.alphaMap, n10(r10.alphaMap, i11.alphaMapTransform)), r10.bumpMap && (i11.bumpMap.value = r10.bumpMap, n10(r10.bumpMap, i11.bumpMapTransform), i11.bumpScale.value = r10.bumpScale, 1 === r10.side && (i11.bumpScale.value *= -1)), r10.normalMap && (i11.normalMap.value = r10.normalMap, n10(r10.normalMap, i11.normalMapTransform), i11.normalScale.value.copy(r10.normalScale), 1 === r10.side && i11.normalScale.value.negate()), r10.displacementMap && (i11.displacementMap.value = r10.displacementMap, n10(r10.displacementMap, i11.displacementMapTransform), i11.displacementScale.value = r10.displacementScale, i11.displacementBias.value = r10.displacementBias), r10.emissiveMap && (i11.emissiveMap.value = r10.emissiveMap, n10(r10.emissiveMap, i11.emissiveMapTransform)), r10.specularMap && (i11.specularMap.value = r10.specularMap, n10(r10.specularMap, i11.specularMapTransform)), r10.alphaTest > 0 && (i11.alphaTest.value = r10.alphaTest);
      let a2 = t10.get(r10).envMap;
      if (a2 && (i11.envMap.value = a2, i11.flipEnvMap.value = a2.isCubeTexture && false === a2.isRenderTargetTexture ? -1 : 1, i11.reflectivity.value = r10.reflectivity, i11.ior.value = r10.ior, i11.refractionRatio.value = r10.refractionRatio), r10.lightMap) {
        i11.lightMap.value = r10.lightMap;
        let t11 = true === e10.useLegacyLights ? Math.PI : 1;
        i11.lightMapIntensity.value = r10.lightMapIntensity * t11, n10(r10.lightMap, i11.lightMapTransform);
      }
      r10.aoMap && (i11.aoMap.value = r10.aoMap, i11.aoMapIntensity.value = r10.aoMapIntensity, n10(r10.aoMap, i11.aoMapTransform));
    }
    return { refreshFogUniforms: function(t11, n11) {
      n11.color.getRGB(t11.fogColor.value, tF(e10)), n11.isFog ? (t11.fogNear.value = n11.near, t11.fogFar.value = n11.far) : n11.isFogExp2 && (t11.fogDensity.value = n11.density);
    }, refreshMaterialUniforms: function(e11, r10, a2, s2, o2) {
      r10.isMeshBasicMaterial ? i10(e11, r10) : r10.isMeshLambertMaterial ? i10(e11, r10) : r10.isMeshToonMaterial ? (i10(e11, r10), r10.gradientMap && (e11.gradientMap.value = r10.gradientMap)) : r10.isMeshPhongMaterial ? (i10(e11, r10), e11.specular.value.copy(r10.specular), e11.shininess.value = Math.max(r10.shininess, 1e-4)) : r10.isMeshStandardMaterial ? (i10(e11, r10), function(e12, i11) {
        e12.metalness.value = i11.metalness, i11.metalnessMap && (e12.metalnessMap.value = i11.metalnessMap, n10(i11.metalnessMap, e12.metalnessMapTransform)), e12.roughness.value = i11.roughness, i11.roughnessMap && (e12.roughnessMap.value = i11.roughnessMap, n10(i11.roughnessMap, e12.roughnessMapTransform));
        let r11 = t10.get(i11).envMap;
        r11 && (e12.envMapIntensity.value = i11.envMapIntensity);
      }(e11, r10), r10.isMeshPhysicalMaterial && (e11.ior.value = r10.ior, r10.sheen > 0 && (e11.sheenColor.value.copy(r10.sheenColor).multiplyScalar(r10.sheen), e11.sheenRoughness.value = r10.sheenRoughness, r10.sheenColorMap && (e11.sheenColorMap.value = r10.sheenColorMap, n10(r10.sheenColorMap, e11.sheenColorMapTransform)), r10.sheenRoughnessMap && (e11.sheenRoughnessMap.value = r10.sheenRoughnessMap, n10(r10.sheenRoughnessMap, e11.sheenRoughnessMapTransform))), r10.clearcoat > 0 && (e11.clearcoat.value = r10.clearcoat, e11.clearcoatRoughness.value = r10.clearcoatRoughness, r10.clearcoatMap && (e11.clearcoatMap.value = r10.clearcoatMap, n10(r10.clearcoatMap, e11.clearcoatMapTransform)), r10.clearcoatRoughnessMap && (e11.clearcoatRoughnessMap.value = r10.clearcoatRoughnessMap, n10(r10.clearcoatRoughnessMap, e11.clearcoatRoughnessMapTransform)), r10.clearcoatNormalMap && (e11.clearcoatNormalMap.value = r10.clearcoatNormalMap, n10(r10.clearcoatNormalMap, e11.clearcoatNormalMapTransform), e11.clearcoatNormalScale.value.copy(r10.clearcoatNormalScale), 1 === r10.side && e11.clearcoatNormalScale.value.negate())), r10.iridescence > 0 && (e11.iridescence.value = r10.iridescence, e11.iridescenceIOR.value = r10.iridescenceIOR, e11.iridescenceThicknessMinimum.value = r10.iridescenceThicknessRange[0], e11.iridescenceThicknessMaximum.value = r10.iridescenceThicknessRange[1], r10.iridescenceMap && (e11.iridescenceMap.value = r10.iridescenceMap, n10(r10.iridescenceMap, e11.iridescenceMapTransform)), r10.iridescenceThicknessMap && (e11.iridescenceThicknessMap.value = r10.iridescenceThicknessMap, n10(r10.iridescenceThicknessMap, e11.iridescenceThicknessMapTransform))), r10.transmission > 0 && (e11.transmission.value = r10.transmission, e11.transmissionSamplerMap.value = o2.texture, e11.transmissionSamplerSize.value.set(o2.width, o2.height), r10.transmissionMap && (e11.transmissionMap.value = r10.transmissionMap, n10(r10.transmissionMap, e11.transmissionMapTransform)), e11.thickness.value = r10.thickness, r10.thicknessMap && (e11.thicknessMap.value = r10.thicknessMap, n10(r10.thicknessMap, e11.thicknessMapTransform)), e11.attenuationDistance.value = r10.attenuationDistance, e11.attenuationColor.value.copy(r10.attenuationColor)), r10.anisotropy > 0 && (e11.anisotropyVector.value.set(r10.anisotropy * Math.cos(r10.anisotropyRotation), r10.anisotropy * Math.sin(r10.anisotropyRotation)), r10.anisotropyMap && (e11.anisotropyMap.value = r10.anisotropyMap, n10(r10.anisotropyMap, e11.anisotropyMapTransform))), e11.specularIntensity.value = r10.specularIntensity, e11.specularColor.value.copy(r10.specularColor), r10.specularColorMap && (e11.specularColorMap.value = r10.specularColorMap, n10(r10.specularColorMap, e11.specularColorMapTransform)), r10.specularIntensityMap && (e11.specularIntensityMap.value = r10.specularIntensityMap, n10(r10.specularIntensityMap, e11.specularIntensityMapTransform)))) : r10.isMeshMatcapMaterial ? (i10(e11, r10), r10.matcap && (e11.matcap.value = r10.matcap)) : r10.isMeshDepthMaterial ? i10(e11, r10) : r10.isMeshDistanceMaterial ? (i10(e11, r10), function(e12, n11) {
        let i11 = t10.get(n11).light;
        e12.referencePosition.value.setFromMatrixPosition(i11.matrixWorld), e12.nearDistance.value = i11.shadow.camera.near, e12.farDistance.value = i11.shadow.camera.far;
      }(e11, r10)) : r10.isMeshNormalMaterial ? i10(e11, r10) : r10.isLineBasicMaterial ? (e11.diffuse.value.copy(r10.color), e11.opacity.value = r10.opacity, r10.map && (e11.map.value = r10.map, n10(r10.map, e11.mapTransform)), r10.isLineDashedMaterial && (e11.dashSize.value = r10.dashSize, e11.totalSize.value = r10.dashSize + r10.gapSize, e11.scale.value = r10.scale)) : r10.isPointsMaterial ? (e11.diffuse.value.copy(r10.color), e11.opacity.value = r10.opacity, e11.size.value = r10.size * a2, e11.scale.value = 0.5 * s2, r10.map && (e11.map.value = r10.map, n10(r10.map, e11.uvTransform)), r10.alphaMap && (e11.alphaMap.value = r10.alphaMap, n10(r10.alphaMap, e11.alphaMapTransform)), r10.alphaTest > 0 && (e11.alphaTest.value = r10.alphaTest)) : r10.isSpriteMaterial ? (e11.diffuse.value.copy(r10.color), e11.opacity.value = r10.opacity, e11.rotation.value = r10.rotation, r10.map && (e11.map.value = r10.map, n10(r10.map, e11.mapTransform)), r10.alphaMap && (e11.alphaMap.value = r10.alphaMap, n10(r10.alphaMap, e11.alphaMapTransform)), r10.alphaTest > 0 && (e11.alphaTest.value = r10.alphaTest)) : r10.isShadowMaterial ? (e11.color.value.copy(r10.color), e11.opacity.value = r10.opacity) : r10.isShaderMaterial && (r10.uniformsNeedUpdate = false);
    } };
  }
  function i6(e10, t10, n10, i10) {
    let r10 = {}, a2 = {}, s2 = [], o2 = n10.isWebGL2 ? e10.getParameter(e10.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
    function l2(e11) {
      let t11 = { boundary: 0, storage: 0 };
      return "number" == typeof e11 ? (t11.boundary = 4, t11.storage = 4) : e11.isVector2 ? (t11.boundary = 8, t11.storage = 8) : e11.isVector3 || e11.isColor ? (t11.boundary = 16, t11.storage = 12) : e11.isVector4 ? (t11.boundary = 16, t11.storage = 16) : e11.isMatrix3 ? (t11.boundary = 48, t11.storage = 48) : e11.isMatrix4 ? (t11.boundary = 64, t11.storage = 64) : e11.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e11), t11;
    }
    function h2(t11) {
      let n11 = t11.target;
      n11.removeEventListener("dispose", h2);
      let i11 = s2.indexOf(n11.__bindingPointIndex);
      s2.splice(i11, 1), e10.deleteBuffer(r10[n11.id]), delete r10[n11.id], delete a2[n11.id];
    }
    return { bind: function(e11, t11) {
      let n11 = t11.program;
      i10.uniformBlockBinding(e11, n11);
    }, update: function(n11, u2) {
      let c2 = r10[n11.id];
      void 0 === c2 && (function(e11) {
        let t11 = e11.uniforms, n12 = 0, i11 = 0;
        for (let e12 = 0, r11 = t11.length; e12 < r11; e12++) {
          let r12 = t11[e12], a3 = { boundary: 0, storage: 0 }, s3 = Array.isArray(r12.value) ? r12.value : [r12.value];
          for (let e13 = 0, t12 = s3.length; e13 < t12; e13++) {
            let t13 = s3[e13], n13 = l2(t13);
            a3.boundary += n13.boundary, a3.storage += n13.storage;
          }
          if (r12.__data = new Float32Array(a3.storage / Float32Array.BYTES_PER_ELEMENT), r12.__offset = n12, e12 > 0) {
            i11 = n12 % 16;
            let e13 = 16 - i11;
            0 !== i11 && e13 - a3.boundary < 0 && (n12 += 16 - i11, r12.__offset = n12);
          }
          n12 += a3.storage;
        }
        (i11 = n12 % 16) > 0 && (n12 += 16 - i11), e11.__size = n12, e11.__cache = {};
      }(n11), c2 = function(t11) {
        let n12 = function() {
          for (let e11 = 0; e11 < o2; e11++)
            if (-1 === s2.indexOf(e11))
              return s2.push(e11), e11;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }();
        t11.__bindingPointIndex = n12;
        let i11 = e10.createBuffer(), r11 = t11.__size, a3 = t11.usage;
        return e10.bindBuffer(e10.UNIFORM_BUFFER, i11), e10.bufferData(e10.UNIFORM_BUFFER, r11, a3), e10.bindBuffer(e10.UNIFORM_BUFFER, null), e10.bindBufferBase(e10.UNIFORM_BUFFER, n12, i11), i11;
      }(n11), r10[n11.id] = c2, n11.addEventListener("dispose", h2));
      let d2 = u2.program;
      i10.updateUBOMapping(n11, d2);
      let p2 = t10.render.frame;
      a2[n11.id] !== p2 && (function(t11) {
        let n12 = r10[t11.id], i11 = t11.uniforms, a3 = t11.__cache;
        e10.bindBuffer(e10.UNIFORM_BUFFER, n12);
        for (let t12 = 0, n13 = i11.length; t12 < n13; t12++) {
          let n14 = i11[t12];
          if (true === function(e11, t13, n15) {
            let i12 = e11.value;
            if (void 0 === n15[t13]) {
              if ("number" == typeof i12)
                n15[t13] = i12;
              else {
                let e12 = Array.isArray(i12) ? i12 : [i12], r11 = [];
                for (let t14 = 0; t14 < e12.length; t14++)
                  r11.push(e12[t14].clone());
                n15[t13] = r11;
              }
              return true;
            }
            if ("number" == typeof i12) {
              if (n15[t13] !== i12)
                return n15[t13] = i12, true;
            } else {
              let e12 = Array.isArray(n15[t13]) ? n15[t13] : [n15[t13]], r11 = Array.isArray(i12) ? i12 : [i12];
              for (let t14 = 0; t14 < e12.length; t14++) {
                let n16 = e12[t14];
                if (false === n16.equals(r11[t14]))
                  return n16.copy(r11[t14]), true;
              }
            }
            return false;
          }(n14, t12, a3)) {
            let t13 = n14.__offset, i12 = Array.isArray(n14.value) ? n14.value : [n14.value], r11 = 0;
            for (let a4 = 0; a4 < i12.length; a4++) {
              let s3 = i12[a4], o3 = l2(s3);
              "number" == typeof s3 ? (n14.__data[0] = s3, e10.bufferSubData(e10.UNIFORM_BUFFER, t13 + r11, n14.__data)) : s3.isMatrix3 ? (n14.__data[0] = s3.elements[0], n14.__data[1] = s3.elements[1], n14.__data[2] = s3.elements[2], n14.__data[3] = s3.elements[0], n14.__data[4] = s3.elements[3], n14.__data[5] = s3.elements[4], n14.__data[6] = s3.elements[5], n14.__data[7] = s3.elements[0], n14.__data[8] = s3.elements[6], n14.__data[9] = s3.elements[7], n14.__data[10] = s3.elements[8], n14.__data[11] = s3.elements[0]) : (s3.toArray(n14.__data, r11), r11 += o3.storage / Float32Array.BYTES_PER_ELEMENT);
            }
            e10.bufferSubData(e10.UNIFORM_BUFFER, t13, n14.__data);
          }
        }
        e10.bindBuffer(e10.UNIFORM_BUFFER, null);
      }(n11), a2[n11.id] = p2);
    }, dispose: function() {
      for (let t11 in r10)
        e10.deleteBuffer(r10[t11]);
      s2 = [], r10 = {}, a2 = {};
    } };
  }
  class i7 {
    constructor(e10 = {}) {
      let t10, n10, i10, s2, o2, l2, h2, u2, c2, d2, p2, f2, g2, _2, x2, y2, M2, E2, T2, b2, A2, w2, R2, C2, L2;
      let { canvas: P2 = function() {
        let e11 = S("canvas");
        return e11.style.display = "block", e11;
      }(), context: U2 = null, depth: N2 = true, stencil: D2 = true, alpha: I2 = false, antialias: O2 = false, premultipliedAlpha: F2 = true, preserveDrawingBuffer: V2 = false, powerPreference: G2 = "default", failIfMajorPerformanceCaveat: k2 = false } = e10;
      this.isWebGLRenderer = true, t10 = null !== U2 ? U2.getContextAttributes().alpha : I2;
      let W2 = new Uint32Array(4), X2 = new Int32Array(4), j2 = null, q2 = null, Y2 = [], J2 = [];
      this.domElement = P2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.outputColorSpace = r, this.useLegacyLights = true, this.toneMapping = 0, this.toneMappingExposure = 1;
      let Z2 = this, K2 = false, Q2 = 0, $2 = 0, ee2 = null, et2 = -1, en2 = null, ei2 = new z(), er2 = new z(), ea2 = null, es2 = new e8(0), eo2 = 0, el2 = P2.width, eh2 = P2.height, eu2 = 1, ec2 = null, ed2 = null, ep2 = new z(0, 0, el2, eh2), ef2 = new z(0, 0, el2, eh2), em2 = false, eg2 = new tK(), e_2 = false, ex2 = false, ey2 = null, eM2 = new ev(), eS2 = new v(), eE2 = new H(), eT2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      function eb2() {
        return null === ee2 ? eu2 : 1;
      }
      let eA2 = U2;
      function ew2(e11, t11) {
        for (let n11 = 0; n11 < e11.length; n11++) {
          let i11 = e11[n11], r10 = P2.getContext(i11, t11);
          if (null !== r10)
            return r10;
        }
        return null;
      }
      try {
        if ("setAttribute" in P2 && P2.setAttribute("data-engine", "three.js r153"), P2.addEventListener("webglcontextlost", eL2, false), P2.addEventListener("webglcontextrestored", eP2, false), P2.addEventListener("webglcontextcreationerror", eU2, false), null === eA2) {
          let e11 = ["webgl2", "webgl", "experimental-webgl"];
          if (true === Z2.isWebGL1Renderer && e11.shift(), eA2 = ew2(e11, { alpha: true, depth: N2, stencil: D2, antialias: O2, premultipliedAlpha: F2, preserveDrawingBuffer: V2, powerPreference: G2, failIfMajorPerformanceCaveat: k2 }), null === eA2) {
            if (ew2(e11))
              throw Error("Error creating WebGL context with your selected attributes.");
            throw Error("Error creating WebGL context.");
          }
        }
        eA2 instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), void 0 === eA2.getShaderPrecisionFormat && (eA2.getShaderPrecisionFormat = function() {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
      } catch (e11) {
        throw console.error("THREE.WebGLRenderer: " + e11.message), e11;
      }
      function eR2() {
        n10 = new nm(eA2), i10 = new t8(eA2, n10, e10), n10.init(i10), R2 = new iQ(eA2, n10, i10), s2 = new iZ(eA2, n10, i10), o2 = new nv(eA2), l2 = new iO(), h2 = new iK(eA2, n10, s2, l2, i10, R2, o2), u2 = new ne(Z2), c2 = new nf(Z2), d2 = new t$(eA2, i10), C2 = new t6(eA2, n10, d2, i10), p2 = new ng(eA2, d2, o2, C2), f2 = new nS(eA2, p2, d2, o2), b2 = new nM(eA2, i10, h2), M2 = new t9(l2), g2 = new iI(Z2, u2, c2, n10, i10, C2, M2), _2 = new i5(Z2, l2), x2 = new iV(), y2 = new ij(n10, i10), T2 = new t5(Z2, u2, c2, s2, f2, t10, F2), E2 = new iJ(Z2, f2, i10), L2 = new i6(eA2, o2, i10, s2), A2 = new t7(eA2, n10, o2, i10), w2 = new n_(eA2, n10, o2, i10), o2.programs = g2.programs, Z2.capabilities = i10, Z2.extensions = n10, Z2.properties = l2, Z2.renderLists = x2, Z2.shadowMap = E2, Z2.state = s2, Z2.info = o2;
      }
      eR2();
      let eC2 = new i4(Z2, eA2);
      function eL2(e11) {
        e11.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), K2 = true;
      }
      function eP2() {
        console.log("THREE.WebGLRenderer: Context Restored."), K2 = false;
        let e11 = o2.autoReset, t11 = E2.enabled, n11 = E2.autoUpdate, i11 = E2.needsUpdate, r10 = E2.type;
        eR2(), o2.autoReset = e11, E2.enabled = t11, E2.autoUpdate = n11, E2.needsUpdate = i11, E2.type = r10;
      }
      function eU2(e11) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e11.statusMessage);
      }
      function eN2(e11) {
        let t11 = e11.target;
        t11.removeEventListener("dispose", eN2), function(e12) {
          let t12 = l2.get(e12).programs;
          void 0 !== t12 && (t12.forEach(function(e13) {
            g2.releaseProgram(e13);
          }), e12.isShaderMaterial && g2.releaseShaderCache(e12));
        }(t11), l2.remove(t11);
      }
      this.xr = eC2, this.getContext = function() {
        return eA2;
      }, this.getContextAttributes = function() {
        return eA2.getContextAttributes();
      }, this.forceContextLoss = function() {
        let e11 = n10.get("WEBGL_lose_context");
        e11 && e11.loseContext();
      }, this.forceContextRestore = function() {
        let e11 = n10.get("WEBGL_lose_context");
        e11 && e11.restoreContext();
      }, this.getPixelRatio = function() {
        return eu2;
      }, this.setPixelRatio = function(e11) {
        void 0 !== e11 && (eu2 = e11, this.setSize(el2, eh2, false));
      }, this.getSize = function(e11) {
        return e11.set(el2, eh2);
      }, this.setSize = function(e11, t11, n11 = true) {
        if (eC2.isPresenting) {
          console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        el2 = e11, eh2 = t11, P2.width = Math.floor(e11 * eu2), P2.height = Math.floor(t11 * eu2), true === n11 && (P2.style.width = e11 + "px", P2.style.height = t11 + "px"), this.setViewport(0, 0, e11, t11);
      }, this.getDrawingBufferSize = function(e11) {
        return e11.set(el2 * eu2, eh2 * eu2).floor();
      }, this.setDrawingBufferSize = function(e11, t11, n11) {
        el2 = e11, eh2 = t11, eu2 = n11, P2.width = Math.floor(e11 * n11), P2.height = Math.floor(t11 * n11), this.setViewport(0, 0, e11, t11);
      }, this.getCurrentViewport = function(e11) {
        return e11.copy(ei2);
      }, this.getViewport = function(e11) {
        return e11.copy(ep2);
      }, this.setViewport = function(e11, t11, n11, i11) {
        e11.isVector4 ? ep2.set(e11.x, e11.y, e11.z, e11.w) : ep2.set(e11, t11, n11, i11), s2.viewport(ei2.copy(ep2).multiplyScalar(eu2).floor());
      }, this.getScissor = function(e11) {
        return e11.copy(ef2);
      }, this.setScissor = function(e11, t11, n11, i11) {
        e11.isVector4 ? ef2.set(e11.x, e11.y, e11.z, e11.w) : ef2.set(e11, t11, n11, i11), s2.scissor(er2.copy(ef2).multiplyScalar(eu2).floor());
      }, this.getScissorTest = function() {
        return em2;
      }, this.setScissorTest = function(e11) {
        s2.setScissorTest(em2 = e11);
      }, this.setOpaqueSort = function(e11) {
        ec2 = e11;
      }, this.setTransparentSort = function(e11) {
        ed2 = e11;
      }, this.getClearColor = function(e11) {
        return e11.copy(T2.getClearColor());
      }, this.setClearColor = function() {
        T2.setClearColor.apply(T2, arguments);
      }, this.getClearAlpha = function() {
        return T2.getClearAlpha();
      }, this.setClearAlpha = function() {
        T2.setClearAlpha.apply(T2, arguments);
      }, this.clear = function(e11 = true, t11 = true, n11 = true) {
        let i11 = 0;
        if (e11) {
          let e12 = false;
          if (null !== ee2) {
            let t12 = ee2.texture.format;
            e12 = 1033 === t12 || 1031 === t12 || 1029 === t12;
          }
          if (e12) {
            let e13 = ee2.texture.type, t12 = T2.getClearColor(), n12 = T2.getClearAlpha(), i12 = t12.r, r10 = t12.g, a2 = t12.b, s3 = l2.get(ee2).__webglFramebuffer;
            1009 === e13 || 1014 === e13 || 1012 === e13 || 1020 === e13 || 1017 === e13 || 1018 === e13 ? (W2[0] = i12, W2[1] = r10, W2[2] = a2, W2[3] = n12, eA2.clearBufferuiv(eA2.COLOR, s3, W2)) : (X2[0] = i12, X2[1] = r10, X2[2] = a2, X2[3] = n12, eA2.clearBufferiv(eA2.COLOR, s3, X2));
          } else
            i11 |= eA2.COLOR_BUFFER_BIT;
        }
        t11 && (i11 |= eA2.DEPTH_BUFFER_BIT), n11 && (i11 |= eA2.STENCIL_BUFFER_BIT), eA2.clear(i11);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        P2.removeEventListener("webglcontextlost", eL2, false), P2.removeEventListener("webglcontextrestored", eP2, false), P2.removeEventListener("webglcontextcreationerror", eU2, false), x2.dispose(), y2.dispose(), l2.dispose(), u2.dispose(), c2.dispose(), f2.dispose(), C2.dispose(), L2.dispose(), g2.dispose(), eC2.dispose(), eC2.removeEventListener("sessionstart", eI2), eC2.removeEventListener("sessionend", eO2), ey2 && (ey2.dispose(), ey2 = null), eF2.stop();
      }, this.renderBufferDirect = function(e11, t11, n11, r10, o3, f3) {
        let m2;
        null === t11 && (t11 = eT2);
        let g3 = o3.isMesh && 0 > o3.matrixWorld.determinant(), v2 = function(e12, t12, n12, r11, o4) {
          var d3;
          true !== t12.isScene && (t12 = eT2), h2.resetTextureUnits();
          let p3 = t12.fog, f4 = r11.isMeshStandardMaterial ? t12.environment : null, m3 = null === ee2 ? Z2.outputColorSpace : true === ee2.isXRRenderTarget ? ee2.texture.colorSpace : a, g4 = (r11.isMeshStandardMaterial ? c2 : u2).get(r11.envMap || f4), v3 = true === r11.vertexColors && !!n12.attributes.color && 4 === n12.attributes.color.itemSize, x4 = !!n12.attributes.tangent && (!!r11.normalMap || r11.anisotropy > 0), y4 = !!n12.morphAttributes.position, S3 = !!n12.morphAttributes.normal, E4 = !!n12.morphAttributes.color, T4 = r11.toneMapped ? Z2.toneMapping : 0, A3 = n12.morphAttributes.position || n12.morphAttributes.normal || n12.morphAttributes.color, w3 = void 0 !== A3 ? A3.length : 0, R4 = l2.get(r11), C3 = q2.state.lights;
          if (true === e_2 && (true === ex2 || e12 !== en2)) {
            let t13 = e12 === en2 && r11.id === et2;
            M2.setState(r11, e12, t13);
          }
          let P4 = false;
          r11.version === R4.__version ? R4.needsLights && R4.lightsStateVersion !== C3.state.version ? P4 = true : R4.outputColorSpace !== m3 ? P4 = true : o4.isInstancedMesh && false === R4.instancing ? P4 = true : o4.isInstancedMesh || true !== R4.instancing ? o4.isSkinnedMesh && false === R4.skinning ? P4 = true : o4.isSkinnedMesh || true !== R4.skinning ? R4.envMap !== g4 ? P4 = true : true === r11.fog && R4.fog !== p3 ? P4 = true : void 0 !== R4.numClippingPlanes && (R4.numClippingPlanes !== M2.numPlanes || R4.numIntersection !== M2.numIntersection) ? P4 = true : R4.vertexAlphas !== v3 ? P4 = true : R4.vertexTangents !== x4 ? P4 = true : R4.morphTargets !== y4 ? P4 = true : R4.morphNormals !== S3 ? P4 = true : R4.morphColors !== E4 ? P4 = true : R4.toneMapping !== T4 ? P4 = true : true === i10.isWebGL2 && R4.morphTargetsCount !== w3 && (P4 = true) : P4 = true : P4 = true : (P4 = true, R4.__version = r11.version);
          let U4 = R4.currentProgram;
          true === P4 && (U4 = eG2(r11, t12, o4));
          let N3 = false, D3 = false, I3 = false, O3 = U4.getUniforms(), F3 = R4.uniforms;
          if (s2.useProgram(U4.program) && (N3 = true, D3 = true, I3 = true), r11.id !== et2 && (et2 = r11.id, D3 = true), N3 || en2 !== e12) {
            if (O3.setValue(eA2, "projectionMatrix", e12.projectionMatrix), i10.logarithmicDepthBuffer && O3.setValue(eA2, "logDepthBufFC", 2 / (Math.log(e12.far + 1) / Math.LN2)), en2 !== e12 && (en2 = e12, D3 = true, I3 = true), r11.isShaderMaterial || r11.isMeshPhongMaterial || r11.isMeshToonMaterial || r11.isMeshStandardMaterial || r11.envMap) {
              let t13 = O3.map.cameraPosition;
              void 0 !== t13 && t13.setValue(eA2, eE2.setFromMatrixPosition(e12.matrixWorld));
            }
            (r11.isMeshPhongMaterial || r11.isMeshToonMaterial || r11.isMeshLambertMaterial || r11.isMeshBasicMaterial || r11.isMeshStandardMaterial || r11.isShaderMaterial) && O3.setValue(eA2, "isOrthographic", true === e12.isOrthographicCamera), (r11.isMeshPhongMaterial || r11.isMeshToonMaterial || r11.isMeshLambertMaterial || r11.isMeshBasicMaterial || r11.isMeshStandardMaterial || r11.isShaderMaterial || r11.isShadowMaterial || o4.isSkinnedMesh) && O3.setValue(eA2, "viewMatrix", e12.matrixWorldInverse);
          }
          if (o4.isSkinnedMesh) {
            O3.setOptional(eA2, o4, "bindMatrix"), O3.setOptional(eA2, o4, "bindMatrixInverse");
            let e13 = o4.skeleton;
            e13 && (i10.floatVertexTextures ? (null === e13.boneTexture && e13.computeBoneTexture(), O3.setValue(eA2, "boneTexture", e13.boneTexture, h2), O3.setValue(eA2, "boneTextureSize", e13.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
          }
          let z2 = n12.morphAttributes;
          if ((void 0 !== z2.position || void 0 !== z2.normal || void 0 !== z2.color && true === i10.isWebGL2) && b2.update(o4, n12, U4), (D3 || R4.receiveShadow !== o4.receiveShadow) && (R4.receiveShadow = o4.receiveShadow, O3.setValue(eA2, "receiveShadow", o4.receiveShadow)), r11.isMeshGouraudMaterial && null !== r11.envMap && (F3.envMap.value = g4, F3.flipEnvMap.value = g4.isCubeTexture && false === g4.isRenderTargetTexture ? -1 : 1), D3 && (O3.setValue(eA2, "toneMappingExposure", Z2.toneMappingExposure), R4.needsLights && (d3 = I3, F3.ambientLightColor.needsUpdate = d3, F3.lightProbe.needsUpdate = d3, F3.directionalLights.needsUpdate = d3, F3.directionalLightShadows.needsUpdate = d3, F3.pointLights.needsUpdate = d3, F3.pointLightShadows.needsUpdate = d3, F3.spotLights.needsUpdate = d3, F3.spotLightShadows.needsUpdate = d3, F3.rectAreaLights.needsUpdate = d3, F3.hemisphereLights.needsUpdate = d3), p3 && true === r11.fog && _2.refreshFogUniforms(F3, p3), _2.refreshMaterialUniforms(F3, r11, eu2, eh2, ey2), i_.upload(eA2, R4.uniformsList, F3, h2)), r11.isShaderMaterial && true === r11.uniformsNeedUpdate && (i_.upload(eA2, R4.uniformsList, F3, h2), r11.uniformsNeedUpdate = false), r11.isSpriteMaterial && O3.setValue(eA2, "center", o4.center), O3.setValue(eA2, "modelViewMatrix", o4.modelViewMatrix), O3.setValue(eA2, "normalMatrix", o4.normalMatrix), O3.setValue(eA2, "modelMatrix", o4.matrixWorld), r11.isShaderMaterial || r11.isRawShaderMaterial) {
            let e13 = r11.uniformsGroups;
            for (let t13 = 0, n13 = e13.length; t13 < n13; t13++)
              if (i10.isWebGL2) {
                let n14 = e13[t13];
                L2.update(n14, U4), L2.bind(n14, U4);
              } else
                console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
          }
          return U4;
        }(e11, t11, n11, r10, o3);
        s2.setMaterial(r10, g3);
        let x3 = n11.index, y3 = 1;
        true === r10.wireframe && (x3 = p2.getWireframeAttribute(n11), y3 = 2);
        let S2 = n11.drawRange, E3 = n11.attributes.position, T3 = S2.start * y3, R3 = (S2.start + S2.count) * y3;
        null !== f3 && (T3 = Math.max(T3, f3.start * y3), R3 = Math.min(R3, (f3.start + f3.count) * y3)), null !== x3 ? (T3 = Math.max(T3, 0), R3 = Math.min(R3, x3.count)) : null != E3 && (T3 = Math.max(T3, 0), R3 = Math.min(R3, E3.count));
        let P3 = R3 - T3;
        if (P3 < 0 || P3 === 1 / 0)
          return;
        C2.setup(o3, r10, v2, n11, x3);
        let U3 = A2;
        if (null !== x3 && (m2 = d2.get(x3), (U3 = w2).setIndex(m2)), o3.isMesh)
          true === r10.wireframe ? (s2.setLineWidth(r10.wireframeLinewidth * eb2()), U3.setMode(eA2.LINES)) : U3.setMode(eA2.TRIANGLES);
        else if (o3.isLine) {
          let e12 = r10.linewidth;
          void 0 === e12 && (e12 = 1), s2.setLineWidth(e12 * eb2()), o3.isLineSegments ? U3.setMode(eA2.LINES) : o3.isLineLoop ? U3.setMode(eA2.LINE_LOOP) : U3.setMode(eA2.LINE_STRIP);
        } else
          o3.isPoints ? U3.setMode(eA2.POINTS) : o3.isSprite && U3.setMode(eA2.TRIANGLES);
        if (o3.isInstancedMesh)
          U3.renderInstances(T3, P3, o3.count);
        else if (n11.isInstancedBufferGeometry) {
          let e12 = void 0 !== n11._maxInstanceCount ? n11._maxInstanceCount : 1 / 0, t12 = Math.min(n11.instanceCount, e12);
          U3.renderInstances(T3, P3, t12);
        } else
          U3.render(T3, P3);
      }, this.compile = function(e11, t11) {
        function n11(e12, t12, n12) {
          true === e12.transparent && 2 === e12.side && false === e12.forceSinglePass ? (e12.side = 1, e12.needsUpdate = true, eG2(e12, t12, n12), e12.side = 0, e12.needsUpdate = true, eG2(e12, t12, n12), e12.side = 2) : eG2(e12, t12, n12);
        }
        (q2 = y2.get(e11)).init(), J2.push(q2), e11.traverseVisible(function(e12) {
          e12.isLight && e12.layers.test(t11.layers) && (q2.pushLight(e12), e12.castShadow && q2.pushShadow(e12));
        }), q2.setupLights(Z2.useLegacyLights), e11.traverse(function(t12) {
          let i11 = t12.material;
          if (i11) {
            if (Array.isArray(i11))
              for (let r10 = 0; r10 < i11.length; r10++) {
                let a2 = i11[r10];
                n11(a2, e11, t12);
              }
            else
              n11(i11, e11, t12);
          }
        }), J2.pop(), q2 = null;
      };
      let eD2 = null;
      function eI2() {
        eF2.stop();
      }
      function eO2() {
        eF2.start();
      }
      let eF2 = new tQ();
      function ez2(e11, t11, r10, a2) {
        let o3 = e11.opaque, l3 = e11.transmissive, u3 = e11.transparent;
        q2.setupLightsView(r10), true === e_2 && M2.setGlobalState(Z2.clippingPlanes, r10), l3.length > 0 && function(e12, t12, r11, a3) {
          let s3 = i10.isWebGL2;
          null === ey2 && (ey2 = new B(1, 1, { generateMipmaps: true, type: n10.has("EXT_color_buffer_half_float") ? 1016 : 1009, minFilter: 1008, samples: s3 && true === O2 ? 4 : 0 })), Z2.getDrawingBufferSize(eS2), s3 ? ey2.setSize(eS2.x, eS2.y) : ey2.setSize(m(eS2.x), m(eS2.y));
          let o4 = Z2.getRenderTarget();
          Z2.setRenderTarget(ey2), Z2.getClearColor(es2), (eo2 = Z2.getClearAlpha()) < 1 && Z2.setClearColor(16777215, 0.5), Z2.clear();
          let l4 = Z2.toneMapping;
          Z2.toneMapping = 0, eB2(e12, r11, a3), h2.updateMultisampleRenderTarget(ey2), h2.updateRenderTargetMipmap(ey2);
          let u4 = false;
          for (let e13 = 0, n11 = t12.length; e13 < n11; e13++) {
            let n12 = t12[e13], i11 = n12.object, s4 = n12.geometry, o5 = n12.material, l5 = n12.group;
            if (2 === o5.side && i11.layers.test(a3.layers)) {
              let e14 = o5.side;
              o5.side = 1, o5.needsUpdate = true, eV2(i11, r11, a3, s4, o5, l5), o5.side = e14, o5.needsUpdate = true, u4 = true;
            }
          }
          true === u4 && (h2.updateMultisampleRenderTarget(ey2), h2.updateRenderTargetMipmap(ey2)), Z2.setRenderTarget(o4), Z2.setClearColor(es2, eo2), Z2.toneMapping = l4;
        }(o3, l3, t11, r10), a2 && s2.viewport(ei2.copy(a2)), o3.length > 0 && eB2(o3, t11, r10), l3.length > 0 && eB2(l3, t11, r10), u3.length > 0 && eB2(u3, t11, r10), s2.buffers.depth.setTest(true), s2.buffers.depth.setMask(true), s2.buffers.color.setMask(true), s2.setPolygonOffset(false);
      }
      function eB2(e11, t11, n11) {
        let i11 = true === t11.isScene ? t11.overrideMaterial : null;
        for (let r10 = 0, a2 = e11.length; r10 < a2; r10++) {
          let a3 = e11[r10], s3 = a3.object, o3 = a3.geometry, l3 = null === i11 ? a3.material : i11, h3 = a3.group;
          s3.layers.test(n11.layers) && eV2(s3, t11, n11, o3, l3, h3);
        }
      }
      function eV2(e11, t11, n11, i11, r10, a2) {
        e11.onBeforeRender(Z2, t11, n11, i11, r10, a2), e11.modelViewMatrix.multiplyMatrices(n11.matrixWorldInverse, e11.matrixWorld), e11.normalMatrix.getNormalMatrix(e11.modelViewMatrix), r10.onBeforeRender(Z2, t11, n11, i11, e11, a2), true === r10.transparent && 2 === r10.side && false === r10.forceSinglePass ? (r10.side = 1, r10.needsUpdate = true, Z2.renderBufferDirect(n11, t11, i11, r10, e11, a2), r10.side = 0, r10.needsUpdate = true, Z2.renderBufferDirect(n11, t11, i11, r10, e11, a2), r10.side = 2) : Z2.renderBufferDirect(n11, t11, i11, r10, e11, a2), e11.onAfterRender(Z2, t11, n11, i11, r10, a2);
      }
      function eG2(e11, t11, n11) {
        true !== t11.isScene && (t11 = eT2);
        let i11 = l2.get(e11), r10 = q2.state.lights, a2 = q2.state.shadowsArray, s3 = r10.state.version, o3 = g2.getParameters(e11, r10.state, a2, t11, n11), h3 = g2.getProgramCacheKey(o3), d3 = i11.programs;
        i11.environment = e11.isMeshStandardMaterial ? t11.environment : null, i11.fog = t11.fog, i11.envMap = (e11.isMeshStandardMaterial ? c2 : u2).get(e11.envMap || i11.environment), void 0 === d3 && (e11.addEventListener("dispose", eN2), d3 = /* @__PURE__ */ new Map(), i11.programs = d3);
        let p3 = d3.get(h3);
        if (void 0 !== p3) {
          if (i11.currentProgram === p3 && i11.lightsStateVersion === s3)
            return eH2(e11, o3), p3;
        } else
          o3.uniforms = g2.getUniforms(e11), e11.onBuild(n11, o3, Z2), e11.onBeforeCompile(o3, Z2), p3 = g2.acquireProgram(o3, h3), d3.set(h3, p3), i11.uniforms = o3.uniforms;
        let f3 = i11.uniforms;
        (e11.isShaderMaterial || e11.isRawShaderMaterial) && true !== e11.clipping || (f3.clippingPlanes = M2.uniform), eH2(e11, o3), i11.needsLights = e11.isMeshLambertMaterial || e11.isMeshToonMaterial || e11.isMeshPhongMaterial || e11.isMeshStandardMaterial || e11.isShadowMaterial || e11.isShaderMaterial && true === e11.lights, i11.lightsStateVersion = s3, i11.needsLights && (f3.ambientLightColor.value = r10.state.ambient, f3.lightProbe.value = r10.state.probe, f3.directionalLights.value = r10.state.directional, f3.directionalLightShadows.value = r10.state.directionalShadow, f3.spotLights.value = r10.state.spot, f3.spotLightShadows.value = r10.state.spotShadow, f3.rectAreaLights.value = r10.state.rectArea, f3.ltc_1.value = r10.state.rectAreaLTC1, f3.ltc_2.value = r10.state.rectAreaLTC2, f3.pointLights.value = r10.state.point, f3.pointLightShadows.value = r10.state.pointShadow, f3.hemisphereLights.value = r10.state.hemi, f3.directionalShadowMap.value = r10.state.directionalShadowMap, f3.directionalShadowMatrix.value = r10.state.directionalShadowMatrix, f3.spotShadowMap.value = r10.state.spotShadowMap, f3.spotLightMatrix.value = r10.state.spotLightMatrix, f3.spotLightMap.value = r10.state.spotLightMap, f3.pointShadowMap.value = r10.state.pointShadowMap, f3.pointShadowMatrix.value = r10.state.pointShadowMatrix);
        let m2 = p3.getUniforms(), _3 = i_.seqWithValue(m2.seq, f3);
        return i11.currentProgram = p3, i11.uniformsList = _3, p3;
      }
      function eH2(e11, t11) {
        let n11 = l2.get(e11);
        n11.outputColorSpace = t11.outputColorSpace, n11.instancing = t11.instancing, n11.skinning = t11.skinning, n11.morphTargets = t11.morphTargets, n11.morphNormals = t11.morphNormals, n11.morphColors = t11.morphColors, n11.morphTargetsCount = t11.morphTargetsCount, n11.numClippingPlanes = t11.numClippingPlanes, n11.numIntersection = t11.numClipIntersection, n11.vertexAlphas = t11.vertexAlphas, n11.vertexTangents = t11.vertexTangents, n11.toneMapping = t11.toneMapping;
      }
      eF2.setAnimationLoop(function(e11) {
        eD2 && eD2(e11);
      }), "undefined" != typeof self && eF2.setContext(self), this.setAnimationLoop = function(e11) {
        eD2 = e11, eC2.setAnimationLoop(e11), null === e11 ? eF2.stop() : eF2.start();
      }, eC2.addEventListener("sessionstart", eI2), eC2.addEventListener("sessionend", eO2), this.render = function(e11, t11) {
        if (void 0 !== t11 && true !== t11.isCamera) {
          console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          return;
        }
        if (true === K2)
          return;
        true === e11.matrixWorldAutoUpdate && e11.updateMatrixWorld(), null === t11.parent && true === t11.matrixWorldAutoUpdate && t11.updateMatrixWorld(), true === eC2.enabled && true === eC2.isPresenting && (t11 = eC2.updateCameraXR(t11)), true === e11.isScene && e11.onBeforeRender(Z2, e11, t11, ee2), (q2 = y2.get(e11, J2.length)).init(), J2.push(q2), eM2.multiplyMatrices(t11.projectionMatrix, t11.matrixWorldInverse), eg2.setFromProjectionMatrix(eM2), ex2 = this.localClippingEnabled, e_2 = M2.init(this.clippingPlanes, ex2), (j2 = x2.get(e11, Y2.length)).init(), Y2.push(j2), function e12(t12, n12, i11, r10) {
          if (false === t12.visible)
            return;
          let a2 = t12.layers.test(n12.layers);
          if (a2) {
            if (t12.isGroup)
              i11 = t12.renderOrder;
            else if (t12.isLOD)
              true === t12.autoUpdate && t12.update(n12);
            else if (t12.isLight)
              q2.pushLight(t12), t12.castShadow && q2.pushShadow(t12);
            else if (t12.isSprite) {
              if (!t12.frustumCulled || eg2.intersectsSprite(t12)) {
                r10 && eE2.setFromMatrixPosition(t12.matrixWorld).applyMatrix4(eM2);
                let e13 = f2.update(t12), n13 = t12.material;
                n13.visible && j2.push(t12, e13, n13, i11, eE2.z, null);
              }
            } else if ((t12.isMesh || t12.isLine || t12.isPoints) && (!t12.frustumCulled || eg2.intersectsObject(t12))) {
              t12.isSkinnedMesh && t12.skeleton.frame !== o2.render.frame && (t12.skeleton.update(), t12.skeleton.frame = o2.render.frame);
              let e13 = f2.update(t12), n13 = t12.material;
              if (r10 && (void 0 !== t12.boundingSphere ? (null === t12.boundingSphere && t12.computeBoundingSphere(), eE2.copy(t12.boundingSphere.center)) : (null === e13.boundingSphere && e13.computeBoundingSphere(), eE2.copy(e13.boundingSphere.center)), eE2.applyMatrix4(t12.matrixWorld).applyMatrix4(eM2)), Array.isArray(n13)) {
                let r11 = e13.groups;
                for (let a3 = 0, s4 = r11.length; a3 < s4; a3++) {
                  let s5 = r11[a3], o3 = n13[s5.materialIndex];
                  o3 && o3.visible && j2.push(t12, e13, o3, i11, eE2.z, s5);
                }
              } else
                n13.visible && j2.push(t12, e13, n13, i11, eE2.z, null);
            }
          }
          let s3 = t12.children;
          for (let t13 = 0, a3 = s3.length; t13 < a3; t13++)
            e12(s3[t13], n12, i11, r10);
        }(e11, t11, 0, Z2.sortObjects), j2.finish(), true === Z2.sortObjects && j2.sort(ec2, ed2), true === e_2 && M2.beginShadows();
        let n11 = q2.state.shadowsArray;
        if (E2.render(n11, e11, t11), true === e_2 && M2.endShadows(), true === this.info.autoReset && this.info.reset(), this.info.render.frame++, T2.render(j2, e11), q2.setupLights(Z2.useLegacyLights), t11.isArrayCamera) {
          let n12 = t11.cameras;
          for (let t12 = 0, i11 = n12.length; t12 < i11; t12++) {
            let i12 = n12[t12];
            ez2(j2, e11, i12, i12.viewport);
          }
        } else
          ez2(j2, e11, t11);
        null !== ee2 && (h2.updateMultisampleRenderTarget(ee2), h2.updateRenderTargetMipmap(ee2)), true === e11.isScene && e11.onAfterRender(Z2, e11, t11), C2.resetDefaultState(), et2 = -1, en2 = null, J2.pop(), q2 = J2.length > 0 ? J2[J2.length - 1] : null, Y2.pop(), j2 = Y2.length > 0 ? Y2[Y2.length - 1] : null;
      }, this.getActiveCubeFace = function() {
        return Q2;
      }, this.getActiveMipmapLevel = function() {
        return $2;
      }, this.getRenderTarget = function() {
        return ee2;
      }, this.setRenderTargetTextures = function(e11, t11, i11) {
        l2.get(e11.texture).__webglTexture = t11, l2.get(e11.depthTexture).__webglTexture = i11;
        let r10 = l2.get(e11);
        r10.__hasExternalTextures = true, r10.__hasExternalTextures && (r10.__autoAllocateDepthBuffer = void 0 === i11, r10.__autoAllocateDepthBuffer || true !== n10.has("WEBGL_multisampled_render_to_texture") || (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), r10.__useRenderToTexture = false));
      }, this.setRenderTargetFramebuffer = function(e11, t11) {
        let n11 = l2.get(e11);
        n11.__webglFramebuffer = t11, n11.__useDefaultFramebuffer = void 0 === t11;
      }, this.setRenderTarget = function(e11, t11 = 0, n11 = 0) {
        ee2 = e11, Q2 = t11, $2 = n11;
        let r10 = true, a2 = null, o3 = false, u3 = false;
        if (e11) {
          let n12 = l2.get(e11);
          void 0 !== n12.__useDefaultFramebuffer ? (s2.bindFramebuffer(eA2.FRAMEBUFFER, null), r10 = false) : void 0 === n12.__webglFramebuffer ? h2.setupRenderTarget(e11) : n12.__hasExternalTextures && h2.rebindTextures(e11, l2.get(e11.texture).__webglTexture, l2.get(e11.depthTexture).__webglTexture);
          let c4 = e11.texture;
          (c4.isData3DTexture || c4.isDataArrayTexture || c4.isCompressedArrayTexture) && (u3 = true);
          let d3 = l2.get(e11).__webglFramebuffer;
          e11.isWebGLCubeRenderTarget ? (a2 = d3[t11], o3 = true) : a2 = i10.isWebGL2 && e11.samples > 0 && false === h2.useMultisampledRTT(e11) ? l2.get(e11).__webglMultisampledFramebuffer : d3, ei2.copy(e11.viewport), er2.copy(e11.scissor), ea2 = e11.scissorTest;
        } else
          ei2.copy(ep2).multiplyScalar(eu2).floor(), er2.copy(ef2).multiplyScalar(eu2).floor(), ea2 = em2;
        let c3 = s2.bindFramebuffer(eA2.FRAMEBUFFER, a2);
        if (c3 && i10.drawBuffers && r10 && s2.drawBuffers(e11, a2), s2.viewport(ei2), s2.scissor(er2), s2.setScissorTest(ea2), o3) {
          let i11 = l2.get(e11.texture);
          eA2.framebufferTexture2D(eA2.FRAMEBUFFER, eA2.COLOR_ATTACHMENT0, eA2.TEXTURE_CUBE_MAP_POSITIVE_X + t11, i11.__webglTexture, n11);
        } else if (u3) {
          let i11 = l2.get(e11.texture), r11 = t11 || 0;
          eA2.framebufferTextureLayer(eA2.FRAMEBUFFER, eA2.COLOR_ATTACHMENT0, i11.__webglTexture, n11 || 0, r11);
        }
        et2 = -1;
      }, this.readRenderTargetPixels = function(e11, t11, r10, a2, o3, h3, u3) {
        if (!(e11 && e11.isWebGLRenderTarget)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          return;
        }
        let c3 = l2.get(e11).__webglFramebuffer;
        if (e11.isWebGLCubeRenderTarget && void 0 !== u3 && (c3 = c3[u3]), c3) {
          s2.bindFramebuffer(eA2.FRAMEBUFFER, c3);
          try {
            let s3 = e11.texture, l3 = s3.format, u4 = s3.type;
            if (1023 !== l3 && R2.convert(l3) !== eA2.getParameter(eA2.IMPLEMENTATION_COLOR_READ_FORMAT)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              return;
            }
            let c4 = 1016 === u4 && (n10.has("EXT_color_buffer_half_float") || i10.isWebGL2 && n10.has("EXT_color_buffer_float"));
            if (1009 !== u4 && R2.convert(u4) !== eA2.getParameter(eA2.IMPLEMENTATION_COLOR_READ_TYPE) && !(1015 === u4 && (i10.isWebGL2 || n10.has("OES_texture_float") || n10.has("WEBGL_color_buffer_float"))) && !c4) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
              return;
            }
            t11 >= 0 && t11 <= e11.width - a2 && r10 >= 0 && r10 <= e11.height - o3 && eA2.readPixels(t11, r10, a2, o3, R2.convert(l3), R2.convert(u4), h3);
          } finally {
            let e12 = null !== ee2 ? l2.get(ee2).__webglFramebuffer : null;
            s2.bindFramebuffer(eA2.FRAMEBUFFER, e12);
          }
        }
      }, this.copyFramebufferToTexture = function(e11, t11, n11 = 0) {
        let i11 = Math.pow(2, -n11), r10 = Math.floor(t11.image.width * i11), a2 = Math.floor(t11.image.height * i11);
        h2.setTexture2D(t11, 0), eA2.copyTexSubImage2D(eA2.TEXTURE_2D, n11, 0, 0, e11.x, e11.y, r10, a2), s2.unbindTexture();
      }, this.copyTextureToTexture = function(e11, t11, n11, i11 = 0) {
        let r10 = t11.image.width, a2 = t11.image.height, o3 = R2.convert(n11.format), l3 = R2.convert(n11.type);
        h2.setTexture2D(n11, 0), eA2.pixelStorei(eA2.UNPACK_FLIP_Y_WEBGL, n11.flipY), eA2.pixelStorei(eA2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n11.premultiplyAlpha), eA2.pixelStorei(eA2.UNPACK_ALIGNMENT, n11.unpackAlignment), t11.isDataTexture ? eA2.texSubImage2D(eA2.TEXTURE_2D, i11, e11.x, e11.y, r10, a2, o3, l3, t11.image.data) : t11.isCompressedTexture ? eA2.compressedTexSubImage2D(eA2.TEXTURE_2D, i11, e11.x, e11.y, t11.mipmaps[0].width, t11.mipmaps[0].height, o3, t11.mipmaps[0].data) : eA2.texSubImage2D(eA2.TEXTURE_2D, i11, e11.x, e11.y, o3, l3, t11.image), 0 === i11 && n11.generateMipmaps && eA2.generateMipmap(eA2.TEXTURE_2D), s2.unbindTexture();
      }, this.copyTextureToTexture3D = function(e11, t11, n11, i11, r10 = 0) {
        let a2;
        if (Z2.isWebGL1Renderer) {
          console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
          return;
        }
        let o3 = e11.max.x - e11.min.x + 1, l3 = e11.max.y - e11.min.y + 1, u3 = e11.max.z - e11.min.z + 1, c3 = R2.convert(i11.format), d3 = R2.convert(i11.type);
        if (i11.isData3DTexture)
          h2.setTexture3D(i11, 0), a2 = eA2.TEXTURE_3D;
        else if (i11.isDataArrayTexture)
          h2.setTexture2DArray(i11, 0), a2 = eA2.TEXTURE_2D_ARRAY;
        else {
          console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
          return;
        }
        eA2.pixelStorei(eA2.UNPACK_FLIP_Y_WEBGL, i11.flipY), eA2.pixelStorei(eA2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i11.premultiplyAlpha), eA2.pixelStorei(eA2.UNPACK_ALIGNMENT, i11.unpackAlignment);
        let p3 = eA2.getParameter(eA2.UNPACK_ROW_LENGTH), f3 = eA2.getParameter(eA2.UNPACK_IMAGE_HEIGHT), m2 = eA2.getParameter(eA2.UNPACK_SKIP_PIXELS), g3 = eA2.getParameter(eA2.UNPACK_SKIP_ROWS), _3 = eA2.getParameter(eA2.UNPACK_SKIP_IMAGES), v2 = n11.isCompressedTexture ? n11.mipmaps[0] : n11.image;
        eA2.pixelStorei(eA2.UNPACK_ROW_LENGTH, v2.width), eA2.pixelStorei(eA2.UNPACK_IMAGE_HEIGHT, v2.height), eA2.pixelStorei(eA2.UNPACK_SKIP_PIXELS, e11.min.x), eA2.pixelStorei(eA2.UNPACK_SKIP_ROWS, e11.min.y), eA2.pixelStorei(eA2.UNPACK_SKIP_IMAGES, e11.min.z), n11.isDataTexture || n11.isData3DTexture ? eA2.texSubImage3D(a2, r10, t11.x, t11.y, t11.z, o3, l3, u3, c3, d3, v2.data) : n11.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), eA2.compressedTexSubImage3D(a2, r10, t11.x, t11.y, t11.z, o3, l3, u3, c3, v2.data)) : eA2.texSubImage3D(a2, r10, t11.x, t11.y, t11.z, o3, l3, u3, c3, d3, v2), eA2.pixelStorei(eA2.UNPACK_ROW_LENGTH, p3), eA2.pixelStorei(eA2.UNPACK_IMAGE_HEIGHT, f3), eA2.pixelStorei(eA2.UNPACK_SKIP_PIXELS, m2), eA2.pixelStorei(eA2.UNPACK_SKIP_ROWS, g3), eA2.pixelStorei(eA2.UNPACK_SKIP_IMAGES, _3), 0 === r10 && i11.generateMipmaps && eA2.generateMipmap(a2), s2.unbindTexture();
      }, this.initTexture = function(e11) {
        e11.isCubeTexture ? h2.setTextureCube(e11, 0) : e11.isData3DTexture ? h2.setTexture3D(e11, 0) : e11.isDataArrayTexture || e11.isCompressedArrayTexture ? h2.setTexture2DArray(e11, 0) : h2.setTexture2D(e11, 0), s2.unbindTexture();
      }, this.resetState = function() {
        Q2 = 0, $2 = 0, ee2 = null, s2.reset(), C2.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return 2e3;
    }
    get physicallyCorrectLights() {
      return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
    }
    set physicallyCorrectLights(e10) {
      console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e10;
    }
    get outputEncoding() {
      return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === r ? 3001 : 3e3;
    }
    set outputEncoding(e10) {
      console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = 3001 === e10 ? r : a;
    }
  }
  (class extends i7 {
  }).prototype.isWebGL1Renderer = true;
  class i8 extends ek {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(e10, t10) {
      return super.copy(e10, t10), null !== e10.background && (this.background = e10.background.clone()), null !== e10.environment && (this.environment = e10.environment.clone()), null !== e10.fog && (this.fog = e10.fog.clone()), this.backgroundBlurriness = e10.backgroundBlurriness, this.backgroundIntensity = e10.backgroundIntensity, null !== e10.overrideMaterial && (this.overrideMaterial = e10.overrideMaterial.clone()), this.matrixAutoUpdate = e10.matrixAutoUpdate, this;
    }
    toJSON(e10) {
      let t10 = super.toJSON(e10);
      return null !== this.fog && (t10.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t10.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (t10.object.backgroundIntensity = this.backgroundIntensity), t10;
    }
    get autoUpdate() {
      return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
    }
    set autoUpdate(e10) {
      console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e10;
    }
  }
  class i9 extends e3 {
    constructor(e10) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new e8(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e10);
    }
    copy(e10) {
      return super.copy(e10), this.color.copy(e10.color), this.map = e10.map, this.linewidth = e10.linewidth, this.linecap = e10.linecap, this.linejoin = e10.linejoin, this.fog = e10.fog, this;
    }
  }
  let re = new H(), rt = new H(), rn = new ev(), ri = new e_(), rr = new eh();
  class ra extends ek {
    constructor(e10 = new tf(), t10 = new i9()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = e10, this.material = t10, this.updateMorphTargets();
    }
    copy(e10, t10) {
      return super.copy(e10, t10), this.material = e10.material, this.geometry = e10.geometry, this;
    }
    computeLineDistances() {
      let e10 = this.geometry;
      if (null === e10.index) {
        let t10 = e10.attributes.position, n10 = [0];
        for (let e11 = 1, i10 = t10.count; e11 < i10; e11++)
          re.fromBufferAttribute(t10, e11 - 1), rt.fromBufferAttribute(t10, e11), n10[e11] = n10[e11 - 1], n10[e11] += re.distanceTo(rt);
        e10.setAttribute("lineDistance", new ts(n10, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(e10, t10) {
      let n10 = this.geometry, i10 = this.matrixWorld, r10 = e10.params.Line.threshold, a2 = n10.drawRange;
      if (null === n10.boundingSphere && n10.computeBoundingSphere(), rr.copy(n10.boundingSphere), rr.applyMatrix4(i10), rr.radius += r10, false === e10.ray.intersectsSphere(rr))
        return;
      rn.copy(i10).invert(), ri.copy(e10.ray).applyMatrix4(rn);
      let s2 = r10 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = s2 * s2, l2 = new H(), h2 = new H(), u2 = new H(), c2 = new H(), d2 = this.isLineSegments ? 2 : 1, p2 = n10.index, f2 = n10.attributes, m2 = f2.position;
      if (null !== p2) {
        let n11 = Math.max(0, a2.start), i11 = Math.min(p2.count, a2.start + a2.count);
        for (let r11 = n11, a3 = i11 - 1; r11 < a3; r11 += d2) {
          let n12 = p2.getX(r11), i12 = p2.getX(r11 + 1);
          l2.fromBufferAttribute(m2, n12), h2.fromBufferAttribute(m2, i12);
          let a4 = ri.distanceSqToSegment(l2, h2, c2, u2);
          if (a4 > o2)
            continue;
          c2.applyMatrix4(this.matrixWorld);
          let s3 = e10.ray.origin.distanceTo(c2);
          s3 < e10.near || s3 > e10.far || t10.push({ distance: s3, point: u2.clone().applyMatrix4(this.matrixWorld), index: r11, face: null, faceIndex: null, object: this });
        }
      } else {
        let n11 = Math.max(0, a2.start), i11 = Math.min(m2.count, a2.start + a2.count);
        for (let r11 = n11, a3 = i11 - 1; r11 < a3; r11 += d2) {
          l2.fromBufferAttribute(m2, r11), h2.fromBufferAttribute(m2, r11 + 1);
          let n12 = ri.distanceSqToSegment(l2, h2, c2, u2);
          if (n12 > o2)
            continue;
          c2.applyMatrix4(this.matrixWorld);
          let i12 = e10.ray.origin.distanceTo(c2);
          i12 < e10.near || i12 > e10.far || t10.push({ distance: i12, point: u2.clone().applyMatrix4(this.matrixWorld), index: r11, face: null, faceIndex: null, object: this });
        }
      }
    }
    updateMorphTargets() {
      let e10 = this.geometry, t10 = e10.morphAttributes, n10 = Object.keys(t10);
      if (n10.length > 0) {
        let e11 = t10[n10[0]];
        if (void 0 !== e11) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t11 = 0, n11 = e11.length; t11 < n11; t11++) {
            let n12 = e11[t11].name || String(t11);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n12] = t11;
          }
        }
      }
    }
  }
  let rs = new H(), ro = new H();
  class rl extends ra {
    constructor(e10, t10) {
      super(e10, t10), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      let e10 = this.geometry;
      if (null === e10.index) {
        let t10 = e10.attributes.position, n10 = [];
        for (let e11 = 0, i10 = t10.count; e11 < i10; e11 += 2)
          rs.fromBufferAttribute(t10, e11), ro.fromBufferAttribute(t10, e11 + 1), n10[e11] = 0 === e11 ? 0 : n10[e11 - 1], n10[e11 + 1] = n10[e11] + rs.distanceTo(ro);
        e10.setAttribute("lineDistance", new ts(n10, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  }
  class rh {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(e10, t10) {
      let n10 = this.getUtoTmapping(e10);
      return this.getPoint(n10, t10);
    }
    getPoints(e10 = 5) {
      let t10 = [];
      for (let n10 = 0; n10 <= e10; n10++)
        t10.push(this.getPoint(n10 / e10));
      return t10;
    }
    getSpacedPoints(e10 = 5) {
      let t10 = [];
      for (let n10 = 0; n10 <= e10; n10++)
        t10.push(this.getPointAt(n10 / e10));
      return t10;
    }
    getLength() {
      let e10 = this.getLengths();
      return e10[e10.length - 1];
    }
    getLengths(e10 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === e10 + 1 && !this.needsUpdate)
        return this.cacheArcLengths;
      this.needsUpdate = false;
      let t10 = [], n10, i10 = this.getPoint(0), r10 = 0;
      t10.push(0);
      for (let a2 = 1; a2 <= e10; a2++)
        t10.push(r10 += (n10 = this.getPoint(a2 / e10)).distanceTo(i10)), i10 = n10;
      return this.cacheArcLengths = t10, t10;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(e10, t10) {
      let n10;
      let i10 = this.getLengths(), r10 = 0, a2 = i10.length;
      n10 = t10 || e10 * i10[a2 - 1];
      let s2 = 0, o2 = a2 - 1, l2;
      for (; s2 <= o2; )
        if ((l2 = i10[r10 = Math.floor(s2 + (o2 - s2) / 2)] - n10) < 0)
          s2 = r10 + 1;
        else if (l2 > 0)
          o2 = r10 - 1;
        else {
          o2 = r10;
          break;
        }
      if (i10[r10 = o2] === n10)
        return r10 / (a2 - 1);
      let h2 = i10[r10], u2 = i10[r10 + 1], c2 = (r10 + (n10 - h2) / (u2 - h2)) / (a2 - 1);
      return c2;
    }
    getTangent(e10, t10) {
      let n10 = e10 - 1e-4, i10 = e10 + 1e-4;
      n10 < 0 && (n10 = 0), i10 > 1 && (i10 = 1);
      let r10 = this.getPoint(n10), a2 = this.getPoint(i10), s2 = t10 || (r10.isVector2 ? new v() : new H());
      return s2.copy(a2).sub(r10).normalize(), s2;
    }
    getTangentAt(e10, t10) {
      let n10 = this.getUtoTmapping(e10);
      return this.getTangent(n10, t10);
    }
    computeFrenetFrames(e10, t10) {
      let n10 = new H(), i10 = [], r10 = [], a2 = [], s2 = new H(), o2 = new ev();
      for (let t11 = 0; t11 <= e10; t11++) {
        let n11 = t11 / e10;
        i10[t11] = this.getTangentAt(n11, new H());
      }
      r10[0] = new H(), a2[0] = new H();
      let l2 = Number.MAX_VALUE, h2 = Math.abs(i10[0].x), u2 = Math.abs(i10[0].y), c2 = Math.abs(i10[0].z);
      h2 <= l2 && (l2 = h2, n10.set(1, 0, 0)), u2 <= l2 && (l2 = u2, n10.set(0, 1, 0)), c2 <= l2 && n10.set(0, 0, 1), s2.crossVectors(i10[0], n10).normalize(), r10[0].crossVectors(i10[0], s2), a2[0].crossVectors(i10[0], r10[0]);
      for (let t11 = 1; t11 <= e10; t11++) {
        if (r10[t11] = r10[t11 - 1].clone(), a2[t11] = a2[t11 - 1].clone(), s2.crossVectors(i10[t11 - 1], i10[t11]), s2.length() > Number.EPSILON) {
          s2.normalize();
          let e11 = Math.acos(p(i10[t11 - 1].dot(i10[t11]), -1, 1));
          r10[t11].applyMatrix4(o2.makeRotationAxis(s2, e11));
        }
        a2[t11].crossVectors(i10[t11], r10[t11]);
      }
      if (true === t10) {
        let t11 = Math.acos(p(r10[0].dot(r10[e10]), -1, 1));
        t11 /= e10, i10[0].dot(s2.crossVectors(r10[0], r10[e10])) > 0 && (t11 = -t11);
        for (let n11 = 1; n11 <= e10; n11++)
          r10[n11].applyMatrix4(o2.makeRotationAxis(i10[n11], t11 * n11)), a2[n11].crossVectors(i10[n11], r10[n11]);
      }
      return { tangents: i10, normals: r10, binormals: a2 };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e10) {
      return this.arcLengthDivisions = e10.arcLengthDivisions, this;
    }
    toJSON() {
      let e10 = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
      return e10.arcLengthDivisions = this.arcLengthDivisions, e10.type = this.type, e10;
    }
    fromJSON(e10) {
      return this.arcLengthDivisions = e10.arcLengthDivisions, this;
    }
  }
  class ru extends rh {
    constructor(e10 = 0, t10 = 0, n10 = 1, i10 = 1, r10 = 0, a2 = 2 * Math.PI, s2 = false, o2 = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e10, this.aY = t10, this.xRadius = n10, this.yRadius = i10, this.aStartAngle = r10, this.aEndAngle = a2, this.aClockwise = s2, this.aRotation = o2;
    }
    getPoint(e10, t10) {
      let n10 = t10 || new v(), i10 = 2 * Math.PI, r10 = this.aEndAngle - this.aStartAngle, a2 = Math.abs(r10) < Number.EPSILON;
      for (; r10 < 0; )
        r10 += i10;
      for (; r10 > i10; )
        r10 -= i10;
      r10 < Number.EPSILON && (r10 = a2 ? 0 : i10), true !== this.aClockwise || a2 || (r10 === i10 ? r10 = -i10 : r10 -= i10);
      let s2 = this.aStartAngle + e10 * r10, o2 = this.aX + this.xRadius * Math.cos(s2), l2 = this.aY + this.yRadius * Math.sin(s2);
      if (0 !== this.aRotation) {
        let e11 = Math.cos(this.aRotation), t11 = Math.sin(this.aRotation), n11 = o2 - this.aX, i11 = l2 - this.aY;
        o2 = n11 * e11 - i11 * t11 + this.aX, l2 = n11 * t11 + i11 * e11 + this.aY;
      }
      return n10.set(o2, l2);
    }
    copy(e10) {
      return super.copy(e10), this.aX = e10.aX, this.aY = e10.aY, this.xRadius = e10.xRadius, this.yRadius = e10.yRadius, this.aStartAngle = e10.aStartAngle, this.aEndAngle = e10.aEndAngle, this.aClockwise = e10.aClockwise, this.aRotation = e10.aRotation, this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.aX = this.aX, e10.aY = this.aY, e10.xRadius = this.xRadius, e10.yRadius = this.yRadius, e10.aStartAngle = this.aStartAngle, e10.aEndAngle = this.aEndAngle, e10.aClockwise = this.aClockwise, e10.aRotation = this.aRotation, e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.aX = e10.aX, this.aY = e10.aY, this.xRadius = e10.xRadius, this.yRadius = e10.yRadius, this.aStartAngle = e10.aStartAngle, this.aEndAngle = e10.aEndAngle, this.aClockwise = e10.aClockwise, this.aRotation = e10.aRotation, this;
    }
  }
  function rc() {
    let e10 = 0, t10 = 0, n10 = 0, i10 = 0;
    function r10(r11, a2, s2, o2) {
      e10 = r11, t10 = s2, n10 = -3 * r11 + 3 * a2 - 2 * s2 - o2, i10 = 2 * r11 - 2 * a2 + s2 + o2;
    }
    return { initCatmullRom: function(e11, t11, n11, i11, a2) {
      r10(t11, n11, a2 * (n11 - e11), a2 * (i11 - t11));
    }, initNonuniformCatmullRom: function(e11, t11, n11, i11, a2, s2, o2) {
      let l2 = (t11 - e11) / a2 - (n11 - e11) / (a2 + s2) + (n11 - t11) / s2, h2 = (n11 - t11) / s2 - (i11 - t11) / (s2 + o2) + (i11 - n11) / o2;
      r10(t11, n11, l2 *= s2, h2 *= s2);
    }, calc: function(r11) {
      let a2 = r11 * r11;
      return e10 + t10 * r11 + n10 * a2 + i10 * (a2 * r11);
    } };
  }
  let rd = new H(), rp = new rc(), rf = new rc(), rm = new rc();
  function rg(e10, t10, n10, i10, r10) {
    let a2 = (i10 - t10) * 0.5, s2 = (r10 - n10) * 0.5, o2 = e10 * e10;
    return (2 * n10 - 2 * i10 + a2 + s2) * (e10 * o2) + (-3 * n10 + 3 * i10 - 2 * a2 - s2) * o2 + a2 * e10 + n10;
  }
  function r_(e10, t10, n10, i10) {
    return function(e11, t11) {
      let n11 = 1 - e11;
      return n11 * n11 * t11;
    }(e10, t10) + 2 * (1 - e10) * e10 * n10 + e10 * e10 * i10;
  }
  function rv(e10, t10, n10, i10, r10) {
    return function(e11, t11) {
      let n11 = 1 - e11;
      return n11 * n11 * n11 * t11;
    }(e10, t10) + function(e11, t11) {
      let n11 = 1 - e11;
      return 3 * n11 * n11 * e11 * t11;
    }(e10, n10) + 3 * (1 - e10) * e10 * e10 * i10 + e10 * e10 * e10 * r10;
  }
  class rx extends rh {
    constructor(e10 = new v(), t10 = new v(), n10 = new v(), i10 = new v()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e10, this.v1 = t10, this.v2 = n10, this.v3 = i10;
    }
    getPoint(e10, t10 = new v()) {
      let n10 = this.v0, i10 = this.v1, r10 = this.v2, a2 = this.v3;
      return t10.set(rv(e10, n10.x, i10.x, r10.x, a2.x), rv(e10, n10.y, i10.y, r10.y, a2.y)), t10;
    }
    copy(e10) {
      return super.copy(e10), this.v0.copy(e10.v0), this.v1.copy(e10.v1), this.v2.copy(e10.v2), this.v3.copy(e10.v3), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.v0 = this.v0.toArray(), e10.v1 = this.v1.toArray(), e10.v2 = this.v2.toArray(), e10.v3 = this.v3.toArray(), e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.v0.fromArray(e10.v0), this.v1.fromArray(e10.v1), this.v2.fromArray(e10.v2), this.v3.fromArray(e10.v3), this;
    }
  }
  class ry extends rh {
    constructor(e10 = new v(), t10 = new v()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e10, this.v2 = t10;
    }
    getPoint(e10, t10 = new v()) {
      return 1 === e10 ? t10.copy(this.v2) : (t10.copy(this.v2).sub(this.v1), t10.multiplyScalar(e10).add(this.v1)), t10;
    }
    getPointAt(e10, t10) {
      return this.getPoint(e10, t10);
    }
    getTangent(e10, t10 = new v()) {
      return t10.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e10, t10) {
      return this.getTangent(e10, t10);
    }
    copy(e10) {
      return super.copy(e10), this.v1.copy(e10.v1), this.v2.copy(e10.v2), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.v1 = this.v1.toArray(), e10.v2 = this.v2.toArray(), e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.v1.fromArray(e10.v1), this.v2.fromArray(e10.v2), this;
    }
  }
  class rM extends rh {
    constructor(e10 = new v(), t10 = new v(), n10 = new v()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e10, this.v1 = t10, this.v2 = n10;
    }
    getPoint(e10, t10 = new v()) {
      let n10 = this.v0, i10 = this.v1, r10 = this.v2;
      return t10.set(r_(e10, n10.x, i10.x, r10.x), r_(e10, n10.y, i10.y, r10.y)), t10;
    }
    copy(e10) {
      return super.copy(e10), this.v0.copy(e10.v0), this.v1.copy(e10.v1), this.v2.copy(e10.v2), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.v0 = this.v0.toArray(), e10.v1 = this.v1.toArray(), e10.v2 = this.v2.toArray(), e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.v0.fromArray(e10.v0), this.v1.fromArray(e10.v1), this.v2.fromArray(e10.v2), this;
    }
  }
  class rS extends rh {
    constructor(e10 = new H(), t10 = new H(), n10 = new H()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e10, this.v1 = t10, this.v2 = n10;
    }
    getPoint(e10, t10 = new H()) {
      let n10 = this.v0, i10 = this.v1, r10 = this.v2;
      return t10.set(r_(e10, n10.x, i10.x, r10.x), r_(e10, n10.y, i10.y, r10.y), r_(e10, n10.z, i10.z, r10.z)), t10;
    }
    copy(e10) {
      return super.copy(e10), this.v0.copy(e10.v0), this.v1.copy(e10.v1), this.v2.copy(e10.v2), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.v0 = this.v0.toArray(), e10.v1 = this.v1.toArray(), e10.v2 = this.v2.toArray(), e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.v0.fromArray(e10.v0), this.v1.fromArray(e10.v1), this.v2.fromArray(e10.v2), this;
    }
  }
  class rE extends rh {
    constructor(e10 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e10;
    }
    getPoint(e10, t10 = new v()) {
      let n10 = this.points, i10 = (n10.length - 1) * e10, r10 = Math.floor(i10), a2 = i10 - r10, s2 = n10[0 === r10 ? r10 : r10 - 1], o2 = n10[r10], l2 = n10[r10 > n10.length - 2 ? n10.length - 1 : r10 + 1], h2 = n10[r10 > n10.length - 3 ? n10.length - 1 : r10 + 2];
      return t10.set(rg(a2, s2.x, o2.x, l2.x, h2.x), rg(a2, s2.y, o2.y, l2.y, h2.y)), t10;
    }
    copy(e10) {
      super.copy(e10), this.points = [];
      for (let t10 = 0, n10 = e10.points.length; t10 < n10; t10++) {
        let n11 = e10.points[t10];
        this.points.push(n11.clone());
      }
      return this;
    }
    toJSON() {
      let e10 = super.toJSON();
      e10.points = [];
      for (let t10 = 0, n10 = this.points.length; t10 < n10; t10++) {
        let n11 = this.points[t10];
        e10.points.push(n11.toArray());
      }
      return e10;
    }
    fromJSON(e10) {
      super.fromJSON(e10), this.points = [];
      for (let t10 = 0, n10 = e10.points.length; t10 < n10; t10++) {
        let n11 = e10.points[t10];
        this.points.push(new v().fromArray(n11));
      }
      return this;
    }
  }
  var rT = Object.freeze({ __proto__: null, ArcCurve: class extends ru {
    constructor(e10, t10, n10, i10, r10, a2) {
      super(e10, t10, n10, n10, i10, r10, a2), this.isArcCurve = true, this.type = "ArcCurve";
    }
  }, CatmullRomCurve3: class extends rh {
    constructor(e10 = [], t10 = false, n10 = "centripetal", i10 = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e10, this.closed = t10, this.curveType = n10, this.tension = i10;
    }
    getPoint(e10, t10 = new H()) {
      let n10, i10;
      let r10 = this.points, a2 = r10.length, s2 = (a2 - (this.closed ? 0 : 1)) * e10, o2 = Math.floor(s2), l2 = s2 - o2;
      this.closed ? o2 += o2 > 0 ? 0 : (Math.floor(Math.abs(o2) / a2) + 1) * a2 : 0 === l2 && o2 === a2 - 1 && (o2 = a2 - 2, l2 = 1), this.closed || o2 > 0 ? n10 = r10[(o2 - 1) % a2] : (rd.subVectors(r10[0], r10[1]).add(r10[0]), n10 = rd);
      let h2 = r10[o2 % a2], u2 = r10[(o2 + 1) % a2];
      if (this.closed || o2 + 2 < a2 ? i10 = r10[(o2 + 2) % a2] : (rd.subVectors(r10[a2 - 1], r10[a2 - 2]).add(r10[a2 - 1]), i10 = rd), "centripetal" === this.curveType || "chordal" === this.curveType) {
        let e11 = "chordal" === this.curveType ? 0.5 : 0.25, t11 = Math.pow(n10.distanceToSquared(h2), e11), r11 = Math.pow(h2.distanceToSquared(u2), e11), a3 = Math.pow(u2.distanceToSquared(i10), e11);
        r11 < 1e-4 && (r11 = 1), t11 < 1e-4 && (t11 = r11), a3 < 1e-4 && (a3 = r11), rp.initNonuniformCatmullRom(n10.x, h2.x, u2.x, i10.x, t11, r11, a3), rf.initNonuniformCatmullRom(n10.y, h2.y, u2.y, i10.y, t11, r11, a3), rm.initNonuniformCatmullRom(n10.z, h2.z, u2.z, i10.z, t11, r11, a3);
      } else
        "catmullrom" === this.curveType && (rp.initCatmullRom(n10.x, h2.x, u2.x, i10.x, this.tension), rf.initCatmullRom(n10.y, h2.y, u2.y, i10.y, this.tension), rm.initCatmullRom(n10.z, h2.z, u2.z, i10.z, this.tension));
      return t10.set(rp.calc(l2), rf.calc(l2), rm.calc(l2)), t10;
    }
    copy(e10) {
      super.copy(e10), this.points = [];
      for (let t10 = 0, n10 = e10.points.length; t10 < n10; t10++) {
        let n11 = e10.points[t10];
        this.points.push(n11.clone());
      }
      return this.closed = e10.closed, this.curveType = e10.curveType, this.tension = e10.tension, this;
    }
    toJSON() {
      let e10 = super.toJSON();
      e10.points = [];
      for (let t10 = 0, n10 = this.points.length; t10 < n10; t10++) {
        let n11 = this.points[t10];
        e10.points.push(n11.toArray());
      }
      return e10.closed = this.closed, e10.curveType = this.curveType, e10.tension = this.tension, e10;
    }
    fromJSON(e10) {
      super.fromJSON(e10), this.points = [];
      for (let t10 = 0, n10 = e10.points.length; t10 < n10; t10++) {
        let n11 = e10.points[t10];
        this.points.push(new H().fromArray(n11));
      }
      return this.closed = e10.closed, this.curveType = e10.curveType, this.tension = e10.tension, this;
    }
  }, CubicBezierCurve: rx, CubicBezierCurve3: class extends rh {
    constructor(e10 = new H(), t10 = new H(), n10 = new H(), i10 = new H()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e10, this.v1 = t10, this.v2 = n10, this.v3 = i10;
    }
    getPoint(e10, t10 = new H()) {
      let n10 = this.v0, i10 = this.v1, r10 = this.v2, a2 = this.v3;
      return t10.set(rv(e10, n10.x, i10.x, r10.x, a2.x), rv(e10, n10.y, i10.y, r10.y, a2.y), rv(e10, n10.z, i10.z, r10.z, a2.z)), t10;
    }
    copy(e10) {
      return super.copy(e10), this.v0.copy(e10.v0), this.v1.copy(e10.v1), this.v2.copy(e10.v2), this.v3.copy(e10.v3), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.v0 = this.v0.toArray(), e10.v1 = this.v1.toArray(), e10.v2 = this.v2.toArray(), e10.v3 = this.v3.toArray(), e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.v0.fromArray(e10.v0), this.v1.fromArray(e10.v1), this.v2.fromArray(e10.v2), this.v3.fromArray(e10.v3), this;
    }
  }, EllipseCurve: ru, LineCurve: ry, LineCurve3: class extends rh {
    constructor(e10 = new H(), t10 = new H()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e10, this.v2 = t10;
    }
    getPoint(e10, t10 = new H()) {
      return 1 === e10 ? t10.copy(this.v2) : (t10.copy(this.v2).sub(this.v1), t10.multiplyScalar(e10).add(this.v1)), t10;
    }
    getPointAt(e10, t10) {
      return this.getPoint(e10, t10);
    }
    getTangent(e10, t10 = new H()) {
      return t10.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e10, t10) {
      return this.getTangent(e10, t10);
    }
    copy(e10) {
      return super.copy(e10), this.v1.copy(e10.v1), this.v2.copy(e10.v2), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.v1 = this.v1.toArray(), e10.v2 = this.v2.toArray(), e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.v1.fromArray(e10.v1), this.v2.fromArray(e10.v2), this;
    }
  }, QuadraticBezierCurve: rM, QuadraticBezierCurve3: rS, SplineCurve: rE });
  class rb extends rh {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(e10) {
      this.curves.push(e10);
    }
    closePath() {
      let e10 = this.curves[0].getPoint(0), t10 = this.curves[this.curves.length - 1].getPoint(1);
      e10.equals(t10) || this.curves.push(new ry(t10, e10));
    }
    getPoint(e10, t10) {
      let n10 = e10 * this.getLength(), i10 = this.getCurveLengths(), r10 = 0;
      for (; r10 < i10.length; ) {
        if (i10[r10] >= n10) {
          let e11 = i10[r10] - n10, a2 = this.curves[r10], s2 = a2.getLength(), o2 = 0 === s2 ? 0 : 1 - e11 / s2;
          return a2.getPointAt(o2, t10);
        }
        r10++;
      }
      return null;
    }
    getLength() {
      let e10 = this.getCurveLengths();
      return e10[e10.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      let e10 = [], t10 = 0;
      for (let n10 = 0, i10 = this.curves.length; n10 < i10; n10++)
        e10.push(t10 += this.curves[n10].getLength());
      return this.cacheLengths = e10, e10;
    }
    getSpacedPoints(e10 = 40) {
      let t10 = [];
      for (let n10 = 0; n10 <= e10; n10++)
        t10.push(this.getPoint(n10 / e10));
      return this.autoClose && t10.push(t10[0]), t10;
    }
    getPoints(e10 = 12) {
      let t10;
      let n10 = [];
      for (let i10 = 0, r10 = this.curves; i10 < r10.length; i10++) {
        let a2 = r10[i10], s2 = a2.isEllipseCurve ? 2 * e10 : a2.isLineCurve || a2.isLineCurve3 ? 1 : a2.isSplineCurve ? e10 * a2.points.length : e10, o2 = a2.getPoints(s2);
        for (let e11 = 0; e11 < o2.length; e11++) {
          let i11 = o2[e11];
          t10 && t10.equals(i11) || (n10.push(i11), t10 = i11);
        }
      }
      return this.autoClose && n10.length > 1 && !n10[n10.length - 1].equals(n10[0]) && n10.push(n10[0]), n10;
    }
    copy(e10) {
      super.copy(e10), this.curves = [];
      for (let t10 = 0, n10 = e10.curves.length; t10 < n10; t10++) {
        let n11 = e10.curves[t10];
        this.curves.push(n11.clone());
      }
      return this.autoClose = e10.autoClose, this;
    }
    toJSON() {
      let e10 = super.toJSON();
      e10.autoClose = this.autoClose, e10.curves = [];
      for (let t10 = 0, n10 = this.curves.length; t10 < n10; t10++) {
        let n11 = this.curves[t10];
        e10.curves.push(n11.toJSON());
      }
      return e10;
    }
    fromJSON(e10) {
      super.fromJSON(e10), this.autoClose = e10.autoClose, this.curves = [];
      for (let t10 = 0, n10 = e10.curves.length; t10 < n10; t10++) {
        let n11 = e10.curves[t10];
        this.curves.push(new rT[n11.type]().fromJSON(n11));
      }
      return this;
    }
  }
  class rA extends rb {
    constructor(e10) {
      super(), this.type = "Path", this.currentPoint = new v(), e10 && this.setFromPoints(e10);
    }
    setFromPoints(e10) {
      this.moveTo(e10[0].x, e10[0].y);
      for (let t10 = 1, n10 = e10.length; t10 < n10; t10++)
        this.lineTo(e10[t10].x, e10[t10].y);
      return this;
    }
    moveTo(e10, t10) {
      return this.currentPoint.set(e10, t10), this;
    }
    lineTo(e10, t10) {
      let n10 = new ry(this.currentPoint.clone(), new v(e10, t10));
      return this.curves.push(n10), this.currentPoint.set(e10, t10), this;
    }
    quadraticCurveTo(e10, t10, n10, i10) {
      let r10 = new rM(this.currentPoint.clone(), new v(e10, t10), new v(n10, i10));
      return this.curves.push(r10), this.currentPoint.set(n10, i10), this;
    }
    bezierCurveTo(e10, t10, n10, i10, r10, a2) {
      let s2 = new rx(this.currentPoint.clone(), new v(e10, t10), new v(n10, i10), new v(r10, a2));
      return this.curves.push(s2), this.currentPoint.set(r10, a2), this;
    }
    splineThru(e10) {
      let t10 = [this.currentPoint.clone()].concat(e10), n10 = new rE(t10);
      return this.curves.push(n10), this.currentPoint.copy(e10[e10.length - 1]), this;
    }
    arc(e10, t10, n10, i10, r10, a2) {
      let s2 = this.currentPoint.x, o2 = this.currentPoint.y;
      return this.absarc(e10 + s2, t10 + o2, n10, i10, r10, a2), this;
    }
    absarc(e10, t10, n10, i10, r10, a2) {
      return this.absellipse(e10, t10, n10, n10, i10, r10, a2), this;
    }
    ellipse(e10, t10, n10, i10, r10, a2, s2, o2) {
      let l2 = this.currentPoint.x, h2 = this.currentPoint.y;
      return this.absellipse(e10 + l2, t10 + h2, n10, i10, r10, a2, s2, o2), this;
    }
    absellipse(e10, t10, n10, i10, r10, a2, s2, o2) {
      let l2 = new ru(e10, t10, n10, i10, r10, a2, s2, o2);
      if (this.curves.length > 0) {
        let e11 = l2.getPoint(0);
        e11.equals(this.currentPoint) || this.lineTo(e11.x, e11.y);
      }
      this.curves.push(l2);
      let h2 = l2.getPoint(1);
      return this.currentPoint.copy(h2), this;
    }
    copy(e10) {
      return super.copy(e10), this.currentPoint.copy(e10.currentPoint), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.currentPoint = this.currentPoint.toArray(), e10;
    }
    fromJSON(e10) {
      return super.fromJSON(e10), this.currentPoint.fromArray(e10.currentPoint), this;
    }
  }
  class rw extends tf {
    constructor(e10 = [new v(0, -0.5), new v(0.5, 0), new v(0, 0.5)], t10 = 12, n10 = 0, i10 = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: e10, segments: t10, phiStart: n10, phiLength: i10 }, t10 = Math.floor(t10), i10 = p(i10, 0, 2 * Math.PI);
      let r10 = [], a2 = [], s2 = [], o2 = [], l2 = [], h2 = 1 / t10, u2 = new H(), c2 = new v(), d2 = new H(), f2 = new H(), m2 = new H(), g2 = 0, _2 = 0;
      for (let t11 = 0; t11 <= e10.length - 1; t11++)
        switch (t11) {
          case 0:
            g2 = e10[t11 + 1].x - e10[t11].x, _2 = e10[t11 + 1].y - e10[t11].y, d2.x = 1 * _2, d2.y = -g2, d2.z = 0 * _2, m2.copy(d2), d2.normalize(), o2.push(d2.x, d2.y, d2.z);
            break;
          case e10.length - 1:
            o2.push(m2.x, m2.y, m2.z);
            break;
          default:
            g2 = e10[t11 + 1].x - e10[t11].x, _2 = e10[t11 + 1].y - e10[t11].y, d2.x = 1 * _2, d2.y = -g2, d2.z = 0 * _2, f2.copy(d2), d2.x += m2.x, d2.y += m2.y, d2.z += m2.z, d2.normalize(), o2.push(d2.x, d2.y, d2.z), m2.copy(f2);
        }
      for (let r11 = 0; r11 <= t10; r11++) {
        let d3 = n10 + r11 * h2 * i10, p2 = Math.sin(d3), f3 = Math.cos(d3);
        for (let n11 = 0; n11 <= e10.length - 1; n11++) {
          u2.x = e10[n11].x * p2, u2.y = e10[n11].y, u2.z = e10[n11].x * f3, a2.push(u2.x, u2.y, u2.z), c2.x = r11 / t10, c2.y = n11 / (e10.length - 1), s2.push(c2.x, c2.y);
          let i11 = o2[3 * n11 + 0] * p2, h3 = o2[3 * n11 + 1], d4 = o2[3 * n11 + 0] * f3;
          l2.push(i11, h3, d4);
        }
      }
      for (let n11 = 0; n11 < t10; n11++)
        for (let t11 = 0; t11 < e10.length - 1; t11++) {
          let i11 = t11 + n11 * e10.length, a3 = i11 + e10.length, s3 = i11 + e10.length + 1, o3 = i11 + 1;
          r10.push(i11, a3, o3), r10.push(s3, o3, a3);
        }
      this.setIndex(r10), this.setAttribute("position", new ts(a2, 3)), this.setAttribute("uv", new ts(s2, 2)), this.setAttribute("normal", new ts(l2, 3));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new rw(e10.points, e10.segments, e10.phiStart, e10.phiLength);
    }
  }
  class rR extends rw {
    constructor(e10 = 1, t10 = 1, n10 = 4, i10 = 8) {
      let r10 = new rA();
      r10.absarc(0, -t10 / 2, e10, 1.5 * Math.PI, 0), r10.absarc(0, t10 / 2, e10, 0, 0.5 * Math.PI), super(r10.getPoints(n10), i10), this.type = "CapsuleGeometry", this.parameters = { radius: e10, height: t10, capSegments: n10, radialSegments: i10 };
    }
    static fromJSON(e10) {
      return new rR(e10.radius, e10.length, e10.capSegments, e10.radialSegments);
    }
  }
  class rC extends tf {
    constructor(e10 = 1, t10 = 32, n10 = 0, i10 = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: e10, segments: t10, thetaStart: n10, thetaLength: i10 }, t10 = Math.max(3, t10);
      let r10 = [], a2 = [], s2 = [], o2 = [], l2 = new H(), h2 = new v();
      a2.push(0, 0, 0), s2.push(0, 0, 1), o2.push(0.5, 0.5);
      for (let r11 = 0, u2 = 3; r11 <= t10; r11++, u2 += 3) {
        let c2 = n10 + r11 / t10 * i10;
        l2.x = e10 * Math.cos(c2), l2.y = e10 * Math.sin(c2), a2.push(l2.x, l2.y, l2.z), s2.push(0, 0, 1), h2.x = (a2[u2] / e10 + 1) / 2, h2.y = (a2[u2 + 1] / e10 + 1) / 2, o2.push(h2.x, h2.y);
      }
      for (let e11 = 1; e11 <= t10; e11++)
        r10.push(e11, e11 + 1, 0);
      this.setIndex(r10), this.setAttribute("position", new ts(a2, 3)), this.setAttribute("normal", new ts(s2, 3)), this.setAttribute("uv", new ts(o2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new rC(e10.radius, e10.segments, e10.thetaStart, e10.thetaLength);
    }
  }
  class rL extends tf {
    constructor(e10 = 1, t10 = 1, n10 = 1, i10 = 32, r10 = 1, a2 = false, s2 = 0, o2 = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e10, radiusBottom: t10, height: n10, radialSegments: i10, heightSegments: r10, openEnded: a2, thetaStart: s2, thetaLength: o2 };
      let l2 = this;
      i10 = Math.floor(i10), r10 = Math.floor(r10);
      let h2 = [], u2 = [], c2 = [], d2 = [], p2 = 0, f2 = [], m2 = n10 / 2, g2 = 0;
      function _2(n11) {
        let r11 = p2, a3 = new v(), f3 = new H(), _3 = 0, x2 = true === n11 ? e10 : t10, y2 = true === n11 ? 1 : -1;
        for (let e11 = 1; e11 <= i10; e11++)
          u2.push(0, m2 * y2, 0), c2.push(0, y2, 0), d2.push(0.5, 0.5), p2++;
        let M2 = p2;
        for (let e11 = 0; e11 <= i10; e11++) {
          let t11 = e11 / i10, n12 = t11 * o2 + s2, r12 = Math.cos(n12), l3 = Math.sin(n12);
          f3.x = x2 * l3, f3.y = m2 * y2, f3.z = x2 * r12, u2.push(f3.x, f3.y, f3.z), c2.push(0, y2, 0), a3.x = 0.5 * r12 + 0.5, a3.y = 0.5 * l3 * y2 + 0.5, d2.push(a3.x, a3.y), p2++;
        }
        for (let e11 = 0; e11 < i10; e11++) {
          let t11 = r11 + e11, i11 = M2 + e11;
          true === n11 ? h2.push(i11, i11 + 1, t11) : h2.push(i11 + 1, i11, t11), _3 += 3;
        }
        l2.addGroup(g2, _3, true === n11 ? 1 : 2), g2 += _3;
      }
      (function() {
        let a3 = new H(), _3 = new H(), v2 = 0, x2 = (t10 - e10) / n10;
        for (let l3 = 0; l3 <= r10; l3++) {
          let h3 = [], g3 = l3 / r10, v3 = g3 * (t10 - e10) + e10;
          for (let e11 = 0; e11 <= i10; e11++) {
            let t11 = e11 / i10, r11 = t11 * o2 + s2, l4 = Math.sin(r11), f3 = Math.cos(r11);
            _3.x = v3 * l4, _3.y = -g3 * n10 + m2, _3.z = v3 * f3, u2.push(_3.x, _3.y, _3.z), a3.set(l4, x2, f3).normalize(), c2.push(a3.x, a3.y, a3.z), d2.push(t11, 1 - g3), h3.push(p2++);
          }
          f2.push(h3);
        }
        for (let e11 = 0; e11 < i10; e11++)
          for (let t11 = 0; t11 < r10; t11++) {
            let n11 = f2[t11][e11], i11 = f2[t11 + 1][e11], r11 = f2[t11 + 1][e11 + 1], a4 = f2[t11][e11 + 1];
            h2.push(n11, i11, a4), h2.push(i11, r11, a4), v2 += 6;
          }
        l2.addGroup(g2, v2, 0), g2 += v2;
      })(), false === a2 && (e10 > 0 && _2(true), t10 > 0 && _2(false)), this.setIndex(h2), this.setAttribute("position", new ts(u2, 3)), this.setAttribute("normal", new ts(c2, 3)), this.setAttribute("uv", new ts(d2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new rL(e10.radiusTop, e10.radiusBottom, e10.height, e10.radialSegments, e10.heightSegments, e10.openEnded, e10.thetaStart, e10.thetaLength);
    }
  }
  class rP extends rL {
    constructor(e10 = 1, t10 = 1, n10 = 32, i10 = 1, r10 = false, a2 = 0, s2 = 2 * Math.PI) {
      super(0, e10, t10, n10, i10, r10, a2, s2), this.type = "ConeGeometry", this.parameters = { radius: e10, height: t10, radialSegments: n10, heightSegments: i10, openEnded: r10, thetaStart: a2, thetaLength: s2 };
    }
    static fromJSON(e10) {
      return new rP(e10.radius, e10.height, e10.radialSegments, e10.heightSegments, e10.openEnded, e10.thetaStart, e10.thetaLength);
    }
  }
  class rU extends tf {
    constructor(e10 = [], t10 = [], n10 = 1, i10 = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e10, indices: t10, radius: n10, detail: i10 };
      let r10 = [], a2 = [];
      function s2(e11) {
        r10.push(e11.x, e11.y, e11.z);
      }
      function o2(t11, n11) {
        let i11 = 3 * t11;
        n11.x = e10[i11 + 0], n11.y = e10[i11 + 1], n11.z = e10[i11 + 2];
      }
      function l2(e11, t11, n11, i11) {
        i11 < 0 && 1 === e11.x && (a2[t11] = e11.x - 1), 0 === n11.x && 0 === n11.z && (a2[t11] = i11 / 2 / Math.PI + 0.5);
      }
      function h2(e11) {
        return Math.atan2(e11.z, -e11.x);
      }
      (function(e11) {
        let n11 = new H(), i11 = new H(), r11 = new H();
        for (let a3 = 0; a3 < t10.length; a3 += 3)
          o2(t10[a3 + 0], n11), o2(t10[a3 + 1], i11), o2(t10[a3 + 2], r11), function(e12, t11, n12, i12) {
            let r12 = i12 + 1, a4 = [];
            for (let i13 = 0; i13 <= r12; i13++) {
              a4[i13] = [];
              let s3 = e12.clone().lerp(n12, i13 / r12), o3 = t11.clone().lerp(n12, i13 / r12), l3 = r12 - i13;
              for (let e13 = 0; e13 <= l3; e13++)
                0 === e13 && i13 === r12 ? a4[i13][e13] = s3 : a4[i13][e13] = s3.clone().lerp(o3, e13 / l3);
            }
            for (let e13 = 0; e13 < r12; e13++)
              for (let t12 = 0; t12 < 2 * (r12 - e13) - 1; t12++) {
                let n13 = Math.floor(t12 / 2);
                t12 % 2 == 0 ? (s2(a4[e13][n13 + 1]), s2(a4[e13 + 1][n13]), s2(a4[e13][n13])) : (s2(a4[e13][n13 + 1]), s2(a4[e13 + 1][n13 + 1]), s2(a4[e13 + 1][n13]));
              }
          }(n11, i11, r11, e11);
      })(i10), function(e11) {
        let t11 = new H();
        for (let n11 = 0; n11 < r10.length; n11 += 3)
          t11.x = r10[n11 + 0], t11.y = r10[n11 + 1], t11.z = r10[n11 + 2], t11.normalize().multiplyScalar(e11), r10[n11 + 0] = t11.x, r10[n11 + 1] = t11.y, r10[n11 + 2] = t11.z;
      }(n10), function() {
        let e11 = new H();
        for (let t11 = 0; t11 < r10.length; t11 += 3) {
          e11.x = r10[t11 + 0], e11.y = r10[t11 + 1], e11.z = r10[t11 + 2];
          let n11 = h2(e11) / 2 / Math.PI + 0.5, i11 = Math.atan2(-e11.y, Math.sqrt(e11.x * e11.x + e11.z * e11.z)) / Math.PI + 0.5;
          a2.push(n11, 1 - i11);
        }
        (function() {
          let e12 = new H(), t11 = new H(), n11 = new H(), i11 = new H(), s3 = new v(), o3 = new v(), u2 = new v();
          for (let c2 = 0, d2 = 0; c2 < r10.length; c2 += 9, d2 += 6) {
            e12.set(r10[c2 + 0], r10[c2 + 1], r10[c2 + 2]), t11.set(r10[c2 + 3], r10[c2 + 4], r10[c2 + 5]), n11.set(r10[c2 + 6], r10[c2 + 7], r10[c2 + 8]), s3.set(a2[d2 + 0], a2[d2 + 1]), o3.set(a2[d2 + 2], a2[d2 + 3]), u2.set(a2[d2 + 4], a2[d2 + 5]), i11.copy(e12).add(t11).add(n11).divideScalar(3);
            let p2 = h2(i11);
            l2(s3, d2 + 0, e12, p2), l2(o3, d2 + 2, t11, p2), l2(u2, d2 + 4, n11, p2);
          }
        })(), function() {
          for (let e12 = 0; e12 < a2.length; e12 += 6) {
            let t11 = a2[e12 + 0], n11 = a2[e12 + 2], i11 = a2[e12 + 4], r11 = Math.max(t11, n11, i11), s3 = Math.min(t11, n11, i11);
            r11 > 0.9 && s3 < 0.1 && (t11 < 0.2 && (a2[e12 + 0] += 1), n11 < 0.2 && (a2[e12 + 2] += 1), i11 < 0.2 && (a2[e12 + 4] += 1));
          }
        }();
      }(), this.setAttribute("position", new ts(r10, 3)), this.setAttribute("normal", new ts(r10.slice(), 3)), this.setAttribute("uv", new ts(a2, 2)), 0 === i10 ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new rU(e10.vertices, e10.indices, e10.radius, e10.details);
    }
  }
  class rN extends rU {
    constructor(e10 = 1, t10 = 0) {
      let n10 = (1 + Math.sqrt(5)) / 2, i10 = 1 / n10, r10 = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i10, -n10, 0, -i10, n10, 0, i10, -n10, 0, i10, n10, -i10, -n10, 0, -i10, n10, 0, i10, -n10, 0, i10, n10, 0, -n10, 0, -i10, n10, 0, -i10, -n10, 0, i10, n10, 0, i10];
      super(r10, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e10, t10), this.type = "DodecahedronGeometry", this.parameters = { radius: e10, detail: t10 };
    }
    static fromJSON(e10) {
      return new rN(e10.radius, e10.detail);
    }
  }
  let rD = new H(), rI = new H(), rO = new H(), rF = new e1();
  class rz extends tf {
    constructor(e10 = null, t10 = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: e10, thresholdAngle: t10 }, null !== e10) {
        let n10 = Math.cos(u * t10), i10 = e10.getIndex(), r10 = e10.getAttribute("position"), a2 = i10 ? i10.count : r10.count, s2 = [0, 0, 0], o2 = ["a", "b", "c"], l2 = [, , ,], h2 = {}, c2 = [];
        for (let e11 = 0; e11 < a2; e11 += 3) {
          i10 ? (s2[0] = i10.getX(e11), s2[1] = i10.getX(e11 + 1), s2[2] = i10.getX(e11 + 2)) : (s2[0] = e11, s2[1] = e11 + 1, s2[2] = e11 + 2);
          let { a: t11, b: a3, c: u2 } = rF;
          if (t11.fromBufferAttribute(r10, s2[0]), a3.fromBufferAttribute(r10, s2[1]), u2.fromBufferAttribute(r10, s2[2]), rF.getNormal(rO), l2[0] = `${Math.round(1e4 * t11.x)},${Math.round(1e4 * t11.y)},${Math.round(1e4 * t11.z)}`, l2[1] = `${Math.round(1e4 * a3.x)},${Math.round(1e4 * a3.y)},${Math.round(1e4 * a3.z)}`, l2[2] = `${Math.round(1e4 * u2.x)},${Math.round(1e4 * u2.y)},${Math.round(1e4 * u2.z)}`, l2[0] !== l2[1] && l2[1] !== l2[2] && l2[2] !== l2[0])
            for (let e12 = 0; e12 < 3; e12++) {
              let t12 = (e12 + 1) % 3, i11 = l2[e12], r11 = l2[t12], a4 = rF[o2[e12]], u3 = rF[o2[t12]], d2 = `${i11}_${r11}`, p2 = `${r11}_${i11}`;
              p2 in h2 && h2[p2] ? (rO.dot(h2[p2].normal) <= n10 && (c2.push(a4.x, a4.y, a4.z), c2.push(u3.x, u3.y, u3.z)), h2[p2] = null) : d2 in h2 || (h2[d2] = { index0: s2[e12], index1: s2[t12], normal: rO.clone() });
            }
        }
        for (let e11 in h2)
          if (h2[e11]) {
            let { index0: t11, index1: n11 } = h2[e11];
            rD.fromBufferAttribute(r10, t11), rI.fromBufferAttribute(r10, n11), c2.push(rD.x, rD.y, rD.z), c2.push(rI.x, rI.y, rI.z);
          }
        this.setAttribute("position", new ts(c2, 3));
      }
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
  }
  class rB extends rA {
    constructor(e10) {
      super(e10), this.uuid = d(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(e10) {
      let t10 = [];
      for (let n10 = 0, i10 = this.holes.length; n10 < i10; n10++)
        t10[n10] = this.holes[n10].getPoints(e10);
      return t10;
    }
    extractPoints(e10) {
      return { shape: this.getPoints(e10), holes: this.getPointsHoles(e10) };
    }
    copy(e10) {
      super.copy(e10), this.holes = [];
      for (let t10 = 0, n10 = e10.holes.length; t10 < n10; t10++) {
        let n11 = e10.holes[t10];
        this.holes.push(n11.clone());
      }
      return this;
    }
    toJSON() {
      let e10 = super.toJSON();
      e10.uuid = this.uuid, e10.holes = [];
      for (let t10 = 0, n10 = this.holes.length; t10 < n10; t10++) {
        let n11 = this.holes[t10];
        e10.holes.push(n11.toJSON());
      }
      return e10;
    }
    fromJSON(e10) {
      super.fromJSON(e10), this.uuid = e10.uuid, this.holes = [];
      for (let t10 = 0, n10 = e10.holes.length; t10 < n10; t10++) {
        let n11 = e10.holes[t10];
        this.holes.push(new rA().fromJSON(n11));
      }
      return this;
    }
  }
  let rV = { triangulate: function(e10, t10, n10 = 2) {
    let i10, r10, a2, s2, o2, l2, h2;
    let u2 = t10 && t10.length, c2 = u2 ? t10[0] * n10 : e10.length, d2 = rG(e10, 0, c2, n10, true), p2 = [];
    if (!d2 || d2.next === d2.prev)
      return p2;
    if (u2 && (d2 = function(e11, t11, n11, i11) {
      let r11, a3, s3, o3, l3;
      let h3 = [];
      for (r11 = 0, a3 = t11.length; r11 < a3; r11++)
        s3 = t11[r11] * i11, o3 = r11 < a3 - 1 ? t11[r11 + 1] * i11 : e11.length, (l3 = rG(e11, s3, o3, i11, false)) === l3.next && (l3.steiner = true), h3.push(function(e12) {
          let t12 = e12, n12 = e12;
          do
            (t12.x < n12.x || t12.x === n12.x && t12.y < n12.y) && (n12 = t12), t12 = t12.next;
          while (t12 !== e12);
          return n12;
        }(l3));
      for (h3.sort(rk), r11 = 0; r11 < h3.length; r11++)
        n11 = function(e12, t12) {
          let n12 = function(e13, t13) {
            let n13 = t13, i13 = -1 / 0, r12, a4 = e13.x, s4 = e13.y;
            do {
              if (s4 <= n13.y && s4 >= n13.next.y && n13.next.y !== n13.y) {
                let e14 = n13.x + (s4 - n13.y) * (n13.next.x - n13.x) / (n13.next.y - n13.y);
                if (e14 <= a4 && e14 > i13 && (i13 = e14, r12 = n13.x < n13.next.x ? n13 : n13.next, e14 === a4))
                  return r12;
              }
              n13 = n13.next;
            } while (n13 !== t13);
            if (!r12)
              return null;
            let o4 = r12, l4 = r12.x, h4 = r12.y, u3 = 1 / 0, c3;
            n13 = r12;
            do {
              var d3, p3;
              a4 >= n13.x && n13.x >= l4 && a4 !== n13.x && rX(s4 < h4 ? a4 : i13, s4, l4, h4, s4 < h4 ? i13 : a4, s4, n13.x, n13.y) && (c3 = Math.abs(s4 - n13.y) / (a4 - n13.x), rK(n13, e13) && (c3 < u3 || c3 === u3 && (n13.x > r12.x || n13.x === r12.x && (d3 = r12, p3 = n13, 0 > rj(d3.prev, d3, p3.prev) && 0 > rj(p3.next, d3, d3.next)))) && (r12 = n13, u3 = c3)), n13 = n13.next;
            } while (n13 !== o4);
            return r12;
          }(e12, t12);
          if (!n12)
            return t12;
          let i12 = rQ(n12, e12);
          return rH(i12, i12.next), rH(n12, n12.next);
        }(h3[r11], n11);
      return n11;
    }(e10, t10, d2, n10)), e10.length > 80 * n10) {
      i10 = a2 = e10[0], r10 = s2 = e10[1];
      for (let t11 = n10; t11 < c2; t11 += n10)
        o2 = e10[t11], l2 = e10[t11 + 1], o2 < i10 && (i10 = o2), l2 < r10 && (r10 = l2), o2 > a2 && (a2 = o2), l2 > s2 && (s2 = l2);
      h2 = 0 !== (h2 = Math.max(a2 - i10, s2 - r10)) ? 32767 / h2 : 0;
    }
    return function e11(t11, n11, i11, r11, a3, s3, o3) {
      if (!t11)
        return;
      !o3 && s3 && function(e12, t12, n12, i12) {
        let r12 = e12;
        do
          0 === r12.z && (r12.z = rW(r12.x, r12.y, t12, n12, i12)), r12.prevZ = r12.prev, r12.nextZ = r12.next, r12 = r12.next;
        while (r12 !== e12);
        r12.prevZ.nextZ = null, r12.prevZ = null, function(e13) {
          let t13, n13, i13, r13, a4, s4, o4, l4, h4 = 1;
          do {
            for (n13 = e13, e13 = null, a4 = null, s4 = 0; n13; ) {
              for (s4++, i13 = n13, o4 = 0, t13 = 0; t13 < h4 && (o4++, i13 = i13.nextZ); t13++)
                ;
              for (l4 = h4; o4 > 0 || l4 > 0 && i13; )
                0 !== o4 && (0 === l4 || !i13 || n13.z <= i13.z) ? (r13 = n13, n13 = n13.nextZ, o4--) : (r13 = i13, i13 = i13.nextZ, l4--), a4 ? a4.nextZ = r13 : e13 = r13, r13.prevZ = a4, a4 = r13;
              n13 = i13;
            }
            a4.nextZ = null, h4 *= 2;
          } while (s4 > 1);
        }(r12);
      }(t11, r11, a3, s3);
      let l3 = t11, h3, u3;
      for (; t11.prev !== t11.next; ) {
        if (h3 = t11.prev, u3 = t11.next, s3 ? function(e12, t12, n12, i12) {
          let r12 = e12.prev, a4 = e12.next;
          if (rj(r12, e12, a4) >= 0)
            return false;
          let s4 = r12.x, o4 = e12.x, l4 = a4.x, h4 = r12.y, u4 = e12.y, c3 = a4.y, d3 = s4 < o4 ? s4 < l4 ? s4 : l4 : o4 < l4 ? o4 : l4, p3 = h4 < u4 ? h4 < c3 ? h4 : c3 : u4 < c3 ? u4 : c3, f2 = s4 > o4 ? s4 > l4 ? s4 : l4 : o4 > l4 ? o4 : l4, m2 = h4 > u4 ? h4 > c3 ? h4 : c3 : u4 > c3 ? u4 : c3, g2 = rW(d3, p3, t12, n12, i12), _2 = rW(f2, m2, t12, n12, i12), v2 = e12.prevZ, x2 = e12.nextZ;
          for (; v2 && v2.z >= g2 && x2 && x2.z <= _2; ) {
            if (v2.x >= d3 && v2.x <= f2 && v2.y >= p3 && v2.y <= m2 && v2 !== r12 && v2 !== a4 && rX(s4, h4, o4, u4, l4, c3, v2.x, v2.y) && rj(v2.prev, v2, v2.next) >= 0 || (v2 = v2.prevZ, x2.x >= d3 && x2.x <= f2 && x2.y >= p3 && x2.y <= m2 && x2 !== r12 && x2 !== a4 && rX(s4, h4, o4, u4, l4, c3, x2.x, x2.y) && rj(x2.prev, x2, x2.next) >= 0))
              return false;
            x2 = x2.nextZ;
          }
          for (; v2 && v2.z >= g2; ) {
            if (v2.x >= d3 && v2.x <= f2 && v2.y >= p3 && v2.y <= m2 && v2 !== r12 && v2 !== a4 && rX(s4, h4, o4, u4, l4, c3, v2.x, v2.y) && rj(v2.prev, v2, v2.next) >= 0)
              return false;
            v2 = v2.prevZ;
          }
          for (; x2 && x2.z <= _2; ) {
            if (x2.x >= d3 && x2.x <= f2 && x2.y >= p3 && x2.y <= m2 && x2 !== r12 && x2 !== a4 && rX(s4, h4, o4, u4, l4, c3, x2.x, x2.y) && rj(x2.prev, x2, x2.next) >= 0)
              return false;
            x2 = x2.nextZ;
          }
          return true;
        }(t11, r11, a3, s3) : function(e12) {
          let t12 = e12.prev, n12 = e12.next;
          if (rj(t12, e12, n12) >= 0)
            return false;
          let i12 = t12.x, r12 = e12.x, a4 = n12.x, s4 = t12.y, o4 = e12.y, l4 = n12.y, h4 = i12 < r12 ? i12 < a4 ? i12 : a4 : r12 < a4 ? r12 : a4, u4 = s4 < o4 ? s4 < l4 ? s4 : l4 : o4 < l4 ? o4 : l4, c3 = i12 > r12 ? i12 > a4 ? i12 : a4 : r12 > a4 ? r12 : a4, d3 = s4 > o4 ? s4 > l4 ? s4 : l4 : o4 > l4 ? o4 : l4, p3 = n12.next;
          for (; p3 !== t12; ) {
            if (p3.x >= h4 && p3.x <= c3 && p3.y >= u4 && p3.y <= d3 && rX(i12, s4, r12, o4, a4, l4, p3.x, p3.y) && rj(p3.prev, p3, p3.next) >= 0)
              return false;
            p3 = p3.next;
          }
          return true;
        }(t11)) {
          n11.push(h3.i / i11 | 0), n11.push(t11.i / i11 | 0), n11.push(u3.i / i11 | 0), r0(t11), t11 = u3.next, l3 = u3.next;
          continue;
        }
        if ((t11 = u3) === l3) {
          o3 ? 1 === o3 ? e11(t11 = function(e12, t12, n12) {
            let i12 = e12;
            do {
              let r12 = i12.prev, a4 = i12.next.next;
              !rq(r12, a4) && rY(r12, i12, i12.next, a4) && rK(r12, a4) && rK(a4, r12) && (t12.push(r12.i / n12 | 0), t12.push(i12.i / n12 | 0), t12.push(a4.i / n12 | 0), r0(i12), r0(i12.next), i12 = e12 = a4), i12 = i12.next;
            } while (i12 !== e12);
            return rH(i12);
          }(rH(t11), n11, i11), n11, i11, r11, a3, s3, 2) : 2 === o3 && function(t12, n12, i12, r12, a4, s4) {
            let o4 = t12;
            do {
              let t13 = o4.next.next;
              for (; t13 !== o4.prev; ) {
                var l4, h4;
                if (o4.i !== t13.i && (l4 = o4, h4 = t13, l4.next.i !== h4.i && l4.prev.i !== h4.i && !function(e12, t14) {
                  let n13 = e12;
                  do {
                    if (n13.i !== e12.i && n13.next.i !== e12.i && n13.i !== t14.i && n13.next.i !== t14.i && rY(n13, n13.next, e12, t14))
                      return true;
                    n13 = n13.next;
                  } while (n13 !== e12);
                  return false;
                }(l4, h4) && (rK(l4, h4) && rK(h4, l4) && function(e12, t14) {
                  let n13 = e12, i13 = false, r13 = (e12.x + t14.x) / 2, a5 = (e12.y + t14.y) / 2;
                  do
                    n13.y > a5 != n13.next.y > a5 && n13.next.y !== n13.y && r13 < (n13.next.x - n13.x) * (a5 - n13.y) / (n13.next.y - n13.y) + n13.x && (i13 = !i13), n13 = n13.next;
                  while (n13 !== e12);
                  return i13;
                }(l4, h4) && (rj(l4.prev, l4, h4.prev) || rj(l4, h4.prev, h4)) || rq(l4, h4) && rj(l4.prev, l4, l4.next) > 0 && rj(h4.prev, h4, h4.next) > 0))) {
                  let l5 = rQ(o4, t13);
                  o4 = rH(o4, o4.next), l5 = rH(l5, l5.next), e11(o4, n12, i12, r12, a4, s4, 0), e11(l5, n12, i12, r12, a4, s4, 0);
                  return;
                }
                t13 = t13.next;
              }
              o4 = o4.next;
            } while (o4 !== t12);
          }(t11, n11, i11, r11, a3, s3) : e11(rH(t11), n11, i11, r11, a3, s3, 1);
          break;
        }
      }
    }(d2, p2, n10, i10, r10, h2, 0), p2;
  } };
  function rG(e10, t10, n10, i10, r10) {
    let a2, s2;
    if (r10 === function(e11, t11, n11, i11) {
      let r11 = 0;
      for (let a3 = t11, s3 = n11 - i11; a3 < n11; a3 += i11)
        r11 += (e11[s3] - e11[a3]) * (e11[a3 + 1] + e11[s3 + 1]), s3 = a3;
      return r11;
    }(e10, t10, n10, i10) > 0)
      for (a2 = t10; a2 < n10; a2 += i10)
        s2 = r$(a2, e10[a2], e10[a2 + 1], s2);
    else
      for (a2 = n10 - i10; a2 >= t10; a2 -= i10)
        s2 = r$(a2, e10[a2], e10[a2 + 1], s2);
    return s2 && rq(s2, s2.next) && (r0(s2), s2 = s2.next), s2;
  }
  function rH(e10, t10) {
    if (!e10)
      return e10;
    t10 || (t10 = e10);
    let n10 = e10, i10;
    do
      if (i10 = false, !n10.steiner && (rq(n10, n10.next) || 0 === rj(n10.prev, n10, n10.next))) {
        if (r0(n10), (n10 = t10 = n10.prev) === n10.next)
          break;
        i10 = true;
      } else
        n10 = n10.next;
    while (i10 || n10 !== t10);
    return t10;
  }
  function rk(e10, t10) {
    return e10.x - t10.x;
  }
  function rW(e10, t10, n10, i10, r10) {
    return (e10 = ((e10 = ((e10 = ((e10 = ((e10 = (e10 - n10) * r10 | 0) | e10 << 8) & 16711935) | e10 << 4) & 252645135) | e10 << 2) & 858993459) | e10 << 1) & 1431655765) | (t10 = ((t10 = ((t10 = ((t10 = ((t10 = (t10 - i10) * r10 | 0) | t10 << 8) & 16711935) | t10 << 4) & 252645135) | t10 << 2) & 858993459) | t10 << 1) & 1431655765) << 1;
  }
  function rX(e10, t10, n10, i10, r10, a2, s2, o2) {
    return (r10 - s2) * (t10 - o2) >= (e10 - s2) * (a2 - o2) && (e10 - s2) * (i10 - o2) >= (n10 - s2) * (t10 - o2) && (n10 - s2) * (a2 - o2) >= (r10 - s2) * (i10 - o2);
  }
  function rj(e10, t10, n10) {
    return (t10.y - e10.y) * (n10.x - t10.x) - (t10.x - e10.x) * (n10.y - t10.y);
  }
  function rq(e10, t10) {
    return e10.x === t10.x && e10.y === t10.y;
  }
  function rY(e10, t10, n10, i10) {
    let r10 = rZ(rj(e10, t10, n10)), a2 = rZ(rj(e10, t10, i10)), s2 = rZ(rj(n10, i10, e10)), o2 = rZ(rj(n10, i10, t10));
    return !!(r10 !== a2 && s2 !== o2 || 0 === r10 && rJ(e10, n10, t10) || 0 === a2 && rJ(e10, i10, t10) || 0 === s2 && rJ(n10, e10, i10) || 0 === o2 && rJ(n10, t10, i10));
  }
  function rJ(e10, t10, n10) {
    return t10.x <= Math.max(e10.x, n10.x) && t10.x >= Math.min(e10.x, n10.x) && t10.y <= Math.max(e10.y, n10.y) && t10.y >= Math.min(e10.y, n10.y);
  }
  function rZ(e10) {
    return e10 > 0 ? 1 : e10 < 0 ? -1 : 0;
  }
  function rK(e10, t10) {
    return 0 > rj(e10.prev, e10, e10.next) ? rj(e10, t10, e10.next) >= 0 && rj(e10, e10.prev, t10) >= 0 : 0 > rj(e10, t10, e10.prev) || 0 > rj(e10, e10.next, t10);
  }
  function rQ(e10, t10) {
    let n10 = new r1(e10.i, e10.x, e10.y), i10 = new r1(t10.i, t10.x, t10.y), r10 = e10.next, a2 = t10.prev;
    return e10.next = t10, t10.prev = e10, n10.next = r10, r10.prev = n10, i10.next = n10, n10.prev = i10, a2.next = i10, i10.prev = a2, i10;
  }
  function r$(e10, t10, n10, i10) {
    let r10 = new r1(e10, t10, n10);
    return i10 ? (r10.next = i10.next, r10.prev = i10, i10.next.prev = r10, i10.next = r10) : (r10.prev = r10, r10.next = r10), r10;
  }
  function r0(e10) {
    e10.next.prev = e10.prev, e10.prev.next = e10.next, e10.prevZ && (e10.prevZ.nextZ = e10.nextZ), e10.nextZ && (e10.nextZ.prevZ = e10.prevZ);
  }
  function r1(e10, t10, n10) {
    this.i = e10, this.x = t10, this.y = n10, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  class r2 {
    static area(e10) {
      let t10 = e10.length, n10 = 0;
      for (let i10 = t10 - 1, r10 = 0; r10 < t10; i10 = r10++)
        n10 += e10[i10].x * e10[r10].y - e10[r10].x * e10[i10].y;
      return 0.5 * n10;
    }
    static isClockWise(e10) {
      return 0 > r2.area(e10);
    }
    static triangulateShape(e10, t10) {
      let n10 = [], i10 = [], r10 = [];
      r3(e10), r4(n10, e10);
      let a2 = e10.length;
      t10.forEach(r3);
      for (let e11 = 0; e11 < t10.length; e11++)
        i10.push(a2), a2 += t10[e11].length, r4(n10, t10[e11]);
      let s2 = rV.triangulate(n10, i10);
      for (let e11 = 0; e11 < s2.length; e11 += 3)
        r10.push(s2.slice(e11, e11 + 3));
      return r10;
    }
  }
  function r3(e10) {
    let t10 = e10.length;
    t10 > 2 && e10[t10 - 1].equals(e10[0]) && e10.pop();
  }
  function r4(e10, t10) {
    for (let n10 = 0; n10 < t10.length; n10++)
      e10.push(t10[n10].x), e10.push(t10[n10].y);
  }
  class r5 extends tf {
    constructor(e10 = new rB([new v(0.5, 0.5), new v(-0.5, 0.5), new v(-0.5, -0.5), new v(0.5, -0.5)]), t10 = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: e10, options: t10 }, e10 = Array.isArray(e10) ? e10 : [e10];
      let n10 = this, i10 = [], r10 = [];
      for (let a2 = 0, s2 = e10.length; a2 < s2; a2++) {
        let s3 = e10[a2];
        !function(e11) {
          let a3, s4, o2, l2;
          let h2 = [], u2 = void 0 !== t10.curveSegments ? t10.curveSegments : 12, c2 = void 0 !== t10.steps ? t10.steps : 1, d2 = void 0 !== t10.depth ? t10.depth : 1, p2 = void 0 === t10.bevelEnabled || t10.bevelEnabled, f2 = void 0 !== t10.bevelThickness ? t10.bevelThickness : 0.2, m2 = void 0 !== t10.bevelSize ? t10.bevelSize : f2 - 0.1, g2 = void 0 !== t10.bevelOffset ? t10.bevelOffset : 0, _2 = void 0 !== t10.bevelSegments ? t10.bevelSegments : 3, x2 = t10.extrudePath, y2 = void 0 !== t10.UVGenerator ? t10.UVGenerator : r6, M2, S2 = false;
          x2 && (M2 = x2.getSpacedPoints(c2), S2 = true, p2 = false, a3 = x2.computeFrenetFrames(c2, false), s4 = new H(), o2 = new H(), l2 = new H()), p2 || (_2 = 0, f2 = 0, m2 = 0, g2 = 0);
          let E2 = e11.extractPoints(u2), T2 = E2.shape, b2 = E2.holes, A2 = !r2.isClockWise(T2);
          if (A2) {
            T2 = T2.reverse();
            for (let e12 = 0, t11 = b2.length; e12 < t11; e12++) {
              let t12 = b2[e12];
              r2.isClockWise(t12) && (b2[e12] = t12.reverse());
            }
          }
          let w2 = r2.triangulateShape(T2, b2), R2 = T2;
          for (let e12 = 0, t11 = b2.length; e12 < t11; e12++) {
            let t12 = b2[e12];
            T2 = T2.concat(t12);
          }
          function C2(e12, t11, n11) {
            return t11 || console.error("THREE.ExtrudeGeometry: vec does not exist"), e12.clone().addScaledVector(t11, n11);
          }
          let L2 = T2.length, P2 = w2.length;
          function U2(e12, t11, n11) {
            let i11, r11, a4;
            let s5 = e12.x - t11.x, o3 = e12.y - t11.y, l3 = n11.x - e12.x, h3 = n11.y - e12.y, u3 = s5 * s5 + o3 * o3, c3 = s5 * h3 - o3 * l3;
            if (Math.abs(c3) > Number.EPSILON) {
              let c4 = Math.sqrt(u3), d3 = Math.sqrt(l3 * l3 + h3 * h3), p3 = t11.x - o3 / c4, f3 = t11.y + s5 / c4, m3 = n11.x - h3 / d3, g3 = n11.y + l3 / d3, _3 = ((m3 - p3) * h3 - (g3 - f3) * l3) / (s5 * h3 - o3 * l3);
              i11 = p3 + s5 * _3 - e12.x, r11 = f3 + o3 * _3 - e12.y;
              let x3 = i11 * i11 + r11 * r11;
              if (x3 <= 2)
                return new v(i11, r11);
              a4 = Math.sqrt(x3 / 2);
            } else {
              let e13 = false;
              s5 > Number.EPSILON ? l3 > Number.EPSILON && (e13 = true) : s5 < -Number.EPSILON ? l3 < -Number.EPSILON && (e13 = true) : Math.sign(o3) === Math.sign(h3) && (e13 = true), e13 ? (i11 = -o3, r11 = s5, a4 = Math.sqrt(u3)) : (i11 = s5, r11 = o3, a4 = Math.sqrt(u3 / 2));
            }
            return new v(i11 / a4, r11 / a4);
          }
          let N2 = [];
          for (let e12 = 0, t11 = R2.length, n11 = t11 - 1, i11 = e12 + 1; e12 < t11; e12++, n11++, i11++)
            n11 === t11 && (n11 = 0), i11 === t11 && (i11 = 0), N2[e12] = U2(R2[e12], R2[n11], R2[i11]);
          let D2 = [], I2, O2 = N2.concat();
          for (let e12 = 0, t11 = b2.length; e12 < t11; e12++) {
            let t12 = b2[e12];
            I2 = [];
            for (let e13 = 0, n11 = t12.length, i11 = n11 - 1, r11 = e13 + 1; e13 < n11; e13++, i11++, r11++)
              i11 === n11 && (i11 = 0), r11 === n11 && (r11 = 0), I2[e13] = U2(t12[e13], t12[i11], t12[r11]);
            D2.push(I2), O2 = O2.concat(I2);
          }
          for (let e12 = 0; e12 < _2; e12++) {
            let t11 = e12 / _2, n11 = f2 * Math.cos(t11 * Math.PI / 2), i11 = m2 * Math.sin(t11 * Math.PI / 2) + g2;
            for (let e13 = 0, t12 = R2.length; e13 < t12; e13++) {
              let t13 = C2(R2[e13], N2[e13], i11);
              B2(t13.x, t13.y, -n11);
            }
            for (let e13 = 0, t12 = b2.length; e13 < t12; e13++) {
              let t13 = b2[e13];
              I2 = D2[e13];
              for (let e14 = 0, r11 = t13.length; e14 < r11; e14++) {
                let r12 = C2(t13[e14], I2[e14], i11);
                B2(r12.x, r12.y, -n11);
              }
            }
          }
          let F2 = m2 + g2;
          for (let e12 = 0; e12 < L2; e12++) {
            let t11 = p2 ? C2(T2[e12], O2[e12], F2) : T2[e12];
            S2 ? (o2.copy(a3.normals[0]).multiplyScalar(t11.x), s4.copy(a3.binormals[0]).multiplyScalar(t11.y), l2.copy(M2[0]).add(o2).add(s4), B2(l2.x, l2.y, l2.z)) : B2(t11.x, t11.y, 0);
          }
          for (let e12 = 1; e12 <= c2; e12++)
            for (let t11 = 0; t11 < L2; t11++) {
              let n11 = p2 ? C2(T2[t11], O2[t11], F2) : T2[t11];
              S2 ? (o2.copy(a3.normals[e12]).multiplyScalar(n11.x), s4.copy(a3.binormals[e12]).multiplyScalar(n11.y), l2.copy(M2[e12]).add(o2).add(s4), B2(l2.x, l2.y, l2.z)) : B2(n11.x, n11.y, d2 / c2 * e12);
            }
          for (let e12 = _2 - 1; e12 >= 0; e12--) {
            let t11 = e12 / _2, n11 = f2 * Math.cos(t11 * Math.PI / 2), i11 = m2 * Math.sin(t11 * Math.PI / 2) + g2;
            for (let e13 = 0, t12 = R2.length; e13 < t12; e13++) {
              let t13 = C2(R2[e13], N2[e13], i11);
              B2(t13.x, t13.y, d2 + n11);
            }
            for (let e13 = 0, t12 = b2.length; e13 < t12; e13++) {
              let t13 = b2[e13];
              I2 = D2[e13];
              for (let e14 = 0, r11 = t13.length; e14 < r11; e14++) {
                let r12 = C2(t13[e14], I2[e14], i11);
                S2 ? B2(r12.x, r12.y + M2[c2 - 1].y, M2[c2 - 1].x + n11) : B2(r12.x, r12.y, d2 + n11);
              }
            }
          }
          function z2(e12, t11) {
            let r11 = e12.length;
            for (; --r11 >= 0; ) {
              let a4 = r11, s5 = r11 - 1;
              s5 < 0 && (s5 = e12.length - 1);
              for (let e13 = 0, r12 = c2 + 2 * _2; e13 < r12; e13++) {
                let r13 = L2 * e13, o3 = L2 * (e13 + 1), l3 = t11 + a4 + r13, h3 = t11 + s5 + r13, u3 = t11 + s5 + o3, c3 = t11 + a4 + o3;
                !function(e14, t12, r14, a5) {
                  G2(e14), G2(t12), G2(a5), G2(t12), G2(r14), G2(a5);
                  let s6 = i10.length / 3, o4 = y2.generateSideWallUV(n10, i10, s6 - 6, s6 - 3, s6 - 2, s6 - 1);
                  k2(o4[0]), k2(o4[1]), k2(o4[3]), k2(o4[1]), k2(o4[2]), k2(o4[3]);
                }(l3, h3, u3, c3);
              }
            }
          }
          function B2(e12, t11, n11) {
            h2.push(e12), h2.push(t11), h2.push(n11);
          }
          function V2(e12, t11, r11) {
            G2(e12), G2(t11), G2(r11);
            let a4 = i10.length / 3, s5 = y2.generateTopUV(n10, i10, a4 - 3, a4 - 2, a4 - 1);
            k2(s5[0]), k2(s5[1]), k2(s5[2]);
          }
          function G2(e12) {
            i10.push(h2[3 * e12 + 0]), i10.push(h2[3 * e12 + 1]), i10.push(h2[3 * e12 + 2]);
          }
          function k2(e12) {
            r10.push(e12.x), r10.push(e12.y);
          }
          (function() {
            let e12 = i10.length / 3;
            if (p2) {
              let e13 = 0 * L2;
              for (let t11 = 0; t11 < P2; t11++) {
                let n11 = w2[t11];
                V2(n11[2] + e13, n11[1] + e13, n11[0] + e13);
              }
              e13 = L2 * (c2 + 2 * _2);
              for (let t11 = 0; t11 < P2; t11++) {
                let n11 = w2[t11];
                V2(n11[0] + e13, n11[1] + e13, n11[2] + e13);
              }
            } else {
              for (let e13 = 0; e13 < P2; e13++) {
                let t11 = w2[e13];
                V2(t11[2], t11[1], t11[0]);
              }
              for (let e13 = 0; e13 < P2; e13++) {
                let t11 = w2[e13];
                V2(t11[0] + L2 * c2, t11[1] + L2 * c2, t11[2] + L2 * c2);
              }
            }
            n10.addGroup(e12, i10.length / 3 - e12, 0);
          })(), function() {
            let e12 = i10.length / 3, t11 = 0;
            z2(R2, 0), t11 += R2.length;
            for (let e13 = 0, n11 = b2.length; e13 < n11; e13++) {
              let n12 = b2[e13];
              z2(n12, t11), t11 += n12.length;
            }
            n10.addGroup(e12, i10.length / 3 - e12, 1);
          }();
        }(s3);
      }
      this.setAttribute("position", new ts(i10, 3)), this.setAttribute("uv", new ts(r10, 2)), this.computeVertexNormals();
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    toJSON() {
      let e10 = super.toJSON(), t10 = this.parameters.shapes, n10 = this.parameters.options;
      return function(e11, t11, n11) {
        if (n11.shapes = [], Array.isArray(e11))
          for (let t12 = 0, i10 = e11.length; t12 < i10; t12++) {
            let i11 = e11[t12];
            n11.shapes.push(i11.uuid);
          }
        else
          n11.shapes.push(e11.uuid);
        return n11.options = Object.assign({}, t11), void 0 !== t11.extrudePath && (n11.options.extrudePath = t11.extrudePath.toJSON()), n11;
      }(t10, n10, e10);
    }
    static fromJSON(e10, t10) {
      let n10 = [];
      for (let i11 = 0, r10 = e10.shapes.length; i11 < r10; i11++) {
        let r11 = t10[e10.shapes[i11]];
        n10.push(r11);
      }
      let i10 = e10.options.extrudePath;
      return void 0 !== i10 && (e10.options.extrudePath = new rT[i10.type]().fromJSON(i10)), new r5(n10, e10.options);
    }
  }
  let r6 = { generateTopUV: function(e10, t10, n10, i10, r10) {
    let a2 = t10[3 * n10], s2 = t10[3 * n10 + 1], o2 = t10[3 * i10], l2 = t10[3 * i10 + 1], h2 = t10[3 * r10], u2 = t10[3 * r10 + 1];
    return [new v(a2, s2), new v(o2, l2), new v(h2, u2)];
  }, generateSideWallUV: function(e10, t10, n10, i10, r10, a2) {
    let s2 = t10[3 * n10], o2 = t10[3 * n10 + 1], l2 = t10[3 * n10 + 2], h2 = t10[3 * i10], u2 = t10[3 * i10 + 1], c2 = t10[3 * i10 + 2], d2 = t10[3 * r10], p2 = t10[3 * r10 + 1], f2 = t10[3 * r10 + 2], m2 = t10[3 * a2], g2 = t10[3 * a2 + 1], _2 = t10[3 * a2 + 2];
    return Math.abs(o2 - u2) < Math.abs(s2 - h2) ? [new v(s2, 1 - l2), new v(h2, 1 - c2), new v(d2, 1 - f2), new v(m2, 1 - _2)] : [new v(o2, 1 - l2), new v(u2, 1 - c2), new v(p2, 1 - f2), new v(g2, 1 - _2)];
  } };
  class r7 extends rU {
    constructor(e10 = 1, t10 = 0) {
      let n10 = (1 + Math.sqrt(5)) / 2, i10 = [-1, n10, 0, 1, n10, 0, -1, -n10, 0, 1, -n10, 0, 0, -1, n10, 0, 1, n10, 0, -1, -n10, 0, 1, -n10, n10, 0, -1, n10, 0, 1, -n10, 0, -1, -n10, 0, 1];
      super(i10, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e10, t10), this.type = "IcosahedronGeometry", this.parameters = { radius: e10, detail: t10 };
    }
    static fromJSON(e10) {
      return new r7(e10.radius, e10.detail);
    }
  }
  class r8 extends rU {
    constructor(e10 = 1, t10 = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e10, t10), this.type = "OctahedronGeometry", this.parameters = { radius: e10, detail: t10 };
    }
    static fromJSON(e10) {
      return new r8(e10.radius, e10.detail);
    }
  }
  class r9 extends tf {
    constructor(e10 = 0.5, t10 = 1, n10 = 32, i10 = 1, r10 = 0, a2 = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: e10, outerRadius: t10, thetaSegments: n10, phiSegments: i10, thetaStart: r10, thetaLength: a2 }, n10 = Math.max(3, n10), i10 = Math.max(1, i10);
      let s2 = [], o2 = [], l2 = [], h2 = [], u2 = e10, c2 = (t10 - e10) / i10, d2 = new H(), p2 = new v();
      for (let e11 = 0; e11 <= i10; e11++) {
        for (let e12 = 0; e12 <= n10; e12++) {
          let i11 = r10 + e12 / n10 * a2;
          d2.x = u2 * Math.cos(i11), d2.y = u2 * Math.sin(i11), o2.push(d2.x, d2.y, d2.z), l2.push(0, 0, 1), p2.x = (d2.x / t10 + 1) / 2, p2.y = (d2.y / t10 + 1) / 2, h2.push(p2.x, p2.y);
        }
        u2 += c2;
      }
      for (let e11 = 0; e11 < i10; e11++) {
        let t11 = e11 * (n10 + 1);
        for (let e12 = 0; e12 < n10; e12++) {
          let i11 = e12 + t11, r11 = i11 + n10 + 1, a3 = i11 + n10 + 2, o3 = i11 + 1;
          s2.push(i11, r11, o3), s2.push(r11, a3, o3);
        }
      }
      this.setIndex(s2), this.setAttribute("position", new ts(o2, 3)), this.setAttribute("normal", new ts(l2, 3)), this.setAttribute("uv", new ts(h2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new r9(e10.innerRadius, e10.outerRadius, e10.thetaSegments, e10.phiSegments, e10.thetaStart, e10.thetaLength);
    }
  }
  class ae extends tf {
    constructor(e10 = new rB([new v(0, 0.5), new v(-0.5, -0.5), new v(0.5, -0.5)]), t10 = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: e10, curveSegments: t10 };
      let n10 = [], i10 = [], r10 = [], a2 = [], s2 = 0, o2 = 0;
      if (false === Array.isArray(e10))
        l2(e10);
      else
        for (let t11 = 0; t11 < e10.length; t11++)
          l2(e10[t11]), this.addGroup(s2, o2, t11), s2 += o2, o2 = 0;
      function l2(e11) {
        let s3 = i10.length / 3, l3 = e11.extractPoints(t10), h2 = l3.shape, u2 = l3.holes;
        false === r2.isClockWise(h2) && (h2 = h2.reverse());
        for (let e12 = 0, t11 = u2.length; e12 < t11; e12++) {
          let t12 = u2[e12];
          true === r2.isClockWise(t12) && (u2[e12] = t12.reverse());
        }
        let c2 = r2.triangulateShape(h2, u2);
        for (let e12 = 0, t11 = u2.length; e12 < t11; e12++) {
          let t12 = u2[e12];
          h2 = h2.concat(t12);
        }
        for (let e12 = 0, t11 = h2.length; e12 < t11; e12++) {
          let t12 = h2[e12];
          i10.push(t12.x, t12.y, 0), r10.push(0, 0, 1), a2.push(t12.x, t12.y);
        }
        for (let e12 = 0, t11 = c2.length; e12 < t11; e12++) {
          let t12 = c2[e12], i11 = t12[0] + s3, r11 = t12[1] + s3, a3 = t12[2] + s3;
          n10.push(i11, r11, a3), o2 += 3;
        }
      }
      this.setIndex(n10), this.setAttribute("position", new ts(i10, 3)), this.setAttribute("normal", new ts(r10, 3)), this.setAttribute("uv", new ts(a2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    toJSON() {
      let e10 = super.toJSON(), t10 = this.parameters.shapes;
      return function(e11, t11) {
        if (t11.shapes = [], Array.isArray(e11))
          for (let n10 = 0, i10 = e11.length; n10 < i10; n10++) {
            let i11 = e11[n10];
            t11.shapes.push(i11.uuid);
          }
        else
          t11.shapes.push(e11.uuid);
        return t11;
      }(t10, e10);
    }
    static fromJSON(e10, t10) {
      let n10 = [];
      for (let i10 = 0, r10 = e10.shapes.length; i10 < r10; i10++) {
        let r11 = t10[e10.shapes[i10]];
        n10.push(r11);
      }
      return new ae(n10, e10.curveSegments);
    }
  }
  class at extends tf {
    constructor(e10 = 1, t10 = 32, n10 = 16, i10 = 0, r10 = 2 * Math.PI, a2 = 0, s2 = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: e10, widthSegments: t10, heightSegments: n10, phiStart: i10, phiLength: r10, thetaStart: a2, thetaLength: s2 }, t10 = Math.max(3, Math.floor(t10)), n10 = Math.max(2, Math.floor(n10));
      let o2 = Math.min(a2 + s2, Math.PI), l2 = 0, h2 = [], u2 = new H(), c2 = new H(), d2 = [], p2 = [], f2 = [], m2 = [];
      for (let d3 = 0; d3 <= n10; d3++) {
        let g2 = [], _2 = d3 / n10, v2 = 0;
        0 === d3 && 0 === a2 ? v2 = 0.5 / t10 : d3 === n10 && o2 === Math.PI && (v2 = -0.5 / t10);
        for (let n11 = 0; n11 <= t10; n11++) {
          let o3 = n11 / t10;
          u2.x = -e10 * Math.cos(i10 + o3 * r10) * Math.sin(a2 + _2 * s2), u2.y = e10 * Math.cos(a2 + _2 * s2), u2.z = e10 * Math.sin(i10 + o3 * r10) * Math.sin(a2 + _2 * s2), p2.push(u2.x, u2.y, u2.z), c2.copy(u2).normalize(), f2.push(c2.x, c2.y, c2.z), m2.push(o3 + v2, 1 - _2), g2.push(l2++);
        }
        h2.push(g2);
      }
      for (let e11 = 0; e11 < n10; e11++)
        for (let i11 = 0; i11 < t10; i11++) {
          let t11 = h2[e11][i11 + 1], r11 = h2[e11][i11], s3 = h2[e11 + 1][i11], l3 = h2[e11 + 1][i11 + 1];
          (0 !== e11 || a2 > 0) && d2.push(t11, r11, l3), (e11 !== n10 - 1 || o2 < Math.PI) && d2.push(r11, s3, l3);
        }
      this.setIndex(d2), this.setAttribute("position", new ts(p2, 3)), this.setAttribute("normal", new ts(f2, 3)), this.setAttribute("uv", new ts(m2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new at(e10.radius, e10.widthSegments, e10.heightSegments, e10.phiStart, e10.phiLength, e10.thetaStart, e10.thetaLength);
    }
  }
  class an extends rU {
    constructor(e10 = 1, t10 = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e10, t10), this.type = "TetrahedronGeometry", this.parameters = { radius: e10, detail: t10 };
    }
    static fromJSON(e10) {
      return new an(e10.radius, e10.detail);
    }
  }
  class ai extends tf {
    constructor(e10 = 1, t10 = 0.4, n10 = 12, i10 = 48, r10 = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: e10, tube: t10, radialSegments: n10, tubularSegments: i10, arc: r10 }, n10 = Math.floor(n10), i10 = Math.floor(i10);
      let a2 = [], s2 = [], o2 = [], l2 = [], h2 = new H(), u2 = new H(), c2 = new H();
      for (let a3 = 0; a3 <= n10; a3++)
        for (let d2 = 0; d2 <= i10; d2++) {
          let p2 = d2 / i10 * r10, f2 = a3 / n10 * Math.PI * 2;
          u2.x = (e10 + t10 * Math.cos(f2)) * Math.cos(p2), u2.y = (e10 + t10 * Math.cos(f2)) * Math.sin(p2), u2.z = t10 * Math.sin(f2), s2.push(u2.x, u2.y, u2.z), h2.x = e10 * Math.cos(p2), h2.y = e10 * Math.sin(p2), c2.subVectors(u2, h2).normalize(), o2.push(c2.x, c2.y, c2.z), l2.push(d2 / i10), l2.push(a3 / n10);
        }
      for (let e11 = 1; e11 <= n10; e11++)
        for (let t11 = 1; t11 <= i10; t11++) {
          let n11 = (i10 + 1) * e11 + t11 - 1, r11 = (i10 + 1) * (e11 - 1) + t11 - 1, s3 = (i10 + 1) * (e11 - 1) + t11, o3 = (i10 + 1) * e11 + t11;
          a2.push(n11, r11, o3), a2.push(r11, s3, o3);
        }
      this.setIndex(a2), this.setAttribute("position", new ts(s2, 3)), this.setAttribute("normal", new ts(o2, 3)), this.setAttribute("uv", new ts(l2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new ai(e10.radius, e10.tube, e10.radialSegments, e10.tubularSegments, e10.arc);
    }
  }
  class ar extends tf {
    constructor(e10 = 1, t10 = 0.4, n10 = 64, i10 = 8, r10 = 2, a2 = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: e10, tube: t10, tubularSegments: n10, radialSegments: i10, p: r10, q: a2 }, n10 = Math.floor(n10), i10 = Math.floor(i10);
      let s2 = [], o2 = [], l2 = [], h2 = [], u2 = new H(), c2 = new H(), d2 = new H(), p2 = new H(), f2 = new H(), m2 = new H(), g2 = new H();
      for (let s3 = 0; s3 <= n10; ++s3) {
        let v2 = s3 / n10 * r10 * Math.PI * 2;
        _2(v2, r10, a2, e10, d2), _2(v2 + 0.01, r10, a2, e10, p2), m2.subVectors(p2, d2), g2.addVectors(p2, d2), f2.crossVectors(m2, g2), g2.crossVectors(f2, m2), f2.normalize(), g2.normalize();
        for (let e11 = 0; e11 <= i10; ++e11) {
          let r11 = e11 / i10 * Math.PI * 2, a3 = -t10 * Math.cos(r11), p3 = t10 * Math.sin(r11);
          u2.x = d2.x + (a3 * g2.x + p3 * f2.x), u2.y = d2.y + (a3 * g2.y + p3 * f2.y), u2.z = d2.z + (a3 * g2.z + p3 * f2.z), o2.push(u2.x, u2.y, u2.z), c2.subVectors(u2, d2).normalize(), l2.push(c2.x, c2.y, c2.z), h2.push(s3 / n10), h2.push(e11 / i10);
        }
      }
      for (let e11 = 1; e11 <= n10; e11++)
        for (let t11 = 1; t11 <= i10; t11++) {
          let n11 = (i10 + 1) * (e11 - 1) + (t11 - 1), r11 = (i10 + 1) * e11 + (t11 - 1), a3 = (i10 + 1) * e11 + t11, o3 = (i10 + 1) * (e11 - 1) + t11;
          s2.push(n11, r11, o3), s2.push(r11, a3, o3);
        }
      function _2(e11, t11, n11, i11, r11) {
        let a3 = n11 / t11 * e11, s3 = Math.cos(a3);
        r11.x = i11 * (2 + s3) * 0.5 * Math.cos(e11), r11.y = i11 * (2 + s3) * Math.sin(e11) * 0.5, r11.z = i11 * Math.sin(a3) * 0.5;
      }
      this.setIndex(s2), this.setAttribute("position", new ts(o2, 3)), this.setAttribute("normal", new ts(l2, 3)), this.setAttribute("uv", new ts(h2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    static fromJSON(e10) {
      return new ar(e10.radius, e10.tube, e10.tubularSegments, e10.radialSegments, e10.p, e10.q);
    }
  }
  class aa extends tf {
    constructor(e10 = new rS(new H(-1, -1, 0), new H(-1, 1, 0), new H(1, 1, 0)), t10 = 64, n10 = 1, i10 = 8, r10 = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: e10, tubularSegments: t10, radius: n10, radialSegments: i10, closed: r10 };
      let a2 = e10.computeFrenetFrames(t10, r10);
      this.tangents = a2.tangents, this.normals = a2.normals, this.binormals = a2.binormals;
      let s2 = new H(), o2 = new H(), l2 = new v(), h2 = new H(), u2 = [], c2 = [], d2 = [], p2 = [];
      function f2(r11) {
        h2 = e10.getPointAt(r11 / t10, h2);
        let l3 = a2.normals[r11], d3 = a2.binormals[r11];
        for (let e11 = 0; e11 <= i10; e11++) {
          let t11 = e11 / i10 * Math.PI * 2, r12 = Math.sin(t11), a3 = -Math.cos(t11);
          o2.x = a3 * l3.x + r12 * d3.x, o2.y = a3 * l3.y + r12 * d3.y, o2.z = a3 * l3.z + r12 * d3.z, o2.normalize(), c2.push(o2.x, o2.y, o2.z), s2.x = h2.x + n10 * o2.x, s2.y = h2.y + n10 * o2.y, s2.z = h2.z + n10 * o2.z, u2.push(s2.x, s2.y, s2.z);
        }
      }
      (function() {
        for (let e11 = 0; e11 < t10; e11++)
          f2(e11);
        f2(false === r10 ? t10 : 0), function() {
          for (let e11 = 0; e11 <= t10; e11++)
            for (let n11 = 0; n11 <= i10; n11++)
              l2.x = e11 / t10, l2.y = n11 / i10, d2.push(l2.x, l2.y);
        }(), function() {
          for (let e11 = 1; e11 <= t10; e11++)
            for (let t11 = 1; t11 <= i10; t11++) {
              let n11 = (i10 + 1) * (e11 - 1) + (t11 - 1), r11 = (i10 + 1) * e11 + (t11 - 1), a3 = (i10 + 1) * e11 + t11, s3 = (i10 + 1) * (e11 - 1) + t11;
              p2.push(n11, r11, s3), p2.push(r11, a3, s3);
            }
        }();
      })(), this.setIndex(p2), this.setAttribute("position", new ts(u2, 3)), this.setAttribute("normal", new ts(c2, 3)), this.setAttribute("uv", new ts(d2, 2));
    }
    copy(e10) {
      return super.copy(e10), this.parameters = Object.assign({}, e10.parameters), this;
    }
    toJSON() {
      let e10 = super.toJSON();
      return e10.path = this.parameters.path.toJSON(), e10;
    }
    static fromJSON(e10) {
      return new aa(new rT[e10.path.type]().fromJSON(e10.path), e10.tubularSegments, e10.radius, e10.radialSegments, e10.closed);
    }
  }
  function as(e10, t10, n10) {
    return al(e10) ? new e10.constructor(e10.subarray(t10, void 0 !== n10 ? n10 : e10.length)) : e10.slice(t10, n10);
  }
  function ao(e10, t10, n10) {
    return e10 && (n10 || e10.constructor !== t10) ? "number" == typeof t10.BYTES_PER_ELEMENT ? new t10(e10) : Array.prototype.slice.call(e10) : e10;
  }
  function al(e10) {
    return ArrayBuffer.isView(e10) && !(e10 instanceof DataView);
  }
  class ah {
    constructor(e10, t10, n10, i10) {
      this.parameterPositions = e10, this._cachedIndex = 0, this.resultBuffer = void 0 !== i10 ? i10 : new t10.constructor(n10), this.sampleValues = t10, this.valueSize = n10, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(e10) {
      let t10 = this.parameterPositions, n10 = this._cachedIndex, i10 = t10[n10], r10 = t10[n10 - 1];
      e: {
        t: {
          let a2;
          n: {
            i:
              if (!(e10 < i10)) {
                for (let a3 = n10 + 2; ; ) {
                  if (void 0 === i10) {
                    if (e10 < r10)
                      break i;
                    return n10 = t10.length, this._cachedIndex = n10, this.copySampleValue_(n10 - 1);
                  }
                  if (n10 === a3)
                    break;
                  if (r10 = i10, e10 < (i10 = t10[++n10]))
                    break t;
                }
                a2 = t10.length;
                break n;
              }
            if (!(e10 >= r10)) {
              let s2 = t10[1];
              e10 < s2 && (n10 = 2, r10 = s2);
              for (let a3 = n10 - 2; ; ) {
                if (void 0 === r10)
                  return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n10 === a3)
                  break;
                if (i10 = r10, e10 >= (r10 = t10[--n10 - 1]))
                  break t;
              }
              a2 = n10, n10 = 0;
              break n;
            }
            break e;
          }
          for (; n10 < a2; ) {
            let i11 = n10 + a2 >>> 1;
            e10 < t10[i11] ? a2 = i11 : n10 = i11 + 1;
          }
          if (i10 = t10[n10], void 0 === (r10 = t10[n10 - 1]))
            return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === i10)
            return n10 = t10.length, this._cachedIndex = n10, this.copySampleValue_(n10 - 1);
        }
        this._cachedIndex = n10, this.intervalChanged_(n10, r10, i10);
      }
      return this.interpolate_(n10, r10, e10, i10);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e10) {
      let t10 = this.resultBuffer, n10 = this.sampleValues, i10 = this.valueSize, r10 = e10 * i10;
      for (let e11 = 0; e11 !== i10; ++e11)
        t10[e11] = n10[r10 + e11];
      return t10;
    }
    interpolate_() {
      throw Error("call to abstract method");
    }
    intervalChanged_() {
    }
  }
  class au extends ah {
    constructor(e10, t10, n10, i10) {
      super(e10, t10, n10, i10), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 };
    }
    intervalChanged_(e10, t10, n10) {
      let i10 = this.parameterPositions, r10 = e10 - 2, a2 = e10 + 1, s2 = i10[r10], o2 = i10[a2];
      if (void 0 === s2)
        switch (this.getSettings_().endingStart) {
          case 2401:
            r10 = e10, s2 = 2 * t10 - n10;
            break;
          case 2402:
            r10 = i10.length - 2, s2 = t10 + i10[r10] - i10[r10 + 1];
            break;
          default:
            r10 = e10, s2 = n10;
        }
      if (void 0 === o2)
        switch (this.getSettings_().endingEnd) {
          case 2401:
            a2 = e10, o2 = 2 * n10 - t10;
            break;
          case 2402:
            a2 = 1, o2 = n10 + i10[1] - i10[0];
            break;
          default:
            a2 = e10 - 1, o2 = t10;
        }
      let l2 = (n10 - t10) * 0.5, h2 = this.valueSize;
      this._weightPrev = l2 / (t10 - s2), this._weightNext = l2 / (o2 - n10), this._offsetPrev = r10 * h2, this._offsetNext = a2 * h2;
    }
    interpolate_(e10, t10, n10, i10) {
      let r10 = this.resultBuffer, a2 = this.sampleValues, s2 = this.valueSize, o2 = e10 * s2, l2 = o2 - s2, h2 = this._offsetPrev, u2 = this._offsetNext, c2 = this._weightPrev, d2 = this._weightNext, p2 = (n10 - t10) / (i10 - t10), f2 = p2 * p2, m2 = f2 * p2, g2 = -c2 * m2 + 2 * c2 * f2 - c2 * p2, _2 = (1 + c2) * m2 + (-1.5 - 2 * c2) * f2 + (-0.5 + c2) * p2 + 1, v2 = (-1 - d2) * m2 + (1.5 + d2) * f2 + 0.5 * p2, x2 = d2 * m2 - d2 * f2;
      for (let e11 = 0; e11 !== s2; ++e11)
        r10[e11] = g2 * a2[h2 + e11] + _2 * a2[l2 + e11] + v2 * a2[o2 + e11] + x2 * a2[u2 + e11];
      return r10;
    }
  }
  class ac extends ah {
    constructor(e10, t10, n10, i10) {
      super(e10, t10, n10, i10);
    }
    interpolate_(e10, t10, n10, i10) {
      let r10 = this.resultBuffer, a2 = this.sampleValues, s2 = this.valueSize, o2 = e10 * s2, l2 = o2 - s2, h2 = (n10 - t10) / (i10 - t10), u2 = 1 - h2;
      for (let e11 = 0; e11 !== s2; ++e11)
        r10[e11] = a2[l2 + e11] * u2 + a2[o2 + e11] * h2;
      return r10;
    }
  }
  class ad extends ah {
    constructor(e10, t10, n10, i10) {
      super(e10, t10, n10, i10);
    }
    interpolate_(e10) {
      return this.copySampleValue_(e10 - 1);
    }
  }
  class ap {
    constructor(e10, t10, n10, i10) {
      if (void 0 === e10)
        throw Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === t10 || 0 === t10.length)
        throw Error("THREE.KeyframeTrack: no keyframes in track named " + e10);
      this.name = e10, this.times = ao(t10, this.TimeBufferType), this.values = ao(n10, this.ValueBufferType), this.setInterpolation(i10 || this.DefaultInterpolation);
    }
    static toJSON(e10) {
      let t10;
      let n10 = e10.constructor;
      if (n10.toJSON !== this.toJSON)
        t10 = n10.toJSON(e10);
      else {
        t10 = { name: e10.name, times: ao(e10.times, Array), values: ao(e10.values, Array) };
        let n11 = e10.getInterpolation();
        n11 !== e10.DefaultInterpolation && (t10.interpolation = n11);
      }
      return t10.type = e10.ValueTypeName, t10;
    }
    InterpolantFactoryMethodDiscrete(e10) {
      return new ad(this.times, this.values, this.getValueSize(), e10);
    }
    InterpolantFactoryMethodLinear(e10) {
      return new ac(this.times, this.values, this.getValueSize(), e10);
    }
    InterpolantFactoryMethodSmooth(e10) {
      return new au(this.times, this.values, this.getValueSize(), e10);
    }
    setInterpolation(e10) {
      let t10;
      switch (e10) {
        case 2300:
          t10 = this.InterpolantFactoryMethodDiscrete;
          break;
        case 2301:
          t10 = this.InterpolantFactoryMethodLinear;
          break;
        case 2302:
          t10 = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === t10) {
        let t11 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (e10 !== this.DefaultInterpolation)
            this.setInterpolation(this.DefaultInterpolation);
          else
            throw Error(t11);
        }
        return console.warn("THREE.KeyframeTrack:", t11), this;
      }
      return this.createInterpolant = t10, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return 2300;
        case this.InterpolantFactoryMethodLinear:
          return 2301;
        case this.InterpolantFactoryMethodSmooth:
          return 2302;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e10) {
      if (0 !== e10) {
        let t10 = this.times;
        for (let n10 = 0, i10 = t10.length; n10 !== i10; ++n10)
          t10[n10] += e10;
      }
      return this;
    }
    scale(e10) {
      if (1 !== e10) {
        let t10 = this.times;
        for (let n10 = 0, i10 = t10.length; n10 !== i10; ++n10)
          t10[n10] *= e10;
      }
      return this;
    }
    trim(e10, t10) {
      let n10 = this.times, i10 = n10.length, r10 = 0, a2 = i10 - 1;
      for (; r10 !== i10 && n10[r10] < e10; )
        ++r10;
      for (; -1 !== a2 && n10[a2] > t10; )
        --a2;
      if (++a2, 0 !== r10 || a2 !== i10) {
        r10 >= a2 && (r10 = (a2 = Math.max(a2, 1)) - 1);
        let e11 = this.getValueSize();
        this.times = as(n10, r10, a2), this.values = as(this.values, r10 * e11, a2 * e11);
      }
      return this;
    }
    validate() {
      let e10 = true, t10 = this.getValueSize();
      t10 - Math.floor(t10) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e10 = false);
      let n10 = this.times, i10 = this.values, r10 = n10.length;
      0 === r10 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e10 = false);
      let a2 = null;
      for (let t11 = 0; t11 !== r10; t11++) {
        let i11 = n10[t11];
        if ("number" == typeof i11 && isNaN(i11)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t11, i11), e10 = false;
          break;
        }
        if (null !== a2 && a2 > i11) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, t11, i11, a2), e10 = false;
          break;
        }
        a2 = i11;
      }
      if (void 0 !== i10 && al(i10))
        for (let t11 = 0, n11 = i10.length; t11 !== n11; ++t11) {
          let n12 = i10[t11];
          if (isNaN(n12)) {
            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t11, n12), e10 = false;
            break;
          }
        }
      return e10;
    }
    optimize() {
      let e10 = as(this.times), t10 = as(this.values), n10 = this.getValueSize(), i10 = 2302 === this.getInterpolation(), r10 = e10.length - 1, a2 = 1;
      for (let s2 = 1; s2 < r10; ++s2) {
        let r11 = false, o2 = e10[s2], l2 = e10[s2 + 1];
        if (o2 !== l2 && (1 !== s2 || o2 !== e10[0])) {
          if (i10)
            r11 = true;
          else {
            let e11 = s2 * n10, i11 = e11 - n10, a3 = e11 + n10;
            for (let s3 = 0; s3 !== n10; ++s3) {
              let n11 = t10[e11 + s3];
              if (n11 !== t10[i11 + s3] || n11 !== t10[a3 + s3]) {
                r11 = true;
                break;
              }
            }
          }
        }
        if (r11) {
          if (s2 !== a2) {
            e10[a2] = e10[s2];
            let i11 = s2 * n10, r12 = a2 * n10;
            for (let e11 = 0; e11 !== n10; ++e11)
              t10[r12 + e11] = t10[i11 + e11];
          }
          ++a2;
        }
      }
      if (r10 > 0) {
        e10[a2] = e10[r10];
        for (let e11 = r10 * n10, i11 = a2 * n10, s2 = 0; s2 !== n10; ++s2)
          t10[i11 + s2] = t10[e11 + s2];
        ++a2;
      }
      return a2 !== e10.length ? (this.times = as(e10, 0, a2), this.values = as(t10, 0, a2 * n10)) : (this.times = e10, this.values = t10), this;
    }
    clone() {
      let e10 = as(this.times, 0), t10 = as(this.values, 0), n10 = this.constructor, i10 = new n10(this.name, e10, t10);
      return i10.createInterpolant = this.createInterpolant, i10;
    }
  }
  ap.prototype.TimeBufferType = Float32Array, ap.prototype.ValueBufferType = Float32Array, ap.prototype.DefaultInterpolation = 2301;
  class af extends ap {
  }
  af.prototype.ValueTypeName = "bool", af.prototype.ValueBufferType = Array, af.prototype.DefaultInterpolation = 2300, af.prototype.InterpolantFactoryMethodLinear = void 0, af.prototype.InterpolantFactoryMethodSmooth = void 0, class extends ap {
  }.prototype.ValueTypeName = "color", class extends ap {
  }.prototype.ValueTypeName = "number";
  class am extends ah {
    constructor(e10, t10, n10, i10) {
      super(e10, t10, n10, i10);
    }
    interpolate_(e10, t10, n10, i10) {
      let r10 = this.resultBuffer, a2 = this.sampleValues, s2 = this.valueSize, o2 = (n10 - t10) / (i10 - t10), l2 = e10 * s2;
      for (let e11 = l2 + s2; l2 !== e11; l2 += 4)
        G.slerpFlat(r10, 0, a2, l2 - s2, a2, l2, o2);
      return r10;
    }
  }
  class ag extends ap {
    InterpolantFactoryMethodLinear(e10) {
      return new am(this.times, this.values, this.getValueSize(), e10);
    }
  }
  ag.prototype.ValueTypeName = "quaternion", ag.prototype.DefaultInterpolation = 2301, ag.prototype.InterpolantFactoryMethodSmooth = void 0;
  class a_ extends ap {
  }
  a_.prototype.ValueTypeName = "string", a_.prototype.ValueBufferType = Array, a_.prototype.DefaultInterpolation = 2300, a_.prototype.InterpolantFactoryMethodLinear = void 0, a_.prototype.InterpolantFactoryMethodSmooth = void 0, class extends ap {
  }.prototype.ValueTypeName = "vector";
  let av = "\\[\\]\\.:\\/", ax = RegExp("[" + av + "]", "g"), ay = "[^" + av + "]", aM = "[^" + av.replace("\\.", "") + "]", aS = /((?:WC+[\/:])*)/.source.replace("WC", ay), aE = /(WCOD+)?/.source.replace("WCOD", aM), aT = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ay), ab = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ay), aA = RegExp("^" + aS + aE + aT + ab + "$"), aw = ["material", "materials", "bones", "map"];
  class aR {
    constructor(e10, t10, n10) {
      this.path = t10, this.parsedPath = n10 || aR.parseTrackName(t10), this.node = aR.findNode(e10, this.parsedPath.nodeName), this.rootNode = e10, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e10, t10, n10) {
      return e10 && e10.isAnimationObjectGroup ? new aR.Composite(e10, t10, n10) : new aR(e10, t10, n10);
    }
    static sanitizeNodeName(e10) {
      return e10.replace(/\s/g, "_").replace(ax, "");
    }
    static parseTrackName(e10) {
      let t10 = aA.exec(e10);
      if (null === t10)
        throw Error("PropertyBinding: Cannot parse trackName: " + e10);
      let n10 = { nodeName: t10[2], objectName: t10[3], objectIndex: t10[4], propertyName: t10[5], propertyIndex: t10[6] }, i10 = n10.nodeName && n10.nodeName.lastIndexOf(".");
      if (void 0 !== i10 && -1 !== i10) {
        let e11 = n10.nodeName.substring(i10 + 1);
        -1 !== aw.indexOf(e11) && (n10.nodeName = n10.nodeName.substring(0, i10), n10.objectName = e11);
      }
      if (null === n10.propertyName || 0 === n10.propertyName.length)
        throw Error("PropertyBinding: can not parse propertyName from trackName: " + e10);
      return n10;
    }
    static findNode(e10, t10) {
      if (void 0 === t10 || "" === t10 || "." === t10 || -1 === t10 || t10 === e10.name || t10 === e10.uuid)
        return e10;
      if (e10.skeleton) {
        let n10 = e10.skeleton.getBoneByName(t10);
        if (void 0 !== n10)
          return n10;
      }
      if (e10.children) {
        let n10 = function(e11) {
          for (let i11 = 0; i11 < e11.length; i11++) {
            let r10 = e11[i11];
            if (r10.name === t10 || r10.uuid === t10)
              return r10;
            let a2 = n10(r10.children);
            if (a2)
              return a2;
          }
          return null;
        }, i10 = n10(e10.children);
        if (i10)
          return i10;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(e10, t10) {
      e10[t10] = this.targetObject[this.propertyName];
    }
    _getValue_array(e10, t10) {
      let n10 = this.resolvedProperty;
      for (let i10 = 0, r10 = n10.length; i10 !== r10; ++i10)
        e10[t10++] = n10[i10];
    }
    _getValue_arrayElement(e10, t10) {
      e10[t10] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e10, t10) {
      this.resolvedProperty.toArray(e10, t10);
    }
    _setValue_direct(e10, t10) {
      this.targetObject[this.propertyName] = e10[t10];
    }
    _setValue_direct_setNeedsUpdate(e10, t10) {
      this.targetObject[this.propertyName] = e10[t10], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e10, t10) {
      this.targetObject[this.propertyName] = e10[t10], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(e10, t10) {
      let n10 = this.resolvedProperty;
      for (let i10 = 0, r10 = n10.length; i10 !== r10; ++i10)
        n10[i10] = e10[t10++];
    }
    _setValue_array_setNeedsUpdate(e10, t10) {
      let n10 = this.resolvedProperty;
      for (let i10 = 0, r10 = n10.length; i10 !== r10; ++i10)
        n10[i10] = e10[t10++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e10, t10) {
      let n10 = this.resolvedProperty;
      for (let i10 = 0, r10 = n10.length; i10 !== r10; ++i10)
        n10[i10] = e10[t10++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(e10, t10) {
      this.resolvedProperty[this.propertyIndex] = e10[t10];
    }
    _setValue_arrayElement_setNeedsUpdate(e10, t10) {
      this.resolvedProperty[this.propertyIndex] = e10[t10], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e10, t10) {
      this.resolvedProperty[this.propertyIndex] = e10[t10], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(e10, t10) {
      this.resolvedProperty.fromArray(e10, t10);
    }
    _setValue_fromArray_setNeedsUpdate(e10, t10) {
      this.resolvedProperty.fromArray(e10, t10), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e10, t10) {
      this.resolvedProperty.fromArray(e10, t10), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(e10, t10) {
      this.bind(), this.getValue(e10, t10);
    }
    _setValue_unbound(e10, t10) {
      this.bind(), this.setValue(e10, t10);
    }
    bind() {
      let e10 = this.node, t10 = this.parsedPath, n10 = t10.objectName, i10 = t10.propertyName, r10 = t10.propertyIndex;
      if (e10 || (e10 = aR.findNode(this.rootNode, t10.nodeName), this.node = e10), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e10) {
        console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        return;
      }
      if (n10) {
        let i11 = t10.objectIndex;
        switch (n10) {
          case "materials":
            if (!e10.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e10.material.materials) {
              console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              return;
            }
            e10 = e10.material.materials;
            break;
          case "bones":
            if (!e10.skeleton) {
              console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              return;
            }
            e10 = e10.skeleton.bones;
            for (let t11 = 0; t11 < e10.length; t11++)
              if (e10[t11].name === i11) {
                i11 = t11;
                break;
              }
            break;
          case "map":
            if ("map" in e10) {
              e10 = e10.map;
              break;
            }
            if (!e10.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e10.material.map) {
              console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
              return;
            }
            e10 = e10.material.map;
            break;
          default:
            if (void 0 === e10[n10]) {
              console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              return;
            }
            e10 = e10[n10];
        }
        if (void 0 !== i11) {
          if (void 0 === e10[i11]) {
            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e10);
            return;
          }
          e10 = e10[i11];
        }
      }
      let a2 = e10[i10];
      if (void 0 === a2) {
        let n11 = t10.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + n11 + "." + i10 + " but it wasn't found.", e10);
        return;
      }
      let s2 = this.Versioning.None;
      this.targetObject = e10, void 0 !== e10.needsUpdate ? s2 = this.Versioning.NeedsUpdate : void 0 !== e10.matrixWorldNeedsUpdate && (s2 = this.Versioning.MatrixWorldNeedsUpdate);
      let o2 = this.BindingType.Direct;
      if (void 0 !== r10) {
        if ("morphTargetInfluences" === i10) {
          if (!e10.geometry) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            return;
          }
          if (!e10.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          void 0 !== e10.morphTargetDictionary[r10] && (r10 = e10.morphTargetDictionary[r10]);
        }
        o2 = this.BindingType.ArrayElement, this.resolvedProperty = a2, this.propertyIndex = r10;
      } else
        void 0 !== a2.fromArray && void 0 !== a2.toArray ? (o2 = this.BindingType.HasFromToArray, this.resolvedProperty = a2) : Array.isArray(a2) ? (o2 = this.BindingType.EntireArray, this.resolvedProperty = a2) : this.propertyName = i10;
      this.getValue = this.GetterByBindingType[o2], this.setValue = this.SetterByBindingTypeAndVersioning[o2][s2];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  }
  aR.Composite = class {
    constructor(e10, t10, n10) {
      let i10 = n10 || aR.parseTrackName(t10);
      this._targetGroup = e10, this._bindings = e10.subscribe_(t10, i10);
    }
    getValue(e10, t10) {
      this.bind();
      let n10 = this._targetGroup.nCachedObjects_, i10 = this._bindings[n10];
      void 0 !== i10 && i10.getValue(e10, t10);
    }
    setValue(e10, t10) {
      let n10 = this._bindings;
      for (let i10 = this._targetGroup.nCachedObjects_, r10 = n10.length; i10 !== r10; ++i10)
        n10[i10].setValue(e10, t10);
    }
    bind() {
      let e10 = this._bindings;
      for (let t10 = this._targetGroup.nCachedObjects_, n10 = e10.length; t10 !== n10; ++t10)
        e10[t10].bind();
    }
    unbind() {
      let e10 = this._bindings;
      for (let t10 = this._targetGroup.nCachedObjects_, n10 = e10.length; t10 !== n10; ++t10)
        e10[t10].unbind();
    }
  }, aR.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, aR.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, aR.prototype.GetterByBindingType = [aR.prototype._getValue_direct, aR.prototype._getValue_array, aR.prototype._getValue_arrayElement, aR.prototype._getValue_toArray], aR.prototype.SetterByBindingTypeAndVersioning = [[aR.prototype._setValue_direct, aR.prototype._setValue_direct_setNeedsUpdate, aR.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [aR.prototype._setValue_array, aR.prototype._setValue_array_setNeedsUpdate, aR.prototype._setValue_array_setMatrixWorldNeedsUpdate], [aR.prototype._setValue_arrayElement, aR.prototype._setValue_arrayElement_setNeedsUpdate, aR.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [aR.prototype._setValue_fromArray, aR.prototype._setValue_fromArray_setNeedsUpdate, aR.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]], new Float32Array(1), "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "153" } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "153");
} }]);
//# sourceMappingURL=05ee798f-5006accd0940af88.js.map
