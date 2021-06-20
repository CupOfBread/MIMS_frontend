<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="计量单位名称"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.name" />
      </a-form-item>

      <a-form-item style="margin-top: 24px"
                   :wrapperCol="{span: 10, offset: 7}">
        <a-button type="primary">提交</a-button>
        <a-button style="margin-left: 8px">重置</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style lang="less" scoped>
</style>