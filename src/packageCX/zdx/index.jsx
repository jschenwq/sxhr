import Taro, { Component } from '@tarojs/taro'
import {View, ScrollView, Image, Text} from '@tarojs/components'
import {AtGrid, AtRate, AtTabs, AtTabsPane} from 'taro-ui'
import SchoolItem from './component/schoolItem/index'
import {login, getSchoolRankList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '找大学',
    onReachBottomDistance:300
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      schoolData: [],
      rankTypeArr: [40,21,22,34,39,35,37,36,38,30,32,33,31],
      tabList:['综合','985','211','财经','政法','师范','体育','艺术','医药','工程','理工','工业','交通']
    };
  }

  componentDidMount(){
    //页面加载获取综合排名
    this.handleClick (0)

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  ScrollToLower() { //滚动到底部事件
    console.log(3333333)
  }

  handleClick (value) {
    this.setState({
      current: value//ScrollToLower
    })

    getSchoolRankList({currentPage: 0,pageSize: 10,rankType:this.state.rankTypeArr[value],rankYear:2020}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data.list,
        current: value
      }));
    });
  }

  //搜索大学
  searchSchool(type){
    Taro.navigateTo({
      url: '/component/search/index?type=1',
    })
  }
  //顶部大学操作
  // schoolBd(data,index){
  //   //我的院校
  //   if(index == 0){
  //     Taro.navigateTo({
  //       url: '/packageCX/zdx/wdyx/index',
  //     })
  //   }
  // }

  render () {
    let {schoolData,tabList,dargStyle,downDragStyle,upDragStyle } = this.state;
    return (
      <View className='zdx'>
        <View className="search" onClick={this.searchSchool.bind(this)}>
          <Icon className='searchIcon' color='#999' size='20' type='waiting' />
          <Text className='searchText'>请输入大学名称</Text>
        </View>

        {/*<AtGrid className='school' columnNum={4} hasBorder={false} onClick={this.schoolBd.bind(this)} data={*/}
          {/*[*/}
            {/*{*/}
              {/*image: 'http://sxhr-school.oss-cn-beijing.aliyuncs.com/ico/wx/%E6%88%91%E7%9A%84%E9%99%A2%E6%A0%A1.png',*/}
              {/*value: '我的院校'*/}
            {/*},*/}
        {/*} />*/}

        <AtTabs
          className='schoolAll'
          current={this.state.current}
          scroll
          tabList={[
            {title: '综合'},{title: '985'},{title: '211'},{title: '财经'},{title: '政法'},{title: '师范'},
            {title: '体育'},{title: '艺术'},{title: '医药'},{title: '工程'},{title: '理工'},{title: '工业'},{title: '交通'}
          ]}
          onClick={this.handleClick.bind(this)}>

          {
            tabList.length > 0 && tabList.map((item2,index) => {
              return (
                <AtTabsPane current={this.state.current} index={index}>
                  <scrool-view onScrollToLower={this.ScrollToLower}>
                    <View className='schoolList'>
                      {
                        schoolData.map((item)=>{
                          return (<SchoolItem  item={item}/>);
                        })
                      }
                    </View>
                  </scrool-view>
                </AtTabsPane>
              )
            })
          }

        </AtTabs>
      </View>

    )
  }
}

export default Index
