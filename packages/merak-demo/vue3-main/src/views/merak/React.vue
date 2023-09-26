<template>
  <merak-app
    name="react"
    :url="url"
    :props="{
      router: $router
    }"
    @afterMount="RouteChange"
  ></merak-app>
</template>

<script lang="ts" setup>
import { MerakApp, $$namespace } from 'merak-vue'
import { watch } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  routePath?: string
  afterMount?: () => void
}>()

function RouteChange() {
  console.log('change', props.routePath)
  $$namespace().emitter.emit('reactApp:router-change', {
    path: props.routePath,
    replace: true
  })
  props.afterMount?.()
}
watch(
  () => props.routePath,
  async () => {
    console.log('routechange')

    RouteChange()
  }
)
const url = import.meta.env.VITE_REACT18_CHILD_ENTRY
</script>
