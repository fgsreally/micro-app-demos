<template>
  <merak-app
    name="react"
    :url="url"
    :keep-alive="keepAlive"
    :props="{
      router: $router
    }"
  ></merak-app>
</template>

<script lang="ts" setup>
import { MerakApp, $$namespace, getInstance } from 'merak-vue'
import { onMounted, watch } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  routePath?: string
  keepAlive?: boolean
  afterMount?: () => void
}>()
onMounted(() => {
  getInstance('react')!.lifeCycle.afterMount = RouteChange
})
function RouteChange() {
  $$namespace().emitter.emit('reactApp:router-change', {
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
const url = import.meta.env.VITE_REACT18_CHILD_ENTRY
</script>
