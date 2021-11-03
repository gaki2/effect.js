import Rect from "./rect.js";

class App {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    window.addEventListener("resize", this.resize.bind(this));

    this.rect = new Rect();
    this.resize();
    window.requestAnimationFrame(this.animate.bind(this));
    this.effect();
    this.test();
  }

  test() {
    if (this.canvas && this.ctx) console.log("canvas and ctx is created!");
    else console.log("canvas is not created");
    if (this.stageWidth) console.log(this.stageWidth);
  }

  effect() {
    const rect = this.rect;
    setTimeout(function timeout() {
      let time = 0;
      const interval = setInterval(function () {
        console.log(time);
        if (time == 30) {
          clearInterval(interval);
          console.log("change finished!");
        }
        rect.changeVertex(time);
        time++;
      }, 6);
    }, 3000);
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.rect.resizeVertex(this.stageWidth, this.stageHeight);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.rect.animate(this.ctx);
  }
}

window.onload = () => {
  new App();
};
