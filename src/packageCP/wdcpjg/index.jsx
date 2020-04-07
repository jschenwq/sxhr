import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '测评结果'
  }

  constructor(props) {
    super(props)
    this.state = {
      scoreByGrade:[],
      singleModels:[],
    };
  }

  componentWillMount(){
    console.log(JSON.parse(this.$router.params.result));
    var result = JSON.parse(this.$router.params.result)
    this.setState({
      scoreByGrade:result.scoreByGrade,
      singleModels:result.singleModels,
    })
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    const {scoreByGrade, singleModels} = this.state
    return (
      <View className='wdcpjg'>
        <View>考试心里和行为测评结果</View>
        <View className='at-row tableTitle'>
          <View className='at-col font2 selectTop'>标题</View>
          <View className='at-col font2 selectTop'>得分</View>
          <View className='at-col font2 selectTop'>参考平均值</View>
          <View className='at-col font2 selectTop'>问题状态</View>
        </View>

        <View className = 'scoreN'>
          {
            singleModels.map((item,index) => {
              return (
                <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                  <View className='at-col selectTop'>{item.title}</View>
                  <View className='at-col selectTop'>{item.score}</View>
                  <View className='at-col selectTop'>{item.avgScore}</View>
                  <View className='at-col selectTop'>{item.status}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
