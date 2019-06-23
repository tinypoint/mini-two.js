import Base from "./base";

class Rect extends Base {
  width;
  height;
  borderWidth = 1;
  borderColor = "#000";
  color = "rgba(0,0,0,0)";
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  draw = (ctx, scene) => {
    const width = scene.lc2s(this.width);
    const height = scene.lc2s(this.height);
    const [x, y] = scene.xyc2s([
      this.x - this.width / 2,
      this.y + this.width / 2
    ]);

    ctx.strokeStyle = this.borderColor;
    ctx.fillStyle = this.color;
    ctx.lineWidth = scene.lc2s(this.borderWidth);

    ctx.moveTo(x, y);

    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
  };
}

export default Rect;
