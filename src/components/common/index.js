import ContainerComponent from './Container'
const Container = {
  install: function (Vue) {
    Vue.component('Container', ContainerComponent)
  }
}
export { Container }
