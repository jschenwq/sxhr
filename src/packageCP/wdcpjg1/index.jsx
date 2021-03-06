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
      result:{},
    };
  }

  componentWillMount(){
    var id = JSON.parse(this.$router.params.id)
    getUserEvaluationDetailById(id).then(({data}) => {
      this.setState({
        result:data.data
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
        <View>学习拖延测评结果</View>
        {/*<View>*/}
          {/*<Text>{result.param}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评得分：{result.score}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评等级：{result.status}</Text>*/}
        {/*</View>*/}
        {/*<View>*/}
          {/*<Text>测评状况：{result.appraise}</Text>*/}
        {/*</View>*/}

        <View className='at-row tableTitle'>
          <View className='at-col font2 selectTop'>参数</View>
          <View className='at-col font2 selectTop'>测评得分</View>
          <View className='at-col font2 selectTop'>测评等级</View>
          <View className='at-col font2 selectTop'>测评状况</View>
        </View>

        <View className = 'scoreN'>
          <View className='at-row'>
            <View className='at-col selectTop'>{result.param}</View>
            <View className='at-col selectTop'>{result.score}</View>
            <View className='at-col selectTop'>{result.status}</View>
            <View className='at-col selectTop'>{result.appraise}</View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
