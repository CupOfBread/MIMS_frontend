<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="创建用户"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.uId" />
      </a-form-item>
      <a-form-item label="银行"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.bankId" />
      </a-form-item>
      <a-form-item label="分类"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.cId" />
      </a-form-item>
      <a-form-item label="状态"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.status" />
      </a-form-item>
      <a-form-item label="收入支出类型"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.type" />
      </a-form-item>
      <a-form-item label="金额"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.money" />
      </a-form-item>
      <a-form-item label="日期时间"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="dateTime" />
      </a-form-item>
      <a-form-item label="经办人"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.attnId" />
      </a-form-item>
      <a-form-item label="备注"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.remark" />
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