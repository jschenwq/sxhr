import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {login} from '../../utils/api'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    };
    this.toFenbao1 = this.toFenbao1.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
    console.log(login({name:'cwq'}))
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  toFenbao(){
    Taro.showToast({
      title: '22222',
      icon: 'none',
      mask: true,
    });
  }

  toFenbao1(){
    if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: 'packageCustomerData/pages/customerDataList/customerDataList',
      })
    } else {
      Taro.switchTab({
        url: 'packageCustomerData/pages/customerDataList/customerDataList',
      })
    }
  }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <View><Text>Hello, World</Text></View>
        <Button className='add_btn' onClick={this.toFenbao.bind(this)}>前往分包页面</Button>
        <Button className='add_btn' onClick={this.toFenbao1}>前往分包页面111</Button>
      </View>
    )
  }
}

export default Index
