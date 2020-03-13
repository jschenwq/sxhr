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
      current: valueScrollToLower
    })
  }
  ScrollToLower() { //滚动到底部事件
   console.log(3)
  }

  //搜索大学
  searchSchool(type){
    Taro.navigateTo({
      url: '/component/search/index?type=1',
    })
  }
  //顶部大学操作
  schoolBd(data,index){
    //我的院校
    if(index == 0){
      Taro.navigateTo({
        url: '/packageCX/zdx/wdyx/index',
      })
    }
    //全部院校
    if(index == 1){
      Taro.navigateTo({
        url: '/packageCX/zdx/qbyx/index',
      })
    }
    //院校对比
    if(index == 2){
      Taro.navigateTo({
        url: '/packageCX/zdx/yxbd/index',
      })
    }
    //大学排名
    if(index == 3){
      Taro.navigateTo({
        url: '/packageCX/zdx/dxpm/index',
      })
    }
  }

  render () {
    return (
      <View className='zdx'>
        <View className="search" onClick={this.searchSchool.bind(this)}>
          <Icon className='searchIcon' color='#999' size='20' type='waiting' />
          <Text className='searchText'>请输入大学名称</Text>
        </View>

        <AtGrid className='school' columnNum='4' hasBorder={false} onClick={this.schoolBd.bind(this)} data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '我的院校'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '全部院校'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '院校比对'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
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
