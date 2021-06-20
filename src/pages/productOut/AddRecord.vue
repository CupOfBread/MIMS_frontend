<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="序列号"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.serialNumber" />
      </a-form-item>
      <a-form-item label="状态"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.status" />
      </a-form-item>
      <a-form-item label="产品id"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.pId" />
      </a-form-item>
      <a-form-item label="创建用户"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.uId" />
      </a-form-item>
      <a-form-item label="仓库id"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.wId" />
      </a-form-item>
      <a-form-item label="发货日期"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.shipTime" />
      </a-form-item>
      <a-form-item label="折扣"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.discounts" />
      </a-form-item>
      <a-form-item label="数量"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.quantity" />
      </a-form-item>
      <a-form-item label="金额"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.amount" />
      </a-form-item>
      <a-form-item label="销售成本"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.cost" />
      </a-form-item>
      <a-form-item label="产品数据"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.productData" />
      </a-form-item>
      <a-form-item label="快递"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.expressId" />
      </a-form-item>
      <a-form-item label="快递单号"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.expressNum" />
      </a-form-item>
      <a-form-item label="地址"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.expressAddr" />
      </a-form-item>
      <a-form-item label="备注"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.remark" />
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