import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {getzxsList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '咨询师'
  }

  constructor(props) {
    super(props)
    this.state = {
      stars:4,
      zxsList:[]
    };
  }

  componentDidMount(){
    getzxsList({currentPage:1,pageSize:20}).then(({data}) => {
      this.setState({
        zxsList: data.list
      })
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  //跳转咨询师详情
  gotozxsDetail(id){
    Taro.navigateTo({
      url: '/packageCX/zixunshi/zxsDetail/index?counselorId='+id,
    })
  }

  render () {
    const {zxsList} = this.state;
    return (
      <View className ='zxs'>
        {
          zxsList.length > 0 && zxsList.map((item,index) => {
            return (
              <View key={index} onClick={this.gotozxsDetail.bind(this,item.counselorId)} className={classNames('at-row','itemPerson')}>
                <View className='at-col at-col-3' style='text-align:center'>
                  <Image src={item.headPath} className='counselorImg1' />
                </View>
                <View className='at-col at-col-9'>
                  <View>
                    <Text className='name'>{item.counselorName}</Text>
                  </View>
                  <View className='detailJob'>
                    {
                      item.tag && item.tag.split('、').map((item1,index1) => {
                        return(
                          <Text className ='job' key={index1}>{item1}</Text>
                        )
                      })
                    }
                  </View>
                  <View className='yearAndPj'>
                    <Text className='year'>从业{item.workingYear}年</Text><AtRate className='starts' value={this.state.stars}/>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default Index
