import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton    } from 'taro-ui'
import classNames from 'classnames'
import {getListScoreRank} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '位次查询'
  }

  constructor(props) {
    super(props)
    this.state = {
      scoreValue:500,
      typeOptions: ['文科', '理科'],
      typeSelected: '文科',
      yearOptions: [2019],
      yearSelected: 2019,
      scoreList:[]
    };
  }
  componentWillMount(){
    this.getScoreRank();
  }
  componentDidMount(){}

  componentWillUnmount () {}
  getScoreRank(){
    let {typeSelected,yearSelected} = this.state;
    getListScoreRank({type: typeSelected,year: yearSelected, province: '河南'}).then(({data})=>{
      this.setState({
        scoreList: data
      });
    });
  }
  componentDidShow () {}

  componentDidHide () {}

  onTypeChange = e => {
    this.setState({
      typeSelected: this.state.typeOptions[e.detail.value]
    },()=>{
      this.getScoreRank();
    });
  }

  onYearChange = e => {
    this.setState({
      yearSelected: this.state.yearOptions[e.detail.value]
    },()=>{
      this.getScoreRank();
    });
  }

  render () {
    let {scoreValue,typeOptions,typeSelected,yearOptions,yearSelected,scoreList} = this.state;
    return (
      <View className ='wccx'>
        <View className='at-row selectN'>
          <View className='at-col at-col-3 selectTop line'>
            <Picker mode='selector' range={yearOptions} onChange={this.onYearChange}>
              <View className='picker'>
                {yearSelected}
                <Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='at-col at-col-3 selectTop line'>
            <Picker mode='selector' range={typeOptions} onChange={this.onTypeChange}>
              <View className='picker'>
                {typeSelected}
                <Text className='at-icon at-icon-chevron-down'></Text>
              </View>
            </Picker>
          </View>
          <View className='at-col at-col-3 selectTop'>
            <Input value={scoreValue} className="scoreIpt" type='text'/><Text className = 'font1'>分</Text>
          </View>
          <View className='at-col at-col-2 selectTop'>
            <AtButton circle type='primary' size='small'>查询</AtButton>
          </View>
        </View>

        <View className='at-row tableTitle'>
          <View className='at-col'>分数</View>
          <View className='at-col'>位次区间</View>
          <View className='at-col'>同分人数</View>
        </View>

        <View className = 'scoreN'>
          {
            scoreList.map((item,index) => {
              return (
                <View className={classNames('at-row','scoreTr',index % 2 == 0?'active':'')} key={index}>
                  <View className='at-col'>{item.score}</View>
                  <View className='at-col'>{item.rank}</View>
                  <View className='at-col selectTop'>{item.num}</View>
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
