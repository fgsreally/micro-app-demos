import { notification } from 'ant-design-vue'
import 'ant-design-vue/es/notification/style/css'
import { Merak } from 'merak-vue'
export const RECEIVE_MESSAGE = 'receiveMessage'

export enum Types {
  success = 'success',
  warn = 'warn',
  error = 'error',
  info = 'info'
}

export interface Message {
  info: string
  type: Types
  from: string
}

export function listenReceiveMessage() {
  Merak.namespace.emitter.on('message', function (message: Message) {
    const { type, info, from } = message
    notification[type]({
      message: `来自【${from}】的消息`,
      description: info
    })
  })
}

export function dispatchReceiveMessageEvent(message: Omit<Message, 'from'>) {
  Merak.namespace.emitter.emit('message', {
    ...message,
    from: '主应用'
  })
}
