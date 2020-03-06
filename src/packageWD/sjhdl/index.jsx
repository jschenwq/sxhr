import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '登录'
  }

  constructor(){

    this.state = {
      phoneNumber: '',
      verifyCode: '',
      vCode: '获取验证码',
      isHasGet: false,//是否已获取
      count: 60,
    };
  }

  componentWillMount(){

  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onSubmit(){

  }
  onReset(){

  }
  handleUserChange(e){
    this.setState((prevState)=>({
      phoneNumber: e.target.value
    }));
  }
  handlePwdChange(e){
    this.setState((prevState)=>({
      verifyCode: e.target.value
    }));
  }
  getVCode=()=>{
    if(!this.state.isHasGet){//未获取
      this.setState(()=>({
        isHasGet: true
      }));
      let timer = setInterval(()=>{
        if(this.state.count === 0){
          clearInterval(timer);
          this.setState((prevState)=>({
            count: 60,
            isHasGet: false
          }));
        }else{
          this.setState((prevState)=>({
            count: prevState.count-1
          }));
        }
      },1000);
    }
  }
  render () {
    let {phoneNumber, verifyCode, vCode,isHasGet, count} = this.state;
    return (
      <View className='index'>
        <View className='title'>欢迎回来!</View>
        <View className='params'>
          <AtIcon value='iphone' size='20' color='#9e9e9e' />
          <Input type='text' className='phone-number' placeholder='请输入手机号' value={phoneNumber} onChange={this.handleUserChange.bind(this)} />
        </View>
        <View className='params'>
          <AtIcon prefixClass='icon' value='dunpai' size='20' color='#9e9e9e' />
          <Input type='text' className='verify-code' placeholder='请输入验证码' value={verifyCode} onChange={this.handlePwdChange.bind(this)}/>
          <Text style='border-left: 1px solid #9e9e9e; color:#9e9e9e;text-align: center;width: 70px;' onClick={this.getVCode}>{!isHasGet? vCode : count+'s'}</Text>
        </View>
        <Button onClick={this.onSubmit.bind(this)} type='primary' circle>登 录</Button>
      </View>
    )
  }
}

export default Index
