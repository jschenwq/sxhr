import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

import sxkfw from '../images/hyfw.png'

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
  inputChange(e){
    this.setState(()=> ({
      phoneNumber: e.currentTarget.value
    }));
  }
  render () {
    return (
      <View className='index'>
        <Image src={sxkfw} style='width:100%;height: 500rpx;margin-bottom: 16rpx;' />
        <View className='sxkfw-price'>
          <Label>升学卡服务</Label>
          <Text style='color: #ff9913;'> ￥6000.00</Text>
        </View>
        <View className='sxkfw-price sxkfw-checked-group'>
          <View className='sxkfw-checked'>
            <Label>高报一对一服务</Label>
            <Switch type='checkbox' checked={this.state.gbydyChecked} onChange={this.checkChange('gbydyChecked')}/>
          </View>
          <View className='sxkfw-checked'>
            <Label>升学卡服务</Label>
            <Switch type='checkbox' checked={this.state.sxkChecked} onChange={this.checkChange('sxkChecked')}/>
          </View>
          <View className='sxkfw-checked'>
            <Label>会员服务</Label>
            <Switch type='checkbox' checked={this.state.hyChecked} onChange={this.checkChange('hyChecked')}/>
          </View>
        </View>
        <View className='sxkfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;color: #7b7b7b;padding: 20rpx 40rpx;font-size: 30rpx;'>
          <Text>欢迎您选择升学卡专享服务。</Text>
        </View>
        <View className='sxkfw-price sxkfw-phone'>
          <AtIcon prefixClass='icon' value='shouji54' size='20' color='#9e9e9e' />
          <Input type='text' value={this.state.phoneNumber} placeholder='请输入11位有效手机号码...' onInput={this.inputChange} placeholderStyle='color: #808080;' />
        </View>
        <View className='sxkfw-btngroup'>
          <Button style='width:30%;color: #080705;background-color: #ffb284;' onClick={this.fwrxPhoneCall}>服务热线</Button>
          {/* disabled={!this.state.checked} */}
          <Button style='width: 60%;color: #fff;background-color: #bcbbc0;' >立即开通</Button>
        </View>
      </View>
    )
  }
}

export default Index
