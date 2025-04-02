import {} from 'req'
interface TalkItem {
  id: number
  userMsg?: string
  aiMsg?: string
  isloading: boolean
}
export const useTalkStore = defineStore('talk', () => {
  let talkHistory = reactive<TalkItem[]>([])


  function addTalkItem(question: string) {
  if (!question) return
  
  const id = Date.now()
  // 添加用户提问
  talkHistory.push({ 
    id,
    userMsg: question,
    isloading: true,
    aiMsg: undefined // 明确初始化
  })

  // 异步获取回答
  requestAI(question).then(answer => {
    // 找到对应的对话记录更新
    const target = talkHistory.find(item => item.id === id)
    if (target) {
      target.aiMsg = answer!;
      target.isloading = false
    }
  }).catch(error => {
    console.error('API请求失败:', error)
    const target = talkHistory.find(item => item.id === id)
    if (target) {
      target.aiMsg = '请求失败，请重试'
      target.isloading = false
    }
  })
}

 
    


  return {
    talkHistory,
    addTalkItem
  }
})
