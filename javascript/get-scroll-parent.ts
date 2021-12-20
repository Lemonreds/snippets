// https://github.com/ant-design/ant-design-mobile/blob/59dd94001c9131a1c8cb48b0c69a53194641dc17/src/utils/get-scroll-parent.ts
import { canUseDom } from './can-use-dom'

type ScrollElement = HTMLElement | Window

const overflowScrollReg = /scroll|auto/i
const defaultRoot = canUseDom ? window : undefined

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  )
}

// https://github.com/youzan/vant/issues/3823
export function getScrollParent(
  el: Element,
  root: ScrollElement | null | undefined = defaultRoot
) {
  let node = el

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      return node
    }
    node = node.parentNode as Element
  }

  return root
}
