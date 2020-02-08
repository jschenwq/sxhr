import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'

import './index.scss'

import gbydyfw from '../../images/service/gbydyfw.png'
import hyfw from '../../images/service/hyfw.png'
import sxkfw from '../../images/service/sxkfw.png'


class Index extends Component {

  config = {
    navigationBarTitleText: '学业测评'
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
        <navigator url="./gbydyfw/index" hover-class="navigator-hover">
          <View className='navigator-item'>
            <Image className='navigator-item-image' src={gbydyfw} />
            <View className='navigator-item-title'>
              <Text>高报一对一服务</Text>
              <Text style='color:#ff9913;'>￥ 8000.00</Text>
            </View>
            <Text className='arrow-icon'></Text>
          </View>
        </navigator>
        <navigator url="./sxkfw/index" hover-class="other-navigator-hover">
          <View className='navigator-item'>
            <Image className='navigator-item-image' src={sxkfw} />
            <View className='navigator-item-title'>
              <Text>升学卡服务</Text>
              <Text style='color:#ff9913;'>￥ 6000.00</Text>
            </View>
            <Text className='arrow-icon'></Text>
          </View>
        </navigator>
        <navigator url="./hyfw/index" hover-class="other-navigator-hover">
          <View className='navigator-item'>
            <Image className='navigator-item-image' src={hyfw} />
            <View className='navigator-item-title'>
              <Text>会员服务</Text>
              <Text style='color:#ff9913;'>￥ 5000.00</Text>
            </View>
            <Text className='arrow-icon'></Text>
          </View>
        </navigator>
      </View>
    )
  }
}

export default Index
