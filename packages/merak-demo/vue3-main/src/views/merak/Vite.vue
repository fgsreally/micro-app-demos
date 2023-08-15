<template>
  <merak-app
    name="vite_react"
    :url="url"
    :keep-alive="keepAlive"
    :props="{
      router: $router
    }"
  ></merak-app>
</template>

<script lang="ts" setup>
import { getInstance } from 'merak-vue'
import { MerakApp, $$namespace } from 'merak-vue'
import { watch, onMounted } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  routePath?: string
  keepAlive?: boolean
  afterMount?: () => void
}>()
onMounted(() => {
  getInstance('vite_react')!.lifeCycle.afterMount = RouteChange
})
function RouteChange() {
  $$namespace().emitter.emit('viteApp:router-change', {
    path: props.routePath,
    replace: true
  })
  props.afterMount?.()
}
watch(
  () => props.routePath,
  async () => {
    RouteChange()
  }
)
const url = import.meta.env.VITE_VITE_CHILD_ENTRY
</script>
