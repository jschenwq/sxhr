import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtList, AtListItem  } from 'taro-ui'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '专业类别动态获取'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  //跳转职业详情
  gotoZyxq(){
    Taro.navigateTo({
      url: '/packageCX/czy/zyxq/index',
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const tabList = [{ title: '专业详情' }, { title: '职业方向' }]
    return (
      <View className ='zyfl'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='qbzy'>
              <View className ='topTip'>
                <Text onClick={this.handleChangeB.bind(this)} className ='sysm'>包含专业N个</Text>
              </View>
              <AtList>
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' note='描述信息' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' note='描述信息' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' note='描述信息' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' note='描述信息' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' note='描述信息' arrow='right' />
                <AtListItem onClick={this.gotoZyxq.bind(this)} title='标题文字' note='描述信息' arrow='right' />
              </AtList>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className ='qbzy'>
              敬请期待
            </View>

          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
