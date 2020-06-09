import Taro, { Component } from '@tarojs/taro'
import {View, Label, Button, Image, Switch, Text} from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'
import {getGlobalData} from "../../utils/global";
import {getMemberList} from "../../utils/api";

class Index extends Component {

  config = {
    navigationBarTitleText: '高报志愿卡'
  }
  state = {
    phoneNumber: '0379-65116985',
    serviceType: '',
    serviceTypeName:'',
    serviceFee: '',
    banner:[
      'https://oss.srwmedu.cn/banner/banner1.jpg',
      'https://oss.srwmedu.cn/banner/banner2.jpg'
    ],
    flag1: false,
    flag2: true
  };
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount(){

  }

  componentDidMount() {
    let _serviceType = this.$router.params.type;
    let _serviceFee = this.$router.params.fee;
    let _serviceTypeName = ''
    this.setState((prevState)=>({
      serviceType: _serviceType,
      serviceTypeName: _serviceTypeName,
      serviceFee: _serviceFee
    }));
  }

  componentWillUnmount () { }

  componentDidShow () {
    //获取会员信息
    if(getGlobalData("userInfo")==null){
      return
    }
    //志愿填报（普高）21，志愿填报（艺术）20，测评次卡40，选科服务30，升学规划10，高报志愿卡50，高报升学卡60
    getMemberList({userId:getGlobalData("userInfo").userId,level:50}).then(({data}) => {
      if (data[0]!=null){
        this.setState({
          flag1: true,
          flag2:false
        })
      }
    })
  }

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
    Taro.showLoading({
      title: '订单创建中',
      mask: true
    });
    getService({memberType: "vip1"}).then(({data}) => {
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
  inputChange(e){
    this.setState(()=> ({
      phoneNumber: e.detail.value
    }));
  }
  render () {
    let { flag1,flag2,serviceFee, banner } = this.state;
    return (
      <View className='index'>
        <Image src={banner[0]} style='width:100%;height: 400rpx;margin-bottom: 16rpx;' />
        <View className='gbydyfw-price'>
          <View>
            <Label>高报志愿卡</Label>
            <Text hidden={flag1} style='color:#ff9913;'>￥9.90</Text>
            <Text hidden={flag1} style='color:#999;text-decoration: line-through;margin-left: 10px;'>￥500.00</Text>
            <Text hidden={flag2} style='color:#ff0000;margin-left: 20px;'> 已开通</Text>
          </View>
        </View>
        <View className='gbydyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;'>
          <View><Text style='font-size: 32rpx;color: #333333;'>【高报志愿卡】学生可通过购买我公司的高报志愿卡从而使用我公司专业版的志愿填报系统，查专业、选院校、看位次、招生计划等等等等，全国千万考生数据支撑，你想要的全都有！自己动手就可填报自己的志愿；我公司提供专业老师指导使用。</Text></View>
        </View>
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
