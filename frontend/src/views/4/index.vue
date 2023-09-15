<template>
  <div style="padding: 50px 0; text-align: center">
    <el-button @click="handleClick"> click to open the Dialog </el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useModal } from './use-modal'

const { show } = useModal()

const handleClick = async () => {
  const [err, _] = await show() // [null, true] 、['cancel', null]、['close', null]
  if (err) return
  ElMessage.success('即将发起请求')
}
</script>

<style scoped></style>
