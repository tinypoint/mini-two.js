import Base from "./base";

class Line extends Base {
  start = [0, 0];
  end = [0, 0];
  color = "#000";
  lineWidth = 1;
  lineCap = "butt"; // butt 直角不突出 | round 圆角突出 | square 直角突出
  lineJoin = "miter"; //round 圆角相交，半径为线宽 | bevel 平齐相交 | miter 连接处外侧延伸相交于一点
  // TODO  miterLimit= ''
  dash = null;
  lineDashOffset = 0;
  constructor(start, end) {
    super();
    this.start = start;
    this.end = end;
  }

  draw(ctx, scene) {
    const [x1, y1] = scene.xyc2s(this.start);
    const [x2, y2] = scene.xyc2s(this.end);

    ctx.strokeStyle = this.color;
    ctx.lineWidth = scene.lc2s(this.lineWidth);
    ctx.lineCap = this.lineCap;
    ctx.lineJoin = this.lineJoin;
    // TODO  ctx.miterLimit= this.miterLimit
    if (this.dash && this.dash[0] !== undefined && this.dash[1] !== undefined) {
      ctx.setLineDash(this.dash);
      ctx.lineDashOffset = this.lineDashOffset;
    }

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

export default Line;
