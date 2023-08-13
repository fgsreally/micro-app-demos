/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VITE_CHILD_ENTRY: string
  readonly VITE_VUE2_CHILD_ENTRY: string
  readonly VITE_REACT18_CHILD_ENTRY: string

  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
