<template>
  <merak-app
    name="vue_cli"
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
  $$namespace().emitter.emit('vue2App:router-change', {
    path: props.routePath || route.path.replace('/vue2App', ''),
    replace: true
  })
  props.afterMount?.()
}
watch(
  () => route.path,
  async (n, o) => {
    if (n.includes('vue2') && o.includes('vue2')) {
      await nextTick()
      RouteChange()
    }
  }
)
const url = import.meta.env.VITE_VUE2_CHILD_ENTRY
</script>
