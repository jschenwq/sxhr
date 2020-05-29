import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { getUserInfo } from '@utils/api'
import './index.scss'
import auth from '@utils/auth';

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
    auth.pageCheckToken().then((result)=>{
      //授权成功
      if(result){
        getUserInfo({}).then(({data}) => {
          _mobile = data.mobile
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
      }else{
        Taro.navigateTo({
          url: '/pages/login/index'
        });
      }
    });
  }

  render () {
    return (
      <View className='index'>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/cpfw/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>测评次卡</Text>
            <Text style='color:#ff9913;'>￥500.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item'  onClick={this.getService.bind(this,"/packageFW/sxkfw/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>升学规划</Text>
            <Text style='color:#ff9913;'>￥1000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/hyfw/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>选科服务</Text>
            <Text style='color:#ff9913;'>￥1000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/gbzyk/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>高报志愿卡</Text>
            <View>
              <Text style='color:#ff9913;'>￥500.00</Text>
              <Text style='color:#999;text-decoration: line-through;margin-left: 10px;'>￥1980.00</Text>
            </View>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/gbsxk/index")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>高报升学卡服务</Text>
            <View>
              <Text style='color:#ff9913;'>￥1680.00</Text>
              <Text style='color:#999;text-decoration: line-through;margin-left: 10px;'>￥1980.00</Text>
            </View>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/gbydyfw/index?type=normal&fee=6000.00")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>志愿填报（普高）</Text>
            <Text style='color:#ff9913;'>￥6000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
        <View className='navigator-item' onClick={this.getService.bind(this,"/packageFW/gbydyfw/index?type=art&fee=8000.00")}>
          <Image className='navigator-item-image' src='https://oss.srwmedu.cn/ico/wx/vip.png' />
          <View className='navigator-item-title'>
            <Text>志愿填报（艺术类）</Text>
            <Text style='color:#ff9913;'>￥8000.00</Text>
          </View>
          <Text className='arrow-icon'></Text>
        </View>
      </View>
    )
  }
}

export default Index
