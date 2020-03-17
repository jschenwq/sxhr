import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '专业介绍'
  }

  constructor(props) {
    super(props)
    this.state = {
      content:''
    };
  }

  componentDidMount(){
    this.setState({
      content:this.$router.params.content
    })
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <View className ='zyjsxq'>
        <RichText nodes={this.state.content} />
      </View>
    )
  }
}

export default Index
