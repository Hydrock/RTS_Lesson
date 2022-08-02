export function Thing(width, height, position) {
  this.context = Object.prototype.context;
  this.width = width || 1;
  this.height = height || 1;
  this.position = {
    x: position.x || 0,
    y: position.y || 0
  };
}

Thing.prototype.draw = function (color = "red") {
  const context = this.context;
  context.fillStyle = color;
  context.fillRect(this.position.x, this.position.y, this.width, this.height);
};

// const obj = new Thing(100, 100, { x: 100, y: 100 });

// obj.draw();
