import { ComponentClass } from 'react'
import { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './customerDataList.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '分包页面'
  }
  render () {
    return (
      <View className='index'>
        <View><Text>分包页面</Text></View>
      </View>
    )
  }
}

export default Index as ComponentClass
