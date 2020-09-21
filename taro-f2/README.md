### main:

f2文档：   https://f2.antv.vision/zh/docs/api/f2
taro-f2:      https://npm.taobao.org/package/taro-f2/v/2.1.2 


###  usage: 

`javascript
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import F2 from "@antv/f2";
import F2Canvas from "../../components/F2/F2canvas";
import "./index.less";

export default class Index extends Component {
  initChart(canvas, width, height) {
    const chart = new F2.Chart({ el: canvas, width, height });
    const data = [
      { value: 63.4, city: "New York", date: "2011-10-01" },
      { value: 62.7, city: "Alaska", date: "2011-10-01" },
      { value: 72.2, city: "Austin", date: "2011-10-01" },
      { value: 58, city: "New York", date: "2011-10-02" },
      { value: 59.9, city: "Alaska", date: "2011-10-02" },
      { value: 67.7, city: "Austin", date: "2011-10-02" },
      { value: 53.3, city: "New York", date: "2011-10-03" },
      { value: 59.1, city: "Alaska", date: "2011-10-03" },
      { value: 69.4, city: "Austin", date: "2011-10-03" }
    ];
    chart.source(data, {
      date: {
        range: [0, 1],
        type: "timeCat",
        mask: "MM-DD"
      },
      value: {
        max: 300,
        tickCount: 4
      }
    });
    chart
      .area()
      .position("date*value")
      .color("city")
      .adjust("stack");
    chart
      .line()
      .position("date*value")
      .color("city")
      .adjust("stack");
    chart.render();
    // 注意：需要把chart return 出来
    return chart;
  }

  render() {
    // 注意：full-screen 样式需要指定高度和宽度，否则不能正常展示
    return (
      <View className="full-screen">
        <F2Canvas onCanvasInit={this.initChart.bind(this)}></F2Canvas>
      </View>
    );
  }
}
`