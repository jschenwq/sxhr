import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import {getUserEvaluationList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '提前批'
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

  gotoResult(id){
    Taro.showToast({
      title: '开发中敬请期待...',
      icon: 'none',
      mask: true,
    });
  }

  render () {
    const {wdcpList} = this.state;
    return (
      <View className='wdcplb'>
        <AtList>
          {
            wdcpList.map((item, index) => {
              return(
                <AtListItem key={index} onClick={this.gotoResult.bind(this,item.id)} title={item.typeName} note={item.createTime} thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' arrow='right' />
              )
            })
          }
        </AtList>
      </View>
    )
  }
}

export default Index
