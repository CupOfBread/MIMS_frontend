<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="账户"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item label="用户组"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.userGroup" />
      </a-form-item>
      <a-form-item label="密码"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.password"
                 type="password" />
      </a-form-item>
      <a-form-item label="邮箱"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.email" />
      </a-form-item>
      <a-form-item label="状态"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.status" />
      </a-form-item>
      <a-form-item label="手机"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.phone"
                 type="number" />
      </a-form-item>

      <a-form-item style="margin-top: 24px"
                   :wrapperCol="{span: 10, offset: 7}">

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