export { default as AppHeader } from '../../components/common/AppHeader.vue'
export { default as AppSideMenu } from '../../components/common/AppSideMenu.vue'
export { default as AppTitle } from '../../components/common/AppTitle.vue'
export { default as CalendarMain } from '../../components/main/CalendarMain.vue'
export { default as DragAndDrop } from '../../components/main/DragAndDrop.vue'
export { default as Graph } from '../../components/main/Graph.vue'
export { default as IndexMain } from '../../components/main/IndexMain.vue'
export { default as PickerMain } from '../../components/main/PickerMain.vue'

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
