<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="产品ID"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.pId" />
      </a-form-item>
      <a-form-item label="供应商ID"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.sId" />
      </a-form-item>
      <a-form-item label="仓库ID"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.wId" />
      </a-form-item>
      <a-form-item label="序列号"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.serialNumber" />
      </a-form-item>
      <a-form-item label="产品数据"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.productData" />
      </a-form-item>
      <a-form-item label="金额"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.amount" />
      </a-form-item>
      <a-form-item label="数量"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.quantity" />
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
  }
}
</script>

<style lang="less" scoped>
</style>