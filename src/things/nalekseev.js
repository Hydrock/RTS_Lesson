import { Thing } from "../thing.js";

Thing.prototype.pos = function (x = 0, y = 0) {
  this.x = x;
  this.y = y;
};

Thing.prototype.animate = function (color = "red") {
  const update = () => {
    // this.pos();
    this.draw(color);
    this.frame = requestAnimationFrame(update);
  };

  this.frame = requestAnimationFrame(update);
};

const o = new Thing(70, 80, { x: 200, y: 320 });

o.animate("violet");
