<template>
  <a-card :body-style="{padding: '24px 32px'}"
          :bordered="false">
    <a-form>
      <a-form-item label="产品图片"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.img" />
      </a-form-item>
      <a-form-item label="产品名称"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item label="产品货号"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.itemNumber" />
      </a-form-item>
      <a-form-item label="产品规格"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.specifications" />
      </a-form-item>
      <a-form-item label="条形码"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input v-model="form.barCode" />
      </a-form-item>
      <a-form-item label="计量单位"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.unit" />
      </a-form-item>
      <a-form-item label="销售价"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.sales" />
      </a-form-item>
      <a-form-item label="进货价"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.purchase" />
      </a-form-item>
      <a-form-item label="备注"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.remarks" />
      </a-form-item>
      <a-form-item label="产品分类id"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.cid" />
      </a-form-item>
      <a-form-item label="创建员工"
                   :labelCol="{span: 7}"
                   :wrapperCol="{span: 10}">
        <a-input-number v-model="form.uid" />
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