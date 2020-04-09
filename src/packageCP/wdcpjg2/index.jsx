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
        singleModels:data.data.singleModels,
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
        <View>学习倦怠测评结果</View>
        <View className='at-row tableTitle'>
          <View className='at-col font2 selectTop'>参数</View>
          <View className='at-col font2 selectTop'>得分</View>
          <View className='at-col font2 selectTop'>参考平均值</View>
          <View className='at-col font2 selectTop'>问题状态</View>
        </View>

        <View className = 'scoreN'>
          {
            singleModels.map((item,index) => {
              return (
                <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                  <View className='at-col selectTop'>{item.param}</View>
                  <View className='at-col selectTop'>{item.score}</View>
                  <View className='at-col selectTop'>{item.avgScore}</View>
                  <View className='at-col selectTop'>{item.result}</View>
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
