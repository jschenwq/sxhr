import Taro, { Component } from '@tarojs/taro'
import { View, Button} from '@tarojs/components'
import auth from '@utils/auth';
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
  wxLogin(e){
    console.log(e);
    this.setState((prevState)=>({
      isLoading: true
    }));
    auth.appCheckAuth().then((result)=>{
      this.setState((prevState)=>({
        isLoading: false
      }));
      Taro.showToast({
        title: result?'授权登录成功':'授权登录失败',
        icon: 'none',
        mask: true
      });
      Taro.switchTab({
        url: '/pages/home/index'
      });
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
        <View style='text-align: center;margin-bottom: 10px;'>识人文墨教育</View>
        <Button onGetUserInfo={this.wxLogin.bind(this)} openType="getUserInfo" loading={isLoading} type='primary' circle>微信快捷登录</Button>
        <Button onClick={this.sjLogin.bind(this)} type='default' circle>手机号短信登录</Button>
      </View>
    )
  }
}

export default Index
