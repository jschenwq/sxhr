import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '提前批'
  }

  constructor(props) {
    super(props)
    this.state = {
      result:'',//测评结果
    };
  }

  componentWillMount(){
    console.log(this.$router.params.result)
    this.setState({
      result:this.$router.params.result
    })
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <View className='wdcpjg'>
        测评结果部分数据：
        {this.state.result.appraise},
        {this.state.result.param},
        {this.state.result.score},
      </View>
    )
  }
}

export default Index
