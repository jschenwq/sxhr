import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView } from '@tarojs/components'
import { AtGrid , AtTabs, AtTabsPane} from 'taro-ui'
import SchoolItem from './component/schoolItem/index'
import {login, getSchoolList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '找大学',
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      schoolData: []
    };
  }

  componentDidMount(){
    getSchoolList({currentPage: 0,pageSize: 10}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data.list
      }));
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleClick (value) {
    this.setState({
      current: value//ScrollToLower
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
    let {schoolData} = this.state;
    return (
      <View className='zdx'>
        <View className="search" onClick={this.searchSchool.bind(this)}>
          <Icon className='searchIcon' color='#999' size='20' type='waiting' />
          <Text className='searchText'>请输入大学名称</Text>
        </View>

        <AtGrid className='school' columnNum={4} hasBorder={false} onClick={this.schoolBd.bind(this)} data={
          [
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%88%91%E7%9A%84%E9%99%A2%E6%A0%A1.png?Expires=1587216807&OSSAccessKeyId=LTAI4FdEikoP1PrsRk6bSbko&Signature=1T031NyxWtxu6Ce3oWbHRl0tHw0%3D',
              value: '我的院校'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E5%85%A8%E9%83%A8%E9%99%A2%E6%A0%A1.png?Expires=1587216721&OSSAccessKeyId=LTAI4FdEikoP1PrsRk6bSbko&Signature=gKhNC%2B5gxpwpCaWV4VPjGmTUm1E%3D',
              value: '全部院校'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E9%99%A2%E6%A0%A1%E5%AF%B9%E6%AF%94.png?Expires=1587218966&OSSAccessKeyId=LTAI4FdEikoP1PrsRk6bSbko&Signature=nfRdDY%2FoRpfd71Jg5zznX2Usqm4%3D',
              value: '院校比对'
            },
            {
              image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E5%A4%A7%E5%AD%A6%E6%8E%92%E5%90%8D.png?Expires=1587216788&OSSAccessKeyId=LTAI4FdEikoP1PrsRk6bSbko&Signature=jd8wwEfMiDG8uo4QnZwXXwsBRC8%3D',
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
                {
                  schoolData.map((item)=>{
                    return (<SchoolItem  item={item}/>);
                  })
                }
              </View>
            </ScrollView>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className='schoolList'>
              <View className='schoolList'>
                {
                  schoolData.map((item)=>{
                    return (<SchoolItem  item={item}/>);
                  })
                }
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className='schoolList'>
              <View className='schoolList'>
                {
                  schoolData.map((item)=>{
                    return (<SchoolItem  item={item}/>);
                  })
                }
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View className='schoolList'>
              <View className='schoolList'>
                {
                  schoolData.map((item)=>{
                    return (<SchoolItem  item={item}/>);
                  })
                }
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View className='schoolList'>
              <View className='schoolList'>
                {
                  schoolData.map((item)=>{
                    return (<SchoolItem  item={item}/>);
                  })
                }
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View className='schoolList'>
              <View className='schoolList'>
                {
                  schoolData.map((item)=>{
                    return (<SchoolItem  item={item}/>);
                  })
                }
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>

    )
  }
}

export default Index
