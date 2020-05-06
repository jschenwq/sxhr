import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtList, AtListItem  } from 'taro-ui'
import {getThirdZy} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '专业类别动态获取'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      thirdZy:[]
    };
  }

  componentDidMount(){
    const type = this.$router.params.type;
    getThirdZy({type:type}).then(({data}) => {
      console.log(data);
      this.setState({
        thirdZy:data
      })
    })
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  //跳转职业详情
  gotoZyxq(majorId){
    Taro.navigateTo({
      url: '/packageCX/czy/zyxq/index?majorId=' + majorId,
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    // const tabList = [{ title: '专业详情' }, { title: '职业方向' }];
    const tabList = [{ title: '专业详情' }];
    const {thirdZy} = this.state;
    return (
      <View className ='zyfl'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='qbzy'>
              <View className ='topTip'>
                <Text onClick={this.handleChangeB.bind(this)} className ='sysm'>包含专业{thirdZy.length}个</Text>
              </View>
              <AtList>
                {
                  thirdZy.map((item,index) => {
                    return(
                      <AtListItem key={index} onClick={this.gotoZyxq.bind(this,item.majorId)} title={item.majorName} note={'学制：'+ item.learnYear} arrow='right' />
                    )
                  })
                }
              </AtList>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className ='qbzy'>
              敬请期待
            </View>

          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
