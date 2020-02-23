import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Icon, Switch } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {login} from '@utils/api'

import { add, minus, asyncAdd } from '@actions/counter'

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
      <View className='home'>
        <Image src={require('@images/home/banner.jpg')} className='home_banner' />
        <View className='home_wish'>
          <View>
            <Icon className='home_icon' color='#999' size='18' type='waiting' /><Text className='home_location'>湖北</Text>
            {/*<Switch className={'home_switch'}/>*/}
            <Text class={'home_score'}>高考/模拟总分</Text>
            <Text class={'home_scoreLine'}>线差</Text>
          </View>
          <View>
            <Input type='text' placeholder='将会获取焦点'/><Text>分</Text>
          </View>
        </View>
















        <Button className='add_btn' onClick={this.toFenbao.bind(this)}>前往分包页面</Button>
        <Button className='add_btn' onClick={this.toFenbao1}>前往分包页面111</Button>
      </View>
    )
  }
}

export default Index
