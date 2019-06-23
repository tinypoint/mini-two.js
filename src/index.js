import "./requestAnimationFrame";
import MiniTwo from "./mini-two";
import Image from "./shapes/image";
import Rect from "./shapes/rect";
import Line from "./shapes/line";
import helper from "./helper";

MiniTwo.helper = helper;
MiniTwo.Image = Image;
MiniTwo.Rect = Rect;
MiniTwo.Line = Line;
MiniTwo.createImage = (...args) => {
  return new Image(...args);
};
MiniTwo.createRect = (...args) => {
  return new Rect(...args);
};
MiniTwo.createLine = (...args) => {
  return new Line(...args);
};

export default MiniTwo;
