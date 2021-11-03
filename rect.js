const SPEED = 0.2;

export default class Rect {
  constructor() {}

  resizeVertex(stageWidth, stageHeight) {
    this.x1 = stageWidth / 96;
    this.y1 = stageHeight / 70;
    this.x2 = stageWidth / 2 - stageWidth / 96;
    this.y2 = stageHeight / 2 - stageHeight / 70;
    this.center = { X: stageWidth / 4, Y: stageHeight / 4 };
    this.dx = (this.center.X - this.x1) / 30.02;
    this.dy = (this.center.Y - this.y1) / 30.02;
    this.copy = { x1: this.x1, x2: this.x2, y1: this.y1, y2: this.y2 };
  }

  changeVertex(start) {
    // finish time == 100
    // this.x1 = this.copy.x1;
    this.y1 = this.copy.y1 + start * this.dy;
    // this.x2 = this.copy.x2;
    this.y2 = this.copy.y2 - start * this.dy;
  }

  finishVertex(start) {
    this.x1 = this.copy.x1 + start * this.dx;
    this.x2 = this.copy.x2 - start * this.dx;
  }

  animate(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x1, this.y2);
    ctx.fill();
  }
}
