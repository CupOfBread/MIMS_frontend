<template>
  <div class="new-page"
       :style="`min-height: ${pageMinHeight}px`">
    <h1>演示页面</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'NewPage',
  data () {
    return {
      desc: '这是一个演示页面'
    }
  },
  computed: {
    ...mapState('setting', ['pageMinHeight']),
  }
}
</script>
<style scoped lang="less">
.new-page {
  height: 100%;
  background-color: @base-bg-color;
  text-align: center;
  padding: 200px 0 0 0;
  margin-top: -24px;
  h1 {
    font-size: 48px;
  }
}
</style>