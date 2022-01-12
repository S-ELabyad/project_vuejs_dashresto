export { default as AddMenu } from '../..\\components\\addMenu.vue'
export { default as Bank } from '../..\\components\\bank.vue'
export { default as CardDash } from '../..\\components\\CardDash.vue'
export { default as Dash21 } from '../..\\components\\dash21.vue'
export { default as Drawer } from '../..\\components\\drawer.vue'
export { default as Order } from '../..\\components\\order.vue'
export { default as Test } from '../..\\components\\test.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
