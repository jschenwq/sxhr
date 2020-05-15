// import Taro, { Component } from '@tarojs/taro'
// import {View, ScrollView, Image, Text} from '@tarojs/components'
// import {AtGrid, AtRate, AtTabs, AtTabsPane} from 'taro-ui'
import SchoolItem from './component/schoolItem/index'
import {login, getSchoolRankList} from '@utils/api'
// import './index.scss'


import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtActivityIndicator, AtTabs, AtTabsPane } from 'taro-ui'
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
      tabList:['综合','985','211','财经','政法','师范','体育','艺术','医药','工程','理工','工业','交通'],
      currentPage:0,

      dargStyle: {//下拉框的样式
        top: 0 + 'px'
      },
      downDragStyle: {//下拉图标的样式
        height: 0 + 'px'
      },
      downText: '下拉刷新',
      upDragStyle: {//上拉图标样式
        height: 0 + 'px'
      },
      pullText: '上拉加载更多',
      start_p: {},
      scrollY:true,
      dargState: 0//刷新状态 0不做操作 1刷新 -1加载更多
    };
  }

  componentDidMount(){
    //页面加载获取综合排名
    this.handleClick (0)

  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  // onReachBottom(){
  //   Taro.showToast({
  //     title: '敬请期待！',
  //     icon: 'none',
  //     mask: true,
  //   });
  // }

  ScrollToLower() { //滚动到底部事件
    Taro.showToast({
      title: '敬请期待3333！',
      icon: 'none',
      mask: true,
    });
  }

  handleClick (value) {
    this.setState({
      current: value
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

  reduction() {//还原初始设置
    const time = 0.5;
    this.setState({
      upDragStyle: {//上拉图标样式
        height: 0 + 'px',
        transition: `all ${time}s`
      },
      dargState: 0,
      dargStyle: {
        top: 0 + 'px',
        transition: `all ${time}s`
      },
      downDragStyle: {
        height: 0 + 'px',
        transition: `all ${time}s`
      },
      scrollY:true
    })
    setTimeout(() => {
      this.setState({
        dargStyle: {
          top: 0 + 'px',
        },
        upDragStyle: {//上拉图标样式
          height: 0 + 'px'
        },
        pullText: '上拉加载更多',
        downText: '下拉刷新'
      })
    }, time * 1000);
  }
  touchStart(e) {
    this.setState({
      start_p: e.touches[0]
    })
  }
  touchmove(e) {
    let that = this
    let move_p = e.touches[0],//移动时的位置
      deviationX = 0.30,//左右偏移量(超过这个偏移量不执行下拉操作)
      deviationY = 70,//拉动长度（低于这个值的时候不执行）
      maxY = 100;//拉动的最大高度

    let start_x = this.state.start_p.clientX,
      start_y = this.state.start_p.clientY,
      move_x = move_p.clientX,
      move_y = move_p.clientY;


    //得到偏移数值
    let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
    if (dev < deviationX) {//当偏移数值大于设置的偏移数值时则不执行操作
      let pY = Math.abs(move_y - start_y) / 3.5;//拖动倍率（使拖动的时候有粘滞的感觉--试了很多次 这个倍率刚好）
      if (move_y - start_y > 0) {//下拉操作
        if (pY >= deviationY) {
          this.setState({ dargState: 1, downText: '释放刷新' })
        } else {
          this.setState({ dargState: 0, downText: '下拉刷新' })
        }
        if (pY >= maxY) {
          pY = maxY
        }
        this.setState({
          dargStyle: {
            top: pY + 'px',
          },
          downDragStyle: {
            height: pY + 'px'
          },
          scrollY:false//拖动的时候禁用
        })
      }
      if (start_y - move_y > 0) {//上拉操作
        // console.log('上拉操作')
        if (pY >= deviationY) {
          this.setState({ dargState: -1, pullText: '释放加载更多' })
        } else {
          this.setState({ dargState: 0, pullText: '上拉加载更多' })
        }
        if (pY >= maxY) {
          pY = maxY
        }
        this.setState({
          dargStyle: {
            top: -pY + 'px',
          },
          upDragStyle: {
            height: pY + 'px'
          },
          scrollY: false//拖动的时候禁用
        })
      }

    }
  }
  pull() {//上拉
    console.log('上拉')
    let index = this.state.current;
    getSchoolRankList({currentPage: ++this.state.currentPage,pageSize: 10,rankType:this.state.rankTypeArr[index],rankYear:2020}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: prevState.schoolData.concat(data.list),
        current: prevState.current
      }));
    });
  }
  down() {//下拉
    console.log('下拉')
    // this.props.onDown()
  }
  ScrollToUpper() { //滚动到顶部事件
    console.log('滚动到顶部事件')
  }
  ScrollToLower() { //滚动到底部事件
    console.log('滚动到底部事件')
  }
  touchEnd(e) {
    if (this.state.dargState === 1) {
      this.down()
    } else if (this.state.dargState === -1) {
      this.pull()
    }
    this.reduction()
  }



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
                <AtTabsPane current={this.state.current} index={index} key={index}>
                  {/*<ScrollView onScrollToLower={this.ScrollToLower}>*/}
                  {/*<View className='schoolList'>*/}
                  {/*{*/}
                  {/*schoolData.map((item)=>{*/}
                  {/*return (<SchoolItem  item={item}/>);*/}
                  {/*})*/}
                  {/*}*/}
                  {/*</View>*/}
                  {/*</ScrollView>*/}


                  <View className='dragUpdataPage'>
                    {/*<View className='downDragBox' style={downDragStyle}>*/}
                      {/*<AtActivityIndicator></AtActivityIndicator>*/}
                      {/*<Text className='downText'>{this.state.downText}</Text>*/}
                    {/*</View>*/}
                    <ScrollView
                      style={dargStyle}
                      onTouchMove={this.touchmove}
                      onTouchEnd={this.touchEnd}
                      onTouchStart={this.touchStart}
                      onScrollToUpper={this.ScrollToUpper}
                      onScrollToLower={this.ScrollToLower}
                      className='dragUpdata'
                      scrollY={this.state.scrollY}
                      scrollWithAnimation>
                      <View className='schoolList'>
                        {
                          schoolData.map((item,indexS)=>{
                            return (<SchoolItem  item={item} key={indexS}/>);
                          })
                        }
                      </View>
                    </ScrollView>
                    <View className='upDragBox' style={upDragStyle}>
                      <AtActivityIndicator></AtActivityIndicator>
                      <Text className='downText'>{this.state.pullText}</Text>
                    </View>
                  </View>
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
