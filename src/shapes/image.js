import Base from "./base";

class Image extends Base {
  img = null;
  imgIsLoad = false;

  constructor(img, onload) {
    super();
    this.img = new window.Image();
    this.img.src = img;
    this.img.onload = () => {
      this.imgIsLoad = true;
      this.width = this.img.width;
      this.height = this.img.height;

      onload && onload();
    };
  }

  _draw = (ctx, scene) => {
    ctx.save();
    const x = scene.xc2s(this.x);
    const y = scene.yc2s(this.y);
    const width = scene.lc2s(this.width * this.scale);
    const height = scene.lc2s(this.height * this.scale);
    const translateX = scene.lc2s(this.translateX * this.scale);
    const translateY = scene.lc2s(this.translateY * this.scale);
    // 为了实现旋转，translate必须这么写

    ctx.translate(x, y);
    ctx.rotate((this.rotate * Math.PI) / 180);
    ctx.globalAlpha = this.alpha;

    ctx.drawImage(
      this.img,
      -width / 2 + translateX,
      -height / 2 - translateY,
      width,
      height
    );

    ctx.globalAlpha = 1;
    ctx.restore();
  };

  draw = (ctx, scene) => {
    if (this.imgIsLoad) {
      this._draw(ctx, scene);
    } else {
      this.img.addEventListener("load", () => this._draw(ctx, scene));
    }
  };
}

export default Image;
