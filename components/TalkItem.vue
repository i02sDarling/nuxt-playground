<script setup lang="ts">
import { Bubble } from 'ant-design-x-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { Avatar, Flex } from 'ant-design-vue'
import type { CSSProperties } from 'vue'
import { h } from 'vue'

defineOptions({ name: 'AXBubbleAvatarAndPlacementSetup' })

const talk = useTalkStore()

const fooAvatar: CSSProperties = {
  color: '#f56a00',
  backgroundColor: '#fde3cf',
  width: '0.4vh',
  height: '0.4vh',
}

const barAvatar: CSSProperties = {
  color: '#fff',
  backgroundColor: '#87d068',
  width: '0.4vh',
  height: '0.4vh',

}

// const hideAvatar: CSSProperties = {
//   visibility: 'hidden',
// }
</script>

<template>
  <div class="Content">
    <Bubble
      mt-4
      placement="start"
      content="我是 DeepSeek，很高兴见到你！我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧!"
      :avatar="{ icon: h(UserOutlined), style: fooAvatar }"
      :typing="(talk.talkHistory.length === 0 ? ({ step: 2, interval: 50 }) : false)"
    />
    <div
      v-for="(item, id) in talk.talkHistory"
      :key="id"
    >
      <!-- <Bubble
      placement="start"
      content="What a beautiful day!"
      :styles="{ avatar: hideAvatar }"
      :avatar="{}"
    /> -->

      <Bubble
        mt-4
        placement="end"
        :content="item?.userMsg"
        font-700
      >
        <template #avatar>
          <Avatar :icon="h(UserOutlined)" :style="barAvatar" />
        </template>
      </Bubble>
      <Bubble
        mt-4
        placement="start"
        :loading="item?.isloading"
        :content="item?.aiMsg"
        :avatar="{ icon: h(UserOutlined), style: fooAvatar }"
        :typing="(id === talk.talkHistory.length - 1 ? ({ step: 2, interval: 50 }) : false)"
      />
      <!-- <Bubble
      placement="end"
      content="Thank you!"
      :styles="{ avatar: hideAvatar }"
      :avatar="{}"
    /> -->
    </div>
  </div>
</template>
