<script lang="ts" setup>
import { ElDialog, ElMessageBox } from 'element-plus'

const commands = useCommandsStore()
const talk = useTalkStore()
const inputText = ref('')
const scrollRef = ref<HTMLElement | null>(null)

function handleClose(done: () => void) {
  ElMessageBox.confirm('确认关闭吗？(您的输入将不会被保存)')
    .then(() => {
      commands.setDialogVisible(false)
      done()
    })
    .catch(() => {
      // catch error
    })
}

async function sendMsg() {
  talk.addTalkItem(inputText.value)
  inputText.value = ''
  await nextTick()
  // 注意这里需要延迟20ms正好可以获取到更新后的dom节点
}
onMounted(() => {
  setInterval(() => {
  // @ts-ignore
    scrollRef.value.scrollTop = scrollRef?.value?.scrollHeight
  }, 3000)
})
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
  <ElDialog v-model="commands.dialogVisible" title="DeepSeek-V1" width="500" z-100 :before-close="handleClose">
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
