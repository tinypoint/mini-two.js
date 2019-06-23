import Base from "./shapes/base";
import Scene from "./scene";

const DEFAULT_OPTIONS = {
  width: 300,
  height: 300,
  dpr: window.devicePixelRatio || 1
};

class MiniTwo extends Base {
  elem;
  dpr;
  ctx;
  origin = { x: 0, y: 0 };
  _scene;
  _rafId = null;
  isPlaying = false;
  _updateFns = [];

  constructor(options = {}) {
    super();
    for (let key in DEFAULT_OPTIONS) {
      this[key] =
        options[key] === undefined ? DEFAULT_OPTIONS[key] : options[key];
    }
    this._scene = new Scene(this);
    this.elem = document.createElement("canvas");
    this.elem.width = this.width * this.dpr;
    this.elem.height = this.height * this.dpr;
    this.elem.style.width = this.width + "px";
    this.elem.style.height = this.height + "px";
    this.ctx = this.elem.getContext("2d");
  }

  add = (...args) => {
    this._scene.add(...args);
  };

  remove = (...args) => {
    this._scene.remove(...args);
  };

  render = () => {
    this._scene.draw(this.ctx);
  };

  play = () => {
    if (this.isPlaying) {
      return;
    }
    this.isPlaying = true;
    let _self = this;

    function loop(times) {
      for (let i = 0, len = _self._updateFns.length; i < len; i++) {
        _self._updateFns[i](times);
      }
      _self._rafId = window.requestAnimationFrame(loop);
    }

    _self._rafId = window.requestAnimationFrame(loop);
  };

  pause = () => {
    this._rafId && window.cancelAnimationFrame(this._rafId);
    this._rafId = null;
    this.isPlaying = false;
  };

  onUpdate = fn => {
    this._updateFns.push(fn);
  };

  offUpdate = fn => {
    for (let i = 0, len = this._updateFns.length; i < len; i++) {
      if (fn === this._updateFns[i]) {
        this._updateFns.splice(i, 1);
        return;
      }
    }
  };

  resize = (width, height, dpr = this.dpr) => {
    this.elem.width = width * dpr;
    this.elem.height = height * dpr;
    this.elem.style.width = width + "px";
    this.elem.style.height = height + "px";
    this.width = width;
    this.height = height;
  };
}

export default MiniTwo;
