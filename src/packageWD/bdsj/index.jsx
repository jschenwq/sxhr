import Taro, { Component } from '@tarojs/taro'
import { View, Button} from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui'
import {getVerificationCode, bindMobile} from '@utils/api'
import { setGlobalData, getGlobalData } from '../../utils/global';
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

  componentDidShow() {
    let _title = this.$router.params.title;
    let _mobile = this.$router.params.mobile;
    this.setState({
      title: _title,
      mobile: _mobile
    });
    Taro.setNavigationBarTitle({
      title: _title
    });
  }

  handleSjh(e){//输入手机号
    this.setState((prevState)=>({
      phoneNumber: e.detail.value
    }));
  }
  handleVCode(e){//输入验证码
    this.setState((prevState)=>({
      verifyCode: e.detail.value
    }));
  }
  getVCode=()=>{//获取验证码
    if(!(/^1[3456789]\d{9}$/.test(this.state.phoneNumber))){
      Taro.showToast({
        title: '手机号码有误，请重填',
        icon: 'none',
        mask: true
      });
      return ;
    }
    let _mobile = this.state.mobile;
    if(_mobile === this.state.phoneNumber){
      Taro.showToast({
        title: '请不要输入原手机号',
        icon: 'none',
        mask: true
      });
      return ;
    }
    if(!this.state.isHasGet){//未获取
      getVerificationCode({mobile: this.state.phoneNumber}).then(({code, msg})=>{
        if(code == 0){
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
        }else{
          Taro.showToast({
            title: msg,
            icon: 'none',
            mask: true
          });
        }
      });
    }
  }
  phoneBind=()=>{
    bindMobile({mobile: this.state.phoneNumber,code: this.state.verifyCode}).then(({code, msg})=>{
      Taro.showToast({
        title: msg,
        icon: 'none',
        mask: true
      });
      if(code == 0){
        if(getGlobalData("userInfo")!=null&&getGlobalData("userInfo")!=''){
          let userInfo = getGlobalData("userInfo");
          userInfo.mobile = this.state.phoneNumber;
          setGlobalData("userInfo", userInfo);
        }
        setTimeout(()=>{
          Taro.navigateBack({
            delta: 1
          });
        },1000);
      }
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
          <AtIcon prefixClass='icon' value='test' size='20' color='#9e9e9e' />
          <Input type='text' className='verify-code' placeholder='请输入验证码' value={verifyCode} onInput={this.handleVCode.bind(this)}/>
        </View>
        <View className='btn-panel'>
          <AtButton disabled={!phoneNumber || !verifyCode} type="primary" onClick={this.phoneBind}>绑 定</AtButton>
        </View>
      </View>
    );
  }
}
