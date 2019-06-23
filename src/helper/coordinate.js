import Base from "../shapes/base";
import Line from "../shapes/line";

class Coordinate extends Base {
  miniTwoInstance;
  xCord;
  yCord;
  constructor(miniTwoInstance) {
    super();
    this.miniTwoInstance = miniTwoInstance;
    this.xCord = new Line();
    this.yCord = new Line();
  }

  draw(ctx, scene) {
    const miniTwoInstance = this.miniTwoInstance;
    const xStart = [-miniTwoInstance.width / 2, 0];
    const xEnd = [miniTwoInstance.width / 2, 0];
    const yStart = [0, -miniTwoInstance.height / 2];
    const yEnd = [0, miniTwoInstance.height / 2];
    this.xCord.start = xStart;
    this.xCord.end = xEnd;
    this.yCord.start = yStart;
    this.yCord.end = yEnd;
    this.xCord.draw(ctx, scene);
    this.yCord.draw(ctx, scene);
  }
}

export default Coordinate;
