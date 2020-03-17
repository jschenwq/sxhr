import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtModal, AtModalHeader, AtModalContent } from 'taro-ui'
import {getAllList, getSchoolScore, getMajorScore} from '@utils/api'
import classNames from 'classnames'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '分数线'
  }

  constructor(props) {
    super(props)
    this.state = {
      current:0,
      isOpened:false,
      selector: [],
      type: '综合',
      provinceList:[],
      province:'河南',
      yearList:['2019','2018','2017','2016','2015','2014','2013','2012'],
      year:2019,
      majorScore:[],
      schoolScore:[]
    };
  }

  componentDidMount(){
    //获取数据字典
    getAllList().then(({data}) => {
      this.setState({
        selector: data.stuType,
        provinceList:data.province
      })
    });

    //获取学校分数线--参数解构赋值
    getSchoolScore({type:this.state.type,province:this.state.province,schoolId:11736}).then(({data}) => {
      this.setState({
        schoolScore: data,
      })
    })
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleClick (value) {
    this.setState({
      current: value,
    })

    if(value == 0){
      // 获取学校分数线
      getSchoolScore({type:this.state.type,province:this.state.province,schoolId:11736}).then(({data}) => {
        this.setState({
          schoolScore: data,
        })
      })
    }else if(value == 1){
      //获取专业分数线
      getMajorScore({type:this.state.type,province:this.state.province,year:this.state.year,schoolId:11736}).then(({data}) => {
        this.setState({
          majorScore: data.list,
        })
      })
    }else {
      Taro.showToast({
        title: '开发中敬请期待...',
        icon: 'none',
        mask: true,
      });
    }
  }

  onChange = e => {
    this.setState({
      type: this.state.selector[e.detail.value]
    })
    if(this.state.current == 0){
      // 获取学校分数线
      getSchoolScore({type:this.state.selector[e.detail.value],province:this.state.province,schoolId:11736}).then(({data}) => {
        this.setState({
          schoolScore: data,
        })
      })
    }else if(this.state.current == 1){
      //获取专业分数线
      getMajorScore({type:this.state.selector[e.detail.value],province:this.state.province,year:this.state.year,schoolId:11736}).then(({data}) => {
        this.setState({
          majorScore: data.list,
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
      getSchoolScore({type:this.state.type,province:this.state.provinceList[e.detail.value],schoolId:11736}).then(({data}) => {
        this.setState({
          schoolScore: data,
        })
      })
    }else if(this.state.current == 1){
      //获取专业分数线
      getMajorScore({type:this.state.type,province:this.state.provinceList[e.detail.value],year:this.state.year,schoolId:11736}).then(({data}) => {
        this.setState({
          majorScore: data.list,
        })
      })
    }
  };

  onChangeYear = e => {
    this.setState({
      year: this.state.yearList[e.detail.value]
    })

    //获取专业分数线
    getMajorScore({type:this.state.type,province:this.state.province,year:this.state.yearList[e.detail.value],schoolId:11736}).then(({data}) => {
      this.setState({
        majorScore: data.list,
      })
    })
  };

  handleChangeB () {
    this.setState({
      isOpened: true
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const {isOpened, schoolScore, majorScore} = this.state;
    const tabList = [{ title: '院校分数线' }, { title: '专业分数线' }, { title: '招生计划' }];
    return (
      <View className ='fsx'>
        <AtModal onClose={this.onClose.bind(this)} isOpened={isOpened}>
          <AtModalHeader>数据说明</AtModalHeader>
          <AtModalContent>
            <View>
              <View>1.2019年计划已根据6月份出版的《湖北省招生计划》更新；</View>
              <View>2.2019年专业录取相关数据将在考试院公布后及时更新；</View>
              <View>3.201-2019各院校录取数据，参考个省市出版的填报指南以及个本专科院校的官网理念录取数据；</View>
            </View>
          </AtModalContent>
          {/*<AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction>*/}
        </AtModal>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className ='fsxContent'>
              {/*文理科*/}
              <View className ='selectZy'>
                <Picker className ='pickerC' mode='selector' range={this.state.selector} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.type}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>
              {/*省份*/}
              <View className ='selectZy'>
                <Picker className ='pickerC' mode='selector' range={this.state.provinceList} onChange={this.onChangeProvince}>
                  <View className='picker'>
                    {this.state.province}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>

              <Text onClick={this.handleChangeB.bind(this)} className ='sysm'>数据说明</Text>
            </View>

            <View className='at-row tableTitle'>
              <View className='at-col font2 selectTop'>招生批次</View>
              <View className='at-col font2 selectTop'>年份</View>
              <View className='at-col font2 selectTop'>文理科</View>
              <View className='at-col font2 selectTop'>最低分</View>
            </View>

            <View className = 'scoreN'>
              {
                schoolScore.map((item,index) => {
                  return (
                    <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                      <View className='at-col selectTop'>{item.batch}</View>
                      <View className='at-col selectTop'>{item.year}</View>
                      <View className='at-col selectTop'>{item.type}</View>
                      <View className='at-col selectTop'>{item.minScore}</View>
                    </View>
                  )
                })
              }
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.current} index={1}>
            <View className ='fsxContent'>
              {/*文理科*/}
              <View className ='selectZy'>
                <Picker className ='pickerC' mode='selector' range={this.state.selector} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.type}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>
              {/*省份*/}
              <View className ='selectZy'>
                <Picker className ='pickerC' mode='selector' range={this.state.provinceList} onChange={this.onChangeProvince}>
                  <View className='picker'>
                    {this.state.province}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>

              {/*年份*/}
              <View className ='selectZy'>
                <Picker className ='pickerC' mode='selector' range={this.state.yearList} onChange={this.onChangeYear}>
                  <View className='picker'>
                    {this.state.year}
                  </View>
                  <Text className='at-icon at-icon-chevron-down'></Text>
                </Picker>
              </View>

              <Text onClick={this.handleChangeB.bind(this)} className ='sysm'>数据说明</Text>
            </View>

            <View className='at-row tableTitle'>
              <View className='at-col font2 selectTop'>专业名称</View>
              <View className='at-col font2 selectTop'>年份</View>
              <View className='at-col font2 selectTop'>考生类别</View>
              <View className='at-col font2 selectTop'>录取批次</View>
              <View className='at-col font2 selectTop'>最低分</View>
            </View>

            <View className = 'scoreN'>
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

          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
