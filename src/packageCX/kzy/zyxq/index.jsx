import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtList, AtListItem,  } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '职业详情标题动态'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      arryList1:[
        {
          title:'建筑/建材/工程',
          count:22
        },
        {
          title:'房地产',
          count:18
        },
        {
          title:'新能源',
          count:11
        },
        {
          title:'建筑/建材/工程',
          count:22
        },
        {
          title:'房地产',
          count:18
        },
        {
          title:'新能源',
          count:11
        },
        {
          title:'建筑/建材/工程',
          count:22
        }
      ],
      arryList2:[
        {
          area:'深圳',
          count:19
        },
        {
          area:'上海',
          count:17
        },
        {
          area:'北京',
          count:18
        },
        {
          area:'深圳',
          count:11
        },
        {
          area:'上海',
          count:8
        },
        {
          area:'北京',
          count:7
        },
        {
          area:'深圳',
          count:5
        },
        {
          area:'上海',
          count:4
        },
        {
          area:'北京',
          count:11
        }
      ]
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  changeTab(){
    this.setState({
      current: 1
    })
  }

  render () {
    const {arryList1, arryList2} = this.state;
    const tabList = [{ title: '职业介绍' }, { title: '就业岗位' }]
    return (
      <View className='zyxq'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='qbzy'>
              <View className ='jyqj jyqjOther'>
                <View className ='zyfb'>采矿工作技术人员</View>
                <View>
                  <Text>从事采矿生产工艺开发，这事一段测试文字阿三打撒打撒萨达萨达</Text>
                </View>
                <View className ='detailDes'>
                  <View className ='allItem'>从事的工作主要包括：</View>
                  <View className='everyItem'>
                    (1)这事一段测试文字，你好啊！这事一段测试文字，你好啊！这事一段测试文
                  </View>
                  <View className='everyItem'>
                    (2)这事一段测试文字，你好啊！这事一段测试文字，你好啊！这事一段测试文
                  </View>
                  <View className='everyItem'>
                    (3)这事一段测试文字，你好啊！这事一段测试文字，你好啊！这事一段测试文
                  </View>
                  <View className='everyItem'>
                    (4)这事一段测试文字，你好啊！这事一段测试文字，你好啊！这事一段测试文
                  </View>
                  <View className='everyItem'>
                    (1)这事一段测试文字，你好啊！这事一段测试文字，你好啊！这事一段测试文
                  </View>
                  <View className='everyItem'>
                    (6)这事一段测试文字，你好啊！这事一段测试文字，你好啊！这事一段测试文
                  </View>
                  <View className='everyItem'>
                    (7)这事一段测试文字，你好啊！这事一段测试文字，你好啊！这事一段测试文
                  </View>

                </View>
              </View>

              <View className ='jyqj'>
                <View className ='zyfb'>相关岗位6个</View>
                <AtList>
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' extraText='6666-1.4/月'  arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' extraText='6666-1.4/月'  arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' extraText='6666-1.4/月'  arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' extraText='6666-1.4/月'  arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' extraText='6666-1.4/月'  arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' extraText='6666-1.4/月'  arrow='right' />
                </AtList>
              </View>

              <View className ='jyqj'>
                <View className ='zyfb'>相关职业5个</View>
                <AtList>
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' arrow='right' />
                  <AtListItem onClick={this.changeTab.bind(this)} title='标题文字' arrow='right' />
                </AtList>
              </View>

              <View className ='sjlysm'>
                <View className ='sjlysmN'>
                  <View className ='sjltTitle'>
                    <Image src={require('@packageCP/images/boy.png')} className='cardLeftImg' />
                    <Text>数据来源说明：</Text>
                  </View>

                  <View className='at-row at-row__align--center detail'>
                    <View className='at-col at-col-1'>
                      <View className ='circle'></View>
                    </View>
                    <View className='at-col textDes'>
                      这事一段测试文字这事一段测试文字
                    </View>
                  </View>

                  <View className='at-row at-row__align--center detail'>
                    <View className='at-col at-col-1'>
                      <View className ='circle'></View>
                    </View>
                    <View className='at-col textDes'>
                      这事一段测试文字这事一段测试文字
                      这事一段测试文字这事一段测试文字
                      这事一段测试文字这事一段测试文字
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className ='qbzy'>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
              <View>这个页面有点东西，好烦躁</View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
