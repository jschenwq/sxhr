import Taro, { Component } from '@tarojs/taro'
import { View, Button} from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '绑定手机'
  }
  constructor(){
    super();
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
  handleSjh(e){
    this.setState((prevState)=>({
      phoneNumber: e.detail.value
    }));
  }
  handleVCode(e){
    this.setState((prevState)=>({
      verifyCode: e.detail.value
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
  phoneBind=()=>{
    Taro.navigateBack({
      delta: 1
    });
  }
  render(){
    let {phoneNumber, verifyCode, vCode, isHasGet, count} = this.state;
    return (
      <View className='index'>
        <View className='params'>
          <AtIcon prefixClass='icon' value='dunpai' size='20' color='#9e9e9e' />
          <Input type='text' className='phone-number' placeholder='请输入11位有效手机号码' value={phoneNumber} onInput={this.handleSjh.bind(this)}/>
          <Button size="mini" type='primary' disabled={isHasGet} onClick={this.getVCode}>{!isHasGet? vCode : count+'s'}</Button>
        </View>
        <View className='params'>
          <AtIcon prefixClass='icon' value='dunpai' size='20' color='#9e9e9e' />
          <Input type='text' className='verify-code' placeholder='请输入验证码' value={verifyCode} onInput={this.handleVCode.bind(this)}/>
        </View>
        <View className='btn-panel'>
          <AtButton disabled={!phoneNumber || !verifyCode} type="primary" onClick={this.phoneBind}>绑定</AtButton>
        </View>
      </View>
    );
  }
}
