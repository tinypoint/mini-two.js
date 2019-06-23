class Base {
  x = 0;
  y = 0;
  rotate = 0;
  alpha = 1;
  scale = 1;
  width = 0;
  height = 0;
  translateX = 0;
  translateY = 0;
  constructor() {}

  setX = x => {
    this.x = x;
    return this;
  };

  setY = y => {
    this.y = y;
    return this;
  };

  setXY = (x, y) => {
    this.x = x;
    this.y = y;
    return this;
  };

  setRotate = rotate => {
    this.rotate = rotate;
    return this;
  };

  setAlpha = alpha => {
    this.alpha = alpha;
    return this;
  };

  setScale = scale => {
    this.scale = scale;
    return this;
  };

  setWidth = width => {
    this.width = width;
    return this;
  };

  setHeight = height => {
    this.height = height;
    return this;
  };

  setTranslateX = translateX => {
    this.translateX = translateX;
    return this;
  };

  setTranslateY = translateY => {
    this.translateY = translateY;
    return this;
  };

  setTranslateXY = (translateX, translateY) => {
    this.translateX = translateX;
    this.translateY = translateY;
    return this;
  };
}

export default Base;
