<template>
  <a-card>
    <div>
      <a-space class="operator">
        <a-button @click="addNew"
                  type="primary">新增财务记录</a-button>
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
    <a-modal title="财务记录"
             :visible="visible"
             @ok="handleOk"
             @cancel="handleCancel">
      <AddRecord />
    </a-modal>
  </a-card>
</template>

<script>
import { request } from '@/utils/request'
import StandardTable from '@/components/table/StandardTable'
import AddRecord from '@/pages/finance/AddRecord'
const columns = [
  {
    title: '创建用户',
    dataIndex: 'uId'
  },
  {
    title: '银行',
    dataIndex: 'bankId',
  },
  {
    title: '分类',
    dataIndex: 'cId',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '收入支出类型',
    dataIndex: 'type',
  },
  {
    title: '金额',
    dataIndex: 'money',
  },
  {
    title: '日期时间',
    dataIndex: 'dateTime',
    sorter: true
  },
  {
    title: '经办人',
    dataIndex: 'attnId',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' }
  }
]

const dataSource = []

export default {
  name: 'QueryList',
  components: { StandardTable, AddRecord },
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
      startTime: '2020/01/01',
      endTime: '2022/06/09'
    }
    let that = this
    request('/api/finance/record/page', 'GET', params, {
      headers: {
        'Authorization': '123'
      }
    }).then(function (res) {
      that.dataSource = res.data.data.recordList
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
