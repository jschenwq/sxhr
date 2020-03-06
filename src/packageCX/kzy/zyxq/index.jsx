import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane,   } from 'taro-ui'
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

  render () {
    const tabList = [{ title: '职业介绍' }, { title: '就业岗位' }]
    return (
      <View className='zyxq'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='qbzy'>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
              <View>222222222222</View>
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
