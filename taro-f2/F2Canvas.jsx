import Taro, { Component } from "@tarojs/taro";
import { Canvas } from "@tarojs/components";
import PropTypes from "prop-types";
import Renderer from "./Renderer";
import fixF2 from "./fixF2";
import "./F2Canvas.less";

function randomStr(long) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const maxPos = chars.length;
  let string = "";
  for (let i = 0; i < long; i += 1) {
    string += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return string;
}

class F2Canvas extends Component {
  static propTypes = {
    onInit: PropTypes.func
  };

  static defaultProps = {
    onInit: (/** { canvas, width, height,context } **/) => {}
  };

  constructor(props) {
    super(props);
    this.id = "f2-canvas-" + randomStr(8);
    this.canvas = null;
    this.state = {
      width: "100%",
      height: "100%;"
    };
  }

  componentWillMount() {
    fixF2();
    if (process.env.TARO_ENV !== "h5") {
      setTimeout(() => {
        const query = Taro.createSelectorQuery().in(this.$scope);
        query
          .select("#" + this.id)
          .boundingClientRect()
          .exec(res => {
            const ctx = Taro.createCanvasContext(this.id, this.$scope);
            const canvasWidth = res[0].width;
            const canvasHeight = res[0].height;
            const canvas = new Renderer(ctx, process.env.TARO_ENV);
            this.canvas = canvas;
            this.props.onInit(canvas, canvasWidth, canvasHeight, this.$scope);
          });
      }, 1);
    }
  }

  touchStart(e) {
    if (this.canvas) {
      this.canvas.emitEvent("touchstart", [e]);
    }
  }
  touchMove(e) {
    if (this.canvas) {
      this.canvas.emitEvent("touchmove", [e]);
    }
  }
  touchEnd(e) {
    if (this.canvas) {
      this.canvas.emitEvent("touchend", [e]);
    }
  }
  press(e) {
    if (this.canvas) {
      this.canvas.emitEvent("press", [e]);
    }
  }

  htmlCanvas(canvas) {
    if (!canvas) return;
    setTimeout(() => {
      this.canvas = canvas;
      this.props.onInit(
        canvas,
        canvas.offsetWidth,
        canvas.offsetHeight,
        this.$scope
      );
    }, 1);
  }

  render() {
    const id = this.id;
    const rootClass = "f2-canvas";
    if (process.env.TARO_ENV === "h5") {
      return (
        <canvas
          ref={canvas => this.htmlCanvas(canvas)}
          style={{ width: this.state.width, height: this.state.height }}
          className={"f2-canvas " + id}
        ></canvas>
      );
    }
    if (process.env.TARO_ENV !== "h5") {
      return (
        <Canvas
          className={rootClass}
          style={"width: " + this.state.width + "; height:" + this.state.height}
          canvasId={id}
          id={id}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
          onLongPress={this.press}
        />
      );
    }
  }
}

export default F2Canvas;
