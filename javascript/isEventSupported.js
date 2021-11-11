/**
 * 判断该浏览器是否支持某个事件
 * @param evtname 如 touchstart
 */
function isEventSupported(evtname) {
  let element = document.createElement('div');
  const eventName = `on${evtname}`;

  let isSupported = eventName in element;

  if (!isSupported) {
    if (!element.setAttribute) {
      element = document.createElement('div');
    }
    if (element.setAttribute && element.removeAttribute) {
      element.setAttribute(eventName, '');
      isSupported = element[eventName] instanceof Function;

      if (typeof element[eventName] !== 'undefined') {
        element[eventName] = undefined;
      }
      element.removeAttribute(eventName);
    }
  }

  element = null!;
  return isSupported;
}
