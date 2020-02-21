import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Forum from './forum/index';
import Course from './course/index';
import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '课堂'
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
        <View className='tab'>
          <View className={currentIndex===0?'selected': ''} onClick={this.tabExchange.bind(this, 0)}>讲堂</View>
          <View className={currentIndex===1?'selected': ''} onClick={this.tabExchange.bind(this, 1)}>课程</View>
        </View>
        <View className='content'>
          {currentIndex===0 ? <Forum /> : <Course />}
        </View>
      </View>
    )
  }
}

export default Index
