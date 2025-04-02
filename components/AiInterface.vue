<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'

const commands = useCommandsStore()
const dialogVisible = ref(true)

function handleClose(done: () => void) {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      commands.setDialogVisible(false)
      done()
    })
    .catch(() => {
      // catch error
    })
}

addCommands(
  {
    id: 'ask_ai',
    title: 'Ask AI for help',
    handler: () => commands.setDialogVisible(true),
    icon: 'i-material-icon-theme-adobe-illustrator',
  },
)
</script>

<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="500" z-100 :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
