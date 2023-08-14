<template>
  <merak-app
    name="react"
    :url="url"
    :keep-alive="keepAlive"
    :props="{
      router: $router
    }"
    @after-mount="RouteChange"
  ></merak-app>
</template>

<script lang="ts" setup>
import { MerakApp, $$namespace } from 'merak-vue'
import { nextTick, watch } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  routePath?: string
  keepAlive?: boolean
  afterMount?: () => void
}>()

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
