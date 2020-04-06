import Taro, { Component } from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import { AtIcon , AtButton,AtSearchBar } from 'taro-ui'
import classNames from 'classnames'
import {getListBatchScore} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '批次查询'
  }

  constructor(props) {
    super(props)
    this.state = {
      selector: [2019],//年限选项数据
      selectorChecked: 2019,//年限默认值
      province: '河南',
      data: []
    };
  }
  onSelectChange=(e)=>{//年限选择器触发事件
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  }
  componentWillMount(){
    this.handleQuery();
  }
  handleQuery(){//查询
    let {selectorChecked,province} = this.state;
    getListBatchScore({year: selectorChecked, province: province}).then(({data})=>{
      this.setState({
        data: data
      });
    });
  }
  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    let {selector,selectorChecked,province,data} = this.state;
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
          <View className='at-col at-col-6' style="padding: 0 5px;">{province}</View>
          <View className='at-col at-col-3'>
            <AtButton type='primary' size='small' circle onClick={this.handleQuery.bind(this)}>查询</AtButton>
          </View>
        </View>
        <View className='at-row table-title'>
          <View className='at-col'>批次</View>
          <View className='at-col'>考生类别</View>
          <View className='at-col'>分数线</View>
        </View>
        <View className='table-body'>
          {
            data.map((item)=>{
              return (<View className='at-row at-row--wrap'>
                <View className='at-col'>{item.batch}</View>
                <View className='at-col'>{item.type}</View>
                <View className='at-col'>{item.scoreLine}</View>
              </View>);
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
