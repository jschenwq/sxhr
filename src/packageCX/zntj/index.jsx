import Taro, { Component } from '@tarojs/taro'
import {Picker, ScrollView, Text, View} from '@tarojs/components'
import {AtGrid, AtButton, AtRate, AtTabs, AtTabsPane, AtIcon} from 'taro-ui'
import {login,getSchoolRecommendList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '智能推荐'
  }
  constructor(props) {
    super(props)
    this.state = {
      current:0,
      score:0,
      schoolData: [],
      selectorType: ["理科","文科"],//考生类别
      selectorTypeChecked: "理科",//考生类别
      rankTypeArr: [40,21,22,34,39,35,37,36,38,30,32,33,31],
      tabList:['综合','985','211','财经','政法','师范','体育','艺术','医药','工程','理工','工业','交通'],
      yearList:[2019,2018,2017]
    };
  }

  componentDidMount(){

    this.setState({
      score:  this.$router.params.score,
      selectorTypeChecked:  this.$router.params.type=="0"?"文科":"理科"
    },()=>{
      console.log(this.state.score);
      console.log(this.state.selectorTypeChecked)
      //页面加载获取综合排名
      this.handleClick (0)
    });

  }

  onScoreChange=(e)=>{
    this.setState({
      score: e.detail.value
    });
    var year = this.state.yearList[this.state.current];
    var stuType = this.state.selectorTypeChecked;
    var score =  e.detail.value;

    getSchoolRecommendList({year:year,stuType:stuType,score:score, stuProvince:"河南",rankType:10}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data
      }));
    });
  }

  onSelectTypeChange=(e)=>{//年限选择器触发事件

    this.setState({
      selectorTypeChecked: this.state.selectorType[e.detail.value]
    });
    var year = this.state.yearList[this.state.current];
    var stuType = this.state.selectorType[e.detail.value];
    var score = this.state.score;

    getSchoolRecommendList({year:year,stuType:stuType,score:score, stuProvince:"河南",rankType:10}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data
      }));
    });

  }

  handleClick (value) {
    var year = this.state.yearList[value];
    var stuType = this.state.selectorTypeChecked;
    var score = this.state.score;

    getSchoolRecommendList({year:year,score:score,stuProvince:"河南",stuType:stuType,rankType:10}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data,
        current: value
      }));
    });
  }

  //查看学校详情
  gotoSchoolDetail(schoolId){
    Taro.navigateTo({
      url: '/packageCX/zdx/schoolDetail/index?schoolId='+schoolId,
    })
  }

  render () {
    let {schoolData,yearList,tabList,selectorType,selectorTypeChecked} = this.state;
    return (
      <View className='zdx'>
        <view style="display: flex;">
          <View className="search">
            <AtIcon   className='searchIcon' value='search' size='20'></AtIcon>
            <Input className='searchText' type='text' placeholder={'请输入高考/模考总数'} value={this.state.score} onChange={this.onScoreChange}/>
          </View>
          <view style="width:20%;line-height:35px;">
            <Picker mode='selector' range={selectorType} onChange={this.onSelectTypeChange}>
              <View style="color:#666;text-align: center;">
                <Text>{selectorTypeChecked}</Text>
                <AtIcon value='chevron-down' size='15'></AtIcon>
              </View>
            </Picker>
          </view>

        </view>

        <AtTabs
          className='schoolAll'
          current={this.state.current}
          scroll
          tabList={[
            {title: '2019'},{title: '2018'},{title: '2017'}
          ]}
          onClick={this.handleClick.bind(this)}>
          {
            yearList.length > 0 && yearList.map((item2,index) => {
              return (
                <AtTabsPane current={this.state.current} index={index} key={index}>
                  {
                    schoolData.map((item,index)=>{
                      return (
                        <View className='schoolItem' onClick={this.gotoSchoolDetail.bind(this, item.schoolId)}>
                          <View className='itemContent'>
                            <View className='schoolImg'>
                              <Image src={item.logoPath} className='schoolLogo' />
                            </View>
                            <View className="schoolInfo">
                              <View className="schoolTitle">
                                <Text className='schoolName'>{item?item.schoolName:''}</Text>
                                <Text className='schoolSx'>{item?item.nature:''}</Text>
                                <Text className='schoolRate'>最低分：{item.minScore}</Text>
                                <Text className='schoolRate'>|</Text>
                                <Text className='schoolRate'>录取概率：{item.rate}%</Text>
                              </View>
                              <View className='schoolContent'>
                                <View className='schoolaAttr'>{item?item.eduLevel:''}</View>
                                <View className="schoolLocation">
                                  <Icon className='noticeIcon' color='#A1A1A1' size='14' type='waiting' />{item?item.province:''}
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    })
                  }

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
