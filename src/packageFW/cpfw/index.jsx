import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'

import hyfw from '../images/hyfw.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '测评服务'
  }
  state = {
    phoneNumber: ''
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

  fwrxPay=(e)=>{
    Taro.showLoading({
      title: '订单创建中',
      mask: true
    });
    getService({memberType: "evaluation"}).then(({data}) => {
      Taro.requestPayment({
        timeStamp:data.timeStamp,
        package:data.package,
        paySign:data.paySign,
        signType:data.signType,
        prepayid:data.prepayid,
        nonceStr:data.nonceStr,
        success(res){
          Taro.hideLoading();
          Taro.showToast({
            title:'支付成功',
            icon:'none',
            duration:1000
          })
        },
        fail(res){
          Taro.hideLoading();
          Taro.showToast({
            title:'支付失败',
            icon:'none',
            duration:1000
          })
        }
      })
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
          <Label>测评次卡</Label>
          <Text style='color: #ff9913;'> ￥500.00</Text>
        </View>

        <View className='hyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;color: #7b7b7b;padding: 20rpx 40rpx 4rpx;font-size: 30rpx;'>
          <Text>欢迎您选择选科服务，开通选科服务后，无需再次购买。</Text>
          <Image src={hyfw} style='margin-top: 10rpx;width: 100%;height: 240rpx;' />
        </View>
        <View className='hyfw-btngroup'>
          <Button style='width:30%;color: #080705;background-color: #ffb284;' onClick={this.fwrxPhoneCall}>服务热线</Button>
          {/* disabled={!this.state.checked} */}
          <Button style='width: 60%' type='primary' onClick={this.fwrxPay}>立即开通</Button>
        </View>
      </View>
    )
  }
}

export default Index
