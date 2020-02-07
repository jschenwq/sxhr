import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Button, Text } from '@tarojs/components'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '服务项目'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View><Text>会员服务页面</Text></View>
        <View>
        </View>
      </View>
    )
  }
}

export default Index
