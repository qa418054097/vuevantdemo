import ContainerComponent from './Container'
import RefreshComponent from './Refresh'

const Container = {
  install: function (Vue) {
    Vue.component('Container', ContainerComponent)
    Vue.component('Refresh', RefreshComponent)
  }
}
export { Container }
