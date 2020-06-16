import Taro, { Component } from '@tarojs/taro'
import {Picker, View} from '@tarojs/components'
import { AtButton, AtIcon} from 'taro-ui'
import {getListAdvance} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '提前批'
  }

  constructor(props) {
    super(props)
    this.state = {
      selector: [2019,2018],//年限选项数据
      selectorChecked: 2019,//年限默认值
      selectorStu: ["普通","艺术"],//考生类别
      selectorStuChecked: "艺术",//考生类别
      province: '河南',
      data: []
    };
  }

  componentDidShow () {
    let {selectorChecked,selectorStuChecked,province} = this.state;
    this.handleQuery(selectorChecked,selectorStuChecked,province);
  }

  onSelectChange=(e)=>{//年限选择器触发事件
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
    let {selectorChecked,selectorStuChecked,province} = this.state;
    this.handleQuery(selectorChecked,this.state.selector[e.detail.value],province);
  }

  onSelectTypeChange=(e)=>{//年限选择器触发事件

    this.setState({
      selectorStuChecked: this.state.selectorStu[e.detail.value]
    });
    let {selectorChecked,selectorStuChecked,province} = this.state;
    this.handleQuery(selectorChecked,this.state.selectorStu[e.detail.value],province);
  }

  handleQuery(selectorChecked,selectorStuChecked,province){//查询

    getListAdvance({year: selectorChecked, province: province,stuType:selectorStuChecked}).then(({data})=>{
      this.setState({
        data: data
      });
    });
  }

  render () {
    let {selector,selectorChecked,selectorStu,selectorStuChecked,province,data} = this.state;
    return (
      <View className='index'>
        <View className='at-row query-panel'>
          <View className="at-col at-col-3">
            <Picker mode='selector' range={selector} onChange={this.onSelectChange}>
              <View style="color:#666;text-align: center;border-right: 1px solid #dfdfdf;">
                <Text>{selectorChecked}</Text>
                <AtIcon value='chevron-down' size='15'></AtIcon>
              </View>
            </Picker>
          </View>
          <View className="at-col at-col-3">
            <Picker mode='selector' range={selectorStu} onChange={this.onSelectTypeChange}>
              <View style="color:#666;text-align: center;border-right: 1px solid #dfdfdf;">
                <Text>{selectorStuChecked}</Text>
                <AtIcon value='chevron-down' size='15'></AtIcon>
              </View>
            </Picker>
          </View>
          <View className='at-col at-col-3' style="padding: 0 5px;">{province}</View>

        </View>
        <View className='at-row table-title'>
          <view style="width:30%">
            <View className="at-col">学校名称</View>
          </view>
          <view style="width:20%">
            <View className="at-col">科类</View>
          </view>
          <view style="width:20%">
            <View className="at-col">专业名称</View>
          </view>
          <view style="width:15%">
            <View className="at-col">人数</View>
          </view>
          <view style="width:15%">
            <View className="at-col">分数线</View>
          </view>

          {/*<View className='at-col'>备注</View>*/}
        </View>
        <View className='table-body'>
          {
            data.map((item)=>{
              return (<View className='at-row at-row--wrap'>
                <view style="width:35%">
                  <View>{item.schoolName}</View>
                </view>
                <view style="width:10%">
                  <View>{item.subType}</View>
                </view>
                <view style="width:28%">
                  <View>{item.majorName}</View>
                </view>
                <view style="width:12%">
                  <View>{item.num}</View>
                </view>
                <view style="width:15%">
                  <View>{item.scoreLine}</View>
                </view>

              </View>);
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
