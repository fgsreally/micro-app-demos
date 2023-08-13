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
import { useRoute } from 'vue-router'
import { nextTick, watch } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  routePath?: string
  afterMount?: () => void
  keepAlive?: boolean
}>()
const route = useRoute()
function RouteChange() {
  $$namespace().emitter.emit('reactApp:router-change', {
    path: props.routePath || route.path.replace('/reactApp', ''),
    replace: true
  })
  props.afterMount?.()
}
watch(
  () => route.path,
  async (n, o) => {
    if (n.includes('react') && o.includes('react')) {
      await nextTick()
      RouteChange()
    }
  }
)
const url = import.meta.env.VITE_REACT18_CHILD_ENTRY
</script>
