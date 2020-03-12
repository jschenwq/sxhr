import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

import hyfw from '../images/hyfw.png'
import bghzy from '../images/bghzy.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '开通VIP'
  }
  state = {
    phoneNumber: '',
    gbydyChecked: false,
    sxkChecked: false,
    hyChecked: false
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  checkChange=(checked)=>(e)=>{
    this.setState(()=> ({
      [checked]: e.currentTarget.value
    }));
  }
  fwrxPhoneCall=(e)=>{
    Taro.makePhoneCall({
      phoneNumber: this.state.phoneNumber
    });
  }
  inputChange=(e)=>{
    this.setState(()=> ({
      phoneNumber: e.detail.value
    }));
  }
  handleOpen(){
    Taro.navigateBack({
      delta: 1
    });
  }
  render () {
    let {phoneNumber,gbydyChecked,sxkChecked,hyChecked} = this.state;
    return (
      <View className='index'>
        <Image src={hyfw} style='width:100%;height: 500rpx;margin-bottom: 16rpx;' />
        <View className='hyfw-price'>
          <Label>会员服务</Label>
          <Text style='color: #ff9913;'> ￥5000.00</Text>
        </View>
        <View className='hyfw-price hyfw-checked-group'>
          <View className='hyfw-checked'>
            <Label>高报一对一服务</Label>
            <Switch type='checkbox' checked={gbydyChecked} onChange={this.checkChange('gbydyChecked')}/>
          </View>
          <View className='hyfw-checked'>
            <Label>升学卡服务</Label>
            <Switch type='checkbox' checked={sxkChecked} onChange={this.checkChange('sxkChecked')}/>
          </View>
          <View className='hyfw-checked'>
            <Label>会员服务</Label>
            <Switch type='checkbox' checked={hyChecked} onChange={this.checkChange('hyChecked')}/>
          </View>
        </View>
        <View className='hyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;color: #7b7b7b;padding: 20rpx 40rpx 4rpx;font-size: 30rpx;'>
          <Text>欢迎您选择VIP专享服务，开通VIP后将专享网站所有特色服务（除专家一对一），无需再次购买。</Text>
          <Image src={bghzy} style='margin-top: 10rpx;width: 100%;height: 240rpx;' />
        </View>
        <View className='hyfw-price hyfw-phone'>
          <AtIcon prefixClass='icon' value='shouji54' size='20' color='#9e9e9e' />
          <Input value={phoneNumber} placeholder='请输入11位有效手机号码...' placeholderStyle='color: #808080;' onInput={this.inputChange.bind(this)}/>
        </View>
        <View className='hyfw-btngroup'>
          <Button style='width:30%;color: #080705;background-color: #ffb284;' onClick={this.fwrxPhoneCall}>服务热线</Button>
          {/* disabled={!this.state.checked} */}
          <Button style='width: 60%;color: #fff;background-color: #bcbbc0;' onClick={this.handleOpen.bind(this)}>立即开通</Button>
        </View>
      </View>
    )
  }
}

export default Index
