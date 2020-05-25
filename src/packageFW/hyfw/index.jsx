import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '选科服务'
  }
  state = {
    phoneNumber: '0379-65116985',
    banner:[
      'https://oss.srwmedu.cn/banner/banner1.jpg',
      'https://oss.srwmedu.cn/banner/banner2.jpg'
    ]
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
    getService({memberType: "choose"}).then(({data}) => {
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
    let {phoneNumber, banner} = this.state;
    return (
      <View className='index'>
        <Image src={banner[0]} style='width:100%;height: 500rpx;margin-bottom: 16rpx;' />
        <View className='hyfw-price'>
          <Label>选科服务</Label>
          <Text style='color: #ff9913;'> ￥1000.00</Text>
        </View>

        <View className='hyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;color: #7b7b7b;padding: 20rpx 40rpx 4rpx;font-size: 30rpx;'>
          <Text>【选科服务】通过职业测评，结合孩子的兴趣、能力、性格、职业价值观、优势学科、天赋智能、学科兴趣等全方位确定出孩子适合选的科目，并提供专家一对一指导之处未来发展方向及如何做好升学规划，严格按照升学规划服务内容执行。</Text>
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
