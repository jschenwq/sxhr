import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton    } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '位次查询'
  }

  constructor(props) {
    super(props)
    this.state = {
      scoreValue:500,
      selector: ['本科', '专科'],
      selectorChecked: '本科',

      selector1: ['2019', '2018'],
      selectorChecked1: '2019',

      scoreList:[
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},
        {key1:'665-750',key2:'1~14',key3:12},
        {key1:'666',key2:'1~14',key3:2},
        {key1:'665',key2:'1~14',key3:6},

      ]
    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onChange1 = e => {
    this.setState({
      selectorChecked1: this.state.selector1[e.detail.value]
    })
  }

  render () {
    const {scoreList} = this.state
    return (
      <View className ='wccx'>
        <View className='at-row selectN'>
          <View className='at-col at-col-3 selectTop line'>
            <Picker style = 'display:inline-block;line-height:30px' mode='selector' range={this.state.selector1} onChange={this.onChange1}>
              <View className='picker'>
                {this.state.selectorChecked1}
              </View>
              <Text className='at-icon at-icon-chevron-down'></Text>
            </Picker>
          </View>
          <View className='at-col at-col-3 selectTop line'>
            <Picker style = 'display:inline-block;line-height:30px' mode='selector' range={this.state.selector} onChange={this.onChange}>
              <View className='picker'>
                {this.state.selectorChecked}
              </View>
              <Text className='at-icon at-icon-chevron-down'></Text>
            </Picker>
          </View>
          <View className='at-col at-col-3 selectTop'>
            <Input value={this.state.scoreValue} className="scoreIpt" type='text'/><Text className = 'font1'>分</Text>
          </View>
          <View className='at-col at-col-2 selectTop'>
            <AtButton 	circle={true} type='primary' size='small'>查询</AtButton>
          </View>
        </View>

        <View className='at-row tableTitle'>
          <View className='at-col font2'>分数</View>
          <View className='at-col font2'>位次区间</View>
          <View className='at-col font2 selectTop'>同分人数</View>
        </View>

        <View className = 'scoreN'>
          {
            scoreList.map((item,index) => {
              return (
                <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                  <View className='at-col'>{item.key1}</View>
                  <View className='at-col'>{item.key2}</View>
                  <View className='at-col selectTop'>{item.key3}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
