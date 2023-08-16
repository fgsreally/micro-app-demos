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
import { MerakApp, $$namespace, getInstance } from 'merak-vue'
import { watch, onMounted } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  routePath?: string
  keepAlive?: boolean
  afterMount?: () => void
}>()

function RouteChange() {
  console.log(props.routePath)
  $$namespace().emitter.emit('vue2App:router-change', {
    path: props.routePath,
    replace: true
  })
  props.afterMount?.()
}

watch(
  () => props.routePath,
  async () => {
    console.log('watch')
    RouteChange()
  }
)
const url = import.meta.env.VITE_VUE2_CHILD_ENTRY
</script>
