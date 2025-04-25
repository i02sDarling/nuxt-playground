

interface TalkItem {
  id: number
  userMsg?: string
  aiMsg?: string
  isloading: boolean
}
export const useTalkStore = defineStore('talk', () => {
  const talkHistory = reactive<TalkItem[]>([])
  function addTalkItem(question: string) {
    if (!question)
      return
    const id = Date.now() // 提前生成唯一ID
    talkHistory.push({ id, userMsg: question,isloading: true, aiMsg: '',
    })
    requestAIStream(question, (chunk) => {
      const target = talkHistory.find(item => item.id === id)
      if (target) { target.aiMsg += chunk }
    }).finally(() => {
      const target = talkHistory.find(item => item.id === id)
      if (target) { target.isloading = false }
    })
  }
  return { talkHistory,addTalkItem}
})
