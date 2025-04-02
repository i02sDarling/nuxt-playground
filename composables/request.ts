import OpenAI from 'openai'
import { apiKey as API_KEY } from '~/constant/const.local'

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
})

export async function requestAI(question: string) {
  const completion = await openai.chat.completions.create({
    messages: [{
      role: 'system',
      content: question,
    }],
    model: 'deepseek-chat',
    stream: false,
  })
  return completion.choices[0].message.content
}
