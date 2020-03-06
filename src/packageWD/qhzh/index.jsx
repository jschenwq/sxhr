import Taro, { Component } from '@tarojs/taro'
import { View, Button} from '@tarojs/components'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }
  constructor(){
    super();
    this.state = {
      isLoading: false
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
  wxLogin(){
    this.setState((prevState)=>({
      isLoading: true
    }));
    Taro.login({
      success: (res)=>{
        if(res.code) {
          //发起网络请求
          Taro.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
        this.setState((prevState)=>({
          isLoading: false
        }));
      }
    });
  }
  sjLogin(){
    Taro.navigateTo({
      url: '/packageWD/sjhdl/index'
    });
  }
  render () {
    let {isLoading} = this.state;
    return (
      <View className='index'>
        <View style='text-align: center;margin-bottom: 10px;'>汇百智教育</View>
        <Button onClick={this.wxLogin.bind(this)} loading={isLoading} type='primary' circle>微信快捷登录</Button>
        <Button onClick={this.sjLogin.bind(this)} type='default' circle>手机号短信登录</Button>
      </View>
    )
  }
}

export default Index
