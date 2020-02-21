import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

class Index extends Component {

  constructor(props) {
    super(props);
    state = {
      data: [
        
      ]
    };
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
        讲堂
      </View>
    )
  }
}

export default Index
