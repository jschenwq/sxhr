import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import {getUserEvaluationList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '我的测评报告'
  }

  constructor(props) {
    super(props)
    this.state = {
      wdcpList:[],//我的测评列表
    };
  }

  componentDidMount(){
    getUserEvaluationList().then(({data}) => {
      console.log(data.data);
      this.setState({
        wdcpList:data.data
      })
    })
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  gotoResult(id,type){
    if(type == 'PSYCHOLOGY'){
      Taro.navigateTo({
        url: '/packageCP/wdcpjg0/index?id=' + id
      });
    }
    if(type == 'DELAY'){
      Taro.navigateTo({
        url: '/packageCP/wdcpjg1/index?id=' + id
      });
    }
    if(type == 'LAZY'){
      Taro.navigateTo({
        url: '/packageCP/wdcpjg2/index?id=' + id
      });
    }
    if(type == 'STUDY'){
      Taro.navigateTo({
        url: '/packageCP/wdcpjg3/index?id=' + id
      });
    }
    if(type == 'FAMILY'){
      Taro.navigateTo({
        url: '/packageCP/wdcpjg4/index?id=' + id
      });
    }
    if(type == 'SELF'){
      Taro.navigateTo({
        url: '/packageCP/wdcpjg5/index?id=' + id
      });
    }
    if(type == 'INTEREST'){
      Taro.navigateTo({
        url: '/packageCP/wdcpjg6/index?id=' + id
      });
    }
  }

  render () {
    const {wdcpList} = this.state;
    return (
      <View className='wdcplb'>
        <AtList>
          {
            wdcpList.map((item, index) => {
              return(
                <AtListItem key={index} onClick={this.gotoResult.bind(this,item.id,item.type)} title={item.typeName} note={item.createTime} thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
              )
            })
          }
        </AtList>
      </View>
    )
  }
}

export default Index
