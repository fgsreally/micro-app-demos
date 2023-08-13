import mitt from 'mitt'
import { Merak } from 'merak-vue'
export function initMerakEmitter() {
  Merak.namespace.emitter = mitt()
}
