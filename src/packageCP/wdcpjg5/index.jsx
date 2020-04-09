import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import {getUserEvaluationDetailById} from '@utils/api'

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
    var id = JSON.parse(this.$router.params.id)
    getUserEvaluationDetailById(id).then(({data}) => {
      this.setState({
        scoreByGrade:data.data.scoreByGrade,
        singleModels:data.data.selfResultSingleModels,
      })
    })
  }

  componentDidMount(){

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    const {scoreByGrade, singleModels} = this.state
    return (
      <View className='wdcpjg'>
        <View>自我控制能力测评结果</View>
        <View className='at-row tableTitle'>
          <View className='at-col font2 selectTop'>参数</View>
          <View className='at-col font2 selectTop'>自我控制力</View>
          <View className='at-col font2 selectTop'>情绪控制力</View>
          <View className='at-col font2 selectTop'>行为控制力</View>
          <View className='at-col font2 selectTop'>思维控制力</View>
        </View>

        <View className = 'scoreN'>
          {
            singleModels.map((item,index) => {
              return (
                <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                  <View className='at-col selectTop'>{item.param}</View>
                  <View className='at-col selectTop'>{item.selfControl}</View>
                  <View className='at-col selectTop'>{item.moodControl}</View>
                  <View className='at-col selectTop'>{item.actionControl}</View>
                  <View className='at-col selectTop'>{item.thinkingControl}</View>
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
