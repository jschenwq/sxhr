import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView } from '@tarojs/components'
import { AtGrid , AtTabs, AtTabsPane} from 'taro-ui'
import SchoolItem from './component/schoolItem/index'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '找大学',
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleClick (value) {
    this.setState({
      current: value
    })
  }
  ScrollToLower() { //滚动到底部事件
   console.log(3)
  }
  render () {
    return (
      <View className='zdx'>
        <View className="search">
          <Icon className='searchIcon' color='#999' size='20' type='waiting' />
          <Text className='searchText'>请输入大学名称</Text>
        </View>

        <AtGrid className='school' columnNum='4' hasBorder={false} data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '我的院校'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '全部院校'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '院校比对'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '大学排名'
            }
          ]
        } />

        <AtTabs
          className='schoolAll'
          current={this.state.current}
          scroll
          tabList={[
            { title: '热门院校' },
            { title: '新闻传播学' },
            { title: '数据科学与大数据技术' },
            { title: '工商管理' },
            { title: '土木工程' },
            { title: '教育' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <ScrollView
              onScrollToLower={this.ScrollToLower.bind(this)}>
              <View className='schoolList'>
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
                <SchoolItem />
              </View>
            </ScrollView>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className='schoolList'>
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className='schoolList'>
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View className='schoolList'>
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View className='schoolList'>
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View className='schoolList'>
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
              <SchoolItem />
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>

    )
  }
}

export default Index
