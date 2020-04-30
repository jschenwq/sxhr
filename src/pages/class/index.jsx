import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Forum from './forum/index';
import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '大讲堂'
  }
  state = {
    currentIndex: 0
  }
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
  tabExchange(index){
    this.setState((prevState)=>({
      currentIndex: index
    }));
  }
  render () {
    let {currentIndex} = this.state;
    return (
      <View className='index'>
        <View className='content'>
          <Forum />
        </View>
      </View>
    )
  }
}

export default Index
