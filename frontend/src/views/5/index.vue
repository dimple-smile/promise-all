<template>
  <div style="padding: 100px">
    <el-button @click="showMessage">弹出消息</el-button>

    <h1>-</h1>
    <el-button @click="showPromiseMessage1">弹出消息 - 1（promise）</el-button>
    <el-button @click="showPromiseMessage2">弹出消息 - 2（promise）</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElMessage, type MessageParams } from 'element-plus'

const isMessageOpen = ref(false)
const myMessage1 = async (payload: MessageParams) => {
  let options: any = {}
  if (typeof payload === 'string') options.message = payload
  else options = payload

  if (isMessageOpen.value) return

  await new Promise((resolve) => {
    isMessageOpen.value = true
    ElMessage({
      ...options,
      onClose: () => {
        isMessageOpen.value = false
        resolve('close')
      },
    })
  })
}

const messageQueue = ref<boolean[]>([])
const myMessage2 = async (payload: MessageParams) => {
  let options: any = {}
  if (typeof payload === 'string') options.message = payload
  else options = payload

  let index = messageQueue.value.length
  messageQueue.value[index] = true

  if (index > 0) await new Promise((resolve) => watch(() => messageQueue.value[index - 1], resolve))

  return new Promise((resolve) => {
    ElMessage({
      ...options,
      onClose: () => {
        messageQueue.value[index] = false
        resolve('close')
      },
    })
  })
}

const showMessage = () => {
  ElMessage('xxx')
}

const showPromiseMessage1 = () => {
  myMessage1('xxx')
}

const showPromiseMessage2 = () => {
  myMessage2('xxx - 1')
  myMessage2('xxx - 2')
  myMessage2('xxx - 3')
}
</script>

<style scoped></style>
