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
      result:[]
    };
  }

  componentWillMount(){
    var id = JSON.parse(this.$router.params.id)
    getUserEvaluationDetailById(id).then(({data}) => {
      this.setState({
        result:data.data.familyResultSingleModels
      })
    })
  }

  componentDidMount(){

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    const {result} = this.state
    return (
      <View className='wdcpjg'>
        <View>家庭教育方式测评结果</View>
        {/*<View>*/}
          {/*<Text>{result[0].param}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评得分：{result[0].score}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评等级：{result[0].result}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评平均值：{result[0].avgAllCountry}</Text>*/}
        {/*</View>*/}

        {/*<View>*/}
          {/*<Text>{result[1].param}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评得分：{result[1].score}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评等级：{result[1].result}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评平均值：{result[1].avgAllCountry}</Text>*/}
        {/*</View>*/}

        <View className='at-row tableTitle'>
          <View className='at-col font2 selectTop'>参数</View>
          <View className='at-col font2 selectTop'>测评得分</View>
          <View className='at-col font2 selectTop'>测评等级</View>
          <View className='at-col font2 selectTop'>测评平均值</View>
        </View>

        <View className = 'scoreN'>
          {
            result.map((item,index) => {
              return (
                <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                  <View className='at-col selectTop'>{item.param}</View>
                  <View className='at-col selectTop'>{item.score}</View>
                  <View className='at-col selectTop'>{item.result}</View>
                  <View className='at-col selectTop'>{item.avgAllCountry}</View>
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
