<script lang="ts" setup>
import { ElDialog, ElMessageBox } from 'element-plus'

const commands = useCommandsStore()
const talk = useTalkStore()
const inputText = ref('')
const scrollRef = ref<HTMLElement | null>(null)

function handleClose(done: () => void) {
  ElMessageBox.confirm('确认关闭吗小助手吗？(您的输入将不会被保存)')
    .then(() => {
      commands.setDialogVisible(false)
      done()
    })
    .catch(() => {
      // catch error
    })
}

async function sendMsg() {
  if (inputText.value.trim() === '')return
  talk.addTalkItem(inputText.value)
  inputText.value = ''
}
addCommands(
  {
    id: 'ask_ai',
    title: 'Ask AI for help',
    handler: () => commands.setDialogVisible(true),
    icon: 'i-material-icon-theme-adobe-illustrator',
  },
)
useEventListener('keydown', (e) => {
  switch (e.key) {
    case 'Enter': {
      sendMsg()
      e.preventDefault()
      break
    }
  }
})
watch(() => talk.talkHistory, () => {
  nextTick(() => {
    scrollRef.value?.scrollTo({
      top: scrollRef.value.scrollHeight,
      behavior: 'smooth',
    })
  })
}, { deep: true })
</script>

<template>
  <ElDialog v-model="commands.dialogVisible" title="DeepSeek-V3" width="500" z-100 :before-close="handleClose">
    <div ref="scrollRef" h-40vh w-full overflow-y-auto>
      <TalkItem />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-input
          v-model="inputText"
          autosize w-50vw text-1.5em font-600
          type="textarea"
          placeholder="输入您的内容"
        />
        <el-button type="primary" @click="sendMsg">
          发送
        </el-button>
      </div>
    </template>
  </ElDialog>
</template>
