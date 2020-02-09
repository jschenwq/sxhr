import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'

import './index.scss'

import ksxlhxwcs from '../../images/evaluation/ksxlhxwcs.png'
import xxtycp from '../../images/evaluation/xxtycp.png'
import xxjdcp from '../../images/evaluation/xxjdcp.png'
import xxnlcp from '../../images/evaluation/xxnlcp.png'
import jtjyfscp from '../../images/evaluation/jtjyfscp.png'
import zwkznlcp from '../../images/evaluation/zwkznlcp.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '学业测评'
  }
  state = {
    finishedSum: 8914594
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
        <View className='cp-top'>
          <navigator url="" hover-class="navigator-hover">
            我的报告
          </navigator>
          <View>
            <View style="font-weight: bold;font-size: 40rpx;margin-bottom: 20rpx;">专业定位测评</View>
            <View style='font-size: 26rpx;color: #ffefe8;'>五大维度 15分钟推荐适合你的专业</View>
          </View>
          <View className='operate-group'>
            <Button size='mini' style='border-radius: 30rpx;color: #ff738d;font-weight: bold;margin: 0px;'>开始测评</Button>
             <Text>{this.state.finishedSum} 人已完成</Text>
          </View>
        </View>
        {/* 学习状态*/}
        <View className='cp-module'>
          <View className='module-title'>学习状态</View>
          <View className='module-items'>
            <View className='module-item'>
              <View className='item-title'>考试心理和行为测试</View>
              <Text className='item-text'>考试总是发挥失常？</Text>
              <View className='item-content'>
                <Text>已有 {} 人参与</Text>
                <Image src={ksxlhxwcs} />
              </View>
            </View>
            <View className='module-item'>
              <View className='item-title'>学习拖延测评</View>
              <Text className='item-text'>提到学习就焦虑害怕？</Text>
              <View className='item-content'>
                <Text>已有 {} 人参与</Text>
                <Image src={xxtycp} />
              </View>
            </View>
          </View>
          <View className='module-items'>
            <View className='module-item'>
              <View className='item-title'>学习倦怠测评</View>
              <Text className='item-text'>提到学习就乏力？</Text>
              <View className='item-content'>
                <Text>已有 {} 人参与</Text>
                <Image src={xxjdcp} />
              </View>
            </View>
            <View className='module-item'>
              <View className='item-title'>学习能力测评</View>
              <Text className='item-text'>成绩提升有方法</Text>
              <View className='item-content'>
                <Text>已有 {} 人参与</Text>
                <Image src={xxnlcp} />
              </View>
            </View>
          </View>
        </View>
        {/* 心理健康 */}
        <View className='cp-module'>
          <View className='module-title'>心理健康</View>
          <View className='module-items'>
            <View className='module-item'>
              <View className='item-title'>家庭教育方式测评</View>
              <Text className='item-text'>青春的孩子应如何教育</Text>
              <View className='item-content'>
                <Text>已有 {} 人参与</Text>
                <Image src={jtjyfscp} />
              </View>
            </View>
            <View className='module-item'>
              <View className='item-title'>自我控制能力测评</View>
              <Text className='item-text'>测量对自己的行为控制能力</Text>
              <View className='item-content'>
                <Text>已有 {} 人参与</Text>
                <Image src={zwkznlcp} />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
