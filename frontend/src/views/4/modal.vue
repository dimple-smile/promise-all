<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" @close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button type="primary" @click="handleConfirm"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElDialog, ElButton } from 'element-plus'
import { computed } from 'vue'

const props = defineProps<{
  visible: any
  onConfirm: any
  onCancel: any
  onClose: any
}>()

const dialogVisible = computed(() => props.visible.value)
const handleConfirm = () => {
  props.onConfirm()
}
const handleCancel = () => {
  props.onCancel()
}
const handleClose = ()=>{
  props.onClose()
}
</script>

<style scoped></style>
