<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="分类名称"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.name" />
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
  },
  methods: {
    getVal () {
      return this.form
    }
  }
}
</script>

<style lang="less" scoped>
</style>