import Taro, { Component } from '@tarojs/taro'
import {View, Label, Button, Image, Switch, Text} from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '升学规划'
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
    let {phoneNumber, banner} = this.state;
    return (
      <View className='index'>
        <Image src={banner[0]} style='width:100%;height: 500rpx;margin-bottom: 16rpx;' />
        <View className='sxkfw-price'>
          <Label>升学规划{serviceTypeName}</Label>
          <Text style='color: #ff9913;'> ￥9.90</Text>
          <Text style='color:#999;text-decoration: line-through;margin-left: 10px;'>￥1000.00</Text>
        </View>
        <View className='sxkfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;color: #7b7b7b;padding: 20rpx 40rpx;font-size: 30rpx;'>
          <View>
            <Text style='font-size: 32rpx;color: #333333;'>
              【升学规划】针对高中生当前的现状，进行职业测评，同时结合家庭愿景、家庭条件、家庭成员及亲属的行业背景、考研、出国留学、公务员、企事业单位考取、所选专业所属行业未来发展趋势、确实适合学的专业和学科；确定完专业后进行院校规划，高一高二学生上下浮动五十分进行院校池积累，高三上下浮动三十分进行院校池积累。 \n
              同时，根据每个月孩子的月考成绩，进行院校目标激励，详细解读各院校具体情况，让孩子有目标，有方向；与此同时，学生要每天将学习计划和学习总结发到服务群内进行每日学习督促；同时伴有学习状态提升和学习动力提升服务。\n
              服务周期自报名起至高考结束。
            </Text>
          </View>
        </View>
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
