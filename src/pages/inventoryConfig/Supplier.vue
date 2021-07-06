<template>
  <a-card>
    <div>
      <a-space class="operator">
        <a-button @click="addNew"
                  type="primary">新建供应商</a-button>
        <a-button>批量操作</a-button>
        <a-dropdown>
          <a-menu @click="handleMenuClick"
                  slot="overlay">
            <a-menu-item key="delete">删除</a-menu-item>
            <a-menu-item key="audit">审批</a-menu-item>
          </a-menu>
          <a-button>
            更多操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </a-space>
      <standard-table :columns="columns"
                      :dataSource="dataSource"
                      :selectedRows.sync="selectedRows"
                      @clear="onClear"
                      @change="onChange"
                      @selectedRowChange="onSelectChange">
        <div slot="description"
             slot-scope="{text}">
          {{text}}
        </div>
        <div slot="action"
             slot-scope="{record}">
          <a style="margin-right: 8px">
            <a-icon type="edit" />编辑
          </a>
          <a @click="deleteRecord(record.id)">
            <a-icon type="delete" />删除
          </a>
          <router-link :to="`/list/query/detail/${record.key}`">详情</router-link>
        </div>
        <template slot="statusTitle">
          <a-icon @click.native="onStatusTitleClick"
                  type="info-circle" />
        </template>
      </standard-table>
    </div>
    <a-modal title="供应商"
             :visible="visible"
             @ok="handleOk"
             @cancel="handleCancel">
      <AddSupplier ref="addSupplier" />
    </a-modal>
  </a-card>
</template>

<script>
import { request } from '@/utils/request'
import StandardTable from '@/components/table/StandardTable'
import AddSupplier from '@/pages/inventoryConfig/AddSupplier'
const columns = [
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '联系人',
    dataIndex: 'linkman',
  },
  {
    title: '手机',
    dataIndex: 'phone',
  },
  {
    title: '邮编',
    dataIndex: 'pc',
  },
  {
    title: '传真',
    dataIndex: 'fax',
  },
  {
    title: '电话',
    dataIndex: 'tel',
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '网址',
    dataIndex: 'website',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    sorter: true
  },
  {
    title: '更新人id',
    dataIndex: 'uId',
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' }
  }
]

const dataSource = []

for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    no: 'NO ' + i,
    description: '这是一段描述',
    callNo: Math.floor(Math.random() * 1000),
    status: Math.floor(Math.random() * 10) % 4,
    updatedAt: '2018-07-26'
  })
}

export default {
  name: 'QueryList',
  components: { StandardTable, AddSupplier },
  data () {
    return {
      advanced: true,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      visible: false
    }
  },

  mounted () {
    let params = {
      current: 1,
      size: 20,
    }
    let that = this
    request('/api/supplier/page', 'GET', params, {
      headers: {
        'Authorization': '123'
      }
    }).then(function (res) {
      console.log(res.data)
      let supplierList = res.data.data
      that.dataSource = supplierList
      that.$message.success("列表拉取成功", 3)
    })
  },
  methods: {
    deleteRecord (key) {
      this.dataSource = this.dataSource.filter(item => item.id !== key)
      this.selectedRows = this.selectedRows.filter(item => item.id !== key)
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    remove () {
      this.dataSource = this.dataSource.filter(item => this.selectedRows.findIndex(row => row.key === item.key) === -1)
      this.selectedRows = []
    },
    onClear () {
      this.$message.info('您清空了勾选的所有行')
    },
    onStatusTitleClick () {
      this.$message.info('你点击了状态栏表头')
    },
    onChange () {
      this.$message.info('表格状态改变了')
    },
    onSelectChange () {
      // this.$message.info('选中行改变了')
    },
    addNew () {
      this.visible = true
    },
    handleMenuClick (e) {
      if (e.key === 'delete') {
        this.remove()
      }
    },
    handleOk () {
      let data = this.$refs.addSupplier.getVal()
      this.dataSource.push(data)
    },
    handleCancel () {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  margin-bottom: 54px;
}
.fold {
  width: calc(100% - 216px);
  display: inline-block;
}
.operator {
  margin-bottom: 18px;
}
@media screen and (max-width: 900px) {
  .fold {
    width: 100%;
  }
}
</style>
