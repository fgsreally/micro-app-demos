<template>
  <merak-app
    name="vue_cli"
    :url="url"
    keep-alive
    :props="{
      router: $router
    }"
    @after-mount="RouteChange"
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
  $$namespace().emitter.emit('vue2App:router-change', {
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
const url = import.meta.env.VITE_VUE2_CHILD_ENTRY
</script>
