import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '咨询师详情'
  }

  constructor(props) {
    super(props)
    this.state = {
      stars:4
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <View className = 'zsxDetail'>
        <View onClick={this.gotozxsDetai.bind(this)} className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={require('../../../packageCP/images/boy.png')} className='counselorImg1' />
          </View>
          <View className='at-col at-col-7'>
            <View>
              <Text className='name'>张三</Text>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-4 job'>志愿填报</View>
              <View className='at-col at-col-4 job'>高招政策</View>
              <View className='at-col at-col-4 job'>心理咨询</View>
            </View>
            <View>
              <Text className='year'>从业2年</Text><AtRate className='starts' value={this.state.stars}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
