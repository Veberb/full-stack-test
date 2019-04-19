import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'custom-class',
  duration: 5000,
  position: 'bottom-center',
  className: 'app-toast',
  containerClass: 'app-toast-container'
})

Vue.toasted.register(
  'success',
  msg => {
    const icon = '<i class="fal fa-check fa-fw mr-5"></i>'
    const message = typeof msg === 'string' ? msg : 'Sucesso!'
    return `${icon} ${message}`
  },
  {
    type: 'default'
  }
)

Vue.toasted.register(
  'error',
  msg => {
    const icon = '<i class="fal fa-times fa-fw mr-5"></i>'
    const message =
      typeof msg === 'string' ? msg : 'Algo deu errado, tente novamente.'
    return `${icon} ${message}`
  },
  {
    type: 'error'
  }
)
