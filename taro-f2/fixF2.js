import Taro from "@tarojs/taro";
/**
  F2默认运行于浏览器端，小程序端宿主环境不同，所以需要对DOM做兼容。
 */
function fixF2(F2) {
  if (!F2 || F2.TaroFixed) {
    return F2;
  }
  if (process.env.TARO_ENV !== "h5") {
    function strLen(str) {
      let len = 0;
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
          len++;
        } else {
          len += 2;
        }
      }
      return len;
    }
    // 兼容 canvas 绘制 text 时的换行
    F2.Util.measureText = function(text, font, ctx) {
      if (!ctx) {
        let fontSize = 12;
        if (font) {
          fontSize = parseInt(font.split(" ")[3], 10);
        }
        fontSize /= 2;
        return {
          width: strLen(text) * fontSize
        };
      }
      ctx.font = font || "12px sans-serif";
      return ctx.measureText(text);
    };
    // 兼容事件监听
    F2.Util.addEventListener = function(source, type, listener) {
      source.removeListener && source.addListener(type, listener);
    };
    // 兼容DOM样式获取
    F2.Util.getStyle = function(el, property) {
      return el.currentStyle ? el.currentStyle[property] : undefined;
    };
    // 兼容事件监听
    F2.Util.removeEventListener = function(source, type, listener) {
      source.removeListener && source.removeListener(type, listener);
    };
    // 兼容事件创建
    F2.Util.createEvent = function(event, chart) {
      const type = event.type;
      let x = 0;
      let y = 0;
      const touches = event.touches;
      if (touches && touches.length > 0) {
        x = touches[0].x;
        y = touches[0].y;
      }
      return {
        type,
        chart,
        x,
        y
      };
    };
    /**
      像素比设置
     */
    if (Taro && Taro.getSystemInfoSync) {
      const systeamInfo = Taro.getSystemInfoSync();
      if (systeamInfo && systeamInfo.pixelRatio) {
        F2.Global.pixelRatio = systeamInfo.pixelRatio;
      }
    }
  } else {
    F2.Global.pixelRatio = window.devicePixelRatio;
  }

  F2.TaroFixed = true;
  return F2;
}

export default fixF2;
