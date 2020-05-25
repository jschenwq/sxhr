import Taro, { Component } from '@tarojs/taro'
import { View, Label, Button, Image, Switch } from '@tarojs/components'
import { getService } from '@utils/api'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '志愿填报'
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
    let _serviceTypeName = '（普高）'
    if('art' === _serviceType){
      _serviceTypeName = '（艺术类）';
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
    Taro.showLoading({
      title: '订单创建中',
      mask: true
    });
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
    let { serviceTypeName, serviceFee, banner } = this.state;
    return (
      <View className='index'>
        <Image src={banner[0]} style='width:100%;height: 400rpx;margin-bottom: 16rpx;' />
        <View className='gbydyfw-price'>
          <Label>志愿填报{serviceTypeName}</Label>
          <Text style='color: #ff9913;'> ￥{serviceFee}</Text>
        </View>
        <View className='gbydyfw-price' style='border-bottom: 1px solid #f0eff5;margin-bottom: 0px;'>
          <View><Text style='font-size: 32rpx;color: #333333;'>【志愿填报】专家一对一指导高考志愿填报，包括职业测评定专业及专业解读，未来发展方向制定，院校选择及解读，全部签约，保录取，掉档全额退费！（具体优惠政策可电话咨询或添加服务老师微信咨询） \n
            1、高考志愿填报服务流程： \n
            ①职业测评→做测评，解读测评报告 \n
            ②专业及院校筛选→确定专业，考虑城市 \n
            ③模拟填报，初步定稿→大跨度、大批量筛选院校 \n
            ④考前心理疏导→做好学生和家长应考梳理 \n
            ⑤考前状态激励和物品准备→提升学生自信心轻松应考 \n
            ⑥估分填报指导→考后估分，查看招生计划 \n
            ⑦知分填报指导→查看录取原则，一对一指导 \n
            ⑧跟踪录取查询→确认录取，补录征集志愿 \n
            ⑨准大学生训练营→大学必备礼仪技能学习 \n
            ⑩上大学前社会实践推荐→社会实践经验积累 \n
            ⑪大学生活及学习指导→竞选学生会、社团规划、专业学习、考研 \n
            ⑫大学实习工作指导→企业工作指导 \n
            <Text style='font-size: 32rpx;color: red;'>注：根据学生咨询时间服务流程会有一定变化，高考前都可按照上述流程执行，高考后出分前，会省去4、5两步，出分后，会省去4、5、6三步，其余照常执行。 \n</Text>
            2、志愿填报我们可提供服务总结 \n
            ①根据兴趣、性格、能力、职业规划、学科特长、价值观、父母职业、孩子想法至少推荐20个专业。 \n
            ②做好职业规划，考研、出国、就业、创业、考公、事业单位、国企、民企、外企。 \n
            ③分析地域差异、招生章程、招生计划、提档比例、录取规则、升学率、就业率、办学质量、院校环境、省排名。 \n
            ④模考、估分阶段多倍院校筛选，每次考试上下浮动30分准备院校池。 \n
            ⑤合理的梯度设置，上冲、中稳、下保院校，不错过任何低分上名校的机会。 \n
            ⑥根据大数据分析，排位法、线差法算出院校录取概率，让院校选择更加清晰，不浪费考生分数。 \n
            ⑦后续跟踪，孩子收到录取通知书不是服务的终止，而是新的服务开始，做好大学生涯的规划。 \n</Text></View>
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
