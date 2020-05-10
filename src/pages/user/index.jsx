import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem } from 'taro-ui'
import './index.scss'
import { getGlobalData } from "../../utils/global";

class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(props){
    super(props);

    this.state = {
      avatarUrl: '',
      userName: '',
      loginHidden: false
    };

  }

  componentDidMount() {

  }

  componentWillMount(){

  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {

  }

  componentDidShow () {
    //获取用户信息
    if(getGlobalData("userInfo")!=null&&getGlobalData("userInfo")!=''){
      let userinfo = getGlobalData("userInfo")
      this.setState({
        avatarUrl: userinfo.avatarUrl,
        userName: userinfo.userName,
        loginHidden: true
      })
    }
  }

  componentDidHide () {

  }

  clickServiceCall(){//客服电话
    Taro.makePhoneCall({
      phoneNumber: '037965116985'
    });
  }
  handClick(url){//跳转
    Taro.navigateTo({
      url: url
    });
  }
  render () {
    let { avatarUrl, userName,loginHidden } = this.state;
    return (
      <View className='index'>
        <View className='user'>
          <AtAvatar circle size='large' image={avatarUrl}></AtAvatar>
          <View className='user-name'>{userName}</View>
          <Text  hidden={loginHidden} onClick={this.handClick.bind(this, '/pages/login/index')}>点击登录</Text>
        </View>
        <AtList>
          {/*<AtListItem
            title='获取VIP权限'
            arrow='right'
            onClick={this.handClick.bind(this, "/packageFW/hyfw/index")}
            iconInfo={{ size:12, color: '#f99300', value: 'sketch'}}
          />*/}
          <AtListItem
            title='绑定手机'
            arrow='right'
            onClick={this.handClick.bind(this, '/packageWD/bdsj/index')}
            iconInfo={{ size: 12, color: '#afafaf', value: 'iphone'}}
          />
          <AtListItem
            title='会员卡激活'
            arrow='right'
            onClick={this.handClick.bind(this, '/packageWD/hykjh/index')}
            iconInfo={{ size: 12, color: '#f99300', value: 'credit-card'}}
          />
          <AtListItem
            title='我的测评'
            arrow='right'
            onClick={this.handClick.bind(this, '/packageCP/wdcplb/index')}
            iconInfo={{ size: 12, color: '#ef7357', value: 'file-generic'}}
          />
          <AtListItem
            title='我的选科'
            arrow='right'
            onClick={this.handClick.bind(this, '/packageWD/wdxk/index')}
            iconInfo={{ size: 12, color: '#ff8360', value: 'shopping-bag'}}
          />
          <AtListItem
            title='客服电话：0379-65116985'
            arrow='right'
            onClick={this.clickServiceCall}
            extraText='服务时间：9:00-17:00'
            iconInfo={{ size: 12, color: '#4cc100', value: 'phone'}}
          />
          {/*<AtListItem*/}
            {/*title='切换账号'*/}
            {/*arrow='right'*/}
            {/*onClick={this.handClick.bind(this, '/packageWD/qhzh/index')}*/}
            {/*iconInfo={{ size: 12, color: '#f59133', value: 'user'}}*/}
          {/*/>*/}
        </AtList>
      </View>
    )
  }
}

export default Index
