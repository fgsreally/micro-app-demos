import 'merak-vue'

declare module 'merak-vue' {
  interface NameSpace {
    emitter: any
  }
  interface Props {
    [key: string]: any
  }
}
