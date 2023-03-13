<template>
  <div>
    If the length of js exceeds the limit in onMounted, it may be that I have less package or configuration. Please see
    what happened. Thank you very much!
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const pageData = reactive({
  info_task_pro_more_long: {
    info_task_pro_more_long1111: [],
  },
});

onMounted(() => {
  pageData.info_task_pro_more_long.info_task_pro_more_long1111.map(i => pageData.info_task_pro_more_long.info_task_pro_more_long1111.filter(e => e.i === 3));
});
</script>

<style lang="less" scoped></style>
