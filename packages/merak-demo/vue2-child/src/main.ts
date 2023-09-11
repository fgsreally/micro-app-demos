import { $done } from 'merak-helper'
import { $onDestroy } from 'merak-helper'
import '@/styles/index.less'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import { useUserStore } from './stores/user'
import { isMerak, $namespace, $onExec } from 'merak-helper'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

function setup() {
  return new Vue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    router,
    pinia: createPinia(),
    render: (h) => h(App),
  }).$mount('#app')
}

//@ts-expect-error webpack public path
__webpack_public_path__ = (window.__merak_url__ || '') + '/'

let instance: Vue | undefined

const changeUser = (e: any) => {
  const { setUser } = useUserStore()
  setUser(e.user)
}

$onExec(() => {
  instance = setup()
  if (isMerak()) {
    $namespace().emitter.on('changeUser', changeUser)
    $namespace().emitter.on('vue2App:router-change', (n: any) => {
      console.log(n.path)
      router.replace(n.path).catch(() => true)
    })
  }
})

$onDestroy(() => {
  instance?.$destroy()
  document.body.innerHTML = ''
  const el = document.createElement('div')
  el.id = 'app'
  document.body.appendChild(el)
  if (isMerak()) {
    $namespace().emitter.off('changeUser', changeUser)
    $namespace().emitter.off('vue2App:router-change')
  }
  $done()
})
