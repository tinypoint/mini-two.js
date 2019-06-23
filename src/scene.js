class Scene {
  miniTwoInstance;
  objects = [];
  constructor(miniTwoInstance) {
    this.miniTwoInstance = miniTwoInstance;
  }

  // 坐标转换
  xc2s = c => {
    const miniTwoInstance = this.miniTwoInstance;
    const rate = miniTwoInstance.dpr / miniTwoInstance.scale;
    const s =
      (c + miniTwoInstance.origin.x - miniTwoInstance.translateX) * rate +
      (miniTwoInstance.width * miniTwoInstance.dpr) / 2;
    return s;
  };

  yc2s = c => {
    const miniTwoInstance = this.miniTwoInstance;
    const rate = miniTwoInstance.dpr / miniTwoInstance.scale;
    const s =
      (miniTwoInstance.height * miniTwoInstance.dpr) / 2 -
      (c + miniTwoInstance.origin.y - miniTwoInstance.translateY) * rate;
    return s;
  };

  xs2c = s => {
    const miniTwoInstance = this.miniTwoInstance;
    const rate = miniTwoInstance.dpr / miniTwoInstance.scale;
    const c =
      (s - (miniTwoInstance.width * miniTwoInstance.dpr) / 2) / rate -
      miniTwoInstance.origin.x +
      miniTwoInstance.translateX;
    return c;
  };

  ys2c = s => {
    const miniTwoInstance = this.miniTwoInstance;
    const rate = miniTwoInstance.dpr / miniTwoInstance.scale;
    const c =
      ((miniTwoInstance.height * miniTwoInstance.dpr) / 2 - s) / rate -
      miniTwoInstance.origin.y +
      miniTwoInstance.translateY;
    return c;
  };

  xyc2s = p => {
    const [x, y] = p;

    return [this.xc2s(x), this.yc2s(y)];
  };

  // 单位转换
  lc2s = lc => {
    const miniTwoInstance = this.miniTwoInstance;
    const rate = miniTwoInstance.dpr / miniTwoInstance.scale;
    const ls = rate * lc;
    return ls;
  };

  add = obj => {
    this.objects.push(obj);
  };

  remove = obj => {
    for (let i = 0, len = this.objects.length; i < len; i++) {
      if (obj === this.objects[i]) {
        this.objects.splice(i, 1);
        return;
      }
    }
  };

  clearCanvas = ctx => {
    const miniTwoInstance = this.miniTwoInstance;
    ctx.clearRect(
      0,
      0,
      miniTwoInstance.width * miniTwoInstance.dpr,
      miniTwoInstance.height * miniTwoInstance.dpr
    );
  };

  draw = ctx => {
    this.clearCanvas(ctx);
    this.objects.forEach(obj => {
      obj.draw(ctx, this);
    });
  };
}

export default Scene;
