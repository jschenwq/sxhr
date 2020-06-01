import Taro, { Component } from '@tarojs/taro'
import {View, Label, Button, Image, Switch, Text} from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '高报升学卡服务'
  }
  state = {
    phoneNumber: '0379-65116985',
    serviceType: '',
    serviceTypeName:'',
    serviceFee: '',
    banner:[
      'https://oss.srwmedu.cn/banner/banner1.jpg',
      'https://oss.srwmedu.cn/banner/banner2.jpg'
    ]
  }
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
    Taro.showLoading({
      title: '订单创建中',
      mask: true
    });
    getService({memberType: "vip2"}).then(({data}) => {
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
    let { serviceFee,banner } = this.state;
    return (
      <View className='index'>
        <Image src={banner[0]} style='width:100%;height: 400rpx;margin-bottom: 16rpx;' />
        <View className='gbydyfw-price'>
          <Label>高报升学卡服务</Label>
          <View>
            <Text style='color:#ff9913;'>￥9.90</Text>
            <Text style='color:#999;text-decoration: line-through;margin-left: 10px;'>￥1680.00</Text>
            {/*<Text style='color:#999;text-decoration: line-through;margin-left: 10px;'>￥1980.00</Text>*/}
          </View>
        </View>
        <View className='gbydyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;'>
          <View><Text style='font-size: 32rpx;color: #333333;'>【高报升学卡服务】公司为学生提供专业版的测评卡和高保卡各一张，除学生可自行使用外，公司还提供专业教师免费一对一咨询，做好测评报告解读和专业定位，做好院校规划，依托现有成绩上下浮动三十分，一分一档进行院校筛选，选出适合孩子的院校，待高考成绩出来后可在此范围内依据具体分数填报志愿。</Text></View>
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
