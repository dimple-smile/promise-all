import { ref, h, render } from 'vue'
import Modal from './modal.vue'

type Res = ['cancel' | 'close' | null, null | true]

const useModal = () => {
  const dialogVisible = ref(false)

  const show = (): Promise<Res> => {
    dialogVisible.value = true

    return new Promise((resolve) => {
      const handle = (result: Res) => {
        dialogVisible.value = false
        resolve(result)
      }
      const vnode = h(Modal, {
        visible: dialogVisible,
        onConfirm: () => handle([null, true]),
        onCancel: () => handle(['cancel', null]),
        onClose: () => handle(['close', null]),
      })
      render(vnode, document.body)
    })
  }

  return { show }
}

export { useModal }
