import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem } from 'taro-ui'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(){

    this.state = {
      userName: 'K'
    };
  }

  componentWillMount(){

  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleBdsj(){//绑定手机
    Taro.navigateTo({
      url: '/packageWD/bdsj/index'
    });
  }
  handleHykjh(){//会员卡激活
    Taro.navigateTo({
      url: '/packageWD/hykjh/index'
    });
  }
  openMyCP(){//我的测评
    Taro.navigateTo({
      url: '/packageWD/wdcp/index'
    });
  }
  openMyXK(){//我的选科
    Taro.navigateTo({
      url: '/packageWD/wdxk/index'
    });
  }
  clickServiceCall(){//客服电话
    Taro.makePhoneCall({
      phoneNumber: '4000022985'
    });
  }
  exchangeUser(){
    Taro.navigateTo({
      url: '/packageWD/qhzh/index'
    });
  }
  render () {
    return (
      <View className='index'>
        <View className='user'>
          <AtAvatar circle size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
          <View className='user-name'>{userName}</View>
        </View>
        <AtList>
          <AtListItem
            title='获取VIP权限'
            arrow='right'
            iconInfo={{ size:12, color: '#f99300', value: 'sketch'}}
          />
          <AtListItem
            title='绑定手机'
            arrow='right'
            onClick={this.handleBdsj.bind(this)}
            iconInfo={{ size: 12, color: '#afafaf', value: 'iphone'}}
          />
          <AtListItem
            title='会员卡激活'
            arrow='right'
            onClick={this.handleHykjh}
            iconInfo={{ size: 12, color: '#f99300', value: 'credit-card'}}
          />
          <AtListItem
            title='我的测评'
            arrow='right'
            onClick={this.openMyCP}
            iconInfo={{ size: 12, color: '#ef7357', value: 'file-generic'}}
          />
          <AtListItem
            title='我的选科'
            arrow='right'
            onClick={this.openMyXK}
            iconInfo={{ size: 12, color: '#ff8360', value: 'shopping-bag'}}
          />
          <AtListItem
            title='客服电话：400-0022-985'
            arrow='right'
            onClick={this.clickServiceCall}
            extraText='服务时间：8:30-17:30'
            iconInfo={{ size: 12, color: '#4cc100', value: 'phone'}}
          />
          <AtListItem
            title='切换账号'
            arrow='right'
            onClick={this.exchangeUser}
            iconInfo={{ size: 12, color: '#f59133', value: 'user'}}
          />
        </AtList>
      </View>
    )
  }
}

export default Index
