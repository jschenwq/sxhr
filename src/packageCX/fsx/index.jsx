import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane,AtFloatLayout } from 'taro-ui'
import {getAllList, getSchoolScore, getMajorScore,getSchoolPlan} from '@utils/api'
import classNames from 'classnames'
import $ from '@utils/http'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '学校信息'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      schoolId:0,
      selector: [],
      provinceList:[],
      province:'河南',
      selectorType: ["理科","文科"],//考生类别
      type: '理科',
      yearList:['2019','2018','2017'],
      year:2017,
      majorScore:[],
      schoolNewsList:[],
      content:'',
      isOpened:false,
      schoolScore:[]
    };
  }

  componentDidMount(){

    this.setState({
      current: parseInt(this.$router.params.current),
      schoolId: parseInt(this.$router.params.schoolId)
    })

    //获取数据字典
    getAllList().then(({data}) => {
      this.setState({
        selector: data.stuType,
        provinceList:data.province
      })
    });

    //获取学校分数线--参数解构赋值
    getSchoolScore({province:this.state.province,schoolId:this.$router.params.schoolId,type:this.state.type}).then(({data}) => {
      this.setState({
        schoolScore: data.list,
      })
    })

  }

  handleClick (value) {
    this.setState({
      current: value,
    })

    if(value == 0){
      // 获取学校分数线
      getSchoolScore({province:this.state.province,schoolId:this.state.schoolId,type:this.state.type}).then(({data}) => {
        this.setState({
          schoolScore: data.list,
        })
      })
    }else if(value == 1){
      //获取专业分数线
      getMajorScore({type:this.state.type,province:this.state.province,year:this.state.year,schoolId:this.state.schoolId}).then(({data}) => {
        this.setState({
          majorScore: data,
        })
      })
    }else {
      //获取招生计划
      getSchoolPlan({schoolId:this.state.schoolId}).then(({data}) => {
        this.setState({
          schoolNewsList: data.list,
        })
      })
    }
  }

  onChange = e => {
    this.setState({
      type: this.state.selector[e.detail.value]
    })
    if(this.state.current == 0){
      // 获取学校分数线
      getSchoolScore({province:this.state.province,schoolId:this.state.schoolId,type:this.state.type}).then(({data}) => {
        this.setState({
          schoolScore: data.list,
        })
      })
    }else if(this.state.current == 1){
      //获取专业分数线
      getMajorScore({type:this.state.selector[e.detail.value],province:this.state.province,year:this.state.year,schoolId:this.state.schoolId}).then(({data}) => {
        this.setState({
          majorScore: data,
        })
      })
    }else {
      //获取招生计划
      getSchoolPlan({schoolId:this.state.schoolId}).then(({data}) => {
        this.setState({
          schoolNewsList: data.list,
        })
      })
    }
  };

  onChangeProvince = e => {
    this.setState({
      province: this.state.provinceList[e.detail.value]
    })

    if(this.state.current == 0){
      // 获取学校分数线
      // getSchoolScore({type:this.state.type,province:this.state.provinceList[e.detail.value],schoolId:this.state.schoolId}).then(({data}) => {
      getSchoolScore({province:this.state.provinceList[e.detail.value],schoolId:this.state.schoolId,type:this.state.type}).then(({data}) => {
        this.setState({
          schoolScore: data.list,
        })
      })
    }else if(this.state.current == 1){
      //获取专业分数线
      getMajorScore({type:this.state.type,province:this.state.provinceList[e.detail.value],year:this.state.year,schoolId:this.state.schoolId}).then(({data}) => {
        this.setState({
          majorScore: data,
        })
      })
    }
  };

  onChangeType = e => {
    this.setState({
      type: this.state.selectorType[e.detail.value]
    })

    if(this.state.current == 0){
      // 获取学校分数线
      // getSchoolScore({type:this.state.type,province:this.state.provinceList[e.detail.value],schoolId:this.state.schoolId}).then(({data}) => {
      getSchoolScore({province:this.state.province,schoolId:this.state.schoolId,type:this.state.selectorType[e.detail.value]}).then(({data}) => {
        this.setState({
          schoolScore: data.list,
        })
      })
    }else if(this.state.current == 1){
      //获取专业分数线
      getMajorScore({type:this.state.type,province:this.state.provinceList[e.detail.value],year:this.state.year,schoolId:this.state.schoolId}).then(({data}) => {
        this.setState({
          majorScore: data,
        })
      })
    }
  };

  onChangeYear = e => {
    this.setState({
      year: this.state.yearList[e.detail.value]
    })

    //获取专业分数线
    getMajorScore({type:this.state.type,province:this.state.province,year:this.state.yearList[e.detail.value],schoolId:this.state.schoolId}).then(({data}) => {
      this.setState({
        majorScore: data,
      })
    })
  };

  handleShowDetail(path){

    this.setState({
      isOpened: true
    });

    $.ajaxJson(path,'GET').then(({data})=>{
      this.setState({

        content: data
      });
    });
  }

  handleClose(){
    this.setState({
      isOpened: false
    });
  }
  render () {
    const {schoolScore, majorScore,schoolNewsList,isOpened,content} = this.state;
    const tabList = [{ title: '院校分数线' }, { title: '专业分数线' }, { title: '招生计划' }];
    return (
      <View className='fsx'>

        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='fsxContent'>
              {/*省份*/}
              <View className='selectZy'>
                <Picker className='pickerC' mode='selector' range={this.state.provinceList} onChange={this.onChangeProvince}>
                  <View className='picker'>
                    {this.state.province}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>
              {/*文理科*/}
              <View className='selectZy'>
                <Picker className='pickerC' mode='selector' range={this.state.selectorType} onChange={this.onChangeType}>
                  <View className='picker'>
                    {this.state.type}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>

              {/*<Text onClick={this.handleChangeB.bind(this)} className ='sysm'>数据说明</Text>*/}
            </View>

            <View className='at-row tableTitle'>
              <View className='at-col font2 selectTop'>年份</View>
              <View className='at-col font2 selectTop'>招生批次</View>
              <View className='at-col font2 selectTop'>招生类型</View>
              {/*<View className='at-col font2 selectTop'>文理科</View>*/}
              <View className='at-col font2 selectTop'>最低分</View>
            </View>

            <View className='scoreN'>
              {
                schoolScore.length > 0 && schoolScore.map((item,index) => {
                  return (
                    <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                      <View className='at-col selectTop'>{item.year}</View>
                      <View className='at-col selectTop'>{item.batch?item.batch:''}</View>
                      <View className='at-col selectTop'>{item.enrollType}</View>
                      {/*<View className='at-col selectTop'>{item.type}</View>*/}
                      <View className='at-col selectTop'>{item.minScore}</View>
                    </View>
                  )
                })
              }
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={1}>
            <View className='fsxContent'>
              {/*文理科*/}
              <View className='selectZy'>
                <Picker className='pickerC' mode='selector' range={this.state.selector} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.type}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>
              {/*省份*/}
              <View className='selectZy'>
                <Picker className='pickerC' mode='selector' range={this.state.provinceList} onChange={this.onChangeProvince}>
                  <View className='picker'>
                    {this.state.province}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>

              {/*年份*/}
              <View className='selectZy'>
                <Picker className='pickerC' mode='selector' range={this.state.yearList} onChange={this.onChangeYear}>
                  <View className='picker'>
                    {this.state.year}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>

              {/*<Text onClick={this.handleChangeB.bind(this)} className ='sysm'>数据说明</Text>*/}
            </View>

            <View className='at-row tableTitle'>
              <View className='at-col font2 selectTop'>专业名称</View>
              <View className='at-col font2 selectTop'>年份</View>
              <View className='at-col font2 selectTop'>考生类别</View>
              <View className='at-col font2 selectTop'>录取批次</View>
              <View className='at-col font2 selectTop'>最低分</View>
            </View>

            <View className='scoreN'>
              {
                majorScore.map((item,index) => {
                  return (
                    <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                      <View className='at-col selectTop'>{item.majorName}</View>
                      <View className='at-col selectTop'>{item.year}</View>
                      <View className='at-col selectTop'>{item.type}</View>
                      <View className='at-col selectTop'>{item.batch}</View>
                      <View className='at-col selectTop'>{item.minScore}</View>
                    </View>
                  )
                })
              }
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={2}>
            <View className='schoolPlan'>
              {
                schoolNewsList.map((item,index) => {
                  return (
                    <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                      <View onClick={this.handleShowDetail.bind(this,item.contentPath)}>{item.title}</View>
                    </View>
                  )
                })
              }
            </View>
          </AtTabsPane>
        </AtTabs>

        <AtFloatLayout isOpened={isOpened} title="学校简介" onClose={this.handleClose.bind(this)}>
          <RichText nodes={content} />
        </AtFloatLayout>
      </View>
    )
  }
}

export default Index
