import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'

import './index.scss'

import zytbzjydy from '../../images/service/zytbzjydy.png'
import jzgk from '../../images/service/jzgk.png'
import phoneIcon from '../../images/service/phone_icon.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '开通VIP'
  }
  state = {
    phoneNumber: '',
    checked: false
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  checkChange=(e)=>{
    this.setState(()=> ({
      checked: e.currentTarget.value
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
        <Image src={zytbzjydy} style='width:100%;height: 400rpx;margin-bottom: 16rpx;' />
        <View className='gbydyfw-price'>
          <Label>高报一对一服务</Label>
          <Text style='color: #ff9913;'> ￥8000.00</Text>
        </View>
        <View className='gbydyfw-price gbydyfw-checked'>
          <Label>高报一对一服务</Label>
          <Switch type='checkbox' checked={this.state.checked} onChange={this.checkChange}/>
        </View>
        <View className='gbydyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;'>
          <Image style='margin-bottom: 15rpx;width: 100%;' src={jzgk} />
          <View><Text style='font-size: 32rpx;color: #333333;'>【学业测评】分析考生意向，指定合理的目标</Text></View>
          <View><Text style='font-size: 32rpx;color: #333333;'>【学业测评】分析考生意向，指定合理的目标</Text></View>
        </View>
        <View className='gbydyfw-price gbydyfw-phone'>
          <Image src={phoneIcon} style='width: 40rpx; height: 80rpx;' />
          <Input type='text' value={this.state.phoneNumber} placeholder='请输入11位有效手机号码...' onInput={this.inputChange} placeholderStyle='color: #808080;' />
        </View>
        <View className='gbydyfw-btngroup'>
          <Button style='width:30%;color: #080705;background-color: #ffb284;' onClick={this.fwrxPhoneCall}>服务热线</Button>
          {/* disabled={!this.state.checked} */}
          <Button style='width: 60%;color: #fff;background-color: #bcbbc0;' >立即开通</Button>
        </View>
      </View>
    )
  }
}

export default Index
