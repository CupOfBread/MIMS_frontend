import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          name: '仪表盘',
          meta: {
            icon: 'dashboard'
          },
          component: BlankView,
          children: [
            {
              path: 'workplace',
              name: '工作台',
              meta: {
                page: {
                  closable: false
                }
              },
              component: () => import('@/pages/dashboard/workplace'),
            },
            {
              path: 'analysis',
              name: '分析页',
              component: () => import('@/pages/dashboard/analysis'),
            }
          ]
        },
        {
          path: 'product_in',
          name: '入库管理',
          meta: {
            icon: 'codepen'
          },
          component: PageView,
          children: [
            {
              path: 'add',
              name: '新增入库',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/productIn/AddRecord'),
            },
            {
              path: 'record',
              name: '入库查询',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/productIn/Record'),
            }
          ]
        },
        {
          path: 'product_out',
          name: '出库管理',
          meta: {
            icon: 'shop'
          },
          component: PageView,
          children: [
            {
              path: 'add',
              name: '新增出库',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/productOut/AddRecord'),
            },
            {
              path: 'record',
              name: '出库查询',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/productOut/Record'),
            }
          ]
        },
        {
          path: 'inventory',
          name: '库存管理',
          meta: {
            icon: 'file-zip'
          },
          component: BlankView,
          children: [
            {
              path: 'inventory',
              name: '库存查询',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/inventoryManage/Inventory'),
            },
            {
              path: 'wt',
              name: '调拨查询',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/inventoryManage/WarehouseTransfer'),
            }
          ]
        },
        {
          path: 'inventory_config',
          name: '库存配置',
          meta: {
            icon: 'home'
          },
          component: BlankView,
          children: [
            {
              path: 'supplier',
              name: '供应商',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/inventoryConfig/Supplier'),
            },
            {
              path: 'warehosue',
              name: '仓库管理',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/inventoryConfig/Warehouse'),
            },
            {
              path: 'unit',
              name: '计量单位',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/inventoryConfig/Unit'),
            },
            {
              path: 'express',
              name: '快递管理',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/inventoryConfig/Express'),
            }
          ]
        },
        {
          path: 'product',
          name: '产品管理',
          meta: {
            icon: 'reconciliation'
          },
          component: BlankView,
          children: [
            {
              path: 'category',
              name: '产品分类',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/product/Category'),
            },
            {
              path: 'product',
              name: '产品管理',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/product/Product'),
            }
          ]
        },
        {
          path: 'finance',
          name: '财务管理',
          meta: {
            icon: 'wallet'
          },
          component: BlankView,
          children: [
            {
              path: 'record',
              name: '财务查询',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/finance/Record'),
            },
            {
              path: 'category',
              name: '财务分类',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/finance/Category'),
            },
            {
              path: 'bank',
              name: '银行管理',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/finance/Bank'),
            }
          ]
        },
        {
          path: 'user',
          name: '用户管理',
          meta: {
            icon: 'usergroup-add'
          },
          component: BlankView,
          children: [
            {
              path: 'user',
              name: '用户列表',
              meta: {
                page: {
                }
              },
              component: () => import('@/pages/user/User'),
            }
          ]
        },
        {
          name: 'Vue Antd Admin 使用文档',
          path: 'document_vaa',
          meta: {
            icon: 'file-word',
            link: 'https://iczer.gitee.io/vue-antd-admin-docs/'
          }
        },
        {
          name: 'Ant Design of Vue 使用文档',
          path: 'document_adv',
          meta: {
            icon: 'file-word',
            link: 'https://www.antdv.com/docs/vue/introduce-cn/'
          }
        }
        // {
        //   path: 'form',
        //   name: '表单页',
        //   meta: {
        //     icon: 'form',
        //     page: {
        //       cacheAble: false
        //     }
        //   },
        //   component: PageView,
        //   children: [
        //     {
        //       path: 'basic',
        //       name: '基础表单',
        //       component: () => import('@/pages/form/basic'),
        //     },
        //     {
        //       path: 'step',
        //       name: '分步表单',
        //       component: () => import('@/pages/form/step'),
        //     },
        //     {
        //       path: 'advance',
        //       name: '高级表单',
        //       component: () => import('@/pages/form/advance'),
        //     }
        //   ]
        // },
        // {
        //   path: 'list',
        //   name: '列表页',
        //   meta: {
        //     icon: 'table'
        //   },
        //   component: PageView,
        //   children: [
        //     {
        //       path: 'query',
        //       name: '查询表格',
        //       meta: {
        //         authority: 'queryForm',
        //       },
        //       component: () => import('@/pages/list/QueryList'),
        //     },
        //     {
        //       path: 'query/detail/:id',
        //       name: '查询详情',
        //       meta: {
        //         highlight: '/list/query',
        //         invisible: true
        //       },
        //       component: () => import('@/pages/Demo')
        //     },
        //     {
        //       path: 'primary',
        //       name: '标准列表',
        //       component: () => import('@/pages/list/StandardList'),
        //     },
        //     {
        //       path: 'card',
        //       name: '卡片列表',
        //       component: () => import('@/pages/list/CardList'),
        //     },
        //     {
        //       path: 'search',
        //       name: '搜索列表',
        //       component: () => import('@/pages/list/search/SearchLayout'),
        //       children: [
        //         {
        //           path: 'article',
        //           name: '文章',
        //           component: () => import('@/pages/list/search/ArticleList'),
        //         },
        //         {
        //           path: 'application',
        //           name: '应用',
        //           component: () => import('@/pages/list/search/ApplicationList'),
        //         },
        //         {
        //           path: 'project',
        //           name: '项目',
        //           component: () => import('@/pages/list/search/ProjectList'),
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   path: 'details',
        //   name: '详情页',
        //   meta: {
        //     icon: 'profile'
        //   },
        //   component: BlankView,
        //   children: [
        //     {
        //       path: 'basic',
        //       name: '基础详情页',
        //       component: () => import('@/pages/detail/BasicDetail')
        //     },
        //     {
        //       path: 'advance',
        //       name: '高级详情页',
        //       component: () => import('@/pages/detail/AdvancedDetail')
        //     }
        //   ]
        // },
        // {
        //   path: 'result',
        //   name: '结果页',
        //   meta: {
        //     icon: 'check-circle-o',
        //   },
        //   component: PageView,
        //   children: [
        //     {
        //       path: 'success',
        //       name: '成功',
        //       component: () => import('@/pages/result/Success')
        //     },
        //     {
        //       path: 'error',
        //       name: '失败',
        //       component: () => import('@/pages/result/Error')
        //     }
        //   ]
        // },
        // {
        //   path: 'exception',
        //   name: '异常页',
        //   meta: {
        //     icon: 'warning',
        //   },
        //   component: BlankView,
        //   children: [
        //     {
        //       path: '404',
        //       name: 'Exp404',
        //       component: () => import('@/pages/exception/404')
        //     },
        //     {
        //       path: '403',
        //       name: 'Exp403',
        //       component: () => import('@/pages/exception/403')
        //     },
        //     {
        //       path: '500',
        //       name: 'Exp500',
        //       component: () => import('@/pages/exception/500')
        //     }
        //   ]
        // },
        // {
        //   path: 'components',
        //   name: '内置组件',
        //   meta: {
        //     icon: 'appstore-o'
        //   },
        //   component: PageView,
        //   children: [
        //     {
        //       path: 'taskCard',
        //       name: '任务卡片',
        //       component: () => import('@/pages/components/TaskCard')
        //     },
        //     {
        //       path: 'palette',
        //       name: '颜色复选框',
        //       component: () => import('@/pages/components/Palette')
        //     },
        //     {
        //       path: 'table',
        //       name: '高级表格',
        //       component: () => import('@/pages/components/table')
        //     }
        //   ]
        // },
        // {
        //   name: '验权表单',
        //   path: 'auth/form',
        //   meta: {
        //     icon: 'file-excel',
        //     authority: {
        //       permission: 'form'
        //     }
        //   },
        //   component: () => import('@/pages/form/basic')
        // },
        // {
        //   name: '带参菜单',
        //   path: 'router/query',
        //   meta: {
        //     icon: 'project',
        //     query: {
        //       name: '菜单默认参数'
        //     }
        //   },
        //   component: () => import('@/pages/Demo')
        // },
        // {
        //   name: '动态路由菜单',
        //   path: 'router/dynamic/:id',
        //   meta: {
        //     icon: 'project',
        //   },
        //   component: () => import('@/pages/Demo')
        // },
        // {
        //   name: 'Ant Design Vue',
        //   path: 'antdv',
        //   meta: {
        //     icon: 'ant-design',
        //     link: 'https://www.antdv.com/docs/vue/introduce-cn/'
        //   }
        // },

      ]
    },
  ]
}

export default options
