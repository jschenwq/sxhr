import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

class Index extends Component {

  constructor(props) {
    super(props);
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <View className='index'>
        课程
      </View>
    )
  }
}

export default Index
