import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { getUserInfo } from '@utils/api'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '服务项目'
  }

  state = {
    phoneNumber: ''
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    //检查登录用户是否绑定手机号
    getUserInfo({}).then(({data}) => {
      this.setState(()=> ({
        phoneNumber: data.mobile
      }));
    });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getService(url){
    let _mobile = "";

    getUserInfo({}).then(({data}) => {
      _mobile = data.mobile
      console.log(_mobile);

      if( _mobile === null || _mobile === ''){
        Taro.navigateTo({
          url: '/packageWD/bdsj/index'
        });
      }else{
        Taro.navigateTo({
          url: url
        });
      }
    });


  }

  render () {
    return (
      <View className='index'>
        <View className='navigator-item'  onClick={this.getService.bind(this,"/packageFW/sxkfw/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>升学规划</Text>
            <Text style='color:#ff9913;'>￥ 1000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/gbydyfw/index?type=normal&fee=6000.00")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>志愿填报（普高）</Text>
            <Text style='color:#ff9913;'>￥ 6000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/gbydyfw/index?type=art&fee=8000.00")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>志愿填报（艺术）</Text>
            <Text style='color:#ff9913;'>￥ 8000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/hyfw/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>选科服务</Text>
            <Text style='color:#ff9913;'>￥ 1000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/cpfw/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>测评次卡</Text>
            <Text style='color:#ff9913;'>￥ 500.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
      </View>
    )
  }
}

export default Index
