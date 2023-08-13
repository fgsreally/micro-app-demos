<template>
  <merak-app
    name="vite_react"
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
import { useRoute } from 'vue-router'
import { nextTick, watch } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  routePath?: string
  keepAlive?: boolean
  afterMount?: () => void
}>()
const route = useRoute()
function RouteChange() {
  $$namespace().emitter.emit('viteApp:router-change', {
    path: props.routePath || route.path.replace('/viteApp', ''),
    replace: true
  })
  props.afterMount?.()
}
watch(
  () => route.path,
  async (n, o) => {
    if (n.includes('vite') && o.includes('vite')) {
      await nextTick()

      RouteChange()
    }
  }
)
const url = import.meta.env.VITE_VITE_CHILD_ENTRY
</script>
