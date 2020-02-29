import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '登录'
  }

  constructor(){

    this.state = {
      userName: '',
      password: ''
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
  handleUserChange(value){
    this.setState((prevState)=>({
      userName: value
    }));
  }
  handlePwdChange(value){
    this.setState((prevState)=>({
      password: value
    }));
  }
  render () {
    let {userName, password} = this.state;
    return (
      <View className='index'>
        <AtInput
          name='userName'
          title='账号'
          type='text'
          placeholder='单行文本'
          value={userName}
          onChange={this.handleUserChange.bind(this)}
        />
        <AtInput
          name='password'
          title='密码'
          type='password'
          placeholder='单行文本'
          value={password}
          onChange={this.handlePwdChange.bind(this)}
        />
        <AtButton onClick={this.onSubmit.bind(this)} type='primary' circle>提交</AtButton>
      </View>
    )
  }
}

export default Index
