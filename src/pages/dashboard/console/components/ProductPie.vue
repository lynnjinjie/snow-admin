<script setup lang='ts'>
import type { PropType, Ref } from 'vue'

defineProps({
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '280px',
  },
})

const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

onMounted(() => {
  setOptions({
    tooltip: {
      trigger: 'item',
    },

    series: [
      {
        name: '成交占比',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
        data: [
          { value: 500, name: '电子产品' },
          { value: 310, name: '服装' },
          { value: 274, name: '化妆品' },
          { value: 400, name: '家居' },
        ].sort((a, b) => {
          return a.value - b.value
        }),
        roseType: 'radius',
        animationType: 'scale',
        animationEasing: 'exponentialInOut',
        animationDelay() {
          return Math.random() * 400
        },
      },
    ],
  })
})
</script>

<template>
  <n-card title="成交占比">
    <div ref="chartRef" :style="{ height, width }" />
  </n-card>
</template>
