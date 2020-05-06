import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {getzxsDetail} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '咨询师详情'
  }

  constructor(props) {
    super(props)
    this.state = {
      stars:4,
      detailObj:{}
    };
  }

  componentDidMount(){
    console.log(this.$router.params.counselorId)
    const counselorId = this.$router.params.counselorId;
    getzxsDetail(counselorId).then(({data}) => {
      this.setState({
        detailObj: data
      })

      // Taro.setNavigationBarTitle({
      //   title: data.type
      // });
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  clickServiceCall(){//客服电话
    Taro.makePhoneCall({
      phoneNumber: '037965116985'
    });
  }

  render () {
    const {detailObj} = this.state;
    return (
      <View className = 'zsxDetail'>
        <View className={classNames('at-row','itemPerson')}>
          <View className='at-col at-col-3' style='text-align:center'>
            <Image src={detailObj.headPath} className='counselorImg1' />
          </View>
          <View className='at-col at-col-9'>
            <View>
              <Text className='name'>{detailObj.counselorName}</Text>
            </View>
            <View className='detailJob'>
              {
                detailObj.tag && detailObj.tag.split('、').map((item,index) => {
                  return(
                    <Text className ='job' key={index}>{item}</Text>
                  )
                })
              }
            </View>
            <View  className='yearAndPj'>
              <Text className='year'>从业{detailObj.workingYear}年</Text><AtRate className='starts' value={this.state.stars}/>
            </View>
          </View>
        </View>

        <View className ='introduce'>
          {detailObj.introduce}
        </View>

        <View className ='bottomBtn' onClick={this.clickServiceCall}>
          联系机构
        </View>
      </View>
    )
  }
}

export default Index
