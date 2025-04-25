import OpenAI from 'openai'
import { apiKey as API_KEY } from '~/constant/const.local'

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
})
export async function requestAIStream(question: string, onChunk: (chunk: string) => void) {
  const completion = await openai.chat.completions.create({
    messages: [{
      role: 'system',
      content: question,
    }],
    model: 'deepseek-chat',
    stream: true, // 启用流式
  })

  // 逐块处理响应
  for await (const chunk of completion) {
    const content = chunk.choices[0]?.delta?.content || ''
    onChunk(content)
  }
}
