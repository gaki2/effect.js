console.log("JavaScript connection is successful!");

class App {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.test();
  }

  test() {
    if (this.canvas && this.ctx) console.log("canvas and ctx is created!");
    else console.log("canvas is not created");
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }
}

window.onload = () => {
  new App();
};
