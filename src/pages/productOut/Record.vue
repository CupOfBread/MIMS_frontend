<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row>
            <a-col :md="8"
                   :sm="24">
              <a-form-item label="规则编号"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 1}">
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :md="8"
                   :sm="24">
              <a-form-item label="使用状态"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 1}">
                <a-select placeholder="请选择">
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8"
                   :sm="24">
              <a-form-item label="调用次数"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 1}">
                <a-input-number style="width: 100%"
                                placeholder="请输入" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row v-if="advanced">
            <a-col :md="8"
                   :sm="24">
              <a-form-item label="更新日期"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 1}">
                <a-date-picker style="width: 100%"
                               placeholder="请输入更新日期" />
              </a-form-item>
            </a-col>
            <a-col :md="8"
                   :sm="24">
              <a-form-item label="使用状态"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 1}">
                <a-select placeholder="请选择">
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8"
                   :sm="24">
              <a-form-item label="描述"
                           :labelCol="{span: 5}"
                           :wrapperCol="{span: 18, offset: 1}">
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px;">
          <a-button type="primary">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
          <!-- <a @click="toggleAdvanced"
             style="margin-left: 8px">
            {{advanced ? '收起' : '展开'}}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a> -->
        </span>
      </a-form>
    </div>
    <div>
      <a-space class="operator">
        <a-button @click="addNew"
                  type="primary">新建</a-button>
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
          <a @click="deleteRecord(record.key)">
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
  </a-card>
</template>

<script>
import { request } from '@/utils/request'
import StandardTable from '@/components/table/StandardTable'
const columns = [
  {
    title: '序列号',
    dataIndex: 'serialNumber'
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '产品id',
    dataIndex: 'pId',
  },
  {
    title: '创建用户',
    dataIndex: 'uId',
  },
  {
    title: '仓库id',
    dataIndex: 'wId',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true
  },
  {
    title: '发货日期',
    dataIndex: 'shipTime',
    sorter: true
  },
  {
    title: '折扣',
    dataIndex: 'discounts',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
  },
  {
    title: '金额',
    dataIndex: 'money',
  },
  {
    title: '销售成本',
    dataIndex: 'cost',
  },
  {
    title: '产品数据',
    dataIndex: 'productData',
  },
  {
    title: '快递',
    dataIndex: 'expressId',
  },
  {
    title: '快递单号',
    dataIndex: 'expressNum',
  },
  {
    title: '地址',
    dataIndex: 'expressAddr',
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
  components: { StandardTable },
  data () {
    return {
      advanced: true,
      columns: columns,
      dataSource: [],
      productList: [],
      expressList: [],
      warehouseList: [],
      userList: [],
      selectedRows: [],
      newFromvisible: false,
      confirmLoading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {}
    }
  },
  authorize: {
    deleteRecord: 'delete'
  },
  mounted () {
    let params = {
      current: 1,
      size: 20,
      startTime: '2020/01/01',
      endTime: '2022/06/09'
    }
    let that = this
    request('/api/product/out/record', 'GET', params, {
      headers: {
        'Authorization': '123'
      }
    }).then(function (res) {
      console.log(res.data)
      let recordList = res.data.data.recordList
      that.productList = res.data.data.productList
      that.expressList = res.data.data.expressList
      that.userList = res.data.data.userList
      that.warehouseList = res.data.data.warehouseList
      for (let i = 0; i < recordList.length; i++) {
        let item = recordList[i]
        item.key = item.id
        for (let j = 0; j < that.productList.length; j++) {
          if (item.pId == that.productList[j].id) item.pId = that.productList[j].name
        }
        for (let j = 0; j < that.expressList.length; j++) {
          if (item.sId == that.expressList[j].id) item.sId = that.expressList[j].name
        }
        for (let j = 0; j < that.warehouseList.length; j++) {
          if (item.wId == that.warehouseList[j].id) item.wId = that.warehouseList[j].name
        }
        for (let j = 0; j < that.userList.length; j++) {
          if (item.uId == that.userList[j].id) item.uId = that.userList[j].name
        }
        that.dataSource = recordList
      }
      that.$message.success("列表拉取成功", 3)
    })
  },
  methods: {
    deleteRecord (key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key)
      this.selectedRows = this.selectedRows.filter(item => item.key !== key)
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
