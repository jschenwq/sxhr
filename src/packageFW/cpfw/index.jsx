import Taro, { Component } from '@tarojs/taro'
import {View, Label, Button, Image, Switch, Text} from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'
import {getMemberList} from "../../utils/api";
import {getGlobalData} from "../../utils/global";

class Index extends Component {

  config = {
    navigationBarTitleText: '测评服务'
  }
  state = {
    phoneNumber: '0379-65116985',
    banner:[
      'https://oss.srwmedu.cn/banner/banner1.jpg',
      'https://oss.srwmedu.cn/banner/banner2.jpg'
    ],
    flag1: false,
    flag2: true
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    //获取会员信息
    if(getGlobalData("userInfo")==null){
      return
    }
    //志愿填报（普高）21，志愿填报（艺术）20，测评次卡40，选科服务30，升学规划10，高报志愿卡50，高报升学卡60
    getMemberList({userId:getGlobalData("userInfo").userId,level:40}).then(({data}) => {
      if (data[0]!=null){
        this.setState({
          flag1: true,
          flag2:false
        })
      }

    })
  }

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
          });
          this.setState({
            flag1: true,
            flag2:false
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
    let {flag1,flag2,phoneNumber,banner} = this.state;
    return (
      <View className='index'>
        <Image src={banner[0]} style='width:100%;height: 500rpx;margin-bottom: 16rpx;' />
        <View className='hyfw-price'>
          <Label>测评次卡</Label>
          <Text hidden={flag1} style='color: #ff9913;'> ￥9.90</Text>
          <Text hidden={flag1} style='color:#999;text-decoration: line-through;margin-left: 10px;'>￥500.00</Text>
          <Text hidden={flag2} style='color:#ff0000;margin-left: 20px;'> 已开通</Text>
        </View>

        <View className='hyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;color: #7b7b7b;padding: 20rpx 40rpx 4rpx;font-size: 30rpx;'>
          {/*<Image src={hyfw} style='margin-top: 10rpx;width: 100%;height: 240rpx;' />*/}
          <Text>【测评次卡】学生科通过购买专业版的测评卡登录进入我们的测评系统进行测评，我公司提供一对一专家指导，为孩子进行测评报告解读，全方位了解学生个性特质，确定出未来适合学的专业和发展方向。</Text>
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
