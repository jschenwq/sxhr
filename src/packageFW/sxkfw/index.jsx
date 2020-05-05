import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'
import sxkfw from '../images/hyfw.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '升学规划'
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
    getService({memberType: "upper"}).then(({data}) => {
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
          <Label>升学规划{serviceTypeName}</Label>
          <Text style='color: #ff9913;'> ￥1000.00</Text>
        </View>
        {/*<View className='sxkfw-price sxkfw-checked-group'>
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
        </View>*/}
        <View className='sxkfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;color: #7b7b7b;padding: 20rpx 40rpx;font-size: 30rpx;'>
          <Image style='margin-bottom: 15rpx;width: 100%;' src={sxkfw} />
          <View><Text style='font-size: 32rpx;color: #333333;'>【升学规划】分析考生意向，指定合理的目标</Text></View>
        </View>
        {/*<View className='sxkfw-price sxkfw-phone'>
          <AtIcon prefixClass='icon' value='shouji54' size='20' color='#9e9e9e' />
          <Input type='text' value={this.state.phoneNumber} placeholder='请输入11位有效手机号码...' onInput={this.inputChange} placeholderStyle='color: #808080;' />
        </View>*/}
        <View className='sxkfw-btngroup'>
          <Button style='width:30%;color: #080705;background-color: #ffb284;' onClick={this.fwrxPhoneCall}>服务热线</Button>
          {/* disabled={!this.state.checked} */}
          <Button style='width: 60%;' type='primary' onClick={this.fwrxPay}>立即开通</Button>
        </View>
      </View>
    )
  }
}

export default Index
