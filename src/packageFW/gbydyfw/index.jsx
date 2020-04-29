import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'

import hyfw from '../images/hyfw.png'

class Index extends Component {

  config = {
    navigationBarTitleText: '志愿填报'
  }
  state = {
    phoneNumber: '',
    serviceType: '',
    serviceTypeName:'',
    serviceFee: ''
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount(){

  }

  componentDidMount() {
    let _serviceType = this.$router.params.type;
    let _serviceFee = this.$router.params.fee;
    let _serviceTypeName = '（普高）'
    if('art' === _serviceType){
      _serviceTypeName = '（艺术）';
    }

    this.setState((prevState)=>({
      serviceType: _serviceType,
      serviceTypeName: _serviceTypeName,
      serviceFee: _serviceFee
    }));
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
  fwrxPay=(e)=>{
    Taro.showLoading();
    let _serviceType = this.state.serviceType;
    getService({memberType: _serviceType}).then(({data}) => {
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
      phoneNumber: e.detail.value
    }));
  }
  render () {
    let { serviceTypeName, serviceFee } = this.state;
    return (
      <View className='index'>
        <Image src={hyfw} style='width:100%;height: 400rpx;margin-bottom: 16rpx;' />
        <View className='gbydyfw-price'>
          <Label>志愿填报{serviceTypeName}</Label>
          <Text style='color: #ff9913;'> ￥{serviceFee}</Text>
        </View>
        {/*<View className='gbydyfw-price gbydyfw-checked'>
          <Label>高报一对一服务</Label>
          <Switch type='checkbox' checked={this.state.checked} onChange={this.checkChange}/>
        </View>*/}
        <View className='gbydyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;'>
          <Image style='margin-bottom: 15rpx;width: 100%;' src={hyfw} />
          <View><Text style='font-size: 32rpx;color: #333333;'>【升学规划】分析考生意向，指定合理的目标</Text></View>
        </View>
       {/* <View className='gbydyfw-price gbydyfw-phone'>
          <AtIcon prefixClass='icon' value='shouji54' size='20' color='#9e9e9e' />
          <Input value={this.state.phoneNumber} placeholder='请输入11位有效手机号码...' onInput={this.inputChange.bind(this)} placeholderStyle='color: #808080;' />
        </View>*/}
        <View className='gbydyfw-btngroup'>
          <Button style='width:30%;color: #080705;background-color: #ffb284;' onClick={this.fwrxPhoneCall}>服务热线</Button>
          {/* disabled={!this.state.checked} */}
          <Button style='width: 60%;' type='primary' onClick={this.fwrxPay}>立即开通</Button>
        </View>
      </View>
    )
  }
}

export default Index
